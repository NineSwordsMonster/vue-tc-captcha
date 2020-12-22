import tencentCaptcha from './Captcha.vue';

const components = {
  tencentCaptcha,
};

const cm = {
  ...components,
};

export default {
  install: (app) => {
    Object.keys(cm).forEach((key) => {
      app.component(key, cm[key]);
    });
  },
};
