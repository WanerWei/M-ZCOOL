/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/home */ \"./src/scripts/controllers/home.js\");\n/* harmony import */ var _controllers_recommend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/recommend */ \"./src/scripts/controllers/recommend.js\");\n/* harmony import */ var _controllers_production__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/production */ \"./src/scripts/controllers/production.js\");\n/* harmony import */ var _controllers_production__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_controllers_production__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _controllers_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/article */ \"./src/scripts/controllers/article.js\");\n/* harmony import */ var _controllers_article__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_controllers_article__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/router */ \"./src/scripts/utils/router.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_controllers_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render()\r\n// recommendController.render()\r\n\r\nconst router = new _utils_router__WEBPACK_IMPORTED_MODULE_4__[\"default\"]()\r\n\r\nrouter.init()\r\n\r\nrouter.route('#recommend',_controllers_recommend__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render.bind(undefined,'recommend'))\r\nrouter.route('#production',_controllers_recommend__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render.bind(undefined,'production'))\r\nrouter.route('#article',_controllers_recommend__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render.bind(undefined,'article'))\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/controllers/article.js":
/*!********************************************!*\
  !*** ./src/scripts/controllers/article.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/scripts/controllers/article.js?");

/***/ }),

/***/ "./src/scripts/controllers/home.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.html */ \"./src/scripts/views/home.html\");\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_home_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n// 插入内容\r\nconst render = () => {\r\n    $(\"#root\").html(_views_home_html__WEBPACK_IMPORTED_MODULE_0___default.a)\r\n    tabBar()\r\n}\r\n\r\nconst tabBar = ()=> {\r\n    $(\"nav ul li\").on(\"tap\",function() {\r\n        let hashs = ['#recommend', '#production', '#article']\r\n        location.hash = hashs[$(this).index()]\r\n        $(this).addClass('active').siblings().removeClass('active')\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/home.js?");

/***/ }),

/***/ "./src/scripts/controllers/production.js":
/*!***********************************************!*\
  !*** ./src/scripts/controllers/production.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/scripts/controllers/production.js?");

/***/ }),

