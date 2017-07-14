newBCommon = {
    GetSubjectStr: function (subjectId) {



        var subjectIdStr = "";
        switch (subjectId) {
            case "01":
                subjectIdStr = "璇枃";
                break;
            case "02":
                subjectIdStr = "鏁板";
                break;
            case "03":
                subjectIdStr = "鑻辫";
                break;
            case "04":
                subjectIdStr = "鐗╃悊";
                break;
            case "05":
                subjectIdStr = "鍖栧";
                break;
            case "06":
                subjectIdStr = "鍦扮悊";
                break;
            case "07":
                subjectIdStr = "鍘嗗彶";
                break;
            case "08":
                subjectIdStr = "鏀挎不";
                break;
            case "09":
                subjectIdStr = "鐢熺墿";
                break;
            case "14":
                subjectIdStr = "濂ユ暟";
                break;
            default:
                break;
        }
        return subjectIdStr;
    },
    GetStageStr: function (stageId) {
        var stageIdStr = "";
        switch (stageId) {
            case "x":
                stageIdStr = "灏忓";
                break;
            case "c":
                stageIdStr = "鍒濅腑";
                break;
            case "g":
                stageIdStr = "楂樹腑";
                break;
            default:
                break;
        }
        return stageIdStr;
    },
    slideanimate: function (msg) {

        msg = msg || "";
        var item = $("#popMsgDiv_layout");
        var content = $("#popMsgDiv_layout_content");
        if (item.length > 0) {
            content.html(msg);

            item.animate({ 'top': 0 }, 500);
            item.animate({ 'top': -50 }, 1500);

        }
    },
    GetGradeList: function (stage, edu) {
        var jsonResult = [];
        switch (stage) {
            case "x":
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                if (edu == 0) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                break;
            case "c":
                if (edu == 1) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });

                break;
            case "g":
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });

                break;
            default:
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                break;

        }
        return jsonResult;

    },
    GetGradeList1: function (stage, edu, subject) {
        var jsonResult = [];
        switch (stage) {
            case "x":

                if (subject != "14") {
                    jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                    jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                }


                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                //if (edu == 0) {
                //    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                //}
                jsonResult.push({ grade: "x", gradename: "灏忓崌鍒�" });
                break;
            case "c":
                if (edu == 1) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "c", gradename: "涓€冨涔�" });

                break;
            case "g":
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                jsonResult.push({ grade: "g", gradename: "楂樿€冨涔�" });

                break;
            default:
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                break;

        }
        return jsonResult;

    },
    GetGradeList2: function (stage, edu, subject) {
        var jsonResult = [];
        jsonResult.push({ grade: "0", gradename: "鍏ㄩ儴" });
        switch (stage) {
            case "x":
                if (subject != "14") {
                    jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                    jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                }

                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                if (edu == 0) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "x", gradename: "灏忓崌鍒�" });
                break;
            case "c":
                if (edu == 1) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "c", gradename: "涓€冨涔�" });

                break;
            case "g":
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                jsonResult.push({ grade: "g", gradename: "楂樿€冨涔�" });

                break;
            default:
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                break;

        }
        return jsonResult;

    },
    GetGradeList4XE_plan: function (stage, edu) {
        var jsonResult = [];

        switch (stage) {
            case "x":
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                if (edu == 0) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "x0", gradename: "灏忓崌鍒�" });
                break;
        }
        return jsonResult;

    },
    GetGradeList4XE_plana: function (stage, edu) {
        var jsonResult = [];
        jsonResult.push({ grade: "0", gradename: "鍏ㄩ儴" });
        switch (stage) {
            case "x":
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                if (edu == 0) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "x0", gradename: "灏忓崌鍒�" });
                break;
        }
        return jsonResult;

    },
    GetGradeList3: function (stage, edu) {
        var jsonResult = [];
        switch (stage) {
            case "x":
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                if (edu == 0) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                //jsonResult.push({ grade: "x0", gradename: "灏忓崌鍒�" });
                break;
            case "c":
                if (edu == 1) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "c0", gradename: "涓€�" });

                break;
            case "g":
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                jsonResult.push({ grade: "g0", gradename: "楂樿€�" });

                break;
            default:
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                break;

        }
        return jsonResult;

    },
    GetGradeList4XE: function (stage, edu) {//灏忓鑻辫
        var jsonResult = [];
        switch (stage) {
            case "x":
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                if (edu == 0) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "x0", gradename: "灏忓崌鍒�" });
                break;

        }
        return jsonResult;

    },
    GetGradeList4: function (stage, edu) {
        var jsonResult = [];
        switch (stage) {
            case "x":
                jsonResult.push({ grade: "-1", gradename: "閫傜敤骞寸骇" });
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                //if (edu === 0) {
                //    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                //}
                //jsonResult.push({ grade: "x0", gradename: "灏忓崌鍒�" });
                break;
            case "c":
                jsonResult.push({ grade: "-1", gradename: "閫傜敤骞寸骇" });
                if (edu == 1) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "c0", gradename: "涓€�" });

                break;
            case "g":
                jsonResult.push({ grade: "-1", gradename: "閫傜敤骞寸骇" });
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                jsonResult.push({ grade: "g0", gradename: "楂樿€�" });

                break;
            default:
                jsonResult.push({ grade: "-1", gradename: "閫傜敤骞寸骇" });
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                break;

        }
        return jsonResult;

    },

    GetGradeList4XE_pbox: function (stage, edu) {
        var jsonResult = [];
        switch (stage) {
            case "x":
                jsonResult.push({ grade: "-1", gradename: "閫傜敤骞寸骇" });
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });

                if (edu == 0) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                jsonResult.push({ grade: "x0", gradename: "灏忓崌鍒�" });
                break;


        }
        return jsonResult;

    },
    //闃舵INT
    GetGradeIntList: function (stage, edu, subject) {

        var jsonResult = [];
        switch (stage) {
            case "x":
                if (+subject != 14) {
                    jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                    jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                }
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                if (edu == 0) {
                    jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                }
                break;
            case "c":
                if (edu == 1) {
                    jsonResult.push({ grade: "c1", gradename: "鍏勾绾�" });
                    jsonResult.push({ grade: "c2", gradename: "涓冨勾绾�" });
                    jsonResult.push({ grade: "c3", gradename: "鍏勾绾�" });
                    jsonResult.push({ grade: "c4", gradename: "涔濆勾绾�" });
                }
                else {
                    jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                    jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                    jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                }

                break;
            case "g":
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });

                break;
            default:
                jsonResult.push({ grade: "x1", gradename: "涓€骞寸骇" });
                jsonResult.push({ grade: "x2", gradename: "浜屽勾绾�" });
                jsonResult.push({ grade: "x3", gradename: "涓夊勾绾�" });
                jsonResult.push({ grade: "x4", gradename: "鍥涘勾绾�" });
                jsonResult.push({ grade: "x5", gradename: "浜斿勾绾�" });
                jsonResult.push({ grade: "x6", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c1", gradename: "涓冨勾绾�" });
                jsonResult.push({ grade: "c2", gradename: "鍏勾绾�" });
                jsonResult.push({ grade: "c3", gradename: "涔濆勾绾�" });
                jsonResult.push({ grade: "g1", gradename: "楂樹竴" });
                jsonResult.push({ grade: "g2", gradename: "楂樹簩" });
                jsonResult.push({ grade: "g3", gradename: "楂樹笁" });
                break;

        }
        return jsonResult;

    },
    getGenderData: function () { return [{ "id": 0, "name": "鐢�" }, { "id": 1, "name": "濂�" }]; },
    geteduTypeData: function () { return [{ "id": 0, "name": "鍏笁" }, { "id": 1, "name": "浜斿洓" }]; },
    getwlTypeData: function () { return [{ "id": 0, "name": "鐞嗙" }, { "id": 1, "name": "鏂囩" }, { "id": 2, "name": "涓嶅垎鏂囩悊" }]; },
    getStuTypeData: function () { return [{ "id": 1, "name": "涓€瀵逛竴" }, { "id": 2, "name": "鐝" }]; },
    getStuTypeAllData: function () { return [{ "id": 0, "name": "鍏ㄩ儴" }, { "id": 1, "name": "涓€瀵逛竴" }, { "id": 2, "name": "鐝" }]; },
    gradeIntTostr: function (grade) {
        var gradestr = "x1";
        switch (grade * 1) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                grade = "x" + grade;
                break;
            case 7:
            case 8:
            case 9:
                grade = "c" + (grade * 1 - 6);
                break;
            case 10:
            case 11:
            case 12:
                grade = "g" + (grade * 1 - 9);
                break;
            default:
                return "x1";
                break;
        }
        return gradestr;
    },
    //骞寸骇杞负鏁板瓧
    gradestrToInt: function (gradestr) {
        var grade = 1;
        var g = gradestr.substring(1, 2) * 1;
        switch (gradestr) {
            case "x1":
            case "x2":
            case "x3":
            case "x4":
            case "x5":
            case "x6":
                grade = g;
                break;
            case "c1":
            case "c2":
            case "c3":
                grade = g + 6;
                break;
            case "g1":
            case "g2":
            case "g3":
                grade = g + 9;
                break;
            default:
                return 1;
                break;
        }
        return grade;
    },
    //
    gradestrToC: function (gradestr) {
        var grade;
        var g = gradestr.substring(1, 2) * 1;
        switch (gradestr) {
            case "x1":
                grade = "涓€骞寸骇";
                break;
            case "x2":
                grade = "浜屽勾绾�";
                break;
            case "x3":
                grade = "涓夊勾绾�";
                break;
            case "x4":
                grade = "鍥涘勾绾�";
                break;
            case "x5":
                grade = "浜斿勾绾�";
                break;
            case "x6":
                grade = "鍏勾绾�";
                break;
            case "c1":
                grade = "涓冨勾绾�";
                break;
            case "c2":
                grade = "鍏勾绾�";
                break;
            case "c3":
                grade = "涔濆勾绾�";
                break;

            case "g1":
                grade = "楂樹竴";
                break;
            case "g2":
                grade = "楂樹簩";
                break;
            case "g3":
                grade = "楂樹笁";
                break;

            default:
                return "涓€骞寸骇";
                break;
        }
        return grade;
    },
    //灏嗘枃鐞嗘暟瀛楄浆涓哄瓧绗︿覆
    getwlstr: function (wltype) {
        var wlstr = "";
        switch (wltype) {
            case 0:
                wlstr = "鐞嗙";
                break;
            case 1:
                wlstr = "鏂囩";
                break;
            case 2:
                wlstr = "涓嶅垎鏂囩悊";
                break;
            default:
                wlstr = "涓嶅垎鏂囩悊";
                break;
        }
        return wlstr;
    },
    //灏嗗鍒舵暟瀛楄浆涓哄瓧绗︿覆
    getedustr: function (edutype) {
        var edustr = "";
        switch (edutype) {
            case 0:
                edustr = "鍏笁鍒�";
                break;
            case 1:
                edustr = "浜斿洓鍒�";
                break;
            default:
                edustr = "鍏笁鍒�";
                break;
        }
        return edustr;
    },
    GetTechCenterHour: function (max) {
        var s = 0.5;
        var data = [];
        for (var k = 0; k < max * 2 - 1; k++) {
            data.push({
                "id": (s + "").length > 1 ? s : s + ".0",
                "name": (s + "").length > 1 ? s : s + ".0"
            });
            s = s * 1 + 0.5;
        }
        return data;

    },

    //鏄剧ず绐楀彛
    showdialog: function (containerId, title) {
        var dialog = art.dialog({
            title: title,
            lock: true,
            fixed: true,
            drag: false,
            content: $(containerId)[0],
            close: function () {
                $('body').css('overflow', 'auto');
            }
        });
        return dialog;
    },
    //鎿嶄綔缁撴灉鎻愮ず
    ShowNoTitleDialog: function (containerId, msg) {
        var dialogWindow = art.dialog({
            lock: true,
            fixed: true,
            drag: false,
            title: false,
            content: $(containerId)[0],
            cancel: false,
            close: function () {
                $('body').css('overflow', 'auto');
            }
        });
        return dialogWindow;
    },
    //鎿嶄綔缁撴灉鎻愮ず
    ShowNoTitleDialogMsg: function (msg) {
        var dialogWindow = art.dialog({
            opacity: 0.4,
            lock: true,
            fixed: true,
            drag: false,
            title: false,
            content: msg,
            cancel: false,
            close: function () {
                $('body').css('overflow', 'auto');
            }
        });
        return dialogWindow;
    },
    //鎿嶄綔缁撴灉鎻愮ず1绉掗殣钘�
    ShowOperationResultDialog: function (msg) {
        art.dialog({
                lock: true,
                fixed: true,
                drag: false,
                width: "260px",
                height: "140px",
                time: 1,
                title: false,
                content: msg,
                cancel: false
            }
        );
    },
    //纭妗�
    showConfirmDialog: function (title, msg, okfunction) {
        var confirmdialog = art.dialog({
            title: title,
            lock: true,
            fixed: true,
            drag: false,
            content: msg,
            close: function () { },
            okValue: "鏄�",
            cancelValue: "鍚�",
            ok: function () {
                okfunction();
            },
            cancel: function () {
                this.close();
            }
        });
        return confirmdialog;
    },
    //杞崲绉掓暟涓哄父瑙勬椂闂�
    ConvertNumeberToChinese: function (num) {
        var sbChinese = "";

        var strDigital = new Array("闆�", "涓€", "浜�", "涓�", "鍥�", "浜�", "鍏�", "涓�", "鍏�", "涔�");//鏁板瓧
        var strUnit = new Array("", "鍗�", "鐧�", "鍗�", "涓�", "鍗�", "鐧�", "鍗�", "浜�", "鍗�", "鐧�", "鍗�", "涓�", "鍗�", "鐧�");//鍗曚綅

        if (num < 0)//涓嶆敮鎸佽礋鏁�
        {
            return "";
        }
        if (num == 10) {
            return strUnit[1];
        }
        if (num < 10) {
            return strDigital[num];
        }

        var strNum = num + "";
        var numLength = strNum.length;

        for (var i = 0; i < numLength; i++) {
            var n = strNum[i] * 1;
            if (!sbChinese.endsWith("闆�") || strDigital[n] != "闆�") {
                sbChinese += strDigital[n];
            }


            if (!sbChinese.endsWith("闆�")) {
                sbChinese += (strUnit[numLength - i - 1]);
            }
        }

        return sbChinese.trim('闆�');

    },
    // html杞爜
    Htmlencode: function (s) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(s));
        return div.innerHTML;
    },
    // html瑙ｇ爜
    Htmldecode: function (s) {
        var div = document.createElement('div');
        div.innerHTML = s;
        return div.innerText || div.textContent;
    },
    //鑾峰彇url
    GetQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },
    CreateUrl: function (url, paramObj) {
        url += "?";
        for (var o in paramObj) {
            if (paramObj.hasOwnProperty(o)) {
                if (paramObj[o] != -1) {
                    url += o + "=" + paramObj[o] + "&";
                }
            }
        }
        url = url.substring(0, url.length - 1);
        return url;

    },
    formatDate: function (date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + "00";
    },
    formatDatetime: function (date) {
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    },
    getDatediff: function (endtime, starttime, flag) {

        if (endtime == "" || starttime == "") {
            return 0;
        }
        var s = new Date(starttime);
        var e = new Date(endtime);
        var t = e - s;
        switch (flag) {
            case "H":
                return t / (3600 * 1000);
                break;
            case "m":
                return t / (60 * 1000);
                break;
            default:
        }
    },
    data_string: function (str) {
        var d = eval('new ' + str.substr(1, str.length - 2));
        var ar_date = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
        for (var i = 0; i < ar_date.length; i++) ar_date[i] = dFormat(ar_date[i]);
        return ar_date.join('-');

        function dFormat(i) { return i < 10 ? "0" + i.toString() : i; }
    },
    GetLocalTime: function (val) {
        if (val != null) {
            var date = new Date(parseInt(val.replace("/Date(", "").replace(")/", ""), 10));
            var year = date.getFullYear();
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

            return year + "-" + month + "-" + currentDate + " " + hours + ":" + minute;
        }
        return "";
    },
    //2016-05-08 HH:mm 杞负 2016/05/08 HH:mm 鍏煎IE
    convertDate: function (val) {
        return val.replace('-', '/').replace('-', '/')
    },
    /*寮瑰嚭灞�*/
    Layer: function (obj) {

        $("body").append('<div class="layuiBg"></div>');
        $(".layuiBg").css({
            display: "block", height: $(document).height()
        });
        $(obj).css({
            left: ($("body").width() - $(obj).width()) / 2 + "px",
            top: ($(window).height() - $(obj).height()) / 2 + $(window).scrollTop() + "px",
            display: "block"
        });
    },
    isHiden: function (item) {
        /// <summary>
        /// 鍏冪礌鏄惁鍦ㄧ獥鍙ｅ彲瑙�
        /// </summary>
        /// <param name="item" type="string">鍏冪礌ID</param>
        /// <returns type="">false:鍏冪礌鍙,ture:鍏冪礌涓嶅彲瑙�</returns>

        return (jQuery(window).scrollTop() > ($(item).offset().top + $(item).outerHeight())) || ((jQuery(window).scrollTop() + jQuery(window).height()) < $(item).offset().top);

    }, CheckBrowser: function () {
        //骞冲彴銆佽澶囧拰鎿嶄綔绯荤粺
        var system = {
            win: false,
            mac: false,
            xll: false,
            ipad: false
        };
        //妫€娴嬪钩鍙�
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
        if (system.win || system.mac || system.xll) {
            return false;
        } else {
            return true;

        }
    },

}

