// 正则工具类
class RegularUtils {
    // 匹配全局数字
    static MATCH_GLOBAL_DIGITS = /^\d+$/g

    // 匹配全局非数字
    static MATCH_GLOBAL_NON_DIGITS = /\D+/g

    // 匹配URL
    static MATCH_URL = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/

    // 提取数字
    static extractNumbers = (str: string) => Number(str.replace(this.MATCH_GLOBAL_NON_DIGITS,''))
}

export default RegularUtils
