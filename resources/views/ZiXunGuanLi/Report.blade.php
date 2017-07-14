<!DOCTYPE html>
<html><head lang="zh">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <link href="{{ asset('bundle/css/common/base.css') }}" rel="stylesheet">

    <link href="{{ asset('bundle/css/print_preSee.css') }}" rel="stylesheet">
    <link href="{{ asset('bundle/css/see-subject-evaluation.css') }}" rel="stylesheet">

    <style type="text/css">
        .b {
            font-weight: bold;
        }

        .bg1 {
            background: #4f81bc;
        }

        .bg2 {
            background: #c0504e;
        }

        .bg3 {
            background: #9bbb5a;
        }

        .bg4 {
            background: #71588f;
        }

        .bg50 {
            background: #ffffff;
        }

        .width100 {
            width: 70%;
        }

        .square {
            width: 10px;
            height: 10px;
            margin-right: 10px;
        }

        .ico {
            display: inline-block;
            overflow: hidden;
            vertical-align: middle;
            zoom: 1;
            clear: both;
        }

        .shade {
            display: none;
        }

        .tableWidth {
            width: 80%;
        }

        .divtable {
            width: 800px;
        }
    </style>

    <style media="print">
        #btnNoDown {
            display: none;
        }

        /*title {
                visibility: hidden;
            }*/
        /*#printcontent {
            font-size: 27px !important;
        }*/

        /*table, #subA1 {
                page-break-after: always;
            }*/
        /*针对打印的样式*/

        .noprintthead {
            display: none;
        }
    </style>

    <style type="text/css">
        .printthead {
            display: none;
        }
    </style>

    <title>综合测评报告</title>
</head>
<body>
<div class="pop-mask"></div>






<div class="shade">
    <div class="progress-box">
        <p class="white font14 line25 center" id="shade-download-msg">正在加载中....</p>
        <div class="progress"></div>
    </div>
</div>

<!--正文（main-content可修改宽度）-->
<div class="clearFix" style="width:94%;margin-left:3%;margin-right:3%;">
    <img src="../../../bundle/img/logo.png" class="logo" style="width:156px; height:43px; margin-top:15px;">
    <div class="right mb10" id="btnNoDown" style="margin-top:40px;">
        <div class="handle-btn w100 mr10" style="" id="setInfo">
            <span class="evaluation-setting middle"></span>
            <span class="font14">测评设置</span>
        </div>
        <div class="handle-btn w100 mr10" style="" id="printReport">

            <span class="font14">打印</span>
        </div>



        <div class="handle-btn w100" id="examDown">
            <span class="download middle"></span>
            <span class="font14">下载</span>
        </div>
    </div>
</div>
<div class="line"></div>
<div id="main-content" class="overflow">
    <div class="item-wrap">
        <div class="mt50 black" id="nodown" style="text-align:center;margin-bottom:50px;">
            <p class="crumb-color font16 mb10">

                <span class="black " id="downtitle">
                    <span id="TempName">杨宇</span>同学的<span id="SubjectID">综合</span>测评报告
                </span>
            </p>
        </div>
        <div class="font16 mb10">一、基本信息</div>
        <div class="item" id="info">

        </div>
    </div>
    <div class="item-wrap">
        <div class="font16 mb10">二、测评内容</div>
        <div class="item">
            <table class="report-table">
                <thead class="noprintthead">
                <tr>
                    <th style="width:260px;">科目</th>
                    <th>考查范围及说明</th>
                </tr>
                </thead>
                <tbody><tr class="printthead">
                    <th>科目</th>
                    <th>考查范围及说明</th>
                </tr>
                </tbody><tbody id="topA1">

                </tbody>
            </table>
        </div>
    </div>


    <div id="subA1" class="item-wrap">


    </div>

    <div id="enA1" class="item-wrap" style="display: none;">
        <div class="font16 mb20" id="enATitle">四、学能分析</div>
    </div>


    <div id="bottomPort1" class="item-wrap hidden" style="display: block;">
        <div id="bottomP9" class="font16 mb20">四、推荐及建议</div>
        <div class="item">
            <table class="suggestion report-table" id="bottomPort2">

            </table>
        </div>
    </div>

    <div class="item-wrap">
        <div class="item">
            <div class="mt30 mb10">
                <div data-p1="1" class="inline">
                    学校：
                    <span class="mr30" data-m1="1"></span>
                </div>
                <div data-p1="2" class="inline ml150" style="display: none;">
                    电话：
                    <span class="mr30" data-m2="2"></span>
                </div>
                <div data-p1="3" style="display: none;">
                    地址：
                    <span class="mr30" data-m3="3"></span>
                </div>
            </div>
            <div>
                <span class="mr30">测评时间： <span id="editTime"></span></span>
                <span>学校顾问： <span></span></span>
            </div>
        </div>
    </div>
