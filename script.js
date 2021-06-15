const dropDown = document.querySelector('.main-nav');
const color = document.querySelector('.background');



dropDown.addEventListener('click',function(e){
    if (e.target.className == 'menu');{
        let menuDrop = e.target.parentElement;
        dropDown.classList.toggle('drop');
    }
 })

color.addEventListener('click', function(c){
    if (c.target.className == 'red'){
        let backgroundColor = c.target.parentElement;
        color.classList.remove('orange-background');
        color.classList.remove('purple-background');
        color.classList.remove('green-background');
        color.classList.toggle('red-background');}

    });

    color.addEventListener('click', function(c){
        if (c.target.className == 'orange'){
            let backgroundColor = c.target.parentElement;
            color.classList.remove('red-background');
            color.classList.remove('purple-background');
            color.classList.remove('green-background');
            color.classList.toggle('orange-background');
        }
    });
    color.addEventListener('click', function(c){
        if (c.target.className == 'purple'){
            let backgroundColor = c.target.parentElement;
            color.classList.remove('orange-background');
            color.classList.remove('red-background');
            color.classList.remove('green-background');
            color.classList.toggle('purple-background');
        }
    });
    color.addEventListener('click', function(c){
        if (c.target.className == 'green'){
            let backgroundColor = c.target.parentElement;
            color.classList.remove('orange-background');
            color.classList.remove('purple-background');
            color.classList.remove('red-background');
            color.classList.toggle('green-background');
        }
    });
    