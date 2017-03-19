# webpack-vue-ng-
> 此配置为vue环境
>
> 转换Angular需要更改配置
>
> ​	步骤
>
> 1. 将package.json中dependcies改Angular配置
>
> 	2. 将webpack.config.dev.js文件中入口文件配置切换Angular配置
> 	3. 将webpack.config.module.js文件中angular模板加载器打开，关闭vue模板加载器

文件名说明

- webpack.config.dev.js：配置启动入口
- webpack.config.module.js：配置加载器模块
- webpack.config.plugins.js：配置插件模块

下载node_modules配置文件

```
npm i
```

生产环境

```
npm run build
```

开发环境

```
npm run dev
```

