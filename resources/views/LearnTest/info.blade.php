@extends('layouts.master')

@section('meta')
    <link href="{{ asset('bundle/css/fill-stu-news.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">



                <!--正文（main-content可修改宽度）-->

                <div id="main-content">
                    <div class="fillstu-news-box font14">
                        <p class="mt90">亲爱的同学：<span id="M1">上午好</span>！<i class="sun-icon"></i></p>
                        <p class="mt50">古人云：<sapn id="N1">不积跬步无以至千里，不积小流无以成江海</sapn>，快来开启你的学习之旅吧～</p>
                        <div class="line mt60"></div>
                        <form id="form1" novalidate="novalidate">
                            <ul class="mt60 news-box mb68 overflow">
                                <li>
                                    <span class="mr10">姓名：</span><input type="text" maxlength="5" onkeypress="return /[\w\u4e00-\u9fa5]/.test(String.fromCharCode(window.event.keyCode))" onpaste="return !/[^\w\u4e00-\u9fa5]/g.test(window.clipboardData.getData('Text'))" ondragenter="return false" id="SName" name="Name" class="name-input" placeholder="姓名">

                                </li>
                                <li>
                                    <span class="mr10">性别：</span>
                                    <label for="man">
                                        <input type="radio" id="man" checked="checked" name="sex" class="mr20" value="0"><span class="mr40">男</span>
                                    </label>
                                    <label for="woman">
                                        <input type="radio" id="woman" name="sex" class="mr20" value="1"><span>女</span>
                                    </label>
                                </li>
                                <li>
                                    <span class="mr10">年龄：</span><input onkeypress="javascript:if (event.keyCode == 32)event.returnValue = false;" id="SAge" name="Age" type="text" onkeyup="this.value = this.value.replace(/\D/gi, &quot;&quot;)" maxlength="2" class="name-input" placeholder="年龄">

                                </li>
                            </ul>
                            <ul class="mt60 news-box overflow">
                                <li>
                                    <span class="mr10">电话：</span>
                                    <!--
                                    -->
                                    <input onkeypress="javascript:if (event.keyCode == 32)event.returnValue = false;" id="SPhone" name="Phone" data-s="3" type="text" maxlength="11" class="phone-input" placeholder="联系手机号">

                                </li>
                                <li>
                                    <span class="mr10">学校：</span>
                                    <!--
                                    -->
                                    <input type="text" onkeypress="javascript:if (event.keyCode == 32)event.returnValue = false;" class="phone-input" id="School" name="School" maxlength="20" placeholder="学校地址">

                                </li>
                            </ul>
                            <ul class="mt60 email-box mb68 overflow">
                                <li>
                                    <span class="mr10">邮箱：</span>
                                    <!--
                                    -->
                                    <input type="text" onkeypress="javascript:if (event.keyCode == 32)event.returnValue = false;" id="Email" name="Email" class="email-input" placeholder="邮箱">

                                </li>
                                <li>
                                    <span class="mr10">住址：</span>
                                    <!--
                                    -->
                                    <input type="text" onkeypress="javascript:if (event.keyCode == 32)event.returnValue = false;" id="SAdr" data-s="5" maxlength="20" class="email-input" placeholder="家庭住址">

                                </li>
                            </ul>
                        </form>
                        <div class="handle overflow">
                            <button class="submit mr40" id="nextStep">下一步</button>
                            <span id="clearStu" class="clear-box" style="">清空信息</span>
                            <input type="hidden" id="StageID">
                            <input type="hidden" id="ExamID" value="{{ request()->query('ExamID')}}">
                            <input type="hidden" id="ExamType" value="{{ request()->query('ExamType')}}">
                            <input type="hidden" id="UTrim" value="">
                        </div>
                    </div>
                </div>




            </div>

        </div>
    </div>
@endsection

@section('javaScript')
    <script src="/Scripts/jquery-1.10.2.js"></script>
    <script src="/Scripts/jquery.cookie-v1.4.0.js"></script>
    <script src="/bundle/js/SetInfo.js"></script>
@endsection