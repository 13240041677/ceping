webpackJsonp([16], {
    0: function(n, a, e) {
        n.exports = e(40)
    },
    40: function(n, a, e) {
        function t(n) {
            return 1 == n ? "一" : 2 == n ? "二" : 3 == n ? "三" : 4 == n ? "四" : 5 == n ? "五" : 6 == n ? "六" : 7 == n ? "七" : 8 == n ? "八" : 9 == n ? "九" : 10 == n ? "十" : 11 == n ? "十一" : 12 == n ? "十二" : 13 == n ? "十三" : 14 == n ? "十四" : 15 == n ? "十五" : 16 == n ? "十六" : 17 == n ? "十七" : 18 == n ? "十八" : 19 == n ? "十九" : 20 == n ? "二十" : 21 == n ? "二十一" : 22 == n ? "二十二" : 23 == n ? "二十三" : 24 == n ? "二十四" : 25 == n ? "二十五" : 26 == n ? "二十六" : 27 == n ? "二十七" : 28 == n ? "二十八" : 29 == n ? "二十九" : 30 == n ? "三十" : 31 == n ? "三十一" : ""
        }
        function s() {
            return f += 1,
                ""
        }
        function p(n, a) {
            d.ShowDownLoading("下载中，请耐心等待…");
            var e = $("#org-subjectid").val()
                , t = $("#org-tempname").val();
            i(n, a, !0, t, e, function() {
                d.HideDownLoading()
            })
        }
        function i(n, a, e, t, s, p) {
            $("body").append("<iframe id='myiframe" + e + "' name='myiframe" + e + '\' style="display:none;"></iframe>');
            var i = $("<form id='myform" + e + "'>");
            i.attr("style", "display:none"),
                i.attr("target", "myiframe" + e),
                i.attr("method", "post"),
                i.attr("action", "/Exam/Exam/GetReView1?r=" + (new Date).getTime());
            var r = '<input type="hidden" name="ExamID" value="' + n + '" />'
                , o = '<input type="hidden" name="T" value="' + a + '" />'
                , m = '<input type="hidden" name="hasways" value="' + e + '" />'
                , c = '<input type="hidden" name="username" value="' + t + '" />'
                , u = '<input type="hidden" name="Subject" value="' + s + '" />';
            $("body").append(i),
                i.append(r),
                i.append(o),
                i.append(m),
                i.append(c),
                i.append(u);
            var l = $("#myform" + e).find("input[name='ExamID']").val()
                , f = $("#myform" + e).find("input[name='T']").val()
                , e = $("#myform" + e).find("input[name='hasways']").val()
                , v = $("#myform" + e).find("input[name='username']").val();
            $.post("/OrgExam/exam/GetReView1", {
                ExamID: l,
                T: f,
                hasways: e,
                username: v,
                Subject: s
            }, function(n) {
                $("<form>").attr("action", n),
                    window.location.href = n,
                p && p()
            }).error(function() {
                d.ShowDownLoading("服务器很忙，请稍后重试！"),
                    setTimeout(function() {
                        p && p()
                    }, 3e3)
            })
        }
        function r() {
            $.ajax({
                type: "post",
                url: "https://oms.mofangge.com/Report/Index/GetExamDataRecode",
                data: {
                    'userInfo':'{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                    ExamID: c,
                    TempName: $("#org-tempname").val()
                },
                success: function(n) {
                    console.log(n.TestTime);
                    n && ($("#paperName").html(n.PaperName),
                        $("#temptestrecord").html(m(n)),
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#temptestrecord").get(0)]))
                }
            })
        }
        e(14);
        var o = e(3)
            , m = e(41)
            , c = $.trim($("#org-paperid").val())
            , d = e(15)
            , u = ""
            , l = 1
            , f = 1;
        o.helper("CheckEq", function(n, a) {
            var e = "";
            return n == u ? e = '<div class="overflow mt15 ml30"><span class="left block wper2" >' + l + '、</span><div class="left wper98" > ' + a + "</div></div>" : (e = ' <p class="font14 bold mt10">' + t(f) + "、" + n + '</p><div class="overflow mt15 ml30 "><span class="left block wper2" >' + l + '、</span><div class="left wper98" > ' + a + "</div></div>",
                s()),
                e
        }),
            o.helper("BindIndex", function(n) {
                return u = n,
                    l += 1,
                    ""
            });
        var n = {
            init: function() {
                this.render(),
                    this.initBtns()
            },
            render: function() {
                r()
            },
            initBtns: function() {
                $("#downExamPaper").click(function() {
                    var n = c;
                    p(n, 1)
                })
            }
        };
        $(function() {
            n.init()
        })
    },
    41: function(n, a, e) {
        var t = e(3);
        n.exports = t("Org/tpl/OrgExam/answerrecord", function(n, a) {
            "use strict";
            var e = this
                , t = e.$helpers
                , s = e.$escape
                , p = n.StuName
                , i = n.CorrectRate
                , r = n.TestTime
                , o = e.$each
                , m = n.Ques
                , c = (n.$value,
                n.$index,
                e.$string)
                , d = "";
            return d += ' <div class="base_message"> <span>学生： ',
                d += s(p),
                d += "</span> <span>正确率：",
                d += s(i),
                d += "</span> <span>测评时间：",
                d += s(r),
                d += "</span> </div> ",
                o(m, function(n, a) {
                    d += ' <div class="show_test"> <hr /> <p class="issue"><span>',
                        d += c(t.CheckEq(n.PPointName, n.Question)),
                        d += " ",
                        d += s(t.BindIndex(n.PPointName)),
                        d += "</span></p> <hr /> ",
                        "正确" == n.StrRight ? (d += ' <p> TA的答案：&nbsp;<span class="bingo">',
                            d += s(n.Answer),
                            d += ' </span>&nbsp;，回答：&nbsp;<span class="bingo">',
                            d += s(n.StrRight),
                            d += "</span> </p> ") : (d += ' <p> TA的答案：&nbsp;<span class="warning">',
                            d += s(n.Answer),
                            d += ' </span>&nbsp;，回答：&nbsp;<span class="warning">',
                            d += s(n.StrRight),
                            d += "</span> </p> "),
                        d += ' <p><span class="recoment">【正确答案】：</span><span class="bingo">',
                        d += s(n.AnswerN),
                        d += ' </span></p> <p><span class="recoment">【考察知识点】：</span><span>',
                        d += s(n.PointName),
                        d += ' </span></p> <p><span class="recoment issue">【试题分析】：</span><span>',
                        d += c(n.QuestionAnalysis),
                        d += "</span></p> </div> "
                }),
                d += " ",
                new String(d)
        })
    }
});
