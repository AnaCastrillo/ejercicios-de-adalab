const list = document.querySelector('div');
const madrid = [
	'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Gran_V%C3%ADa_%28Madrid%29_1.jpg/1200px-Gran_V%C3%ADa_%28Madrid%29_1.jpg',
	'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/e6/bf/caption.jpg?w=1000&h=-1&s=1',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Madrid_%2838624991251%29.jpg/1200px-Madrid_%2838624991251%29.jpg',
];

const london = [
	'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/03/18074938/london-lockdown-likely.jpg',
	'https://lp-cms-production.imgix.net/image_browser/london-big-ben.jpg',
	'https://www.syracuse.edu/wp-content/uploads/london-large-image-1100x733.jpg',
];

/*for (const photo of madrid) {
	const imagList = document.createElement('img');
	imagList.classList.add('img');
	imagList.src = photo;
	list.appendChild(imagList);
}*/

function goCity(city) {
	console.log(city);
	removeImgs();
	if (city === 'madrid') {
		for (const photo of madrid) {
			const imagList = document.createElement('img');
			imagList.classList.add('img');
			imagList.src = photo;
			list.appendChild(imagList);
			list.appendChild(imagList);
		}
	} else if (city === 'london') {
		for (const photo of london) {
			const imagList = document.createElement('img');
			imagList.classList.add('img');
			imagList.src = photo;
			list.appendChild(imagList);
		}
	}
}

function removeImgs() {
	const imgElements = document.querySelectorAll('.img');
	for (const imgElement of imgElements) {
		imgElement.remove();
	}
}

const select = document.querySelector('select');

function go() {
	goCity(select.value);
}

select.addEventListener('change', go);

goCity('madrid');
