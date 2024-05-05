<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps({
  talentList: {
    type: Array,
    default: <T>() => <T>[],
  },
})
const router = useRouter()
const gotoDetail = (id: number | string) => {
  router.push('/talent/details/' + id)
}
</script>

<template>
  <div
    v-for="(item, index) in props.talentList"
    :key="index"
    @click="gotoDetail(index)">
    <div class="talent-item-top">
      <div class="talent-item-pic">
        <img src="@/assets/img/icon/message-minus-outline.png" alt="" />
      </div>
      <div class="talent-item-cont">
        <h3>
          1<span class="orange">2</span><span class="green">3</span
          ><span class="blue">4</span>
        </h3>
        <p>5</p>
        <dl>
          <dt>6</dt>
          <dt>7</dt>
          <dt>8</dt>
        </dl>
      </div>
    </div>
    <div class="talent-item-bottom">
      <label>9</label>
      <span><van-icon name="location-o" />10</span>
    </div>
  </div>
</template>

<style scoped>
.talent-item {
  margin: 0 0.64rem 0.53rem;
  padding: 0.77rem 0.64rem 0;
  background: #ffffff;
  border-radius: 0.53rem;
  font-size: 0.69rem;
}

.talent-item-top {
  display: flex;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f5f5f5;
}

.talent-item-pic {
  width: 4rem;
  height: 4rem;
  border-radius: 0.27rem;
  overflow: hidden;
  margin-right: 0.85rem;
}

.talent-item-pic img {
  width: 100%;
  height: 100%;
}

.talent-item-cont h3 {
  font-size: 0.91rem;
  font-weight: 400;
  color: #333333;
  display: flex;
  align-items: center;
  margin-bottom: 0.64rem;
}

.talent-item-cont h3 span {
  width: 1.97rem;
  height: 0.85rem;
  line-height: 0.85rem;
  border-radius: 0.53rem;
  font-size: 0.59rem;
  font-weight: 300;
  color: #ffffff;
  margin-left: 0.2rem;
  text-align: center;
  padding: 0.1rem 0;
}

.talent-item-cont h3 span.orange {
  background: linear-gradient(90deg, #fea829, #fe8f27);
}

.talent-item-cont h3 span.green {
  background: linear-gradient(90deg, #55edb9, #52dea4);
}

.talent-item-cont h3 span.blue {
  background: linear-gradient(90deg, #42c3e8, #249af6);
}

.talent-item-cont p {
  font-size: 0.69rem;
  line-height: 0.69rem;
  font-weight: 100;
  color: #666666;
  margin-bottom: 0.56rem;
}

dl {
  display: flex;
}

dl dt {
  padding: 0.3rem 0.5rem;
  font-size: 0.59rem;
  line-height: 0.59rem;
  font-weight: 300;
  color: #666666;
  margin-right: 0.27rem;
  background: #f6f7f8;
  border-radius: 0.16rem;
}

.talent-item-bottom {
  display: flex;
  padding: 0.72rem 0 0.72rem;
}

.talent-item-bottom label {
  flex: 1;
}

.talent-item-bottom span {
  text-align: right;
}

.talent-item-bottom i {
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 0.1rem;
}
</style>
