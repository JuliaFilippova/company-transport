// слайдер автоматический
// с помощью querySelectorAll получаем все слайды из контейнера
var slide = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
// задаем интервал в 3.5 секунды для следующего слайда (3500ms)
var slideInterval = setInterval(nextSlide,3000);
 
 //меняем класс для текущего слайда, чтобы спрятать его. 
 // Свойство transition автоматически обрабатывает плавное затухание
function nextSlide() {
    slide[currentSlide].className = 'slide';
    // Потом добавляем класс к текущему слайду. 
    // Мы используем оператор % на случай, если это был последний слайд, чтобы вернуться к первому. 
    // Данный оператор отлично подходит в случаях, когда необходимо выполнять математические операции с циклами типа часов или календаря.
    // В нашем случае 5 слайдов. Посчитаем все числа: 1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0.
    // После получения индекса слайда мы меняем класс и показываем новый. И опять прозрачность обрабатывается свойством transition.
    currentSlide = (currentSlide+1)%slide.length;
    slide[currentSlide].className = 'slide showing';
}



// слайдер по клику
let dots = document.getElementsByClassName("dot");
	dotsArea = document.getElementsByClassName("dots-box")[0];
	slides = document.getElementsByClassName("slides__item");
	prevBtn = document.getElementsByClassName("btn-prev")
	nextBtn = document.getElementsByClassName("btn-next")
	slideIndex = 1;

showSlides(slideIndex);



function showSlides(n) {

	if (n < 1 ) {
		slideIndex = slides.length;
	}else if (n > slides.length) {
		slideIndex = 1
	}
	
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("active");
}


function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide (n) {
	showSlides(slideIndex = n)
}
prevBtn.onclick = function () {
	plusSlides(-1)
}
nextBtn.onclick = function () {
	plusSlides(1)
}
dotsArea.onclick = function(e) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (e.target.classList.contains("dot") && e.target == dots[i - 1]) {
			currentSlide(i);
		}
	}
}