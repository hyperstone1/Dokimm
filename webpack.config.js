// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
// const fs = require("fs");
// const path = require("path");

// const mode = process.env.NODE_ENV || "development";
// const devMode = mode === "development";
// const target = devMode ? "web" : "browserslist";
// const devtool = devMode ? "source-map" : undefined;

// const entryPoints = {
//   index: path.resolve(__dirname, "src", "index.js"),
//   home: path.resolve(__dirname, "src", "index.js"),
//   catalog: path.resolve(__dirname, "src", "index.js"),
//   podcategory: path.resolve(__dirname, "src", "index.js"),
//   collection_text: path.resolve(__dirname, "src", "index.js"),
//   collection: path.resolve(__dirname, "src", "index.js"),
//   contacts: path.resolve(__dirname, "src", "index.js"),
//   // Добавьте другие страницы здесь
// };

// // Создаем экземпляры HtmlWebpackPlugin для каждой страницы
// const htmlPlugins = Object.keys(entryPoints).map((entryName) => {
//   return new HtmlWebpackPlugin({
//     template: path.resolve(__dirname, "src", `${entryName}.html`),
//     filename: `${entryName}.html`, // Имя файла для каждой страницы
//     cache: false,
//     chunks: "all", // Укажите, какой бандл связать с каждой страницей
//   });
// });

// function processNestedHtml(content, loaderContext, resourcePath = "") {
//   let fileDir =
//     resourcePath === ""
//       ? path.dirname(loaderContext.resourcePath)
//       : path.dirname(resourcePath);
//   const INCLUDE_PATTERN =
//     /\<include src=\"(\.\/)?(.+)\"\/?\>(?:\<\/include\>)?/gi;

//   function replaceHtml(match, pathRule, src) {
//     if (pathRule === "./") {
//       fileDir = loaderContext.context;
//     }
//     const filePath = path.resolve(fileDir, src);
//     loaderContext.dependency(filePath);
//     const html = fs.readFileSync(filePath, "utf8");
//     console.log(html);

//     return processNestedHtml(html, loaderContext, filePath);
//   }

//   if (!INCLUDE_PATTERN.test(content)) {
//     return content;
//   } else {
//     return content.replace(INCLUDE_PATTERN, replaceHtml);
//   }
// }

// function processHtmlLoader(content, loaderContext) {
//   let newContent = processNestedHtml(content, loaderContext);
//   return newContent;
// }

// module.exports = {
//   mode,
//   target,
//   devtool,
//   devServer: {
//     static: path.resolve(__dirname, "src"),
//     port: 3000,
//     open: true,
//     watchFiles: path.join(__dirname, "src"),
//     //пересборка проекта при подкачке бибилотек
//     // watchOptions: {
//     //   ignored: /node_modules/,
//     // },
//     // watchFiles: ["src/*.html"],
//   },
//   entry: {
//     main: path.resolve(__dirname, "src", "index.js"),
//   },
//   output: {
//     //куда выводит билд
//     path: path.resolve(__dirname, "dist"),
//     //очистка билда перед сборкой нового
//     clean: true,
//     //название js файла в билде
//     // [name] - стандартный по вебпаку (main), [contenthash] - добавляептся хэш к названию
//     filename: "[name][contenthash].js",
//     assetModuleFilename: "assets/images",
//   },

//   plugins: [
//     new CleanWebpackPlugin(),
//     // new HtmlWebpackPlugin({
//     //   template: "src/index.html", // Путь к вашему главному HTML файлу
//     //   chunks: "all", // Укажите, какой бандл связать с каждой страницей
//     //   cache: false,
//     // }),
//     ...htmlPlugins,
//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//     }),
//   ],

