<script setup lang="ts">
import { getCityList } from '@/api/task'
import { taskStore } from '@/store/task'
import { showToast } from 'vant'
import { inject, onMounted } from 'vue'

const { closeCitySwitch } = inject('showPopRight')

const leftBack = () => closeCitySwitch()
const store = taskStore()
const cityList = async () => {
  const res = await getCityList()
  if (res) {
    store.setCityList(res)
  } else {
    showToast(res.msg)
  }
}
onMounted(() => {
  if (store.cityList.length <= 0) {
    cityList()
  }
})
</script>

<template>
  <van-nav-bar title="城市切换" left-arrow @click-left="leftBack" />
  <div class="city-switch">
    <h3>当前城市:</h3>
    <div class="city-switch-text">
      <span>{{store.cityValue}}</span>
    </div>
    <h3>切换城市:</h3>
    <div class="city-switch-text">
      <span
        v-for="item in store.cityList"
        :key="item.id"
        @click="closeCitySwitch(item.name)"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.city-switch {
  padding: 0 0.7rem;
}

.city-switch h3 {
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 500;
  color: #000000;
  margin: 0.7rem 0 0.96rem;
}

.city-switch-text span {
  width: 4.01rem;
  height: 1.6rem;
  line-height: 1.6rem;
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 0.11rem;
  font-size: 0.64rem;
  text-align: center;
  font-weight: 400;
  color: #333333;
  margin: 0 0.7rem 0.8rem 0;
  display: inline-block;
}

.city-switch-text span:nth-child(4n) {
  margin-right: 0;
}
</style>
