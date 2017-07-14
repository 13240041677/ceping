webpackJsonp([0], [function(a, t, e) {
    a.exports = e(1)
}
    , function(a, t, e) {
        var i = (new Date).getHours()
            , n = e(2)
            , r = {
            SubjectID: "03",
            StageID: "x",
            GradeID: "x1",
            data: "",
            PaperName: ""
        }
            , c = e(4)
            , s = $("#username").val()
            , a = function() {
            this.init = function() {
                document.getElementById("papername").focus(),
                    o(1, this),
                    e(),
                    l(),
                    d(),
                    $("#M1").text(t()),
                    $("#X").text(s),
                    v(),
                    a()
            }
            ;
            var a = function() {
                $("#backpaper").click(function() {
                    location.href = "/OrgExam/Index/SubjectTest"
                }),
                    $("#papername").bind("input propertychange", function() {
                        var a = $(this).val();
                        a.length > 200 && $(this).val($(this).val().substring(0, 200))
                    })
            }
                , t = function() {
                return i >= 5 && i < 8 ? "早上好" : i >= 8 && i < 12 ? "上午好" : i >= 12 && i < 13 ? "中午好" : i >= 13 && i < 18 ? "下午好" : "晚上好"
            }
                , e = function() {
                $("#GradeID span").click(function() {
                    $("#next").removeClass("active");
                    var a = $(this).attr("data-i");
                    r.StageID = $(this).attr("data-a"),
                        r.GradeID = $(this).attr("data-areaid"),
                        o(a, this),
                        u(this)
                })
            }
                , l = function() {
                $("#SubjectID li").click(function() {
                    $("#next").removeClass("active"),
                        SubjectID = $(this).attr("data-areaid"),
                        u(this)
                })
            }
                , u = function(a) {
                $(a).siblings().removeClass("active"),
                    $(a).addClass("active"),
                    $(a).attr("data-a") ? (r.GradeID = $(a).attr("data-areaid"),
                        r.StageID = $(a).attr("data-a"),
                        r.SubjectID = $("#SubjectID li").filter('li[class="active"]').attr("data-areaid")) : r.SubjectID = $(a).attr("data-areaid"),
                    d()
            }
                , o = function(a, t) {
                var e = $('<li data-areaid="02" class="active">数学</li><li data-areaid="03">英语</li><li data-areaid="04">物理</li><li data-areaid="05">化学</li>')
                    , i = $('<li data-areaid="14" class="active">奥数</li><li data-areaid="03">英语</li>')
                    , n = $('<li data-areaid="03" class="active">英语</li>');
                $("#SubjectID").html(""),
                    parseInt(a) >= 1 && parseInt(a) <= 2 ? $("#SubjectID").append(n) : parseInt(a) >= 1 && parseInt(a) <= 5 ? $("#SubjectID").append(i) : 6 == parseInt(a) ? $("#SubjectID").append(i) : parseInt(a) > 6 && $("#SubjectID").append(e),
                    l()
            }
                , d = function() {
                $.ajax({
                    type: "post",
                    url: "https://oms.mofangge.com/Subject/SubExam/GetMixInit",
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        StageID: r.StageID,
                        SubjectID: r.SubjectID,
                        edu: $("#edu").val(),
                        artScience: $("#artScience").val()
                    },
                    success: function(a) {
                        a ? ($("#Points").html(n(a.N)),
                            $("#N1").html(a.N.N1 + 1),
                            $("#N2").html(a.N.N2),
                            p()) : $("#tableID").html("")
                    }
                })
            }
                , p = function() {
                $("#Points li").click(function() {
                    $(this).hasClass("active") ? $(this).removeAttr("class") : $(this).attr({
                        "class": "active"
                    }),
                        I()
                })
            }
                , I = function() {
                $("#Points li.active").length > 0 ? $("#next").addClass("active") : $("#next").removeClass("active")
            }
                , v = function() {
                $("#papername").keypress(function() {
                    var a = event.keyCode;
                    if (32 == a)
                        return !1
                }),
                    $("#next").click(function() {
                        if ($("#Points li.active").length < 1)
                            return void document.getElementById("papername").focus();
                        var a = $("#papername").val();
                        if (a = $.trim(a),
                            "" == a)
                            return void document.getElementById("papername").focus();
                        r.PaperName = a;
                        var t = [];
                        return $("#Points li").each(function(a, e) {
                            if ($(this).hasClass("active")) {
                                var i = {};
                                i.PointID = $(e).attr("data-value"),
                                    i.PointName = $(e).text(),
                                    t.push(i)
                            }
                        }),
                            0 == t.length ? void c.PopTipShow("请选择知识点!") : (r.data = JSON.stringify(t),
                                void $.ajax({
                                    type: "post",
                                    url: "https://oms.mofangge.com/Subject/SubExam/SaveBookExam",
                                    data: {
                                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                                        StageID: r.StageID,
                                        GradeID: r.GradeID,
                                        SubjectID: r.SubjectID,
                                        name: r.PaperName,
                                        data: r.data
                                    },
                                    success: function(a) {
                                        if (a.OK) {
                                            a.ID;
                                            location.href = "/OrgExam/CreateExam/FilterTest?U=M&ExamID=" + a.ID + "&SubjectID=" + r.SubjectID + "&StageID=" + r.StageID
                                        }
                                    }
                                }))
                    })
            }
        };
        $(function() {
            (new a).init()
        })
    }
    , function(a, t, e) {
        var i = e(3);
        a.exports = i("Org/tpl/OrgExam/pointlist", function(a, t) {
            "use strict";
            var e = this
                , i = (e.$helpers,
                e.$each)
                , n = a.N
                , r = (a.$value,
                a.$index,
                e.$escape)
                , c = "";
            return c += " ",
                i(n, function(a, t) {
                    c += ' <li data-value="',
                        c += r(a.PointID),
                        c += '">',
                        c += r(a.PointName),
                        c += "</li> "
                }),
                c += " ",
                new String(c)
        })
    }
]);
