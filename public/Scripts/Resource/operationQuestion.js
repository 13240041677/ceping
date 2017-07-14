

/********************** 试题操作公共类 FUNCTION **********************/

//使用示例:
//var Q_Handle_global = new QuestionHandle();
//Q_Handle_global.InitQuestionInfo(questionId,callbackfun,callbackfunargs);//初始化试题修改

/**  试题操作公共类构造函数
 * @param {
    Asubjectid: Asubjectid,
    Abgrade: Abgrade,
    Apaperid: Apaperid,//试卷id
    Aedition: Aedition,//选择的版本id  人教版
    Abookid: Abookid//选择的教材id  六年级上
           }
 * @returns undefined
 */
function QuestionHandle(param) {
    if (param) {
        this.Asubjectid = param.Asubjectid || "";
        this.Abgrade = param.Abgrade || "";
        this.Apaperid = param.Apaperid || 0;
        this.Aedition = param.Aedition || "";//选择的版本id  人教版
        this.Abookid = param.Abookid || "";//选择的教材id  六年级上
        this.Aquestioncome = param.Aquestioncome || ""; //来源
    } else {
        this.Asubjectid = "";
        this.Abgrade = "";
        this.Apaperid = 0;
        this.Aedition = "";//选择的版本id  人教版
        this.Abookid = "";//选择的教材id  六年级上
        this.Aquestioncome = "";
    }

    this.Aquestiontype = "1"; //选择的题型
    this.Aquestiongrade = ""; //选择的年级
    this.Aquestionclass = ""; //题类 易错
    this.Aquestionbody = ""; //题文
    this.Aquestionoption = ""; //选项
    this.Aquestionanswer = ""; //答案
    this.Aquestionjx = ""; //分析
    this.Aquestiondiff = 1; //难度

    this.Tb_resourceTree;//同步树
    this.Zh_resourceTree;//综合树
    this.Zt_resourceTree;//专题树

    this.iscansubmit = true;
}


/*试题题型初始化*/
QuestionHandle.prototype.InitQuestionType = function (defaultvalue) {
    var self = this;
    if (self.Asubjectid != "03" && self.Asubjectid != "01") {
        var qtypeArr = [{ "value": 1, "name": "选择题" }, { "value": 101, "name": "填空题" }, { "value": 201, "name": "解答题" }];
        if (defaultvalue < 101) {
            defaultvalue = 1;
        }
        self.BindQuestionType(qtypeArr, defaultvalue);

    } else {
        $.ajax({
            type: "post",
            url: "/Resource/Operation/GetQuestionTypeList?abcdate=" + new Date().getTime(),
            cache: false,
            data:
            {
                subjectid: self.Asubjectid,
                bgrade: self.Abgrade
            },
            dataType: "json",
            success: function (data) {
                if (data != null && data != "") {
                    self.BindQuestionType(data.result, defaultvalue);
                }
            }
        });

    }

}

QuestionHandle.prototype.BindQuestionType = function (data, defaultvalue) {
    var self = this;
    var param = { containerId: "dropquestiontype", data: data, width: 100, defaultValue: defaultvalue };
    param.valueField = "value";
    param.textField = "name";
    param.selectedCallBack = function (id, selectedValue, selectedText) {

        self.Aquestiontype = selectedValue;

        if (self.Aquestiontype < 101) {


            if (self.Asubjectid == "03" && self.Aquestiontype == 1) {//由英语多选题切换到英语单选题,答案默认保留第一项
                var okurl = "../../../bundle/img/green-check-ok.png";

                var nourl = "../../../bundle/img/checked-0k.png";

                var tempcache = $("#option_content").find("[data-right=1]").find(".cheack").first();

                $("#option_content .innerpos").attr('data-right', 0).find(".cheack").attr("src", nourl);

                tempcache.attr({ "src": okurl });
                tempcache.parent().attr("data-right", 1);

            }




            //答案 隐藏
            $("#choose_content").show();
            $("#answer_content").hide();

        } else {
            //选项 隐藏
            $("#choose_content").hide();
            $("#answer_content").show();

        }
        var het = 0;
        $('.innerpos').each(function () {
            het += $(this).height();
        });

        $('.choose-type').height(het);
    };
    var t = $DropDownList(param);

    self.Aquestiontype = t.getValue().value;

    if (self.Aquestiontype < 101) {
        //答案 隐藏
        $("#choose_content").show();
        $("#answer_content").hide();
    } else {
        //选项 隐藏
        $("#choose_content").hide();
        $("#answer_content").show();
    }

}
//初始化题型 End

