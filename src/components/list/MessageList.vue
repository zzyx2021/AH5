<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const props = defineProps({
    messageList: {
      type: Array,
      default: <T>() => <T>[]
    }
  })
  const router = useRouter()
  const gotoDetail = (id: number | string) => {
    router.push('/message/talk/' + id)
  }
</script>

<template>
  <dl v-for="(item, index) in props.messageList" :key="index" @click="gotoDetail(index)">
    <dd>
      <img src="@/assets/img/icon/message-minus-outline.png">
      <span></span>
    </dd>
    <dt>
      <h3>1<span>2</span></h3>
      <p>3</p>
    </dt>
  </dl>
</template>

<style scoped>
dl {
  font-size: 0.64rem;
  color: #666666;
  padding: 0.9rem 0;
  margin: 0 0.67rem;
  border-bottom: 1px solid #eeeeee;
  display: flex;
}

dl dd {
  position: relative;
  margin-right: 0.56rem;
}

dl dd img {
  width: 2.61rem;
  height: 2.61rem;
}

dl dd span {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.32rem;
  height: 0.32rem;
  background: #ff0000;
  border-radius: 50%;
}

dl dt h3 {
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 500;
  color: #333333;
  margin-bottom: 0.43rem;
}

dl dt h3 span {
  float: right;
  color: #999999;
  font-weight: 100;
}

dl dt p {
  font-size: 0.69rem;
  line-height: 0.69rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>