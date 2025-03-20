const base = {
    get() {
        return {
            url : "http://localhost:8080/waimaifuwu/",
            name: "waimaifuwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/waimaifuwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园外卖服务系统"
        } 
    }
}
export default base
