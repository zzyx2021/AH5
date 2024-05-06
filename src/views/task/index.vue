<script setup lang="ts">
import { provide, reactive, ref } from 'vue'
import FooterTabbar from '@/components/FooterTabbar.vue'
import TaskList from '@/components/list/TaskList.vue'
import CitySwitch from './components/CitySwitch.vue';
import Banner from './components/Banner.vue';
import { taskStore } from '@/store/task';
import PositionType from './components/PositionType.vue';
const store = taskStore()
const taskList = reactive([{ id: 1 }, { id: 2 }])
const citySwitchShowRight = ref(false)
const positionTypeShowRight = ref(false)
const positionValue = ref('职位类型')

const closeCitySwitch = (name: string) => {
  if(name) {
    store.setCityValue(name)
  }
  citySwitchShowRight.value = false
}

const closePositionType = (name: string) => {
  if(name) {
    positionValue.value = name
  }
  positionTypeShowRight.value = false
}
provide('showPopRight',{
  closeCitySwitch,
  closePositionType
})
</script>

<template>
  <div class="task-page">
    <!-- Top navigation bar -->
    <div class="task-top">
      <div class="task-top-city" @click="citySwitchShowRight = true">
        <i></i>
        <strong>{{store.cityValue}}</strong>
        <span></span>
      </div>
      <input type="text" readonly placeholder="请输入你想要搜索的内容" />
      <router-link
        to="/message/systemList"
        class="task-icon-message"></router-link>
    </div>

    <!-- swipe -->
    <Banner />

    <div class="task-title">
      <h3>最新任务</h3>
      <div class="task-position-pop" @click="positionTypeShowRight = true">{{positionValue}}<span></span></div>
      <div class="task-screen-pop">筛选<span></span></div>
    </div>

    <TaskList :taskList="taskList" />

    <!-- switch city popup -->
    <van-popup
      v-model:show="citySwitchShowRight"
      position="right"
      duration="0"
      :style="{ width: '100%', height: '100%' }">
      <CitySwitch />
    </van-popup>

    <!-- switch job position popup -->
    <van-popup
      v-model:show="positionTypeShowRight"
      position="right"
      duration="0"
      :style="{ width: '100%', height: '100%' }">
      <PositionType />
    </van-popup>
  </div>
  <FooterTabbar />
</template>

<style scoped>
.task-page {
  background: #f9f9f9;
  padding: 0 0.59rem 3rem;
  min-height: calc(100vh - 3rem);
}

.task-top {
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.91rem;
}

.task-top-city {
  display: flex;
  align-items: center;
}

.task-top-city i {
  width: 1.04rem;
  height: 1.01rem;
  background: url('@/assets/img/icon/map-marker-outline.png') no-repeat;
  background-size: 100%;
}

.task-top-city strong {
  font-size: 0.8rem;
  font-weight: 500;
  color: #333333;
  margin-left: 0.1rem;
}

.task-top-city span {
  margin: 0 0.6rem 0 0.2rem;
  display: inline-block;
  border-left: 0.18rem solid transparent;
  border-right: 0.18rem solid transparent;
  border-top: 0.36rem solid #333333;
}

.task-top input {
  flex: 1;
  height: 1.71rem;
  background: #ffffff url('@/assets/img/icon/magnify.png') 0.35rem 0.3rem
    no-repeat;
  background-size: 7%;
  border: 0.03px solid #ededed;
  border-radius: 0.85rem;
  font-size: 0.69rem;
  font-weight: 300;
  color: #999999;
  padding-left: 1.7rem;
}

.task-icon-message {
  width: 1.31rem;
  height: 1.28rem;
  background: url('@/assets/img/icon/chat-alert-outline.png') no-repeat;
  background-size: 100%;
  margin-left: 0.27rem;
}

.task-title {
  display: flex;
  align-items: center;
  margin-bottom: 0.67rem;
  margin-top: 1.44rem;
}

.task-title h3 {
  flex: 1;
  font-size: 0.96rem;
  line-height: 0.96rem;
  font-weight: bold;
  color: #333333;
}

.task-position-pop,
.task-screen-pop {
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 300;
  color: #666666;
  margin-left: 0.56rem;
}

.task-position-pop span,
.task-screen-pop span {
  display: inline-block;
  border-left: 0.18rem solid transparent;
  border-right: 0.18rem solid transparent;
  border-top: 0.36rem solid #333333;
  margin-left: 0.25rem;
}
</style>