function initCheckBox() {
    var checkbox = $("i[data-type='checkbox']");
    if (checkbox) {
        checkbox.unbind("click");
        checkbox.click(function () {
            if ($(this).hasClass("check_def")) {
                $(this).removeClass("check_def").addClass("check_sel");
            } else {
                $(this).removeClass("check_sel").addClass("check_def");
            }
        });
    }
}
///radioButton 閫変腑鍙栨秷浜嬩欢
function initRadioButton(radioname) {
    var radios = $("i[data-type='radio'][data-name='" + radioname + "']");
    if (radios) {
        radios.unbind("click");
        radios.click(function () {
            if ($(this).hasClass("radio_def")) {
                radios.removeClass("radio_sel").addClass("radio_def");
                $(this).removeClass("radio_def").addClass("radio_sel");
            }
        });
    }

}


var dropcount = 1000;
//瀹瑰櫒ID
//鏁版嵁闆�
//榛樿value
//瀹藉害
//缁戝畾value瀛楁
//缁戝畾text瀛楁
//閫変腑callback
function $DropDownListFunction(param) {

    var containerId = param.containerId;
    var data = param.data;
    var defaultValue = param.defaultValue;
    var width = param.width;
    var height = param.height || 200;
    var subtextlength = param.subtextlength || 5;

    var valueField = param.valueField;
    var textField = param.textField;
    var selectedCallBack = param.selectedCallBack;
    var loadedCallBack = param.loadedCallBack;
    var zindex = param.zindex;
    if (param.data.length == 0) {
        var d = {};
        d[valueField] = -1;
        d[textField] = "";
        data.push(d);
        height = 0;
    }
    if (!width) {
        width = 180;
    }

    if (!valueField) {
        valueField = "id";
    }
    if (!textField) {
        textField = "name";
    }
    var defaultText = "";
    //璁剧疆榛樿鍊�
    if (!defaultValue) {
        defaultValue = data[0][valueField];
        defaultText = data[0][textField];
    }
    var ulHtml = "<div class='dropdiv'>";
    ulHtml += '  <ul class="manageclasspopul dn" style="max-height:' + height + 'px;overflow:auto;" data-id="' + defaultValue + '" data-name="' + defaultText + '">';

    for (var k = 0; k < data.length; k++) {
        var item = data[k];
        //鑾峰彇榛樿鍊�

        //if (item[valueField] === defaultValue) {
        //    defaultText = item[textField];
        //}
        var v = item[textField].length > subtextlength ? item[textField].substring(0, subtextlength) + "..." : item[textField];
        var itemHtml = '<li title=' + item[textField] + ' data-index=' + k + ' data-id=' + item[valueField] + ' data-tag=\'' + JSON.stringify(data[k]) + '\'>' + v + '</li>';
        ulHtml += itemHtml;
    }
    ulHtml += "</ul>";
    ulHtml += "</div>";
    var spanHtml = ' <span style="width: ' + width + 'px;" class="dib"><span data-type="dropdownlist_drop_span">' + defaultText + '</span> <i class="num_down"></i></span>';

    var con = $("#" + containerId);
    con.html(spanHtml);
    con.append(ulHtml);
    if (zindex) {
        con.find(".dropdiv").css("z-index", zindex);
        con.attr("zindex", zindex);
    } else {
        con.find(".dropdiv").css("z-index", dropcount--);
        con.attr("zindex", dropcount+1);
    }
    con.addClass("btn_num_updown").addClass("btn_num_updown1").addClass("dib");
    con.attr("title", defaultText);

    var ul = $("#" + containerId + " ul");
    var li = $("#" + containerId + " ul li");
    var span = con.find("span[data-type='dropdownlist_drop_span']");
    //$("#dropdownlist_drop_span");


    //浜嬩欢
    //涓嬫媺浜嬩欢
    con.click(function () {
        if (ul.is(":visible")) {
            ul.slideUp(200);
        } else {
            ul.slideDown(200);
        }
    });
    con.mouseleave(function (e) {
        ul.slideUp(200);
        console.log(e);
        return false;

    });
    //閫変腑浜嬩欢
    li.click(function () {
        var selectedValue = $(this).attr("data-id");
        var selectedText = $(this).html();
        var selectedTag = $(this).attr("data-tag");
        var alltitle = $(this).attr("title");
        span.text(selectedText);
        span.attr("data-id", selectedValue);
        span.attr("data-tag", selectedTag);
        span.attr("title", alltitle);

        con.attr("title", alltitle);
        //閫変腑鍥炶皟浜嬩欢
        if (selectedCallBack) {
            selectedCallBack(containerId, selectedValue, alltitle);
        }

    });
    //鏆撮湶缁欏閮ㄧ殑鏂规硶
    this.getValue = function () {
        if (data.length > 0) {
            return { value: span.attr("data-id"), text: span.attr("title"),zindex: con.attr("zindex")}
        }
        else {
            return { value: -1, text: "" }
        }

    };
    //鏆撮湶缁欏閮ㄧ殑鏂规硶
    this.getTag = function () {
        if (data.length > 0) {
            return JSON.parse(span.attr("data-tag"));
        }
        else {
            return null;
        }

    };
    this.setValue = function (value) {
        var textsel = "";
        //閫変腑鐨勫€�
        var selItem;
        for (var m = 0; m < data.length; m++) {
            var itemsel = data[m];
            if (itemsel[valueField] == value) {
                textsel = itemsel[textField];

                selItem = itemsel;
                break;
            }
        }
        span.attr("data-id", value);
        span.attr("data-tag", JSON.stringify(selItem));
        span.attr("title", textsel);
        con.attr("title", textsel);


        var selectedValue = value;
        var selectedText = textsel;

        var v = textsel.length > subtextlength ? textsel.substring(0, subtextlength) + "..." : textsel;
        span.text(v);

        if (loadedCallBack) {
            loadedCallBack(containerId, selectedValue, selectedText);
        }
        return this;
    }

    //璁剧疆榛樿鍊�
    this.setValue(defaultValue);

}


