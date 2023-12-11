<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import { computed, nextTick, ref, watch } from 'vue'
import useTabBarStore from '@/store/modules/tabBar'
import { useRoute, useRouter } from 'vue-router'
import { useEventListener, useToggle } from '@vueuse/core'

defineOptions({ name: 'TabBar' })

const appStore = useAppStore()
const { header } = appStore
const tabBarStore = useTabBarStore()
const route = useRoute()
const router = useRouter()
// 滚动按钮是否可见
const [ scrollBtnVisible, toggleScrollBtnVisible ] = useToggle()

const tabBarContainer = ref<HTMLElement>()

let timeout: NodeJS.Timeout | null = null

const dropdownList = [
  {
    icon: 'mdi:restore',
    title: '刷新',
    disabled: computed(() => route.path !== route.path),
    handle() {
      tabBarStore.refreshCurrent()
    }
  },
  {
    icon: 'mdi:close',
    title: '关闭',
    disabled: computed(() => {
      const tab = tabBarStore.tabs.find(item => item.path === route.path)
      if (!tab) return false
      return Boolean(tab.meta?.affix)
    }),
    handle() {
      tabBarStore.closeTab(tabBarStore.tabs[tabBarStore.getIndex(route.path)])
    }
  },
  {
    icon: 'mdi:format-horizontal-align-left',
    title: '关闭左边',
    disabled: computed(() => {
      const index = tabBarStore.getIndex(route.path)
      if (index === 0 || index === -1) return true
      return !tabBarStore.tabs.slice(0, index).some(item => !item.meta?.affix)
    }),
    handle() {
      tabBarStore.closeLeft(route.path)
    }
  },
  {
    icon: 'mdi:format-horizontal-align-right',
    title: '关闭右边',
    disabled: computed(() => {
      const index = tabBarStore.getIndex(route.path)
      if (index === tabBarStore.tabs.length - 1 || index === -1) return true
      return !tabBarStore.tabs.slice(index).some(item => !item.meta?.affix)
    }),
    handle() {
      tabBarStore.closeRight(route.path)
    }
  },
  {
    icon: 'mdi:swap-horizontal',
    title: '关闭其他',
    disabled: computed(() => {
      return !tabBarStore.tabs.some(item => item.path !== route.path && !item.meta?.affix)
    }),
    handle() {
      tabBarStore.closeOther(route.path)
    }
  },
  {
    icon: 'mdi:minus',
    title: '关闭全部',
    disabled: computed(() => !tabBarStore.tabs.some(item => !item.meta?.affix)),
    handle() {
      tabBarStore.closeAll()
    }
  }
]

const isScroll = async () => {
  timeout && clearTimeout(timeout)
  await nextTick()
  timeout = setTimeout(() => {
    toggleScrollBtnVisible(tabBarContainer.value ?
        tabBarContainer.value?.scrollWidth > tabBarContainer.value?.clientWidth :
        false)
  }, 100)
}

const toScroll = (direction: 'left' | 'right') => {
  const container = tabBarContainer.value
  if (!container) return
  container.scrollTo({
    left: direction === 'right' ?
        container.clientWidth + container.scrollLeft :
        container.scrollLeft - container.clientWidth,
    behavior: 'smooth'
  })
}

// 滚动到激活的位置
const scrollToActive = async () => {
  const container = tabBarContainer.value
  if (!container) return timeout && clearTimeout(timeout)
  await nextTick()
  timeout && clearTimeout(timeout)
  timeout = setTimeout(() => {
    const index = tabBarStore.getIndex(route.path)
    const child = container.children[index] as HTMLElement
    // TODO: 激活项的滚动位置需要优化
    container.scrollTo({
      left: child?.offsetLeft,
      behavior: 'smooth'
    })
  }, 300)
}


useEventListener('resize', () => {
  isScroll()
})

// 监听路由变化
watch(() => route.path, () => {
  const { meta, name, path, fullPath } = route
  tabBarStore.addTab({ meta, name, path, fullPath })
  scrollToActive()
}, { immediate: true })

watch(tabBarStore.tabs, () => {
  isScroll()
}, { immediate: true })

</script>

<template>
  <div v-if="header.tabBarVisible" :style="{height:`${header.tabBarHeight}px`}" class="tabBar">
    <div v-if="scrollBtnVisible" class="tabBar-item action" @click="toScroll('left')">
      <svg-icon icon="mdi:chevron-left" size="18" />
    </div>
    <div ref="tabBarContainer" class="tabBar-container">
      <transition-group name="tab">
        <div
            v-for="item in tabBarStore.tabs"
            :key="item.path"
            :class="route.path === item.path ? 'active' : undefined"
            class="tabBar-item"
            @click="router.push(item.fullPath)">
          {{ item.meta?.title }}
          <svg-icon
              v-if="!item.meta?.affix"
              class="tabBar-item-clear"
              icon="mdi:close"
              size="12"
              @click.stop="tabBarStore.closeTab(item)" />
        </div>
      </transition-group>
    </div>
    <div v-if="scrollBtnVisible" class="tabBar-item action" @click="toScroll('right')">
      <svg-icon icon="mdi:chevron-right" size="18" />
    </div>
    <a-dropdown trigger="click">
      <div class="tabBar-item action">
        <svg-icon icon="mdi:chevron-down" size="18" />
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item
              v-for="item in dropdownList"
              :key="item.title"
              :disabled="item.disabled.value"
              @click="item.handle">
            <template #icon>
              <svg-icon :icon="item.icon" size="14" />
            </template>
            {{ item.title }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<style lang="less" scoped>
.tabBar {
  width: 100%;
  background: @bg-layout;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  transition: height .2s ease-in-out;

  &-item {
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: @bg-container;
    border-radius: @radius-small;
    border: 1px solid @border-secondary;
    user-select: none;
    cursor: pointer;
    height: 30px;
    box-shadow: @shadow-base;
    flex-shrink: 0;
    color: @text;
    gap: 5px;
    font-size: 14px;
    white-space: nowrap;
    z-index: 10;
    position: relative;

    &.action {
      width: 30px;
      padding: 0;
    }

    &.active {
      color: white;
      background: @primary;
      box-shadow: 5px 5px 5px @primary-bg;

      .tabBar-item-clear {
        color: white !important;
      }
    }

    &-clear {
      transition: 0.1s;
      margin-right: -5px;
      color: @text-tertiary;

      &:hover {
        color: @text;
      }
    }
  }

  &-container {
    flex: 1;
    display: flex;
    gap: 10px;
    overflow: hidden;
    height: 100%;
    align-items: center;
    position: relative;
  }
}

.tab-move, /* 对移动中的元素应用的过渡 */
.tab-enter-active,
.tab-leave-active {
  transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
}

.tab-enter-from,
.tab-leave-to {
  opacity: 0;
  transform: scale(0.01) translate(30px, 0);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.tab-leave-active {
  position: absolute;
  z-index: 1;
}
</style>
