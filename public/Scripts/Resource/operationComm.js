
//答案选项列表
var OptionArr = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z"
];




/*获取试题类型*/
function GetQuestionClassData(subjectid, stage) {

    var jsonResult = [];

    switch (stage) {

        case "x":
            if (subjectid == "14") {

            }
            else if (subjectid == "03") {
                jsonResult.push({ "value": 2, "name": "易错题" });
            }

            break;
        case "c":
            if (subjectid == "03") {
                jsonResult.push({ "value": 2, "name": "易错题" });
            } else {
                jsonResult.push({ "value": 2, "name": "易错题" });
                jsonResult.push({ "value": 3, "name": "创新题" });
                jsonResult.push({ "value": 4, "name": "探究题" });
            }

            break;
        case "g":
            if (subjectid == "03") {
                jsonResult.push({ "value": 2, "name": "易错题" });
            } else {
                jsonResult.push({ "value": 2, "name": "易错题" });
                jsonResult.push({ "value": 3, "name": "创新题" });
                jsonResult.push({ "value": 4, "name": "探究题" });
            }

            break;

    }
    return jsonResult;

}

/*获取年级*/
function GetOpGradeList(subject, stage) {
    var jsonResult = [];
    switch (stage) {
        case "x":

            if (subject != "14") {
                jsonResult.push({ grade: "x1", gradename: "一年级" });
                jsonResult.push({ grade: "x2", gradename: "二年级" });
            }


            jsonResult.push({ grade: "x3", gradename: "三年级" });
            jsonResult.push({ grade: "x4", gradename: "四年级" });
            jsonResult.push({ grade: "x5", gradename: "五年级" });
            jsonResult.push({ grade: "x6", gradename: "六年级" });

            if (subject != "14") {
                jsonResult.push({ grade: "x", gradename: "小升初" });
            }


            break;
        case "c":

            jsonResult.push({ grade: "c1", gradename: "七年级" });
            jsonResult.push({ grade: "c2", gradename: "八年级" });
            jsonResult.push({ grade: "c3", gradename: "九年级" });
            jsonResult.push({ grade: "c", gradename: "中考复习" });

            break;
        case "g":
            jsonResult.push({ grade: "g1", gradename: "高一" });
            jsonResult.push({ grade: "g2", gradename: "高二" });
            jsonResult.push({ grade: "g3", gradename: "高三" });
            jsonResult.push({ grade: "g", gradename: "高考复习" });

            break;


    }
    return jsonResult;

}


//试卷上下学期数据
function GetPaperGradeTermData(subject, stage) {

    var jsonResult = [];

    if (subject == "14") {
        jsonResult.push({ grade: "x3", gradename: "三年级" });
        jsonResult.push({ grade: "x4", gradename: "四年级" });
        jsonResult.push({ grade: "x5", gradename: "五年级" });
        jsonResult.push({ grade: "x6", gradename: "六年级" });

        return jsonResult;
    }


    switch (stage) {
        case "x":

            jsonResult.push({ grade: "x1_0", gradename: "一年级上" });
            jsonResult.push({ grade: "x1_1", gradename: "一年级下" });
            jsonResult.push({ grade: "x2_0", gradename: "二年级上" });
            jsonResult.push({ grade: "x2_1", gradename: "二年级下" });



            jsonResult.push({ grade: "x3_0", gradename: "三年级上" });
            jsonResult.push({ grade: "x3_1", gradename: "三年级下" });
            jsonResult.push({ grade: "x4_0", gradename: "四年级上" });
            jsonResult.push({ grade: "x4_1", gradename: "四年级下" });
            jsonResult.push({ grade: "x5_0", gradename: "五年级上" });
            jsonResult.push({ grade: "x5_1", gradename: "五年级下" });
            jsonResult.push({ grade: "x6_0", gradename: "六年级上" });
            jsonResult.push({ grade: "x6_1", gradename: "六年级下" });

            jsonResult.push({ grade: "x", gradename: "小升初" });
            break;
        case "c":

            jsonResult.push({ grade: "c1_0", gradename: "七年级上" });
            jsonResult.push({ grade: "c1_1", gradename: "七年级下" });
            jsonResult.push({ grade: "c2_0", gradename: "八年级上" });
            jsonResult.push({ grade: "c2_1", gradename: "八年级下" });
            jsonResult.push({ grade: "c3_0", gradename: "九年级上" });
            jsonResult.push({ grade: "c3_1", gradename: "九年级下" });
            jsonResult.push({ grade: "c", gradename: "中考复习" });

            break;
        case "g":
            jsonResult.push({ grade: "g1_0", gradename: "高一上" });
            jsonResult.push({ grade: "g1_1", gradename: "高一下" });
            jsonResult.push({ grade: "g2_0", gradename: "高二上" });
            jsonResult.push({ grade: "g2_1", gradename: "高二下" });
            jsonResult.push({ grade: "g3_0", gradename: "高三上" });
            jsonResult.push({ grade: "g3_1", gradename: "高三下" });
            jsonResult.push({ grade: "g", gradename: "高考复习" });

            break;


    }
    return jsonResult;


}


