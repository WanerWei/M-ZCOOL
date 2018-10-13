
// 首页推荐
const recommend = () => {
    return $.ajax({
        // https://api.zcool.com.cn/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3
        url: '/vapi/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3',
        success: (result) => {
                return result
        }
    })
}

//  刷新的数据
const recommend2 = (pageNo,num) => {
    return $.ajax({
        url: '/vapi/v2/api//discoverListNew?contentType=0&p='+pageNo+'&ps='+num+'&recommendLevel=3',
        success: (result) => {
                return result
        }
    })
}

const production = () => {
    return $.ajax({
        url: '/vapi/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=2',
        success: (result) => {
                return result
        }
    })
}


// 文章 
const article = () => {
    return $.ajax({
        url: '/jsonServer/centent/article',
        success: (result) => {
                return result
        }
    })
}

export default {
    recommend,
    recommend2,
    production,
    article
}