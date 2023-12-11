// css 主题变量 key
import { ComputedRef, nextTick } from 'vue'
import { setCSSVariable } from '@/utils'
import { GlobalToken } from 'ant-design-vue/es/theme/interface'

// CSS 主题变量的 key
export const CSS_THEME_VARIABLE_KEY = [
    'colorPrimary',
    'colorPrimaryBg',
    'colorPrimaryBgHover',
    'colorPrimaryBorder',
    'colorPrimaryBorderHover',
    'colorPrimaryHover',
    'colorPrimaryActive',
    'colorPrimaryTextHover',
    'colorPrimaryText',
    'colorPrimaryTextActive',
    'colorText',
    'colorTextSecondary',
    'colorTextTertiary',
    'colorTextQuaternary',
    'colorBgContainer',
    'colorBgElevated',
    'colorBgLayout',
    'colorBgSpotlight',
    'colorBgMask',
    'colorBorder',
    'colorBorderSecondary',
    'colorFill',
    'colorFillSecondary',
    'colorFillTertiary',
    'colorFillQuaternary',
    'borderRadius',
    'borderRadiusSM',
    'borderRadiusLG',
    'borderRadiusXS',
    'boxShadow',
    'boxShadowSecondary'
]

// 系统主题色
export const THEME_COLOR = [
    '#6675ff', '#E74C3C', '#8E44AD', '#3498DB', '#16A085', '#2ECC71', '#F1C40F', '#F39C12', '#D35400'
]

// 初始化主题Css变量
export const initializeThemeCSSVariable = async (token: ComputedRef<GlobalToken>) => {
    await nextTick()
    const themeVariable = CSS_THEME_VARIABLE_KEY.reduce((initialThemeVariable, key) => {
        initialThemeVariable[key] = token.value[key]
        return initialThemeVariable
    }, {})
    setCSSVariable(themeVariable)
}
