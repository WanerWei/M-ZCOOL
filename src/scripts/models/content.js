
const list = () => {
    return $.ajax({
        // https://api.zcool.com.cn/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3
        url: '/vapi/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3',
        success: (result) => {
                return result
        }
    })
}

export default {
    list
}