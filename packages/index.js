import tencentCaptcha from './Captcha.vue';

const components = {
  tencentCaptcha,
};

const cm = {
  ...components,
};

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(cm).forEach((key) => {
    Vue.component(key, cm[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  // version: process.env.VERSION,
  install,
  ...components,
};

export default API;