/***/ "./src/scripts/controllers/recommend.js":
/*!**********************************************!*\
  !*** ./src/scripts/controllers/recommend.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_content_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/content.html */ \"./src/scripts/views/content.html\");\n/* harmony import */ var _views_content_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_content_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_recommend_list_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/recommend-list.html */ \"./src/scripts/views/recommend-list.html\");\n/* harmony import */ var _views_recommend_list_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_recommend_list_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/content */ \"./src/scripts/models/content.js\");\n\r\n\r\n\r\n// import productionListTpl from '../views/production-list.html'\r\n// import articleListTpl from '../views/article-list.html'\r\n\r\n\r\nvar pageNo = 1;\r\nvar dataSource = [];\r\n\r\nconst render = async (listType) => {\r\n\r\n    $('main').html(_views_content_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n\r\n    $('.content').css('display','none')\r\n    $('.loader').css('display','block')\r\n    \r\n    \r\n    let list  = dataSource = (await _models_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"][listType]()).data.content\r\n    await renderList(list)\r\n    scroll()\r\n}\r\n\r\nconst scroll = () => {\r\n    // better-scroll,一款解决移动端屏幕的插件\r\n    let posScroll = new BScroll('main',{\r\n        // 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件\r\n        probeType: 2,\r\n        startY : -50\r\n    })\r\n\r\n    let head = $('.head img'),\r\n        foot = $('.foot img')\r\n\r\n    //  委托屏幕滚动事件\r\n    posScroll.on('scroll', function() {\r\n        // scroll 纵轴坐标\r\n        // 从 main 顶部往下 是负值，越往下，负值越大\r\n        // 当滚动距离大于 main 的实际高度，则会大于0\r\n        let y = this.y,\r\n        // scroll 最大纵向滚动位置。\r\n        // 备注：scroll 纵向滚动的位置区间是 0 - maxScrollY，并且 maxScrollY 是负值。\r\n            maxY = this.maxScrollY - y;\r\n            \r\n        // 当拉出 ‘下拉刷新’ ，旋转箭头\r\n        if( y>= -10){\r\n            head.addClass('up')\r\n        }\r\n\r\n        // 当拉出 ‘下拉刷新’，旋转箭头\r\n        if(maxY >= 0){\r\n            foot.addClass('down')\r\n        }\r\n    })\r\n\r\n    // 委托 当滚动停止，即滑动屏幕、手指离开屏幕后触发\r\n    posScroll.on('scrollEnd', async function() {\r\n        let y = this.y,\r\n            maxY = this.maxScrollY - y;\r\n\r\n        // 未滑出 下拉刷新 即取消了刷新\r\n        // main 有个padding 10,所以要在减去\r\n\r\n        if(y >= -50 && y < -10){\r\n            // 滚动到指定位置 x y time 动画类型\r\n            this.scrollTo(0, -50, 300, 'brounce')\r\n        // 滑出 下拉刷新 即刷新\r\n        }else if(y >= -10){\r\n\r\n            // 替换成 loading 的img\r\n            head.attr('src','/images/loading.gif')\r\n\r\n            let result = await _models_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"].recommend2(++pageNo,2)\r\n\r\n            let list = dataSource = [\r\n                // 扩展运算\r\n                // 将老数组内的数据 和 刚刷新的得到的数据 数组序列化 组成新数组，\r\n                ...result.data.content,\r\n                ...dataSource\r\n            ]\r\n\r\n            // 重新传入list，渲染页面\r\n            renderList(list)\r\n\r\n            // 刷新\r\n            this.refresh()\r\n\r\n            // 重新 传入 箭头 img\r\n            head.attr('src', '/images/arrow.png')\r\n                .removeClass('up')\r\n            // 回滚\r\n            this.scrollTo(0,-50)\r\n        }    \r\n\r\n        // 上拉刷新\r\n        if(maxY >= -40 && maxY <0){\r\n            this.scrollTo(0,this.maxScrollY+40,300,'swipe')\r\n            \r\n        }else if(maxY >=0){\r\n            foot.attr('src','/images/loading.gif')\r\n\r\n             // 执行 loadMore()方法，即获取新数据\r\n            let result = await _models_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"].recommend2(++pageNo,10)\r\n            let list = dataSource = [\r\n                // 扩展运算\r\n                // 将老数组内的数据 和 刚刷新的得到的数据 数组序列化 组成新数组，\r\n                ...dataSource,\r\n                ...result.data.content,\r\n            ]\r\n\r\n            // 重新传入list，渲染页面\r\n            renderList(list)\r\n\r\n            // 刷新\r\n            this.refresh()\r\n\r\n            // 重新 传入 箭头 img\r\n            foot.attr('src', '/images/arrow.png')\r\n                .removeClass('down')\r\n            // 回滚\r\n            this.scrollTo(0,this.maxScrollY+40)\r\n        }\r\n    })\r\n}\r\n\r\n\r\nconst renderList = async (list) => {\r\n    let template = Handlebars.compile(_views_recommend_list_html__WEBPACK_IMPORTED_MODULE_1___default.a)\r\n    let html = template({ list })\r\n    // ul插入模板\r\n    $('#ulList').html(html)\r\n    $('.content').css('display','block')\r\n    $('.loader').css('display','none')\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/recommend.js?");

/***/ }),

/***/ "./src/scripts/models/content.js":
/*!***************************************!*\
  !*** ./src/scripts/models/content.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n// 首页推荐\r\nconst recommend = () => {\r\n    return $.ajax({\r\n        // https://api.zcool.com.cn/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3\r\n        url: '/vapi/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3',\r\n        success: (result) => {\r\n                return result\r\n        }\r\n    })\r\n}\r\n\r\n//  刷新的数据\r\nconst recommend2 = (pageNo,num) => {\r\n    return $.ajax({\r\n        url: '/vapi/v2/api//discoverListNew?contentType=0&p='+pageNo+'&ps='+num+'&recommendLevel=3',\r\n        success: (result) => {\r\n                return result\r\n        }\r\n    })\r\n}\r\n\r\nconst production = () => {\r\n    return $.ajax({\r\n        url: '/vapi/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=2',\r\n        success: (result) => {\r\n                return result\r\n        }\r\n    })\r\n}\r\n\r\n\r\n// 文章 \r\nconst article = () => {\r\n    return $.ajax({\r\n        url: '/jsonServer/centent/article',\r\n        success: (result) => {\r\n                return result\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    recommend,\r\n    recommend2,\r\n    production,\r\n    article\r\n});\n\n//# sourceURL=webpack:///./src/scripts/models/content.js?");

/***/ }),

