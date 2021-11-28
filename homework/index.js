const spiritAnimals = [
  'strong wolf',
  'crying butterfly',
  'cunning fox',
  'sensitive shellfish',
  'smart monkey',
]

function getRandomInt() {
  return Math.floor(Math.random() * spiritAnimals.length)
}

function generateSpiritAnimal() {
  const value = document.querySelector('input').value

  if (!value.trim()) {
    document.querySelector('input').value = ''
    return
  }

  const fullSpiritName = `${value} - ${spiritAnimals[getRandomInt()]}`

  const spritAnimalMarkup = document.getElementById('spirit-animal')

  spritAnimalMarkup.innerHTML = fullSpiritName

  document.querySelector('input').value = ''
}

const button = document.querySelector('button')
const select = document.querySelector('select')
let currentSelectOption = select.options[select.options.selectedIndex].value

select.addEventListener('change', function () {
  button.removeEventListener(currentSelectOption, generateSpiritAnimal)

  const nextSelectedOption = select.options[select.options.selectedIndex].value

  button.addEventListener(nextSelectedOption, generateSpiritAnimal)

  currentSelectOption = nextSelectedOption
})

button.addEventListener('click', generateSpiritAnimal)
