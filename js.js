(function(){
	var topMenuBtn = document.querySelectorAll(".openMenu"),
		topMenuTarget = document.querySelectorAll(".openMenu-target");
		/*end of menu var*/
	var sliderCanvas = document.getElementById('slider_top'),
		currentIndex = 0;
		/*end of first slider var*/
	var ThirdBlockSliderCanvas = document.getElementById("third-block__slider-canvas"),
		sliderArrowLeft = document.getElementById("sliderArrowLeft"),
		sliderArrowRight = document.getElementById("sliderArrowRight"),
		finalThirdBlockSlider ="",
		ThirdBlockSliderIndex = 0,
		topSliderDots = document.getElementById("topSliderDots");
		sliderDot = '<div class="slider_dot"></div>',
		sliderDotBlock ="";
		topSliderFinalBlock = "",
		topSliderCell = '<div class="content__first-block__slider__cell"><p class="first-block__slider__text"></p></div>';
	
	var clientCell = document.querySelectorAll(".forth-block__starboardside__clients-block__cell");	
	
	var BuildTopSliderCell = function(){
		for(var i = 0; i < topSlider.length; i++){
			topSliderFinalBlock = topSliderFinalBlock + topSliderCell;
			sliderDotBlock = sliderDotBlock + sliderDot;
		}
		topSliderDots.insertAdjacentHTML("beforeEnd", sliderDotBlock);
		sliderCanvas.insertAdjacentHTML("beforeEnd",topSliderFinalBlock);
		setPicture();
		dotIndex();
	}
	var setPicture = function(){
		var sliderImg = document.querySelectorAll(".content__first-block__slider__cell"),
			sliderText = document.querySelectorAll(".first-block__slider__text");
			for(i = 0; i < sliderImg.length; i++){
				sliderImg[i].style.backgroundImage = "url("+topSlider[i].img+")";
				if(topSlider[i].text != undefined){
					sliderText[i].innerHTML = topSlider[i].text;
				}
				

			}
			console.log(topSlider.length);
	}

	var setMenuBtn = function(){
		for(var i = 0; i < topMenuBtn.length; i++){

			topMenuBtn[i].addEventListener("click",openMenu);
		}
	}
	var openMenu = function(event){
		for (var i = 0; i < topMenuBtn.length; i++){
			if(topMenuBtn[i] == event.target){
				topMenuTarget[i].classList.toggle("active__top__nav__clause");
			}
		}
	}
	var dotIndex = function(){
		sliderDots = document.querySelectorAll(".slider_dot");
		sliderDots[0].classList.add("slider_dot_active");
		for( var i = 0; i < sliderDots.length; i++){
			(function(i){
				sliderDots[i].addEventListener('click',function(){
					sliderChange(i);
					clearInterval(startSlide);
					auto();
					currentIndex = i;
				})
			})(i);
		}
	}
	var hightLightDot = function(n){
		for(var i = 0; i < sliderDots.length; i++){
			if(i === n){
				sliderDots[i].classList.add("slider_dot_active");
			}else{
				sliderDots[i].classList.remove("slider_dot_active");
			}
		}
	}
	var sliderChange = function(i){
		var currentIndex = i;
		var x = -currentIndex*100;
		 sliderCanvas.style.left = x+"%";
		 hightLightDot(currentIndex);
	}
	var auto =function(){
		startSlide = setInterval(function(){
				if (currentIndex < topSlider.length-1){
					++currentIndex
				}else{currentIndex = 0}
		sliderChange(currentIndex);
	},3000)}

	var buildThirdBlockSlider = function(){
			thirdBlockSliderCell =  '<div class="third-block__slider-cell">'+
										'<div class="picture_menu">'+
											'<div class="picture_svg">'+
												'<a href="#"><svg><use xlink:href="#svg__eye"></use></svg></a>'+
											'</div>'+
											'<div class="picture_svg">'+
												'<a href="#"><svg><use xlink:href="#svg__link"></use></svg></a>'+
											'</div>'+
										'</div>'+
									'</div>';
			for(var n = 0; n < latestWork.length; n++){
				finalThirdBlockSlider = finalThirdBlockSlider+thirdBlockSliderCell;
			}
			ThirdBlockSliderCanvas.insertAdjacentHTML("beforeEnd",finalThirdBlockSlider);
			fillThirdBlockSlider();
	}
	var fillThirdBlockSlider = function(){
			var cell = document.querySelectorAll(".third-block__slider-cell");
			for(i = 0; i < latestWork.length; i++){
				cell[i].style.backgroundImage = "url("+latestWork[i]+")";
			}
	}

	var slideThirdBlockCanvasLeft = function(){
		if(ThirdBlockSliderIndex > 0){
			ThirdBlockSliderIndex--;
		}
		slideThirdBlockCanvasMove();
	}
	var slideThirdBlockCanvasRight = function(){
		if(ThirdBlockSliderIndex < latestWork.length-4){
			ThirdBlockSliderIndex++;
		}
		slideThirdBlockCanvasMove();
	}

	var disbaleSlideThirdBlockArrow = function(arrow){
		arrow.style.backgroundColor = "#d1d1d1";
	}
	var enableSlideThirdBlockArrow = function(arrow){
		arrow.style.backgroundColor ="#81e4ed";
	}

	var slideThirdBlockCanvasMove = function(){
		if (ThirdBlockSliderIndex == 0){
			disbaleSlideThirdBlockArrow(sliderArrowLeft);
		}else{
			enableSlideThirdBlockArrow(sliderArrowLeft);
		}
		if(ThirdBlockSliderIndex == latestWork.length-4){
			disbaleSlideThirdBlockArrow(sliderArrowRight);
		}else{
			enableSlideThirdBlockArrow(sliderArrowRight);
		}
		ThirdBlockSliderCanvas.style.left= ThirdBlockSliderIndex*(-260)+"px";
	}

	var setPictureClientCell = function(){
				for(var i = 0; i < clientCell.length; i++){
					clientCell[i].style.backgroundImage = "url(img/client"+i+".png)";
				}
			}

	auto();
	setMenuBtn();
	BuildTopSliderCell();
	buildThirdBlockSlider();
	sliderArrowLeft.addEventListener("click",slideThirdBlockCanvasLeft);
	sliderArrowRight.addEventListener("click",slideThirdBlockCanvasRight);
	setPictureClientCell();
})();