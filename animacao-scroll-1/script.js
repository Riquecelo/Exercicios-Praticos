const elements = document.querySelectorAll('.hidden')


//usando objeto IntersectionObserver
const myObserver = new IntersectionObserver((obs) =>{
    obs.forEach((e) =>{
        if(e.isIntersecting){
            //lastOne.classList.add('visivel')
            console.log(e ,e.isIntersecting)
            e.target.classList.add('visivel')
        }else{
            //lastOne.classList.remove('visivel')
            e.target.classList.remove('visivel')
        }
    })
    console.log('aqui!')
})

elements.forEach( elemt => myObserver.observe(elemt))
