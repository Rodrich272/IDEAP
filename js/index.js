var nav=document.querySelector('nav')
window.addEventListener('scroll', function(){
    if(this.window.pageXOffset > 20){
        nav.classList.add('bg-dark', 'shadow');
    }else{
        nav.classList.remove('big-dark', 'shadow')
    }
})