//   module: {
//     rules: [
//       {
//         test: /\.html$/i,
//         use: [
//           {
//             loader: "html-loader",
//             options: {
//               // sources: false,
//               minimize: false,
//               esModule: false,
//               preprocessor: processHtmlLoader,
//             },
//           },
//         ],
//       },
//       // изображения
//       {
//         test: /\.(jpe?g|png|webp|gif|svg)$/i,
//         use: devMode
//           ? []
//           : [
//               {
//                 loader: "image-webpack-loader",
//                 options: {
//                   mozjpeg: {
//                     progressive: true,
//                   },
//                   optipng: {
//                     enabled: false,
//                   },
//                   pngquant: {
//                     quality: [0.65, 0.9],
//                     speed: 4,
//                   },
//                   gifsicle: {
//                     interlaced: false,
//                   },
//                   webp: {
//                     quality: 75,
//                   },
//                 },
//               },
//             ],
//         type: "asset/resource",
//         generator: {
//           filename: "assets/images/[name][ext]",
//         },
//       },
//       //video
//       {
//         test: /\.(mov|mp4)$/,
//         use: [
//           {
//             loader: "file-loader",
//             options: {
//               name: "[name].[ext]",
//             },
//           },
//         ],
//       },
//       // css,scss
//       {
//         test: /\.(c|sa|sc)ss$/i,
//         use: [
//           devMode ? "style-loader" : MiniCssExtractPlugin.loader,
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 plugins: [require("postcss-preset-env")],
//               },
//             },
//           },
//           {
//             loader: "sass-loader",
//             options: {
//               sourceMap: true,
//             },
//           },
//         ],
//       },
//       // шрифты
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/i,
//         type: "asset/resource",
//         generator: {
//           filename: "assets/fonts/[name][ext]",
//         },
//       },
//       //js
//       {
//         test: /\.(?:js|mjs|cjs)$/i,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [["@babel/preset-env", { targets: "defaults" }]],
//           },
//         },
//       },
//     ],
//   },
//   optimization: {
//     minimizer: [
//       "...", // Здесь могут быть другие плагины для минимизации (например, TerserPlugin для минификации JavaScript)
//       new ImageMinimizerPlugin({
//         minimizer: {
//           implementation: ImageMinimizerPlugin.imageminMinify, // Выбор реализации минимизации изображений
//           options: {
//             plugins: [
//               "imagemin-gifsicle", // Плагин для оптимизации GIF изображений
//               "imagemin-mozjpeg", // Плагин для оптимизации JPEG изображений
//               "imagemin-pngquant", // Плагин для оптимизации PNG изображений
//               "imagemin-svgo", // Плагин для оптимизации SVG изображений
//             ],
//           },
//         },
//         generator: [
//           {
//             preset: "webp",
//             implementation: ImageMinimizerPlugin.imageminGenerate,
//             options: {
//               plugins: ["imagemin-webp"],
//             },
//           },
//         ],
//       }),

//       new ImageminWebpWebpackPlugin({
//         config: [
//           {
//             test: /\.(jpe?g|png)/,
//             options: {
//               quality: 75,
//             },
//           },
//         ],
//         overrideExtension: true,
//         detailedLogs: false,
//         silent: false,
//         strict: true,
//       }),
//     ],
//     minimize: true, // Отключение минификации
//   },
// };
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;
const PAGES_DIR = path.join(__dirname, "./src");
console.log(__dirname);
console.log(PAGES_DIR);

const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".html"));

const HTML_FILES = glob.sync("./src/**/*.html");
const pages = HTML_FILES.map((page) => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, page),
    filename: path.basename(page),
    chunks: [path.basename(page, ".html"), "main"],
  });
});

//рабочий
// const INCLUDE_PATTERN =
//   /<include\s+src="([^"]+)"\s+data-text='([^']+)'\s*><\/include>/;

const INCLUDE_PATTERN =
  /<include\s+src=["'](\.\/)?([^"']+)["'](?:\s+data-text='([^']+)')?\s*><\/include>/g;

// Пример использования регулярного выражения

const { JSDOM } = require("jsdom");

