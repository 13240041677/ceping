/// <reference path="ResourceTree.js" />
///鐭ヨ瘑鐐规爲
//demo
//$(function () {
//    //绉戠洰ID,鏁欐潗id,鏍戠被鍨�
//    var param = { subjectid: "02", bookid: "001c10", treetype: 0, containerid: "tree"};
//    ResourceTree(param);
//});
//鏀寔鐖惰妭鐐瑰崟鍑诲睍寮€鎶樺彔锛屽瓙鑺傜偣鐐瑰嚮鍥炶皟
ResourceTreeOneFunction = function (param) {

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


    //鑾峰彇鎸囧畾灞傜骇鐨勬墍鏈夊瓙鍏冪礌
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
    //閫掑綊鑾峰彇鎸囧畾灞傜骇鐨勬墍鏈夌埗绾у厓绱�
    function getParents(currentItem, curricon) {
        if (currentItem.parent().parent().siblings("i").length > 0) {
            var p = currentItem.parent().parent();
            p.siblings("i").click();
            getParents(p.siblings("a"), p.siblings("i"));

        }
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
                result += "," + c.attr("data-bookid");
            }
        }
        result.substring(0, 1);
        return result;
    }
    ///鑾峰彇閫変腑鐨勮妭鐐圭煡璇嗙偣闆嗗悎
    this.GetSelectedJsonValue = function () {
        var result = [];
        var item = con.find("a.cur");
        if (item.length == 0) {
            return result;
        }
        var isleaf = item.attr("data-type");
        var secid = item.attr("data-secid");
        var secname = item.html();
        var bookid = item.attr("data-bookid");
        var level = item.attr("data-level");
        var parent = item.parent().parent().siblings("a");
        var parentbookid = parent.attr("data-bookid");
        var parentbookname = parent.html();
        var typename = item.attr("data-type");
        if (isleaf === "leaf") {

            result.push({ id: secid, name: secname, locationid: bookid, parentlocationid: parentbookid, parentname: parentbookname, level: level, typename: typename });
        }
        else if (isleaf === "kf") {

            result.push({ id: secid, name: secname, locationid: bookid, parentlocationid: parentbookid, parentname: parentbookname, level: level, typename: typename });

        }
        else {
            result.push({ id: secid, name: secname, locationid: bookid, parentlocationid: parentbookid, parentname: parentbookname, level: level, typename: typename });
            var children = item.next().find("li a");
            for (var m = 0; m < children.length; m++) {
                var c = $(children[m]);
                if (c.attr("data-type") == "kf") {
                    continue;
                }
                var secid1 = c.attr("data-secid");
                var secname1 = c.html();
                var bookid1 = c.attr("data-bookid");
                var level1 = c.attr("data-level");
                var parent1 = c.parent().parent().siblings("a");
                var parentbookid1 = parent1.attr("data-bookid");
                var parentbookname1 = parent1.html();
                var typename1 = c.attr("data-type");
                result.push({ id: secid1, name: secname1, locationid: bookid1, parentlocationid: parentbookid1, parentname: parentbookname1, level: level1, typename: typename1 });

            }

        }

        return result;
    }
    //鑾峰彇瀹氫綅鑺傜偣ID
    this.GetLocationId = function () {
        var item = con.find("a.cur");
        return item.attr("data-bookid");
    }
    /*
     list锛氫紶鍏ョ殑鏁版嵁鏉ユ簮
     current锛氬綋鍓嶈澶勭悊鐨勯」
     pid锛氱埗绾D
     currlevel锛氬綋鍓嶅眰绾�
     currentIndex锛氬綋鍓峣dndex 鍒ゆ柇鏄惁鏄渶鍚庝竴涓猯ast
     allcount锛氬綋閽卞厔寮熻妭鐐规€绘暟閲忥紝鐢ㄤ簬鍒ゆ柇鏄惁鏄渶鍚庝竴涓妭鐐�
     */
    function createBookTreeHtml(list, current, pid, currlevel, currentIndex, allcount) {
        var html = "";
        if (!current)
            current = list[0];

        var bid = current.PointId;
        var kid = current.SecId;
        var name = current.Name;



        var childrens = getChildren(list, current, pid);
        var isclose = currlevel >= showlevel;

        if (childrens.length > 0) {
            if (currentIndex == allcount - 1) {
                html += '<li class="parent-last">';
            }
            else {
                html += '<li>';
            }
            if (isclose) {
                html += '<i class="li_open "></i>';
            } else {
                html += '<i class="li_close "></i>';
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
                    html += '<li class="leaf-last"><a class="hand " data-type="leaf" data-level="' + currlevel + '" data-bookid="' + bid + '" data-secid="' + kid + '">' + name + '</a></li>';
                }
                else {
                    html += '<li class="leaf"><a class="hand " data-type="leaf" data-level="' + currlevel + '" data-bookid="' + bid + '" data-secid="' + kid + '">' + name + '</a></li>';
                }
            }
        }


        return html;


    }

    var getSelectedJsonValue = this.GetSelectedJsonValue;

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

                            if ($(this).hasClass("cur")) {
                                //鍙嶉€� 20161230 鐐瑰嚮閫変腑锛屽啀娆＄偣鍑诲彇娑堥€変腑 涓嶉€傜敤浜庨搴撹祫婧愭爲
                                if (param.isonlykFcallback) {
                                    con.find("a[data-type]").removeClass("cur");
                                    if (param.selectedCallBack) {
                                        //param.selectedCallBack($(this), children);
                                        var values = getSelectedJsonValue();
                                        param.selectedCallBack(values);
                                    }
                                }
                                else
                                {
                                    return false;
                                }

                            } else {
                                con.find("a[data-type]").removeClass("cur");
                                $(this).addClass("cur");

                                var children = $(this).next().find("li");
                                if (param.selectedCallBack) {
                                    //param.selectedCallBack($(this), children);
                                    var values = getSelectedJsonValue();
                                    param.selectedCallBack(values);
                                }
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
                        if (list == null || list.length == 0) {


                            con.html("");
                            var rev = [];
                            if (param.loadedCallBack) {
                                param.loadedCallBack(rev);
                            }
                            return;
                        }
                        var html = "<ul>";
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
                        //con.find("a[data-level=1]").filter(":visible").first().addClass("cur");

                        //con.find("")
                        con.find("i").click(function () {
                            if ($(this).hasClass("li_close")) {
                                $(this).removeClass("li_close").addClass("li_open");
                                $(this).siblings("ul").hide(200);
                            } else {
                                $(this).removeClass("li_open").addClass("li_close");


                                if (typeof (param.tsource) != "undefined" && param.tsource != "2" && typeof (param.isNoLoadKF) == "undefined") {


                                    if ($(this).siblings("ul").children().filter(".leaf").length > 0 || $(this).siblings("ul").children().filter(".leaf-last").length > 0) {
                                        //if ($(this).siblings("ul").find("ul").length == 0) {
                                        var children = $(this).siblings("ul").find("li a[data-type='leaf']");
                                        for (var j = 0; j < children.length; j++) {
                                            var item = $(children[j]);
                                            var secid = item.attr("data-secid");
                                            var level = item.attr("data-level");
                                            var icon = '<i class="li_open"></i>';
                                            if (item.parent().find("i").length == 0) {
                                                item.before(icon);
                                                getKflist(secid, item.parent());
                                                item.parent().find("i").unbind("click");
                                                item.parent().find("i").click(function () {
                                                    if ($(this).hasClass("li_close")) {
                                                        $(this).removeClass("li_close").addClass("li_open");
                                                        $(this).siblings("ul").hide(200);
                                                    } else {
                                                        $(this).removeClass("li_open").addClass("li_close");
                                                        $(this).siblings("ul").show(200);
                                                    }
                                                });
                                            }


                                        }
                                    }



                                }

                                $(this).siblings("ul").show(200);
                            }
                        });

                        con.find("a[data-type='parent']").click(function () {
                            //鍙湁鐐瑰嚮鑰冪偣瑙﹀彂鍥炶皟锛岀偣鍑诲叾浠栬妭鐐瑰彧鐢ㄦ潵灞曞紑鎶樺彔锛屼笉鍋氬叾浠栧姛鑳�
                            if (param.isonlykFcallback) {
                                $(this).siblings("i").click();
                                return false;
                            }

                            con.find("a[data-type]").removeClass("cur");
                            $(this).addClass("cur");

                            if (typeof (param.tsource) != "undefined" && param.tsource != "2" && typeof (param.isNoLoadKF) == "undefined") {

                                var children = $(this).next().find("li a[data-type='leaf']");
                                for (var j = 0; j < children.length; j++) {
                                    var item = $(children[j]);
                                    var secid = item.attr("data-secid");
                                    var level = item.attr("data-level");
                                    var icon = '<i class="li_open"></i>';
                                    if (item.parent().find("i").length == 0) {
                                        item.before(icon);
                                        getKflist(secid, item.parent());
                                        item.parent().find("i").unbind("click");
                                        item.parent().find("i").click(function () {
                                            if ($(this).hasClass("li_close")) {
                                                $(this).removeClass("li_close").addClass("li_open");
                                                $(this).siblings("ul").hide(200);
                                            } else {
                                                $(this).removeClass("li_open").addClass("li_close");
                                                $(this).siblings("ul").show(200);
                                            }
                                        });
                                    }


                                }
                            }

                            if (param.selectedCallBack) {
                                //param.selectedCallBack($(this), children);
                                var values = getSelectedJsonValue();
                                param.selectedCallBack(values);
                            }


                        });
                        con.find("a[data-type='leaf']").click(function () {
                            //鍙湁鐐瑰嚮鑰冪偣瑙﹀彂鍥炶皟锛岀偣鍑诲叾浠栬妭鐐瑰彧鐢ㄦ潵灞曞紑鎶樺彔锛屼笉鍋氬叾浠栧姛鑳�
                            if (param.isonlykFcallback) {
                                $(this).siblings("i").click();
                                return false;
                            }
                            con.find("a[data-type]").removeClass("cur");
                            $(this).addClass("cur");

                            if (param.selectedCallBack) {
                                //param.selectedCallBack($(this), children);
                                var values = getSelectedJsonValue();
                                param.selectedCallBack(values);
                            }
                        });



                        if (param.loadedCallBack) {
                            //var item = con.find("a.cur");
                            //var children = item.next().find("li a");

                            /*瀹氫綅鍒版煇涓煡璇嗙偣*/
                            if (typeof (param.Aknowledgeid) != "undefined") {
                                var _mark = param.Aknowledgeid;
                                con.find("a").removeClass("cur");
                                var mygetposition = _mark.indexOf("_");

                                if (mygetposition > -1) {//鑰冪偣灞傜骇瀹氫綅

                                    var pointid = _mark.substr(0, mygetposition);

                                    //灞曞紑鐖剁骇
                                    var currA = $("a[data-secid='" + pointid + "']");
                                    getParents(currA, currA.siblings("i"));

                                    //鐐瑰嚮鑰冪偣 璋冨彇璇曢
                                    currA.siblings("i").click();
                                    $("a[data-bookid='" + _mark + "']").click();

                                } else {
                                    var currA = $("a[data-bookid='" + _mark + "']");

                                    getParents(currA, currA.siblings("i"));
                                    currA.addClass("cur");

                                }

                            } else {//榛樿灞曞紑灞傜骇

                                var currpoint = con.find(".cur");
                                var plusicon = currpoint.prev();
                                plusicon.click();


                                if (typeof (param.tsource) != "undefined" && param.tsource == "1") {

                                    con.find("a").removeClass("cur");
                                    currpoint = currpoint.next().find("a:visible").first();
                                    currpoint.addClass("cur");

                                }

                            }

                            var values = getSelectedJsonValue();
                            param.loadedCallBack(values);
                        }


                    }

                }
                else { }

            }
        });
    }


    //    //瀹氫綅骞剁偣鍑�
    this.ClickCheckBox = function (locationId) {
        //data-secid
        //var check = con.find("a[data-bookid='" + locationId + "']");
        //check.removeClass("cur");


        var check = con.find("a[data-bookid='" + locationId + "']");
        if (check.length > 0) {
        } else {
            var secid = locationId.split('_')[0];
            $(con.find("a[data-secid='" + secid + "']").parents("li")[1]).find('a[data-level="2"]').click();
            check = con.find("a[data-bookid='" + locationId + "']");
        }

        check.click();
    }

    getBookTree();
}



function ResourceTreeOne(param) {

    this.value = new ResourceTreeOneFunction(param);

    return this.value;
}




