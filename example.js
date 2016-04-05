var App = {
        isTouchDevice: "ontouchstart" in window,
        nav: "#nav",
        isMediumDownScreen: !1,
        mediumDownSize: 1179,
        topBarHeight: $("#page-top-bar").height(),
        init: function() {
            contour.init(), fluidVideo.init(), bookingForm.init({
                altFormat: "dd.mm.yy",
                placeholder: !1,
                today: new Date
            }), scroll.init(), gallery.init(), sizes.init(), layout.init(), $(".full-resp").swipebox(), $(window).bind("load", function() {
                slideshow.init({
                    slideshowSpeed: 6e3
                })
            }).bind("scroll", function() {
                zgrNavigation.onScroll()
            })
        }
    },
    contour = {
        init: function() {
            $(".contour-custom").each(function() {
                var i = $(this),
                    e = i.attr("class");
                i.attr("class", "").find("fieldset").attr("class", e)
            })
        }
    },
    layout = {
        init: function() {
            layout.removeFirstCol()
        },
        removeFirstCol: function() {
            $(window).resize(function() {
                $(".box4 > div:first-child > div, .box10 > div:first-child > div").each(function() {
                    var i = $(this);
                    0 == i.has("*").length && i.remove()
                })
            }).resize()
        }
    },
    sizes = {
        init: function() {
            sizes.resize()
        },
        resize: function() {
            $(window).resize(function() {
                App.isMediumDownScreen = $(window).width() <= App.mediumDownSize
            }).resize()
        }
    },
    accordion = {
        toggle: function(i) {
            var e = $(i).closest("tr");
            e.toggleClass("toggle").next().find("div").toggleClass("toggle")
        }
    },
    zgrNavigation = {
        onScroll: function() {
            $(window).scrollTop() > 0 ? $(App.nav).addClass("sticky-bg") : $(App.nav).removeClass("sticky-bg"), $(window).scrollTop() > App.topBarHeight ? $(App.nav).addClass("sticky-position") : $(App.nav).removeClass("sticky-position")
        }
    },
    stickyElements = {
        stickTheSuNav: function() {
            $(".pnl.booking + .box4 > div:first-child").stick_in_parent({
                offset_top: $(App.nav).height()
            })
        }
    },
    changePrices = {
        singleSelection: function(i) {
            var e = $(i);
            e.closest("fieldset").next("ul.prices").find("span").hide().filter('[data-value="price-' + e.val() + '"]').show()
        },
        multiSelection: function(i) {
            var e = $(i);
            period = e.closest("fieldset").find("> div:first-child > select").val(), room = e.closest("fieldset").find("> div:last-child > select").val(), e.closest("fieldset").next("ul.prices").find("span").hide().filter('[data-value="price-' + period + "-" + room + '"]').show()
        }
    },
    menu = {
        open: function(i) {
            $(i).fadeIn(200), menu.goToTop()
        },
        close: function(i) {
            $(i).fadeOut(200)
        },
        goToTop: function() {
            App.isMediumDownScreen && $(window).scrollTop(App.topBarHeight)
        }
    },
    gallery = {
        init: function(i) {
            gallery.config = {
                container: ".gallery-list",
                items: "> li > a",
                controlNav: !1
            }, $.extend(gallery.config, i), gallery.setup()
        },
        setup: function() {
            $(gallery.config.container).each(function() {
                $(this).find(gallery.config.items).click(gallery.buildUrl)
            })
        },
        buildUrl: function() {
            var i = $(this),
                e = i.closest(gallery.config.container).data("gallery-url"),
                o = i.parent().index();
            gallery.openGallery(o, e)
        },
        openGallery: function(i, e) {
            var o = $('<div id="overlay" />').appendTo("body");
            o.empty().fadeIn("fast", function() {
                gallery.loadContent(o, i, e)
            })
        },
        loadContent: function(i, e, o) {
            i.load(o, function() {
                slideshow.init({
                    container: "#overlay .slideshow",
                    startAt: e,
                    controlNav: gallery.config.controlNav,
                    slideshowSpeed: 3e3,
                    slideshow: !1
                }), gallery.closeGallery(i)
            })
        },
        closeGallery: function(i) {
            i.find(".flex-close").click(function() {
                $(this).closest(".slideshow").fadeOut("fast").closest("#overlay").fadeOut("fast", function() {
                    $(this).remove()
                })
            })
        }
    },
    slideshow = {
        init: function(i) {
            this.pageHost = window.location.href.split("/g/")[0] + "/g/", slideshow.config = {
                container: ".slideshow",
                controlNav: !1,
                slideshowSpeed: 3e3,
                slideshow: !0,
                startAt: !0
            }, $.extend(slideshow.config, i), slideshow.setup()
        },
        setup: function() {
            $(slideshow.config.container).find(".flexslider").each(function() {
                var i = $(slideshow.config.container).find(".flexslider");
                slideshow.build(i)
            })
        },
        build: function(i) {
            i.flexslider({
                controlNav: slideshow.config.controlNav,
                slideshowSpeed: slideshow.config.slideshowSpeed,
                slideshow: slideshow.config.slideshow,
                startAt: slideshow.config.startAt,
                fadeFirstSlide: !1,
                touch: i.find("ul.slides > li").size() > 1,
                animation: App.isTouchDevice ? "slide" : "fade",
                start: function(e) {
                    $(slideshow.config.container).find(".flexslider").find(".slides > li").show(), slideshow.pauseOnClick(i);
                    var o = e.slides.eq(e.currentSlide),
                        t = o.attr("data-bg-img-url"),
                        n = o.find("> div"),
                        a = void 0 == o.attr("data-bg-img-is-loaded") ? -1 : o.attr("data-bg-img-is-loaded");
                    if (slideshow.showSocialLinks(i, !a), slideshow.socialShare(i, a), i.find("ul.slides > li").size() < 2 && i.find("ul.flex-direction-nav").hide(), 0 == a) {
                        e.pause();
                        var l = new Image;
                        l.src = t, l.onload = function() {
                            if (o.css("z-index", 2).css("background-image", "url(" + t + ")").attr("data-bg-img-is-loaded", 1).addClass("animate-in"), App.isTouchDevice) {
                                var a = i.find("ul.slides > li.clone:last-child");
                                a.css("background-image", "url(" + t + ")").attr("data-bg-img-is-loaded", 1)
                            }
                            slideshow.showCaption(i, n), slideshow.showSocialLinks(i, !0), e.removeClass("loading"), slideshow.config.slideshow && void 0 == i.data("stopped") && e.play()
                        }
                    } else slideshow.showCaption(i, n), o.css("z-index", 2).addClass("animate-in"), e.removeClass("loading")
                },
                before: function(e) {
                    var o = e.slides.eq(e.currentSlide),
                        t = (o.attr("data-bg-img-url"), e.animatingTo);
                    if ($activeSlide = e.slides.eq(t), $activeCaption = $activeSlide.find("> div"), activeUrl = $activeSlide.attr("data-bg-img-url"), isOnDemand = void 0 == $activeSlide.attr("data-bg-img-is-loaded") ? -1 : $activeSlide.attr("data-bg-img-is-loaded"), 0 == isOnDemand) {
                        e.pause(), e.addClass("loading"), slideshow.showSocialLinks(i, !1), slideshow.hideCaption(i, $activeCaption, 1), !App.isTouchDevice;
                        var n = new Image;
                        n.src = activeUrl, n.onload = function() {
                            i.find("ul.slides > li").removeClass("animate-out"), o.addClass("animate-out"), $activeSlide.css("background-image", "url(" + activeUrl + ")").attr("data-bg-img-is-loaded", 1).addClass("animate-in"), App.isTouchDevice && t == e.find(".slides > li").size() - 3 && i.find("ul.slides > li.clone:first-child").css("background-image", "url(" + activeUrl + ")").attr("data-bg-img-is-loaded", 1), e.removeClass("loading"), slideshow.showCaption(i, $activeCaption), slideshow.showSocialLinks(i, !0), slideshow.config.slideshow && void 0 == i.data("stopped") && e.play()
                        }
                    } else !App.isTouchDevice, slideshow.hideCaption(i, $activeCaption, 0), i.find("ul.slides > li").removeClass("animate-out"), o.addClass("animate-out"), $activeSlide.addClass("animate-in")
                },
                after: function(e) {
                    i.find("ul.slides > li:not(.flex-active-slide)").removeClass("animate-in")
                }
            })
        },
        showCaption: function(i, e) {
            var o = e.html(),
                t = i.find(".flex-caption");
            t.find("> div > div > div").empty().html(o), void 0 != o && t.closest(".flex-caption").addClass("animate-in")
        },
        hideCaption: function(i, e, o) {
            i.find(".flex-caption").removeClass("animate-in"), 0 == o && slideshow.showCaption(i, e)
        },
        pauseOnClick: function(i) {
            var e = i;
            e.find(".flex-social a, .flex-next, .flex-prev, .flex-control-nav li a").click(function() {
                e.data("stopped", 1).flexslider("pause")
            })
        },
        showSocialLinks: function(i, e) {
            1 == i.find("ul.slides").data("show-social") && (e ? i.find(".flex-social").stop(!0, !0).fadeIn(200) : i.find(".flex-social").stop(!0, !0).fadeOut(200))
        },
        socialShare: function(i, e) {
            i.find(".flex-social a").each(function() {
                var o = $(this);
                o.click(function() {
                    var t = i.find(".slides li.flex-active-slide");
                    o.hasClass("facebook") && slideshow.facebookShare(t), o.hasClass("pinterest") && slideshow.pinterestShare(t, e), o.hasClass("google") && slideshow.googleShare(t), o.hasClass("twitter") && slideshow.twitterShare(t)
                })
            })
        },
        facebookShare: function(i) {
            var e = this.pageHost + i.index() + "/" + i.parent().data("gallery-url");
            return window.open("http://www.facebook.com/sharer.php?u=" + e + "&t=", "sharer", "toolbar=0,status=0,width=626,height=436"), !1
        },
        pinterestShare: function(i, e) {
            var o = this.pageHost + i.index() + "/" + i.parent().data("gallery-url"),
                t = "http://" + window.location.hostname,
                n = 1 == Boolean(e) ? t + i.data("bg-img-url") : t + i.find("> img:first-child").attr("src");
            return window.open("http://www.pinterest.com/pin/create/button/?url=" + o + "&media=" + n + "&description=", "sharer", "toolbar=0,status=0,width=626,height=436"), !1
        },
        googleShare: function(i) {
            var e = this.pageHost + i.index() + "/" + i.parent().data("gallery-url");
            return window.open("https://plus.google.com/share?url=" + e, "sharer", "toolbar=0,status=0,width=626,height=436"), !1
        },
        twitterShare: function(i) {
            var e = this.pageHost + i.index() + "/" + i.parent().data("gallery-url");
            return window.open("https://twitter.com/home?status=" + e, "sharer", "toolbar=0,status=0,width=626,height=436"), !1
        }
    },
    carousel = {
        init: function(i) {
            carousel.config = {
                container: ".carousel",
                animationLoop: !1,
                slideshow: !1,
                mobile: [641, 1],
                tablet: [1025, 2],
                items: 3
            }, $.extend(carousel.config, i), carousel.setup()
        },
        setup: function() {
            $(carousel.config.container).find(".flexslider").each(function() {
                $(this).flexslider({
                    animation: "slide",
                    animationLoop: carousel.config.animationLoop,
                    itemWidth: 1,
                    slideshow: carousel.config.slideshow,
                    minItems: carousel.getGridSize(),
                    maxItems: carousel.getGridSize(),
                    controlNav: !1
                })
            }), carousel.onResize()
        },
        getGridSize: function() {
            return window.innerWidth < carousel.config.mobile[0] ? carousel.config.mobile[1] : window.innerWidth < carousel.config.tablet[0] ? carousel.config.tablet[1] : carousel.config.items
        },
        onResize: function() {
            $(window).bind("resize", function() {
                $(carousel.config.container).find(".flexslider").each(function() {
                    var i = $(this);
                    0 != i.length && (i.data("flexslider").vars.minItems = carousel.getGridSize(), i.data("flexslider").vars.maxItems = carousel.getGridSize())
                })
            })
        }
    },
    bookingForm = {
        init: function(i) {
            bookingForm.config = {
                container: "fieldset.booking",
                dateFormat: "D, d M yy",
                altFormat: "dd.mm.yy",
                placeholder: !0,
                today: new Date
            }, $.extend(bookingForm.config, i), bookingForm.setup()
        },
        setup: function() {
            $(bookingForm.config.container).each(function() {
                var i = $(this);
                arrival = i.find(".from"), departure = i.find(".to"), calendars = [arrival, departure], bookingForm.build(calendars), bookingForm.placeholder(calendars)
            }), $(".children").change(function() {
                var e = $(this);
                $(".child-select").hide();
                var o = e.prop("selectedIndex");
                if (0 != o)
                    for (i = 1; i < o + 1; i++) $("#child-" + i).show()
            })
        },
        tomorrow: function() {
            var i = new Date(bookingForm.config.today);
            return i.setDate(i.getDate() + 1)
        },
        build: function(i) {
            for (var e = 0; e < i.length; e++) {
                var o = i[e];
                o.datepicker({
                    dateFormat: bookingForm.config.dateFormat,
                    altFormat: bookingForm.config.altFormat,
                    firstDay: 1,
                    minDate: 0 == e ? bookingForm.config.today : new Date(bookingForm.tomorrow()),
                    onSelect: function(i, e) {
                        var o = $(this);
                        if (o.hasClass("from")) {
                            var t = new Date(o.datepicker("getDate"));
                            $departure = o.closest(bookingForm.config.container).find(".to"), t.setDate(t.getDate() + 1), $departure.datepicker("setDate", t), $departure.datepicker("option", {
                                minDate: t
                            })
                        }
                    }
                })
            }
        },
        placeholder: function(i) {
            1 == bookingForm.config.placeholder && (i[0].datepicker("setDate", bookingForm.config.today), i[1].datepicker("setDate", new Date(bookingForm.tomorrow())))
        },
        send: function(e) {
            var o = $(e);
            $container = o.closest(bookingForm.config.container), arrival = $container.find(".from").datepicker("getDate"), departure = $container.find(".to").datepicker("getDate"), adults = $container.find(".adults").val(), children = $container.find(".children").val(), url = o.attr("href"), null == arrival && (arrival = bookingForm.config.today), null == departure && (departure = new Date(bookingForm.tomorrow())), arrival = arrival.getFullYear() + "-" + ("0" + parseInt(arrival.getMonth() + 1)).slice(-2) + "-" + ("0" + arrival.getDate()).slice(-2), departure = departure.getFullYear() + "-" + ("0" + parseInt(departure.getMonth() + 1)).slice(-2) + "-" + ("0" + departure.getDate()).slice(-2);
            var t = "",
                n = "";
            for (i = 0; i < adults; i++) t += "18,";
            return n = t.slice(0, -1), $("#child-1").is(":visible") && (n += "," + $container.find(".s-child-1").val()), $("#child-2").is(":visible") && (n += "," + $container.find(".s-child-2").val()), url += "?&arrival=" + arrival + "&departure=" + departure + "&adults=" + adults + "&children=" + children + "&room1=" + n + "&load=1&service=2", window.location = url, !1
        }
    },
    mobile = {
        menu: function() {
            $(".mobile-open").toggleClass("open")
        }
    },
    fluidVideo = {
        init: function(i) {
            fluidVideo.config = {
                iframe: "iframe.fluid-video"
            }, $.extend(fluidVideo.config, i), fluidVideo.setup()
        },
        setup: function() {
            var i = $(fluidVideo.config.iframe);
            fluidVideo.build(i), fluidVideo.resize(i)
        },
        build: function(i) {
            i.each(function() {
                $(this).data("aspectRatio", this.height / this.width).removeAttr("height").removeAttr("width")
            })
        },
        resize: function(i) {
            $(window).resize(function() {
                clearTimeout(window.fluidVideoResizeFinished), window.fluidVideoResizeFinished = setTimeout(function() {
                    i.each(function() {
                        var i = $(this),
                            e = i.parent().width() + 1;
                        i.width(e).height(e * i.data("aspectRatio")).show()
                    })
                }, 250)
            }).resize()
        }
    },
    scroll = {
        init: function(i) {
            scroll.config = {
                el: $("#scroll-down")
            }, scroll.setup()
        },
        setup: function() {
            scroll.onClick(), scroll.onScroll()
        },
        onClick: function() {
            scroll.config.el.click(function() {
                $("html, body").animate({
                    scrollTop: $(".box1>div:first-child>div:first-child>div:last-child>div>div").offset().top - $("#nav").height() + 1
                }, 750, "easeInOutExpo")
            })
        },
        onScroll: function() {
            $(window).bind("scroll", function() {
                $(window).scrollTop() <= 20 ? scroll.config.el.fadeIn("fast") : scroll.config.el.fadeOut("fast")
            })
        }
    };
App.init();
