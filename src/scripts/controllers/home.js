
import homeTpl from '../views/home.html'

// 插入内容
const render = () => {
    $("#root").html(homeTpl)
    tabBar()
}

const tabBar = ()=> {
    $("nav ul li").on("tap",function() {
        let hashs = ['#recommend', '#production', '#article']
        location.hash = hashs[$(this).index()]
        $(this).addClass('active').siblings().removeClass('active')
    })
}

export default {
    render
}