</div>



<!--       测评设置弹框开始-->
<div id="popInfo" class="evaluation-box hidden add">
    <div class="popup ">
        <h5 class="center font16 popuphead">
            测评设置
            <i id="popClose" class="popclose cursor"></i>
        </h5>
        <div class="popupbox overflow">
            <form id="form1" novalidate="novalidate">
                <ul class="nav-box mt10">
                    <li class="nav-li">
                        <span class="nav-title ">
                            <i data-active="1" onclick="activeInfo(this, 1);" class="nav-on">推荐课时</i>
                        </span>
                        <div data-content="1" class="nav-content font14 class-time overflow ">
                            <div class="head">
                                <label><input id="c01" type="checkbox"> 显示推荐课时模块</label>
                            </div>
                            <p class="mt15">
                                课时总数：<span id="Sum"></span>
                            </p>
                            <div id="popA1">

                            </div>
                        </div>
                    </li>
                    <li class="nav-li">
                        <span class="nav-title">
                            <i data-active="2" onclick="activeInfo(this, 2);" class="bt">目标正确率</i>
                        </span>
                        <div data-content="2" class="nav-content target-box font14  hidden">

                            <div id="popB1">

                            </div>
                        </div>
                    </li>
                    <li class="nav-li">
                        <span class="nav-title">
                            <i data-active="4" onclick="activeInfo(this, 4);">辅导策略</i>
                        </span>
                        <ul data-content="4" class="nav-content tutoring-box  font14 hidden" id="popD1"></ul>
                    </li>

                    <li class="nav-li">
                        <span class="nav-title">
                            <i data-active="3" onclick="activeInfo(this, 3);">报告页尾显示</i>
                        </span>
                        <div data-content="3" class="nav-content last-show font14 hidden">
                            <ul class="mt40" id="popC1">
                                <li class="mb35">
                                    <label data-t="1" onclick="showCal(this);">
                                        <input id="c11" type="checkbox" class="mr5">学校：
                                    </label>
                                    <input id="c1" name="school" type="text" onkeypress="return K()" class="input-name" placeholder="请输入学校名称，可不写">
                                </li>
                                <li class="mb35">
                                    <label data-t="1" onclick="showCal(this);"><input id="c21" type="checkbox" class="mr5">地址：</label>
                                    <input id="c2" name="addr" type="text" onkeypress="return K()" class="input-name" placeholder="请输入地址，可不写">
                                </li>
                                <li>
                                    <label data-t="1" onclick="showCal(this);">
                                        <input id="c31" type="checkbox" class="mr5">电话：
                                    </label>
                                    <input id="c3" name="Phone" type="text" onkeypress="return K()" class="input-name mr5" placeholder="请输入电话，可不写">
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
                <div class="handle font14 auto mt30">
                    <span class="submit" id="nextStep">确认</span>
                </div>
            </form>
        </div>
    </div>
</div>
<!--测评设置弹框结束-->

<script src="//hm.baidu.com/hm.js?edc618f636756545b5b20459cdf70c85"></script><script id="popA" type="text/x-jquery-tmpl">

    <ul class="sub-box overflow mt20">
        <li class="mb15">
            <i class="book-icon mr10"></i>@{{= SubjectIDN}}
    </li>
    <li class="pl80 mb15">
        <span>原始课时：</span>
        <div class="change-num-box">
            <i onclick="sub('a@{{= PaperID}}')" class="subtraction">-</i>
                <span data-edit="1" id="a@{{= PaperID}}" class="red inline w40" contenteditable="true" oncontextmenu="return false;" onkeyup="Sum();" onkeypress="return S(2);" onpaste="return false;">@{{= V}}</span>
                <i onclick="add('a@{{= PaperID}}')" class="add">+</i>
            </div>
        </li>
        <li class="pl80 mb15  overflow">
            <span class="left">知识模块：</span>
            <div class="left w284 font12 ">
                <p class="line18">
                    @{{each(i,j) Points}}
    @{{if i==0}}
    @{{else}}
    、
    @{{/if}}@{{= j.PointName}}（<span class="colG">@{{= j.ClassHour}}</span>）
                    @{{/each}}
    </p>
