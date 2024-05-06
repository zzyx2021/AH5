<script setup lang="ts">
import { getPositionList } from '@/api/task'
import { taskStore } from '@/store/task'
import { showToast } from 'vant'
import { inject, onMounted, ref } from 'vue'

const { closePositionType } = inject('showPopRight')

const typeKey = ref(0)
const leftBack = () => closePositionType()
const store = taskStore()
const positionList = async () => {
  const res = await getPositionList()
  if (res) {
    store.setPositionList(res)
  } else {
    showToast(res.msg)
  }
}
onMounted(() => {
  if (store.positionList.length <= 0) {
    positionList()
  }
})
const changeTypeKey = (index) => {
  typeKey.value = index
}
</script>

<template>
  <van-nav-bar title="职位类型" left-arrow @click-left="leftBack" />
  <div class="position-type">
    <div class="position-type-left">
      <h5 v-for="(item, index) in store.positionList"
        :key="item.id"
        :class="typeKey == index ? 'active' : ''"
        @click="changeTypeKey(index)">{{item.name}}</h5>
    </div>
    <div class="position-type-right">
      <span
        v-for="item in store.positionList[typeKey]?.children"
        :key="item.id"
        @click="closePositionType(item.name)"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.position-type {
  display: flex;
}

.position-type-left {
  width: 4.77rem;
  height: calc(100vh - 46px);
  background: #f6f6f6
}

.position-type-left h5 {
  width: 4.77rem;
  height: 2.4rem;
  line-height: 2.4rem;
  background: #f6f6f6;
  border-bottom: 1px solid #ffffff;
  font-size: 0.75rem;
  font-weight: 300;
  color: #333333;
  text-align: center;
}

.position-type-left h5.active {
  background: #efefef;
}

.position-type-right {
  padding: 0.8rem 0 0 0.6rem;
}

.position-type-right span {
  width: 6.61rem;
  height: 2.03rem;
  line-height: 2.03rem;
  background: #ffffff;
  border: 1px solid #e9e9e9;
  border-radius: 0.11rem;
  font-size: 0.75rem;
  font-weight: 300;
  color: #666666;
  text-align: center;
  margin-right: 0.59rem;
  margin-bottom: 0.64rem;
  display: inline-block;
}

.position-type-right span:nth-child(2n) {
  margin-right: 0px;
}
</style>