//瀹瑰櫒ID
//鏁版嵁闆�
//榛樿value
//columnCount 姣忚鏄剧ず涓暟
//缁戝畾value瀛楁
//缁戝畾text瀛楁
//閫変腑callback
function $CheckBoxFunction(param) {
    var me = this;
    var containerId = param.containerId;
    var data = param.data;
    var columnCount = param.columnCount;
    var valueField = param.valueField;
    var textField = param.textField;
    var selectedCallBack = param.selectedCallBack;

    if (!valueField) {
        valueField = "id";
    }
    if (!textField) {
        textField = "name";
    }
    if (!columnCount || columnCount < 1) {
        columnCount = 1;
    }
    var tablehtml = '<table>';

    var trhtml = "";
    var tdhtml = "";
    for (var k = 0; k < data.length; k++) {
        var item = data[k];
        if ((k % columnCount) == 0) {
            if (tdhtml.length > 0) {
                trhtml += '<tr>' + tdhtml + '</tr>';
                tdhtml = "";
            }
        }

        tdhtml += '<td ><label class="ml10" data-id=' + item[valueField] + '><i class="check_def mr10"></i>' + item[textField] + '</label></td>';
    }
    tablehtml += trhtml;
    tablehtml += "<tr>" + tdhtml + "</tr>";
    tablehtml += '</table>';

    var con = $("#" + containerId);
    con.html("");
    con.append(tablehtml);


    //浜嬩欢
    //鐐瑰嚮浜嬩欢
    var label = $("#" + containerId + " label");
    label.click(function () {
        var icon = $(this).find("i");
        if (icon.hasClass("check_def")) {
            icon.removeClass("check_def").addClass("check_sel");
        } else {
            icon.removeClass("check_sel").addClass("check_def");
        }
        var selectedValue = $(this).attr("data-id");
        var selectedText = $(this).text();
        if (selectedCallBack) {
            var values = me.getValue();

            selectedCallBack(containerId, selectedValue, selectedText, values);
        }

    });


    /////鏆撮湶缁欏閮ㄧ殑鏂规硶
    //璁剧疆鍊硷紝浠ラ€楀彿鍒嗛殧
    this.setValue = function (values) {
        var valArr = (values + "").split(',');
        for (var m = 0; m < valArr.length; m++) {
            var v = valArr[m];
            //con.find("label[data-id='" + v + "']").click();
            con.find("label[data-id='" + v + "'] i").removeClass("check_def").addClass("check_sel");
            //$("#" + containerId + " label[data-id='" + v + "']").click();
        }
        return this;
    }
    //鑾峰彇鍊�
    this.getValue = function () {
        var values = "";
        con.find(".check_sel").each(function (index, item) {
            values += $(item).parent().attr("data-id") + ",";
        });
        var result = values.substr(0, values.length - 1);
        return result;
    }
    //鑾峰彇鍊�
    this.getValueJson = function () {
        var values = [];
        con.find(".check_sel").each(function (index, item) {
            var v = {};
            v[valueField] = $(item).parent().attr("data-id");
            v[textField] = $(item).parent().text();
            values.push(v);

        });
        var result = values;
        return values;
    }
}


