webpackJsonp([37], {
    0: function(e, i, t) {
        e.exports = t(84)
    },
    84: function(e, i) {
        var t = {
            init: function() {
                this.initBtns()
            },
            initBtns: function() {
                $("#left-menu").delegate(".person-center,.system-setting", "click", function() {
                    $("#left-menu").find(".active").removeClass("active"),
                        $(this).addClass("active")
                }).delegate("li div", "click", function() {
                    $("#left-menu").find(".active").removeClass("active"),
                        $(this).addClass("active").parent("li").addClass("active")
                }),
                    $(".head-handle").delegate(".home-item", "click", function() {
                        var e = $(".switch-btn");
                        $(this).hasClass("active") || (2 == $(this).index() ? e.addClass("active") : e.removeClass("active"),
                            $(".head-handle").find(".home-item.active").removeClass("active"),
                            $(this).addClass("active"))
                    })
            }
        };
        $(function() {
            t.init()
        })
    }
});
