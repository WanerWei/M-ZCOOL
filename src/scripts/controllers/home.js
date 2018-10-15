
import homeTpl from '../views/home.html'
import Swiper from 'swiper'

var swiper

// 插入内容
const render = () => {
    $("#root").html(homeTpl)
    tabBar()
    // console.log(swiper)
    
    swiper = new Swiper('.swiper-container', {
        on : {
            slideChangeTransitionEnd : function() {
                let hashs = ['#recommend', '#production', '#article'];
                let index = this.activeIndex;
                $("nav ul li").eq(index).addClass('active').siblings().removeClass('active')
                location.hash = hashs[index]
            }
        }
    })
}

const tabBar = ()=> {
    $("nav ul li").on("tap",function() {
        let hashs = ['#recommend', '#production', '#article']
        location.hash = hashs[$(this).index()]
        $(this).addClass('active').siblings().removeClass('active')
        swiper.slideTo($(this).index())
    })
}

export default {
    render
}