function $CheckBoxFunction2(param) {

    var containerId = param.containerId;
    var data = param.data;
    var columnCount = param.columnCount;
    var valueField = param.valueField;
    var textField = param.textField;
    var selectedCallBack = param.selectedCallBack;


    if (!valueField) {
        valueField = "id";
    }
    if (!textField) {
        textField = "name";
    }
    if (!columnCount || columnCount < 1) {
        columnCount = 1;
    }
    var tablehtml = '<table style="width:100%;">';

    var trhtml = "";
    var tdhtml = "";
    for (var k = 0; k < data.length; k++) {
        var item = data[k];
        if ((k % 2) == 0) {
            if (tdhtml.length > 0) {
                trhtml += '<tr style="height:40px">' + tdhtml + '</tr>';
                tdhtml = "";
            }
        }

        tdhtml += '<td  style="text-align:center"><label class="ml10" data-id=' + item[valueField] + '><i class="check_def mr10"></i>' + item[textField] + '</label></td>';
    }
    tablehtml += trhtml;
    tablehtml += "<tr style='height:40px'>" + tdhtml + "</tr>";
    tablehtml += '</table>';

    var con = $("#" + containerId);
    con.html("");
    con.append(tablehtml);


    //浜嬩欢
    //鐐瑰嚮浜嬩欢
    var label = $("#" + containerId + " label");
    label.click(function () {
        var icon = $(this).find("i");
        if (icon.hasClass("check_def")) {
            icon.removeClass("check_def").addClass("check_sel");
        } else {
            icon.removeClass("check_sel").addClass("check_def");
        }
        var selectedValue = $(this).attr("data-id");
        var selectedText = $(this).text();
        if (selectedCallBack) {
            selectedCallBack(containerId, selectedValue, selectedText);
        }

    });


    /////鏆撮湶缁欏閮ㄧ殑鏂规硶
    //璁剧疆鍊硷紝浠ラ€楀彿鍒嗛殧
    this.setValue = function (values) {
        var valArr = (values + "").split(',');
        for (var m = 0; m < valArr.length; m++) {
            var v = valArr[m];
            //con.find("label[data-id='" + v + "']").click();
            con.find("label[data-id='" + v + "'] i").removeClass("check_def").addClass("check_sel");
            //$("#" + containerId + " label[data-id='" + v + "']").click();
        }
        return this;
    }
    //鑾峰彇鍊�
    this.getValue = function () {
        var values = "";
        con.find(".check_sel").each(function (index, item) {
            values += $(item).parent().attr("data-id") + ",";
        });
        var result = values.substr(0, values.length - 1);
        return result;
    }
    //鑾峰彇鍊�
    this.getValueJson = function () {
        var values = [];
        con.find(".check_sel").each(function (index, item) {
            var v = {};
            v[valueField] = $(item).parent().attr("data-id");
            v[textField] = $(item).parent().text();
            values.push(v);

        });
        var result = values;
        return values;
    }
}


