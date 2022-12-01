import {LightStatus, LightType} from "../pagenote-brush";
import {boxroom} from "../extApi";
import BoxItem = boxroom.BoxItem;

export enum BackupVersion {
    version1 = 1,
    version = 2,
    version3 = 3, // 新增 HTML、files 文件
    version4 = 4, // 不做 encode 处理
}

export enum AnnotationStatus {
    // fixed=1,
    // un_fixed=0,
    SHOW=2,
    HIDE=0,
}

type Target = Step & {
    clientX: number,
    clientY: number,
}

enum AnnotationShowType {
    float=1, // 浮动
    inject=2 // 嵌入式
}

type Step = {
    key?: string // 标记的全局唯一ID
    wid?: string // whats-element id
    session?: string,
    did?: string,
    sortIndex?: number,
    x: number, // 标记在文档中基于 body 的 x轴 位置
    y: number, // 标记在文档中基于 body 的 y轴 位置
    // TODO 使用 wid 全面替换 ID
    id: string, // 标记的元素节点，在文档中唯一标识符，取值参考 whats-element
    tip: string, // 标记的笔记（用户输入）
    /**标记背景色，统一使用十六进制*/
    bg: string,
    isActive: boolean, // 是否为激活状态
    lightStatus: LightStatus // 高亮状态
    annotationStatus: AnnotationStatus,
    annotationShowType: AnnotationShowType,
    lightType?: LightType, // 画笔类型，删除线、高亮
    level?: number, // 高亮层级
    text?: string, // 标记的文本内容
    pre? : string, // 标记的文本内容 上文信息
    suffix?: string, // 标记的文本内容 下文信息
    clientX?: number,
    clientY?: number,
    offsetX?: number, // 批注与高亮元素的相对偏移量
    offsetY?: number, // 批注与高亮元素的相对偏移量
    parentW?: number, // 高亮元素父节点宽度
    lightId?: string, // 每一条标记的唯一 hash id
    images?: any[], // 图片高亮，待支持
    lightBg?: string, // 将废弃
    daskBg?: string, // 将废弃
    isFocusTag?: boolean,
    time?: number,
    createAt?: number, // 创建时间
    updateAt: number, // 修改时间
    score?: number, // 此条笔记重要评分
    originContext?: string, // 原始上下文
    deleted?: boolean // 删除标记
    author?: string // 原始作者
    url?: string
    pageKey?: string
    hash?: string
    v?: number // 数据版本
}

type Position = {
    x:number,
    y:number
}

type PlainData = {
    categories?: string[],// TODO 删除
    snapshots?: string[],
    setting?: any,
    steps: Step[],
}

export enum PAGE_TYPES {
    file= 'file',
    http= 'http'
}

export enum DataVersion {
    version3='3', // 携带有 lastmode etag 字段
    version4='4', // 删除 plainData 中网页信息字段
    version5 = '5', // 迁移至 indexedDB
}

export enum MetaResourceType {
    image='image',
    html='html',
}

export type SnapshotResource = {
    key: string, // 唯一标识符，md5 生成
    url: string, // 可访问的URL 地址，
    thumb?: string, // 缩略图
    pageKey: string
    type: MetaResourceType
    createAt?: number, // 资源创建时间
    updateAt?: number,
    did?: string
}


type WebPageIds = {
    key: string, // 此数据的唯一标识符，一般为 URL，但也可能是hash值
    url: string, // 此条数据绑定的 URL
    urls: string[], // 此条数据绑定的 URL 集合
    pageType: PAGE_TYPES
    did?: string
}
type WebPageTimes = {
    // 数据真实的创建、最后更新时间
    createAt: number,
    updateAt: number,

    mtimeMs?: number, // fileSystem 本地文件最后同步时间 待弃用
    expiredAt?: number, // 时效过期时间

    /**webdav 信息，仅表示文档的相关信息，不能作为数据本身的更新标识 （如笔记是 2021年创建的，但是 2022 年才上传云盘，此时的 lastmod 是2022年）*/
    lastmod?: string // Thu, 19 Nov 2020 08:08:11 GMT ，对应 webdav meta信息中的值
    etag?: string, // 对应 webdav 文件的etag信息，用于比较一致性
    lastSyncTime?: number, // 云盘最后同步时间
    hash?: string,
    visitedAt?: number, // 最后访问时间

    filename?: string, // hash + 自定义导出文件名

}

type WebPageDatas = {
    extVersion?: string, // 使用的插件版本
    plainData?: PlainData,
}

type WebPageSiteInfo = {
    deleted: boolean,
    achieved: boolean,
    icon: string,
    title: string, // 网站标题
    version: DataVersion,
    description: string, // 网站描述
    thumb: string, // 预览缩略图
    cover?: string // 网页封面
    categories?: string[],
    directory?: string, // 存放路径
    customTitle?: string, // 自定义标题
    /**sdk 的设置信息*/
    sdkSetting?: any

    domain: string,
    path: string, // 路由path
}

// 链路信息，记录各个网站之间的联系
type RouteInfo = {
    sessionId?: string
}

export type WebPage = WebPageIds & WebPageTimes & WebPageDatas & WebPageSiteInfo & RouteInfo;

type AllowUpdateKeys = keyof  WebPageDatas | keyof  WebPageSiteInfo | keyof RouteInfo | 'url' | 'urls'

// 数据的存储形式，blob二进制文件或字符串文件
export type FileData = Blob | string
export enum SaveAsTypes {
    'string'='string',
    'blob' ='blob'
}

export enum ContentType {
    png='image/png',
    jpeg='image/jpeg',
    html='text/html',
    text='text/plain',
    css='text/css',
    json='application/json',
    javascript='application/javascript',
}

type BaseFileInfo = {
    localURI: string, // 本地资源URI
    originURI: string, // 资源原始URI地址，如 img 本地持久化的原始URL

    relatedUrl: string, // 资源产生地址
    domain: string, // 域名

    data: FileData, // 数据
    createAt: number,
}

export type ResourceInfo = BaseFileInfo & {
    sourceTag: string, // 资源标签，用于过滤类型，如缩略图 thumb、snapshot、等。
    saveAs: SaveAsTypes // 本地资源存储类型
    contentType: ContentType, // 文件类型
    contentLength?: number, // 资源size
    lastModified?: string,
    ETag?: string,
    [key:string]: any,
}

export enum BackupDataType {
    pages= 'pages',
    box='box',
    resources='resources',
    light='light',
    snapshot = 'snapshot',
}

export type BackupData = {
    backupId: string
    pages?: Partial<WebPage>[],
    lights?: Partial<Step>[],
    box?: Partial<BoxItem>[],
    dataType: BackupDataType[],
    resources?: Partial<ResourceInfo>[],
    snapshots?: Partial<SnapshotResource>[],
    version?: BackupVersion,
    extension_version?: string,
    backup_at?: number,
    size?: number,
    remark?: string
}

export type {
    PlainData,
    Step,
    Position,
    Target,
    AllowUpdateKeys,
}
