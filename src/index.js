require("babel-polyfill");
var page = require("page");//permitira armar la navegacion de nuestro sitio
var yoyo = require("yo-yo");//permite el manejo de templates dentro del JS


require("./homepage");
require("./signup");
require("./signin");
require("./user");
require("./footer");
page();