function processNestedHtml(content, loaderContext, resourcePath = "") {
  let fileDir =
    resourcePath === ""
      ? path.dirname(loaderContext.resourcePath)
      : path.dirname(resourcePath);

  function replaceHtml(match, pathRule, src, dataText) {
    console.log("Match:", match);
    console.log("Path Rule:", pathRule);
    console.log("Source:", src);
    console.log("Data Text:", dataText);
    // console.log("Data Text:", dataWow);
    if (pathRule === "./") {
      fileDir = loaderContext.context;
    }
    const filePath = path.resolve(fileDir, src);
    loaderContext.dependency(filePath);
    let html = fs.readFileSync(filePath, "utf8");
    try {
      const data = JSON.parse(dataText);
      const dom = new JSDOM(html);
      const document = dom.window.document;
      console.log("dataJSON: ", data);

      Object.keys(data).forEach((selector) => {
        const elementData = data[selector];
        const elements = document.querySelectorAll(selector);
        console.log("elementData: ", elementData);
        if (elements.length > 0) {
          elements.forEach((element) => {
            if (elementData.text) {
              element.textContent = elementData.text;
            }
            if (elementData.html) {
              element.innerHTML = elementData.html;
            }
            if (elementData.class) {
              elementData.class.split(" ").forEach((className) => {
                element.classList.add(className);
              });
            }
          });
        } else {
          console.error(
            `Elements with selector "${selector}" not found in ${src}`
          );
        }
      });

      console.log(
        "document.documentElement.innerHTML: ",
        document.body.innerHTML
      );
      html = document.body.innerHTML; // Получаем только содержимое <html>
    } catch (error) {
      console.error(`Error parsing data-text attribute: ${error.message}`);
    }

    return html; // Возвращаем только содержимое компоненты без оборачивания в теги <html>, <head> и <body>
  }

  if (!INCLUDE_PATTERN.test(content)) {
    return content;
  } else {
    console.log(content.replace(INCLUDE_PATTERN, replaceHtml));
    return content.replace(INCLUDE_PATTERN, replaceHtml);
  }
}

const entryPoints = HTML_FILES.reduce((entries, page) => {
  const entryName = path.basename(page, ".html");
  entries[entryName] = path.resolve(__dirname, page);
  return entries;
}, {});
function reviveJsonKeys(key, value) {
  if (typeof value === "string" && value.startsWith("HTML:")) {
    return value.substring(5); // убираем префикс "HTML:"
  }
  return value;
}

function processHtmlLoader(content, loaderContext) {
  let newContent = processNestedHtml(content, loaderContext);
  newContent = newContent.replace(
    /(src|data-src)="(.*?)\.(jpg|png)"/gi,
    (match, p1, p2, p3) => {
      return `${p1}="${p2}.webp"`;
    }
  );
  return newContent;
}

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    // static: "./dist",
    port: 3000,
    open: true,
    hot: true,
    watchFiles: ["./src/**/*.html"],
  },

  entry: {
    main: path.resolve(__dirname, "src", "index.js"),
  },
  // entry: getEntries(),
  output: {
    //куда выводит билд
    path: path.resolve(__dirname, "dist"),
    //очистка билда перед сборкой нового
    clean: true,
    //название js файла в билде
    // [name] - стандартный по вебпаку (main), [contenthash] - добавляептся хэш к названию
    filename: "[name].js",
    // assetModuleFilename: "assets/images",
  },

  plugins: [
    new CleanWebpackPlugin(),

    ...pages,
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "name].css",
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify, // Выбор реализации минимизации изображений
        options: {
          plugins: [
            "imagemin-gifsicle", // Плагин для оптимизации GIF изображений
            "imagemin-mozjpeg", // Плагин для оптимизации JPEG изображений
            "imagemin-pngquant", // Плагин для оптимизации PNG изображений
            "imagemin-svgo", // Плагин для оптимизации SVG изображений
          ],
        },
      },
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 90,
            overrideExtension: true,
          },
        },
      ],
      detailedLogs: false,
      silent: false,
      strict: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./", "src/assets/", "images"),
          to: path.resolve(__dirname, "./", "dist/assets/", "images"),
        },
        {
          from: path.resolve(__dirname, "./", "src/assets/", "fonts"),
          to: path.resolve(__dirname, "./", "dist/assets/", "fonts"),
        },

        {
          from: path.resolve(__dirname, "./", "src/assets/", "video"),
          to: path.resolve(__dirname, "./", "dist/assets/", "video"),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: false,
              minimize: false,
              esModule: false,
              preprocessor: processHtmlLoader,
            },
          },
        ],
      },
      // изображения
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                auto: true,
                namedExport: true,
                // localIdentName: "foo__[name]__[local]",
              },
              url: false,
            },
          },
          "sass-loader",
        ],
      },
      // шрифты
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      //js
      {
        test: /\.(?:js|mjs|cjs)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      //video
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
        generator: {
          filename: "assets/videos/[name][ext]",
        },
      },
    ],
  },
};
