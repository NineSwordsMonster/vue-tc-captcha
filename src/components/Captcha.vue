<template>
  <div ref="captcha" id="TencentCaptcha"
       :data-appid="appId"
       @data-cbfn="callback">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TencentCaptcha',
  props: {
    appId: {
      type: String,
      default: '',
      required: true,
    },
    callback: {
      type: Function,
      default: () => {},
      required: true,
    },
    extraBizParam: {
      type: Object,
      default: null,
      required: false,
    },
  },
  methods: {
    init() {
      const self = this;
      self.$root.captcha = new window.TencentCaptcha(self.$refs.captcha, self.appId, (res) => {
        self.callback(res);
      }, self.extraBizParam);
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
