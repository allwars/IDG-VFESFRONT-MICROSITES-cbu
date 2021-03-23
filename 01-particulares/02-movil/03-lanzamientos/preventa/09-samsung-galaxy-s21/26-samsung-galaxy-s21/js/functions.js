// matriz superior
var linkado = {};

// segundo nivel con modeoos
linkado['GS21U'] = {};
linkado['GS21P'] = {};
linkado['GS21'] = {};

// tercer nivel con capacidades
linkado['GS21U']['128GB'] = {};
linkado['GS21U']['256GB'] = {};
linkado['GS21U']['512GB'] = {};
linkado['GS21P']['128GB'] = {};
linkado['GS21P']['256GB'] = {};
linkado['GS21']['128GB'] = {};
linkado['GS21']['256GB'] = {};

// links del Galaxy S21 Ultra 5G
linkado['GS21U']['128GB']['black'] = 'none';
linkado['GS21U']['128GB']['silver'] = 'none';

linkado['GS21U']['256GB']['black'] = 'https://es.wikipedia.org/wiki/3';
linkado['GS21U']['256GB']['silver'] = 'https://es.wikipedia.org/wiki/4';

linkado['GS21U']['512GB']['black'] = 'none';
linkado['GS21U']['512GB']['silver'] = 'none';

// links del Galaxy S21+ 5G
linkado['GS21P']['128GB']['black'] = 'https://es.wikipedia.org/wiki/5';
linkado['GS21P']['128GB']['violet'] = 'https://es.wikipedia.org/wiki/6';
linkado['GS21P']['128GB']['silver'] = 'https://es.wikipedia.org/wiki/7';

linkado['GS21P']['256GB']['black'] = 'none';
linkado['GS21P']['256GB']['violet'] = 'none';
linkado['GS21P']['256GB']['silver'] = 'none';

// links del Galaxy S21 5G
linkado['GS21']['128GB']['grey'] = 'https://es.wikipedia.org/wiki/11';
linkado['GS21']['128GB']['pink'] = 'https://es.wikipedia.org/wiki/12';
linkado['GS21']['128GB']['white'] = 'https://es.wikipedia.org/wiki/13';
linkado['GS21']['128GB']['violet'] = 'https://es.wikipedia.org/wiki/14';

linkado['GS21']['256GB']['grey'] = 'none';
linkado['GS21']['256GB']['pink'] = 'none';
linkado['GS21']['256GB']['white'] = 'none';
linkado['GS21']['256GB']['violet'] = 'none';



var nsis = "otros";
var megasG21Ultra = "256";
var colorG20Ultra = "Black"

function montaUrl(modname, megas, modcolor) {
  return linkado[modname][megas][modcolor];
}

$(document).ready(function () {
  $('.cta-black[data-model="GS21U"]').attr('href', linkado['GS21U']['256GB']['black']);
  $('.cta-black[data-model="GS21P"]').attr('href', linkado['GS21P']['128GB']['violet']);
  $('.cta-black[data-model="GS21"]').attr('href', linkado['GS21']['128GB']['pink']);


});

$('.btn-capacity').on('click', function () {
  if (!$(this).hasClass('btn-capacity-select')) {
    var megaspulsado = $(this).attr('data-capacity');
    var modelpulsado = $(this).closest('.product').attr('data-model');
    var colorpulsado = $(this).closest('.product').find('.active').attr('data-color');
    $('.cta-black[data-model="' + modelpulsado + '"]').attr('href', linkado[modelpulsado][megaspulsado][colorpulsado]);
    $(this).siblings('.btn-capacity').removeClass('btn-capacity-select');
    $(this).addClass('btn-capacity-select');

    console.log("hecho" + megaspulsado + ' ' + modelpulsado + ' ' + colorpulsado);
  }
});

$('.btn-color').on('click', function () {
  var colorpulsado = $(this).attr('data-color');
  var modelpulsado = $(this).closest('.product').attr('data-model');

  var megaspulsado = $(this).closest('.product').find('.btn-capacity-select').attr('data-capacity');
  $('.cta-black[data-model="' + modelpulsado + '"]').attr('href', linkado[modelpulsado][megaspulsado][colorpulsado]);
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
	
  var imagenactiva = $(this).closest('.product').find('.visible');
  imagenactiva.removeClass('visible');
  imagenactiva.addClass('oculto');
  var imagenPulsada = $(this).closest('.product').find('img[data-color="' + colorpulsado + '"]');
  imagenPulsada.removeClass('oculto');
  imagenPulsada.addClass('visible');
	
  console.log("hecho" + colorpulsado + ' ' + modelpulsado + ' ' + megaspulsado);
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      && location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