/***/ "./src/scripts/utils/router.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/router.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n// 路由刷新\r\nfunction Router() {\r\n    this.routes = {};\r\n    this.currentHash = ''\r\n}\r\n\r\nRouter.prototype.route = function(hash, cb) {\r\n    this.currentHash = hash;\r\n    this.routes[this.currentHash] = cb || function() {}\r\n}\r\n\r\nRouter.prototype.refresh = function() {\r\n    let hash = location.hash || \"#recommend\";\r\n    this.currentHash = hash;\r\n    this.routes[this.currentHash]()    ;\r\n    this.switchTab()\r\n}\r\n\r\nRouter.prototype.switchTab = function() {\r\n    let hashs = ['#recommend', '#production', '#article'];\r\n    let index = hashs.indexOf(this.currentHash);\r\n    $('nav li')\r\n        .eq(index)\r\n        .addClass(\"active\")\r\n        .siblings()\r\n        .removeClass('active')\r\n}\r\n\r\nRouter.prototype.init = function() {\r\n    window.addEventListener('load',this.refresh.bind(this))\r\n    window.addEventListener('hashchange',this.refresh.bind(this))\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./src/scripts/utils/router.js?");

/***/ }),

/***/ "./src/scripts/views/content.html":
/*!****************************************!*\
  !*** ./src/scripts/views/content.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"content\\\">    <div class=\\\"head\\\">        <img src=\\\"/images/arrow.png\\\" />        <b>下拉刷新...</b>    </div>    <div>        <ul id=\\\"ulList\\\"></ul>    </div>    <div id=\\\"ulMore\\\">        <a>查看更多</a>    </div>    <div class=\\\"foot\\\">        <img src=\\\"/images/arrow.png\\\" />        <b>上拉加载更多...</b>    </div></div><div class=\\\"loader\\\"><img src=\\\"/images/ajax-loader.gif\\\" alt=\\\"\\\"></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/content.html?");

/***/ }),

/***/ "./src/scripts/views/home.html":
/*!*************************************!*\
  !*** ./src/scripts/views/home.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"head-container\\\">    <header>        <i class=\\\"yo-ico\\\">&#xe689;</i>        <div>            <img src=\\\"https://static.zcool.cn/v3.5.180926.5/zcool/client/image/logo.png\\\" />        </div>        <div>            <i class=\\\"yo-ico\\\">&#xe60d;</i>            <i class=\\\"yo-ico\\\">&#xe6b5;</i>        </div>    </header>    <nav>        <ul>            <li class=\\\"active\\\">首页推荐</li>            <li>作品</li>            <li>文章</li>        </ul>    </nav>    <main>    </main>    <div id=\\\"footerTop\\\">        <a href=\\\"##\\\">            <img src=\\\"https://static.zcool.cn/v3.5.181008.5/zcool/client/image/down-app2.png\\\" alt=\\\"\\\">        </a>    </div>    <footer>        <div>            <div>                <a>触屏版</a>                <b>|</b>                <a class=\\\"active\\\">电脑版</a>            </div>            <div>                <a>反馈</a>                <b>|</b>                <a>回顶部</a>            </div>        </div>        <div>            <p>Copyright&copy; 2006-2018 ZCOOL</p>        </div>    </footer></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/home.html?");

/***/ }),

/***/ "./src/scripts/views/recommend-list.html":
/*!***********************************************!*\
  !*** ./src/scripts/views/recommend-list.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each list}}<li>    <div>        <a href=\\\"##\\\"><img src=\\\"{{cover1x}}\\\" alt=\\\"\\\"></a>    </div>    <div>        <section>               <span class=\\\"title\\\">{{title}}</span>        </section>           <section>            <section>                <span class=\\\"name\\\">{{creatorObj.username}}</span>            </section>            <section>                <div>                    <i class=\\\"yo-ico\\\">&#xe6f3;</i>                    <span>{{viewCount}}</span>                </div>                <div>                    <i class=\\\"yo-ico i-2\\\">&#xe696;</i>                    <span>{{recommendCount}}</span>                </div>            </section>        </section>    </div></li>{{/each}}\"\n\n//# sourceURL=webpack:///./src/scripts/views/recommend-list.html?");

/***/ })

/******/ });