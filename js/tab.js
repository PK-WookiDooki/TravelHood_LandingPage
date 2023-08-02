$(document).ready(function () {
    $(".img-gallery").hide();
    $(".img-gallery:first").show();
    $(".tab-link").on("click", function (e) {
        $(".tab-link").removeClass("active");
        $(this).addClass("active");
        $(".img-gallery").hide();
        let activeTab = $(this).attr("href");
        $(activeTab).fadeIn(1000);
        e.preventDefault();
    });

    $(".sec-ntabs article").hide();
    $(".sec-ntabs article:first").show();
    $(".sec-ntabs a").on("click", function (e) {
        $(".sec-ntabs a").removeClass("active");
        $(this).addClass("active");
        $(".sec-ntabs article").hide();
        let activeTab = $(this).attr("href");
        $(activeTab).fadeIn(1000);
        e.preventDefault();
    });
});
