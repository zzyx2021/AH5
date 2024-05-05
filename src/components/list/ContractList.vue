<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const props = defineProps({
    contractList: {
      type: Array,
      default: <T>() => <T>[]
    }
  })
  const router = useRouter()
  const gotoDetail = (id: number | string) => {
    router.push('/contract/details/' + id)
  }
</script>

<template>
  <dl v-for="(item, index) in props.contractList" :key="index" @click="gotoDetail(index)">
    <dd>
      <h3>1</h3>
      <span>2</span>
      <van-icon name="arrow" />
    </dd>
    <dt>
      <label>3</label>
      <span>4</span>
    </dt>
    <dt>
      <label>5</label>
      <span>6</span>
    </dt>
    <dt>
      <label>7</label>
      <span>8</span>
    </dt>
    <dt>
      <label>9</label>
      <span>10</span>
    </dt>
    <dt class="contract-process">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </dt>
  </dl>
</template>

<style scoped>
dl {
  font-size: 0.64rem;
  color: #666666;
  padding: 1rem 0.7rem;
  border-bottom: 1px solid #eeeeee;
}

dl dd {
  display: flex;
  margin-bottom: 0.9rem;
  align-items: center;
}

dl dd h3 {
  font-size: 0.8rem;
  font-weight: 500;
  color: #333333;
  flex: 1;
}

dl dd span {
  text-align: right;
  font-size: 0.75rem;
  color: #ff9415;
}

dl dd i {
  font-size: 0.75rem;
}

dl dt {
  display: flex;
  margin-bottom: 0.72rem;
}

dl dt:last-child {
  margin-bottom: 0;
}

dl dt label {
  flex: 1;
}

dl dt span {
  text-align: right;
}

.contract-precess {
  display: flex;
  height: 0.53rem;
  width: 100%;
}

.contract-precess i {
  flex: 1;
  background: #f3f3f3;
  margin: 0 1px;
}

.contract-precess i.green {
  background: #50d400;
}

.contract-precess i.orange {
  background: #fe9215;
}

.contract-precess i.green {
  background: #ff4800;
}
</style>
