<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getCode, login } from '@/api/user'
import { userStore } from '@/store/user'
import { showConfirmDialog, showToast } from 'vant'

const store = userStore()
const router = useRouter()
const state = reactive({
  checked: true,
  accounts: '',
  code: '',
  codeText: '获取验证码',
  time: 60,
  interTimeCode: null,
})

const clickLeft = () => history.back()
const getCodeChange = async () => {
  if (state.interTimeCode) return

  const res = await getCode({
    accounts: state.accounts,
  })
  if (res) {
    state.interTimeCode = setInterval(() => {
      state.time--
      if (state.time <= 0) {
        clearInterval(state.interTimeCode)
        state.time = 60
        state.codeText = '获取验证码'
      } else {
        state.codeText = '重新发送(' + state.time + 's)'
      }
    }, 1000)
  }
  state.code = res.code
}

const loginSubmit = async () => {
  if (!state.code) {
    showToast('请输入验证码')
    return
  }

  if (!state.checked) {
    showConfirmDialog({
      message: '请确定已阅读服务协议和隐私政策',
    })
      .then(() => {
        state.checked = true
      })
      .catch(() => {
        // on cancel
      })
  }

  console.log(state.accounts);
  const res = await login({
    accounts: state.accounts,
    code: state.code
  })
  console.log(res);

  if(res.errCode == 200) {
    //登录成功后需要把返回的数据存到store
    store.setUserInfo(res?.data)
    if(store.role == '1' || store.role == '3') {
      router.push('./task')
    }
    if(store.role == '2') {
      router.push('./talent')
    }
  } else {
    showToast(res.msg)
  }
}
</script>

<template>
  <div>
    <van-icon class="icon-left" name="arrow-left" @click="clickLeft"/>
    <div class="login-form">
      <h3>验证码登录</h3>
      <div class="login-form-item">
        <i class="icon-phone"></i>
        <input
          placeholder="请输入手机号13321178501"
          v-model="state.accounts"
          type="text" />
      </div>
      <div class="login-form-item">
        <i class="icon-code"></i>
        <input placeholder="请输入验证码" v-model="state.code" type="text" />
        <span @click="getCodeChange">{{ state.codeText }}</span>
      </div>
      <van-button type="primary" block @click="loginSubmit">登录</van-button>
      <div class="login-form-label">
        <van-checkbox v-model="state.checked">我已阅读</van-checkbox>
        <router-link to="/login/serviceAgree">IT企业平台服务协议</router-link>和
        <router-link to="/login/privacyPolicy">隐私政策</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-left {
  font-size: 0.8rem;
  margin: 0.67rem 0 0 0.67rem;
}

.login-form {
  padding: 0 1.07rem;
}

.login-form h3 {
  font-size: 1.39rem;
  line-height: 1.39rem;
  font-weight: 400;
  color: #333333;
  margin-top: 2.35rem;
  margin-bottom: 4rem;
  padding-left: 0.3rem;
}

.login-form-item {
  display: flex;
  font-size: 0.75rem;
  font-weight: 300;
  color: #9fa7ad;
  margin: 0 0.18rem 2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e7e7e7;
  align-items: center;
}

.icon-phone {
  background: url('@/assets/img/icon/cellphone.png') no-repeat;
  background-size: 100%;
  width: 1.01rem;
  height: 1.01rem;
}

.icon-code {
  background: url('@/assets/img/icon/lock-outline.png') no-repeat;
  background-size: 100%;
  width: 1.01rem;
  height: 1.01rem;
}

.login-form-item input {
  flex: 1;
  margin-left: 0.48rem;
}

.login-form-item span {
  font-size: 0.75rem;
  font-weight: 300;
  color: #fe9527;
  border-left: 1px solid #fe9527;
  line-height: 0.75rem;
  padding-left: 0.56rem;
}

.login-form-label {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
}
</style>
