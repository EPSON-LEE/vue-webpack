## *[vue版本和vue-template-compiler版本不一致的前因后果](https://github.com/vuejs/vue-loader/pull/1123#pullrequestreview-88420554)*

vue-loader中集成了vue-template-compiler,并且作为vue-loader的devDependencies,但在vue-loader中却不是必须的出自 *[issues-1](https://github.com/vuejs/vue-loader/pull/1123#pullrequestreview-88420554)*
在一个项目中，vue必须和vue-template-compiler的版本保持一致。同时vue-loader作为一个项目的devDependencies又不是必须的，所以会出现当一个项目中的vue更新时vue-template-compiler需要更新，但是vue-loader却不用的情况。