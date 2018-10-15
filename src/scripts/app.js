
import homeController from './controllers/home'
import commentController from './controllers/comment'
import Router from './utils/router';

homeController.render()

const router = new Router()

router.init()

router.route('#recommend',commentController.render.bind(this,'recommend'))
router.route('#production',commentController.render.bind(this,'production'))
router.route('#article',commentController.render.bind(this,'article'))