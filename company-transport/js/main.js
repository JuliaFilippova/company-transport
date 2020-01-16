
//Яндекс карта 
	if($('#location').length) { 
		ymaps.ready(init);
	    function init(){
	        var myMap = new ymaps.Map("map", {
	            center: [55.80336172662323,37.586239589965786],
	            zoom: 16,
	            controls: [],
	            behaviors: ['drag']
	        });
	        //яндекс метка
	        var myPlacemark = new ymaps.Placemark(
	        //координаты метки
	        [55.80277556894847,37.58375049999996], {
	        	ballonContent: 'Бутырская улица, 62',
	        	iconCaption: 'Бутырская улица, 62'
	        });
	        //Добавление метки на карту
	        myMap.geoObjects.add(myPlacemark);
	        //Смещение центра карты
	        var position = myMap.getGlobalPixelCenter();
	        myMap.setGlobalPixelCenter([position[0] + 200, position[1]]);
	    };
	};