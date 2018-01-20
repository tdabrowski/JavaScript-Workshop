document.addEventListener('DOMContentLoaded',function(){
    /**Showing submenu elements on navigation bar
    * @param {string} topListSelector Top navigation list (ul) selector
    */
    function showSubMenu(topListSelector){
        const mainMenu = document.querySelector(topListSelector);
        let menuElements = mainMenu.children;
        for(let i=0; i<menuElements.length; i++){
            menuElements[i].addEventListener('mouseover',(e)=>{
                let subMenu = e.currentTarget.firstElementChild;
                (subMenu !== null)? subMenu.style.display = 'block': null;
            });
            menuElements[i].addEventListener('mouseout',(e)=>{
                let subMenu = e.currentTarget.firstElementChild;
                (subMenu !== null)? subMenu.style.display = 'none': null;
            });
        }
    }
    showSubMenu('.nav ul');
});
