## _[vue 版本和 vue-template-compiler 版本不一致的前因后果](https://github.com/vuejs/vue-loader/pull/1123#pullrequestreview-88420554)_

vue-loader 中集成了 vue-template-compiler,并且作为 vue-loader 的 devDependencies,但在 vue-loader 中却不是必须的出自 _[issues-1](https://github.com/vuejs/vue-loader/pull/1123#pullrequestreview-88420554)_
在一个项目中，vue 必须和 vue-template-compiler 的版本保持一致。同时 vue-loader 作为一个项目的 devDependencies 又不是必须的，所以会出现当一个项目中的 vue 更新时 vue-template-compiler 需要更新，但是 vue-loader 却不用的情况。
