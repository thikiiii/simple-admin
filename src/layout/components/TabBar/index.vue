<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import { computed, onMounted, watch } from 'vue'
import useTabBarStore from '@/store/modules/tabBar'
import { useRoute, useRouter } from 'vue-router'

defineOptions({ name: 'TabBar' })

const appStore = useAppStore()
const { header } = appStore
const tabBarStore = useTabBarStore()
const route = useRoute()
const router = useRouter()


// 是否禁用刷新
const isDisabledRefresh = computed(() => route.path !== route.path)

// 是否禁用关闭
const isDisabledClose = computed(() => {
    const tab = tabBarStore.tabs.find(item => item.path === route.path)
    if (!tab) return false
    return Boolean(tab.meta?.affix)
})

// 是否禁用关闭左边
const isDisabledCloseLeft = computed(() => {
    const index = tabBarStore.getIndex(route.path)
    if (index === 0 || index === -1) return true
    return !tabBarStore.tabs.slice(0, index).some(item => !item.meta?.affix)
})

// 是否禁用关闭右边
const isDisabledCloseRight = computed(() => {
    const index = tabBarStore.getIndex(route.path)
    if (index === tabBarStore.tabs.length - 1 || index === -1) return true
    return !tabBarStore.tabs.slice(index).some(item => !item.meta?.affix)
})

// 是否禁用关闭其他
const isDisabledCloseOther = computed(() => {
    return !tabBarStore.tabs.some(item => item.path !== route.path && !item.meta?.affix)
})

// 是否禁用可以关闭全部
const isDisabledCloseAll = computed(() => !tabBarStore.tabs.some(item => !item.meta?.affix))

const dropdownList = [
    {
        icon: 'mdi:restore',
        title: '刷新',
        disabled: isDisabledRefresh,
        handle() {
            tabBarStore.refreshCurrent()
        }
    },
    {
        icon: 'mdi:close',
        title: '关闭',
        disabled: isDisabledClose,
        handle() {
            tabBarStore.closeTab(tabBarStore.tabs[tabBarStore.getIndex(route.path)])
        }
    },
    {
        icon: 'mdi:format-horizontal-align-left',
        title: '关闭左边',
        disabled: isDisabledCloseLeft,
        handle() {
            tabBarStore.closeLeft(route.path)
        }
    },
    {
        icon: 'mdi:format-horizontal-align-right',
        title: '关闭右边',
        disabled: isDisabledCloseRight,
        handle() {
            tabBarStore.closeRight(route.path)
        }
    },
    {
        icon: 'mdi:swap-horizontal',
        title: '关闭其他',
        disabled: isDisabledCloseOther,
        handle() {
            tabBarStore.closeOther(route.path)
        }
    },
    {
        icon: 'mdi:minus',
        title: '关闭全部',
        disabled: isDisabledCloseAll,
        handle() {
            tabBarStore.closeAll()
        }
    }
]

const addTabStore = () => {
    const { meta, path } = route
    tabBarStore.addTab({ meta, path } as Route.RouteRecordRaw)
}

onMounted(() => {
    addTabStore()
})

// 监听路由变化
watch(() => route.path, () => {
    addTabStore()
})

</script>

<template>
  <div class="tabBar" :style="{height:`${header.tabBarHeight}px`}">
    <div class="tabBar-item action">
      <svg-icon size="18" icon="mdi:chevron-left" />
    </div>
    <transition-group name="tab" tag="div" class="tabBar-container">
      <div
          class="tabBar-item"
          v-for="item in tabBarStore.tabs"
          @click="router.push(item.path)"
          :class="route.path === item.path ? 'active' : undefined"
          :key="item.path">
        {{ item.meta?.title }}
        <svg-icon
            @click.stop="tabBarStore.closeTab(item)"
            v-if="!item.meta?.affix"
            size="12"
            class="tabBar-item-clear"
            icon="mdi:close" />
      </div>
    </transition-group>
    <div class="tabBar-item action">
      <svg-icon size="18" icon="mdi:chevron-right" />
    </div>
    <a-dropdown trigger="click" :popup-max-height="false">
      <div class="tabBar-item action">
        <svg-icon size="18" icon="mdi:chevron-down" />
      </div>
      <template #content>
        <a-doption @click="item.handle" :disabled="item.disabled.value" v-for="item in dropdownList" :key="item.title">
          <template #icon>
            <svg-icon :icon="item.icon" />
          </template>
          {{ item.title }}
        </a-doption>
      </template>
    </a-dropdown>
  </div>
</template>

<style lang="less" scoped>
.tabBar {
  width: 100%;
  background: @bg-main;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  &-item {
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: @bg-secondary;
    border-radius: @round-small;
    border: 1px solid @line-shallow;
    user-select: none;
    cursor: pointer;
    height: 30px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .05);
    flex-shrink: 0;
    color: @text-main;
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
      background: @theme-main;
      box-shadow: 5px 5px 5px @theme-shallow;

      .tabBar-item-clear {
        color: white !important;
      }
    }

    &-clear {
      transition: 0.1s;
      margin-right: -5px;
      color: @text-ashing;

      &:hover {
        color: @text-main;
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
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.tab-enter-from,
.tab-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.tab-leave-active {
  position: absolute;
  z-index: 1;
}
</style>
