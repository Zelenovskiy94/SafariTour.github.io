$(function () {
	var r = Raphael('map', 961, 469);
	var attributes = {
		fill: '#add3e3',
		stroke: '#add3e3'

	};
	var arr = new Array();

	for (var country in paths) {
		var obj = r.path(paths[country].path);
		obj.attr(attributes);
	};

	  $(paths.africa.path).on('click', function(e){ //кликаем по блоку африка
      $('#africaDescr').addClass('show');// по клику добавляем класс show блоку с описнаие
  });
  jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var descrBlock = $('#africaDescr')// записываем в переменную id блока с описание континента
      if (!descrBlock.is(e.target) // если клик был не по нашему блоку
          && descrBlock.has(e.target).length === 0) { // и не по его дочерним элементам
        $('#africaDescr').removeClass('show'); // удаляем класс show у блока с описанием
      }
    });
  });

})