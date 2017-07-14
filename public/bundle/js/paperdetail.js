webpackJsonp([54], {
    0: function(i, s, a) {
        i.exports = a(130)
    },
    130: function(i, s, a) {
        var p = a(131);
        $(".tpml").html(p()),
            tool.close()
    },
    131: function(i, s, a) {
        var p = a(3);
        i.exports = p("Org/tpl/creat/paperdetail", ' <div class="poup" id="promptss" style="width:915px;display:none;"> <h5 class="center font16 popuphead" style="width:100%;background:#fbfbfb;border-bottom:1px solid #dae1e7;height:60px;color:#6b787e;line-height: 60px;"> <span style="float:left;margin-left:70px;">修改试卷</span> <span style="float:right;margin-right:70px;"> <span id="paperupuser_content"></span> 于 <span id="paperuptime_content"></span> 上传</span> <i class="popclose cursor"></i> </h5> <div class="resource-mainbox auto">  <div class="tabs"> <div class="edit-area">   <div class="paper-part hide"> </div> <div class="paper-atr"> <div class="mb35"> <div class="inline title-before" style="position:static;"> <span class="small-red">*</span> <span>名称:</span> </div> <input id="input_papername" type="text" value="" style="width:480px;" /> </div> <div class="mb35"> <div class="inline title-before" style="position:static;"> <span class="small-red">*</span> <span>学期:</span> </div> <div id="droppapergrade"> </div> </div> <div class="mb35"> <div class="inline title-before" style="position:static;"> <span class="small-red">*</span> <span>类型:</span> </div> <div id="droppapertype"> </div> <span class="right morder-down"><span style="margin-right:10px;cursor:pointer;">更多</span><img src="../../../bundle/img/more-down.png" alt="" width="14" height="8" /></span> </div> <div class="mb35 areas"> <div class="mb35"> <div class="inline title-before" style="position:static;">  <span>年份:</span> </div> <div id="droppaperyear"> </div> </div> <div class="inline title-before" style="position:static;">  <span>地区:</span> </div> <div id="droppapersheng"> </div> <div id="droppapershi"> </div> <div id="droppaperxian"> </div> <div id="droppaperschool"> </div> </div> </div> </div>   </div> <div style="margin-bottom:10px"> <p class="confirm hide" id="input_papername_warn">名称: 最多输入 50 字／最少输入 5 字</p> </div> <div class="footer"> <div class="inline loaderto" style="width:145px;margin-right:45px;" id="submitpaperhead"> <span>确定</span> </div> <div class="inline loaderto" style="width:145px;" onclick="HidePaperLayer()"> <span>取消</span> </div> </div> </div> </div>  ')
    }
});
