document.addEventListener('DOMContentLoaded', function(){

    /**Very simple function for manual slide show
    * @param {string} nextButton Next button selector
    * @param {string} previousButton Previous button selector
    * @param {string} pictureList All li elements with pictures selector
    */
    function slider(nextButton,previousButton,pictureList){
        const next = document.querySelector(nextButton);
        const previous = document.querySelector(previousButton);
        let pictures = document.querySelectorAll(pictureList);
        let counter = 0;
        pictures[counter].classList.add('visible');
        next.addEventListener('click',function(){
            pictures[counter].classList.toggle('visible');
            counter++;
            if(counter==pictures.length){
                counter=0;
            }
            pictures[counter].classList.toggle('visible');
        });
        previous.addEventListener('click',function(){
            pictures[counter].classList.toggle('visible');
            counter--;
            if(counter<0){
                counter=pictures.length-1;
            }
            pictures[counter].classList.toggle('visible');
        });
    }

    slider('#nextPicture','#prevPicture','.slider ul li');
});
