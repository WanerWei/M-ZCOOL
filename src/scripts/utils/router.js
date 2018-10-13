
// 路由刷新
function Router() {
    this.routes = {};
    this.currentHash = ''
}

Router.prototype.route = function(hash, cb) {
    this.currentHash = hash;
    this.routes[this.currentHash] = cb || function() {}
}

Router.prototype.refresh = function() {
    let hash = location.hash || "#recommend";
    this.currentHash = hash;
    this.routes[this.currentHash]()    ;
    this.switchTab()
}

Router.prototype.switchTab = function() {
    let hashs = ['#recommend', '#production', '#article'];
    let index = hashs.indexOf(this.currentHash);
    $('nav li')
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass('active')
}

Router.prototype.init = function() {
    window.addEventListener('load',this.refresh.bind(this))
    window.addEventListener('hashchange',this.refresh.bind(this))
}


export default Router