//选择题选项操作
QuestionHandle.prototype.InitOption = function (t_option, t_answer) {

    var self = this;

    var index = 0;
    //var t_option = [{ "desc": "", "f_content": [] }];
    //var t_answer = [["BD"]];
    if (typeof (t_option) != "undefined" && typeof (t_answer) != "undefined") {

        var data = t_option[0].f_content;
        var answerstr = t_answer[0][0];
        var htmlstr = "";

        var okurl = "../../../bundle/img/green-check-ok.png";
        var nourl = "../../../bundle/img/checked-0k.png";

        for (var i = 0; i < data.length ; i++) {//最后一项有 添加按钮

            index = i;
            var newop = OptionArr[index];
            var qrighturl = nourl;

            var rightanswer = 0;//正确答案:0错,1对
            if (answerstr.indexOf(newop) > -1) {
                rightanswer = 1;
                qrighturl = okurl;
            }

            var opcontent = data[i];//选项内容

            if (data.length == 2) {//两项时无删除按钮

                if (i == 1) {
                    htmlstr += "<div class=\"innerpos\"  data-id=\"" + newop + "\" data-num=\"" + (index) + "\"  data-right=\"" + rightanswer + "\"><span class=\"font18 posspan\">" + newop + "</span><div class=\"cnt_hd w980 inline small-edit\"><div class=\"sEditorCenter pr\"><div class=\"sEditorBoxWrp pr\"  data-content=\"" + opcontent + "\"></div></div></div> <img src=\"" + qrighturl + "\" alt=\"\" class=\"cheack\"><img src=\"../../../bundle/img/add-hos.png\" alt=\"\" class=\"add\"></div>";
                } else {
                    htmlstr += "<div class=\"innerpos\"  data-id=\"" + newop + "\" data-num=\"" + (index) + "\"  data-right=\"" + rightanswer + "\"><span class=\"font18 posspan\">" + newop + "</span><div class=\"cnt_hd w980 inline small-edit\"><div class=\"sEditorCenter pr\"><div class=\"sEditorBoxWrp pr\" data-content=\"" + opcontent + "\"></div></div></div> <img src=\"" + qrighturl + "\" alt=\"\" class=\"cheack\"></div>";
                }

            } else {
                if (i == data.length - 1) {
                    htmlstr += "<div class=\"innerpos\"  data-id=\"" + newop + "\" data-num=\"" + (index) + "\"  data-right=\"" + rightanswer + "\"><span class=\"font18 posspan\">" + newop + "</span><div class=\"cnt_hd w980 inline small-edit\"><div class=\"sEditorCenter pr\"><div class=\"sEditorBoxWrp pr\" data-content=\"" + opcontent + "\"></div></div></div> <img src=\"" + qrighturl + "\" alt=\"\" class=\"cheack\"><img src=\"../../../bundle/img/add-hos.png\" alt=\"\" class=\"add\"><img src=\"../../../bundle/img/delet-edit.png\" alt=\"\" class=\"del\"></div>";
                } else {
                    htmlstr += "<div class=\"innerpos\"  data-id=\"" + newop + "\" data-num=\"" + (index) + "\"  data-right=\"" + rightanswer + "\"><span class=\"font18 posspan\">" + newop + "</span><div class=\"cnt_hd w980 inline small-edit\"><div class=\"sEditorCenter pr\"><div class=\"sEditorBoxWrp pr\" data-content=\"" + opcontent + "\"></div></div></div> <img src=\"" + qrighturl + "\" alt=\"\" class=\"cheack\"><img src=\"../../../bundle/img/delet-edit.png\" alt=\"\" class=\"del\"></div>";
                }

            }

            $("#option_content").html(htmlstr);

        }


        $('.choose-type').height($('.innerpos').height());

    }

    //选择答案
    $("#option_content").off("click", ".cheack");
    $("#option_content").on("click", ".cheack", function () {
        var okurl = "../../../bundle/img/green-check-ok.png";
        var nourl = "../../../bundle/img/checked-0k.png";
        var val = $(this).parent().attr("data-right");
        if (val == "0") {

            if (self.Asubjectid == "03" && self.Aquestiontype == 1) {//单选题只有一个选项
                $("#option_content .innerpos").attr('data-right', 0).find(".cheack").attr("src", nourl);
            }


            $(this).attr({ "src": okurl });
            $(this).parent().attr("data-right", 1);
        } else {

            $(this).attr({ "src": nourl });
            $(this).parent().attr("data-right", 0);


        }



    });

    //添加按钮
    $("#option_content").off("click", ".add");
    $("#option_content").on("click", ".add", function () {

        var index = $(this).parent().attr("data-num");
        index = parseInt(index);
        if (index > 24) {
            $("#choosecount_content_warn").show();
            return;
        }
        var newop = OptionArr[index + 1];

        var html = "<div class=\"innerpos\"  data-id=\"" + newop + "\" data-num=\"" + (index + 1) + "\"  data-right=\"0\"><span class=\"font18 posspan\">" + newop + "</span><div class=\"cnt_hd w980 inline small-edit\"><div class=\"sEditorCenter pr\"><div class=\"sEditorBoxWrp pr\"></div></div></div> <img src=\"../../../bundle/img/checked-0k.png\" alt=\"\" class=\"cheack\"><img src=\"../../../bundle/img/add-hos.png\" alt=\"\" class=\"add\"><img src=\"../../../bundle/img/delet-edit.png\" alt=\"\" class=\"del\"></div>";
        if (index == 24) {
            html = "<div class=\"innerpos\"  data-id=\"" + newop + "\" data-num=\"" + (index + 1) + "\"  data-right=\"0\"><span class=\"font18 posspan\">" + newop + "</span><div class=\"cnt_hd w980 inline small-edit\"><div class=\"sEditorCenter pr\"><div class=\"sEditorBoxWrp pr\"></div></div></div> <img src=\"../../../bundle/img/checked-0k.png\" alt=\"\" class=\"cheack\"><img src=\"../../../bundle/img/delet-edit.png\" alt=\"\" class=\"del\"></div>";
        }


        if ($(".innerpos").length == 2) {
            $("#option_content").find(".cheack").each(function (i, v) {
                $(v).after("<img src=\"../../../bundle/img/delet-edit.png\" alt=\"\" class=\"del\">");
            });
        }

        $(this).parent().parent().append(html);
        $(this).remove();
        init_sEditorBox();
        $('.choose-type').height($('.abnormal-choose').height());
    });

    //删除按钮
    $("#option_content").off("click", ".del");
    $("#option_content").on("click", ".del", function () {
        $("#choosecount_content_warn").hide();
        var index = $(this).parent().attr("data-num");
        index = parseInt(index);

        $(this).parent().nextAll().each(function (i, v) {
            $(v).attr({ "data-id": OptionArr[index], "data-num": index }).find(".posspan").html(OptionArr[index]);

            index++;
        });

        $(this).parent().remove();
        if ($(".innerpos").last().find(".add").length == 0) {
            $(".innerpos").last().find(".cheack").after("<img src=\"../../../bundle/img/add-hos.png\" alt=\"\" class=\"add\">");
        }

        if ($(".innerpos").length == 2) {
            $("#option_content .del").remove();
        }

        $('.choose-type').height($('.abnormal-choose').height());
    });

}

