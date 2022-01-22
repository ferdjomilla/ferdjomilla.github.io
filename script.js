const mobileButton = document.getElementById('mobile-menu')
            nav = document.querySelector('nav')
            mobileExit = document.getElementById('mobile-exit');

        mobileButton.addEventListener('click', () => {
            nav.classList.add('show-menu');
        })

        mobileExit.addEventListener('click', () => {
            nav.classList.remove('show-menu');
        })


const btt = document.getElementById('btnTop')
	window.onscroll = function() {scrollFunction()};
		function scrollFunction() { 
			if(document.documentElement.scrollTop >= (document.documentElement.clientHeight) * 0.5) {
				btt.classList.add('show-button');
				}
			else {
				btt.classList.remove('show-button');
				}    
		}

		btt.addEventListener('click', () => {
		  document.documentElement.scrollTop = 0;
		})


const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
	
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},

	breakpoints: {
		// when window width is >= 768px
		768: {
			slidesPerView: 3,
			spaceBetween: 30,

		}
	}
	});


function attachEvents() {
    const btnLoad = document.getElementById('loadMore');
	const swiperWrapper = document.getElementById('swiperWrapper');
	
	for (var i = 0; i <= 6; i++) {
		loadData();
	}

    btnLoad.addEventListener('click', loadData);

    function loadData() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => addToSlider(data))
            .catch(handleError)

        function addToSlider(data) {
			swiper.update();
			Object.entries(data).forEach(([id, cat]) => {
                    let div = document.createElement('div');
					div.className = 'swiper-slide';

					let catImage = document.createElement("img");
					catImage.setAttribute("src", cat.url);
					catImage.setAttribute("height", "15");
					catImage.setAttribute("width", "15");

					div.appendChild(catImage)
					swiperWrapper.appendChild(div);
                })
        }
    }

    function handleError(err) {
        console.error(err);
    }
}
attachEvents();

