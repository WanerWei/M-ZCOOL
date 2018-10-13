
import homeController from './controllers/home'
import recommendController from './controllers/recommend'
import productionController from './controllers/production'
import articleController from './controllers/article'
import routerTab from './utils/router'
import Router from './utils/router';

homeController.render()
// recommendController.render()

const router = new Router()

router.init()

router.route('#recommend',recommendController.render.bind(this,'recommend'))
router.route('#production',recommendController.render.bind(this,'production'))
router.route('#article',recommendController.render.bind(this,'article'))