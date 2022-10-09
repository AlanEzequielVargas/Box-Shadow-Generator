const textInput = document.querySelector('[type="text"]');

const button = document.querySelector('[type="button"]')

const p = document.querySelector('p')

const cuadrado = document.querySelector('.square')

const range = document.querySelector('[type="range"]')

const selectColor = document.querySelector('[type="color"]')




textInput.addEventListener('change',(e) => {
  const p = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
  p.innerHTML = e.target.value;
})
//cuando escribimos se actualiza letra por eltra
textInput.addEventListener('input',(e)=>{
  const p = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
  p.innerHTML = e.target.value;
})
//cuando clickamos se actualiza el parrafo
button.addEventListener('click',(e)=>{
  const broda = e.target.nextElementSibling
  broda.innerHTML = textInput.value
})

selectColor.addEventListener('input',(e)=>{
  cuadrado.style.backgroundColor = e.target.value
})


range.addEventListener('input',(e)=>{
  p.innerHTML = e.target.value
  //podemos manipular el css
  cuadrado.style.width = `${e.target.value}px`
})

const horizontalShadow = document.querySelector('[name="sombra-horizontal"]')

horizontalShadow.addEventListener()










