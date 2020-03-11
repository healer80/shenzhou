define(function(){
    function an(){
        var oBtn = document.getElementById("btn1");
        oBtn.onclick = function(){
            alert("你好")
        }
    }

    return {
        an: an
    }
})