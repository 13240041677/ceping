@extends('layouts.master')

@section('meta')
    <link href="{{ asset('bundle/css/subject-test.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">



                <!--正文（main-content可修改宽度）-->

                <div id="main-content">
                    <div class="subject-box">
                        <!-- 头部导航开始-->
                        <div class="overflow">
                            <div class="overflow mb10 font16">
                                <div class="left cursor">
                                    <i class="subject-icon-on"></i>
                                    <span class="title-nav title-nav-on" id="subjecturl">学科测评</span>
                                </div>
                                <div class="left cursor ml10">
                                    <i class="learn-icon"></i>
                                    <span class="title-nav" id="learnurl">学能测评</span>
                                </div>
                            </div>
                            <div class=" right font14 overflow minus-mt10">
                                <span class="red" id="examCount"></span>人已测
                            </div>
                        </div>
                        <div class="line mt13"></div>
                        <!-- 头部导航结束-->
                        <!-- 内容介绍开始-->
                        <div class="content-box">
                            <div class="content-text overflow">
                                <div class="left mr50">
                                    <i class="bottle-icon"></i>
                                </div>
                                <div class="font16 text-introduce left">
                                    旨在了解学生对各学科、各知识点的掌握程度、不同难度题目的答题正确率，目前系统涵盖小学、初中、高中学段的奥数、数学、英语、物理、化学等主要学科。
                                </div>
                            </div>
                            <div class="decorate-btn  font18" id="starttest">布置测试</div>
                            <div class="ques-text right">
                                <div class="ask font12">
                                    快考试了，也不知道哪些会，哪些不会，该复习啥？
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

@section('javaScript')
    <script src="{{ asset('bundle/js/SubjectTest.js') }}"></script>
@endsection