//初始化 年级
QuestionHandle.prototype.InitOpGrade = function (defaultvalue) {
    var self = this;
    var data = GetOpGradeList(self.Asubjectid, self.Abgrade);

    var param = { containerId: "dropquestiongrade", data: data, width: 100, defaultValue: defaultvalue };
    param.valueField = "grade";
    param.textField = "gradename";
    param.selectedCallBack = function (id, selectedValue, selectedText) {

        self.Aquestiongrade = selectedValue;

    };
    var t = $DropDownList(param);

    self.Aquestiongrade = t.getValue().value;

}
//初始化 年级 End

/*初始化 教材版本*/
QuestionHandle.prototype.InitEdition = function (defaultvalue, bookid, tb_locationid) {
    var self = this;
    $.ajax({
        type: "post",
        url: "/Resource/Questions/GetTextBookEdition?abcdate=" + new Date().getTime(),
        cache: false,
        data:
        {
            subjectid: self.Asubjectid,
            bgrade: self.Abgrade

        },
        dataType: "json",
        success: function (data) {
            if (data != null) {

                var editionArr = data.result;

                self.BindEdition(editionArr, defaultvalue, bookid, tb_locationid);

            }
        }
    });
}

QuestionHandle.prototype.BindEdition = function (data, defaultvalue, bookid, tb_locationid) {
    var self = this;
    var param = { containerId: "dropquesedtion", data: data, width: 100, defaultValue: defaultvalue };
    param.valueField = "EditionId";
    param.textField = "EditionName";
    param.selectedCallBack = function (id, selectedValue, selectedText) {

        self.Aedition = selectedValue;

        self.InitBookid(self.Aedition);

    };
    var t = $DropDownList(param);

    self.Aedition = t.getValue().value;

    self.InitBookid(self.Aedition, bookid, tb_locationid);
}
//初始化 教材版本 End

