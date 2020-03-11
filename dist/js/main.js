console.log("程序运行成功");

require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",
        "index": "index"
    },
    shim: {
        //设置依赖
        "jquery-cookie": ["jquery"],
        //不遵从AMD
        "parabola": {
            export: "_"           
        }
    }
})

//引用
require(["index"], function(index){
    index.an();

})