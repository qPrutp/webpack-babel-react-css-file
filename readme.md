```
git clone https://github.com/qPrutp/webpack-babel-react-css-file.git

cd webpack-babel-react-css-file

npm install

// при dev розробці до <npm run build> видає помилку  http://localhost:3000/assets/img/img1.jpg 404 (Not Found)
// оскільки ./dist відсутня.
// якщо картинка вставляється через css відпрацьовує ок
npm run dev

// webpack.base.conf.js publicPath може мати два значення '/' для абсолютного шляху в зборці та './' відносного шляху до імтортованих файлів js та css в index.html.
// якщо є зображення в index.html потрібно поставити відносний шлях в src="./assets/img/..." відповідного елементую
npm run build
```
#### мета:
1. добавити відносний шлях в src/scss/utils/vars.scss $baseUrl: './';".
2. імплементувати пакети з [should add](#should_add):.
#### питання:
1. Не можливо змінити baseUrl для сцсс на відносний. Збирається проект лише з $baseUrl: '/'; 
2. favicon.ico, як краще підключати до index.html.
3. не можливо використовувати асинк @babel/plugin-transform-runtime не вирішує проблеми.
4. щоб була можливість використовувати стрілочку функцію та змінні в класі оголошувати на пряму в стейт без конструктора прийшлось ставити @babel/plugin-syntax-dynamic-import, @babel/plugin-proposal-class-properties.
---
#### <a name="should_add"></a> should add:
[video: <b>&dArr;</b> Собираем бандл мечты с помощью Webpack / Максим Соснов (N1.RU)](https://www.youtube.com/watch?v=4ClK_0fxsVM)
 - tree shaking and uglifyJS;
 - SplitChanksPlugin;
 - runtimeChunk; &darr;
    ```js
    optimization: {
        runtimeChunk: true
    }
    ```
 - HashedModuleldsPlugin; &darr;
   ```js
   new webpack.HashedModuleldsPlugin({
       hashFunction: 'md4',
       hashDigest: 'base64',
       hashDigestLength: 8,
   }),
   ```
- babel-loader включити кешування зборки;
---
### література
[https://webpack.js.org/](https://webpack.js.org/)<br />
[article: Create a React app from scratch with Webpack and Babel](https://www.sentinelstand.com/article/create-react-app-from-scratch-with-webpack-and-babel)<br />

[git: vedees/webpack-template](https://github.com/vedees/webpack-template)<br />
[video 1: <b>&#8657;</b> Настройка Webpack 4 шаблона. Установка Babel 7 и webpack dev server. Настройка js на примере vue](https://www.youtube.com/watch?v=JcKRovPhGo8)<br />
[video 2: <b>&#8657;</b> Полная настройка Webpack 4 препроцессоров. Sass, настройка post css плагинов, минификация стилей.](https://www.youtube.com/watch?v=qqTIqwQX8nc)<br />
[video 3: <b>&#8657;</b> Самое важное по WEBPACK 4 - обработка картинок и html. Webpack-merge. Обработка статических файлов](https://www.youtube.com/watch?v=QF3EcxymIcc&t=122s)
