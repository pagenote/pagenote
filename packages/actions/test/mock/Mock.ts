import {TableActionProps} from "../../src/actions/table";
import MockDatabase from "./MockDatabase";
import handlebars from "../../src/actions/handlebars";
import {IAction} from "../../src/typing/IAction";
import {fetch, format, pickData} from "../../src";

const database = new MockDatabase();
const MockTableAction = function (args: TableActionProps) {
    const { method,params,table } = args
    //@ts-ignore
    return database.getTable(table)[method](params)
}
export function MockRegisterAction(id:string) {
    const actionMap: Record<string, IAction> = {
        'pagenote/fetch@v1': fetch,
        'pagenote/format@v1': format,
        'pagenote/pick@v1': pickData,
        'pagenote/table@v1': MockTableAction,
        'pagenote/handlebars@v1': handlebars,
    }

    const actionFun = actionMap[id];
    return Promise.resolve(actionFun);
}

export function MockEnv(keys: string[]) {
    return Promise.resolve({
        obsidian:{
            token: '9e00b736cc3f573c623ffef1c1900bc0718643ae9bca6d84194ea4c7bf40c95b',
            host: 'http://127.0.0.1:27123'
        },
        keys: keys
    })
}
