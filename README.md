# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌



Gridsome基础入门 用于生成个人博客等页面 
https://strapi.io/ 用于管理个人博客的后台管理系统









**后端：**

这个是后端接口 可以使用

npx create-strapi-app@3.6.8 my-project --quickstart 别的版本不好用

数据需要从 Draft 状态改为 publish 状态

npx strapi install graphql

然后，在strapi这边查看可向外提供的数据，访问localhost:1337/graphql



**前端：**

查询数据的地址（gridsome）localhost:8080/___explore(前端)







记住：
数据提供：strapi        测试 localhost:1337/graphql
数据读取:  gridsome  测试 localhost:8080/___explore