/*初始化 教材*/
QuestionHandle.prototype.InitBookid = function (edition, bookid, tb_locationid) {
    var self = this;
    $.ajax({
        type: "post",
        url: "/Resource/Questions/GetTextBookList?abcdate=" + new Date().getTime(),
        data:
        {
            subjectid: self.Asubjectid,
            bgrade: self.Abgrade,
            edition: edition
        },
        dataType: "json",
        success: function (data) {

            if (data != null) {

                var arr = data.result;
                arr = arr.reverse();

                self.BindBookid(arr, bookid, tb_locationid);

            }
        }
    });
}

QuestionHandle.prototype.BindBookid = function (data, bookid, tb_locationid) {
    var self = this;
    var param = { containerId: "dropquesbookid", data: data, width: 100, defaultValue: bookid };
    param.valueField = "BookId";
    param.textField = "Name";

    param.selectedCallBack = function (id, selectedValue, selectedText) {

        self.Abookid = selectedValue;

        //同步考点树
        var param1 = {
            url: "/Resource/Questions/GetPointListByTeach",
            data: { subjectid: self.Asubjectid, bookid: self.Abookid },
            containerid: "tb_tree_content",
            showlevel: 1,
            checkBox: false,
            selectedCallBack: self.Tb_GetPointIds,
            isonlykFcallback: true,
            tsource: 0,
            loadedCallBack: function () { }
        }
        if (self.Tb_resourceTree) {
            $("#tb_pointdiv i").click();
        }

        self.Tb_resourceTree = ResourceTreeOne(param1);

    };

    var t = $DropDownList(param);

    self.Abookid = t.getValue().value;

    //同步考点树 //单选
    var param2 = {
        url: "/Resource/Questions/GetPointListByTeach",
        data: { subjectid: self.Asubjectid, bookid: self.Abookid },
        containerid: "tb_tree_content",
        showlevel: 1,
        checkBox: false,
        selectedCallBack: self.Tb_GetPointIds,
        isonlykFcallback: true,
        tsource: 0,
        loadedCallBack: function () { }
    }

    if (self.Tb_resourceTree) {
        $("#tb_pointdiv i").click();
    }

    self.Tb_resourceTree = ResourceTreeOne(param2);

    if (tb_locationid && tb_locationid.length > 0) {

        for (var i = 0; i < tb_locationid.length; i++) {
            self.Tb_resourceTree.ClickCheckBox(tb_locationid[i]);

        }
    }
    $("#tb_pointdiv").off("click", "i");
    $("#tb_pointdiv").on("click", "i", function () {

        var locationid = $(this).attr("data-id");

        self.Tb_Delpoint(locationid);
    });


}
//初始化 教材 End