//鍔熻兘鍚屼笂,鎸夊娈靛垎缁�
function $CheckBoxFunctionGroup(param) {

    var containerId = param.containerId;
    var data = param.data;
    var columnCount = param.columnCount;
    var valueField = param.valueField;
    var textField = param.textField;
    var selectedCallBack = param.selectedCallBack;

    if (!valueField) {
        valueField = "id";
    }
    if (!textField) {
        textField = "name";
    }
    if (!columnCount || columnCount < 1) {
        columnCount = 1;
    }
    var tablehtml = '<table>';

    var trhtml = "";
    var tdhtml = "";
    //******yl*****//
    var rlist = GetBgradeSubjects(data);
    for (var i = 0; i < rlist.length; i++) {
        var node = rlist[i];
        tdhtml += '<div class="level" style="overflow:hidden;zoom:1;width:200px">';
        for (var j = 0; j < node.list.length; j++) {
            var item = node.list[j];

            tdhtml += '<span ><label class="ml10" data-id="' + item[valueField] + '"><i class="check_def mr10"></i>' + item[textField] + '</label></span>';
        }
        tdhtml += '</div>';

    }
    tdhtml = "<td>" + tdhtml + "</td>";

    //*********//

    tablehtml += trhtml;
    tablehtml += "<tr>" + tdhtml + "</tr>";
    tablehtml += '</table>';

    var con = $("#" + containerId);
    con.html("");
    con.append(tablehtml);


    //浜嬩欢
    //鐐瑰嚮浜嬩欢
    var label = $("#" + containerId + " label");
    label.click(function () {
        //---------澶氶€�---------//
        //var icon = $(this).find("i");
        //if (icon.hasClass("check_def")) {
        //    icon.removeClass("check_def").addClass("check_sel");
        //} else {
        //    icon.removeClass("check_sel").addClass("check_def");
        //}
        //---------鍗曢€�---------//
        $("#" + containerId + " label").find("i").removeClass("check_sel").addClass("check_def");
        var icon = $(this).find("i");
        icon.removeClass("check_def").addClass("check_sel");
        //----------------------//

        var selectedValue = $(this).attr("data-id");
        var selectedText = $(this).text();
        if (selectedCallBack) {
            selectedCallBack(containerId, selectedValue, selectedText);
        }

    });


    /////鏆撮湶缁欏閮ㄧ殑鏂规硶
    //璁剧疆鍊硷紝浠ラ€楀彿鍒嗛殧
    this.setValue = function (values) {
        var valArr = (values + "").split(',');
        for (var m = 0; m < valArr.length; m++) {
            var v = valArr[m];
            //con.find("label[data-id='" + v + "']").click();
            con.find("label[data-id='" + v + "'] i").removeClass("check_def").addClass("check_sel");
            //$("#" + containerId + " label[data-id='" + v + "']").click();
        }
        return this;
    }
    //鑾峰彇鍊�
    this.getValue = function () {
        var values = "";
        con.find(".check_sel").each(function (index, item) {
            values += $(item).parent().attr("data-id") + ",";
        });
        var result = values.substr(0, values.length - 1);
        return result;
    }
    //鑾峰彇鍊�
    this.getValueJson = function () {
        var values = [];
        con.find(".check_sel").each(function (index, item) {
            var v = {};
            v[valueField] = $(item).parent().attr("data-id");
            v[textField] = $(item).parent().text();
            values.push(v);

        });
        var result = values;
        return values;
    }
}

