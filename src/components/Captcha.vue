<template>
  <div id="Captcha" ref="captcha">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'captcha',
  props: {
    appId: {
      type: String,
      default: '',
    },
  },
  methods: {
    init() {
      this.$root.captcha = new window.TencentCaptcha(this.$refs.captcha, this.appId, (res) => {
        this.$emit('callback', res);
      });
    },
  },
  mounted() {
    if (typeof window.TencentCaptcha !== 'function') {
      const URL = 'https://ssl.captcha.qq.com/TCaptcha.js';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = URL;
      document.body.appendChild(script);
      script.onload = (() => this.init());
    } else {
      this.init();
    }
  },
};
</script>