</div>
</li>
</ul>

</script>

<script id="infos" type="text/x-jquery-tmpl">
    <div>
        <span>姓名：@{{= TempName}}</span>
        <span class="ml150">性别：@{{= GenderN}}</span>
        <span class="ml150">年龄：@{{= Age}}</span>
        <span id="phoneBr"></span>
        <span class="ml150" id="phoneNum">电话：@{{= Phone}}</span>
    </div>
    <div>
        <span>学校：@{{= School}}</span>
    </div>
    <div>住址：@{{= Adddress}}</div>
</script>

<script id="chart2-datas" type="text/x-jquery-tmpl">

    <tr>
        @{{each(i,j) V}}
    <td>
        @{{if j.CSS}}
    <i class="square ico bg@{{= j.CSS}}"></i>
            @{{else}}
    <i class="square "></i>
    @{{/if}}
    @{{= j.V}}
    </td>
    @{{/each}}
    </tr>

</script>


<script id="topA" type="text/x-jquery-tmpl">

    @{{each(i,j) Data.Sub}}

    <tr>
        <td>@{{= j.StageSubN}}</td>
        ${topPoints(j.SubGrasp)}
        <td style="padding-left:10px; text-align:left">
            知识模块（@{{= e0Sub.length}}） :
            @{{each(x,y) e0Sub}}
    @{{= y.ParentPointName}}
    @{{/each}}
    </td>
</tr>

@{{/each}}


    @{{each(i,j) Data.En}}

    <tr>
        <td>@{{= j.ExamName}}</td>
        <td style="padding-left:10px; text-align:left">
            维度（${GetDimCount(j.EnInfo)}） :
            @{{each(x,y) j.EnInfo}}
    @{{if x==0}}@{{= y.DimName}}
    @{{else}}
    @{{if lastDim==y.DimName}}
    @{{else}}
    、@{{= y.DimName}}
    @{{/if}}
    @{{/if}}
    @${GetDim(y.DimName)}
    @{{/each}}
    </td>
</tr>

@{{/each}}


</script>


<script id="subA" type="text/x-jquery-tmpl">


    <div class="item item-subject">
        <!--从这里开始是一个学科-->
        <div class="bold">科目：<span>@{{= StageSubN}}</span></div>
        <div>
            您本科目此次测评成绩：<i class="red"><span>@{{= ResultLevel}}</span></i>
        </div>
        <div class="center mb10">划分标准</div>

        <table class="report-table">
            <thead class="noprintthead">
                <tr>
                    <th>正确率</th>
                    <th>0&lt;E&lt;60%</th>
                    <th>60% ≤D&lt;70%</th>
                    <th>70% ≤C&lt;80%</th>
                    <th>80% ≤B&lt;90%</th>
                    <th>90% ≤A</th>
                </tr>

            </thead>
            <tr class="printthead">
                <th>正确率</th>
                <th>0&lt;E&lt;60%</th>
                <th>60% ≤D&lt;70%</th>
                <th>70% ≤C&lt;80%</th>
                <th>80% ≤B&lt;90%</th>
                <th>90% ≤A</th>
            </tr>

            <tbody>
                <tr>
                    <td>等级</td>
                    <td>E</td>
                    <td>D</td>
                    <td>C</td>
                    <td>B</td>
                    <td>A</td>
                </tr>
            </tbody>
        </table>

        <div class="bold mb10 mt20">试卷分析</div>
        <div>①. 知识掌握度分析：</div>
        <div>说明：主要反映出学生对本次测评所考察的知识模块的达标情况及达标率，并提供本次测评包括知识模块对应的知识点的重要程度和所占的分值等相关信息。</div>
        <div style="height: 300px; width: 100%; margin: 20px 0;" id="pointWeightChart@{{= MeasureID}}"></div>

        <table class="master-degree report-table">
            <thead class="noprintthead">
                <tr class="noprintthead">
                    <th>掌握程度</th>
                    <th>知识点</th>
                    <th>重要程度</th>
                    <th>知识点等级</th>
                    <th>考试大纲预估分值</th>
                    <th>总计</th>
                </tr>
            </thead>
            <tr class="printthead">
                <th>掌握程度</th>
                <th>知识点</th>
                <th>重要程度</th>
                <th>知识点等级</th>
                <th>考试大纲预估分值</th>
                <th>总计</th>
            </tr>
            <tbody>
                @{{each(i,j) SubGrasp}}

    @{{if Imp1==j.PCN}}

    <tr>
        <td>@{{= j.PointName}}</td>
                    <td>@{{= j.Degree}}</td>
                    <td>@{{= j.PointLevel}}</td>
                    <td>@{{= j.EstimateValue}}分</td>
                </tr>

                @{{else}}
    <tr>
        ${GetImpValue(j.PCN,SubGrasp)}
        <td rowspan="@{{= rowspanV}}" class="b">@{{= j.PCN}}</td>
                    <td>@{{= j.PointName}}</td>
                    <td>@{{= j.Degree}}</td>
                    <td>@{{= j.PointLevel}}</td>
                    <td>@{{= j.EstimateValue}}分</td>
                    <td class="ss" rowspan="@{{= rowspanV}}">@{{= EstimateValueV}}分</td>
                </tr>

                @{{/if}}

    ${GetImpPoint(j.PCN)}

    @{{/each}}

    ${GetImpEmpty()}
