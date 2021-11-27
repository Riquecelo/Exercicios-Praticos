//selecionar o elemento
var title = document.querySelector('#title');

//maneiras de alterar o texto no DOM

//innerHTML
title.innerHTML = 'Testando o texto alterado com inneHTML'

//textContent -> mais recomendado
var subtitle = document.querySelector('.subtitulo')

subtitle.textContent = 'Testando o textContent';