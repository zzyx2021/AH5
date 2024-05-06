<script setup lang="ts">
import { getBannerList } from '@/api/task';
import { taskStore } from '@/store/task';
import { showDialog } from 'vant';
import { onMounted } from 'vue';

const store = taskStore()
const bannerList = async () => {
  const res = await getBannerList({type: 2})
  if(res) {
    store.setBannerList(res.list)
  } else {
    showDialog(res.msg)
  }
}

onMounted(() => {
  if(store.bannerList.length <= 0){
    bannerList()
  }
})
</script>

<template>
  <van-swipe :autoplay="3000" lazy-render :show-indicators="false">
    <van-swipe-item v-for="image in store.bannerList" :key="image.id">
      <a href="image.url" target="_blank" v-if="image.url">
        <img :src="image.picture" />
      </a>
      <img v-else="image.url" :src="image.picture" />
    </van-swipe-item>
  </van-swipe>

</template>

<style scoped>
img {
  width: 100%;
  height: 7.47rem;
  border-radius: 0.5rem;
}
</style>