</tbody>
</table>
<div class="zwcdbg" style="display: none">
<table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="580" style="width: 435.35pt; border-collapse: collapse; mso-yfti-tbllook: 1184;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    mso-padding-alt: 0cm 0cm 0cm 0cm">
    <tbody>
        <tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes">
            <td style="border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                <p class="MsoNormal" align="center" style="margin-bottom: 10.0pt; text-align: center">
                    <b><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">掌握程度</span></b><b><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></b>
                </p>
            </td>
            <td style="border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                <p class="MsoNormal" align="center" style="margin-bottom: 10.0pt; text-align: center">
                    <b><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">考点</span></b><b><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></b>
                </p>
            </td>
            <td style="border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                <p class="MsoNormal" align="center" style="margin-bottom: 10.0pt; text-align: center">
                    <b><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">重要程度</span></b><b><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></b>
                </p>
            </td>
            <td style="border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                <p class="MsoNormal" align="center" style="margin-bottom: 10.0pt; text-align: center">
                    <b><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">考点等</span></b><b><span style="font-family: 宋体; mso-bidi-font-family: PMingLiU">级</span></b><b><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></b>
                </p>
            </td>
            <td style="border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                <p class="MsoNormal" align="center" style="margin-bottom: 10.0pt; text-align: center">
                    <b><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">考</span></b><b><span style="font-family: 宋体; mso-bidi-font-family: PMingLiU">试</span></b><b><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">大</span></b><b><span style="font-family: 宋体; mso-bidi-font-family: PMingLiU">纲预</span></b><b><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">估分</span></b><b><span style="font-family: 宋体; mso-bidi-font-family: PMingLiU">值</span></b><b><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></b>
                </p>
            </td>
            <td width="108" style="width: 81.35pt; border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                <p class="MsoNormal" align="center" style="margin-bottom: 10.0pt; text-align: center">
                    <b><span style="font-family: 宋体; mso-bidi-font-family: PMingLiU">总计</span></b><b><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></b>
                </p>
            </td>
        </tr>
        @{{each(i,j) SubGrasp}}

    @{{if Imp1==j.PCN}}
    <tr style="mso-yfti-irow: 1">
        <td style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= j.PointName}}</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>
                        <td style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= j.Degree}}</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>
                        <td style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= j.PointLevel}}</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>
                        <td style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= j.EstimateValue}}分</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>
                    </tr>
                    @{{else}}
    <tr style="mso-yfti-irow: 1">
        ${GetImpValue(j.PCN,SubGrasp)}

        <td rowspan="@{{= rowspanV}}" style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= j.PCN}}</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>

                        <td style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= j.PointName}}</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>

                        <td style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= j.Degree}}</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>

                        <td style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= j.PointLevel}}</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>

                        <td style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= j.EstimateValue}}分</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>

                        <td rowspan="@{{= rowspanV}}" style="border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .25pt; mso-border-alt: solid windowtext .25pt; padding: 0cm 3.0pt 0cm 3.0pt">
                            <p class="MsoNormal" style="margin-bottom: 10.0pt"><span style="font-family: 宋体; mso-bidi-font-family: &quot;MS UI Gothic&quot;">@{{= EstimateValueV}}分</span><span lang="EN-US" style="font-family: 宋体"><o:p></o:p></span></p>
                        </td>
                    </tr>

                    @{{/if}}

    ${GetImpPoint(j.PCN)}

    @{{/each}}

    ${GetImpEmpty()}
