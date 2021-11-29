//setTimeout e setInterval são callbcks

//settimeout
console.log('primeiro comando')

setTimeout(function(){
    console.log('segundo comando(comando setTimeout)')
},2000)
console.log('terceiro comando')

//setInterval
setInterval(function(){
   console.log('testando setInterval')
}, 1000);