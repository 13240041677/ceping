@extends('layouts.master')

@section('meta')
<link href="{{ asset('bundle/css/before-answer-prompt.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">



                <!--正文（main-content可修改宽度）-->

                <div id="main-content">
                    <div class="prompt-box center">
                        <p class="font18 "><i class="normal red" id="TName"></i> 同学，本次测评大概需要<span id="needtime"></span>分钟，请认真作答哦~</p>
                        <img src="../../../bundle/img/write.png" class="write-icon">
                        <div class="test-btn" id="beginexam">开始测试</div>

                        <input type="hidden" id="ExamType" value="{{ request()->query('ExamType')}}">
                        <input type="hidden" id="TempID" value="{{ request()->query('TempID')}}">
                        <input type="hidden" id="PaperID" value="{{ request()->query('ExamID')}}">
                        <input type="hidden" id="UTrim" value="M">

                    </div>
                </div>




            </div>

        </div>
    </div>
@endsection

@section('javaScript')
    <script src="/bundle/js/ConfirmationInfo.js"></script>
@endsection