var lastSubject = "";
function isNewSubject(obj) {

    if (obj != lastSubject) {
        lastSubject = obj;
        return true;
    }
    lastSubject = obj;
    return false;

}
function GetBgradeSubjects(slist) {

    var rList = new Array();
    var nobj = null;

    for (var i = 0; i < slist.length; i++) {
        var val = slist[i];

        if (isNewSubject(val.id.substring(0, 1))) {
            if (nobj != null) {
                rList.push(nobj);
                nobj = new Object();
            } else {
                nobj = new Object();
            }


            nobj.biggrade = val.id.substring(0, 1);
            nobj.list = new Array();
            nobj.list.push(val);
            continue;
        }
        nobj.list.push(val);
    }
    rList.push(nobj);
    return rList;

}




//瀹瑰櫒ID
//鏁版嵁闆�
//榛樿value
//columnCount 姣忚鏄剧ず涓暟
//缁戝畾value瀛楁
//缁戝畾text瀛楁
//閫変腑callback
function $RadioFunction(param) {

    var containerId = param.containerId;
    var data = param.data;
    var columnCount = param.columnCount;
    var valueField = param.valueField;
    var textField = param.textField;
    var selectedCallBack = param.selectedCallBack;
    this.containerId = param.containerId;
    if (!valueField) {
        valueField = "id";
    }
    if (!textField) {
        textField = "name";
    }
    if (!columnCount || columnCount < 1) {
        columnCount = 1;
    }
    var tablehtml = '<table>';

    var trhtml = "";
    var tdhtml = "";
    for (var k = 0; k < data.length; k++) {
        var item = data[k];
        if ((k % columnCount) == 0) {
            if (tdhtml.length > 0) {
                trhtml += '<tr>' + tdhtml + '</tr>';
                tdhtml = "";
            }
        }
        tdhtml += '<td ><label class="ml10" data-id=' + item[valueField] + '><i class="radio_def mr10"></i>' + item[textField] + '</label></td>';
    }
    tablehtml += trhtml;
    tablehtml += "<tr>" + tdhtml + "</tr>";
    tablehtml += '</table>';

    var con = $("#" + containerId);
    this.con = con;
    con.html("");
    con.append(tablehtml);


    //浜嬩欢
    //鐐瑰嚮浜嬩欢
    var label = $("#" + containerId + " label");
    label.click(function () {
        var icon = $(this).find("i");
        if (icon.hasClass("radio_def")) {
            con.find("i").removeClass("radio_sel").addClass("radio_def");
            icon.removeClass("radio_def").addClass("radio_sel");
        }
        //else {

        //    icon.removeClass("radio_sel").addClass("radio_def");
        //}
        var selectedValue = $(this).attr("data-id");
        var selectedText = $(this).text();
        if (selectedCallBack) {
            selectedCallBack(containerId, selectedValue, selectedText);
        }

    });


    /////鏆撮湶缁欏閮ㄧ殑鏂规硶
    //璁剧疆鍊硷紝浠ラ€楀彿鍒嗛殧
    this.setValue = function (values) {
        var valArr = (values + "").split(',');
        for (var m = 0; m < valArr.length; m++) {
            var v = valArr[m];
            //con.find("label[data-id='" + v + "']").click();
            con.find("i").removeClass("radio_sel").addClass("radio_def");
            con.find("label[data-id='" + v + "'] i").addClass("radio_sel");
            //$("#" + containerId + " label[data-id='" + v + "']").click();
        }
        return this;
    }
    //鑾峰彇鍊�
    this.getValue = function () {
        var values = "";
        con.find(".radio_sel").each(function (index, item) {
            values += $(item).parent().attr("data-id") + ",";
        });
        var result = values.substr(0, values.length - 1);
        return result;
    }
    //鑾峰彇鍊�
    this.getValueJson = function () {
        var values = "";
        var text = "";
        con.find(".radio_sel").each(function (index, item) {
            values += $(item).parent().attr("data-id") + ",";
            text = $(item).parent().text();
        });
        var result = values.substr(0, values.length - 1);
        var r = {};
        r[valueField] = result;
        r[textField] = text;
        return r;
    }
}


