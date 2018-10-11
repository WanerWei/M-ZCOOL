
import contentTpl from '../views/content.html'
import contentListTpl from '../views/content-list.html'
import contentListModule from '../models/content'

const render = async () => {
    $('main').html(contentTpl);
    let list  = (await contentListModule.list()).data.content
    await renderList(list)
}

const renderList = async (list) => {
    let template = Handlebars.compile(contentListTpl)
    let html = template({ list })
    // ul插入模板
    $('#ulList').html(html)
}

export default {
    render
}