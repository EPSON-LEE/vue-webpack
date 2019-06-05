# 这一次，我想慢慢来

*[Medium上的资料](https://medium.com/js-dojo/how-to-configure-webpack-4-with-vuejs-a-complete-guide-209e943c4772)*
*[简书中的资料](https://www.jianshu.com/p/5bdf698c1705)*

- 2019-06-05

## *[什么是vue-loader](https://vue-loader.vuejs.org/zh/)*

vue-loader是webpack中的一个loader，他会将*.vue文件变成*.bundle.js，然后放入浏览器中运行。
简而言之，提供了我们使用.vue这种方式去编写vue组件的能力。

一个单vue文件包含了 template style script 这三个标签。因此vue-loader在将.vue编译输出为bundle.js的过程中也调用了四个小的loader

- selector (内置style-loader)
- style-compiler
- template-compiler
- babel-loader


## *[什么是vue-template-compiler](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler/)*

相信使用过vue进行项目开发过的朋友对此也不陌生，同样，我们简单的说明vue-template-compiler的作用。

```
This package can be used to pre-compile Vue 2.0 templates into render functions to avoid runtime-compilation overhead and CSP restrictions. In most cases you should be using it with vue-loader, you will only need it separately if you are writing build tools with very specific needs.
```

vue-template-compiler会把 Vue 的template模板语法转换为render函数， 避免了运行过程中的编译和CSP(内容安全策略的限制，eg 不能使用new Function() 对表达式求值)。通常情况下会配合vue-loader一起使用。

## *[什么是vue-template-es2015-compiler](https://github.com/vuejs/vue-template-es2015-compiler)*

- 添加了通过Buble编译为render函数对ES2015的支持
- 为了在严格模式下编译，移除了render函数中的with符号，使模板编译的过程更加快速轻便。

## *[babel]()*

```
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
```