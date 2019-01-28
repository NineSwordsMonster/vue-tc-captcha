# vue-tencent-captcha
腾讯防水墙，验证码组件

## usage
 
 ```shell
yarn add vue-tencent-captcha
```

```vue 
import Captcha from 'vue-tencent-captcha'

Vue.use(Captcha);
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


### 示例
```html
<tencentCaptcha appid="xxx" :callback="cb" :extraBizParam="extraBizParam">
  单击验证
</tencentCaptcha>
```

```javascript 1.6
// 隐藏验证码
this.$root.captcha.destroy(); 
// 显示验证码
this.$root.captcha.show();

// 回调
cb(res) {
  console.log(res);
}
```

```javascript 1.6
// 获取ticket
this.$root.captcha.getTicket();
```
