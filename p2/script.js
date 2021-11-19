let items = document.querySelectorAll('.grid-item')

let playButton = document.querySelector('.play')
let layer = document.querySelector('#layer')

let isEnabled = false

playButton.addEventListener('click',function(){
  layer.style.display = 'none'
  isEnabled = true
  document.body.classList.remove('isNotEnabled')
})


let colors = [
	'cyan',
	'magenta',
	'yellow',
	'black'
]

let counts = []

for(let counter = 0; counter < items.length; counter++){
  let item = items[counter]
  let count = 0
  counts.push(count)

  item.addEventListener('mouseenter',function(){
    if(isEnabled){
      item.style.backgroundColor = colors[counts[counter] % 4]
    

      counts[counter]++
    }
  })

  item.addEventListener('click',function(){
    if(isEnabled){
      counts[counter - 96] ++
      counts[counter + 96] = counts[counter - 96]
      counts[counter - 1] = counts[counter - 96]
      counts[counter + 1] = counts[counter - 96]
      
      items[counter - 96].style.background = colors[counts[counter - 96] % 4]
      items[counter + 96].style.background = colors[counts[counter + 96] % 4]

      items[counter - 1].style.background = colors[counts[counter - 1] % 4]
      items[counter + 1].style.background = colors[counts[counter + 1] % 4]

//       items[counter - (96*counts[counter])].style.background = 'red'
//           items[counter - 96].classList.toggle('sideClick')
//       items[counter + 96].classList.toggle('sideClick')

//       items[counter - 1].classList.toggle('sideClick')
//       items[counter + 1].classList.toggle('sideClick')

//       item.style.backgroundColor = colors[clickCount % 4]
 
    }
    // counts[counter]++
  })
  
  

}

