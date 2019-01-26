import captcha from './src/Captcha.vue';

captcha.install = (Vue) => {
  Vue.component(captcha.name, captcha);
};
export default captcha;
