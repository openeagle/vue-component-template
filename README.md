# @openeagle/vue-component-template

## 技术栈

- 运行环境: [nodejs 16](https://nodejs.org/) + [pnpm 6](https://pnpm.io/zh/6.x/)
- 构建工具: [vite](https://vitejs.dev/) + [babel](https://babeljs.io)
- 编程语言: [typescript](http://www.typescriptlang.org) + [less](https://lesscss.org)
- 开发框架: [vue 3](https://vuejs.org) + [jsx](https://github.com/vuejs/babel-plugin-jsx) + [script setup sfc](https://vuejs.org/api/sfc-script-setup.html)

    ps: 源码使用 JSX，示例部分使用 Script Setup SFC

- 开发规范: [husky](https://github.com/typicode/husky) + [conventional commits](https://www.conventionalcommits.org) + [prettier](https://prettier.io/) + [eslint](http://eslint.org/) + [stylelint](https://stylelint.io/)
- 版本管理: [semantic-release](https://semantic-release.gitbook.io/)
- CI & CD: [github action](https://github.com/features/actions)
- 开发工具: [vscode](https://code.visualstudio.com/) + [volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 开发说明

```shell
$ npm install
$ npm run dev
```

## 部署说明

- beta：合并到 beta 分支后会自动发布 beta 版本
- master：合并到 beta 分支后会自动发布正式版本
