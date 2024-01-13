/* eslint-disable no-unused-vars */
/* eslint-disable standard/array-bracket-even-spacing */
/* eslint-disable no-undef */
let WOW
let $skrollr
let tpj
const $ = require('jquery')
if (typeof window !== 'undefined') {
  const $ = require('jquery')
  window.$ = $
  window.jQuery = $
  tpj = $.noConflict()
  WOW = require('wowjs')
  $skrollr = require('skrollr')
  require('owl.carousel/dist/owl.carousel')
  require('jarallax/dist/jarallax.min')
  require('isotope-layout')
  require('magnific-popup/dist/jquery.magnific-popup.min')
  require('moment')
  const revolution = () => import('../../static/revslider/js/revolution.tools.min')
  const rs6 = () => import('../../static/revslider/js/rs6.min')
  const isotop = () => import('../../static/js/isotop/js/isotope.pkgd.min')
  const chatBundle = () => import('../js/plugin/Chart.bundle.min')
  const chart = () => import('../js/plugin/Chart.min')
  revolution()
  rs6()
  isotop()
  chatBundle()
  chart()
}

export const themes = {
  index () {
    this.loaderInit()
    this.onScroll()
    this.toggleDropdown()
    this.skrollr()
    this.jarallax()
    this.wowInit()
    this.owlCarousel()
    this.progressBar()
    // this.magnific()
    this.isotope()
    this.chartJs()
    this.accordion()
  },
  loaderInit () {
    // eslint-disable-next-line no-undef
    $('#load').fadeOut()
    // eslint-disable-next-line no-undef
    $('#loading').delay(1000).fadeOut('slow')
  },
  progressBar () {
    const elementExist = this.checkElement('class', 'iq-progress-bar')
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.iq-progress-bar > span').each(function () {
        // eslint-disable-next-line no-undef
        const $this = $(this)
        const width = $this.data('percent')
        $this.css({
          transition: 'width 2s'
        })
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function () {
          // tslint:disable-next-line:only-arrow-functions
          $this.appear(function () {
            $this.css('width', width + '%')
          })
        }, 500)
      })
    }
  },
  onScroll () {
    const elementExist = this.checkElement('id', 'top')
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $(window).on('scroll', function () {
        // eslint-disable-next-line no-undef
        if ($(this).scrollTop() > 100) {
          // eslint-disable-next-line no-undef
          $('header').addClass('menu-sticky')
        } else {
          // eslint-disable-next-line no-undef
          $('header').removeClass('menu-sticky')
        }
      })
      // eslint-disable-next-line no-undef
      $('#back-to-top').fadeOut()
      // eslint-disable-next-line no-undef
      $(window).on('scroll', function () {
        // eslint-disable-next-line no-undef
        if ($(this).scrollTop() > 250) {
          // eslint-disable-next-line no-undef
          $('#back-to-top').fadeIn(1400)
        } else {
          // eslint-disable-next-line no-undef
          $('#back-to-top').fadeOut(400)
        }
      })
      // eslint-disable-next-line no-undef
      $('.nav-link').click(function (event) {
        event.preventDefault()
      })
      // eslint-disable-next-line no-undef
      $('[data-spy="scroll"]').each(function () {
        // eslint-disable-next-line no-undef
        $(this).scrollspy('refresh')
      })
    }
  },
  wowInit () {
    const elementExist = this.checkElement('class', 'wow')

    if (elementExist) {
      // eslint-disable-next-line no-undef
      new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        live: false
      }).init()
    }
  },
  toggleDropdown () {
    // eslint-disable-next-line no-undef
    $('#main-header .menu-item .toggledrop').off('click')
    // eslint-disable-next-line no-undef
    if ($(window).width() < 992) {
      // eslint-disable-next-line no-undef
      $('#main-header .menu-item .toggledrop').on('click', function (e) {
        e.preventDefault()
        // eslint-disable-next-line no-undef
        $(this).closest('li').find('.sub-menu').toggle('d-block')
      })
    }
    // eslint-disable-next-line no-undef
    $(window).on('resize', function () {
      'use strict'
      // eslint-disable-next-line no-undef
      $('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
        $(this).closest('li').find('.sub-menu').toggle('d-block')
      })
      $('#main-header .menu-item .toggledrop').off('click')
      if ($(window).width() < 992) {
        // eslint-disable-next-line no-undef
        $('#main-header .menu-item .toggledrop').on('click', function (e) {
          e.preventDefault()
          // eslint-disable-next-line no-undef
          $(this).closest('li').find('.sub-menu').toggle('d-block')
        })
      }
    })
  },
  skrollr () {
    // const $skrollr = window.skrollr
    $skrollr.init().destroy()
    $skrollr.init({
      forceHeight: false,
      easings: {
        easeOutBack (p, s) {
          s = 1.70158
          p = p - 1
          return (p * p * ((s + 1) * p + s) + 1)
        }
      },
      mobileCheck () {
        return false
      }
    })
  },
  checkElement (type, element) {
    let found = false
    let elements
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element)

        if (elements !== undefined && elements !== null && elements.length > 0) {
          found = true
        }
        break

      case 'id':
        elements = document.getElementById(element)

        if (elements !== undefined && elements !== null) {
          found = true
        }
        break
    }

    return found
  },
  jarallax () {
    // eslint-disable-next-line no-undef
    jarallax(document.querySelectorAll('[data-parallax="true"]'), {
      speed: 0.6
    })
  },
  magnific () {
    // eslint-disable-next-line no-undef
    $('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      tLoading: 'Loading image #%curr%...',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        navigateByImgClick: true,
        enabled: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    })

    // eslint-disable-next-line no-undef
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      disableOn: 700,
      mainClass: 'mfp-fade',
      preloader: false,
      removalDelay: 160,
      fixedContentPos: false
    })
  },
  owlCarousel () {
    const elementExist = this.checkElement('class', 'owl-carousel')
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.owl-carousel').each(function () {
        // eslint-disable-next-line no-undef
        const $carousel = $(this)
        $carousel.owlCarousel({
          items: $carousel.data('items'),
          loop: $carousel.data('loop'),
          margin: $carousel.data('margin'),
          nav: $carousel.data('nav'),
          dots: $carousel.data('dots'),
          autoplay: $carousel.data('autoplay'),
          autoplayTimeout: $carousel.data('autoplay-timeout'),
          navText: ['<i class="fas fa-angle-left fa-2x"></i>', '<i class="fas fa-angle-right fa-2x"></i>'],
          responsiveClass: true,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: $carousel.data('items-mobile-sm')
            },
            // breakpoint from 480 up
            480: {
              items: $carousel.data('items-mobile')
            },
            // breakpoint from 786 up
            786: {
              items: $carousel.data('items-tab')
            },
            // breakpoint from 1023 up
            1023: {
              items: $carousel.data('items-laptop')
            },
            1199: {
              items: $carousel.data('items')
            }
          }
        })
      })
    }
  },
  revslider_showDoubleJqueryError (sliderID) {
    let err = "<div class='rs_error_message_box'>"
    err += "<div class='rs_error_message_oops'>Oops...</div>"
    err += "<div class='rs_error_message_content'>"
    err += 'You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>'
    err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on"
    err += '<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it'
    err += '</div>'
    err += '</div>'
    // eslint-disable-next-line no-undef
    $(sliderID).show().html(err)
  },
  initRevSlider1 () {
    if (tpj('#rev_slider_1_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider1()
      }, 100)
    } else {
      tpj('#rev_slider_1_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderType: 'standard',
        sliderLayout: 'fullwidth',
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1400, 1024, 767, 479],
        gridheight: [600, 600, 800, 600],
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: [600, 600, 800, 600],
        responsiveLevels: [1240, 1024, 778, 480],
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider2 () {
    if (tpj('#rev_slider_2_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider2()
      }, 100)
    } else {
      tpj('#rev_slider_2_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,1240,480',
        gridwidth: '1400,1400,1400,479',
        gridheight: '700,700,700,600',
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: '700,768,400,600',
        responsiveLevels: '1240,1240,1240,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider3 () {
    if (tpj('#rev_slider_3_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider3()
      }, 100)
    } else {
      tpj('#rev_slider_3_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1400,1024,767,479',
        gridheight: '700,600,800,600',
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: '700,600,800,600',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider4 () {
    if (tpj('#rev_slider_4_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider4()
      }, 100)
    } else {
      tpj('#rev_slider_4_1').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1400,1024,778,479',
        gridheight: '800,768,600,600',
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: '800,768,600,600',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider5 () {
    if (tpj('#rev_slider_5_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider5()
      }, 100)
    } else {
      tpj('#rev_slider_5_1').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1400,1024,778,479',
        gridheight: '900,900,600,600',
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: '900,900,600,600',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider6 () {
    if (tpj('#rev_slider_6_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider6()
      }, 100)
    } else {
      tpj('#rev_slider_6_1').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1400,1024,767,479',
        gridheight: '900,700,500,400',
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: '900,700,500,400',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider7 () {
    if (tpj('#rev_slider_7_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider7()
      }, 100)
    } else {
      tpj('#rev_slider_7_1').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1400,1024,778,480',
        gridheight: '800,650,650,500',
        minHeight: '',
        autoHeight: true,
        spinner: 'spinner0',
        editorheight: '800,650,650,500',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider8 () {
    if (tpj('#rev_slider_8_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider8()
      }, 100)
    } else {
      tpj('#rev_slider_8_1').show().revolution({
        sliderType: 'hero',
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: 1600,
        gridheight: 900,
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '900,768,960,720',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider9 () {
    if (tpj('#rev_slider_9_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider9()
      }, 100)
    } else {
      tpj('#rev_slider_9_1').show().revolution({
        sliderType: 'hero',
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: 1600,
        gridheight: 750,
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '750,768,960,720',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider10 () {
    if (tpj('#rev_slider_10_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider10()
      }, 100)
    } else {
      tpj('#rev_slider_10_1').show().revolution({
        sliderType: 'hero',
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: 1600,
        gridheight: 900,
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '900,768,960,720',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider11 () {
    if (tpj('#rev_slider_11_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider11()
      }, 100)
    } else {
      tpj('#rev_slider_11_1').show().revolution({
        sliderType: 'hero',
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: 1600,
        gridheight: 800,
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '800,768,960,720',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider12 () {
    if (tpj('#rev_slider_7_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider12()
      }, 100)
    } else {
      tpj('#rev_slider_7_1').show().revolution({
        sliderType: 'hero',
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: 1600,
        gridheight: 750,
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '750,768,960,720',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider13 () {
    if (tpj('#rev_slider_9_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider13()
      }, 100)
    } else {
      tpj('#rev_slider_9_1').show().revolution({
        sliderType: 'hero',
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: 1600,
        gridheight: 800,
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '800,768,960,720',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider14 () {
    if (tpj('#rev_slider_11_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider14()
      }, 100)
    } else {
      tpj('#rev_slider_11_1').show().revolution({
        sliderType: 'hero',
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: 1600,
        gridheight: 850,
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '850,768,960,720',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        parallax: {
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider15 () {
    if (tpj('#rev_slider_3_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider15()
      }, 100)
    } else {
      tpj('#rev_slider_3_1').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,778,480',
        gridwidth: '1400,1400,767,479',
        gridheight: '850,850,800,600',
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: '850,600,800,600',
        responsiveLevels: '1240,1240,778,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider16 () {
    if (tpj('#rev_slider_4_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider16()
      }, 100)
    } else {
      tpj('#rev_slider_4_1').show().revolution({
        sliderType: 'hero',
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,778,480',
        gridwidth: '1600,1600,778,480',
        gridheight: '850,850,460,520',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '850,543,460,520',
        responsiveLevels: '1240,1240,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        parallax: {
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider17 () {
    if (tpj('#rev_slider_7_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider17()
      }, 100)
    } else {
      tpj('#rev_slider_7_1').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1600,1024,767,479',
        gridheight: '900,600,800,450',
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: '900,600,800,450',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider18 () {
    if (tpj('#rev_slider_3_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider18()
      }, 100)
    } else {
      tpj('#rev_slider_3_1').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1600,1024,767,479',
        gridheight: '900,600,700,450',
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: '900,600,700,450',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        scrolleffect: {
          set: true,
          blur: true,
          grayscale: true,
          direction: 'bottom',
          multiplicator: 1.3,
          multiplicator_layers: 1.3
        },
        sbtimeline: {
          set: true
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider19 () {
    if (tpj('#rev_slider_12_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider19()
      }, 100)
    } else {
      tpj('#rev_slider_12_1').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: 1600,
        gridheight: 800,
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '800,768,960,720',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: 'on',
          onHoverStop: false
        },
        parallax: {
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
          type: 'mouse',
          origo: 'slidercenter',
          speed: 0
        },
        sbtimeline: {
          set: true
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider20 () {
    if (tpj('#rev_slider_13_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider20()
      }, 100)
    } else {
      tpj('#rev_slider_13_1').show().revolution({
        sliderType: 'hero',
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,778,480',
        gridwidth: '1600,1600,778,480',
        gridheight: '850,850,460,520',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '850,543,460,520',
        responsiveLevels: '1240,1240,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        parallax: {
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider21 () {
    if (tpj('#welcome').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider21()
      }, 100)
    } else {
      tpj('#welcome').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullscreen',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1240,1024,778,480',
        gridheight: '950,700,700,700',
        minHeight: '',
        lazyType: 'single',
        spinner: 'spinner3',
        editorheight: '950,700,700,700',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          onHoverStop: false,
          touch: {
            touchenabled: true
          }
        },
        viewPort: {
          enable: true,
          visible_area: '20%',
          presize: true
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSlider22 () {
    if (tpj('#rev_slider_10_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider22()
      }, 100)
    } else {
      tpj('#rev_slider_10_1').show().revolution({
        jsFileLocation: 'js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: 1600,
        gridheight: 800,
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '800,768,960,720',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  getCookie (cname) {
    const name = cname + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  },
  isotope () {
    /* ------------------------
          2 Isotope
    -------------------------- */
    const elementExist = this.checkElement('class', 'isotope')
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.isotope').isotope({
        itemSelector: '.iq-grid-item'
      })

      // filter items on button click
      $('.isotope-filters').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter')
        $('.isotope').isotope({
          resizable: true,
          filter: filterValue,
          layoutMode: 'cellsByRow'
        })
        $('.isotope-filters button').removeClass('active')
        $(this).addClass('active')
      })
    }

    /* ------------------------
          3 Masonry
    -------------------------- */

    const elementExist1 = this.checkElement('class', 'iq-masonry-block')
    if (elementExist1) {
      const $msnry = $('.iq-masonry-block .iq-masonry')
      if ($msnry) {
        const $filter = $('.iq-masonry-block .isotope-filters')
        $msnry.isotope({
          percentPosition: true,
          resizable: true,
          itemSelector: '.iq-masonry-block .iq-masonry-item',
          masonry: {
            gutterWidth: 0
          }
        })

        // bind filter button click
        $filter.on('click', 'button', function () {
          const filterValue = $(this).attr('data-filter')
          $msnry.isotope({
            filter: filterValue
          })
        })

        $filter.each(function (i, buttonGroup) {
          const $buttonGroup = $(buttonGroup)
          $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.active').removeClass('active')
            $(this).addClass('active')
          })
        })
      }
    }
  },
  chartJs () {
    const elementExist = this.checkElement('id', 'canvas')
    if (elementExist) {
      if (this.checkElement('class', 'data-analytics-chart')) {
        const data = { datasets: [{ data: [60, 40, 40], backgroundColor: ['#f7be68', '#fe6c61', '#5471d2'] }], labels: ['One', 'Two', 'Three'] }
        const ctx = $('#canvas')
        const myPieChart = new Chart(ctx, { type: 'pie', data, options: { maintainAspectRatio: false, legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = myPieChart.generateLegend()
      }
      if (this.checkElement('class', 'managed-analytics-chart')) {
        const data = { labels: ['JAN', ' FEB', ' MAR', ' APR', ' MAY', ' JUN', ' JUL', ' AUG'], datasets: [{ label: 'One', fillColor: 'rgba(84, 114, 210, 0.1)', strokeColor: '#5472d2', pointColor: '#5472d2', pointStrokeColor: '#5472d2', highlightFill: '#3c5ecc', highlightStroke: '#3c5ecc', pointHighlightFill: '#3c5ecc', pointHighlightStroke: '#3c5ecc', data: [10, 15, 20, 25, 27, 25, 23, 25], borderColor: '#5471d2', backgroundColor: 'rgba(84,113,210,0.2)', pointBackgroundColor: 'rgba(84,113,210,1)', pointRadius: 5 }, { label: 'Two', fill: true, fillColor: 'rgba(254,108,97,0.1)', strokeColor: '#fe6c61', pointColor: '#fe6c61', pointStrokeColor: '#fe6c61', highlightFill: '#fe5043', highlightStroke: '#fe5043', pointHighlightFill: '#fe5043', pointHighlightStroke: '#fe5043', data: [25, 18, 16, 17, 20, 25, 30, 35], borderColor: '#fe6c61', backgroundColor: 'rgba(254,108,97,0.2)', pointBackgroundColor: 'rgba(254,108,97,1)', pointRadius: 5 }] }
        const ctx = $('#canvas')
        const lineChart = new Chart(ctx, { type: 'line', data, options: { legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = lineChart.generateLegend()
      }
      if (this.checkElement('class', 'artificial-intelligence-chart')) {
        const data = { labels: ['JAN', ' FEB', ' MAR', ' APR', ' MAY', ' JUN', ' JUL', ' AUG'], datasets: [{ label: 'One', backgroundColor: 'rgba(254,108,97,0.2)', borderColor: '#fe6c61', pointColor: '#fe6c61', pointStrokeColor: '#fe6c61', highlightFill: '#fe5043', highlightStroke: '#fe5043', pointHighlightFill: '#fe5043', pointHighlightStroke: '#fe5043', data: ['25', ' 18', ' 16', ' 17', ' 20', ' 25', ' 30', ' 35'] }, { label: 'Two', backgroundColor: 'rgba(84,114,210,0.2)', borderColor: '#5472d2', pointColor: '#5472d2', pointStrokeColor: '#5472d2', highlightFill: '#3c5ecc', highlightStroke: '#3c5ecc', pointHighlightFill: '#3c5ecc', pointHighlightStroke: '#3c5ecc', data: ['10', ' 15', ' 20', ' 25', ' 27', ' 25', ' 23', ' 25'] } ] }
        const ctx = jQuery('#canvas')
        // eslint-disable-next-line no-new
        new Chart(ctx, { type: 'line', data })
      }
      if (this.checkElement('class', 'big-data-services-chart')) {
        const data = { datasets: [{ data: [60, 40], backgroundColor: [ '#fe6c61', '#5471d2'] }], labels: [ 'One', 'Two' ] }
        const ctx = $('#canvas')
        const myPieChart = new Chart(ctx, { type: 'pie', data, options: { maintainAspectRatio: false, legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = myPieChart.generateLegend()
      }
      if (this.checkElement('class', 'data-science-consulting-chart')) {
        const data = { datasets: [{ data: [60, 40, 40], backgroundColor: ['#f7be68', '#fe6c61', '#5471d2'] }], labels: ['One', 'Two', 'Three'] }
        const ctx = $('#canvas')
        const myPieChart = new Chart(ctx, { type: 'doughnut', data, options: { maintainAspectRatio: false, legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = myPieChart.generateLegend()
      }
      if (this.checkElement('class', 'data-visualization-chart')) {
        const data = { labels: ['JAN', ' FEB', ' MAR', ' APR', ' MAY', ' JUN', ' JUL', ' AUG'], datasets: [{ label: 'One', data: [20, 28, 20, 25, 27, 25, 23, 25], fillColor: '#5472d2', strokeColor: '#5472d2', pointColor: '#5472d2', pointStrokeColor: '#5472d2', highlightFill: '#3c5ecc', highlightStroke: '#3c5ecc', pointHighlightFill: '#3c5ecc', pointHighlightStroke: '#3c5ecc', backgroundColor: '#5471d2' }, { label: 'Two', data: [25, 18, 16, 17, 20, 25, 30, 38], fillColor: '#fe6c61', strokeColor: '#fe6c61', pointColor: '#fe6c61', pointStrokeColor: '#fe6c61', highlightFill: '#fe5043', highlightStroke: '#fe5043', pointHighlightFill: '#fe5043', pointHighlightStroke: '#fe5043', backgroundColor: '#fe6c61' }] }
        const ctx = $('#canvas')
        const myPieChart = new Chart(ctx, { type: 'bar', data, options: { scaleBeginAtZero: true, legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = myPieChart.generateLegend()
      }
    }
  },
  accordion () {
    if (this.checkElement('class', 'iq-faq')) {
      jQuery('.iq-faq .iq-block .iq-details').hide()
      jQuery('.iq-faq .iq-block:first').addClass('iq-active').children().slideDown('slow')
      jQuery('.iq-faq .iq-block').on('click', function () {
        if (jQuery(this).children('div').is(':hidden')) {
          jQuery('.iq-faq .iq-block').removeClass('iq-active').children('div').slideUp('slow')
          jQuery(this).toggleClass('iq-active').children('div').slideDown('slow')
        }
      })
    }
  }
}
