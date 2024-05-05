<template>
  <svg-icon type="mdi" :path="path" :style="customStyle"></svg-icon>
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCalendarCheckOutline } from '@mdi/js';
import { defineProps } from 'vue';

const props = defineProps({
  customStyle: Object
});
// 使用 ref 创建响应式引用
const path = ref(mdiCalendarCheckOutline);
</script>