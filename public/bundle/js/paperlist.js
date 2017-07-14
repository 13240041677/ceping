webpackJsonp([55], {
    0: function(a, t, e) {
        a.exports = e(132)
    },
    132: function(a, t, e) {
        var i = e(26)
            , n = e(133)
            , r = {
            SubjectID: "",
            StageID: "",
            GradeID: "",
            data: "",
            PageIndex: 1,
            PageSize: 10,
            ExamName: "",
            ExamCode: ""
        }
            , c = e(4)
            , a = function() {
            this.init = function() {
                f(),
                    e(1),
                    D(),
                    d(),
                    s(),
                    t()
            }
            ;
            var a = function(a) {
                e(a)
            }
                , t = function() {
                $("#backpaper").click(function() {
                    location.href = "/OrgExam/Index/SubjectTest"
                })
            }
                , e = function(t) {
                $.ajax({
                    type: "post",
                    url: "https://oms.mofangge.com/Subject/SubExam/GetSubIndex",
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        StageID: r.StageID,
                        GradeID: r.GradeID,
                        SubjectID: r.SubjectID,
                        ExamName: $("#searchText").val(),
                        ExamCode: $("#searchText").val(),
                        PageIndex: t,
                        PageSize: r.PageSize
                    },
                    success: function(e) {
                        console.log(e.Data);
                        if (e.Count > 0) {
                            $("#tableID tbody").html(n(e.List));
                            var c = e.Count;
                            i.Paginator(r.PageSize, t, c, a),
                                p()
                        } else
                            $("#tableID tbody").html('<tr style="border:none;text-align:center;height:280px;"><td style="font-size: 16px;" colspan="5"><div class="data_img"><div class="big_area" style="margin-top:10px;line-height:30px;"><img src="../../../bundle/img/noclass.png"><br/><span>暂无数据！</span></div></div></td></tr>'),
                                $("#pagination").html("")
                    },
                    error: function(a) {
                        c.PopTipShow("网络异常!")
                    }
                })
            }
                , d = function() {
                $("#GradeID li").click(function() {
                    var a = $(this).attr("data-i");
                    l(a, this),
                        o(this)
                })
            }
                , s = function() {
                $("#SubjectID li").click(function() {
                    o(this)
                })
            }
                , o = function(a) {
                $(a).siblings().removeClass("active"),
                    $(a).addClass("active"),
                    $(a).attr("data-a") ? (r.GradeID = $(a).attr("data-areaid"),
                        r.StageID = $(a).attr("data-a"),
                        r.SubjectID = $("#SubjectID li").filter('li[class="active"]').attr("data-areaid")) : r.SubjectID = $(a).attr("data-areaid"),
                    e(1)
            }
                , l = function(a, t) {
                var e = $('<li data-areaid="0" class="active">全部</li>')
                    , i = $('<li data-areaid="2">数学</li><li data-areaid="3">英语</li><li data-areaid="4">物理</li><li data-areaid="5">化学</li>')
                    , n = $('<li data-areaid="14"">奥数</li><li data-areaid="3">英语</li>')
                    , r = $('<li data-areaid="3">英语</li>');
                $("#SubjectID").html(""),
                    0 == parseInt(a) ? ($("#SubjectID").append(e),
                        $("#SubjectID").append('<li data-areaid="14">奥数</li>'),
                        $("#SubjectID").append(i)) : parseInt(a) >= 1 && parseInt(a) <= 2 ? ($("#SubjectID").append(e),
                        $("#SubjectID").append(r)) : parseInt(a) >= 1 && parseInt(a) <= 5 ? ($("#SubjectID").append(e),
                        $("#SubjectID").append(n)) : 6 == parseInt(a) ? ($("#SubjectID").append(e),
                        $("#SubjectID").append(n)) : parseInt(a) > 6 && ($("#SubjectID").append(e),
                        $("#SubjectID").append(i)),
                    s()
            }
                , p = function() {
                $("#tableID").find("tr").each(function() {
                    var a = $(this).children().eq(1).children("div");
                    a.click(function() {
                        location.href = "/OrgExam/CreateExam/ReViewM?ExamID=" + $(this).attr("data-value")
                    });
                    var t = $(this).children().last().find("span");
                    t.map(function(a, t) {
                        $(t).click(function() {
                            var a = $(this).attr("data-opt")
                                , t = $(this).attr("data-value");
                            if (a)
                                switch (a) {
                                    case "test":
                                        u(t);
                                        break;
                                    case "view":
                                        m(t);
                                        break;
                                    case "edit":
                                        I(t, $(this).attr("data-subid"), $(this).attr("data-sid"));
                                        break;
                                    case "del":
                                        x(t)
                                }
                        })
                    })
                })
            }
                , u = function(a) {
                var t = "/OrgExam/Index/SetInfo?U=M&ExamType=0&ExamID=";
                $.ajax({
                    url: "https://oms.mofangge.com/Subject/SubCreateExam/SaveSub",
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        ExamID: a
                    },
                    type: "post",
                    success: function(a) {
                        location.href = t + a.ID
                    }
                })
            }
                , m = function(a) {
                location.href = "/OrgExam/CreateExam/ReViewM?ExamID=" + a
            }
                , I = function(a, t, e) {
                location.href = "/OrgExam/CreateExam/FilterTest?ExamID=" + a + "&SubjectID=" + t.replace("0", "") + "&StageID=" + e
            }
                , x = function(a) {
                c.OpenConfrimPop("你确认要删除本试卷吗？"),
                    $("#main-content-wrapper").delegate("#Confrim", "click", function() {
                        $(".pop-up").hide(),
                            $(".pop-mask").hide(),
                            $.ajax({
                                type: "post",
                                url: "https://oms.mofangge.com/Subject/SubCreateExam/DeleteSub",
                                data: {
                                    'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                                    ExamID: a
                                },
                                success: function(a) {
                                    a.OK ? (c.OpenTimeHide("操作成功", "2000"),
                                        document.location.reload()) : c.OpenTimeHide("操作失败", "2000")
                                },
                                error: function(a) {
                                    c.OpenTimeHide("网络异常", "2000")
                                }
                            })
                    }),
                    $("#main-content-wrapper").delegate("#Cancel", "click", function() {
                        $(".pop-up").hide(),
                            $(".pop-mask").hide()
                    })
            }
                , f = function() {
                $("#CreateExam").click(function() {
                    location.href = "/OrgExam/CreateExam/AssemblyInit"
                })
            }
                , D = function() {
                $("#searchText").keypress(function() {
                    var a = event.keyCode;
                    if (32 == a)
                        return !1
                }),
                    $("#searchText").bind("keypress", function(a) {
                        "13" != a.keyCode && "9" != a.keyCode || e(1)
                    }),
                    $(".search-img").click(function() {
                        e(1)
                    })
            }
        };
        $(function() {
            (new a).init()
        })
    },
    133: function(a, t, e) {
        var i = e(3);
        a.exports = i("Org/tpl/OrgExam/paperlist", function(a, t) {
            "use strict";
            var e = this
                , i = (e.$helpers,
                e.$each)
                , n = a.ExamList
                , r = (a.$value,
                a.$index,
                e.$escape)
                , c = "";
            return c += " ",
                i(n, function(a, t) {
                    c += " <tr> <td>",
                        c += r(a.ExamCode),
                        c += '</td> <td> <div class="ellipsis w110" style="cursor:pointer;" data-value="',
                        c += r(a.ExamID),
                        c += '" title="',
                        c += r(a.ExamName),
                        c += '">',
                        c += r(a.ExamName),
                        c += "</div> </td> <td>",
                        c += r(a.SourceID),
                        c += "</td> <td>",
                        c += r(a.LastUpdateTime),
                        c += '</td> <td> <span class="see-btn mr20 w68" data-opt="test" data-value="',
                        c += r(a.ExamID),
                        c += '">开始测试</span> <span class="see-btn mr20" data-opt="view" data-value="',
                        c += r(a.ExamID),
                        c += '">查看</span> ',
                    1 == a.IsSelf && (c += ' <span class="see-btn mr20" data-opt="edit" data-value="',
                        c += r(a.ExamID),
                        c += '" data-subid="',
                        c += r(a.SubjectID),
                        c += '" data-sid="',
                        c += r(a.StageID),
                        c += '">编辑</span> <span class="see-btn mr20" data-opt="del" data-value="',
                        c += r(a.ExamID),
                        c += '"> 删除</span> '),
                        c += " </td> </tr> "
                }),
                new String(c)
        })
    }
});