//获取试卷类型data
function GetPaperType(stage, subject) {
    var jsonResult = [];

    if (subject == "14") {

        jsonResult = [ //“中环杯”、“小机灵杯”、“亚太杯”、“世少奥赛”、“国奥赛”、“机构赛”
            {
                "name": "华罗庚金杯",
                "value": 18
            },
            {
                "name": "走美杯",
                "value": 19
            },
            {
                "name": "希望杯",
                "value": 20
            },
            {
                "name": "迎春杯",
                "value": 21
            }
            ,

            {
                "name": "中环杯",
                "value": 28
            }
            ,
            {
                "name": "小机灵杯",
                "value": 29
            }
            ,
            {
                "name": "亚太杯",
                "value": 35
            }
            ,
            {
                "name": "世少奥赛",
                "value": 27
            }
            ,
            {
                "name": "国奥赛",
                "value": 26
            },
            {
                "name": "巨人杯",
                "value": 31
            }
            ,
            {
                "name": "高思杯",
                "value": 32
            }
            ,
            {
                "name": "学而思杯",
                "value": 33
            }

        ];

        return jsonResult;
    }

    switch (stage) {
        case "x":


            jsonResult = [
                {
                    "name": "小升初真题",
                    "value": 10
                },
                {
                    "name": "小升初模拟",
                    "value": 30
                }
            ];


            break;
        case "c":


            jsonResult = [
                {
                    "name": "中考真题",
                    "value": 7
                },
                {
                    "name": "中考模拟",
                    "value": 23
                }
            ];


            break;
        case "g":

            jsonResult = [
                {
                    "name": "高考真题",
                    "value": 9
                },
                {
                    "name": "高考模拟",
                    "value": 22
                }
            ];

            break;
        default:

            jsonResult = [
                {
                    "name": "期末",
                    "value": 2
                },
                {
                    "name": "期中",
                    "value": 1
                },
                {
                    "name": "月考",
                    "value": 6
                },
                {
                    "name": "同步",
                    "value": 4
                },
                {
                    "name": "作业",
                    "value": 14
                }
            ];

            break;


    }
    return jsonResult;

}



//无刷新更改浏览器地址栏url
function ChangeBrowserUrl(url) {
    if (window.applicationCache)//是否支持HTML5
    {
        var state = {
            title: document.title
        };
        history.replaceState(state, document.title, url);
    }
}

//获取试题难度data
function GetQuestionDiffStr(num) {

    var str = "";

    if (num >= 0 && num <= 20) {
        str = "容易";
    }
    else if (num >= 21 && num <= 40) {
        str = "较易";
    }
    else if (num >= 41 && num <= 60) {
        str = "中等";
    }
    else if (num >= 61 && num <= 80) {
        str = "较难";
    }
    else if (num >= 81 && num <= 100) {
        str = "困难";
    }

    return str;

}

//获取试题难度data
function GetQuestionDiffNum(num) {

    var str = 1;

    if (num >= 0 && num <= 20) {
        str = 1;
    }
    else if (num >= 21 && num <= 40) {
        str = 2;
    }
    else if (num >= 41 && num <= 60) {
        str = 3;
    }
    else if (num >= 61 && num <= 80) {
        str = 4;
    }
    else if (num >= 81 && num <= 100) {
        str = 5;
    }

    return str;

}
