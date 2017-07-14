@extends('layouts.master')

@section('meta')
    <link href="{{ asset('bundle/css/learn-test.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">



                <!--正文（main-content可修改宽度）-->

                <div id="main-content">
                    <div class="learn-box">
                        <!-- 头部导航开始-->
                        <div class="overflow">
                            <div class="overflow mb10 font16">
                                <div class=" left cursor">
                                    <i class="subject-icon"></i>
                                    <a href=" {{ asset('/OrgExam/Index/SubjectTest') }}"><span class="title-nav " id="subjecturl">学科测评</span></a>
                                </div>
                                <div class=" left cursor ml10">
                                    <i class="learn-icon-on"></i>
                                    <a href=" {{ asset('/OrgExam/Index/LearnTest') }}"><span class="title-nav title-nav-on">学能测评</span></a>
                                </div>
                            </div>
                            <div class="right font14 overflow minus-mt10">
                                <span class="red" id="examCount">225</span>人已测
                            </div>
                        </div>
                        <div class="line mt13"></div>
                        <!-- 头部导航结束-->
                        <!-- 内容介绍开始-->
                        <div class="content-box">
                            <div class="content-text overflow">
                                <div class="left mr50">
                                    <i class="light-bulb-icon"></i>
                                </div>
                                <div class="font16 text-introduce left">
                                    主要是指对学生课程学习产生影响的智力、心理、风格等方面的测评，目前系统支持《多元智能测评》、《非智力因素测评》、《学习风格测评》三套权威测评试卷。
                                </div>
                            </div>
                            <a href=" {{ asset('/OrgExam/Index/BeLearnTest') }}"><div class="decorate-btn  font18" id="betest">布置测试</div></a>
                            <div class="ques-text right">
                                <div class="ask font12">
                                    为啥平时写作业啥都会，一到考试就大脑一片空白？
                                </div>
                            </div>
                        </div>
                        <!-- 内容介绍结束-->
                    </div>
                </div>




            </div>

        </div>
    </div>
@endsection