</tbody>
</table>
</div>
<div id="pointGotChart1@{{= MeasureID}}" class="mt20" style="width: 100%; height: 300px;"></div>
        <div class="light-line"></div>

        <div class="mt20">②. 试卷难度分析</div>
        <div class="mb30">说明：主要是分析组成试卷的试题的难度分布和数量分布，以及学生在每种难度试题上的答题正确率，从而反映学生对各难度题目的学习和掌握程度，为教师设计针对该学生提分的教学方案提供知识相关的重要参考依据。</div>
        <div class="clearFix">
            <table class="report-table left" style="width: 540px;">
                <thead class="noprintthead">
                    <tr>
                        <th>难度档</th>
                        <th>试题总数</th>
                        <th>答对题数</th>
                        <th>正确率</th>
                        <th>作答时间</th>
                    </tr>
                </thead>
                <tr class="printthead">
                    <th>难度档</th>
                    <th>试题总数</th>
                    <th>答对题数</th>
                    <th>正确率</th>
                    <th>作答时间</th>
                </tr>
                <tbody>

                    @{{each(i,j) SubDiff}}
    <tr>
        <td>@{{= j.DiffictyName}}</td>
                        <td>@{{= j.TotalCount}}</td>
                        <td>@{{= j.RightCount}}</td>
                        <td>@{{= j.RightRate}}%</td>
                        <td>@{{= j.AnswerTime}}秒</td>
                    </tr>
                    @{{/each}}

    </tbody>
</table>
<div id="pointDiffChart@{{= MeasureID}}" class="left" style="width: 500px; height: 195px;"></div>
        </div>
        <div id="pointRightChart@{{= MeasureID}}" style="width: 100%; height: 330px;"></div>
        <!--一个学科结束-->
    </div>

</script>


<script id="enA" type="text/x-jquery-tmpl">

    <div class="pl30 pr30">
        <p class="b F16 mt30 ">类型：<span>@{{= ExamName}}</span></p>
        <h5 class="b mt30 lh40">a 根据学能测试：</h5>
        <p class="lh25">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@{{html ReportDescResult}}</span>如下图：
        </p>
    </div>
    <div id="divImg@{{= MeasureID}}">
        <div style="height: 400px; width: 100%;" id="chart2@{{= MeasureID}}">

        </div>
        <div style="margin-top: -50px">
            <table class="report-table my_table" style="width: 88%; margin: auto;">
                <tbody id="chart2-data@{{= MeasureID}}"></tbody>
            </table>
        </div>
    </div>
    <div class="item">
        <h5 class="b mt30 lh40">b 我的维度说明：</h5>
        <table class="report-table center" cellpadding="0" cellspacing="0">
            <thead class="noprintthead">
                <tr>
                    <th class="wid_20">包含维度</th>
                    <th class="wid_10">结果</th>
                    <th class="wid_70">详细分析</th>
                </tr>
            </thead>
            <tr class="printthead">
                <th class="wid_20">包含维度</th>
                <th class="wid_10">结果</th>
                <th class="wid_70">详细分析</th>
            </tr>
            <tbody>

                @{{each(i,j) EnInfo}}
    @{{if lD==DimName}}
    @{{else}}
    <tr>
        <td><span class="star middle"></span><span class="middle">@{{= DimName}}</span> </td>
                    <td>@{{= Description}}</td>
                    <td><div style="text-align: left; line-height: 35px; ">@{{html LocalDescription}}</div></td>
                </tr>
                @{{/if}}

    ${GetDN(DimName)}

    @{{/each}}

    ${GetDNEmpty()}

</tbody>
</table>
</div>

</script>



