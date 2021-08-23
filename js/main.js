$(document.onload=function() {

  let currentFloor = 2; // хранение текущего этажа
  counterUp = $('.counter-btn--up');  // кнопку вверх
  counterDown = $('.counter-btn--down'); // кнопку вниз
  floorPath = $('.home__image-thumb path'); // отдельный этаж в svg
  modal = $('.modal'); // модальное окно
  modalBtn = $('.modal-btn'); // кнопку закрытия окна
  homeFloorsButton = $('.home__floors-button'); // кнопка открытия окна

  // наведение мыши на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); // удаляем активный класс
    currentFloor = $(this).attr('data-num'); // получаем значение текущего этажа
    $('.count').text(currentFloor);  // выодим значение этажа в счётчик
  });

  // отслеживаем клик по кнопке вверх
  counterUp.on('click', function () {

    if (currentFloor < 17) { // проверяем и устанавливаем верхнюю границу этажей
      currentFloor++; // увеличиваем счётчик на 1
      // форматируем счётчик в формат 00 вместо 0
      uscurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.count').text(uscurrentFloor); // выодим отформатированное значение этажа в счётчик
      floorPath.removeClass('current-floor'); // удаляем активный класс
      $(`[data-num = ${uscurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });

  // отслеживаем клик по кнопке вниз
  counterDown.on('click', function () {

    if (currentFloor > 1) {
      currentFloor--; // уменьшаем счётчик на 1
      uscurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.count').text(uscurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-num = ${uscurrentFloor}]`).toggleClass('current-floor');
    }
  });

  floorPath.on('click', toggleModal);
  modalBtn.on('click', toggleModal);
  homeFloorsButton.on('click', toggleModal);

  // функция открытия-закрытия модального окна
  function toggleModal() {
    modal.toggleClass('is-open');
  }


});
