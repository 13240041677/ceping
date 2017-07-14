@extends('layouts.master')

@section('meta')
<link href="{{ asset('bundle/css/paper-list.css') }}" rel="stylesheet">
<link href="{{ asset('bundle/css/paging.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">




                <input type="hidden" id="tid" name="tid" value="90006070">

                <div id="main-content">
                    <div class="crumb mt40 font16">
                        <a class="cursor head-a black" id="backpaper">
                            学科测评
                        </a> &gt; 试卷列表
                    </div>
                    <div class="clearFix mb10">
                        <div class="handle right">
                            <a href="{{ asset('/OrgExam/CreateExam/AssemblyInit') }}"><span class="handle-btn" id="CreateExam">组卷</span></a>
                        </div>
                    </div>
                    <div class="grade-subject font14">
                        <div class="grade">
                            <span class="top">年级:</span>
                            <ul class="inline wp90" id="GradeID">
                                <li data-areaid="0" data-i="0" data-a="0" class="active">全部</li>
                                <li data-areaid="x1" data-i="1" data-a="x">一年级</li>
                                <li data-areaid="x2" data-i="2" data-a="x">二年级</li>
                                <li data-areaid="x3" data-i="3" data-a="x">三年级</li>
                                <li data-areaid="x4" data-i="4" data-a="x">四年级</li>
                                <li data-areaid="x5" data-i="5" data-a="x">五年级</li>
                                <li data-areaid="x6" data-i="6" data-a="x">六年级</li>
                                <li data-areaid="c1" data-i="7" data-a="c">七年级</li>
                                <li data-areaid="c2" data-i="8" data-a="c">八年级</li>
                                <li data-areaid="c3" data-i="9" data-a="c">九年级</li>
                                <li data-areaid="g1" data-i="10" data-a="g">高一</li>
                                <li data-areaid="g2" data-i="11" data-a="g">高二</li>
                                <li data-areaid="g3" data-i="12" data-a="g">高三</li>
                            </ul>
                        </div>
                        <div class="subject">
                            科目:
                            <ul class="inline" id="SubjectID">
                                <li data-areaid="0" class="active">全部</li>
                                <li data-areaid="14">奥数</li>
                                <li data-areaid="2">数学</li>
                                <li data-areaid="3">英语</li>
                                <li data-areaid="4">物理</li>
                                <li data-areaid="5">化学</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-wrap h50 mt20">
                        <div class="font16 ml30 left black">试卷列表</div>
                        <div class="search-total right">
                            <div class="inline">
                                <input type="text" class="search-text" id="searchText" placeholder="请输入试卷编号或名称"><span class="cursor mr7 search "><i class="search-img"></i></span>
                            </div>
                        </div>
                    </div>
                    <table class="table" id="tableID">
                        <thead>
                        <tr>
                            <th>编号</th>
                            <th>名称</th>
                            <th>来源</th>
                            <th>更新时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {{--<td>014</td>--}}
                            {{--<td> <div class="ellipsis w110" style="cursor:pointer;" data-value="1011768" title="一年级英语">一年级英语</div> </td>--}}
                            {{--<td>马男</td> <td>2017/7/11 9:38:52</td> <td> <span class="see-btn mr20 w68" data-opt="test" data-value="1011768">开始测试</span> <span class="see-btn mr20" data-opt="view" data-value="1011768">查看</span>  </td>--}}
                        </tr>
                        </tbody>
                    </table>
                    <div id="pagination" class="pagination mt30 mb30">
                        {{--<ul class="page-box inline mr20 mb20"> <li><a href="#" class="active" data-num="1">1</a> </li> <li><a href="#" data-num="2">2</a> </li></ul><a href="#" data-num="2" class="next-page inline">下一页</a>--}}
                    </div>
                </div>


            </div>

        </div>
    </div>
@endsection

@section('javaScript')
    <script src="{{ asset('bundle/js/paperlist.js') }}"></script>
@endsection