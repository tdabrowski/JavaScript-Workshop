document.addEventListener('DOMContentLoaded',function(){
    /**Showing tooltips
    * @param {string} selector elements with tooltips 
    */
    function tooltip(selector){
        let tooltips = document.querySelectorAll(selector);
        tooltips.forEach(el=>{
            el.addEventListener('mouseover',(e)=>{
                let message = document.createElement('span');
                message.classList.add('tooltipText');
                message.innerText = e.currentTarget.dataset.text;
                e.currentTarget.appendChild(message);
            });
            el.addEventListener('mouseout',(e)=>{
                e.currentTarget.removeChild(e.currentTarget.firstElementChild);
            });
        });
    }
    tooltip('.tooltip');
});
