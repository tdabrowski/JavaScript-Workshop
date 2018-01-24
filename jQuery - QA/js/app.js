$(function(){
    /** show-hide answer function
    * @param {string} selector questions selector
    */
    let showAnswer = function(selector){
        $(selector).on('click',(e)=>{
            $(selector).next().fadeOut();
            ($(e.currentTarget).next().css('display') == 'none')?$(e.currentTarget).next().fadeIn():0;
        });
    }
    showAnswer('.QA h1');
});
