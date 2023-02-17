
// 移动端处罚宽度
const mobileTriggerWidth = 800

// 初始设置
const initialSettings:SettingsStore = {
    app: {
        theme: '#6675ff',
        themeModeFollowSystem: true,
        // 主题模式
        isDark: false,
        // 是否开启页面切换动画
        isPageStartAnimation: true,
        // 页面动画
        pageAnimationMode: 'zoom-fade',
        // 布局模式
        layoutMode: 'Side',
        // 布局风格
        layoutStyle: 'SideDark'
    } ,
    el: {
        size: 'default',
        buttonAutoInsertSpace: true,
        messageMax: null
    },
    sidebar: {
        // 是否折叠侧边栏
        isCollapsed: false,
        // 是否折叠混合侧边栏
        isCollapsedMixed: false,
        // 是否固定混合侧边栏
        isFixedMixed: false,
        // 混合侧边栏抽屉是否可见
        mixedDrawerVisible: false
    },
    header: {
        // 是否开启面包屑
        breadcrumbVisible: true,
        // 标签栏可见
        tabBarVisible: true,
        // 是否固定头部和标签栏
        isFixedHeaderAndTabBar: true
    },
    footer: {
        // 底部可见
        visible: true,
        // 固定底部
        isFixed: true
    },
    mobile: {
        // 移动端触发宽度
        mobileTriggerWidth: 800,

        // 是否移动端
        isMobile: document.body.offsetWidth <= mobileTriggerWidth,

        // 移动端 menu 可见
        mobileMenuVisible: false
    }
}

export default initialSettings