InputNumeric = {
    CreateInputNumeric: function (obj, param) {
        if (param) {
            param.maxVlaue = param.maxVlaue || 100;
            param.minVlaue = param.minVlaue || 0;
        } else {
            param = {};
            param.maxVlaue = 100;
            param.minVlaue = 0;
        }
        var con = $(obj);

        con.removeClass("btn_num_updown").addClass("btn_num_updown").removeClass("dib").addClass("dib").removeClass("mr15").addClass("mr15");
        var defaultValue = con.attr("value");
        if (!defaultValue)
            defaultValue = 0;
        var inputhtml = '<input type="text" style="width: 4em" value=' + defaultValue + ' /><i class="num_up"></i><i class="num_down1"></i>';
        con.append(inputhtml);
        var up = con.find(".num_up");
        var down = con.find(".num_down1");
        var input = con.find("input");
        up.click(function () {
            var num = input.val();
            if (num.length > 0) {
                num = num * 1;
            } else {
                num = 0;
            }
            if (num < param.maxVlaue) {

                num = num + 1;
                input.val(num);
                con.attr("value", num);
                if (param.callback) {
                    param.callback(num);
                }
            }
        });
        down.click(function () {
            var num = input.val();
            if (num.length > 0) {
                num = num * 1;
            } else {
                num = 0;
            }
            if (num > param.minVlaue) {
                num = num - 1;
                input.val(num);
                con.attr("value", num);
                if (param.callback) {
                    param.callback(num);
                }
            }

        });
        input.blur(function () {
            var num = input.val();
            con.attr("value", num);
        });
        input.keypress(function () {
            var keyCode = event.keyCode;

            if ((keyCode >= 48 && keyCode <= 57)) {
                event.returnValue = true;

            } else {
                event.returnValue = false;
            }
        });

    },
    Init: function (param) {
        var inputNumeric = $("[data-type='InputNumeric']");
        if (inputNumeric) {
            inputNumeric.each(function (index, item) {
                    InputNumeric.CreateInputNumeric(item, param);
                }
            );
        }
    }


}
InputNumeric1 = {
    CreateInputNumeric: function (obj, param) {

        if (param) {
            param.maxVlaue = param.maxVlaue || 100;
            param.minVlaue = param.minVlaue || 0;
        } else {
            param = {};
            param.maxVlaue = 100;
            param.minVlaue = 0;
        }
        var con = $(obj);
        var defaultValue = con.attr("value");
        if (!defaultValue) {
            defaultValue = 0;

        }

        var inputhtml = '<span class="borH change_div"><a class="change_btn_down ico"></a><input type="text" data-sss="s" class="ml-3" value="' + defaultValue + '" onpause="return false" > </input><a class="change_btn_plus ico"></a></span>';
        //var inputhtml = '<input type="text" style="width: 4em" value=' + defaultValue + ' /><i class="num_up"></i><i class="num_down1"></i>';
        con.append(inputhtml);
        var up = con.find(".change_btn_plus");
        var down = con.find(".change_btn_down");
        var input = con.find("input");


        up.click(function () {
            var num = input.val();

            if (num == NaN) {
                num = 0;
            }

            if (num.length > 0) {
                num = num * 1;
            } else {
                num = 0;
            }
            if (num < param.maxVlaue) {

                num = num + 1;
                input.val(num);
                con.attr("value", num);
                if (param.callback) {
                    param.callback(num);
                }
            }
        });
        down.click(function () {
            var num = input.val();
            if (num == NaN) {
                num = 0;
            }

            if (num.length > 0) {
                num = num * 1;
            } else {
                num = 0;
            }
            if (num > param.minVlaue) {
                num = num - 1;
                input.val(num);
                con.attr("value", num);
                if (param.callback) {
                    param.callback(num);
                }
            }

        });

        input.blur(function () {
            var num = input.val();
            con.attr("value", num);
        });
        input.keypress(function () {
            var keyCode = event.keyCode;

            if ((keyCode >= 48 && keyCode <= 57)) {
                event.returnValue = true;

            } else {
                event.returnValue = false;
            }
        });

    },
    Init: function (param) {

        var inputNumeric1 = $("[data-type='InputNumeric1']");
        if (inputNumeric1) {
            inputNumeric1.each(function (index, item) {
                    InputNumeric1.CreateInputNumeric(item, param);
                }
            );
        }
    }

}


