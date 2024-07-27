import React, {type ReactNode, useEffect, useState} from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../../@/components/ui/form";
import {Input} from "../../@/components/ui/input";
import {DialogFooter} from "../../@/components/ui/dialog";
import {Button} from "../../@/components/ui/button";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import useSettingConfig from "../../hooks/table/useSettingConfig";
import CloudStat from "../cloud/CloudStat";
import useStat from "../../hooks/useStat";

interface Props {
    children?: ReactNode;
    afterSubmit?: () => void
}
const FormSchema = z.object({
    password: z.string(),
    username: z.string(),
    //     .min(1,{
    //     message: "请输入用户名",
    // }).max(30,{
    //     message: "最多30字符",
    // }),
    host: z.string().url('请输入正确的服务器地址')
})

export default function WebdavForm(props: Props) {
    const {afterSubmit} = props;
    const {mutate} = useStat('webdav')
    const [loading,setLoading] = useState(false)
    const [config,update] = useSettingConfig<z.infer<typeof FormSchema>>('_webdav','secret')
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            password: config?.password || '',
            username: config?.username || '',
            host: config?.host || '',
        }
    })

    useEffect(() => {
        form.reset(config || {})
    }, [config]);

    function onSubmit(data:z.infer<typeof FormSchema>) {
        console.log(data,'data')
        setLoading(true)
        update(data).then(function () {
            setLoading(false)
            mutate();
            afterSubmit && afterSubmit();
        })
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                    <FormField
                        control={form.control}
                        name="host"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    服务器地址
                                </FormLabel>
                                <FormControl>
                                    <Input className={''} placeholder="服务器地址" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({field}) => (
                            <>
                                <FormItem>
                                    <FormLabel>
                                        用户名
                                    </FormLabel>
                                    <FormControl>
                                        <Input className={''} placeholder="用户名" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            </>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    密码
                                </FormLabel>
                                <FormControl>
                                    <div className={'flex justify-between'}>
                                        <Input type={'password'} className={''} placeholder="密码" {...field} />
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className={'text-sm text-muted-foreground'}>
                        此账户、密码信息仅保存在本浏览器，不会上传服务器。其他浏览器需要重新配置。
                    </div>
                    <DialogFooter>
                        <CloudStat type={'webdav'}/>
                        <Button loading={loading} type="submit">保存</Button>
                    </DialogFooter>
                </form>
            </Form>
        </div>
    );
}

