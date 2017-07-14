@extends('layouts.master')

@section('meta')
    <link href="{{ asset('bundle/css/quemain.css') }}" rel="stylesheet">
    <link href="{{ asset('bundle/css/testpaper-details.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">






                <input type="hidden" id="ExamID" name="ExamID" value="{{ request()->query('ExamID')}}">

                <div id="main-content">
                    <div class="testpaper-detail-box mt50">
                        <!-- 头部导航开始-->
                        <div class="overflow font16 black" id="topheadhidden">
                            <p>
                                <a class="cursor head-a black" id="backpaper">
                                    试卷列表
                                </a>
                                &gt; 试卷详情
                            </p>
                            <p class="mb10">

                                <span class="handle-btn right mb10 " id="starttest">开始测试</span>&nbsp;&nbsp;


                            </p>
                        </div>
                        <div class="line "></div>
                        <!-- 头部导航结束-->
                        <!-- 试卷内容开始-->
                        <div class="mt40">
                            <p class="font16 center black mb40" id="testname">

                            </p>
                            <div id="testbody">

                            </div>
                        </div>
                        <!-- 试卷内容结束-->
                    </div>
                </div>


            </div>

        </div>
    </div>
@endsection

@section('javaScript')
    <script type="text/javascript" src="http://cdn.bootcss.com/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_CHTML"></script>
    <script src="/bundle/js/paperview.js"></script>
@endsection