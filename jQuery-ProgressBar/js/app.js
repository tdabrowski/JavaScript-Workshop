$(function(){

    /**
    * Handling animation progress bar with chosen settings
    */
    function animateBar(){
        let $buttons = $('.changeBar');
        let $bar1 = $('#bar1');
        let $bar2 = $('#bar2');
        let $bar3 = $('#bar3');

        function setBar(element,color,percent){
            element.removeClass('blue green orange');
            element.addClass(color);
            element.animate({width:percent},1000);
        }

        $buttons.on('click',(e)=>{
            let $width = $(e.currentTarget).data('width');
            let $color = $(e.currentTarget).data('color');
            let $id = $(e.currentTarget).data('id');
            if($id == 'bar1'){
                let $span = $bar1.find('span');
                setBar($span,$color,$width);
            }
            else if($id == 'bar2'){
                let $span = $bar2.find('span');
                setBar($span,$color,$width);
            }
            else {
                let $span = $bar3.find('span');
                setBar($span,$color,$width);
            }
        });
    }
    animateBar();
});
