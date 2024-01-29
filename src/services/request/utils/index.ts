import { AxiosError } from 'axios'
import RegularUtils from '@/utils/regular'
import ServicesConfig from '@/config/services'
import { message } from 'ant-design-vue'

// 用来解决重复错误提示
let lastMessage: string | undefined = undefined

// 解决重复错误提示
export const handleRepeatErrorMessage = (messageContent: string) => {
    if (messageContent === lastMessage && ServicesConfig.CLOSE_REPEAT_ERROR_MESSAGE) return
    message.error({ content: messageContent,onClose: () => lastMessage = undefined })
    lastMessage = messageContent
}

// 处理拦截器错误
export const handleInterceptorError = (axiosError: AxiosError) => {
    // 提取Code
    const code = RegularUtils.extractNumbers(axiosError.message)
    let message = ServicesConfig.ERROR_STATUS_CODE.get(code)
    if (message) return handleRepeatErrorMessage(message)

    ServicesConfig.INTERCEPTOR_ERROR_MESSAGE.forEach((value,key) => {
        if (axiosError.message.includes(key)) message = value
    })

    message && handleRepeatErrorMessage(message)
}
