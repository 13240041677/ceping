@extends('layouts.master')

@section('meta')
    <link href="{{ asset('bundle/css/evaluation-archives.css') }}" rel="stylesheet">
    <link href="{{ asset('bundle/css/paging.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="middle-org" style="height: 359px;">
                <div class="org-icon-wrap font16">
                    <span class="org-icon inline middle"></span>
                    <span class="middle" title="欧美思">欧美思</span>
                    <span class="org-icon-shadow inline"></span>
                </div>
                <ul class="org font16" style="height: 301px;">
                    <li class="org-item active">
                        <div class="org-item-content" data-href="/OrgZiXun/ZiXunGuanLi/IndexCounselor">
                            <span>测评档案</span>
                        </div>
                        <div class="line"></div>
                    </li>
                    <li class="org-item ">
                        <div class="org-item-content" data-href="/OrgZiXun/ZiXunGuanLi/ContactIndexCounselor">
                            <span>已签约学生</span>
                        </div>
                        <div class="line"></div>
                    </li>
                </ul>
            </div>
            <div id="main-content-org-wrapper" style="overflow-x:hidden;">





                <div id="main-content">
                    <div class="evalution-box">
                        <!--头部导航开始-->
                        <div class="overflow font16 mb10">


                        </div>
                        <!--头部导航结束-->
                        <!--标题开始-->
                        <div class="line50 overflow headbg pl20 pr20">
                            <span class="left  font16 headcolor">测评档案列表</span>
                            <span class="right">共计 <i class="red normal" id="Totalcount"></i> 份测评报告</span>
                            <div class="search-total right">
                                <div class="inline">
                                    <input type="text" class="search-text" id="txtserch" onkeypress="javascript:if (event.keyCode == 32)event.returnValue = false;" placeholder="请输入姓名或电话"><span class="cursor mr7 search "><i class="search-img"></i></span>
                                </div>
                            </div>
                        </div>
                        <!--标题结束-->
                        <!--表格开始-->
                        <table class="table font12">
                            <thead class="font14">
                            <tr>
                                <th>姓名</th>
                                <th>联系电话</th>
                                <th>测评内容</th>
                                <th>匹配课时</th>
                                <th>签约状态</th>
                                <th>测评时间</th>
                                <th>
                                    咨询师
                                </th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody id="tb">
                            {{--<tr class="font12"> <td>杨宇</td> <td>18618185732</td> <td>小学/英语</td> <td>1课时</td>  <td class="green">签约</td>  <td>2017-07-11</td> <td>张晋莉</td> <td> <a href="/OrgZiXun/ZiXunGuanLi/SignUp?Id=1029974&amp;TempName=杨宇&amp;Phone=18618185732&amp;StrFile=1&amp;StrEmail=172964776@qq.com&amp;StrSex=0" class="operate-btn look con mr20">报名签约</a><span class="operate-btn look mask mr20" data-id="1029974">备注</span>  <a href="/OrgExam/Index/SubReport?org=1&amp;ReturnUrl=/OrgZiXun/ZiXunGuanLi/IndexCounselor&amp;PaperID=1014523" class="operate-btn look con">查看</a>  </td></tr>  <tr class="font12"> <td>杨宇</td> <td>18618185732</td> <td>学习风格测评</td> <td>--</td>  <td class="green">签约</td>  <td>2017-07-11</td> <td>张晋莉</td> <td> <a href="/OrgZiXun/ZiXunGuanLi/SignUp?Id=1029971&amp;TempName=杨宇&amp;Phone=18618185732&amp;StrFile=1&amp;StrEmail=172964776@qq.com&amp;StrSex=0" class="operate-btn look con mr20">报名签约</a><span class="operate-btn look mask mr20" data-id="1029971">备注</span>  <a href="/OrgExam/Index/EnReport?org=1&amp;ReturnUrl=/OrgZiXun/ZiXunGuanLi/IndexCounselor&amp;U=M&amp;PaperID=520480" class="operate-btn look con">查看</a></td>  </tr>  <tr class="font12"> <td>杨宇</td> <td>18618185732</td> <td>学习风格测评</td> <td>--</td>  <td class="green">签约</td>  <td>2017-07-11</td> <td>张晋莉</td> <td> <a href="/OrgZiXun/ZiXunGuanLi/SignUp?Id=1029967&amp;TempName=杨宇&amp;Phone=18618185732&amp;StrFile=1&amp;StrEmail=172964776@qq.com&amp;StrSex=0" class="operate-btn look con mr20">报名签约</a><span class="operate-btn look mask mr20" data-id="1029967">备注</span>  <a href="/OrgExam/Index/EnReport?org=1&amp;ReturnUrl=/OrgZiXun/ZiXunGuanLi/IndexCounselor&amp;U=M&amp;PaperID=520476" class="operate-btn look con">查看</a></td>  </tr> --}}
                            </tbody>
                        </table>
                        <!--表格结束-->
                        <!--备注弹框开始-->
                        <div class="remarks hidden add" id="remarks">
                            <div class="mypopup ">
                                <h5 class="center font16 popuphead">
                                    备注<input type="hidden" id="tempid" name="tempid">
                                    <i class="popclose cursor"></i>
                                </h5>
                                <div class="popupbox" id="markshow">


                                </div>
                            </div>
                        </div>
                        <!--备注弹框结束-->
                        <div id="pagination" class="pagination mt30"><ul class="page-box inline mr20 mb20"></ul></div>
                    </div>
                </div>





            </div>

        </div>
    </div>
@endsection
@section('javaScript')
    <script src="{{ asset('bundle/js/counselor.js') }}"></script>
@endsection