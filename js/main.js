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
    //getInstagramFeed("vajiro.mulia.gemilang", "#instagramfeed", 12);
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
              "Provide IT Hardware Services: Personal Computer, Printers, Servers, Notebook / Ipad, etc"
        ],
        "network": [
            "Provide IT Network Services: CISCO, 3COM, Cabling, Panduit, Belden, Systimax, etc"
        ],
        "software": [
            "Provide IT Software Services: Microsoft, Antivirus, etc"
        ],
          "outsourcing": [
            "The existence of a third party/vendor (VMG) to help with company/client problems expecially for IT Expert workers"
          //"Perusahaan tentunya membutuhkan tenaga ahli dalam bidang IT yang dapat menjamin operasional dari suatu perusahaan dapat berjalan dengan baik",
          //"Isu yang sering terjadi adalah Perusahaan/klien menemui kesulitan untuk mengurus karyawan, karena lebih focus dalam mengembangkan core business perusahaan,",
          //"Solusi : Adanya pihak ketiga/vendor (VMG) untuk membantu perusahaan/klien",
          //{
          //  "keuntungan_header": "Keuntungan menggunakan pihak ketiga adalah.",
          //  "keuntungan": [
          //    "Membantu perusahaan menyelesaikan masalah dalam bidang IT Services,",
          //    "Pekerja mengikuti sistem dan budaya perusahaan,",
          //    "Dibantu dengan software untuk mengukur kinerja karyawan / KPI,",
          //    "Perusahaan tidak perlu pusing memikirkan tunjangan, karir dan Pelatihan karyawan,"
          //  ]
          //},
          //    ""
            ]
          },
      "faq": [
        {
          "ask": "What company is PT Vajiro Mulia Gemilang (VMG)?",
          "answer": "VMG is a company that operating in the IT sector, we have Hardware, Software and Outsourcing divisions."
        },
        {
          "ask": "What can PT Vajiro Mulia Gemilang support?",
            "answer": "We provide all types of company IT needs. Starting from IT equipment maintenance, Anti-virus, Windows, IT Helpdesk, technical support and application development."
        },
        {
          "ask": "Can VMG support other than IT?",
          "answer": "besides IT, we are also starting to expand into other fields, such as psychology consulting. Under the name Vajracipta Nirwana. We provide training and provide psychological therapy for companies and individuals."
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
          "Menyediakan Kebutuhan seperti: Personal Computer, Printers, Servers, Notebook / Ipad"
        ],
        "network": [
          "Menyediakan Kebutuhan atau Jasa seperti: CISCO, 3COM, Cabling, Panduit, Belden, Systimax, dll"
        ],
        "software": [
          "Menyediakan Kebutuhan seperti: Microsoft, Antivirus, dll"
        ],
          "outsourcing": [
              "Adanya pihak ketiga/vendor (VMG) untuk membantu masalah perusahaan/klien khususnya dalam bidang tenaga kerja ahli IT"
          //"Perusahaan tentunya membutuhkan tenaga ahli dalam bidang IT yang dapat menjamin operasional dari suatu perusahaan dapat berjalan dengan baik",
          //"Isu yang sering terjadi adalah Perusahaan/klien menemui kesulitan untuk mengurus karyawan, karena lebih focus dalam mengembangkan core business perusahaan,",
          //"Solusi : Adanya pihak ketiga/vendor (VMG) untuk membantu perusahaan/klien",
          //{
          //  "keuntungan_header": "Keuntungan menggunakan pihak ketiga adalah.",
          //  "keuntungan": [
          //    "Membantu perusahaan menyelesaikan masalah dalam bidang IT Services,",
          //    "Pekerja mengikuti sistem dan budaya perusahaan,",
          //    "Dibantu dengan software untuk mengukur kinerja karyawan / KPI,",
          //    "Perusahaan tidak perlu pusing memikirkan tunjangan, karir dan Pelatihan karyawan,"
          //  ]
          //},
          //    ""
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
  let hardware_list_content = $('#hardware-list');
  let network_list_content = $('#network-list');
  let software_list_content = $('#software-list');
  let alihdaya_list_content = $('#alihdaya-list');

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

    let hdl = indonesia.products.hardware;
    let netl = indonesia.products.network;
    let sofl = indonesia.products.software;
    let aldl = indonesia.products.outsourcing;

    let hdl_html = '';
    let netl_html = '';
    let sofl_html = '';
    let aldl_html = '';

    hdl.forEach(function(f, index){
      hdl_html += `<li>${f}</li>`;
    });

    netl.forEach(function(f, index){
      netl_html += `<li>${f}</li>`;
    });

    sofl.forEach(function(f, index){
      sofl_html += `<li>${f}</li>`;
    });

    aldl.forEach(function(f, index){
      if(index == f.length - 1){
        aldl_html += aldl.keuntungan_header
      }
      else{
        aldl_html += `<li>${f}</li>`;
      }
    });

    hardware_list_content.html(hdl_html);
    network_list_content.html(netl_html);
    software_list_content.html(sofl_html);
    alihdaya_list_content.html(aldl_html);
  })

  let language = $('#uk');
  language.on('click', function(){
    nation.find('a > img').attr('src','img/united-kingdom.png');
    let uk = jsoncontent.english;

    let history = uk.history;
    let address = uk.address;
    let telp = uk.telp;
    let email = uk.email;
    let instagram = uk.instagram;
    let jam_op = uk.jam_op;

    let faqs = uk.faq;
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

  $(document).ready(function(){
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

    let hdl = indonesia.products.hardware;
    let netl = indonesia.products.network;
    let sofl = indonesia.products.software;
    let aldl = indonesia.products.outsourcing;

    let hdl_html = '';
    let netl_html = '';
    let sofl_html = '';
    let aldl_html = '';

    hdl.forEach(function(f, index){
      hdl_html += `<li>${f}</li>`;
    });

    netl.forEach(function(f, index){
      netl_html += `<li>${f}</li>`;
    });

    sofl.forEach(function(f, index){
      sofl_html += `<li>${f}</li>`;
    });

    aldl.forEach(function(f, index){
      if(index == f.length - 1){
        aldl_html += aldl.keuntungan_header
      }
      else{
        aldl_html += `<li>${f}</li>`;
      }
    });

    hardware_list_content.html(hdl_html);
    network_list_content.html(netl_html);
    software_list_content.html(sofl_html);
    alihdaya_list_content.html(aldl_html);
});

})(jQuery);

