<script lang="ts" setup>
const totalData = [
  {
    title: '访客',
    count: 40509,
    lastWeek: '26%',
    svg: 'FeedbackAudience'
  },
  {
    title: '销售总额',
    count: 40509,
    lastWeek: '26%',
    svg: 'Budget'
  },
  {
    title: '成交额',
    count: 40509,
    lastWeek: '26%',
    svg: 'Investor'
  },
  {
    title: '成交数',
    count: 40509,
    lastWeek: '26%',
    svg: 'SEO'
  }
]
</script>

<template>
  <a-card v-for="item in totalData" :key="item.title" :bordered="false" class="totalCard">
    <div class="totalCard-content">
      <div class="totalCard-content-left">
        <div class="totalCard-content-left-title">{{ item.title }}</div>
        <div class="totalCard-content-left-count">
          <a-statistic animation :value="item.count" :precision="2" />
        </div>
        <div class="totalCard-content-left-percentage">
          上周
          <a-tag size="small">{{ item.lastWeek }}</a-tag>
        </div>
      </div>
      <div class="totalCard-content-right">
        <svg-icon :local-icon="item.svg" size="80%" />
      </div>
    </div>
  </a-card>
</template>

<style lang="less" scoped>
.totalCard {
  overflow: hidden;
  border-radius: 5px;

  &:first-of-type {
    background: @theme-main;
    overflow: hidden;
    .totalCard-content-left{
      color: white;
    }
    :deep(.arco-statistic-content .arco-statistic-value) {
      color: white;
    }
  }

  &-content {
    display: flex;
    height: 120px;
    overflow: hidden;

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      flex-shrink: 0;

      &-title {
        font-weight: bold;
        font-size: 18px;
      }

      &-count {
        font-size: 18px;
        font-weight: bold;
      }

      &-percentage {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: bold;

      }
    }

    &-right {
      width: 50%;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }


}
</style>
