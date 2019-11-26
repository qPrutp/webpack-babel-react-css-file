```
git clone https://github.com/qPrutp/webpack-babel-react-css-file.git

cd webpack-babel-react-css-file

npm install

// розділення на 3 конфиг файла видає помилку
npm run dev2
npm run build2
```
---
[article: Create a React app from scratch with Webpack and Babel](https://www.sentinelstand.com/article/create-react-app-from-scratch-with-webpack-and-babel)
[git: vedees/webpack-template](https://github.com/vedees/webpack-template)
[video:	&#8661;](https://www.youtube.com/watch?v=QF3EcxymIcc&t=122s)
### add css, scss
work with config/webpack.config.css.js (should merge with config/webpack.config.js)
```
// в одномк конфиг файлі працює ок!
npm run dev
npm run build
```
---
####should add:
[video: Собираем бандл мечты с помощью Webpack / Максим Соснов (N1.RU)&dArr;](https://www.youtube.com/watch?v=4ClK_0fxsVM)
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
 


