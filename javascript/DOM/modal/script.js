const btnModal = document.querySelector('button');
const modal = document.querySelector('div')

btnModal.addEventListener('click', function(e){
    modal.classList.toggle('invisble')
})