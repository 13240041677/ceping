@extends('layouts.master')

@section('meta')
<link href="{{ asset('bundle/css/filterTest.css') }}" rel="stylesheet">
<link href="{{ asset('bundle/css/quemain.css') }}" rel="stylesheet">
<link href="{{ asset('bundle/css/paging.css') }}" rel="stylesheet">
<style type="text/css">.MathJax_Hover_Frame {border-radius: .25em; -webkit-border-radius: .25em; -moz-border-radius: .25em; -khtml-border-radius: .25em; box-shadow: 0px 0px 15px #83A; -webkit-box-shadow: 0px 0px 15px #83A; -moz-box-shadow: 0px 0px 15px #83A; -khtml-box-shadow: 0px 0px 15px #83A; border: 1px solid #A6D ! important; display: inline-block; position: absolute}
    .MathJax_Menu_Button .MathJax_Hover_Arrow {position: absolute; cursor: pointer; display: inline-block; border: 2px solid #AAA; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px; font-family: 'Courier New',Courier; font-size: 9px; color: #F0F0F0}
    .MathJax_Menu_Button .MathJax_Hover_Arrow span {display: block; background-color: #AAA; border: 1px solid; border-radius: 3px; line-height: 0; padding: 4px}
    .MathJax_Hover_Arrow:hover {color: white!important; border: 2px solid #CCC!important}
    .MathJax_Hover_Arrow:hover span {background-color: #CCC!important}
</style>
<style type="text/css">#MathJax_About {position: fixed; left: 50%; width: auto; text-align: center; border: 3px outset; padding: 1em 2em; background-color: #DDDDDD; color: black; cursor: default; font-family: message-box; font-size: 120%; font-style: normal; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; border-radius: 15px; -webkit-border-radius: 15px; -moz-border-radius: 15px; -khtml-border-radius: 15px; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
    #MathJax_About.MathJax_MousePost {outline: none}
    .MathJax_Menu {position: absolute; background-color: white; color: black; width: auto; padding: 5px 0px; border: 1px solid #CCCCCC; margin: 0; cursor: default; font: menu; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; -khtml-border-radius: 5px; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
    .MathJax_MenuItem {padding: 1px 2em; background: transparent}
    .MathJax_MenuArrow {position: absolute; right: .5em; padding-top: .25em; color: #666666; font-size: .75em}
    .MathJax_MenuActive .MathJax_MenuArrow {color: white}
    .MathJax_MenuArrow.RTL {left: .5em; right: auto}
    .MathJax_MenuCheck {position: absolute; left: .7em}
    .MathJax_MenuCheck.RTL {right: .7em; left: auto}
    .MathJax_MenuRadioCheck {position: absolute; left: .7em}
    .MathJax_MenuRadioCheck.RTL {right: .7em; left: auto}
    .MathJax_MenuLabel {padding: 1px 2em 3px 1.33em; font-style: italic}
    .MathJax_MenuRule {border-top: 1px solid #DDDDDD; margin: 4px 3px}
    .MathJax_MenuDisabled {color: GrayText}
    .MathJax_MenuActive {background-color: #606872; color: white}
    .MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus {background-color: #E8E8E8}
    .MathJax_ContextMenu:focus {outline: none}
    .MathJax_ContextMenu .MathJax_MenuItem:focus {outline: none}
    #MathJax_AboutClose {top: .2em; right: .2em}
    .MathJax_Menu .MathJax_MenuClose {top: -10px; left: -10px}
    .MathJax_MenuClose {position: absolute; cursor: pointer; display: inline-block; border: 2px solid #AAA; border-radius: 18px; -webkit-border-radius: 18px; -moz-border-radius: 18px; -khtml-border-radius: 18px; font-family: 'Courier New',Courier; font-size: 24px; color: #F0F0F0}
    .MathJax_MenuClose span {display: block; background-color: #AAA; border: 1.5px solid; border-radius: 18px; -webkit-border-radius: 18px; -moz-border-radius: 18px; -khtml-border-radius: 18px; line-height: 0; padding: 8px 0 6px}
    .MathJax_MenuClose:hover {color: white!important; border: 2px solid #CCC!important}
    .MathJax_MenuClose:hover span {background-color: #CCC!important}
    .MathJax_MenuClose:hover:focus {outline: none}
</style>
<style type="text/css">.MathJax_Preview .MJXf-math {color: inherit!important}
</style>
<style type="text/css">.MJX_Assistive_MathML {position: absolute!important; top: 0; left: 0; clip: rect(1px, 1px, 1px, 1px); padding: 1px 0 0 0!important; border: 0!important; height: 1px!important; width: 1px!important; overflow: hidden!important; display: block!important; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none}
    .MJX_Assistive_MathML.MJX_Assistive_MathML_Block {width: 100%!important}
</style>
<style type="text/css">#MathJax_Zoom {position: absolute; background-color: #F0F0F0; overflow: auto; display: block; z-index: 301; padding: .5em; border: 1px solid black; margin: 0; font-weight: normal; font-style: normal; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; box-shadow: 5px 5px 15px #AAAAAA; -webkit-box-shadow: 5px 5px 15px #AAAAAA; -moz-box-shadow: 5px 5px 15px #AAAAAA; -khtml-box-shadow: 5px 5px 15px #AAAAAA; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
    #MathJax_ZoomOverlay {position: absolute; left: 0; top: 0; z-index: 300; display: inline-block; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
    #MathJax_ZoomFrame {position: relative; display: inline-block; height: 0; width: 0}
    #MathJax_ZoomEventTrap {position: absolute; left: 0; top: 0; z-index: 302; display: inline-block; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
</style>
<style type="text/css">.MathJax_Preview {color: #888}
    #MathJax_Message {position: fixed; left: 1em; bottom: 1.5em; background-color: #E6E6E6; border: 1px solid #959595; margin: 0px; padding: 2px 8px; z-index: 102; color: black; font-size: 80%; width: auto; white-space: nowrap}
    #MathJax_MSIE_Frame {position: absolute; top: 0; left: 0; width: 0px; z-index: 101; border: 0px; margin: 0px; padding: 0px}
    .MathJax_Error {color: #CC0000; font-style: italic}
</style>
<style type="text/css">.MJXp-script {font-size: .8em}
    .MJXp-right {-webkit-transform-origin: right; -moz-transform-origin: right; -ms-transform-origin: right; -o-transform-origin: right; transform-origin: right}
    .MJXp-bold {font-weight: bold}
    .MJXp-italic {font-style: italic}
    .MJXp-scr {font-family: MathJax_Script,'Times New Roman',Times,STIXGeneral,serif}
    .MJXp-frak {font-family: MathJax_Fraktur,'Times New Roman',Times,STIXGeneral,serif}
    .MJXp-sf {font-family: MathJax_SansSerif,'Times New Roman',Times,STIXGeneral,serif}
    .MJXp-cal {font-family: MathJax_Caligraphic,'Times New Roman',Times,STIXGeneral,serif}
    .MJXp-mono {font-family: MathJax_Typewriter,'Times New Roman',Times,STIXGeneral,serif}
    .MJXp-largeop {font-size: 150%}
    .MJXp-largeop.MJXp-int {vertical-align: -.2em}
    .MJXp-math {display: inline-block; line-height: 1.2; text-indent: 0; font-family: 'Times New Roman',Times,STIXGeneral,serif; white-space: nowrap; border-collapse: collapse}
    .MJXp-display {display: block; text-align: center; margin: 1em 0}
    .MJXp-math span {display: inline-block}
    .MJXp-box {display: block!important; text-align: center}
    .MJXp-box:after {content: " "}
    .MJXp-rule {display: block!important; margin-top: .1em}
    .MJXp-char {display: block!important}
    .MJXp-mo {margin: 0 .15em}
    .MJXp-mfrac {margin: 0 .125em; vertical-align: .25em}
    .MJXp-denom {display: inline-table!important; width: 100%}
    .MJXp-denom > * {display: table-row!important}
    .MJXp-surd {vertical-align: top}
    .MJXp-surd > * {display: block!important}
    .MJXp-script-box > *  {display: table!important; height: 50%}
    .MJXp-script-box > * > * {display: table-cell!important; vertical-align: top}
    .MJXp-script-box > *:last-child > * {vertical-align: bottom}
    .MJXp-script-box > * > * > * {display: block!important}
    .MJXp-mphantom {visibility: hidden}
    .MJXp-munderover {display: inline-table!important}
    .MJXp-over {display: inline-block!important; text-align: center}
    .MJXp-over > * {display: block!important}
    .MJXp-munderover > * {display: table-row!important}
    .MJXp-mtable {vertical-align: .25em; margin: 0 .125em}
    .MJXp-mtable > * {display: inline-table!important; vertical-align: middle}
    .MJXp-mtr {display: table-row!important}
    .MJXp-mtd {display: table-cell!important; text-align: center; padding: .5em 0 0 .5em}
    .MJXp-mtr > .MJXp-mtd:first-child {padding-left: 0}
    .MJXp-mtr:first-child > .MJXp-mtd {padding-top: 0}
    .MJXp-mlabeledtr {display: table-row!important}
    .MJXp-mlabeledtr > .MJXp-mtd:first-child {padding-left: 0}
    .MJXp-mlabeledtr:first-child > .MJXp-mtd {padding-top: 0}
    .MJXp-merror {background-color: #FFFF88; color: #CC0000; border: 1px solid #CC0000; padding: 1px 3px; font-style: normal; font-size: 90%}
    .MJXp-scale0 {-webkit-transform: scaleX(.0); -moz-transform: scaleX(.0); -ms-transform: scaleX(.0); -o-transform: scaleX(.0); transform: scaleX(.0)}
    .MJXp-scale1 {-webkit-transform: scaleX(.1); -moz-transform: scaleX(.1); -ms-transform: scaleX(.1); -o-transform: scaleX(.1); transform: scaleX(.1)}
    .MJXp-scale2 {-webkit-transform: scaleX(.2); -moz-transform: scaleX(.2); -ms-transform: scaleX(.2); -o-transform: scaleX(.2); transform: scaleX(.2)}
    .MJXp-scale3 {-webkit-transform: scaleX(.3); -moz-transform: scaleX(.3); -ms-transform: scaleX(.3); -o-transform: scaleX(.3); transform: scaleX(.3)}
    .MJXp-scale4 {-webkit-transform: scaleX(.4); -moz-transform: scaleX(.4); -ms-transform: scaleX(.4); -o-transform: scaleX(.4); transform: scaleX(.4)}
    .MJXp-scale5 {-webkit-transform: scaleX(.5); -moz-transform: scaleX(.5); -ms-transform: scaleX(.5); -o-transform: scaleX(.5); transform: scaleX(.5)}
    .MJXp-scale6 {-webkit-transform: scaleX(.6); -moz-transform: scaleX(.6); -ms-transform: scaleX(.6); -o-transform: scaleX(.6); transform: scaleX(.6)}
    .MJXp-scale7 {-webkit-transform: scaleX(.7); -moz-transform: scaleX(.7); -ms-transform: scaleX(.7); -o-transform: scaleX(.7); transform: scaleX(.7)}
    .MJXp-scale8 {-webkit-transform: scaleX(.8); -moz-transform: scaleX(.8); -ms-transform: scaleX(.8); -o-transform: scaleX(.8); transform: scaleX(.8)}
    .MJXp-scale9 {-webkit-transform: scaleX(.9); -moz-transform: scaleX(.9); -ms-transform: scaleX(.9); -o-transform: scaleX(.9); transform: scaleX(.9)}
    .MathJax_PHTML .noError {vertical-align: ; font-size: 90%; text-align: left; color: black; padding: 1px 3px; border: 1px solid}
</style>
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">


                <input type="hidden" id="SubjectID" name="SubjectID" value="{{ request()->query('SubjectID')}}">
                <input type="hidden" id="ExamID" name="ExamID" value="{{ request()->query('ExamID')}}">
                <input type="hidden" id="StageID" name="StageID" value="{{ request()->query('StageID')}}">
                <input type="hidden" id="edu" name="edu" value="0">
                <input type="hidden" id="artScience" name="artScience" value="0">

                <input type="hidden" id="imgurl" name="imgurl" value="http://ex.mofangge.com">


                <div id="main-content">
                    <div class="crumb mt40 mb20 font16">
                        <a class="cursor head-a black" href="/OrgExam/CreateExam/PaperList">
                            试卷列表
                        </a> &gt; 筛选试题
                    </div>
                    <div class="kuang-kuang">
                        <ul class="filter-title">
                            <li>范围:</li>
                            <li data-id="0" class="actived">公共题库</li>
                            <li data-id="2">机构专属试题</li>
                            <li data-id="1">我收藏的试题</li>
                        </ul>
                    </div>
                    <!--侧面树开始的部分-->
                    <div class="leftTree mt20" style="height: 1975px;">
                        {{--<dl class="">--}}
                            {{--<dt class="on_open" id="0x00000201">名词</dt>--}}
                            {{--<div class="second_tree" style="border-left: none;">--}}
                                {{--<dd class="clickTree" data-pointid="0x0000020101" data-secid="1548" data-did="5080881" data-pointname="名词词义" data-time="1" data-ppointname="名词" data-defaulttime="1">名词词义</dd>--}}
                                {{--<dd data-pointid="0x0000020102" data-secid="1542" data-did="5080881" data-pointname="可数名词" data-time="1" data-ppointname="名词" data-defaulttime="1">可数名词</dd>--}}
                                {{--<dd data-pointid="0x0000020103" data-secid="1544" data-did="5080881" data-pointname="不可数名词" data-time="1" data-ppointname="名词" data-defaulttime="1">不可数名词</dd>--}}
                                {{--<dd data-pointid="0x0000020104" data-secid="1545" data-did="5080881" data-pointname="名词的所有格" data-time="1" data-ppointname="名词" data-defaulttime="1">名词的所有格</dd>--}}
                                {{--<dd data-pointid="0x0000020105" data-secid="1546" data-did="5080881" data-pointname="专有名词" data-time="1" data-ppointname="名词" data-defaulttime="1">专有名词</dd>--}}
                            {{--</div>--}}
                        {{--</dl>--}}
                    </div>

                    <!--侧面树结束的部分-->
                    <!--右面展示区开始的部分-->
                    <div class="rightContent mt20">
                        <ul class="mt20 diff_ul">
                            <li>难度：</li>
                            <li class="actived" value="0">全部</li>
                            <li value="1">容易</li>
                            <li value="2">较易</li>
                            <li value="3">中等</li>
                            <li value="4">较难</li>
                            <li value="5">困难</li>
                        </ul>
                        <ul class="mt20 depross">
                            <li class="actived clickjs0" id="showOrder">默认排序</li>
                            <li class="clickjs1">
                                组卷次数<span class="easyTodif"></span>
                            </li>
                            <li style="border:none" class="clickjs2">
                                由难到易<span class="easyTodif"></span>
                            </li>
                            <li>共计 <span class="actived" id="Qtotal"></span> 道试题</li>
                        </ul>
                        <!--题目和解析部分-->
                        <div id="questionlist">

                        </div>
                        <div id="pagination" class="pagination mt30">

                        </div>
                        <!--右面展示区结束的部分-->
                    </div>
                </div>
                <!--最右面-->
                <div class="rightest">
                    <div class="position_fixed">
                        <div class="already_filter filterAfter">
                            <span id="SelectDone" style="cursor:pointer;">  完  成  筛  选 </span>
                        </div>
                        <span class="mun_span" style="display: none;">0</span>
                        <div class="already_testType alreadyAfter">
                            <span id="selectedquestiontype" style="cursor:pointer;"> 已  选  知识点</span>

                            <div class="need_show" style="display:none;">
                                <div class="relative">
                                    <div id="rightK" class="content"></div>
                                    <div class="handle mt10" style="margin-bottom:10px;margin-top:20px;">
                                        <span class="preSee submit" style="cursor:pointer;">预览</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="goto_top gotoAfter"><span id="backtop" style="cursor:pointer;"> 返  回  顶  部 </span></div>
                    </div>
                </div>




                <!--保存测评试卷开始-->
                <div class="mypopup save_testPaper hidden">
                    <h5 class="center font16 popuphead">
                        保存测评试卷
                        <i class="popclose cursor"></i>
                    </h5>

                    <div class="popupbox">
                        <div class="inline" style="margin-top:25px;">
                            <span class="first_span">试卷名称：</span>
                            <input type="text" placeholder="试卷名称" class="input" id="examName">
                        </div>
                        <div class="mt15">
                            <span class="first_span">总课时：</span>
                            <span id="sumHour">0</span>
                        </div>
                        <div class="mt15">
                            <span class="first_span">详细课时：</span>

                            <ul id="papersum"></ul>

                        </div>
                        <div class="handle mt15 " style="padding-bottom:25px;">
                            <span class="submit sure" id="ConfirmSave">确定</span>
                            <span class="submit sure" id="CancelSave">取消</span>
                        </div>
                    </div>
                </div>
                <!--保存测评试卷结束-->
                <!--试卷预览开始-->
                <div class="mypopup paper_see hidden" id="preSeeShow">
                    <h5 class="center font16 popuphead">
                        试卷预览
                        <i class="popclose cursor"></i>
                    </h5>

                    <div class="popupbox">
                        <h4 class="handle font16" id="titleA"></h4>
                        <div id="titleB">

                        </div>
                    </div>
                </div>
                <!--试卷预览结束-->
                <!--纠错的弹框开始-->
                <div class="mypopup find_wrong hidden">
                    <h5 class="center font16 popuphead">
                        纠错
                        <i class="popclose cursor"></i>
                    </h5>

                    <div class="popupbox">
                        <p>亲，您好：</p>
                        <p>如发现试题中存在任何错误，请及时纠错告知我们，谢谢您的支持！</p>
                        <hr class="mt10">
                        <p class="text_indent mt10">标题：<span class="ml5">试题－4588126</span></p>
                        <p class="mt10 bigimg">
                            问题类型：<select style="width: 250px" id="selType">
                                <option value="14" selected="selected">题文不完整或有错别字和标点符号</option>
                                <option value="15">题文排版混乱或结构不合理</option>
                                <option value="16">知识点不正确</option>
                                <option value="20">题型错误</option>
                                <option value="17">答案错误</option>
                                <option value="19">选项个数不一致</option>
                                <option value="25">其他错误</option>

                            </select>
                        </p>
                        <p class="mt20">问题描述：<textarea class="ml5 input" id="textarea"></textarea></p>
                        <div class="handle mt15">
                            <span class="submit" id="WrongSave">确定</span>
                        </div>
                    </div>
                </div>
                <!--纠错的弹框结束-->

            </div>

        </div>
    </div>
@endsection

@section('javaScript')
    <link href="/bundle/css/popresource.css" rel="stylesheet">
    <link type="text/css" href="/Org/dep/mfgeditorV2/resource/common/style/_core.css" rel="stylesheet">
    <link type="text/css" href="/Org/dep/mfgeditorV2/resource/formulaEditor/air/qaEditor/qaEditor.css" rel="stylesheet">
    <link type="text/css" href="/Org/dep/mfgeditorV2/resource/formulaEditor/air/feEditor/mfgEditor.css?v=1" rel="stylesheet">
    <link href="/bundle/css/tree_org.css" rel="stylesheet">
    <script type="text/javascript">
        var qa_domain = "", static_domain = "/Org/dep/mfgeditorV2/", buildVersion = "?05201dfdasdfasdads1";
    </script>
    <script src="/Org/dep/mfgeditorV2/resource/common/script/lib/jquery-1.8.3.min.js"></script>
    <script src="/Org/dep/mfgeditorV2/resource/common/script/lib/in-min.js"></script>
    <script src="/Org/dep/mfgeditorV2/resource/formulaEditor/air/excanvas.js"></script>
    <script src="/Org/dep/mfgeditorV2/resource/formulaEditor/dist/mfgeditor_core.js"></script>
    <script src="/Org/dep/mfgeditorV2/resource/formulaEditor/air/qaEditor/mfgeditor.js?v=123"></script>
    <script type="text/javascript" src="/Scripts/MyStudent/JqueryTC.js" charset="utf-8"></script>
    <script src="/Scripts/Resource/operationComm.js"></script>
    <script src="/Scripts/Resource/operationQuestion.js"></script>
    <script src="/Org/dep/toole.js"></script>
    <script src="/bundle/js/paperdetail.js"></script>
    <script src="/bundle/js/tree-creal.js"></script>
    <script src="/Scripts/Common/NewBCommon.js"></script>
    <script src="http://ex.mofangge.com/Scripts/Common/ResourceTreeOne.js"></script>
    <script src="http://ex.mofangge.com/Scripts/Common/ResourceTreeKFCheckBox.js"></script>
    <script>

        function InitQuestionInfo(qid, callback, arg) {

            var t = new QuestionHandle();
            t.InitQuestionInfo(qid, callback, arg);

        }
    </script>
    <script type="text/javascript">
        var userID = '90006070';
    </script>
    <script src="/bundle/js/filtertest.js"></script>
@endsection