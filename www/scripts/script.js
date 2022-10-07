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



  // Слик слайдер
  $('.js-gallery-carousel').slick({
    autoplay: false,
    infinite: false,
    dots: true
  });


  // ajax хапрос отзывов
  $('.js-reviews-btn').on('click', function(){
    
    $.ajax({
      type: 'POST',
      url: 'jsons/reviews.json',
      data: 'count=2&sort=new',
      success: function(responce) {
        let html = createHtmlString(responce.reviews);
        addToPage(html);
      },
      error: function() {
        alert('Извини бро! Чет у нас ошибка - попробуй позже');
      }
    });


  });


  function createHtmlString(reviewsArray) {
    let htmlString = '';

    reviewsArray.forEach(function(review) {
      htmlString = htmlString + `<div class="reviews-item">
        <img src="${review.photoUrl}" alt="${review.photoAlt}" class="reviews-ava" />
        <div class="reviews-text">
          <strong class="reviews-name">${review.name}</strong>
          <blockquote class="reviews-quote">
            “${review.quote}”
          </blockquote>
        </div>
      </div>`;
    });

    return htmlString;
  }

  function addToPage(string) {
    $('.js-reviews-wrap').append(string);
  }

});
