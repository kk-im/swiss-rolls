$(document).on("scroll", function() {
    var pixels = $(document).scrollTop();

    $("div.progress div.bar").html(pixels + "pixels down")

    if (pixels < 50) {
        $("header").removeClass("hide")
    } else {
        $("header").addClass("hide")
    }

    if (pixels < 600) {
        $("body").css("background-color", "#362726")
    } else if (pixels < 1400) {
        $("body").css("background-color", "#371800")
    } else if (pixels < 2200) {
        $("body").css("background-color", "#E89F1A")
    } else if (pixels < 3000) {
        $("body").css("background-color", "#7F6324")
    } else {
        $("body").css("background-color", "#423220")
    }

    var windowHeight = $(window).height()
    var documentHeight = $(document).height()
    var difference = documentHeight - windowHeight

    var percentage = 100 * pixels / difference

    $("div.progress div.bar").css("width", percentage + "%")

})