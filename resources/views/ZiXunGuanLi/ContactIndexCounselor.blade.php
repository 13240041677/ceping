@extends('layouts.master')

@section('meta')
    <link href="{{ asset('bundle/css/sign-contact-stu.css') }}" rel="stylesheet">
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
                    <li class="org-item ">
                        <div class="org-item-content" data-href="/OrgZiXun/ZiXunGuanLi/IndexCounselor">
                            <span>测评档案</span>
                        </div>
                        <div class="line"></div>
                    </li>
                    <li class="org-item active">
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
                        <div class="overflow font16 ">




                        </div>
                        <!--头部导航结束-->
                        <!--头部导航开始-->
                        <div class="overflow mb10 minus-mt20 ">
                            <div class="right">
                                <span class="handle-btn cursor mr10" id="bactchFee">批量续费</span>
                                <!--
                                -->
                                <span class="handle-btn cursor" id="batchActive">批量激活</span>
                            </div>
                        </div>
                        <!--标题开始-->
                        <div class="line50 overflow headbg pl20 pr20">
                            <span class="left  font16 headcolor">学生列表</span>
                            <span class="right">共计 <i class="red normal" id="Totalcount">1</i> 名学生</span>
                            <div class="search-total right">
                                <div class="inline">
                                    <input type="text" class="search-text " id="txtserch" onkeypress="javascript:if (event.keyCode == 32)event.returnValue = false;" placeholder="请输入姓名或账号"><span class="cursor mr7 search "><i class="search-img"></i></span>
                                </div>

                            </div>
                        </div>
                        <!--标题结束-->
                        <!--表格开始-->
                        <table class="table font12">
                            <thead class="font14">
                            <tr>
                                <th style="cursor: pointer"><input id="allchoice" type="checkbox" name="choose-input"></th>
                                <th>姓名</th>
                                <th>账号</th>
                                <th>
                                    <select class="select" id="seltecah">
                                        <option value="-1">学管</option>
                                        <option value="1">已分配</option>
                                        <option value="0">未分配</option>
                                    </select>
                                </th>
                                <th>
                                    <select class="select" id="selactivetype">
                                        <option value="-1">状态</option>
                                        <option value="1">已激活</option>
                                        <option value="0">未激活</option>
                                    </select>
                                </th>
                                <th>
                                    <select class="select" id="selexpiretime">
                                        <option value="-1">到期时间</option>
                                        <option value="1">剩15天到期</option>
                                        <option value="2">剩30天到期</option>
                                        <option value="0">已到期</option>

                                    </select>
                                </th>

                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody id="tb">  <tr class="font12">  <td><input type="checkbox" name="choose-0" class="chka" data-f="0" id="90007205" data-name="杨宇"> </td>  <td>杨宇</td> <td>18618185732</td>  <td class="red">未分配 </td>   <td class="red">未激活</td>   <td>2018-03-24</td>  <td> <span class="edit-btn" data-id="90007205">报班管理</span> <a href="/OrgZiXun/ZiXunGuanLi/StudentDetails?org=1&amp;StuId=90007205&amp;TagId=0" class="operate-btn look con">查看</a> </td> </tr>  </tbody>
                        </table>
                        <!--表格结束-->
                        <div id="pagination" class="pagination mt30"><ul class="page-box inline mr20 mb20"></ul></div>

                        <!--管理弹框开始-->
                        <div class="manage-popup add hidden">
                            <div class="mypopup">
                                <h5 class="center font16 popuphead">
                                    报班管理
                                    <i class="popclose cursor"></i>
                                </h5>
                                <div class="popupbox font12">
                                    <p class="font14 mb10">报班情况</p>
                                    <div class="class-detail overflow">
                                        <table class="table">
                                            <thead>
                                            <tr>
                                                <th>类型</th>
                                                <th>学段</th>
                                                <th>学科</th>
                                                <th>老师/班级</th>
                                                <th>签约课时</th>
                                                <th>剩余课时</th>
                                                <th>操作</th>
                                            </tr>
                                            </thead>
                                            <tbody id="tbclass"></tbody>
                                        </table>
                                    </div>
                                    <div id="tipclass"></div>
                                    <div class="handle mt10 mb10">
                                        <input type="hidden" id="deleteClass" name="deleteClass">
                                        <button class="submit" id="btnClass">确定</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--管理弹框结束-->
                        <!--账号续费/账号激活弹框开始-->
                        <div class="account-box hidden addaccount">
                            <div class="mypopup account-active">
                                <h5 class="center font16 popuphead">
                                    <span id="accountShow">账号激活</span>
                                    <i class="popclose cursor"></i>
                                </h5>
                                <div class="popupbox font12 overflow">
                                    <ul class="account-news" id="acountstulist">


                                    </ul>
                                    <div class="font14 num-news"><span id="shotBeg">本次将为</span><span class="red" id="stuNum"></span>个学生账号<span id="showOpt">续费</span></div>
                                    <div class="hidden">
                                        <span>剩余<i class="red normal" id="accountTotal"></i>个账号</span>
                                    </div>
                                    <div id="batchAccounts" class="account-time-box hidden">
                                        <p class="mt10 mb10">续费时间</p>
                                        <ul class="account-time" id="accountlist">


                                        </ul>
                                    </div>
                                    <div class="" id="tipaccount"></div>


                                    <!-- <span class="alert-error mt10">您当前已没有剩余的学生账号，请联系我们购买！</span>-->
                                    <div class="handle mt10 mb10">
                                        <button class="submit" id="btnsub" flag="">确定</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--账号续费/账号激活弹框结束-->
                    </div>
                </div>





            </div>

        </div>
    </div>
@endsection
