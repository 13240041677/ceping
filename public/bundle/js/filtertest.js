webpackJsonp([47], {
    0: function(t, a, e) {
        t.exports = e(109)
    },
    109: function(t, a, e) {
        function s(t) {
            var a = "";
            return $.each(T, function(e, s) {
                if (s && t.toString() == s.ItemID.toString()) {
                    a = s.ParentPointID,
                        S = s;
                    var i = $(".second_tree dd[data-secid='" + s.PointID + "']").attr("data-time");
                    return isNaN(i) || "" == i ? S.Time = 1 : S.Time = i,
                        !1
                }
            }),
                $.each(q, function(t, e) {
                    if (e && a == e.PointID)
                        return _ = e,
                            !1
                }),
                ""
        }
        function i(t) {
            return 1 == t ? "一" : 2 == t ? "二" : 3 == t ? "三" : 4 == t ? "四" : 5 == t ? "五" : 6 == t ? "六" : 7 == t ? "七" : 8 == t ? "八" : 9 == t ? "九" : 10 == t ? "十" : 11 == t ? "十一" : 12 == t ? "十二" : 13 == t ? "十三" : 14 == t ? "十四" : 15 == t ? "十五" : 16 == t ? "十六" : 17 == t ? "十七" : 18 == t ? "十八" : 19 == t ? "十九" : 20 == t ? "二十" : 21 == t ? "二十一" : 22 == t ? "二十二" : 23 == t ? "二十三" : 24 == t ? "二十四" : 25 == t ? "二十五" : 26 == t ? "二十六" : 27 == t ? "二十七" : 28 == t ? "二十八" : 29 == t ? "二十九" : 30 == t ? "三十" : 31 == t ? "三十一" : 32 == t ? "三十二" : 33 == t ? "三十三" : 34 == t ? "三十四" : 35 == t ? "三十五" : 36 == t ? "三十六" : 37 == t ? "三十七" : 38 == t ? "三十八" : 39 == t ? "三十九" : 40 == t ? "四十" : 41 == t ? "四十一" : 42 == t ? "四十二" : 43 == t ? "四十三" : 44 == t ? "四十四" : 45 == t ? "四十五" : 46 == t ? "四十六" : 47 == t ? "四十七" : 48 == t ? "四十八" : 49 == t ? "四十九" : 50 == t ? "五十" : ""
        }
        function n() {
            return y += 1,
                ""
        }
        var l, d = e(26), o = {
            ExamID: 0,
            Edu: 0,
            artScience: "",
            SubjectID: "",
            StageID: "",
            ExamCode: ""
        }, r = 0, c = "https://oms.mofangge.com/Subject/SubExam/GetQuesList", m = 0, h = "0", u = 0, p = 1, v = e(110), f = e(111), C = $("#imgurl").val(), k = "/OrgExam/CreateExam/PaperList", x = e(3), g = e(112), P = e(4), D = 1, I = 1, _ = {}, S = {}, b = "", N = 1, y = 1, q = [], T = [], w = "", E = 0, j = 0, H = "", O = "", F = 0, K = 0, Q = !0;
        e(113);
        x.helper("CheckEq", function(t, a, e, l) {
            var d = "";
            return s(e),
                _.PointName == b ? d = '<div style="clear:both;"><div class="ml20 mt15 my_style"><span style="display:inline-block;width:3%;vertical-align:top;">' + N + "、</span>" + a + '</div></div><div class="pre_delet right" style="cursor:pointer;"><span class="addto_basket"></span><span class="middle mr20" data-qid=' + e + " data-num=" + l + " data-ExamKnowID=" + S.ExamKnowID + " data-PPointName=" + S.PointName + " data-PPointID=" + _.PointID + "  data-PointName=" + S.PointName + " data-PointID=" + S.PointID + " data-Default=" + S.Time + " data-time=" + S.Time + ">移出试题篮</span></div>" : (d = '<h5 class="font14">' + i(y) + "、" + _.PointName + '</h5> <div style="clear:both;"><div class="ml20 mt15 my_style"><span style="display:inline-block;width:3%;vertical-align:top;">' + N + "、</span>" + a + '</div></div><div class="pre_delet right" style="cursor:pointer;"><span class="addto_basket"></span><span class="middle mr20" data-qid=' + e + " data-num=" + l + " data-ExamKnowID=" + S.ExamKnowID + " data-PPointName=" + S.PointName + " data-PPointID=" + _.PointID + "  data-PointName=" + S.PointName + " data-PointID=" + S.PointID + " data-Default=" + S.Time + " data-time=" + S.Time + ">移出试题篮</span></div>",
                    n()),
                d
        }),
            x.helper("showerror", function(t, a) {
                var e = "";
                return 2 == +r || 1 == +r ? +userID == +t && (e = '<span class="wrongspan hiddened" data-uesrid="' + t + '" data-qid="' + a + '">修改</span>') : e = '<span class="wrongspan hiddened" data-uesrid="' + t + '" data-qid="' + a + '">纠错</span>',
                    e
            }),
            x.helper("ShowQuestionTitle", function(t, a, e) {
                var s = "";
                return "" == t || "" == a || void 0 == t || null == t || void 0 == a || null == a ? s : s = "[" + t + "·" + e + "·" + a + "]"
            }),
            x.helper("BindIndex", function(t) {
                return b = _.PointName,
                    N += 1,
                    ""
            }),
            x.helper("BindPoint", function(t, a, e, s, i, n) {
                if (Q && s) {
                    var l = {};
                    l.ExamID = o.ExamID,
                        l.ExamKnowID = t,
                        l.ClassHour = i,
                        l.DefaultHour = n,
                        l.PointID = a,
                        l.PointName = e,
                        l.Num = 0,
                        T.length > 0 ? $.each(T, function(t, e) {
                            e && e.ParentPointID == a && (l.Num = parseFloat(l.Num) + 1)
                        }) : l.Num = 1,
                        q.push(l)
                }
                return ""
            });
        var t = function() {
            this.init = function() {
                t(),
                    a(),
                    B(),
                    z(),
                    R(),
                    A(),
                    W()
            }
            ;
            var t = function() {
                $(".already_testType ").hover(function() {
                    "0" != $(".mun_span").text() && $(".need_show").show()
                }, function() {
                    $(".need_show").hide()
                }),
                    $("#examName").keypress(function() {
                        var t = event.keyCode;
                        if (32 == t)
                            return !1
                    }),
                    $(".need_show").hide(),
                    $("#backtop").click(function() {
                        var t = 200;
                        return $("html,body").animate({
                            scrollTop: 0
                        }, t),
                            !1
                    }),
                    $(".filter-title li[data-id]").click(function() {
                        $(this).hasClass("actived") || ($(this).siblings().removeAttr("class"),
                            $(this).addClass("actived"),
                        "0" == $(this).attr("data-id") && ($("#showOrder").html("默认排序"),
                            r = 0,
                            c = "https://oms.mofangge.com/Subject/SubExam/GetQuesList"),
                        "1" == $(this).attr("data-id") && ($("#showOrder").html("默认排序"),
                            r = 1,
                            c = "https://oms.mofangge.com/Subject/SubExam/GetQuesList"),
                        "2" == $(this).attr("data-id") && ($("#showOrder").html("最近上传"),
                            r = 2,
                            c = "https://oms.mofangge.com/Subject/SubExam/GetQuesList"),
                            a())
                    }),
                    $(".diff_ul li").click(function() {
                        $(this).text().toString().indexOf("难度") == -1 && ($(this).siblings().removeAttr("class"),
                            $(this).addClass("actived"),
                            h = $(this).attr("value"),
                            n(1))
                    }),
                    $(".leftTree").delegate(".second_tree dd", "click", function() {
                        $(".clickjs1").children().removeClass("clickState2").removeClass("clickState1").addClass("easyTodif"),
                            $(".clickjs2").children().removeClass("clickState2").removeClass("clickState1").addClass("easyTodif"),
                            $(".clickjs0").addClass("actived").siblings().removeClass("actived"),
                            $(".second_tree").children().removeClass("clickTree"),
                            $(this).addClass("clickTree"),
                            m = $(this).attr("data-secid"),
                            w = $(this).attr("data-pointid"),
                            E = $(this).attr("data-secid"),
                            j = $(this).attr("data-did"),
                            H = $(this).attr("data-pointname"),
                            O = $(this).attr("data-ppointname"),
                            K = $(this).attr("data-time"),
                            F = $(this).attr("data-defaulttime"),
                            n(1)
                    }),
                    $(".leftTree").delegate("dt", "click", function() {
                        $(".clickjs1").children().removeClass("clickState2").removeClass("clickState1").addClass("easyTodif"),
                            $(".clickjs2").children().removeClass("clickState2").removeClass("clickState1").addClass("easyTodif"),
                            $(".clickjs0").addClass("actived").siblings().removeClass("actived");
                        var t = $(this).attr("id");
                        $(".leftTree dt[class*='on_open']").each(function() {
                            $(this).attr("id") == t || ($(this).removeClass("on_open"),
                                $(this).addClass("on_close"),
                                $(this).next().hide(300))
                        }),
                            $("#" + t).hasClass("on_close") ? ($(this).removeClass("on_close"),
                                $(this).addClass("on_open"),
                                $(this).next().show(300)) : ($(this).removeClass("on_open"),
                                $(this).addClass("on_close"),
                                $(this).next().hide(300))
                    }),
                    $("#questionlist").delegate(".wrongPosition span", "click", function() {
                        var t = $(this).attr("data-qid");
                        $(this).attr("data-uesrid");
                        2 == +r || 1 == +r ? ($(".pop-mask").show(),
                            InitQuestionInfo(t, e, 1)) : ($("[class='ml5']").html("试题" + $(this).attr("data-qid")),
                            $("[class='ml5']").attr("data-itemid", $(this).attr("data-qid")),
                            $("#textarea").val(""),
                            $("[class='mypopup find_wrong hidden']").show(),
                            $(".pop-mask").show())
                    }),
                    $("#selType").change(function() {
                        $(this).children("option:selected").attr("selected", !0).siblings().removeAttr("selected")
                    }),
                    $("[class='popclose cursor']").click(function() {
                        $("#preSeeShow").hide(),
                            $("[class='mypopup find_wrong hidden']").hide(),
                            $("[class='mypopup save_testPaper hidden']").hide(),
                            $("#textarea").html(""),
                            $(".pop-mask").hide()
                    }),
                    $("#papersum").delegate("span.dataopt", "click", function() {
                        if ($(this).hasClass("mutilp")) {
                            var t = $(this).attr("data-pid")
                                , a = $("#a" + t).val();
                            if ("" == a || "1" == a || "0" == a)
                                return;
                            a = parseFloat(a),
                                $("#a" + t).val(a - 1);
                            var e = $("#sumHour").text();
                            e = parseFloat(e) - 1,
                                $("#sumHour").text(e)
                        }
                        if ($(this).hasClass("add")) {
                            var t = $(this).attr("data-pid")
                                , a = $("#a" + t).val();
                            if ("" == a && (a = 0),
                                "99" == a)
                                return;
                            a = parseFloat(a),
                                $("#a" + t).val(a + 1);
                            var e = $("#sumHour").text();
                            e = parseFloat(e) + 1,
                                $("#sumHour").text(e)
                        }
                    }),
                    $("#papersum").delegate("input", "keyup", function() {
                        var t = $(this).val();
                        $.trim(t).length > 2 && $(this).val(parseFloat(t.substring(0, 2))),
                            L()
                    }),
                    $("#papersum").delegate("input", "keypress", function() {
                        return U()
                    }),
                    $("div[data-close=1]").click(function() {
                        $(".pop-mask").hide(),
                            $(".tpmls .poup").hide()
                    }),
                    $("#questionlist").delegate(".mr20 span", "click", function() {
                        $(this).hasClass("mr20") || $(this).hasClass("click_addTobasket") || $(this).hasClass("addto_basket") ? $(this).hasClass("mr20") ? $(this).hasClass("noClick") ? ($(this).html("移出试题篮"),
                            $(this).prev().removeClass("addto_basket").removeClass("click_addTobasket").addClass("addto_basket"),
                            $(this).removeClass("noClick"),
                            Z(j, E, w, $(this).attr("data-qid"), $(this).attr("data-num"), H, !0),
                            tt(j, w, O, !0, !1, $(this).attr("data-qid"), F, K, H)) : ($(this).html("加入试题篮"),
                            $(this).prev().removeClass("click_addTobasket").removeClass("addto_basket").addClass("click_addTobasket"),
                            $(this).addClass("noClick"),
                            Z(j, E, w, $(this).attr("data-qid"), $(this).attr("data-num"), H, !1),
                            tt(j, w, O, !1, !0, $(this).attr("data-qid"), F, K, H)) : $(this).hasClass("click_addTobasket") ? ($(this).next().html("移出试题篮"),
                            $(this).next().removeClass("middle mr20 noClick").addClass("middle mr20"),
                            $(this).removeClass("click_addTobasket").addClass("addto_basket"),
                            Z(j, E, w, $(this).next().attr("data-qid"), $(this).next().attr("data-num"), H, !0),
                            tt(j, w, O, !0, !1, $(this).next().attr("data-qid"), F, K, H)) : ($(this).next().html("加入试题篮"),
                            $(this).next().removeClass("middle mr20").addClass("middle mr20 noClick"),
                            $(this).removeClass("addto_basket").addClass("click_addTobasket"),
                            Z(j, E, w, $(this).next().attr("data-qid"), $(this).next().attr("data-num"), H, !1),
                            tt(j, w, O, !1, !0, $(this).next().attr("data-qid"), F, K, H)) : $(this).hasClass("middle") ? $(this).hasClass("noClick") ? ($(this).html("取消收藏"),
                            V($(this).attr("data-qid")),
                            $(this).prev().removeClass("collection").removeClass("click_collection").addClass("collection"),
                            $(this).removeClass("noClick")) : ($(this).html("收藏试题"),
                            X($(this).attr("data-qid")),
                            $(this).prev().removeClass("click_collection").removeClass("collection").addClass("click_collection"),
                            $(this).addClass("noClick")) : $(this).hasClass("collection") ? ($(this).next().html("收藏试题"),
                            X($(this).next().attr("data-qid")),
                            $(this).next().removeClass("middle").addClass("middle noClick"),
                            $(this).removeClass("collection").addClass("click_collection")) : ($(this).next().html("取消收藏"),
                            V($(this).next().attr("data-qid")),
                            $(this).next().removeClass("middle noClick").addClass("middle"),
                            $(this).removeClass("click_collection").addClass("collection"))
                    }),
                    $("#titleB").delegate("span", "click", function() {
                        if ($(this).hasClass("mr20"))
                            if ($(this).hasClass("noClick")) {
                                $(this).html("移出试题篮"),
                                    $(this).prev().removeClass("click_addTobasket").removeClass("addto_basket").addClass("addto_basket"),
                                    $(this).removeClass("noClick");
                                var t = $(this).attr("data-ExamKnowID")
                                    , a = $(this).attr("data-PointID")
                                    , e = $(this).attr("data-PPointID") + "00"
                                    , s = ($(this).attr("data-diffnum"),
                                    $(this).attr("data-PointName"))
                                    , i = $(this).attr("data-PPointName")
                                    , n = $(this).attr("data-Default")
                                    , l = $(this).attr("data-qid");
                                $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").html("移出试题篮"),
                                    $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").removeClass("noClick"),
                                    $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").prev().removeClass("addto_basket").removeClass("click_addTobasket").addClass("addto_basket"),
                                    Z(t, a, e, $(this).attr("data-qid"), $(this).attr("data-num"), s, !0),
                                    tt(t, e, i, !0, !1, $(this).attr("data-qid"), n, n, s)
                            } else {
                                $(this).html("加入试题篮"),
                                    $(this).prev().removeClass("addto_basket").removeClass("click_addTobasket").addClass("click_addTobasket"),
                                    $(this).addClass("noClick");
                                var t = $(this).attr("data-ExamKnowID")
                                    , a = $(this).attr("data-PointID")
                                    , e = $(this).attr("data-PPointID") + "00"
                                    , s = ($(this).attr("data-diffnum"),
                                    $(this).attr("data-PointName"))
                                    , i = $(this).attr("data-PPointName")
                                    , n = $(this).attr("data-Default")
                                    , l = $(this).attr("data-qid");
                                $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").html("加入试题篮"),
                                    $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").prev().removeClass("addto_basket").removeClass("click_addTobasket").addClass("click_addTobasket"),
                                    $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").addClass("noClick"),
                                    Z(t, a, e, $(this).attr("data-qid"), $(this).attr("data-num"), s, !1),
                                    tt(t, e, i, !1, !0, $(this).attr("data-qid"), n, n, s)
                            }
                        else if ($(this).hasClass("click_addTobasket")) {
                            $(this).next().html("移出试题篮"),
                                $(this).next().removeClass("middle mr20 noClick").addClass("middle mr20"),
                                $(this).removeClass("click_addTobasket").addClass("addto_basket");
                            var l = $(this).next().attr("data-qid")
                                , t = $(this).next().attr("data-ExamKnowID")
                                , a = $(this).next().attr("data-PointID")
                                , e = $(this).next().attr("data-PPointID") + "00"
                                , s = ($(this).next().attr("data-diffnum"),
                                $(this).next().attr("data-PointName"))
                                , i = $(this).next().attr("data-PPointName")
                                , n = $(this).next().attr("data-Default");
                            $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").html("移出试题篮"),
                                $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").removeClass("noClick"),
                                $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").prev().removeClass("addto_basket").removeClass("click_addTobasket").addClass("addto_basket"),
                                Z(t, a, e, $(this).next().attr("data-qid"), $(this).next().attr("data-num"), s, !0),
                                tt(t, e, i, !0, !1, $(this).next().attr("data-qid"), n, n, s)
                        } else {
                            $(this).next().html("加入试题篮"),
                                $(this).next().removeClass("middle mr20").addClass("middle mr20 noClick"),
                                $(this).removeClass("addto_basket").addClass("click_addTobasket");
                            var l = $(this).next().attr("data-qid")
                                , t = $(this).next().attr("data-ExamKnowID")
                                , a = $(this).next().attr("data-PointID")
                                , e = $(this).next().attr("data-PPointID") + "00"
                                , s = ($(this).next().attr("data-diffnum"),
                                $(this).next().attr("data-PointName"))
                                , i = $(this).next().attr("data-PPointName")
                                , n = $(this).next().attr("data-Default");
                            $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").html("加入试题篮"),
                                $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").prev().removeClass("addto_basket").removeClass("click_addTobasket").addClass("click_addTobasket"),
                                $("#questionlist li span[data-qid='" + l + "'][class*='mr20']").addClass("noClick"),
                                Z(t, a, e, $(this).next().attr("data-qid"), $(this).next().attr("data-num"), s, !1),
                                tt(t, e, i, !1, !0, $(this).next().attr("data-qid"), n, n, s)
                        }
                    }),
                    $("[class='wrongspan hiddened']").click(function() {}),
                    $(".need_show").delegate("img", "click", function() {
                        tt(0, $(this).parent().parent().attr("data-id"), "", !1, !1, 0, 0, 0, "")
                    }),
                    $(".rightContent").delegate("div[class='test_outer']", "click", function(t) {
                        if ("mr20" != t.target.parentNode.className && "wrongPosition" != t.target.parentNode.className) {
                            var a = $(this).find("div[data-qid]");
                            a.has("span").length ? a.is(":hidden") ? a.show(300) : a.hide(300) : G(a.attr("data-qid"), a)
                        }
                    });
                var t = 0;
                $(".clickjs1").click(function() {
                    u = 1,
                        $(this).addClass("actived").siblings().removeClass("actived"),
                        $(this).children().removeClass("easyTodif"),
                        $(this).next().children().removeClass("clickState2"),
                        $(this).next().children().removeClass("clickState1").addClass("easyTodif"),
                        t % 2 == 0 ? ($(this).children().removeClass("clickState2"),
                            $(this).children().addClass("clickState1"),
                            p = 1) : ($(this).children().removeClass("clickState1"),
                            $(this).children().addClass("clickState2"),
                            p = 0),
                        $(".clickjs2").html('由难到易<span class="easyTodif"></span>'),
                        n(1),
                        s = 0,
                        t++
                });
                var s = 0;
                $(".clickjs2").click(function() {
                    u = 2,
                        $(this).children().removeClass("easyTodif"),
                        $(this).addClass("actived").siblings().removeClass("actived"),
                        $(".clickjs1").children().removeClass("clickState1"),
                        $(".clickjs1").children().removeClass("clickState2").addClass("easyTodif"),
                        s % 2 == 0 ? ($(this).children().removeClass("clickState2"),
                            $(this).children().addClass("clickState1"),
                            $(this).html('由难到易<span class="clickState1"></span>'),
                            p = 1) : ($(this).children().removeClass("clickState1"),
                            $(this).children().addClass("clickState2"),
                            $(this).html('由易到难<span class="clickState2"></span>'),
                            p = 0),
                        t = 0,
                        n(1),
                        s++
                }),
                    $(".clickjs0").click(function() {
                        u = 0,
                            $(".clickjs1").children().removeClass("clickState2").removeClass("clickState1").addClass("easyTodif"),
                            $(".clickjs2").children().removeClass("clickState2").removeClass("clickState1").addClass("easyTodif"),
                            $(this).addClass("actived").siblings().removeClass("actived"),
                            $(".clickjs2").html('由难到易<span class="easyTodif"></span>'),
                            t = 0,
                            s = 0,
                            p = 1,
                            n(1)
                    }),
                    o.ExamID = $("#ExamID").val(),
                    o.Edu = $("#edu").val(),
                    o.SubjectID = $("#SubjectID").val(),
                    o.StageID = $("#StageID").val(),
                    o.artScience = $("#artScience").val(),
                    $(".already_filter").hover(function() {
                        $(".mun_span").hide()
                    }, function() {
                        $(".mun_span").show()
                    }),
                    $("#main-content-wrapper").delegate("#Confrim", "click", function() {
                        $(".pop-mask").hide(),
                            $(".pop-up").hide(),
                            $("#divPopOpenConfrimPopNoCancel").remove()
                    }),
                    $("#examName").bind("input propertychange", function() {
                        var t = $(this).val();
                        t.length > 200 && $(this).val($(this).val().substring(0, 200))
                    })
            }
                , a = function() {
                switch (+r) {
                    case 0:
                        s("GetMixIndex");
                        break;
                    case 1:
                        s("GetMixIndexKeep");
                        break;
                    case 2:
                        s("GetMixIndex")
                }
            }
                , e = function(t) {
                M(t),
                    $(".tpmls .poup").hide(),
                    $(".pop-mask").hide()
            }
                , s = function(t) {
                i(t)
            }
                , i = function(t) {
                $.ajax({
                    type: "post",
                    url: "https://oms.mofangge.com/Subject/SubExam/" + t,
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        source: r,
                        ExamID: o.ExamID,
                        edu: o.Edu,
                        artScience: o.artScience,
                        SubjectID: o.SubjectID,
                        StageID: o.StageID
                    },
                    success: function(t) {
                        $(".leftTree").html(""),
                        Q && (ExamCode = t.N.T.ExamCode,
                            l = t.N.T,
                            T = t.N.I),
                            t.N.P.length > 0 ? $(".leftTree").html(v(t.N)) : $(".leftTree").html('<p class="nodada_show">暂无数据</p>')
                    },
                    complete: function(t) {
                        1 == $(".second_tree").length && $(".second_tree").css("border-left", "none"),
                            $(".second_tree dd").hasClass("clickTree");
                        var a = $(".second_tree").find(".clickTree");
                        m = a.attr("data-secid"),
                            w = a.attr("data-pointid"),
                            E = a.attr("data-secid"),
                            j = a.attr("data-did"),
                            H = a.attr("data-pointname"),
                            O = a.attr("data-ppointname"),
                            K = a.attr("data-time"),
                            F = a.attr("data-defaulttime"),
                            n(1),
                        Q && at(),
                            Q = !1
                    },
                    error: function(t) {}
                })
            }
                , n = function(t) {
                0 != E && $.ajax({
                    type: "post",
                    url: c,
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        source: r,
                        IsGood: 1,
                        f_id: E,
                        diff: h,
                        style: 1,
                        currentPage: t,
                        sorttype: u,
                        sort: p
                    },
                    success: function(a) {
                        if ($("#questionlist").html(""),
                            a.Data.length > 0) {
                            if ($("#questionlist").html(f(a)),
                                    // MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#questionlist").get(0)]),
                                $(".leftTree").outerHeight() < $(".rightContent ").outerHeight() && $(".leftTree").height($(".rightContent ").outerHeight() + 45),
                                0 == +r || 2 == +r) {
                                var e = $("#questionlist .mr20 span:not(.mr20)").map(function() {
                                    return $(this).attr("data-qid")
                                }).get().join(",");
                                Y(e)
                            } else
                                $("#questionlist .mr20 span:not(.mr20)").each(function(t, a) {
                                    $(this).hasClass("middle") && ($(this).html("取消收藏"),
                                        $(this).prev().removeClass("collection").removeClass("click_collection").addClass("collection"),
                                        $(this).removeClass("noClick"))
                                });
                            d.Paginator(10, t, a.TotalCount, M),
                                $("#Qtotal").html(a.TotalCount),
                                x()
                        } else
                            $("#questionlist").html('<div class="data_img"><div class="big_area"><img src="../../../bundle/img/noclass.png"><p>暂无数据！</p></div></div>'),
                                $("#pagination").html(""),
                                $("#Qtotal").html("0")
                    },
                    error: function(t) {}
                })
            }
                , x = function() {
                $("#questionlist .mr20 span").each(function(t, a) {
                    if ($(this).hasClass("mr20") && a) {
                        var e = $(this).attr("data-qid")
                            , s = !1;
                        $.each(T, function(t, a) {
                            if (a && a.ItemID.toString() == e.toString() && a.PointName == H)
                                return s = !0,
                                    !1
                        }),
                        s && ($(this).html("移出试题篮"),
                            $(this).prev().removeClass("addto_basket").removeClass("click_addTobasket").addClass("addto_basket"),
                            $(this).removeClass("noClick"),
                        q.length > 0 && $.each(q, function(t, a) {
                            if (a && a.PointID == w.substring(0, w.length - 2))
                                if (a[H])
                                    a[H]["a" + e.toString()] || (a[H]["a" + e.toString()] = F.toString() + "," + K.toString());
                                else {
                                    var s = new Array;
                                    s["a" + e.toString()] = F.toString() + "," + K.toString(),
                                        a[H] = s
                                }
                        }))
                    }
                })
            }
                , M = function(t) {
                n(t)
            }
                , G = function(t, a) {
                var e = {};
                $.ajax({
                    type: "post",
                    url: "https://oms.mofangge.com/Subject/SubCreateExam/GetQuestionExtendInfo?abcdate=" + (new Date).getTime(),
                    traditional: !0,
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        q_id: t
                    },
                    dataType: "json",
                    success: function(t) {
                        e = t.result
                    },
                    complete: function(t) {
                        if (e = JSON.parse(t.responseText).result,
                            "undefined" != typeof e && e.length > 0) {
                            var s = ' <p class="analy_p"><span class="analy_title">答案：</span><br/>' + e[0].Answer + '<br/><span class="analy_title">解析：</span><br/>' + e[0].Ways + "</p>";
                            a.hide(),
                                a.html(s),
                                // MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#questionlist").get(0)]),
                                a.show(300)
                        }
                    }
                })
            }
                , A = function() {
                $(".preSee").click(function() {
                    if ("0" != $(".mun_span").html()) {
                        _ = {},
                            S = {},
                            b = "",
                            N = 1,
                            y = 1;
                        var t = [];
                        $.each(q, function(a, e) {
                            e && $.each(T, function(a, s) {
                                s && e.PointID == s.ParentPointID && t.push(s)
                            })
                        });
                        var a = $.map(t, function(t, a) {
                            return t.ItemID
                        }).toString();
                        $.ajax({
                            url: "https://oms.mofangge.com/Subject/SubCreateExam/GetMixIndexPop",
                            data: {
                                'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                                data: a
                            },
                            type: "post",
                            success: function(t) {
                                $("#titleA").html(l.ExamName),
                                    $("#titleB").html(g(t.N)),
                                    P.MaskShow(),
                                    // MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#preSeeShow").get(0)]),
                                    $("#preSeeShow").show(),
                                    J()
                            }
                        })
                    }
                })
            }
                , J = function() {}
                , B = function() {
                $("#SelectDone").click(function() {
                    if ("" == $(".mun_span").html() || "0" == $(".mun_span").html())
                        return void P.OpenConfrimPopNoCance2("试题篮中试题数量不能为空!");
                    if (!(q.length < 1)) {
                        $("#examName").val(l.ExamName),
                            $("#papersum").html("");
                        var t = "";
                        $.each(q, function(a, e) {
                            t += "<li><div>" + e.PointName + ' <div class="word_the"> <input id=a' + e.PointID + ' type="text" oncontextmenu="return false;"  onpaste="return false;" class="input myInput" placeholder="0" value="' + e.ClassHour + '"/><span class="mutilp dataopt" data-pid=' + e.PointID + '></span><span class="add dataopt" data-pid=' + e.PointID + "></span></div></div></li>"
                        }),
                            $("#papersum").html(t);
                        var a = 0;
                        $("#papersum :input").each(function(t, e) {
                            e && (a += parseInt($(this).val()))
                        }),
                            $("#sumHour").text(a),
                            $("[class='mypopup save_testPaper hidden']").show(),
                            $(".pop-mask").show()
                    }
                })
            }
                , L = function() {
                var t = 0;
                $("#papersum :input").each(function(a, e) {
                    e && (isNaN($(e).val()) || "" == $(e).val() || (t += parseFloat($(e).val())))
                }),
                    $("#sumHour").html(t)
            }
                , U = function() {
                var t = event.keyCode;
                if (t >= 48 && t <= 57) {
                    document.execCommand("Cut", !1, !0);
                    var a = $(event.target).val();
                    return ("" != a || 48 != t) && !(a.length > 1)
                }
                return !1
            }
                , W = function() {
                $("#ConfirmSave").click(function() {
                    if ("" == $.trim($("#examName").val()))
                        return void $("#examName").focus();
                    var t = !0;
                    if ($("#papersum :input").each(function(a, e) {
                            if (e && (isNaN($(e).val()) || "" == $(e).val() || "0" == $(e).val()))
                                return $(e).focus(),
                                    t = !1,
                                    !1
                        }),
                        "0" == $("#ConfirmSave").attr("data-on"))
                        return void $("#ConfirmSave").attr({
                            "data-on": "1"
                        });
                    if ($("#ConfirmSave").attr({
                            "data-on": "0"
                        }),
                            t) {
                        $("#papersum :input").each(function(t, a) {
                            if (a) {
                                var e = $(this).attr("id")
                                    , s = $(this).val();
                                $.each(q, function(t, a) {
                                    a && a.PointID == e.substring(1) && (a.ClassHour = s)
                                })
                            }
                        });
                        var a = 0;
                        $.each(T, function(t, e) {
                            if (e) {
                                var s = parseFloat(e.DiffNum);
                                a += s <= 20 ? 1 : s <= 40 ? 1.2 : s <= 60 ? 1.5 : s <= 80 ? 1.8 : 2
                            }
                        }),
                            $.ajax({
                                url: "https://oms.mofangge.com/Subject/SubCreateExam/SaveMixIndex",
                                data: {
                                    'userInfo':'{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                                    ExamName: escape($("#examName").val()),
                                    ScheduledTime: Math.ceil(a),
                                    ExamID: o.ExamID,
                                    Points: JSON.stringify(q),
                                    Items: JSON.stringify(T),
                                    ExamCode: ExamCode
                                },
                                type: "post",
                                success: function(t) {
                                    location.href = k
                                },
                                error: function(t) {
                                    $("#ok").attr({
                                        "data-on": "1"
                                    })
                                }
                            })
                    } else
                        $("#ConfirmSave").attr({
                            "data-on": "1"
                        })
                })
            }
                , R = function() {
                $("#CancelSave").click(function() {
                    $("[class='mypopup save_testPaper hidden']").hide(),
                        $(".pop-mask").hide()
                })
            }
                , z = function() {
                $("#WrongSave").click(function() {
                    var t = $("#selType").val()
                        , a = $("#textarea").val();
                    if ("" == $.trim(a))
                        return void $("#textarea").focus();
                    var e = $("[class='ml5']").attr("data-itemid");
                    $.ajax({
                        type: "POST",
                        url: "/OrgExam/CreateExam/AddDebugQuestion?abcdate=" + (new Date).getTime(),
                        data: {
                            qid: e,
                            content: a,
                            typeid: t,
                            SubjectID: o.SubjectID
                        },
                        success: function(t) {
                            "11-001" == t.submit ? ($('[class="mypopup find_wrong hidden"]').hide(),
                                P.MaskHide(),
                                P.MaskShow(),
                                P.PopTipShow("操作成功!")) : P.PopTipShow("操作失败!")
                        }
                    })
                })
            }
                , V = function(t) {
                // $.ajax({
                //     type: "post",
                //     url: "/OrgExam/CreateExam/AddItemCollect",
                //     dataType: "json",
                //     data: {
                //         QID: t
                //     },
                //     success: function(t) {},
                //     error: function(t) {}
                // })
            }
                , X = function(t) {
                // $.ajax({
                //     type: "post",
                //     url: "/OrgExam/CreateExam/RemoveItemCollect",
                //     dataType: "json",
                //     data: {
                //         QID: t
                //     },
                //     success: function(t) {},
                //     error: function(t) {}
                // })
            }
                , Y = function(t) {
                // $.ajax({
                //     url: "/OrgExam/CreateExam/GetItemCollectState",
                //     async: !1,
                //     data: {
                //         QID: t
                //     },
                //     dataType: "json",
                //     type: "post",
                //     success: function(t) {
                //         if (t)
                //             for (var a = 0; a < t.length; a++)
                //                 $("#questionlist .mr20 span").each(function() {
                //                     $(this).hasClass("mr20") || $(this).hasClass("middle") && $(this).attr("data-qid") == t[a] && ($(this).html("取消收藏"),
                //                         $(this).prev().removeClass("collection").removeClass("click_collection").addClass("collection"),
                //                         $(this).removeClass("noClick"))
                //                 })
                //     }
                // })
            }
                , Z = function(t, a, e, s, i, n, l) {
                if (l) {
                    var d = {};
                    d.ExamKnowID = t,
                        d.ItemID = s,
                        d.ParentPointID = e.substring(0, e.length - 2),
                        d.DiffNum = i,
                        d.PointID = a,
                        d.PointName = n,
                        T.push(d)
                } else
                    T.length > 0 && (T = $.grep(T, function(t, e) {
                        if (t)
                            return t.ItemID != s || t.PointID != a || t.PointName != n
                    }))
            }
                , tt = function(t, a, e, s, i, n, l, d, r) {
                var c = "";
                if (c = s ? a.substring(0, a.length - 2) : i ? a.substring(0, a.length - 2) : a,
                        s) {
                    var m = !1;
                    if (q.length > 0 && ($.each(q, function(t, a) {
                            if (a && a.PointID == c)
                                return m = !0,
                                    !1
                        }),
                        m && (q = $.grep(q, function(t, a) {
                            if (t) {
                                if (t.PointID == c)
                                    if (t.Num = parseFloat(t.Num) + 1,
                                            t[r])
                                        t[r]["a" + n.toString()] || (t[r]["a" + n.toString()] = l.toString() + "," + d.toString());
                                    else {
                                        t.DefaultHour = parseFloat(t.DefaultHour) + parseFloat(l),
                                            t.ClassHour = parseFloat(t.ClassHour) + parseFloat(l);
                                        var e = new Array;
                                        e["a" + n.toString()] = l.toString() + "," + d.toString(),
                                            t[r] = e
                                    }
                                return !0
                            }
                        }))),
                        0 == q.length || !m) {
                        var h = {};
                        h.ExamID = o.ExamID,
                            h.ExamKnowID = t,
                            h.ClassHour = d,
                            h.DefaultHour = l,
                            h.PointID = c,
                            h.PointName = e,
                            h.Num = 1;
                        var u = new Array;
                        u["a" + n.toString()] = l.toString() + "," + d.toString(),
                            h[r] = u,
                            q.push(h)
                    }
                } else
                    q = $.grep(q, function(t, a) {
                        return !!t && (t.PointID != c || (t.Num = parseFloat(t.Num) - 1,
                            !(!i || 0 == t.Num) && (t[r] && (t[r]["a" + n.toString()] && delete t[r]["a" + n.toString()],
                            1 == Object.getOwnPropertyNames(t[r]).length && (t.DefaultHour = parseFloat(t.DefaultHour) - parseFloat(l),
                                t.ClassHour = parseFloat(t.ClassHour) - parseFloat(l) < 0 ? parseFloat(t.ClassHour) : parseFloat(t.ClassHour) - parseFloat(l))),
                                !0)))
                    }),
                    i || (T = $.grep(T, function(t, a) {
                        return !!t && t.ParentPointID != c
                    }),
                    w.substring(0, w.length - 2) == c && $("#questionlist .mr20 span").each(function() {
                        $(this).hasClass("mr20") && ($(this).hasClass("noClick") || ($(this).html("加入试题篮"),
                            $(this).prev().removeClass("click_addTobasket").removeClass("addto_basket").addClass("click_addTobasket"),
                            $(this).addClass("noClick")))
                    }));
                at()
            }
                , at = function() {
                if (q.length > 0) {
                    D = 1,
                        I = 1,
                        $("#rightK").html("");
                    var t = "";
                    $.each(q, function(a, e) {
                        t += ' <li title="' + e.PointName + '" data-did="' + e.ExamKnowID + '" data-id="' + e.PointID + '">',
                            t += '<span class="chines">' + e.PointName + '</span><span data-num="c">' + e.Num + "</span><span>",
                            t += '<img src="' + C + '/bundle/img/delete.png" alt=""></span></li>'
                    }),
                        $("#rightK").html("<ul>" + t + "</ul>");
                    var a = 0;
                    $("#rightK li span[data-num='c']").each(function(t, e) {
                        a += parseFloat($(this).html())
                    }),
                        $(".mun_span").html(a),
                        $(".mun_span").show()
                } else
                    $("#rightK").html(""),
                        $(".mun_span").html(0),
                        $(".mun_span").hide(),
                        $(".need_show").hide()
            }
        };
        $(function() {
            (new t).init()
        })
    },
    110: function(t, a, e) {
        var s = e(3);
        t.exports = s("Org/tpl/OrgExam/filtertestpoints", function(t, a) {
            "use strict";
            var e = this
                , s = e.$helpers
                , i = e.$each
                , n = t.P
                , l = (t.P1,
                t.i,
                e.$escape)
                , d = (t.$value,
                t.$index,
                "");
            return d += " ",
                i(n, function(t, a) {
                    d += " ",
                    null == t.PPointName && (d += ' <dl class=""> ',
                        0 == a ? (d += ' <dt class="on_open" id="',
                            d += l(t.PointID),
                            d += '">',
                            d += l(t.PointName),
                            d += "</dt> ") : (d += ' <dt class="on_close" id="',
                            d += l(t.PointID),
                            d += '">',
                            d += l(t.PointName),
                            d += "</dt> "),
                        d += " ",
                        d += l(s.BindPoint(t.ExamKnowID, t.PointID, t.PointName, t.IsUse, t.ClassHour, t.DefaultHour)),
                        d += " ",
                        0 == a ? d += ' <div class="second_tree"> ' : (d += ' <div class="second_tree" data-pname="',
                            d += l(t.PointName),
                            d += '" style="display: none;"> '),
                        d += " ",
                        i(n, function(e, s) {
                            d += " ",
                            t.PointName == e.PPointName && (d += " ",
                                0 == a && 1 == s ? (d += ' <dd class="clickTree" data-pointid="',
                                    d += l(e.PointID),
                                    d += '" data-secid="',
                                    d += l(e.SecID),
                                    d += '" data-did="',
                                    d += l(e.ExamKnowID),
                                    d += '" data-PointName="',
                                    d += l(e.PointName),
                                    d += '" data-time="',
                                    d += l(e.ClassHour),
                                    d += '" data-ppointname="',
                                    d += l(t.PointName),
                                    d += '" data-defaulttime="',
                                    d += l(e.DefaultHour),
                                    d += '" >',
                                    d += l(e.PointName),
                                    d += "</dd> ") : (d += ' <dd data-pointid="',
                                    d += l(e.PointID),
                                    d += '" data-secid="',
                                    d += l(e.SecID),
                                    d += '" data-did="',
                                    d += l(e.ExamKnowID),
                                    d += '" data-PointName="',
                                    d += l(e.PointName),
                                    d += '" data-time="',
                                    d += l(e.ClassHour),
                                    d += '" data-ppointname="',
                                    d += l(t.PointName),
                                    d += '" data-defaulttime="',
                                    d += l(e.DefaultHour),
                                    d += '" >',
                                    d += l(e.PointName),
                                    d += "</dd> "),
                                d += " "),
                                d += " "
                        }),
                        d += " </div> </dl> "),
                        d += " "
                }),
                new String(d)
        })
    },
    111: function(t, a, e) {
        var s = e(3);
        t.exports = s("Org/tpl/OrgExam/questionlist", function(t, a) {
            "use strict";
            var e = this
                , s = e.$helpers
                , i = e.$each
                , n = t.Data
                , l = (t.$value,
                t.$index,
                e.$string)
                , d = e.$escape
                , o = "";
            return o += " ",
                i(n, function(t, a) {
                    o += ' <div class="test_outer"> <div class="ml40 mt20 contentdiv"> <div class="wrongPosition"> ',
                        o += l(s.showerror(t.UserId, t.Qid)),
                        o += ' </div> <p class="content"> ',
                        o += l(t.Body),
                        o += ' </p> </div> <ul class="process_dif"> <li>[难度：<span>',
                        o += d(t.DifficultyDesc),
                        o += '</span>]</li> <li>组卷：&nbsp;<span class="active">',
                        o += d(t.CombinaNnum),
                        o += '</span>&nbsp;次</li> <li style="float:right" class="mr20"> <span class="click_addTobasket"></span> <span class="middle mr20 noClick" data-qid="',
                        o += d(t.Qid),
                        o += '" data-num="',
                        o += d(t.S_Difficulty),
                        o += '">加入试题篮</span> <span class="click_collection"></span> <span class="middle noClick" data-qid="',
                        o += d(t.Qid),
                        o += '">收藏试题</span> </li> </ul> <div class="analy ml40" data-qid="',
                        o += d(t.Qid),
                        o += '"> </div> </div> '
                }),
                o += " ",
                new String(o)
        })
    },
    112: function(t, a, e) {
        var s = e(3);
        t.exports = s("Org/tpl/OrgExam/filterview", function(t, a) {
            "use strict";
            var e = this
                , s = e.$helpers
                , i = e.$each
                , n = t.N
                , l = (t.$value,
                t.$index,
                e.$string)
                , d = e.$escape
                , o = "";
            return o += " ",
                i(n, function(t, a) {
                    o += " ",
                        o += l(s.CheckEq(t.PPointName, t.Body, t.Qid, t.S_Difficulty)),
                        o += " ",
                        o += d(s.BindIndex(t.PPointName)),
                        o += " "
                }),
                new String(o)
        })
    },
    113: function(t, a, e) {
        var s = e(3);
        t.exports = s("Org/tpl/OrgExam/selectedquestion", function(t, a) {
            "use strict";
            var e = this
                , s = (e.$helpers,
                e.$each)
                , i = (t.$value,
                t.$index,
                e.$escape)
                , n = "";
            return n += " ",
                s(t, function(t, a) {
                    n += ' <li title="',
                        n += i(t.PointName),
                        n += '" data-did="',
                        n += i(t.ExamKnowID),
                        n += '" data-id="',
                        n += i(t.PointID),
                        n += '"> <span class="chines">',
                        n += i(t.PointName),
                        n += '</span><span data-num="c">',
                        n += i(t.Num),
                        n += '</span><span> <img src="../../../bundle/img/delete.png" alt=""></span></li> '
                }),
                n += " ",
                new String(n)
        })
    }
});
