import {generateApi} from "./core";
import {BaseMessageHeader} from "@pagenote/bridge";
import {ExtensionBridge} from "@pagenote/bridge";
import {DEFAULT_TIMEOUT} from "@pagenote/bridge";

let bridge: any;
export const defaultWrapper = function (method: string, targetId: string, clientId: string = 'ext-api') {
    return function (request: any, header: Partial<BaseMessageHeader> = {
        targetClientId: targetId
    }) {
        // bridge 运行时初始化，
        if (!bridge) {
            // 优先使用 extension runtime message; Edge 普通网页也会有 chrome.runtime 对象、故还需要进一步判断 onMessage
            if (globalThis && globalThis.chrome && chrome.runtime && chrome.runtime.onMessage) {
                bridge = new ExtensionBridge(clientId, {
                    asServer: true,
                    isBackground: true,
                    timeout: DEFAULT_TIMEOUT,
                    targetClientId: targetId,
                })
            } else {
                return Promise.reject('not in a extension environment. use web api instead pelase')
            }
        }

        return bridge.requestMessage(method, request, {
            requestNamespace: targetId,// 默认请求 targetId 为命名空间，若一个服务下有多个权限控制，如 get\set 可自定义 header 修改
            ...header,
            targetClientId: targetId,
        })
    }
};

const api = generateApi(defaultWrapper);

export default api
