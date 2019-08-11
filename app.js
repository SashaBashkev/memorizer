const input = document.querySelector('input[type="text"]');
const cities = document.querySelectorAll('ul li');

input.addEventListener('keyup', listCities)

function listCities(e){
	
	let result = Array.from(cities).filter(city => {
		if(city.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
			city.style.display = 'block';
		}else {
			city.style.display = 'none';
		}
	});
	return result;
}
