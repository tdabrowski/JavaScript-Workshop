document.addEventListener('DOMContentLoaded',function(){

    /**Filtering images with requested tags
    * @param {string} pictureList selector all li elements with pictures
    * @param {string} hideBut selector hide button
    * @param {string} showBut selector show button
    * @param {string} inputTag selector input field
    */
    function filterImage(pictureList,hideBut,showBut,inputTag){
        let pictures = document.querySelectorAll(pictureList);
        let hide = document.querySelector(hideBut);
        let show = document.querySelector(showBut);
        let input = document.querySelector(inputTag);
        hide.addEventListener('click',(e)=>{
            let tag = input.value;
            input.value = '';
            pictures.forEach(el => {
                (el.dataset.tag.indexOf(tag)!=-1) ? el.classList.add('invisible') : el.classList.remove('invisible');
            });
        });
        show.addEventListener('click',(e)=>{
            let tag = input.value;
            input.value = '';
            pictures.forEach(el => {
                (el.dataset.tag.indexOf(tag)!=-1) ? el.classList.remove('invisible') : el.classList.add('invisible');
            });
        });
    }


    /**Function for view single image from gallery
    * @param {string} pictureList selector all li elements with pictures
    */
    function viewImage(pictureList){
        let pictures = document.querySelectorAll(pictureList);
        let body = document.querySelector('body');
        pictures.forEach((el,i)=>{
            el.addEventListener('click',(e)=>{
                let div = document.createElement('div');
                let img = document.createElement('img');
                let button = document.createElement('button');
                img.setAttribute('src',e.target.getAttribute('src'));
                div.classList.add('fullScreen');
                button.classList.add('close');
                button.innerText = 'Close';
                div.appendChild(img);
                div.appendChild(button);
                body.appendChild(div);
                button.addEventListener('click',(e)=>{
                    div.parentElement.removeChild(div);
                });
            });
        });
    }

    filterImage('#gallery img','#hideButton','#showButton','#tagInput');
    viewImage('#gallery img');
});
