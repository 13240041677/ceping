webpackJsonp([4], {
    0: function(n, e, t) {
        n.exports = t(11)
    },
    11: function(n, e) {
        var t = $("#ExamType").val()
            , i = $("#TempID").val()
            , a = $("#PaperID").val()
            , o = $("#UTrim").val()
            , r = 1
            , n = {
            init: function() {
                this.render(),
                    this.initBtns()
            },
            render: function() {
                $(function() {
                    $.ajax({
                        url: "https://oms.mofangge.com/Subject/SubCreateExam/GetInfoInit",
                        type: "post",
                        data: {
                            'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                            TempID: i,
                            PaperID: a,
                            ExamType: t
                        },
                        success: function(n) {
                            $("#needtime").html(n.N[0].ScheduledTime),
                                $("#TName").html(n.N[0].TempName),
                                r = n.N[0].IsEffect
                        },
                        error: function() {}
                    })
                })
            },
            initBtns: function() {
                $("#beginexam").click(function() {
                    0 == r && ("0" == t.toString() ? location.href = "/OrgExam/Index/SubItem?U=" + o + "&MeasureID=" + a : "1" == t.toString() && (location.href = "/OrgExam/Index/EnItem?U=" + o + "&MeasureID=" + a))
                })
            }
        };
        $(function() {
            n.init()
        })
    }
});
