/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. See https://github.com/JeffreyWay/laravel-mix.
 |
 */
 const mix = require("laravel-mix");
 const glob = require("glob");

 /*
  |--------------------------------------------------------------------------
  | Configuration
  |--------------------------------------------------------------------------
  */
 mix.setPublicPath("css").disableNotifications();

 /*
  |--------------------------------------------------------------------------
  | Browsersync
  |--------------------------------------------------------------------------
  */
 mix.browserSync({
   proxy: "https://druppio.ddev.site/",
   files: ["/css/druppio_small_business.css", "/css/layout/default-layout.css"],
   stream: true
 });

 /*
  |--------------------------------------------------------------------------
  | SASS
  |--------------------------------------------------------------------------
  */
 mix
   .sass("scss/druppio_small_business.scss", "css", {
     sassOptions: {
      outputStyle: "compact"
     },
     implementation: require('node-sass')
   })
   .options({
     processCssUrls: false,
     autoprefixer: {
       options: {
         browsers: ["last 4 versions"]
       }
     }
   });
