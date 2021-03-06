function centeringElems(){
    var collection = $('.mygrid-centered > .col');
    var collectionW = 0;
    collection.each(function(){
        collectionW += $(this).outerWidth();
    })

    if(collectionW < $(window).width()){
        $('.mygrid-centered').css('left', (($(window).width() - collectionW) / 2));
    }else{
        $('.mygrid-centered').css('left', 0);
    }
}

$(window).on('resize', function(){
    centeringElems();
})
$(document).ready(function(){
    centeringElems();
});

$(document).ready(function(){
    $('.carousel').carousel({
        dist: -50,
        shift: 50,
        padding: 50
    });
    $('#carousel-btn-left').click(function(){
        $('.carousel').carousel('prev')
    });
    $('#carousel-btn-right').click(function(){
        $('.carousel').carousel('next')
    })
});
var showStaggeredList = true;
$(window).on('scroll', function(){
    if($(window).height() + $(window).scrollTop() > $('#advantage-title').offset().top + $('#advantage-title').height() && showStaggeredList){
        Materialize.showStaggeredList('#advantage-list');
        showStaggeredList = false;
    }
})