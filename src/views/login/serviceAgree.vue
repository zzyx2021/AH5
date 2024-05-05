<script setup lang="ts">
import { getPolicy } from '@/api/user'
import { showToast } from 'vant'
import { onMounted, reactive } from 'vue'

const state = reactive({
  htmlText: '',
})
const onClickLeft = () => history.back()
const getPolicyChange = async () => {
  const res = await getPolicy({
    id: 17,
  })
  if (res) {
    state.htmlText = res.records[0].content
  } else {
    showToast(res.msg)
  }
  console.log(state.htmlText);
}
onMounted(() => getPolicyChange())
</script>

<template>
  <van-nav-bar
    title="服务协议"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
  />
  <div v-html="state.htmlText" class="text-agree"></div>
</template>

<style scoped>
.text-agree {
  padding: 0.5rem 0.7rem;
}
</style>
