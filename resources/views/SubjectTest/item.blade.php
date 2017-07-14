@extends('layouts.master')

@section('meta')
    <link href="{{ asset('bundle/css/quemain.css') }}" rel="stylesheet">
    <link href="{{ asset('bundle/css/subject-answer-card.css') }}" rel="stylesheet">
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



                <!--正文（main-content可修改宽度）-->

                <div id="mai-content">
                    <div class="mt50">
                        <span class="card-bg middle inline"></span>
                        <span class="font16 ml5 middle inline" id="titleA">1</span>
                    </div>
                    <div class="clearFix">
                        <span class="font14 right handle-btn" id="gaiveup">放弃学科测评</span>
                    </div>
                    <div class="line"></div>
                    <div class="subject-wrap pt60 left" id="item"><div class="siliver" data-index="1">             <div style="line-height:30px;">                 <span data-index="1" class="l ques_num_ing left">                     1、                 </span>                 <div style="overflow:hidden"><div class="que_main"><div>读一读，找出不同类的一项是：<em class="editorFillBank"></em></div> <dl class="ans_list"><dd>A、report</dd><dd>B、worker</dd><dd>C、writer</dd><dd>D、coach</dd> </dl></div></div>             </div>             <div class="line mb60 mt20"></div>             <div class="mb40 font14">                                  请作答：                              </div>             <ul class="options mt40 mb40">                                   <li class="optionli" data-path="4" data-sequenceid="1" data-selected="0" data-value="A" onclick="onClickSub(this, 1,1)">A</li>                                    <li class="optionli" data-path="4" data-sequenceid="1" data-selected="0" data-value="B" onclick="onClickSub(this, 1,1)">B</li>                                    <li class="optionli" data-path="4" data-sequenceid="1" data-selected="0" data-value="C" onclick="onClickSub(this, 1,1)">C</li>                                    <li class="optionsli mouse-click" data-path="4" data-sequenceid="1" data-selected="1" data-value="D" onclick="onClickSub(this, 1,1)">D</li>                                   <li class="submit-option " onclick="onSub(this,1)">提交选项</li>             </ul>             <span data-sequenceid="1" data-path="6" class="error-tip" style="display:none;">请先点击选项，然后再点击提交选项按钮</span>         </div><div class="siliver" data-index="2" style="display: none; overflow: hidden; float: left">             <div style="line-height:30px;">                 <span data-index="2" class="l ques_num_ing left" style="display:none;margin-top:0px;">                     2、                 </span>                 <div style="overflow:hidden"><div class="que_main"><div>Tokyo is the capital of <em class="editorFillBank"></em>.</div> <dl class="ans_list"><dd>A、Canada</dd><dd>B、Japan&nbsp;</dd><dd>C、China</dd> </dl></div></div>             </div>             <div class="line mb60 mt20"></div>             <div class="mb40 font14">                                  请作答：                              </div>             <ul class="options mt40 mb40">                                   <li class="optionli" data-path="4" data-sequenceid="2" data-selected="0" data-value="A" onclick="onClickSub(this, 1,2)">A</li>                                    <li class="optionli" data-path="4" data-sequenceid="2" data-selected="0" data-value="B" onclick="onClickSub(this, 1,2)">B</li>                                    <li class="optionli" data-path="4" data-sequenceid="2" data-selected="0" data-value="C" onclick="onClickSub(this, 1,2)">C</li>                                   <li class="submit-option " onclick="onSub(this,2)">提交选项</li>             </ul>             <span data-sequenceid="2" data-path="6" class="error-tip" style="display:none;">请先点击选项，然后再点击提交选项按钮</span>         </div></div>
                    <div class="answer-card pt60 font14 siliver">
                        答题卡：

                        <ul id="rightP"><li class="red-border jump" data-selection="[{&quot;desc&quot;:&quot;&quot;,&quot;f_content&quot;:[&quot;report&quot;,&quot;worker&quot;,&quot;writer&quot;,&quot;coach&quot;]}]" data-isold="0" data-pointid="1548" data-difficty="50" data-item="4789698" data-examitemid="100375469" data-answer="" data-time="546" data-sequenceid="1" onclick="onClickItem(1)">1</li>                    <li data-selection="[{&quot;desc&quot;:&quot;&quot;,&quot;f_content&quot;:[&quot;Canada&quot;,&quot;Japan&nbsp;&quot;,&quot;China&quot;]}]" data-isold="0" data-pointid="1548" data-difficty="50" data-item="4793148" data-examitemid="100375470" data-answer="" data-time="0" data-sequenceid="2" class="ques_num l m15  hand" onclick="onClickItem(2)">2</li></ul>

                        <div class="mt65 font16">
                            <div class="time">
                                <i class="light-black">本题用时：</i>
                                <i class="red" id="consumeTime">00：09：06</i>
                            </div>
                            <div class="time">
                                <i class="light-black">累计用时：</i>
                                <i class="red" id="accumulatedTime">00：09：06</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line" style="clear: both;"></div>
                <input type="text" id="subjectId" name="subjectId" value="03">




                <div class="pop-up font14" style="display: none;"><span class="pop-close cursor"></span><div class="pop-content">同学，您忍心放弃此次学科测评吗？</div><br><br><div class="handle"> <span class="ok" id="Confrim">我要放弃</span> &nbsp;&nbsp;&nbsp;<span class="ok" id="Cancel">继续作答</span> </div></div></div>

        </div>
    </div>
