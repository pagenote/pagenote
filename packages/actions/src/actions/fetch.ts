interface Props {
    url: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    headers?: {
        Accept?:  string,
        'content-type'?: string,
    } & Record<string, string>,
    body?: any,
}

interface Output extends Response{
    /**基于场景的返回数据封装**/
    _response?: string | Blob | Object | any
    _status?: number,
    /**返回的 headers 无法直接通过 key 值获取，故这里封装一下*/
    _headers: Record<string, string>,
}

function run(args: Props):Promise<Output> {
    return fetch(args.url,{
        method: args.method,
        headers: args.headers,
        body: args.body,
    }).then(async function (response) {
        // @ts-ignore
        const res: Output = response.clone();
        res._status = res.status;
        const contentType = res.headers.get('Content-Type') || res.headers.get('content-type') || '';
        if(/text|html/.test(contentType)){
            res._response = await res.text();
        } else if(/image/.test(contentType)){
            res._response = await res.blob()
        } else if(/json/.test(contentType)){
            res._response = await res.json()
        } else{
            res._response = res.body;
        }
        res._headers = {} as Record<string,string>;
        res.headers.forEach((value,key)=>{
            //@ts-ignore
            res._headers[key.toLowerCase()] = value;
        })

        return res;
    }).catch(function (reason) {
        throw reason;
    })
}


export default run
