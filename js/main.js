
var slideIndex = 1;
var t;
(function ($) {
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
      //let slideIndex = 0;
      //showSlides();

      //function showSlides() {
      //    let i;
      //    let slides = document.getElementsByClassName("mySlides");
      //    let dots = document.getElementsByClassName("dot");
      //    for (i = 0; i < slides.length; i++) {
      //        slides[i].style.display = "none";
      //    }
      //    slideIndex++;
      //    if (slideIndex > slides.length) { slideIndex = 1 }
      //    for (i = 0; i < dots.length; i++) {
      //        dots[i].className = dots[i].className.replace(" active", "");
      //    }
      //    slides[slideIndex - 1].style.display = "block";
      //    dots[slideIndex - 1].className += " active";
      //    setTimeout(showSlides, 5000); // Change every 2 seconds
      //}

      showSlides(slideIndex);
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
      "welcome_header": "Welcome To VMG",
      "welcome_detail": "VMG's success will be measured by the success of our clients.",
      "menu":["Home","About","Services","FAQ","Gallery","Client","Contact"],
      "slider1_header":"Information Technology Solution",
      "slider1":"We're In The Business Of Helping Your Information Technolgy Solution",
      "slider1_footer1":"See Services",
      "slider1_footer2":"Learn More",
      "slider2_header" : "The Best Information Technolgy Solution",
      "slider2" : "We're In The Business Of Get Quality Information Technology Services",
      "slider2_footer1":"See Services",
      "slider2_footer2":"Learn More",
      "slider3_header" : "The Best Information Technology",
      "slider3" : "Helping Information Technology Solution for Your Business",
      "slider3_footer1":"See Services",
      "slider3_footer2":"Learn More",
          "history": "<p style='text-align: justify;text-indent: 30px;'>In the early 2016, the rapid of technology development becomes hot issue in the world, including here in Indonesia. This situation has made fast growth of the information technology for globalization, because of the improvement of all industries sector in Indonesia as shown by increasing number of new corporation or existing company which getting bigger, create Indonesia become interested market for computer manufacturing of all over the world.</p><p style='text-align: justify;text-indent: 30px;'> Considering the great opportunity in information technology business in Indonesia, VMG Group has striven to keep pace in that business since 2016. Therefore, we have built a strong business foundation for our company. After two years has been passed, information technology is still growing, even faster. So, we have always updated our knowledge and skill to perform well in IT business.</p><p style='text-align: justify;text-indent: 30px;'> Besides we have given training and development In the year of 2016, we created (Taylor Made Application) for Fix Assets Management, which can assist our customer’s operational activity. While facing the future with confidence, we find some threat that will occur in the following years. We have to continuously prepare our selves to meet the challenges of the future. </p>",
      "address": "Maple Park Apartement, Lt UG. R 205 Jl HBR Motik No 2, Sunter Agung, Tanjung Priok Jakarta Utara 14350",
      "quotes":["VMG products and services must contribute to the benefit of our clients.",
        "The fees that VMG charges must be commensurate with the performance produced.",
        "VMG's growth will be based on projects currently underway<br /> which is profitable and can be implemented on time and in accordance with our clients' expectations.",
        "VMG staff and employees will continue to be trained in current technologies (up to date)<br /> with the target of achieving job satisfaction for both VMG and clients."],
      "telp": "+6216543708",
      "email": "vajiro@vmg-vajracipta.com",
      "instagram": "@vajiro.mulia.gemilang",
      "jam_op": "Monday-Friday 9.00 am until 5.00 pm ",
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
            ]
          },
      "faq1": {
          "ask": "What company is PT Vajiro Mulia Gemilang (VMG)?",
          "answer": "VMG is a company that operating in the IT sector, we have Hardware, Software and Outsourcing divisions."
        },
      "faq2": {
          "ask": "What can PT Vajiro Mulia Gemilang support?",
            "answer": "We provide all types of company IT needs. Starting from IT equipment maintenance, Anti-virus, Windows, IT Helpdesk, technical support and application development."
        },
      "faq3": {
          "ask": "Can VMG support other than IT?",
          "answer": "besides IT, we are also starting to expand into other fields, such as psychology consulting. Under the name Vajracipta Nirwana. We provide training and provide psychological therapy for companies and individuals."
        }
    },
    "indonesia": {
      "welcome_header": "Selamat datang di VMG",
      "welcome_detail": "Kesuksesan VMG akan diukur dari kesuksesan klien kami.",
      "menu":["Beranda","Tentang Kami","Jasa","FAQ","Galeri","Klien","Kontak"],
      "slider1_header":"Solusi TI",
      "slider1":"Kami Berada Dalam Bisnis Membantu Solusi Teknologi Informasi Anda",
      "slider1_footer1":"Lihat Layanan",
      "slider1_footer2":"Lebih Lanjut",
      "slider2_header" : "Solusi TI Terbaik",
      "slider2" : "Kami Bergerak Dalam Bisnis Mendapatkan Layanan Teknologi Informasi Berkualitas",
      "slider2_footer1":"Lihat Layanan",
      "slider2_footer2":"Lebih Lanjut",
      "slider3_header" : "TI Terbaik",
      "slider3" : "Membantu Solusi Teknologi Informasi untuk Bisnis Anda",
      "slider3_footer1":"Lihat Layanan",
      "slider3_footer2":"Lebih Lanjut",
      "history": "<p style='text-align: justify;text-indent: 30px;'>Di awal tahun 2016, pesatnya perkembangan teknologi menjadi isu hangat di dunia, termasuk di Indonesia. Kondisi ini membuat pesatnya pertumbuhan teknologi informasi di era globalisasi, karena semakin berkembangnya semua sektor industri di Indonesia yang ditandai dengan semakin banyaknya perusahaan baru maupun perusahaan lama yang semakin besar, menjadikan Indonesia sebagai pasar yang diminati untuk manufaktur komputer di seluruh dunia.</p><p style='text-align: justify;text-indent: 30px;'> Melihat besarnya peluang bisnis teknologi informasi di Indonesia, VMG Group telah berupaya keras untuk mengimbanginya sejak tahun 2016. Oleh karena itu, kami telah membangun fondasi bisnis yang kuat bagi perusahaan kami. Setelah dua tahun berlalu, teknologi informasi masih terus berkembang, bahkan lebih cepat. Oleh karena itu, kami selalu memperbarui pengetahuan dan keterampilan kami untuk dapat tampil baik dalam bisnis TI.</p><p style='text-align: justify;text-indent: 30px;'> Selain itu kami juga memberikan pelatihan dan pengembangan. Pada tahun 2016, kami menciptakan perangkat lunak (Taylor Made Application) untuk Manajemen Aset Tetap, yang dapat membantu aktivitas operasional pelanggan kami. Sambil menghadapi masa depan dengan percaya diri, kami menemukan beberapa ancaman yang akan terjadi di tahun-tahun berikutnya. Kami harus terus mempersiapkan diri untuk menghadapi tantangan masa depan. </p>",
      "address": "Maple Park Apartement, Lt UG. R 205 Jl HBR Motik No 2, Sunter Agung, Tanjung Priok Jakarta Utara 14350",
      "quotes":["Produk dan layanan VMG harus berkontribusi pada keuntungan klien kami.",
        "Biaya yang VMG tagihkan harus sesuai dengan kinerja yang dihasilkan.",
        "Pertumbuhan VMG akan didasarkan pada proyek-proyek yang sedang dikerjakan<br />yang menguntungkan dan dapat dilaksanakan tepat waktu dan sesuai dengan harapan klien kami.",
        "Staf dan karyawan VMG akan terus dilatih dalam teknologi saat ini (up to date)<br /> dengan target mendapatkan kepuasan kerja bagi VMG maupun klien."],
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
            ]
          },
      "faq1": 
        {
          "ask": "PT Vajiro Mulia Gemilang  (VMG) Perusahaan Apa sih?",
          "answer": "VMG adalah Perusahaan yang bergerak di Bidang IT, kami memiliki divisi Hardware, Software dan Outsourcing."
        },
      "faq2":
        {
          "ask": "PT Vajiro Mulia Gemilang bisa mensupport Apa saja?",
          "answer": "Kami menyediakan segala jenis kebutuhan IT Perusahaan. Mulai dari maintenance alat-alat IT, Anti virus, Windows sampai dengan Helpdesk IT, Technical Support dan Developer aplikasi."
        },
      "faq3":
        {
          "ask": "Apakah VMG bisa mensupport selain IT?",
          "answer": "Selain IT kami juga mulai merambah ke bidang lain, Seperti konsultan psikologi. Dengan nama Vajracipta Nirwana kami mengadakan pelatihan dan melakukan terapi psikologi untuk Perusahaan dan perorangan"
        }
    }
  }

  /*Region ID Html*/
  let ask1_content = $('#accordion-ask1');
  let answer1_content = $('#accordion-answer1');
  let ask2_content = $('#accordion-ask2');
  let answer2_content = $('#accordion-answer2');
  let ask3_content = $('#accordion-ask3');
  let answer3_content = $('#accordion-answer3');
  let hardware_list_content = $('#hardware-list');
  let network_list_content = $('#network-list');
  let software_list_content = $('#software-list');
  let alihdaya_list_content = $('#alihdaya-list');
  let historia_content = $('#historia');
  let quotes1_content = $('#quotes1');
  let quotes2_content = $('#quotes2');
  let quotes3_content = $('#quotes3');
  let quotes4_content = $('#quotes4');
  //let quotes2_uk_content = $('#quotes2uk');
  //let quotes3_uk_content = $('#quotes3uk');
  let slider1_header_content = $('.slider1_header');
  let slider1_content = $('.slider1');
  let slider1_footer1_content = $('.slider1_footer1');
  let slider1_footer2_content = $('.slider1_footer2');
  let slider2_header_content = $('.slider2_header');
  let slider2_content = $('.slider2');
  let slider2_footer1_content = $('.slider2_footer1');
  let slider2_footer2_content = $('.slider2_footer2');
  let slider3_header_content = $('.slider3_header');
  let slider3_content = $('.slider3');
  let slider3_footer1_content = $('.slider3_footer1');
  let slider3_footer2_content = $('.slider3_footer2');

  let menu1 = $('#nav-home');
  let menu2 = $('#nav-about');
  let menu3 = $('#nav-services');
  let menu4 = $('#nav-faq');
  let menu5 = $('#nav-gallery');
  let menu6 = $('#nav-client');
  let menu7 = $('#nav-contact');

  let wh = $('#welcome_header');
  let wd = $('#welcome_detail');

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

    let ask1 = indonesia.faq1.ask;
    let answer1 = indonesia.faq1.answer;

    let ask2 = indonesia.faq2.ask;
    let answer2 = indonesia.faq2.answer;

    let ask3 = indonesia.faq3.ask;
    let answer3 = indonesia.faq3.answer;

    ask1_content.html(ask1);
    answer1_content.html(answer1);

    ask2_content.html(ask2);
    answer2_content.html(answer2);

    ask3_content.html(ask3);
    answer3_content.html(answer3);

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

    historia_content.html(history);

    let quotes = indonesia.quotes;
    quotes1_content.html(quotes[0]);
    quotes2_content.html(quotes[1]);
    quotes3_content.html(quotes[2]);
    quotes4_content.html(quotes[3]);

    //quotes2_content.show();
    //quotes2_uk_content.hide();

    //quotes3_content.show();
    //quotes3_uk_content.hide();
    
    slider1_header_content.html(indonesia.slider1_header);
    slider1_content.html(indonesia.slider1);
    slider1_footer1_content.html(indonesia.slider1_footer1);
    slider1_footer2_content.html(indonesia.slider1_footer2);
    
    slider2_header_content.html(indonesia.slider2_header);
    slider2_content.html(indonesia.slider2);
    slider2_footer1_content.html(indonesia.slider2_footer1);
    slider2_footer2_content.html(indonesia.slider2_footer2);

    slider3_header_content.html(indonesia.slider3_header);
    slider3_content.html(indonesia.slider3);
    slider3_footer1_content.html(indonesia.slider3_footer1);
    slider3_footer2_content.html(indonesia.slider3_footer2);

    let menus = indonesia.menu;
    menu1.html(menus[0]);
    menu2.html(menus[1]);
    menu3.html(menus[2]);
    menu4.html(menus[3]);
    menu5.html(menus[4]);
    menu6.html(menus[5]);
    menu7.html(menus[6]);

    let welcome_header = indonesia.welcome_header;
    let welcome_detail = indonesia.welcome_detail;

    wh.html(welcome_header);
    wd.html(welcome_detail);
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

    let ask1 = uk.faq1.ask;
    let answer1 = uk.faq1.answer;

    let ask2 = uk.faq2.ask;
    let answer2 = uk.faq2.answer;

    let ask3 = uk.faq3.ask;
    let answer3 = uk.faq3.answer;

    ask1_content.html(ask1);
    answer1_content.html(answer1);

    ask2_content.html(ask2);
    answer2_content.html(answer2);

    ask3_content.html(ask3);
    answer3_content.html(answer3);

    let hdl = uk.products.hardware;
    let netl = uk.products.network;
    let sofl = uk.products.software;
    let aldl = uk.products.outsourcing;

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

    historia_content.html(history);

    let quotes = uk.quotes;
    quotes1_content.html(quotes[0]);
    quotes2_content.html(quotes[1]);
    quotes3_content.html(quotes[2]);
    quotes4_content.html(quotes[3]);

    //quotes2_content.hide();
    //quotes2_uk_content.show();

    //quotes3_content.hide();
    //quotes3_uk_content.show();

    slider1_header_content.html(uk.slider1_header);
    slider1_content.html(uk.slider1);
    slider1_footer1_content.html(uk.slider1_footer1);
    slider1_footer2_content.html(uk.slider1_footer2);
    
    slider2_header_content.html(uk.slider2_header);
    slider2_content.html(uk.slider2);
    slider2_footer1_content.html(uk.slider2_footer1);
    slider2_footer2_content.html(uk.slider2_footer2);

    slider3_header_content.html(uk.slider3_header);
    slider3_content.html(uk.slider3);
    slider3_footer1_content.html(uk.slider3_footer1);
    slider3_footer2_content.html(uk.slider3_footer2);

    let menus = uk.menu;
    menu1.html(menus[0]);
    menu2.html(menus[1]);
    menu3.html(menus[2]);
    menu4.html(menus[3]);
    menu5.html(menus[4]);
    menu6.html(menus[5]);
    menu7.html(menus[6]);

    let welcome_header = uk.welcome_header;
    let welcome_detail = uk.welcome_detail;

    wh.html(welcome_header);
    wd.html(welcome_detail);
  });
  $(document).ready(function(){
    nation.find('a > img').attr('src','img/indonesia.png');
    let indonesia = jsoncontent.indonesia;

    let history = indonesia.history;
    let address = indonesia.address;
    let telp = indonesia.telp;
    let email = indonesia.email;
    let instagram = indonesia.instagram;
    let jam_op = indonesia.jam_op;

    let ask1 = indonesia.faq1.ask;
    let answer1 = indonesia.faq1.answer;

    let ask2 = indonesia.faq2.ask;
    let answer2 = indonesia.faq2.answer;

    let ask3 = indonesia.faq3.ask;
    let answer3 = indonesia.faq3.answer;

    ask1_content.html(ask1);
    answer1_content.html(answer1);

    ask2_content.html(ask2);
    answer2_content.html(answer2);

    ask3_content.html(ask3);
    answer3_content.html(answer3);

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

    historia_content.html(history);

    var test_carousel1 = $('.testimonial-carousel');
    test_carousel1.owlCarousel({
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

    let quotes = indonesia.quotes;
    quotes1_content.html(quotes[0]);
    quotes2_content.html(quotes[1]);
    quotes3_content.html(quotes[2]);
    quotes4_content.html(quotes[3]);

    //quotes2_content.show();
    //quotes2_uk_content.hide();

    //quotes3_content.show();
    //quotes3_uk_content.hide();

    slider1_header_content.html(indonesia.slider1_header);
    slider1_content.html(indonesia.slider1);
    slider1_footer1_content.html(indonesia.slider1_footer1);
    slider1_footer2_content.html(indonesia.slider1_footer2);
    
    slider2_header_content.html(indonesia.slider2_header);
    slider2_content.html(indonesia.slider2);
    slider2_footer1_content.html(indonesia.slider2_footer1);
    slider2_footer2_content.html(indonesia.slider2_footer2);

    slider3_header_content.html(indonesia.slider3_header);
    slider3_content.html(indonesia.slider3);
    slider3_footer1_content.html(indonesia.slider3_footer1);
    slider3_footer2_content.html(indonesia.slider3_footer2);

    let menus = indonesia.menu;
    menu1.html(menus[0]);
    menu2.html(menus[1]);
    menu3.html(menus[2]);
    menu4.html(menus[3]);
    menu5.html(menus[4]);
    menu6.html(menus[5]);
    menu7.html(menus[6]);

    let welcome_header = indonesia.welcome_header;
    let welcome_detail = indonesia.welcome_detail;

    wh.html(welcome_header);
    wd.html(welcome_detail);
});

})(jQuery);

function showSlides(n) {

    var i;

    var slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";

    if (n == undefined) {
        n = ++slideIndex;
    }

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }



    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }

    slides[slideIndex - 1].style.display = "block";

    t = setTimeout(showSlides, 5000);

}

function plusSlides(n) {
    slideIndex = ((slideIndex == 1 && n == -1) ? 5 : ((slideIndex == 4 && n == 1) ? 0 : slideIndex)) + n;
    clearTimeout(t);
    showSlides(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);

}

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

