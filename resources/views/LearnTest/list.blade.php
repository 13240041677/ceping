@extends('layouts.master')

@section('meta')
<link href="{{ asset('bundle/css/aptitude-test-list.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">



                <!--正文（main-content可修改宽度）-->

                <div id="main-content">
                    <div class="aptitude-box">
                        <div class="aptitude-content font14">
                            <div class="overflow mb40">
                                <div class="nav-name left">选择试卷：</div>
                                <ul class="left choose-paper center">
                                    <li data-id="1" data-examid="1" class="choose-on">
                                        <img src="http://ex.mofangge.com/bundle/img/computer.png" class="aptitude-img">
                                        <p class="mt10">学习风格</p>
                                    </li>
                                    <li data-id="2" data-examid="2">
                                        <img src="http://ex.mofangge.com/bundle/img/multi.png" class="aptitude-img">
                                        <p class="mt10">多元智能</p>
                                    </li>
                                    <li data-id="3" data-examid="3" class="mr0">
                                        <img src="http://ex.mofangge.com/bundle/img/head.png" class="aptitude-img">
                                        <p class="mt10">非智力因素</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="overflow mb40">
                                <div class="nav-name left">简介：</div>
                                <div class="left introduction-text ">
                                    <p id="T">用于了解学生的学习风格，包括时间偏好类型、认知方式类型、交互环境类型等十个维度，进而培养学生良好的学习风格，同时为教师的个性化辅导提供重要依据。</p>
                                </div>
                            </div>
                            <div class="overflow">
                                <div class="nav-name left">选测维度：</div>
                                <div class="left difficult-level" id="P">   <span class="level-name" id="1" data-is="0">时间偏好类型</span>    <span class="level-name" id="2" data-is="0">认知方式类型</span>    <span class="level-name" id="3" data-is="0">交互环境类型</span>    <span class="level-name" id="4" data-is="0">直觉感觉类型</span>    <span class="level-name" id="5" data-is="0">任务处理类型</span>    <span class="level-name" id="6" data-is="0">信息接受类型</span>    <span class="level-name" id="7" data-is="0">信息处理类型</span>    <span class="level-name" id="8" data-is="0">记忆风格类型</span>    <span class="level-name" id="9" data-is="0">学习场景类型</span>    <span class="level-name" id="10" data-is="0">背景声音类型</span>   </div>
                            </div>
                        </div>
                        <a href=" {{ asset('/OrgExam/Index/SetInfo') }}"><div class="test-btn mt80" data-on="1" id="btnBegin" style="cursor: pointer">开始测试</div></a>
                        <input type="hidden" id="U" value="M">
                    </div>
                </div>




            </div>

        </div>
    </div>
@endsection