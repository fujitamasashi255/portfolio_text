// editorへの入力内容をタイプセットしてプレビューする
$(function(){
    var editorElement = $("trix-editor");
    editorElement.on("trix-change", function(){
      var editorHtml = editorElement.html();
      var previewScrollamount = $(".preview_display .trix-content").scrollTop();
      MathJax.typesetPromise($(".preview_display .trix-content").html(editorHtml))
      .then(function(){
        $('mjx-container[display="true"]').next().each(function(index, ElementNextToMjxContainer){
              if($(ElementNextToMjxContainer).is("br")){
                  $(ElementNextToMjxContainer).remove();
              }
          });
        })
      .then(function(){
        $(".preview_display .trix-content").scrollTop(previewScrollamount);
      });
    });

    //editorをスクロールした際に、previewをスクロールさせる
    editorElement.on("scroll", function(){
      var editorScrollHeight = $(this).scrollTop();
      var editorHeight = $("trix-editor").get(0).scrollHeight - $("trix-editor").height();
      var previewHeight = $(".preview_display .trix-content").get(0).scrollHeight - $(".preview_display .trix-content").height();
      var previewScrollHeight = (previewHeight * editorScrollHeight)/editorHeight;
      $(".preview_display .trix-content").scrollTop(previewScrollHeight);
    });
});

/*
//(1)
$(function(){
    $("button[data-trix-attribute='arabic']").on("click", function(){
        var trixEditorElement = document.querySelector("trix-editor");
        var selection = document.getSelection();
        //trix-editorの最初からキャレット位置までのRangeオブジェクトrange
        var range = selection.getRangeAt(0);
        range.setStart(trixEditorElement, 0);
        //rangeのDocumentFragmentオブジェクトrangeDOM
        var rangeDOM = range.cloneContents();
        //画面上でrangeがselectされないように、
        //rangeを最初のキャレット位置を始点、終点となるようにする
        range.collapse(false);
        console.log("new")
        //lastOlNodeはNodeListオブジェクトで、
        //rangeDOM直下の最後のノードがolであればそれを要素とし、olでなければ空
        lastOlNode = rangeDOM.querySelectorAll(":scope > ol:last-child");
        //levelはolの深さを表す
        var level = 0;
        while(lastOlNode.length == 1){
            lastOlNode.forEach(function (elem) {
                console.log(elem);
                lastOlNode = elem.querySelectorAll(":scope > li:last-child > ol:last-child");
            });
            level++;
        }
        console.log(level);

        if(level == 2){
            var liNodes = document.querySelectorAll("ol > li > ol > li");
            liNodes.forEach(function (elem) {
                console.log(elem);
                elem.className = 'arabic';
            });
        }
    });
});

//ボタンを追加
addEventListener("trix-initialize", function(event) {
    var buttonHTML = '<button type="button" data-trix-attribute="arabic">(1)</button><button type="button" data-trix-attribute="roman">(i)</button>'

    event.target.toolbarElement.
    querySelector(".trix-button-group").
    insertAdjacentHTML("beforeend", buttonHTML);
    $("button[data-trix-attribute='roman']").on("click", function(){
        var trixEditorElement = document.querySelector("trix-editor");
        var selection = document.getSelection();
        //trix-editorの最初からキャレット位置までのRangeオブジェクトrange
        var range = selection.getRangeAt(0);
        range.setStart(trixEditorElement, 0);
        //rangeのDocumentFragmentオブジェクトrangeDOM
        var rangeDOM = range.cloneContents();
        //画面上でrangeがselectされないように、
        //rangeを最初のキャレット位置を始点、終点となるようにする
        range.collapse(false);
        console.log("new")
        //lastOlNodeはNodeListオブジェクトで、
        //rangeDOM直下の最後のノードがolであればそれを要素とし、olでなければ空
        lastOlNode = rangeDOM.querySelectorAll(":scope > ol:last-child");
        //levelはolの深さを表す
        var level = 0;
        while(lastOlNode.length == 1){
            lastOlNode.forEach(function (elem) {
                //console.log(elem);
                lastOlNode = elem.querySelectorAll(":scope > li:last-child > ol:last-child");
            });
            level++;
        }
        console.log(level);

        if(level == 2){
            var liNodes = document.querySelectorAll("trix-editor > ol > li > ol > li");
            liNodes.forEach(function (elem) {
                console.log(elem);
                //elem.setAttribute('class', 'roman');
            });
        }
    });
})
*/