function getInstagramFeed(username, container, items) {
    if (!$(container).length)
        return false;
    items = items || 32;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            data = xmlhttp.responseText;
            data = data.split("window._sharedData = ");
            data = data[1].split("<\/script>");
            data = data[0];
            data = data.substr(0, data.length - 1);
            data = JSON.parse(data);
            data = data.entry_data.ProfilePage[0].graphql.user;
            if (data.is_private) {
                console.log('This account is private');
                return false;
            }
            else {
                var imgs = data.edge_owner_to_timeline_media.edges;
                max = (imgs.length > items) ? items : imgs.length;
                if (!max)
                    return false;
                var html = "<div class='ig-wrapper'><div class='ig-container'>";
                for (var i = 0; i < max; i++) {
                    var url = "https://www.instagram.com/p/" + imgs[i].node.shortcode + "/";
                    var type = "";
                    if (imgs[i].node.__typename == "GraphVideo")
                        type = " class='video'";
                    else if (imgs[i].node.__typename == "GraphSidecar")
                        type = " class='series'";
                    var caption = imgs[i].node.edge_media_to_caption.edges[0].node.text;
                    caption = caption.replace(/#/g, " #");
                    caption = caption.replace(/(�\n)|#(.+?)(?=[\s.,:,]|$)/g, "");
                    caption = caption.replace(/\n/g, "<br/>");
                    caption = caption.replace(/[\s]{2,}/g, " ");
                    caption = caption.trim();
                    if (caption)
                        caption = "<span>" + caption + "</span>\n";
                    html += "<a href='" + url + "' target='_blank'" + type + ">";
                    html += "<img src='" + imgs[i].node.thumbnail_resources[2].src + "' alt='" + username + " instagram image " + i + "' crossOrigin='anonymous' />";
                    html += caption;
                    html += "</a>";
                }
                html += "</div></div>";
            }
            $(container).html(html);
        }
    }
    //xmlhttp.onreadystatechange = handleStateChange; // Implemented elsewhere.
    xmlhttp.open("GET", "https://www.instagram.com/" + username + "/", true);
    xmlhttp.send();
}