//初始化 综合考点树 //多选
QuestionHandle.prototype.Init_ZHpointTree = function (zh_locationid) {
    var self = this;

    var param = {
        url: "/Resource/Questions/GetPointListByPoint",
        data: { subjectid: self.Asubjectid, bgrade: self.Abgrade },
        containerid: "zh_tree_content",
        showlevel: 1,
        kfcheckBox: true,
        selectedCheckedCallBack: self.Zh_GetPointIds,
        isonlykFcallback: true,
        tsource: 1
    };

    self.Zh_resourceTree = ResourceTreeKFCheckBox(param);

    if (zh_locationid && zh_locationid.length > 0) {

        for (var i = 0; i < zh_locationid.length; i++) {

            self.Zh_resourceTree.ClickCheckBox(zh_locationid[i]);

        }
    }
    $("#zh_pointdiv").off("click", "i");
    $("#zh_pointdiv").on("click", "i", function () {
        var locationid = $(this).attr("data-id");

        self.Zh_Delpoint(locationid);

    });


}
//初始化 综合考点树 End

//初始化 专题树 //多选
QuestionHandle.prototype.Init_ZTpointTree = function (zt_locationid) {
    var self = this;
    //加载知识点树
    var param = {
        tsource: 2,
        url: "/resource/questions/GetPointListBySpecial",
        data: { subjectid: self.Asubjectid, bgrade: self.Abgrade },
        containerid: "zt_tree_content",
        showlevel: 1,
        checkBox: true,
        selectedCheckedCallBack: self.Zt_GetPointIds,
        isonlyLeafcallback: true,

    };

    self.Zt_resourceTree = ResourceTreeKFCheckBox(param);

    if (zt_locationid && zt_locationid.length > 0) {

        for (var i = 0; i < zt_locationid.length; i++) {

            self.Zt_resourceTree.ClickCheckBox(zt_locationid[i]);
        }
    }
    $("#zt_pointdiv").off("click", "i");
    $("#zt_pointdiv").on("click", "i", function () {
        var locationid = $(this).attr("data-id");

        self.Zt_Delpoint(locationid);
    });

}
//初始化 专题树 End


//初始化 题类
QuestionHandle.prototype.InitQuestionClass = function (subjectid, stage, defaultvalue) {
    var self = this;
    var qClassArr = GetQuestionClassData(subjectid, stage);

    var param = { containerId: "checkquesclass", data: qClassArr, width: 100, columnCount: qClassArr.length };
    param.valueField = "value";
    param.textField = "name";
    param.selectedCallBack = function (id, selectedValue, selectedText, values) {

        self.Aquestionclass = values;

    };

    var tempcheckquesclass = $CheckBox(param);

    if (defaultvalue) {
        tempcheckquesclass.setValue(defaultvalue);
    }

    self.Aquestionclass = tempcheckquesclass.getValue();

}
//初始化 题类 End

//初始化 试题难度
QuestionHandle.prototype.InitQuestionDiff = function (defaultvalue) {
    var self = this;

    var transDiff = GetQuestionDiffNum(defaultvalue);

    tool.starts(transDiff - 1);

    var str = GetQuestionDiffStr(defaultvalue);

    $("#span_diff_content").html(str);

    $("#li_diff_content").off("click", "li");

    $("#li_diff_content li").click(function () {

        self.Aquestiondiff = parseInt($(this).attr("data-id"));

        var str = GetQuestionDiffStr(self.Aquestiondiff);
        $("#span_diff_content").html(str);

        var transDiffnum = GetQuestionDiffNum(self.Aquestiondiff);
        tool.starts(transDiffnum - 1);

    });

    self.Aquestiondiff = defaultvalue;

}
//初始化 试题难度 End