//function InitInputNumeric() {
//    var inputNumeric = $("[data-type='InputNumeric']");
//    if (inputNumeric) {
//        inputNumeric.each(function (index, item) {
//            CreateInputNumeric(item);
//        }
//        );
//    }
//}
//function CreateInputNumeric(obj) {

//    var inputhtml = '<input type="text" style="width: 4em" /><i class="num_up"></i><i class="num_down"></i>';
//    var containerId = param.containerId;
//    var con = $(obj);
//    con.append(inputhtml);
//    var up = con.find(".num_up");
//    var down = con.find(".num_down");
//    var input = con.find("input");
//    up.click(function () {
//        var num = input.val();
//        num++;
//        input.val(num);
//    });
//    down.click(function () {
//        var num = input.val();
//        num--;
//        input.val(num);
//    });
//    //TODO 鎺у埗杈撳叆
//    input.blur(function () { });

//}


function $Radio(param) {
    //if (this.value) {
    //    if (this.value.containerId == param.containerId) {
    //    } else {
    //        this.value = new $RadioFunction(param);
    //    }
    //} else {
    this.value = new $RadioFunction(param);
    //}
    return this.value;
}
function $CheckBox(param) {
    if (this.value) {
        if (this.value.containerId == param.containerId) {
        } else {
            this.value = new $CheckBoxFunction(param);
        }
    } else {
        this.value = new $CheckBoxFunction(param);
    }
    return this.value;
}

function $CheckBox2(param) {
    if (this.value) {
        if (this.value.containerId == param.containerId) {
        } else {
            this.value = new $CheckBoxFunction2(param);
        }
    } else {
        this.value = new $CheckBoxFunction2(param);
    }
    return this.value;
}




//鍔熻兘鍚屼笂,甯﹀垎缁�
function $CheckBoxGroup(param) {
    if (this.value) {
        if (this.value.containerId == param.containerId) {
        } else {
            this.value = new $CheckBoxFunctionGroup(param);
        }
    } else {
        this.value = new $CheckBoxFunctionGroup(param);
    }
    return this.value;
}



function $DropDownList(param) {
    //if (this.value) {
    //    if (this.value.containerId == param.containerId) {
    //    } else {
    //        this.value = new $DropDownListFunction(param);
    //    }
    //} else {
    this.value = new $DropDownListFunction(param);
    //}
    return this.value;
}




///闃舵绉戠洰鑱斿姩 鏆傛椂涓嶉€氱敤
function $StageSubjectList() {
    var stageList;
    //闃舵鍙樺寲
    this.changeStage = function (stageList, index) {
        $("#subjectListul li").remove();
        var item = stageList[index];
        var subjectList = item.SubjectList;
        for (var m = 0; m < subjectList.length; m++) {
            var subjectItem = subjectList[m];
            $("#subjectListul").append('<li data-id=' + subjectItem.SubjectId + '>' + subjectItem.SubjectName + '</li>');
            if (m == 0) {
                $("#subjectId").html(subjectItem.SubjectName + "<i class=\"num_down\"></i>");
                $("#subjectListul").attr("data-id", subjectItem.SubjectId);
            }
        }

        $("#subjectListul li").unbind("click");
        //淇敼瀛︾
        $("#subjectListul li").click(function () {
            $(this).parent().attr("data-id", $(this).attr("data-id"));
            $(this).parent().slideUp();
            $("#subjectId").text($(this).html());
        });
    }
    this.GetOpenSubjectAndStage = function () {
        $.ajax({
            type: "post",
            url: "/Class/GetOpenSubjectAndStage",
            async: false,
            //data: parm,
            success: function (data) {
                if (data.status) {
                    if (data.status == "11-001") {
                        stageList = data.data;
                        $("#stageListul li").remove();
                        for (var k = 0; k < stageList.length; k++) {
                            var item = stageList[k];

                            $("#stageListul").append('<li data-index=' + k + ' data-id=' + item.StageId + '>' + item.StageName + '</li>');
                            if (k == 0) {

                                $("#stageId").html(item.StageName + "<i class=\"num_down\"></i>");
                                $("#stageListul").attr("data-id", item.StageId);
                                changeStage(stageList, 0);
                            }
                        }
                        $("#stageListul li").unbind("click");
                        //淇敼闃舵
                        $("#stageListul li").click(function () {
                            $(this).parent().attr("data-id", $(this).attr("data-id"));
                            $("#stageId").html($(this).html() + "<i class=\"num_down\"></i>");
                            changeStage(stageList, $(this).attr("data-index"));
                            $(this).parent().slideUp();
                        });
                    }
                }
            }
        });
    }
    $("#classStage").click(function () {
        if ($("#stageListul").is(":visible")) {
            $("#stageListul").slideUp(200);
        } else {
            $("#stageListul").slideDown(200);
        }

    });
    $("#classStage,#classSubjectdiv").mouseleave(function () {
        $(this).find("ul").slideUp();
    });
    $("#classSubjectdiv").click(function () {
        if ($("#subjectListul").is(":visible")) {
            $("#subjectListul").slideUp(200);
        } else {
            $("#subjectListul").slideDown(200);
        }

    });
    this.GetOpenSubjectAndStage();


}
