const anime = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll (){
    const windowTop = window.scrollY + ((window.innerHeight * 3)/ 4)
    anime.forEach(function(e){
        if((windowTop) > e.offsetTop){
            //console.log(windowTop +' '+ e.offsetTop)
            e.classList.add(animationClass)
        }else{
            e.classList.remove(animationClass)
        }
    })
}

window.addEventListener('scroll', function(){
    animeScroll()
    console.log('aqui!')
})
