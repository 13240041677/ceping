
function ResourceTreeKFCheckBox(param) {

    this.value = new ResourceTreeKFCheckBoxFunction(param);

    return this.value;
}

/// <reference path="ResourcceTree.js" />
///鐭ヨ瘑鐐规爲 鍖呭惈checkbox
//demo
//$(function () {
//    //绉戠洰ID,鏁欐潗id,鏍戠被鍨�
//    var param = { subjectid: "02", bookid: "001c10", treetype: 0, containerid: "tree"};
//    ResourceTree(param);
//});
ResourceTreeKFCheckBoxFunction = function (param) {
    var rthis = this;
    this.param = param;

    //var collectionSec = [{ PointId: 248, QuesCount: 5, name: '姝ｆ暟涓庤礋鏁�' }, { PointId: 247, QuesCount: 5, name: '鏁拌酱' }];

    function getCollectionCount(id) {
        var count = 0;
        for (var k = 0; k < param.collectionSec.length; k++) {
            if (param.collectionSec[k].PointId === id) {
                count = param.collectionSec[k].QuesCount;
                break;
            }
        }
        return count;
    }

    var showlevel = 0;
    if (param.showlevel) {
        showlevel = param.showlevel;
    }
    if (!param.data) {
        return;
    }
    var paramData = param.data;
    var con = $("#" + param.containerid);



    this.GetChildren = function (list, currentItem, pid) {
        var result = [];
        if (param.collectionSec) {
            currentItem.collectionCount = getCollectionCount(currentItem.SecId);
        }
        for (var k = 0; k < list.length; k++) {
            var kno = list[k];
            if (kno.Parent === pid) {
                ////澶勭悊鏀惰棌閫昏緫
                //if (param.collectionSec) {
                //    var count = getCollectionCount(kno.SecId);
                //    if (count > 0) {
                //        //鏀惰棌鏁伴噺
                //        kno.collectionCount = count;
                //        currentItem.collectionCount += count;
                //    }
                //}
                result.push(kno);
            }
        }
        return result;
    }
    var getChildren = this.GetChildren;

    ///鑾峰彇閫変腑鐨勮妭鐐圭煡璇嗙偣闆嗗悎
    this.GetSelectedValue = function () {
        var result = "";
        var item = con.find("a.cur");
        var isleaf = item.attr("data-type");
        if (isleaf === "leaf") {
            var secid = item.attr("data-secid");
            result += "," + secid;
        } else {
            var children = item.next().find("li");
            for (var m = 0; m < children.length; m++) {
                var c = $(children[m]);
                result += "," + c.attr("data-secid");
            }
        }
        result.substring(0, 1);
        return result;
    }
    ///鑾峰彇閫変腑鐨勮妭鐐圭煡璇嗙偣闆嗗悎
    this.GetSelectedJsonValue = function () {
        var result = [];
        var item = con.find("a.cur");
        if (item) {
            var isleaf = item.attr("data-type");
            if (isleaf === "leaf") {
                var secid = item.attr("data-secid");
                var secname = item.html();
                var bookid = item.attr("data-bookid");
                var parent = item.parent().parent().siblings("a");
                var parentbookid = parent.attr("data-bookid");
                var parentbookname = parent.html();
                result.push({
                    id: secid,
                    name: secname,
                    locationid: bookid,
                    parentlocationid: parentbookid,
                    parentname: parentbookname
                });
            } else {
                var children = item.next().find("li a");
                for (var m = 0; m < children.length; m++) {
                    var c = $(children[m]);
                    var secid = c.attr("data-secid");
                    var secname = c.html();
                    var bookid = c.attr("data-bookid");
                    var parent = c.parent().parent().siblings("a");
                    var parentbookid = parent.attr("data-bookid");
                    var parentbookname = parent.html();
                    result.push({
                        id: secid,
                        name: secname,
                        locationid: bookid,
                        parentlocationid: parentbookid,
                        parentname: parentbookname
                    });

                }
            }
        }

        return result;
    }
    this.GetSelectedCheckBoxJsonValue = function () {
        var result = [];
        var items = con.find("i.check_sel").siblings("a");
        for (var k = 0; k < items.length; k++) {
            var item = $(items[k]);
            var isleaf = item.attr("data-type");
            var secid = item.attr("data-secid");
            var secname = item.html();
            var bookid = item.attr("data-bookid");
            var parent = item.parent().parent().siblings("a");
            var parentbookid = parent.attr("data-bookid");
            var editionid = 0;
            if (paramData.bookid)
            { editionid = paramData.bookid; }
            var parentbookname = parent.html();
            if (isleaf === "leaf") {
                result.push({ id: secid, name: secname, locationid: bookid, parentlocationid: parentbookid, parentname: parentbookname, editionid: editionid });
            }
            else if (isleaf === "kf") {
                result.push({ id: secid, name: secname, locationid: bookid, parentlocationid: parentbookid, parentname: parentbookname, editionid: editionid });

            }

        }

        return result;
    }
    //鑾峰彇瀹氫綅鑺傜偣ID
    this.GetLocationId = function () {
        var item = con.find("a.cur");
        return item.attr("data-bookid");
    }


    function createBookTreeHtml(list, current, pid, currlevel, currentIndex, allcount) {
        var html = "";
        if (!current)
            current = list[0];

        var bid = current.PointId;
        var kid = current.SecId;
        var name = current.Name;



        var childrens = getChildren(list, current, pid);
        var isclose = currlevel > showlevel;

        if (childrens.length > 0) {
            if (currentIndex == allcount - 1) {
                html += '<li class="parent-last">';
            }
            else {
                html += '<li>';
            }
            if (isclose) {
                html += '<i data-type="closeOp" class="li_open "></i>';
            } else {
                html += '<i data-type="closeOp" class="li_close "></i>';
            }
            if (param.parentcheckBox) {
                html += '<i data-type="checkBoxOp" class="check_def ml10"  data-level="' + currlevel + '" data-bookid="' + bid + '" data-secid="' + kid + '"></i>';
            }
            html += ' <a class="hand" data-type="parent" data-level="' + currlevel + '" data-bookid="' + bid + '" data-secid="' + kid + '">' + name + '</a>';
            if (isclose) {
                html += '<ul class="dn">';
            } else {
                html += '<ul>';
            }

            for (var m = 0; m < childrens.length; m++) {
                var nextlevel = currlevel + 1;
                html += createBookTreeHtml(list, childrens[m], childrens[m].PointId, nextlevel, m, childrens.length);
            }
            html += "</ul>";
            html += "</li>";
        } else {
            var collectCount = 10;
            if (param.collectionSec) {
                collectCount = current.collectionCount;
            }
            if (collectCount <= 0) {
                return html;
            } else {

                if (currentIndex == allcount - 1) {
                    html += '<li class="leaf-last">';
                }
                else {
                    html += '<li class="leaf">';
                }

                if (param.checkBox) {
                    html += '<i data-type="checkBoxOp" class="check_def ml10"  data-level="' + currlevel + '" data-bookid="' + bid + '" data-secid="' + kid + '"></i>';
                }
                html += '<a class="hand" data-type="leaf" data-level="' + currlevel + '" data-bookid="' + bid + '" data-secid="' + kid + '">' + name + '</a></li>';
            }
        }


        return html;


    }

    var getSelectedJsonValue = this.GetSelectedJsonValue;
    var getSelectedCheckBoxJsonValue = this.GetSelectedCheckBoxJsonValue;
    function getKflist(pointid, warp) {
        var paramkf = {
            pointid: pointid,
            subjectid: param.data.subjectid
        };
        $.ajax({
            type: "post",
            url: "/questions/GetPointListByTestInfo",
            async: false,
            data: paramkf,
            success: function (data) {
                if (data.status) {
                    if (data.status == "11-001") {
                        var list = data.result;

                        if (list.length <= 0) {
                            warp.find("i").remove();
                            return;
                        }
                        //鍒ゆ柇鐭ヨ瘑鐐规槸涓嶆槸鏈€鍚庝竴涓�
                        if (warp.hasClass("leaf-last")) {
                            warp.addClass("parent-last");
                        }
                        warp.removeClass("leaf").removeClass("leaf-last");

                        var html = "";

                        html += '<ul class="dn">';

                        var isHaveQues = false;//鑰冩硶涓嬫槸鍚︽湁棰�

                        for (var m = 0; m < list.length; m++) {
                            var current = list[m];
                            var bid = current.PointId;
                            var kid = current.SecId;
                            var name = current.Name;
                            //鑰冩硶閲嶈绋嬪害
                            var keylevel = current.KeyLevel;

                            var ques = current.QuestionAllCount;
                            if (ques > 0) {
                                isHaveQues = true;

                                //鍒ゆ柇鏄渶鍚庝竴涓€冩硶锛屽姞鐗瑰畾鏍峰紡
                                if (m == list.length - 1) {
                                    html += '<li class="kf-last">';
                                }
                                else {
                                    html += '<li class="kf">';
                                }
                                switch (keylevel) {
                                    case 0:
                                    case 1:
                                        html += '<i class="li_kf_icon icon3 "></i>';
                                        break;
                                    case 2:
                                        html += '<i class="li_kf_icon icon2 "></i>';
                                        break;
                                    case 3:
                                        html += '<i class="li_kf_icon icon1 "></i>';
                                        break;
                                    case 4:
                                        html += '<i class="li_kf_icon icon0 "></i>';
                                        break;
                                    default:
                                        html += '<i class="li_kf_icon icon3 "></i>';
                                        break;

                                }
                                if (param.kfcheckBox) {
                                    html += '<i data-type="checkBoxOp" class="check_def ml10"  data-level="' + 4 + '" data-bookid="' + bid + '" data-secid="' + kid + '"></i>';
                                }
                                html += ' <a class="hand" data-type="kf" data-level="' + 4 + '" data-bookid="' + bid + '" data-secid="' + kid + '">' + name + '</a>';
                                html += "</li>";

                            }

                        }
                        html += '<ul>';

                        if (!isHaveQues) {//鑰冩硶涓嬫棤棰�
                            warp.find("i").remove();
                            return;
                        }

                        warp.append(html);

                        con.find("a[data-type='kf']").unbind("click");
                        con.find("a[data-type='kf']").click(function () {

                            con.find("a[data-type]").removeClass("cur");
                            $(this).addClass("cur");
                            var locationid = $(this).attr("data-bookid");
                            rthis.ClickCheckBox(locationid);
                            var children = $(this).next().find("li");
                            if (param.selectedCallBack) {
                                var values = getSelectedJsonValue();
                                param.selectedCallBack(values);
                            }


                        });




                    }

                }
                else { }

            }
        });
    }
    function getBookTree() {
        $.ajax({
            type: "post",
            url: param.url,
            async: false,
            data: paramData,
            success: function (data) {
                if (data.status) {
                    if (data.status == "11-001") {
                        var list = data.result;
                        var html = "<ul>";
                        //html += createBookTreeHtml(list, list[0], list[0].PointId, 0);
                        html += createBookTreeHtml(list, list[0], list[0].PointId, 0, 0, list.length);
                        html += "</ul>";

                        con.html(html);


                        if (param.collectionSec) {
                            con.find("[data-type='parent']").hide();
                            con.find("[data-type='parent']").prev().hide();
                            var parent = con.find("[data-type='leaf']").parent().parent().siblings();
                            var grandparent = parent.parent().parent().siblings();
                            var grandgrandparent = grandparent.parent().parent().siblings();
                            parent.show();
                            grandparent.show();
                            grandgrandparent.show();
                        }
                        if (typeof (param.hideFirst) == "undefined") {
                            param.hideFirst = 1;
                        }
                        if (param.hideFirst == 1) {
                            //con.find("a[data-level='0']").prev().hide().andSelf().hide();
                            con.find("a[data-level='0']").prev().remove().andSelf().remove();
                        }
                        //榛樿灞曞紑涓ょ骇

                        //con.find("[data-level='1']").next().hide();
                        //con.find("[data-level='1']").prev().removeClass("li_close").addClass("li_open");
                        //榛樿灞曞紑绗竴涓�
                        con.find("a[data-type]").removeClass("cur");
                        con.find("a[data-level=1]").first().addClass("cur");


                        //con.find("")
                        con.find("i[data-type='closeOp']").click(function () {
                            if ($(this).hasClass("li_close")) {
                                $(this).removeClass("li_close").addClass("li_open");
                                $(this).siblings("ul").hide(200);
                            } else {
                                $(this).removeClass("li_open").addClass("li_close");
                                $(this).siblings("ul").show(200);
                                if (typeof (param.tsource) != "undefined" && param.tsource != "2" && typeof (param.isNoLoadKF) == "undefined") {
                                    if ($(this).siblings("ul").children().filter(".leaf").length > 0 || $(this).siblings("ul").children().filter(".leaf-last").length > 0) {
                                        var children = $(this).siblings("ul").find("li a[data-type='leaf']");
                                        for (var j = 0; j < children.length; j++) {
                                            var item = $(children[j]);
                                            var secid = item.attr("data-secid");
                                            var level = item.attr("data-level");
                                            var icon = '<i class="li_open op_open_close" ></i>';
                                            if (item.parent().find("i").filter(".op_open_close").length == 0) {
                                                item.before(icon);
                                                getKflist(secid, item.parent());
                                                item.parent().find("i.op_open_close").unbind("click");
                                                item.parent().find("i.op_open_close").click(function () {
                                                    if ($(this).hasClass("li_close")) {
                                                        $(this).removeClass("li_close").addClass("li_open");
                                                        $(this).siblings("ul").hide(200);
                                                    } else {
                                                        $(this).removeClass("li_open").addClass("li_close");
                                                        $(this).siblings("ul").show(200);
                                                    }
                                                });
                                                item.siblings("ul").find("i[data-type='checkBoxOp']").unbind("click");
                                                item.siblings("ul").find("i[data-type='checkBoxOp']").click(function () {
                                                    var check = $(this);
                                                    var ul = check.parent().parent();
                                                    var parent = ul.siblings("i[data-type='checkBoxOp']");

                                                    var grandparent = parent.parent().parent().siblings("i[data-type='checkBoxOp']");
                                                    var grandgrandparent = grandparent.parent().parent().siblings("i[data-type='checkBoxOp']");
                                                    if (check.hasClass("check_def")) {
                                                        check.removeClass("check_def").addClass("check_sel");
                                                        check.siblings("ul").find("i[data-type='checkBoxOp']").removeClass("check_def").addClass("check_sel");
                                                        //TODO 鍏ㄩ€�
                                                        if (ul.find("i").length === ul.find("i[data-type='checkBoxOp']").length) {
                                                            parent.removeClass("check_def").addClass("check_sel");
                                                        }


                                                    } else {
                                                        check.removeClass("check_sel").addClass("check_def");
                                                        check.siblings("ul").find("i[data-type='checkBoxOp']").removeClass("check_sel").addClass("check_def");
                                                        parent.removeClass("check_sel").addClass("check_def");
                                                        grandparent.removeClass("check_sel").addClass("check_def");
                                                        grandgrandparent.removeClass("check_sel").addClass("check_def");
                                                    }
                                                    if (param.selectedCheckedCallBack) {
                                                        var values = getSelectedCheckBoxJsonValue();
                                                        if (paramData.bookid) {
                                                            param.selectedCheckedCallBack(values, paramData.bookid);
                                                        }
                                                        else {
                                                            param.selectedCheckedCallBack(values, 0);
                                                        }
                                                    }
                                                });
                                            }


                                        }
                                    }
                                }
                            }
                        });
                        //鐐瑰嚮鑺傜偣
                        con.find("a[data-type]").click(function () {
                            if (param.isonlykFcallback) {
                                $(this).siblings("i").click();
                                return false;
                            }
                            if (param.isonlyLeafcallback) {
                                if ($(this).attr("data-type") != "leaf") {
                                    $(this).siblings("i").click();
                                    return false;
                                }
                            }
                            con.find("a[data-type]").removeClass("cur");
                            $(this).addClass("cur");
                            //var children = $(this).next().find("li");
                            var locationid = $(this).attr("data-bookid");
                            rthis.ClickCheckBox(locationid);
                            if (param.selectedCallBack) {
                                //param.selectedCallBack($(this), children);
                                var values = getSelectedJsonValue();
                                param.selectedCallBack(values);
                            }
                        });
                        //鐐瑰嚮澶嶉€夋
                        con.find("i[data-type='checkBoxOp']").click(function () {
                            var check = $(this);
                            var ul = check.parent().parent();
                            var parent = ul.siblings("i[data-type='checkBoxOp']");

                            var grandparent = parent.parent().parent().siblings("i[data-type='checkBoxOp']");
                            var grandgrandparent = grandparent.parent().parent().siblings("i[data-type='checkBoxOp']");
                            if (check.hasClass("check_def")) {
                                check.removeClass("check_def").addClass("check_sel");
                                check.siblings("ul").find("i[data-type='checkBoxOp']").removeClass("check_def").addClass("check_sel");
                                //TODO 鍏ㄩ€�
                                if (ul.find("i").length === ul.find("i[data-type='checkBoxOp']").length) {
                                    parent.removeClass("check_def").addClass("check_sel");
                                }
                            } else {
                                check.removeClass("check_sel").addClass("check_def");
                                check.siblings("ul").find("i[data-type='checkBoxOp']").removeClass("check_sel").addClass("check_def");
                                parent.removeClass("check_sel").addClass("check_def");
                                grandparent.removeClass("check_sel").addClass("check_def");
                                grandgrandparent.removeClass("check_sel").addClass("check_def");
                            }
                            if (param.selectedCheckedCallBack) {
                                var values = getSelectedCheckBoxJsonValue();
                                if (paramData.bookid) {
                                    param.selectedCheckedCallBack(values, paramData.bookid);
                                }
                                else {
                                    param.selectedCheckedCallBack(values, 0);
                                }
                            }

                        });

                        if (param.loadedCallBack) {
                            //var item = con.find("a.cur");GetSelectedJsonValue
                            //var children = item.next().find("li a");
                            var values = getSelectedJsonValue();
                            param.loadedCallBack(values);
                        }

                    }

                }
                else { }

            }
        });
    }

    this.ClickCheckBox = function (locationId) {
        //data-secid
        var check = con.find("i[data-type='checkBoxOp'][data-bookid='" + locationId + "']");
        if (check.length > 0) {
        } else {
            var secid = locationId.split('_')[0];
            $(con.find("a[data-secid='" + secid + "']").parents("li")[1]).find('a[data-level="2"]').click();
            check = con.find("i[data-type='checkBoxOp'][data-bookid='" + locationId + "']");
        }

        check.click();
    }


    getBookTree();
}

