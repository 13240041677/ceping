webpackJsonp([57], {
    0: function(t, n, e) {
        t.exports = e(135)
    },
    135: function(t, n, e) {
        function a(t) {
            return 1 == t ? "一" : 2 == t ? "二" : 3 == t ? "三" : 4 == t ? "四" : 5 == t ? "五" : 6 == t ? "六" : 7 == t ? "七" : 8 == t ? "八" : 9 == t ? "九" : 10 == t ? "十" : 11 == t ? "十一" : 12 == t ? "十二" : 13 == t ? "十三" : 14 == t ? "十四" : 15 == t ? "十五" : 16 == t ? "十六" : 17 == t ? "十七" : 18 == t ? "十八" : 19 == t ? "十九" : 20 == t ? "二十" : 21 == t ? "二十一" : 22 == t ? "二十二" : 23 == t ? "二十三" : 24 == t ? "二十四" : 25 == t ? "二十五" : 26 == t ? "二十六" : 27 == t ? "二十七" : 28 == t ? "二十八" : 29 == t ? "二十九" : 30 == t ? "三十" : 31 == t ? "三十一" : ""
        }
        function i() {
            return p += 1,
                ""
        }
        e(14);
        var r = e(3)
            , c = e(136)
            , o = $("#ExamID").val()
            , s = ""
            , u = 1
            , p = 1;
        r.helper("CheckEq", function(t, n) {
            var e = "";
            return t == s ? e = '<div class="overflow mt15 ml30"><span class="left block wper2" >' + u + '、</span><div class="left wper98" > ' + n + "</div></div>" : (e = ' <p class="font14 bold mt10">' + a(p) + "、" + t + '</p><div class="overflow mt15 ml30 "><span class="left block wper2" >' + u + '、</span><div class="left wper98" > ' + n + "</div></div>",
                i()),
                e
        }),
            r.helper("BindIndex", function(t) {
                return s = t,
                    u += 1,
                    ""
            });
        var t = function() {
            this.init = function() {
                e(),
                    n(),
                    t()
            }
            ;
            var t = function() {
                $("#backpaper").click(function() {
                    location.href = "/OrgExam/CreateExam/PaperList"
                }),
                    $("#printcontent").click(function() {
                        window.print()
                    })
            }
                , n = function() {
                $("#starttest").click(function() {
                    var t = "/OrgExam/Index/SetInfo?U=M&ExamType=0&ExamID=";
                    $.ajax({
                        url: "https://oms.mofangge.com/Subject/SubCreateExam/SaveSub",
                        data: {
                            'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                            ExamID: o
                        },
                        type: "post",
                        success: function(n) {
                            location.href = t + n.ID
                        }
                    })
                })
            }
                , e = function() {
                $.ajax({
                    type: "post",
                    url: "https://oms.mofangge.com/Subject/SubCreateExam/GetReView",
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        ExamID: o
                    },
                    success: function(t) {
                        t && ($("#testname").html(t.Data.ExamName),
                            $("#testbody").html(c(t.Data)),
                            MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#testbody").get(0)]))
                    }
                })
            }
        };
        $(function() {
            (new t).init()
        })
    },
    136: function(t, n, e) {
        var a = e(3);
        t.exports = a("Org/tpl/OrgExam/paperview", function(t, n) {
            "use strict";
            var e = this
                , a = e.$helpers
                , i = e.$each
                , r = t.N
                , c = (t.$value,
                t.$index,
                e.$string)
                , o = e.$escape
                , s = "";
            return s += " ",
                i(r, function(t, n) {
                    s += " ",
                        s += c(a.CheckEq(t.PPointName, t.Body)),
                        s += " ",
                        s += o(a.BindIndex(t.PPointName)),
                        s += " "
                }),
                s += " ",
                new String(s)
        })
    }
});
