# vue-tencent-captcha
腾讯防水墙，验证码组件

## usage
 
 ```shell
yarn add vue-tencent-captcha
```

```vue 
import Captcha from '../packages/Captcha.vue';

export default {
  name: 'app',
  data() {
    return {
      show: true,
      appId: 'tt12345',
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
```

```vue
<template v-if="show">
  <Captcha :appId="appId" :callback="captchaCallback" :extraBizParam="extraBizParam">
    <button>单击验证</button>
  </Captcha>
</template>
```

### 属性
| 成员        | 说明            | 类型                | 默认值        |
|------------|-----------------|--------------------|--------------|
| appId      | appId           | String             | 无           |
| callback   | 回调函数 | function           | 无           |
| extraBizParam   | options,  | Object           | null           |

## 配置参数
options提供以下配置参数：

| 配置名        | 值类型           | 说明      | 
|------------|-----------------|--------------------|
| bizState      | Any           | 自定义透传参数，业务可用该字段传递少量数据，该字段的内容会被带入callback回调的对象中 |

```
extraBizParam: {
    bizState: 'hhh'
}
```
## 回调内容
|字段名	|值类型	|说明|
|-----|----|----|
|ret	|Int	|验证结果，0-验证成功，2-用户主动关闭验证码|
|ticket	|String	|验证成功的票据，当且仅当ret=0时ticket有值|
|appid	|String	|场景Id|
|bizState	|Any	|自定义透传参数|
```javascript
// 回调
cb(res) {
  console.log(res);
}
```

### 示例
```html
<tencentCaptcha appid="xxx" :callback="cb" :extraBizParam="extraBizParam">
  单击验证
</tencentCaptcha>
```

### 实例方法
```javascript 1.6
// 隐藏验证码
this.$root.captcha.destroy(); 
// 显示验证码
this.$root.captcha.show();
```
```javascript 1.6
// 获取ticket
this.$root.captcha.getTicket();
```
