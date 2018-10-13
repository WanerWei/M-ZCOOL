
import contentTpl from '../views/content.html'
import recommendListTpl from '../views/recommend-list.html'
// import productionListTpl from '../views/production-list.html'
// import articleListTpl from '../views/article-list.html'
import contentListModule from '../models/content'

var pageNo = 1;
var dataSource = [];

const render = async (listType) => {

    $('main').html(contentTpl);

    $('.content').css('display','none')
    $('.loader').css('display','block')
    
    
    let list  = dataSource = (await contentListModule[listType]()).data.content
    await renderList(list)
    scroll()
}

const scroll = () => {
    // better-scroll,一款解决移动端屏幕的插件
    let posScroll = new BScroll('main',{
        // 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件
        probeType: 2,
        startY : -50
    })

    let head = $('.head img'),
        foot = $('.foot img')

    //  委托屏幕滚动事件
    posScroll.on('scroll', function() {
        // scroll 纵轴坐标
        // 从 main 顶部往下 是负值，越往下，负值越大
        // 当滚动距离大于 main 的实际高度，则会大于0
        let y = this.y,
        // scroll 最大纵向滚动位置。
        // 备注：scroll 纵向滚动的位置区间是 0 - maxScrollY，并且 maxScrollY 是负值。
            maxY = this.maxScrollY - y;
            
        // 当拉出 ‘下拉刷新’ ，旋转箭头
        if( y>= -10){
            head.addClass('up')
        }

        // 当拉出 ‘下拉刷新’，旋转箭头
        if(maxY >= 0){
            foot.addClass('down')
        }
    })

    // 委托 当滚动停止，即滑动屏幕、手指离开屏幕后触发
    posScroll.on('scrollEnd', async function() {
        let y = this.y,
            maxY = this.maxScrollY - y;

        // 未滑出 下拉刷新 即取消了刷新
        // main 有个padding 10,所以要在减去

        if(y >= -50 && y < -10){
            // 滚动到指定位置 x y time 动画类型
            this.scrollTo(0, -50, 300, 'brounce')
        // 滑出 下拉刷新 即刷新
        }else if(y >= -10){

            // 替换成 loading 的img
            head.attr('src','/images/loading.gif')

            let result = await contentListModule.recommend2(++pageNo,2)

            let list = dataSource = [
                // 扩展运算
                // 将老数组内的数据 和 刚刷新的得到的数据 数组序列化 组成新数组，
                ...result.data.content,
                ...dataSource
            ]

            // 重新传入list，渲染页面
            renderList(list)

            // 刷新
            this.refresh()

            // 重新 传入 箭头 img
            head.attr('src', '/images/arrow.png')
                .removeClass('up')
            // 回滚
            this.scrollTo(0,-50)
        }    

        // 上拉刷新
        if(maxY >= -40 && maxY <0){
            this.scrollTo(0,this.maxScrollY+40,300,'swipe')
            
        }else if(maxY >=0){
            foot.attr('src','/images/loading.gif')

             // 执行 loadMore()方法，即获取新数据
            let result = await contentListModule.recommend2(++pageNo,10)
            let list = dataSource = [
                // 扩展运算
                // 将老数组内的数据 和 刚刷新的得到的数据 数组序列化 组成新数组，
                ...dataSource,
                ...result.data.content,
            ]

            // 重新传入list，渲染页面
            renderList(list)

            // 刷新
            this.refresh()

            // 重新 传入 箭头 img
            foot.attr('src', '/images/arrow.png')
                .removeClass('down')
            // 回滚
            this.scrollTo(0,this.maxScrollY+40)
        }
    })
}


const renderList = async (list) => {
    let template = Handlebars.compile(recommendListTpl)
    let html = template({ list })
    // ul插入模板
    $('#ulList').html(html)
    $('.content').css('display','block')
    $('.loader').css('display','none')
}

export default {
    render
}