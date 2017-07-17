webpackJsonp([3], {
    0: function(t, a, n) {
        t.exports = n(8)
    },
    8: function(t, a, n) {
        function e() {
            $("li[data-id]").click(function() {
                return !$(this).hasClass("choose-on") && ($(this).siblings().removeClass("choose-on"),
                        $(this).addClass("choose-on"),
                        d = [],
                        m = $(this).attr("data-examID"),
                        i($(this).attr("data-id")),
                    "2" == m && $("#P span").each(function() {
                        if ("1" == $(this).attr("data-is")) {
                            var t = {};
                            t.DimID = $(this).attr("id"),
                                t.DimName = $(this).text(),
                                d.push(t)
                        }
                    }),
                        void s())
            })
        }
        function s() {
            switch (m + "") {
                case "2":
                    $("#btnBegin").removeClass("test-btn").addClass("test-btn-on");
                    break;
                case "1":
                case "3":
                    0 == d.length ? $("#btnBegin").removeClass("test-btn-on").addClass("test-btn") : $("#btnBegin").removeClass("test-btn").addClass("test-btn-on")
            }
        }
        function i(t) {
            t = parseFloat(t) - 1,
                $("#T").html(r[t].Remark),
                $("#P").html(l(r[t].D)),
            2 == r[t].ExamID && $("#btnBegin").removeClass("test-btn").addClass("test-btn-on")
        }
        function o() {
            $("#btnBegin").click(function() {
                0 != d.length && "0" != $("#btnBegin").attr("data-on") && ($("#btnBegin").attr({
                    "data-on": "0"
                }),
                    $.ajax({
                        url: "https://oms.mofangge.com/Ability/index/SaveAbilityExam",
                        data: {
                            'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                            ExamID: m,
                            data: JSON.stringify(d)
                        },
                        dataType: "json",
                        type: "post",
                        success: function(t) {
                            location.href = "/OrgExam/Index/SetInfo?U=" + c + "&ExamType=1&ExamID=" + t.ID
                        },
                        error: function(t) {
                            $("#btnBegin").attr({
                                "data-on": "1"
                            })
                        }
                    }))
            })
        }
        var r, l = (n(9),
            n(10)), c = $("#U").val(), d = [], m = 1, t = {
            init: function() {
                this.render(),
                    this.initBtns()
            },
            render: function() {
                $.ajax({
                    url: "https://oms.mofangge.com/Ability/index/GetAbilityPaper",
                    type: "post",
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}'
                    },
                    success: function(t) {
                        r = t.Data,
                            i(1)
                    }
                })
            },
            initBtns: function() {
                $("#P").delegate("span", "click", function() {
                    if ("1" != $(this).attr("data-is")) {
                        if ($(this).hasClass("level-on")) {
                            $(this).removeClass("level-on"),
                                $(this).addClass("level-name");
                            var t = $(this).attr("id")
                                , a = {};
                            d = $.grep(d, function(a, n) {
                                return a.DimID.toString() != t.toString()
                            })
                        } else {
                            $(this).removeClass("level-name"),
                                $(this).addClass("level-on");
                            var a = {};
                            a.DimID = $(this).attr("id"),
                                a.DimName = $(this).text(),
                                d.push(a)
                        }
                        s()
                    }
                })
            }
        };
        $(function() {
            t.init(),
                e(),
                o()
        })
    },
    10: function(t, a, n) {
        var e = n(3);
        t.exports = e("Org/tpl/OrgExam/BeLearnTest", function(t, a) {
            "use strict";
            var n = this
                , e = (n.$helpers,
                n.$each)
                , s = (t.$value,
                t.$index,
                n.$escape)
                , i = "";
            return i += " ",
                e(t, function(t, a) {
                    i += " ",
                        0 == t.StrDefault ? (i += ' <span class="level-name" id="',
                            i += s(t.DimID),
                            i += '" data-is="',
                            i += s(t.StrDefault),
                            i += '">',
                            i += s(t.DimName),
                            i += "</span> ") : (i += ' <span class="level-on" id="',
                            i += s(t.DimID),
                            i += '" data-is="',
                            i += s(t.StrDefault),
                            i += '">',
                            i += s(t.DimName),
                            i += "</span> </div> "),
                        i += " "
                }),
                i += " ",
                new String(i)
        })
    }
});
