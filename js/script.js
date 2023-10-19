var nav=document.querySelector('nav')
window.addEventListener('scroll', function(){
    if( window.pageXOffset > 20){
        nav.classList.add('bg-dark', 'shadow');
    }else{
        nav.classList.remove('big-dark', 'shadow')
    }
})

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