<script id="bottomPort" type="text/x-jquery-tmpl">
    <thead class="noprintthead">
        <tr>
            <th class="w100">学科</th>
            <th class="w100">教学目标</th>
            @{{if MM=='1' && P.IsSuggestion}}
    <th class="w100">推荐课时</th>
    @{{else}}
    <th class="w100" style="display: none">推荐课时</th>
    @{{/if}}
    <th class="w766">辅导策略</th>
</tr>
</thead>
<tr class="printthead">
<th class="w100">学科</th>
<th class="w100">教学目标</th>
@{{if MM=='1' && P.IsSuggestion}}
    <th class="w100">推荐课时</th>
    @{{else}}
    <th class="w100" style="display: none">推荐课时</th>
    @{{/if}}
    <th class="w766">辅导策略</th>
</tr>
<tbody>
    @{{each(i,j) Sub}}


    <tr>
        <td>@{{= j.SubjectIDN}}</td>
            <td>@{{= j.ResultLevelN}}</td>
            @{{if MM=='1' && P.IsSuggestion}}
    <td>@{{= j.TotalHour}}</td>
            @{{else}}
    <td style="display:none;">@{{= j.TotalHour}}</td>
            @{{/if}}
    <td style="text-align: left; line-height: 30px; ">
        <pre style="white-space: pre-wrap;">@{{html j.ReportDescResult}}</pre>
            </td>
        </tr>

        @{{/each}}
    </tbody>
</script>

<script id="popB" type="text/x-jquery-tmpl">

    <div class="mb15 mt15">
        <i class="book-icon mr10"></i>@{{= SubjectIDN}}
    </div>
    <div class="line"></div>
    <table class="table" style="text-align: center;">
        <thead class="noprintthead">
            <tr>
                <th style="text-align: left; width: 120px;">难度档</th>
                @{{each(i,j) Diffs}}
    <th style="text-align: center;">@{{= j.DiffictyName}}</th>
                @{{/each}}
    </tr>
</thead>
<tr class="printthead">
    <th style="text-align:left; width:120px;">难度档</th>
    @{{each(i,j) Diffs}}
    <th style="text-align:center;">@{{= j.DiffictyName}}</th>
            @{{/each}}
    </tr>
    <tbody>
        <tr>
            <td style="text-align:left; width:120px;">目标正确率（%）</td>
            @{{each(i,j) Diffs}}
    <td><span data-edit="1" class="red inline w40" style="border:1px solid #dcdcdc; text-align:center;overflow: hidden;height:20px;vertical-align: middle;line-height:20px;max-width: 200px" contenteditable="true" data-diff="b" data-paperid="@{{= PaperID}}" data-code="@{{= j.DiffictyCode}}" onkeyup="Sum();" onkeypress="return S(1);" onpaste="return false;" type="text">@{{= j.UpdateExpectRate}}</span></td>
                @{{/each}}
    </tr>
    <tr>
        <td style="text-align:left; width:120px;">学生正确率（%）</td>
        @{{each(i,j) Diffs}}
    <td><span class="colY">@{{= j.RightRate}}</span></td>
                @{{/each}}
    </tr>
</tbody>
</table>
</script>

<script id="popD" type="text/x-jquery-tmpl">

    <li>
        <div class="mb15 mt15">
            <i class="book-icon mr10"></i>@{{= SubjectIDN}}
    </div>
    <textarea class="sub-text" data-edit="1" rows="10" id="popD1@{{= PaperID}}" data-paperid="@{{= PaperID}}" style="width:400px; height:140px; overflow-x:hidden;">@{{= ReportDescResult}}</textarea>
    </li>
</script>
<div style="display:none" id="downloadform"></div>



<script src="http://ex.mofangge.com/bundle/js/jquery-2.2.0.min.js"></script>
<script src="http://ex.mofangge.com/bundle/js/vendor.js"></script>


