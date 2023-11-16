$(function() {
    $('#main-visual').vegas({
        slides: [
            { src: './mainvisual_img/shark.jpg' },
            { src: './mainvisual_img/penguin.jpg' },
            { src: './mainvisual_img/kurage2.jpg' },
            { src: './mainvisual_img/chinanago.jpg' },
            { src: './mainvisual_img/kumanomi.jpg' },
        ],
        overlay: './js/overlays/02.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
        transition: 'fade', //スライドを遷移させる際のアニメーション
        transitionDuration: 3000, //スライドの遷移アニメーションの時間
        delay: 7500, //スライド切り替え時の遅延時間
        animation: 'random', //スライド表示中のアニメーション
        animationDuration: 15000, //スライド表示中のアニメーションの時間
    });
});

window.onload = () =>{
    // const snipper = document.getElementById('loading');
    // snipper.classList.add('loaded');
    setTimeout(classAdd, 1500);           // setTimeout(実行したい関数, ミリ秒)
}                                         //  ➡「ミリ秒」の分だけ「実行したい関数」の処理を遅らせる

const classAdd = () =>{
    const snipper2 = document.getElementById('campaign_boxmini2');
    const snipper1 = document.getElementById('campaign_boxmini');
    const snipper = document.getElementById('campaign_box');
    snipper2.classList.add('loaded');
    snipper1.classList.add('loaded');
    snipper.classList.add('loaded');
}


$(function() {
    $(window).scroll(function() {
        $(".right").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_r");
        }
        });
    });
});
$(function() {
    $(window).scroll(function() {
        $(".left").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_l");
        }
        });
    });
});