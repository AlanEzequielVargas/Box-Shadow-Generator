const square = document.querySelector('.square')
const inputHorizontalShadow = document.querySelector('[name="horizontal-shadow"]')
const inputVerticalShadow = document.querySelector('[name="vertical-shadow"]')
const inputShadowSize = document.querySelector('[name="shadow-size"]')
const inputBlurRadius = document.querySelector('[name="blur-radius"]')
const inputBorderRadius = document.querySelector('[name="border-radius"]')
const inputBackgroundColor = document.querySelector('[name="background-color"]')
const inputShadowColor = document.querySelector('[name="shadow-color"]')
const inputWithOutput = document.querySelector('[name="output"]')

inputHorizontalShadow.addEventListener('input', e => {})


inputVerticalShadow.addEventListener('input',e => {})


inputShadowSize.addEventListener('input',e => {})


inputBlurRadius.addEventListener('input',e => {})


inputBorderRadius.addEventListener('input',e => {})

inputBackgroundColor.addEventListener('input',e => {})


inputShadowColor.addEventListener('input',e => {})


setInterval(refreshOutput,1)

function refreshOutput(){
  square.style.boxShadow = `${inputHorizontalShadow.value}px ${inputVerticalShadow.value}px ${inputBlurRadius.value}px ${inputShadowSize.value}px ${inputShadowColor.value}`;

  square.style.backgroundColor = `${inputBackgroundColor.value}`;

  square.style.borderRadius = `${inputBorderRadius.value}px`;

  inputWithOutput.value = `box-shadow: ${inputHorizontalShadow.value}px ${inputVerticalShadow.value}px ${inputBlurRadius.value}px ${inputShadowSize.value}px ${inputShadowColor.value}; border-radius: ${inputBorderRadius.value}px;`;
}


