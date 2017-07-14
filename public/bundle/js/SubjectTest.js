webpackJsonp([28], {
    0: function(n, t, a) {
        n.exports = a(66)
    },
    66: function(n, t, a) {
        var n = (a(9),
            a(34),
        {
            init: function() {
                this.render(),
                    this.initBtns()
            },
            render: function() {
                $.ajax({
                    type: "post",
                    url: "/OrgExam/Exam/GetExamCount",
                    dataType: "json",
                    data: {
                        examType: "0"
                    },
                    success: function(n) {
                        n.OK ? $("#examCount").html(n.Data) : $("#examCount").html(0)
                    }
                })
            },
            initBtns: function() {
                $("#starttest").click(function() {
                    window.location.href = "/OrgExam/CreateExam/PaperList"
                }),
                    $("#main-content-wrapper").delegate("#learnurl", "click", function() {
                        window.location.href = "/OrgExam/Index/LearnTest"
                    })
            }
        });
        $(function() {
            n.init()
        })
    }
});
