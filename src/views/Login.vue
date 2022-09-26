<template>
  <div class="login-page">
    <div class="form">
      <div>
        <p>WELCOME</p>
        <form  @submit="sendForm">
        <input class="login-input" v-model="login" placeholder="Login">
        <input type="password" class="login-pass" v-model="password" placeholder="Password">
        <button style="margin-bottom: 20px" @click="sendForm">LOGIN</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {keyCookie, serverUrl} from "@/vue.config";
import { toastController } from '@ionic/vue';
import router from "@/router";
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

export default {
  name: 'Login',
  data: function () {
    return {
      login: '',
      password: '',
      isAuth: ''
    }
  },
  methods: {
    sendForm(e) {
      e.preventDefault();
      axios.post(serverUrl + 'auth', {
            username: this.login,
            password: this.password
          },
          {
            headers:{
              'Accept':'*/*'
            },
          }
      ).then((res) => {
        console.log(res)
        if (res.request.status == 201 || res.request.status == 200) {
          this.$cookies.set('token', res.data.token)
          this.$cookies.set('userId', res.data.userId)
          router.push({name:"Projects"})
        } else {
          this.showToast ('error')
        }
      }).catch(()=>  this.showToast ('error'))
    },
    async showToast (message){
      const toast = await toastController
          .create({
            message: message,
            duration: 5000,
            position: 'top',
            color: "danger",
            "css-class": "noty"
          })
      await toast.present();
    }
  },
  mounted: function () {
    if(this.isAuth){
      this.$router.push('/dashboard/projects')
    }
  }
}
</script>

<style scoped>

.login-page {
  width: 100%;
  height: 100vh;
  background: rgb(255, 230, 196);
  background-size: cover;
  position: relative;
}

.login-page p {
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0 auto 15px auto;
}

.form {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 600px;
  height: 400px;
  background: rgba(255, 255, 255, 0.85);
  color: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-align: center;
}

.form div {
  width: 100%;
}

.login-input, .login-pass {
  display: block;
  width: 90%;
  height: 35px;
  background: #fff;
  border-radius: 10px;
  outline: none;
  border: 1px solid #d2d2d2;
  padding: 5px 10px;
  margin: 0 auto 15px auto;
}

.form button {
  width: 200px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background: #A779A8;
  color: #fff;
  font-weight: 500;
}

@media (max-width: 700px) {
  .form {
    width: 100%
  }
}

</style>
