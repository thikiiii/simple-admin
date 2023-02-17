// 页面切换动画  左滑淡出 | 右滑淡出 | 缩放淡入淡出
declare type PageAnimationMode = | 'left-slide-fade' | 'right-slide-fade' | 'zoom-fade'

// 布局模式：侧边 | 混合侧边 | 顶部
declare type LayoutMode = 'Side' | 'MixSide' | 'Top'

// 布局风格 侧边暗黑 | 侧边顶部暗黑 | 侧边顶部明亮
declare type LayoutStyle = 'SideDark' | 'SideTopDark' | 'SideTopLight'

type Option<T> = {
    value: T
    label: string
}

// 布局模式选项
declare type LayoutModeOption = Option<LayoutMode>

// 布局风格选项
declare type LayoutStyleOption = Option<LayoutStyle>

// 布局风格选项
declare type PageAnimationOption = Option<PageAnimationMode>

// 侧边栏
declare interface LayoutSidebar {
    // 是否折叠侧边栏
    isCollapsed: boolean

    // 是否折叠混合侧边栏
    isCollapsedMixed: boolean

    // 是否固定混合侧边栏
    isFixedMixed: boolean

    // 混合侧边栏抽屉是否可见
    mixedDrawerVisible: boolean
}

// 头部
declare interface LayoutHeader {
    // 是否开启面包屑
    breadcrumbVisible: boolean

    // 标签栏可见
    tabBarVisible: boolean

    // 是否固定头部和标签栏
    isFixedHeaderAndTabBar: boolean
}

// 底部
declare interface LayoutFooter {
    // 底部可见
    visible: boolean

    // 固定底部
    isFixed: boolean
}

// 移动端
declare interface LayoutMobile {
    // 移动端触发宽度
    mobileTriggerWidth: number

    // 是否移动端
    isMobile: boolean

    // 移动端 menu 可见
    mobileMenuVisible: boolean
}

declare interface LayoutApp {
    // 主题色
    theme: string

    // 主题模式跟随系统 优先级比 themeMode 大
    themeModeFollowSystem: boolean

    // 主题模式
    isDark: boolean

    // 是否开启页面切换动画
    isPageStartAnimation: boolean

    // 页面动画
    pageAnimationMode: PageAnimationMode

    // 布局模式
    layoutMode: LayoutMode

    // 布局风格
    layoutStyle: LayoutStyle
}

declare interface ElConfig {
    // 全局组件大小
    size: 'large' | 'default' | 'small'

    // button 自动在两个中文字符之间插入空格
    buttonAutoInsertSpace: boolean

    // Message 可同时显示的消息最大数量
    messageMax: Nullable<number>
}

declare interface SettingsStore {
    app: LayoutApp

    // 侧边栏
    sidebar: LayoutSidebar

    // 头部
    header: LayoutHeader

    // 底部
    footer: LayoutFooter

    // 移动端
    mobile: LayoutMobile

    el: ElConfig
}
