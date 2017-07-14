@extends('layouts.master')

@section('meta')
<link href="{{ asset('bundle/css/assembly.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="right-wrapper">
        @include('layouts.head')
        <div id="wrapper" style="overflow-x:hidden;">
            <div id="main-content-wrapper" style="overflow:hidden;">


                <input type="hidden" id="username" name="username" value="张晋莉">
                <input type="hidden" id="edu" name="edu" value="0">
                <input type="hidden" id="artScience" name="artScience" value="0">

                <div id="main-content" class="font14" style="color:#797979;">
                    <div class="crumb mt40 font16">
                        <a class="cursor head-a black" id="backpaper">
                            知识测评 &nbsp;&nbsp;&nbsp;
                        </a>  &gt; &nbsp;&nbsp;&nbsp; 选择知识点
                    </div>
                    <div class="line" style="margin-top:20px;"></div>
                    <div class="hello assembly-content">
                        尊敬的<span id="X">张晋莉</span>：<span id="M1"></span>！
                        <span class="afternoon middle"></span>
                    </div>
                    <div class="assembly-content mb35">这是您组的第<span id="N1">1</span>份测评试卷，您已经帮助<span id="N2">0</span>名同学完成知识测评，精准找到弱项知识点。</div>
                    <div class="line"></div>
                    <div class="paper assembly-content">
                        <div class="item">
                            试卷名称：
                            <input type="text" id="papername" class="paper-name input ml5" placeholder="试卷名称">
                        </div>
                        <div class="item" id="GradeID" style="margin-bottom:0px;cursor:pointer;">
                            使用年级：

                            <span data-areaid="x1" data-i="1" data-a="x" class="active pad10-15">一年级</span>
                            <span data-areaid="x2" data-i="2" data-a="x" class="pad10-15">二年级</span>
                            <span data-areaid="x3" data-i="3" data-a="x" class="pad10-15">三年级</span>
                            <span data-areaid="x4" data-i="4" data-a="x" class="pad10-15">四年级</span>
                            <span data-areaid="x5" data-i="5" data-a="x" class="pad10-15">五年级</span>
                            <span data-areaid="x6" data-i="6" data-a="x" class="pad10-15">六年级</span>
                            <span data-areaid="c1" data-i="7" data-a="c" class="pad10-15">七年级</span>
                            <span data-areaid="c2" data-i="8" data-a="c" class="pad10-15">八年级</span>
                            <span data-areaid="c3" data-i="9" data-a="c" class="pad10-15">九年级</span>
                            <span data-areaid="g1" data-i="10" data-a="g" class="pad10-15">高一</span>
                            <span data-areaid="g2" data-i="11" data-a="g" class="pad10-15">高二</span>
                            <span data-areaid="g3" data-i="12" data-a="g" class="pad10-15">高三</span>

                        </div>
                        <div class="item">
                            诊断科目：
                            <ul class="inline ml5" id="SubjectID"><li data-areaid="03" class="active">英语</li></ul>
                        </div>
                        <div class="point item">
                            <span class="inline top">知识模块：</span>
                            <ul class="inline ml5" id="Points">  <li data-value="0x00000201" class="active">名词</li>  <li data-value="0x00000202">冠词</li>  <li data-value="0x00000203">数词和量词</li>  <li data-value="0x00000204">代词</li>  <li data-value="0x00000205">形容词</li>  <li data-value="0x00000206">副词</li>  <li data-value="0x00000207">介词</li>  <li data-value="0x00000208">动词</li>  <li data-value="0x00000209">动词时态</li>  <li data-value="0x00000210">动词不定式</li>  <li data-value="0x00000211">动名词</li>  <li data-value="0x00000212">连词</li>  <li data-value="0x00000213">be句型</li>  <li data-value="0x00000214">there be 句型</li>  <li data-value="0x00000215">一般疑问句</li>  <li data-value="0x00000216">特殊疑问句</li>  <li data-value="0x00000217">选择疑问句与反意疑问句</li>  <li data-value="0x00000218">祈使句</li>  <li data-value="0x00000219">倒装句与感叹句</li>  <li data-value="0x00000220">比较句</li>  <li data-value="0x00000221">被动语态</li>  <li data-value="0x00000222">从句</li>  </ul>
                        </div>
                    </div>
                    <div class="handle">
                        <span class="next" id="next">下一步</span>

                    </div>
                </div>



            </div>

        </div>
    </div>
@endsection

@section('javaScript')
    <script src="{{ asset('bundle/js/AssemblyInit.js') }}"></script>
@endsection