/*获取 同步选中的知识点 数组*/
QuestionHandle.prototype.Tb_GetPointIds = function (values, bookid1) {

    $("#tb_pointdiv span[data-editionid='" + bookid1 + "']").remove();

    var html = "";
    for (var i = 0; i < values.length; i++) {
        html += "<span class=\"tip_yellow tipcon dib mr15\">" + values[i].name + "<i class=\"knowledgetipbtn ml10 ico hand\" data-id=\"" + values[i].locationid + "\"></i></span>";
    }

    $("#tb_pointdiv").html(html);

    $("#tb_select_count").html(values.length);

    if (values.length > 0) {
        $("#tb_selects_warn").hide();
    } else {

        $("#tb_selects_warn").show();
    }

}

/*删除 同步选中的知识点*/
QuestionHandle.prototype.Tb_Delpoint = function (id) {
    var self = this;
    self.Tb_resourceTree.ClickCheckBox(id);

}

/*获取 综合选中的知识点 数组*/
QuestionHandle.prototype.Zh_GetPointIds = function (values, bookid1) {

    $("#zh_pointdiv span[data-editionid='" + bookid1 + "']").remove();

    var html = "";
    for (var i = 0; i < values.length; i++) {
        html += "<span class=\"tip_yellow tipcon dib mr15\">" + values[i].name + "<i class=\"knowledgetipbtn ml10 ico hand\" data-id=\"" + values[i].locationid + "\"></i></span>";
    }

    $("#zh_pointdiv").html(html);

    $("#zh_select_count").html(values.length);

    if (values.length > 0) {
        $("#zh_selects_warn").hide();
    } else {

        $("#zh_selects_warn").show();

    }
}

/*删除 综合选中的知识点*/
QuestionHandle.prototype.Zh_Delpoint = function (id) {
    var self = this;
    self.Zh_resourceTree.ClickCheckBox(id);

}

/*获取 专题选中的知识点 数组*/
QuestionHandle.prototype.Zt_GetPointIds = function (values, bookid1) {

    $("#zt_pointdiv span[data-editionid='" + bookid1 + "']").remove();

    var html = "";
    for (var i = 0; i < values.length; i++) {
        html += "<span class=\"tip_yellow tipcon dib mr15\">" + values[i].name + "<i class=\"knowledgetipbtn ml10 ico hand\" data-id=\"" + values[i].locationid + "\"></i></span>";
    }

    $("#zt_pointdiv").html(html);

    $("#zt_select_count").html(values.length);

}

/*删除 专题选中的知识点*/
QuestionHandle.prototype.Zt_Delpoint = function (id) {
    var self = this;
    self.Zt_resourceTree.ClickCheckBox(id);

}


//█〓〓〓〓〓〓上传试题〓〓〓〓〓〓█
/**
 *
 * @param {} qid      试题id
 * @param {} callback 自定义回调方法
 * @param {} args     自定义回调方法参数
 * @returns {}
 */