@endsection

@section('javaScript')
    <script src="{{ asset('bundle/js/SubItem.js') }}"></script>
    <script type="text/javascript" src="http://cdn.bootcss.com/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_CHTML"></script>
    <script src="{{ asset('Scripts/tmpl/jquery.tmpl.min.js') }}"></script>
    <script id="rightM" type="text/x-jquery-tmpl">
        @{{if ItemIndex==1}}
        <li class="red-border jump" data-Selection="@{{= S_Selection}}" data-Isold="@{{= Isold}}" data-PointID="@{{= PointID}}" data-Difficty="@{{= S_Difficulty}}" data-item="@{{= ItemID}}" data-ExamItemID="@{{= ExamItemID}}" data-Answer="" data-time="0" data-SequenceID="@{{= ItemIndex}}" class="red-border l  m15 hand" onclick="onClickItem(@{{= ItemIndex }})">@{{= ItemIndex}}</li>

        @{{else}}

        <li data-Selection="@{{= S_Selection}}" data-Isold="@{{= Isold}}" data-PointID="@{{= PointID}}" data-Difficty="@{{= S_Difficulty}}" data-item="@{{= ItemID}}" data-ExamItemID="@{{= ExamItemID}}" data-Answer="" data-time="0" data-SequenceID="@{{= ItemIndex}}" class="ques_num l m15  hand" onclick="onClickItem(@{{= ItemIndex }})">@{{= ItemIndex}}</li>
        @{{/if}}
    </script>
    <script id="items" type="text/x-jquery-tmpl">
        <div class="siliver" data-index="@{{= ItemIndex}}" @{{if ItemIndex==1}} @{{else}} style="display: none; overflow: hidden; float: left" @{{/if}}>
            <div style="line-height:30px;">
                <span data-index="@{{= ItemIndex}}" class="l ques_num_ing left"
                      @{{if ItemIndex==1}} @{{else}} style="display:none;margin-top:0px;" @{{/if}}>
                    @{{= ItemIndex}}、
                </span>
                @{{html Body}}
        </div>
        <div class="line mb60 mt20"></div>
        <div class="mb40 font14">
            @{{if S_Style==1}}
        请作答：
        @{{else}}
        请作答：【多选题】
        @{{/if}}
        </div>
        <ul class="options mt40 mb40">
            @{{each(i,j) SelectionN}}

        <li class="optionli" data-path='4' data-SequenceID="@{{= ItemIndex}}" data-selected="0" data-value="@{{= j}}" onclick="onClickSub(this, @{{= S_Style}},@{{= ItemIndex}})">@{{= j}}</li>

                @{{/each}}
        <li class="submit-option " onclick="onSub(this,@{{= ItemIndex}})">提交选项</li>
            </ul>
            <span data-SequenceID="@{{= ItemIndex}}" data-path='6' class="error-tip" style="display:none;">请先点击选项，然后再点击提交选项按钮</span>
        </div>

    </script>
    <script type="text/javascript">

        var UTrim = 'M';//"M";

        var MeasureID = "{{ request()->query('MeasureID') }}";

        ///是否作废--删除
        var _DelFlag = false;

        //是否已经答题
        var _IsEffect = false;

        //当前试题序号
        var _currentSeq = 1;

        //一共多少试题
        var _MaxNumber = 1;

        var _Answer = [];

        //一共多少秒
        var _MaxTime = 0;

        //当前试题多少秒
        var _CurrentTime = 0;

        var intervalId = setInterval(startTime, 1000);

        var p;

        function startTime() {

            _MaxTime++;

            _CurrentTime++;

            var $pTime = $(("#rightP li[data-sequenceid='") + _currentSeq + ("']"));
            if ($pTime.length > 0) {
                var _plusTime = parseFloat($pTime.attr("data-time"));//之前时间

                $("#consumeTime").html(GetPlusTime(_plusTime + 1));

                $pTime.attr({ "data-time": _plusTime + 1 });

                $("#accumulatedTime").html(GetPlusTime(_MaxTime));
            }
        }

        //在分离的js中写了
        //function SaveSubItemState() {

        //    $.ajax({
        //        url: "/OrgExam/Exam/SaveSubItemState",
        //        data: {
        //            MeasureID: MeasureID, T: 0
        //        },
        //        dataType: "json",
        //        type: "post",
        //        success: function (e) {
        //            if (e.OK) {
        //                location.href = '/OrgExam/Index/Index' + UTrim;
        //            }
        //        }
        //    });
        //}


        function GetPlusTime(t) {

            t = parseFloat(t);

            var ss = (t % 60).toString();

            var mm = Math.floor(Math.floor(t / 60) % 60).toString();

            var hh = Math.floor(t / 3600).toString();

            var hms = (hh.length == 1 ? ("0" + hh) : hh) + "：" + (mm.length == 1 ? ("0" + mm) : mm) + "：" + ((ss.length == 1 ? ("0" + ss) : ss));

            return hms;
        }


        function sureOK() {

            $('body').css('overflow', 'hidden');
            //p = newBCommon.showdialog("#popSure", "系统消息");
        }

        $(function () {

            Init();

        });

        function ConvertClass(obj) {

            $.each($(obj).siblings(), function (i, j) {
                if ($(j).attr("data-Answer") == "") {
                    $(j).attr({ "class": "jump" });
                }
                else {
                    $(j).attr({ "class": "active jump" });
                }
            });
            $(obj).attr({ "class": "red-border jump" });
        }

        //计算时间
        function CalTime(obj) {

            _CurrentTime = 0;//清空上次计算

            var _plusTime = parseFloat($(obj).attr("data-time"));//之前时间

            $("#consumeTime").html(GetPlusTime(_plusTime));

        }

        function onClickItem(e0) {

            $("#item [data-index]").hide();
            $(("#item [data-index='" + e0 + "']")).show();

            var $e0 = $(("#rightP li[data-SequenceID='" + e0 + "']"));

            _currentSeq = parseFloat(e0);//当前序号

            //样式
            ConvertClass($e0);

            //计算时间
            CalTime($e0);
        }

        function Init() {

            ShowLoading($("#item,#rightP"));
            $.ajax({
                url: "https://oms.mofangge.com/Subject/SubCreateExam/GetSubItem",
                data: {
                    'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                    MeasureID: MeasureID
                },
                type: "post",
                success: function (e) {
                    $("#subjectId").val(e.N.SubjectID);     //对学科进行赋值  subjectId
                    $("#titleA").html(e.N.ExamName);

                    $("#item,#rightP").html("");

                    _IsEffect = e.N.IsEffect;
                    _DelFlag = e.N.DelFlag;


                    if (_DelFlag)//已经作废
                    {
                        intervalId = clearInterval(intervalId);//停止时间
                        OpenConfrimPopNoCancel("已经作废");

                    }
                    if (_IsEffect) {
                        intervalId = clearInterval(intervalId);//停止时间
                        OpenConfrimPopNoCancel("已完成作答");

                    }

                    _MaxNumber = e.N.Max;

                    //$("#popSureText").text(e.N.TempName);

                    $("#items").tmpl(e.N.M).appendTo("#item");

                    $("#rightM").tmpl(e.N.M).appendTo("#rightP");

                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#item").get(0)]); //The formula format
                    $('.quizPutTag').html('　　　'); //Remove the answer
                }
            });

        }

        //弹出加载图片
        function ShowLoading(obj) {
            obj.html(jQuery("#divLoading").html());
        }

        //点击选项
        function onClickSub(e1, e2,e3) {

            var $es = $(e1);
            if (e2.toString() == "1") {
                $es.attr({ "class": "optionsli mouse-click", "data-selected": "1" });
                $es.siblings(".optionsli").attr({ "class": "optionli", "data-selected": "0" });
            }
            else {
                if ($es.attr("data-selected") == "1")
                    $es.attr({ "class": "optionli", "data-selected": "0" });
                else
                    $es.attr({ "class": "optionli mouse-click", "data-selected": "1" });
            }
//            debugger;
            $(("span[data-path='6'][data-SequenceID='") + e3 + ("']")).hide(); //提示语
        }

        //提交选项
        function onSub(e1, e2) {

            if (_IsEffect)//是否已经答题完毕
            {
                OpenConfrimPopNoCancel("已完成作答");

                return;
            }

            if (_DelFlag)//已经作废
            {
                OpenConfrimPopNoCancel("已经作废");

                return;
            }

            var $i = $(("#rightP li[data-sequenceid='" + e2 + "']"));

            var _index = e2;//当前序号

            var $q = $(("li[data-path='4'][data-SequenceID='") + _index + ("'][data-selected='1']"));//当前试题的选中项
            if ($q.length == 0) {
                $(("span[data-path='6'][data-SequenceID='") + _index + ("']")).show(); //提示语
                return;
            }
            else {
                $(("span[data-path='6'][data-SequenceID='") + _index + ("']")).hide(); //提示语
            }

            var $p = $(("#rightP li[data-sequenceid='") + _index + ("']"));//答题卡

            var jsonOK = "";
            var jsonP = $q.map(function () { jsonOK += $(this).attr("data-value"); })//选项

            $p.attr({ "data-Answer": jsonOK });//答题卡选中项赋值

            if (_index == _MaxNumber)//当前序号为最大序号
            {
                var $m = $("#rightP li[data-Answer='']");//没有答题的
                if ($m.length == 0)//已经答题完毕
                {
                    ok();
                }
                else//下一个试题答题
                {
                    $m.first().click();
                }
            }
            else//下一个知识点
            {
                var $next = $p.nextAll("li[data-Answer='']");
                if ($next.length == 0)//后面没有
                {
                    var $prev = $p.prevAll("li[data-Answer='']");
                    if ($prev.length == 0)//已经答题完毕
                    {
                        ok();
                    }
                    else {
                        $prev.first().click();
                    }
                }
                else {
                    $next.first().click();
                }

            }
        }


        //答题完毕
        function ok() {
            if ($("#divP").attr("data-ok") == "1") {
                return;
            }
            OpenConfrimPopNoCancel("保存中…");
            $("#divP").attr({ "data-ok": "1" });
            intervalId = clearInterval(intervalId);//停止时间
            var _jsonDetail = [];//答题记录
            $("#rightP li[data-item]").each(function (i, j) {
                if (j) {
                    var ParaSumItemInfo = {};
                    ParaSumItemInfo.Isold = $(j).attr("data-Isold");
                    if (ParaSumItemInfo.Isold + "" == "0");//新题
                    else
                        ParaSumItemInfo.S_Selection = $(j).attr("data-Selection");
                    ParaSumItemInfo.PaperItemID = $(j).attr("data-examitemid");
                    ParaSumItemInfo.ItemID = $(j).attr("data-item");
                    ParaSumItemInfo.Answer = $(j).attr("data-answer");
                    ParaSumItemInfo.AnswerTime = $(j).attr("data-time");
                    ParaSumItemInfo.PointID = $(j).attr("data-pointid");
                    ParaSumItemInfo.Difficty = $(j).attr("data-difficty");
                    _jsonDetail.push(ParaSumItemInfo);
                }
            });
            $.ajax({
                url: "https://oms.mofangge.com/Subject/SubCreateExam/SaveSubItem",
                type: "post",
                data: {
                    'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                    data: JSON.stringify(_jsonDetail),
                    MeasureID: MeasureID,
                    subjectId: $("#subjectId").val()
                },
                success: function (e) {
                    $(".pop-mask").hide();
                    $(".add").hide();

                    OpenConfrimPopNoCancel("恭喜您完成此次学科测评，快喊老师来验收结果吧！");
                    //弹出确认框,没有取消按钮


                },
                error: function () {
                    console.log(JSON.stringify(_jsonDetail));
                    console.log(MeasureID);
                    console.log($("#subjectId").val());
                    return false;

                    OpenConfrimPopNoCancel("保存失败");


                    //d.close();
                    $('body').css('overflow', 'hidden');
                    //p = newBCommon.ShowNoTitleDialog("#loginInfo", "系统消息");
                }
            });

        }

        //弹窗
        function OpenConfrimPopNoCancel(obj) {
            var html = '<div class="pop-up font14 add"><div class="pop-content" style="text-align: center;margin:50px 40px -20px">' + obj + '</div><br /><br /><div class="handle"> <span class="ok" id="ConfrimJump">确定</span> </div></div>';
            $("#main-content-wrapper").append(html);
            $(".pop-mask").show();
            $(".pop-up").show();
        };
    </script>
@endsection