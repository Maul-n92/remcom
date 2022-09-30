$(document).ready(function(){

  // let isClose = true;

  $('.js-header-burger').on('click', function() {

    $('.js-menu').slideToggle();

    // if (isClose) {
    //   $('.js-menu').slideDown();
    //   isClose = false;
    // } else {
    //   $('.js-menu').slideUp();
    //   isClose = true;
    // }

  });


  // Аккордеоны - часто задаваемые вопросы
  let prevAccordionBtn;

  $('.js-accordion-btn').on('click', function() {
    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
    } else {
      $('.js-accordion-btn').next().slideUp();
      $(this).next().slideDown();
      prevAccordionBtn = this;
    }
  });

  // Табы в контактах
  $('.js-tabs-link').on('click', function(event){
    event.preventDefault();

    $('.js-tabs-link').removeClass('active');
    $(this).addClass('active');

    const index = $(this).index('.js-tabs-link');

    $('.js-tabs-content').removeClass('active');
    $('.js-tabs-content').eq(index).addClass('active');
  });

  // Фильтр в Работах
  $('.js-filter-link').on('click', function(event){
    event.preventDefault();

    $('.js-filter-link').removeClass('active');
    $(this).addClass('active');

    let dataFilter = $(this).data('filter');
    console.log(dataFilter);

    if (dataFilter === 'all') {
      $('.js-works-item').show();
      return;
    }

    $('.js-works-item').each(function(){
      let dataType = $(this).data('type');
      console.log(dataType);

      if (dataFilter === dataType) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });


  });
});
