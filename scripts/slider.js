new Swiper('.slider', {
	speed: 2400,
	parallax: true,
	spaceBetween: 18,

	loop: true,
})



// slider helper hidden
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('_hidden');
		} else { 
			change.target.classList.remove('_hidden');
		}
	});
 }
 
 let options = {
	threshold: [0.5] };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll('.slider__helper');
 
 for (let elm of elements) {
	observer.observe(elm);
 }