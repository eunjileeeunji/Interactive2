console.log('hi')

let bar = document.querySelector('.gaugebar .fill')
// console.log(bar)

// bar.style.width = "50%"

let hotspots = document.querySelectorAll('.hotspot')

let totalClicked = 0

for(let counter = 0; counter < hotspots.length; counter ++){

	let thisHotspot = hotspots[counter]
	let hasBeenClicked = false

	thisHotspot.addEventListener('click',function(){


		if(!hasBeenClicked){
			totalClicked ++
			bar.style.width = (totalClicked / hotspots.length) * 100 + '%'
		}

		hasBeenClicked = true		
	})
}

for(let counter = 0; counter < hotspots.length; counter ++){

	let thisHotspot = hotspots[counter]
	let hasBeenClicked = false

	thisHotspot.addEventListener('click',function(){

    let labelText = document.querySelector('#barLabel')

        if(!hasBeenClicked){
	       totalClicked ++
	       labelText.innerText = totalClicked + 'of 14 items'
        }

        hasBeenClicked = true		
	})
}


let checkBoxes = document.querySelectorAll('.checkBox')

for(let counter = 0; counter < checkBoxes.length; counter ++){

	let thisCheckBox = checkBoxes[counter]

	thisCheckBox.addEventListener('click',function(){
		thisCheckBox.classList.toggle('checked')
	})
}