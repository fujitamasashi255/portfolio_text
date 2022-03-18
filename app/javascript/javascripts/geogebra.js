//$(document).on("turbolinks:load", function(){
$(window).on("load", function(){
    var params = {
        "appName": "classic", 
        "width": 1000, 
        "height": 500, 
        "showToolBar": true, 
        "showAlgebraInput": true, 
        "showMenuBar": true,
        //"ggbBase64": $("#geogebra_base64").attr("data-geogebra-base64"),
        "ggbBase64": $("#geogebra_base64").data("geogebra-base64"),
        //"ggbBase64": $("#geogebra_base64").val(),
        };
    
    var ggbApplet = new GGBApplet(params, '5.0');
    ggbApplet.inject('ggb-element');
});

//$(document).on("turbolinks:load", function(){
    //console.log("data:"+$("#geogebra_base64").data("geogebra-base64"));
    //console.log("attr:"+$("#geogebra_base64").attr("data-geogebra-base64"));
//});

//なぜか上のコードとまとめられないので、分離した
//$(document).on("turbolinks:load", function(){
$(window).on("load", function(){
    $("#load_geogebra_button").on("click", function(){
        ggbApplet.setBase64($(".geogebra_base64").val());
    });
    //保存ボタン
    $("#save_geogebra_button, #open_geogebra").on("click", function(){
        $("#geogebra_base64").val(ggbApplet.getBase64());
    });
    $("#refresh_geogebra_button").on("click", function(){
        ggbApplet.newConstruction();
    });
    $("#alert_geogebra_button").on("click", function(){
        alert(ggbApplet.getBase64());
    });
    //closeボタンを押したらメニューバーを閉じる！！！
});