QuestionHandle.prototype.SubmitQuestion = function (qid, callback, args) {
    var self = this;


    self.HideContentWarn();


    self.Aquestionbody = editorCanvas.getFormulaTableValue($("#body_content"));
    if (typeof (self.Aquestionbody) == "undefined" || self.Aquestionbody == "" || $.trim(self.Aquestionbody).length < 1) {
        $("#body_content_warn").show();
        return;
    }

    //验证
    var t_option = [{ "desc": "", "f_content": [] }];
    var t_answer = [[]];
    var answerstr = "";
    var tempanswercount = 0;
    //选择题必须有选项
    if (self.Aquestiontype < 101) {

        var isOptionNull = false;

        $(".innerpos").each(function (i, v) {
            var op = $(v).attr("data-id");
            var ri = $(v).attr("data-right");
            var txt = editorCanvas.getFormulaTableValue($(v));

            if (typeof (txt) != "undefined" && txt != "") {
                t_option[0].f_content.push(txt);
                if (ri == "1") {
                    answerstr += op;

                    tempanswercount++;
                }
            } else {
                isOptionNull = true;
            }
        });
        if (isOptionNull) {

            $("#choose_content_warn").show();
            return;
        }

        if (answerstr == "") {

            $("#chooseanswer_content_warn").show();
            return;
        }




    } else {
        answerstr = editorCanvas.getFormulaTableValue($("#answer_content"));
    }

    t_answer[0].push(answerstr);

    self.Aquestionanswer = JSON.stringify(t_answer);

    var qjxArr = [];

    var tempjx = editorCanvas.getFormulaTableValue($("#jx_content"));
    qjxArr.push(tempjx);

    self.Aquestionoption = JSON.stringify(t_option);

    self.Aquestioncome = $("#input_questioncome").val();

    var tempstr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    if (self.Aquestionclass != "") {
        var tempqclass = self.Aquestionclass.split(',');

        for (var i = 0; i < tempqclass.length; i++) {
            var v = parseInt(tempqclass[i]);
            tempstr[v - 1] = 1;
        }
    }

    var tb_locationidArr = [];
    var zh_locationidArr = [];
    var zt_locationidArr = [];

    var tb_point = { "SecId": 0, "TestId": 0 };

    if (self.Tb_resourceTree) {

        var tb_pointArr_temp = self.Tb_resourceTree.GetSelectedJsonValue();
        if (tb_pointArr_temp.length > 0) {
            var s = tb_pointArr_temp[0].locationid;

            tb_locationidArr.push(s);

            var arr = s.split('_');
            tb_point.SecId = arr[0];
            tb_point.TestId = arr[1];
        } else {
            $("#tb_selects_warn").show();

            return;
        }

    }

    var zh_point = { "SecIds": [], "TestIds": [] };
    var zh_pointArr_temp = self.Zh_resourceTree.GetSelectedCheckBoxJsonValue();
    if (zh_pointArr_temp.length > 0) {
        for (var i = 0; i < zh_pointArr_temp.length; i++) {
            var s = zh_pointArr_temp[i].locationid;
            zh_locationidArr.push(s);

            var arr = s.split('_');
            if ($.inArray(arr[0], zh_point.SecIds) == -1) {
                zh_point.SecIds.push(arr[0]);
            }
            if ($.inArray(arr[1], zh_point.TestIds) == -1) {
                zh_point.TestIds.push(arr[1]);
            }
        }
    } else {
        $("#zh_selects_warn").show();

        return;
    }



    var zt_point = [];
    if (self.Zt_resourceTree) {
        var zt_pointArr_temp = self.Zt_resourceTree.GetSelectedCheckBoxJsonValue();
        for (var i = 0; i < zt_pointArr_temp.length; i++) {
            zt_point.push(zt_pointArr_temp[i].id);
            zt_locationidArr.push(zt_pointArr_temp[i].locationid);
        }

    }

    var extension = {
        "edition": self.Aedition,
        "bookid": self.Abookid,
        "tb_locationid": tb_locationidArr,
        "zh_locationid": zh_locationidArr,
        "zt_locationid": zt_locationidArr
    };
    var tempqtype = self.Aquestiontype;//除英语外,选择题选项多于一个,题型改为多选题2
    if (self.Asubjectid != "03" && self.Aquestiontype < 101 && tempanswercount > 1) {
        tempqtype = 2;
    }

    var tempdata = {
        QuestionId: qid,
        Subject: self.Asubjectid,
        Style: tempqtype,
        Grade: self.Aquestiongrade,
        Difficulty: self.Aquestiondiff,
        QuestionBody: self.Aquestionbody,
        Selection: self.Aquestionoption,
        QuestionAnswer: self.Aquestionanswer,
        QuestionWay: JSON.stringify(qjxArr),

        SpecialId: zt_point,//专题
        MainSecTest: tb_point,//同步
        NormalSecTest: zh_point,//综合

        Catetgory: tempstr.join(""),//1位中考题；2位易错题；3位创新题；4位探究题  5压轴题
        Remark: self.Aquestioncome,
        PaperId: self.Apaperid,
        Extension: JSON.stringify(extension)//扩展信息

    };
    //if (!self.iscansubmit) {
    //    return;
    //}
    //self.iscansubmit = false;
    $.ajax({
        type: "post",
        url: "/Resource/Operation/SubmitQuestion?abcdate=" + new Date().getTime(),
        data: { data: JSON.stringify(tempdata) },
        dataType: "json",
        success: function (data) {

            if (callback) {

                callback(data, args);

            }

            //self.iscansubmit = true;
        }
    });
}
//上传试题 End

