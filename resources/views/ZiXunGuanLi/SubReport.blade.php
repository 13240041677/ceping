@extends('layouts.master')

@section('meta')
    <link href="{{ asset('bundle/css/see-subject-evaluation.css') }}" rel="stylesheet">
    {{--<link href="{{ asset('bundle/css/shade.css') }}" rel="stylesheet">--}}
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">



                <div class="shade">
                    <input type="hidden" id="subjectbnum" name="subjectbnum" value="03">
                    <div class="progress-box">
                        <p class="white font14 line25 center" id="shade-download-msg">正在加载中....</p>
                        <div class="progress"></div>
                    </div>
                </div>
                <!--正文（main-content可修改宽度）-->

                <div id="main-content" class="overflow">
                    <div class="mt50 black">
                        <p class="crumb-color font16 mb10">
                            <a class="black head-a" href="/OrgZiXun/ZiXunGuanLi/IndexCounselor" id="cepinghref">测评档案</a>&nbsp;&nbsp; &gt;
                            <span class="black "><span id="TempName"></span>同学的<span id="SubjectID"></span>测评报告</span>
                        </p>
                    </div>
                    <div class="clearFix">
                        <div class="right mb10">
                            <div class="handle-btn" id="printExamPaper">

                                <span class="font14">查看答题记录</span>
                            </div>

                            <div class="handle-btn" id="downExamReport">
                                <span class="download middle"></span>
                                <span id="printSmartReport" class="font14">生成综合报告</span>
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>

                    <div class="item-wrap">
                        <div class="font16 mb10">一、测评内容</div>
                        <div class="item">
                            <div>
                                <span>年级：<span id="StageIDN"></span></span>
                                <span class="ml150">科目：<span id="Sub"></span></span>
                            </div>
                            <div>知识模块：<span id="points"></span></div>
                        </div>
                    </div>
                    <div class="light-line"></div>

                    <div class="item-wrap">
                        <div class="font16 mb10">二、测评结果</div>
                        <div class="item">
                            <div class="bold">科目：<span id="StageSubN"></span></div>
                            <div>
                                您本科目此次测评成绩：<i class="red"><span id="levelSub"></span></i>
                            </div>
                            <div class="center mb10">划分标准</div>
                            <table class="report-table">
                                <thead>
                                <tr>
                                    <th>考试分数段</th>
                                    <th>90%（含）以上</th>
                                    <th>80%（含）~90%</th>
                                    <th>70%（含）~80%</th>
                                    <th>60%（含）~70%</th>
                                    <th>不足60%</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>等级</td>
                                    <td>A</td>
                                    <td>B</td>
                                    <td>C</td>
                                    <td>D</td>
                                    <td>E</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="light-line"></div>

                    <div class="item-wrap">
                        <div class="font16 mb10">三、试卷分析</div>
                        <div class="item">
                            <div>①. 知识掌握度分析：</div>
                            <div>说明：主要反映出学生对本次测评所考察的知识模块的达标情况及达标率，并提供本次测评包括知识模块对应知识点的重要程度和所占的分值等相关信息。</div>
                            <div id="pointWeightChart" style="height: 300px; width: 100%; margin: 20px 0px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1499932648693"><div style="position: relative; overflow: hidden; width: 1160px; height: 300px;"><canvas width="2320" height="600" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 1160px; height: 300px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div><div></div></div>
                            <table id="pointGotTable" class="master-degree report-table">
                                <thead>
                                <tr>
                                    <th>掌握程度</th>
                                    <th>知识点</th>
                                    <th>重要程度</th>
                                    <th>知识点等级</th>
                                    <th>考试大纲预估分值</th>
                                    <th>总计</th>
                                </tr>
                                </thead>
                                <tbody id="bottomImps">
                                </tbody>
                            </table>
                            <div id="pointGotChart1" class="mt20" style="width: 100%; height: 300px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1499932648694"><div style="position: relative; overflow: hidden; width: 1160px; height: 300px;"><canvas width="2320" height="600" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 1160px; height: 300px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div><div></div></div>
                            <div class="light-line"></div>
                        </div>

                        <div class="item" style="margin-top: 30px;">
                            <div>②. 试卷难度分析</div>
                            <div class="mb30">说明：主要是分析组成试卷的试题的难度分布和数量分布，以及学生在每种难度试题上的答题正确率，从而反映学生对各难度题目的学习和掌握程度，为教师设计针对该学生提分的教学方案提供知识相关的重要参考依据。</div>
                            <div class="clearFix">
                                <table id="pointDiffTable" class="report-table left" style="width: 540px;">
                                    <thead>
                                    <tr>
                                        <th>难度档</th>
                                        <th>试题总数</th>
                                        <th>答对题数</th>
                                        <th>正确率</th>
                                        <th>作答时间</th>
                                    </tr>
                                    </thead>
                                    <tbody id="bottomDiffs">

                                    </tbody>
                                </table>
                                <div id="pointDiffChart" class="left" style="width: 500px; height: 195px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1499932648695"><div style="position: relative; overflow: hidden; width: 500px; height: 195px;"><canvas width="1000" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 500px; height: 195px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div><div></div></div>
                            </div>
                            <div id="pointRightChart" style="width: 100%; height: 280px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1499932648696"><div style="position: relative; overflow: hidden; width: 1160px; height: 280px;"><canvas width="2320" height="560" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 1160px; height: 280px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div><div></div></div>
                        </div>
                    </div>
                    <div class="light-line"></div>

                    <div class="item-wrap">
                        <div class="font16 mb20">四、推荐及建议</div>
                        <div class="item">
                            <table class="master-degree report-table">
                                <thead>
                                <tr>
                                    <th><div class="w100">学科</div></th>
                                    <th><div class="w100">教学目标</div></th>
                                    <th><div class="w100">推荐课时</div></th>
                                    <th>辅导策略</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="bottomSubs">

                                </tr>
                                </tbody>
                            </table>
                            <div class="mt20">
                                测评时间：
                                <span id="EditTimeN" class="mr30"></span>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- 请勾选要下载的测评报告项弹框 start-->
                {{--<div class="download-report popup font14  hidden add" id="popItem">--}}
                    {{--<h5 class="center font16 popuphead">--}}
                        {{--请勾选要下载的测评报告项--}}
                        {{--<img id="popClose" src="../../../bundle/img/close.png" class="popclose cursor">--}}
                    {{--</h5>--}}
                    {{--<div class="popupbox pt30">--}}
                        {{--<div class="pop-content mlr40 font12">--}}
                            {{--<ul class="reports" id="popItemContent">--}}

                            {{--</ul>--}}
                        {{--</div>--}}
                        {{--<div class="handle font14 auto mt20 pb20">--}}
                            {{--<span class="submit" id="nextOpt">下一步</span>--}}
                            {{--<input type="hidden" id="TId" name="TId" value="0">--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}
                <div class="download-report popup font14  hidden add" id="popItem">
                    <h5 class="center font16 popuphead">
                        请勾选要下载的测评报告项
                        <img id="popClose" src="../../../bundle/img/close.png" class="popclose cursor">
                    </h5>
                    <div class="popupbox pt30">
                        <div class="pop-content mlr40 font12">
                            <ul class="reports" id="popItemContent">

                            </ul>
                        </div>
                        <div class="handle font14 auto mt20 pb20">
                            <span class="submit" id="nextOpt">下一步</span>
                            <input type="hidden" id="TId" name="TId" value="0">
                        </div>
                    </div>
                </div>
                <!-- 请勾选要下载的测评报告项弹框 end-->

                <input id="org-paperid" value="{{ request()->query('PaperID') }}" type="hidden">

                <script id="popItems" type="text/x-jquery-tmpl">
                    <li>
                        <label data-paperid="@{{= PaperID}}-@{{= ExamType}}">
                            <input class="middle" type="checkbox" />
                            <span class="ml5">@{{= ExamTypeN}}</span>
                        </label>
                    </li>
                </script>
                <script id="bottomSub" type="text/x-jquery-tmpl">

    <td>@{{= SubjectIDN}}</td>
    <td>@{{= ResultLevelN}}</td>
    <td>@{{= TotalHour}}</td>
    <td style="text-align: left; line-height: 25px; "><div><pre style="white-space: pre-wrap;">@{{html ReportDescResult}}</pre></div></td>

</script>

                <script id="bottomImp" type="text/x-jquery-tmpl">

    @{{if Imp1==PCN}}

                    <tr>
                        <td>@{{= PointName}}</td>
        <td>@{{= Degree}}</td>
        <td>@{{= PointLevel}}</td>
        <td>@{{= EstimateValue}}分</td>
    </tr>

    @{{else}}

                    <tr>
                        ${GetImpValue(PCN)}
                        <td rowspan="@{{= rowspanV}}" class="b">@{{= PCN}}</td>
        <td>@{{= PointName}}</td>
        <td>@{{= Degree}}</td>
        <td>@{{= PointLevel}}</td>
        <td>@{{= EstimateValue}}分</td>
        <td class="ss" rowspan="@{{= rowspanV}}">@{{= EstimateValueV}}分</td>
    </tr>

    @{{/if}}

                    ${GetImpPoint(PCN)}

                </script>

                <script id="bottomDiff" type="text/x-jquery-tmpl">
    <tr>
        <td>@{{= DiffictyName}}</td>
        <td>@{{= TotalCount}}</td>
        <td>@{{= RightCount}}</td>
        <td>@{{= RightRate}}%</td>
        <td>@{{= AnswerTime}}秒</td>
    </tr>

</script>

                <script id="bottomSub" type="text/x-jquery-tmpl">

    <td>@{{= SubjectIDN}}</td>
    <td>@{{= ResultLevelN}}</td>
    <td>@{{= TotalHour}}</td>
    <td style="text-align: left; line-height: 25px; "><div class="tl p15"><pre>@{{html ReportDescResult}}</pre></div></td>

</script>





            </div>

        </div>
    </div>
@endsection
@section('javaScript')
    <script>

        var Imp1 = "";

        var all;

        var rowspanV = 0;

        var EstimateValueV = 0;

        var subject = "";

        var PaperID = $("#org-paperid").val();


        function GetImpPoint(e0) {
            Imp1 = e0;
            return "";
        }

        function GetImpValue(e0) {
            rowspanV = 0;
            EstimateValueV = 0;

            var allGrasp = all.Data.SubGrasp;

            for (var i = 0; i < allGrasp.length; i++) {
                if (allGrasp[i].PCN == e0) {
                    rowspanV += 1;
                    EstimateValueV += parseFloat(allGrasp[i].EstimateValue);
                }
            }
            return "";

        }

    </script>
    <script src="{{ asset('bundle/js/SubReport.js') }}"></script>
@endsection