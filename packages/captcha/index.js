import Captcha from '../captcha/Captcha.vue';

const captcha = {
  install(Vue) {
    if (captcha.installed) return;
    Vue.component(Captcha.name, Captcha);
  },
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(captcha);
}
export default captcha;
