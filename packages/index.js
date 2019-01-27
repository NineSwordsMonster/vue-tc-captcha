import Captcha from './Captcha.vue';

const install = (Vue) => {
  if (install.installed) return;
  Vue.component(Captcha.name, Captcha);
};
Captcha.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Captcha);
}

export default Captcha;
