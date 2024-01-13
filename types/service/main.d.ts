// 主服务
declare namespace MainService {
    // 基础响应结构
    interface BaseResult<Data = any> {
        // 系统状态
        code: number
        // 系统状态信息
        msg: string
        // data
        result?: Data
        // axios 响应体（与后台响应结构无关）
        $responseBody: import('axios').AxiosResponse<Data>
    }

    // 结果扩展
    type Result<Data = any,Expand = Record<string,unknown>> = BaseResult<Data> & Expand

    // 分页
    interface Pagination {
        // 页数
        page: number
        // 每页数量
        size: number
    }

    // 包装 接口请求分页
    type WrapperPage<Q> = Pagination & Q
}