//█〓〓〓〓〓〓隐藏 试题错误提示〓〓〓〓〓〓█
QuestionHandle.prototype.HideContentWarn = function () {

    $("#body_content_warn").hide();
    $("#choose_content_warn").hide();
    $("#chooseanswer_content_warn").hide();
    $("#choosecount_content_warn").hide();

    $("#tb_selects_warn").hide();
    $("#zh_selects_warn").hide();

}

//█〓〓〓〓〓〓试题修改初始化〓〓〓〓〓〓█
QuestionHandle.prototype.InitQuestionInfo = function (qid, callback, args) {
    var self = this;

    self.HideContentWarn();

    $(".tab-change").first().click();//Tab 标签切换到第一位

    $('.pop-mask').show();//打开遮罩

    $.ajax({
        type: "post",
        url: "/Resource/Operation/GetCQuestionInfo?abcdate=" + new Date().getTime(),
        traditional: true, //提交数组需要设置为true
        data: { qid: qid },
        dataType: "json",
        success: function (data) {
            if (data != null) {

                var model = data.result;

                self.Asubjectid = model.Subject;
                self.Abgrade = model.Grade.substr(0, 1);

                $("#qupuser_span").html(data.username);
                $("#quptime_span").html(data.createtime);

                //**************************试题
                var option = JSON.parse(model.Selection);
                var answer = JSON.parse(model.QuestionAnswer);
                var way = JSON.parse(model.QuestionWay);
                var ext = JSON.parse(model.Extension);

                self.InitOption(option, answer);//选项

                self.InitQuestionType(model.Style);//题型

                if (model.Style > 100) {
                    $("#answer_content .sEditorBoxWrp").attr("data-content", answer[0][0]);
                }

                $("#body_content .sEditorBoxWrp").attr("data-content", model.QuestionBody);
                $("#jx_content .sEditorBoxWrp").attr("data-content", way[0]);

                $("#input_questioncome").val(model.Remark);

                init_sEditorBox();

                self.InitOpGrade(model.Grade);//年级

                var qclass = model.Catetgory;
                var qclassStr = "";
                var qclassArr = qclass.split('');
                for (var i = 0; i < qclassArr.length; i++) {
                    if (qclassArr[i] == "1") {
                        qclassStr += (i + 1) + ",";
                    }
                }

                if (self.Asubjectid == "14") {
                    $("#tb_div").hide();
                    $("#zt_div").hide();
                    $("#checkquesclass_div").hide();
                } else {
                    if (self.Asubjectid == "03") {
                        $("#tb_div").hide();

                    } else {
                        self.InitEdition(ext.edition, ext.bookid, ext.tb_locationid); //教材版本-教材(BindBookid)-树
                    }
                    self.Init_ZTpointTree(ext.zt_locationid);

                    self.InitQuestionClass(self.Asubjectid, self.Abgrade, qclassStr);//题类
                }

                self.Init_ZHpointTree(ext.zh_locationid);



                self.InitQuestionDiff(model.Difficulty);//难度

                $(".tpml .poup").hide();
                $(".tpmls .poup").show();
                $('.choose-type').height($('.abnormal-choose').height());

                $("#submitquestion").unbind("click");
                $("#submitquestion").click(function (event) {
                    if (callback) {
                        self.SubmitQuestion(qid, callback, args);//
                    } else {
                        self.SubmitQuestion(qid, self.SubmitQuestionExt);
                    }
                });
            }
        }
    });


}

//█〓〓〓〓〓〓试题修改提交 委托方法(默认)〓〓〓〓〓〓█
QuestionHandle.prototype.SubmitQuestionExt = function (data) {

    if (data.result > 0) {
        window.location.reload();
    }
}
