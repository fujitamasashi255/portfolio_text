MathJax = {
    startup: {
    ready: () => {
        MathJax.startup.defaultReady();
        MathJax.startup.promise.then(
        function(){
            $('mjx-container[display="true"]').next().each(function(index, element){
                if($(element).is("br")){
                    $(element).remove();
                }
            });
        }
        );
    }
    },
    loader: {load: ['[tex]/textmacros']},
    options: {
    ignoreHtmlClass: "tex_ignore",
    },
    tex: {
    packages: {'[+]': ['textmacros']},
    inlineMath: [ ['$','$'], ['¥','¥'] ],
    displayMath: [['$$', '$$']],
    macros: {
        // 2. define new macro
        // @see https://docs.mathjax.org/en/v2.7-latest/tex.html#defining-tex-macros
        textcircled: ['\\enclose{circle}{#1}', 1],
    },
    },
    chtml: {
    mtextInheritFont: true
    }
};

//$(document).on('turbolinks:load', function() {
$(document).on("load", function(){
    MathJax.typesetPromise();
});