<script>

    var chartImgs = { pieChart: [], gotChart: [], pointDiffChart: [], pointRightChart: [], evalChart: [], evalChartImg: [] };

    var all;

    var MeasureIDS = "{{ request()->query('id') }}";

    var MM = '0';

    var ReturnUrl = '/OrgZiXun/ZiXunGuanLi/IndexCounselor';

    var lD = "";
    var Imp1 = "";
    var rowspanV = 0;
    var EstimateValueV = 0;
    var lastDim = "";


    var divC = "";

    var e0Sub = [];

    //学科知识模块
    var e0SubPoint = "";

    function topPoints(e0) {

        e0Sub = [];
        e0SubPoint = "";
        for (var i = 0; i < e0.length; i++) {
            if (e0SubPoint == e0[i].ParentPointName);
            else {
                var e0V = new Array();
                if (i == 0)
                    e0V.ParentPointName = e0[i].ParentPointName;
                else
                    e0V.ParentPointName = "、" + e0[i].ParentPointName;
                e0Sub.push(e0V);
            }
            e0SubPoint = e0[i].ParentPointName;
        }
        return "";
    }


    function GetDimCount(e0) {
        divC = "";
        var j = 0;
        for (var i = 0; i < e0.length; i++) {
            if (divC == e0[i].DimName);
            else {
                j++;
            }
            divC = e0[i].DimName;
        }
        return j;
    }
    function GetDN(e0) {
        lD = e0;
        return "";
    }

    function GetDNEmpty() {
        lD = "";
        return "";
    }


    ///////////////////
    function GetImpEmpty() {
        Imp1 = "";
        rowspanV = 0;
        EstimateValueV = 0;
        return "";
    }

    function GetImpPoint(e0) {
        Imp1 = e0;
        return "";
    }

    function GetImpValue(e0, e1) {

        rowspanV = 0;
        EstimateValueV = 0;

        var allGrasp = e1;

        for (var i = 0; i < e1.length; i++) {
            if (allGrasp[i].PCN == e0) {
                rowspanV += 1;
                EstimateValueV += parseFloat(allGrasp[i].EstimateValue);
            }
        }

        return "";

    }

    function GetDim(e0) {
        lastDim = e0;
        return "";
    }

    function Sum() {
        var jV = 0;
        $("#popA1 span[data-edit]").each(function (i, j) {
            if (j) {
                if (isNaN($(j).text()) || $(j).text() == "");
                else {
                    jV += parseFloat($(j).text());
                }
            }
        });
        $("#Sum").html(jV);
    }

    function K()//特殊字符
    {
        var keynum = event.keyCode;
        if (keynum == 32 || keynum == 34 || keynum == 39 || keynum == 47 || keynum == 92 || keynum == 58 || keynum == 59 || keynum == 60 || keynum == 62 || keynum == 63 || keynum == 91 || keynum == 93 || keynum == 123 || keynum == 124 || keynum == 125)
            return false;
    }


    function sub(f) {
        var t = $("#" + f).text();

        if (t == "" || t == "1")
            return;

        t = parseFloat(t);
        $("#" + f).text(t - 1);

        var t0 = $("#Sum").text();
        t0 = parseFloat(t0) - 1;
        $("#Sum").text(t0);
    }


    function add(f) {
        var t = $("#" + f).text();
        if (t == "")
            t = 0;
        if (t == "999")
            return;
        t = parseFloat(t);
        $("#" + f).text(t + 1);
        var t0 = $("#Sum").text();
        t0 = parseFloat(t0) + 1;
        $("#Sum").text(t0);
    }


    function S(e0) {
        var keynum = event.keyCode;
        if (keynum >= 48 && keynum <= 57) {
            document.execCommand("Cut", false, true);
            var nT = $(event.currentTarget).text();
            //第一个字符不能为空，或者只能有3位字符
            if (nT == "" && keynum == 48)
                return false;
            else if (nT.length > e0) {
                //
                if (e0 == 1) {
                    if (nT.toString() == "10" && keynum == 48)//100可以输入
                        return true;
                }
                //
                return false;
            }
            else
                return true;
        }
        else
            return false;
    }

    function activeInfo(e0, e1) {
        if ($(e0).hasClass("nav-on"));
        else {
            $("#popInfo [data-active]").removeClass("nav-on").addClass("bt");
            $(("#popInfo [data-active='" + e1 + "']")).addClass("nav-on");
            $("#popInfo [data-content]").hide();
            $(("#popInfo [data-content='" + e1 + "']")).show();
        }
    }

    function showCal(e0) {
        if ($(e0).children("input:checked").length < 1) {
            if ($(e0).attr("data-t") == "1") {
                $(e0).next("input").attr({ "disabled": "" });
            }
        }
        else {
            if ($(e0).attr("data-t") == "1") {
                $(e0).next("input").removeAttr("disabled");
            }
        }
    }

</script>
<script src="{{ asset('bundle/js/Report.js') }}"></script>



</body></html>