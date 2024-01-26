import AntDesignIconJson from '@iconify/json/json/ant-design.json'
import GoogleIconJson from '@iconify/json/json/ic.json'
import { addCollection } from '@iconify/vue'

// iconify 图标集
export const ICONIFY_COLLECTION = [
    // 阿里图标
    AntDesignIconJson,
    // 谷歌图标
    GoogleIconJson
]

// 将图标集添加到组件的图标存储中
ICONIFY_COLLECTION.forEach(item => addCollection(item))
