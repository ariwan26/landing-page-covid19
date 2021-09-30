// event pada saat diklik
$('.page-scroll').on('click', function(e) {

    // ambil isi href

    var tujuan = $(this).attr('href');
    // tangkap elemen 
    var elementujuan = $(tujuan);

    // pindahkan scroll
    $('html , body').animate({
        scrollTop: elementujuan.offset().top - 65
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});

// parallax