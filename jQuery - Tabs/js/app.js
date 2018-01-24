$(function(){
    /** show-hide text when click on tab
    * @param {string} selector tabs selector
    */
    function tabsHandler(selector) {
        $(selector).on('click',(e)=>{
            $('div').each((i,el)=>{
                if($(el).data('id') == $(e.currentTarget).data('id')){
                    $(el).fadeToggle();
                    $(el).toggleClass('selected');
                }
            })
        });
    }
    tabsHandler('.tabs li');
});
