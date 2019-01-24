<template>
  <div id="app">
    <template v-if="show">
      <Captcha :appId="appId" :callback="captchaCallback" :extraBizParam="extraBizParam">
        <button>单击验证</button>
      </Captcha>
    </template>
  </div>
</template>

<script>
import Captcha from '@/components/Captcha.vue';

export default {
  name: 'app',
  data() {
    return {
      show: true,
      appId: '',
      extraBizParam: {
        bizState: 'hhhhh',
      },
    };
  },
  components: {
    Captcha,
  },
  mounted() {
    setTimeout(() => {
      // this.$root.captcha.show();
    }, 5000);
  },
  watch: {
    show(newVal) {
      if (!newVal) {
        this.$root.captcha.destroy();
      }
    },
  },
  methods: {
    captchaCallback(res) {
      console.log(res);
    },
  },
};
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
