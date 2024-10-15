(function($) {
  "use strict";

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  /*---------------------
   TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos >= pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $('#ensign-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });

  /*----------------------------
   Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*---------------------
    Venobox
  --------------------- */
  var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /*----------------------------
   isotope active
  ------------------------------ */
  // portfolio start
  $(window).on("load", function() {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function() {
      var pro_menu_active = $('.project-menu li a.active');
      pro_menu_active.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  //portfolio end

  /*---------------------
   Circular Bars - Knob
--------------------- */
  if (typeof($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

  /*---------------------
   Testimonial carousel
  ---------------------*/
  let jsoncontent = {
    "english": {
      "history": "Di awal tahun 2016, pesatnya perkembangan Teknologi Informasi menjadi isu hangat di dunia. Peluang besar itu juga membawa VMG untuk ikut terjun dalam bisnis IT.Berdasarkan pengalaman, training dan pengetahuan yang kami miliki maka tahun 2017 VMG secara resmi menjadi perusahaan IT konsultan dan IT Service Delivery.",
      "address": "Maple Park Apartement, Lt UG. R 205 Jl HBR Motik No 2, Sunter Agung, Tanjung Priok Jakarta Utara 14350",
      "telp": "+6216543708",
      "email": "vajiro@vmg-vajracipta.com",
      "instagram": "@vajiro.mulia.gemilang",
      "jam_op": "Senin-Jumat 09.00-17.00",
      "products": {
        "hardware": [
          "Personal",
          "Computer",
          "Printers",
          "Servers",
          "Notebook / Ipad"
        ],
        "network": [
          "CISCO",
          "3COM",
          "Cabling,Panduit,Belden,Systimax, dll"
        ],
        "software": [
          "Microsoft",
          "Antivirus, dll"
        ],
        "outsourcing": [
          "Perusahaan tentunya membutuhkan tenaga ahli dalam bidang IT yang dapat menjamin operasional dari suatu perusahaan dapat berjalan dengan baik",
          "Isu yang sering terjadi adalah Perusahaan/klien menemui kesulitan untuk mengurus karyawan, karena lebih focus dalam mengembangkan core business perusahaan,",
          "Solusi : Adanya pihak ketiga/vendor (VMG) untuk membantu perusahaan/klien",
          {
            "keuntungan_header": "Keuntungan menggunakan pihak ketiga adalah.",
            "keuntungan": [
              "Membantu perusahaan menyelesaikan masalah dalam bidang IT Services,",
              "Pekerja mengikuti sistem dan budaya perusahaan,",
              "Dibantu dengan software untuk mengukur kinerja karyawan / KPI,",
              "Perusahaan tidak perlu pusing memikirkan tunjangan, karir dan Pelatihan karyawan,"
            ]
          },
              ""
            ]
          },
      "faq": [
        {
          "ask": "PT Vajiro Mulia Gemilang  (VMG) Perushaan Apa sih?",
          "answer": "VMG adalah Perusahaan yang bergerak di Bidang IT, kami memiliki divisi Hardware, Software dan Outsourcing."
        },
        {
          "ask": "PT Vajiro Mulia Gemilang bisa mensupport Apa saja?",
          "answer": "Kami menyediakan segala jenis kebutuhan IT Perusahaan. Mulai dari maintenance ala-alat IT, Anti virus, Windows sampai dengan Helpdesk IT, teknikal Support dan develop aplikasi."
        },
        {
          "ask": "Apakah VMG bisa mensupport selain IT?",
          "answer": "Selain IT kami juga mulai merambah ke bidang lain, Seperti konsultan psikologi. Dengan nama Vajracipta Nirwana kami mengadakan pelatihan dan melakukan terapi psikologi untuk Perusahaan dan perorangan"
        }
      ]
    },
    "indonesia": {
      "history": "Di awal tahun 2016, pesatnya perkembangan Teknologi Informasi menjadi isu hangat di dunia. Peluang besar itu juga membawa VMG untuk ikut terjun dalam bisnis IT.Berdasarkan pengalaman, training dan pengetahuan yang kami miliki maka tahun 2017 VMG secara resmi menjadi perusahaan IT konsultan dan IT Service Delivery.",
      "address": "Maple Park Apartement, Lt UG. R 205 Jl HBR Motik No 2, Sunter Agung, Tanjung Priok Jakarta Utara 14350",
      "telp": "+6216543708",
      "email": "vajiro@vmg-vajracipta.com",
      "instagram": "@vajiro.mulia.gemilang",
      "jam_op": "Senin-Jumat 09.00-17.00",
      "products": {
        "hardware": [
          "Personal",
          "Computer",
          "Printers",
          "Servers",
          "Notebook / Ipad"
        ],
        "network": [
          "CISCO",
          "3COM",
          "Cabling,Panduit,Belden,Systimax, dll"
        ],
        "software": [
          "Microsoft",
          "Antivirus, dll"
        ],
        "outsourcing": [
          "Perusahaan tentunya membutuhkan tenaga ahli dalam bidang IT yang dapat menjamin operasional dari suatu perusahaan dapat berjalan dengan baik",
          "Isu yang sering terjadi adalah Perusahaan/klien menemui kesulitan untuk mengurus karyawan, karena lebih focus dalam mengembangkan core business perusahaan,",
          "Solusi : Adanya pihak ketiga/vendor (VMG) untuk membantu perusahaan/klien",
          {
            "keuntungan_header": "Keuntungan menggunakan pihak ketiga adalah.",
            "keuntungan": [
              "Membantu perusahaan menyelesaikan masalah dalam bidang IT Services,",
              "Pekerja mengikuti sistem dan budaya perusahaan,",
              "Dibantu dengan software untuk mengukur kinerja karyawan / KPI,",
              "Perusahaan tidak perlu pusing memikirkan tunjangan, karir dan Pelatihan karyawan,"
            ]
          },
              ""
            ]
          },
      "faq": [
        {
          "ask": "PT Vajiro Mulia Gemilang  (VMG) Perushaan Apa sih?",
          "answer": "VMG adalah Perusahaan yang bergerak di Bidang IT, kami memiliki divisi Hardware, Software dan Outsourcing."
        },
        {
          "ask": "PT Vajiro Mulia Gemilang bisa mensupport Apa saja?",
          "answer": "Kami menyediakan segala jenis kebutuhan IT Perusahaan. Mulai dari maintenance ala-alat IT, Anti virus, Windows sampai dengan Helpdesk IT, teknikal Support dan develop aplikasi."
        },
        {
          "ask": "Apakah VMG bisa mensupport selain IT?",
          "answer": "Selain IT kami juga mulai merambah ke bidang lain, Seperti konsultan psikologi. Dengan nama Vajracipta Nirwana kami mengadakan pelatihan dan melakukan terapi psikologi untuk Perusahaan dan perorangan"
        }
      ]
    }
  }

  /*Region ID Html*/
  let ask_content = $('#accordion');

  /*Region Ganti Bahasa*/
  let nation = $('#nation');
  let bahasa = $('#indonesia');
  bahasa.on('click', function(){
    nation.find('a > img').attr('src','img/indonesia.png');
    let indonesia = jsoncontent.indonesia;

    let history = indonesia.history;
    let address = indonesia.address;
    let telp = indonesia.telp;
    let email = indonesia.email;
    let instagram = indonesia.instagram;
    let jam_op = indonesia.jam_op;

    let faqs = indonesia.faq;
    let faqs_html = '';
    faqs.forEach(function(f, index){
      const ask = f.ask;
      const answer = f.answer;
      let no = index + 1;
      const collapsible = (index == 0) ? 'in' : '';
      const active = (index == 0) ? 'class="active"' : '';

      faqs_html += `<!--Panel Default-->
      <div class="panel panel-default">
          <div class="panel-heading">
              <h4 class="check-title">
                  <a data-toggle="collapse" ${active} data-parent="#accordion" href="#check${no}">
                      <span class="acc-icons"></span>${ask}
                  </a>
              </h4>
          </div>
          <div id="check${no}" class="panel-collapse collapse ${collapsible}">
              <div class="panel-body">
                  <p>
                      ${answer}
                  </p>
              </div>
          </div>
      </div>
      <!--End Panel Default-->`
    });

    ask_content.html(faqs_html);

  })

  let language = $('#uk');
  language.on('click', function(){
    nation.find('a > img').attr('src','img/united-kingdom.png');
    let uk = jsoncontent.uk;

    let history = uk.history;
    let address = uk.address;
    let telp = uk.telp;
    let email = uk.email;
    let instagram = uk.instagram;
    let jam_op = uk.jam_op;

    let faqs = indonesia.faq;
    let faqs_html = '';
    faqs.forEach(function(f, index){
      const ask = f.ask;
      const answer = f.answer;
      let no = index + 1;
      const collapsible = (index == 0) ? 'in' : '';
      const active = (index == 0) ? 'class="active"' : '';

      faqs_html += `<!--Panel Default-->
      <div class="panel panel-default">
          <div class="panel-heading">
              <h4 class="check-title">
                  <a data-toggle="collapse" ${active} data-parent="#accordion" href="#check${no}">
                      <span class="acc-icons"></span>${ask}
                  </a>
              </h4>
          </div>
          <div id="check${no}" class="panel-collapse collapse ${collapsible}">
              <div class="panel-body">
                  <p>
                      ${answer}
                  </p>
              </div>
          </div>
      </div>
      <!--End Panel Default-->`
    });

    ask_content.html(faqs_html);
  })

})(jQuery);
