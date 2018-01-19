document.addEventListener('DOMContentLoaded',function(){

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
    viewImage('.gallery ul li');
});
