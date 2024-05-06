import { defineStore } from 'pinia'

export const taskStore = defineStore({
  id: 'task',
  state: () => {
    return {
      cityValue: localStorage.getItem('city') || '北京',
      cityList: [],
      bannerList: [],
      positionList: [],
    }
  },
  actions: {
    setCityValue(value: string) {
      this.cityValue = value
    },
    setCityList(data: any) {
      this.cityList = data
    },
    setBannerList(data: any) {
      this.bannerList = data
    },
    setPositionList(data: any) {
      this.positionList = data
    },
  },
})