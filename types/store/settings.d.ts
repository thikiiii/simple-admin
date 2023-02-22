// 页面切换动画  左滑淡出 | 右滑淡出 | 缩放淡入淡出
declare type PageAnimationMode = | 'left-slide-fade' | 'right-slide-fade' | 'zoom-fade'

// 布局模式：侧边 | 混合侧边 | 顶部
declare type LayoutMode = 'Side' | 'MixSide' | 'Top'

// 布局风格 侧边暗黑 | 侧边顶部暗黑 | 侧边顶部明亮
declare type LayoutStyle = 'SideDark' | 'SideTopDark' | 'SideTopLight'

// 主题模式
declare type ThemeMode = 'Light' | 'Dark'

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

    // 菜单是否开启手风琴模式
    isMenuAccordion:boolean
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
    // 主题模式跟随系统 优先级比 themeMode 大
    themeModeFollowSystem: boolean

    // 主题模式
    themeMode: ThemeMode

    // 是否开启页面切换动画
    isPageStartAnimation: boolean

    // 页面动画
    pageAnimationMode: PageAnimationMode

    // 布局模式
    layoutMode: LayoutMode

    // 布局风格
    layoutStyle: LayoutStyle
}

declare interface arcoConfig {
    // 全局组件大小
    size: 'mini' | 'small' | 'medium' | 'large'
}

declare interface AppStore {
    base: LayoutApp

    // 侧边栏
    sidebar: LayoutSidebar

    // 头部
    header: LayoutHeader

    // 底部
    footer: LayoutFooter

    // 移动端
    mobile: LayoutMobile

    arco: arcoConfig
}
