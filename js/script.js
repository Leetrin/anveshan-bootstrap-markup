
$(document).ready(function(){

  $("#click").click(function (){ // #click - это класс или айди кнопки
    $('html, body').animate({
      scrollTop: $("#div1").offset().top // #div1 - это див до которого скроллить
    }, 2000); // 2000 - это время анимации в миллисекундах
  });
});