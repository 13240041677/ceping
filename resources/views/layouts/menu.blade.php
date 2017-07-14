<div id="left-menu" class="left" style="height: 483px;">
    <div class="person-center " data-urlid="menu27" data-href=""></div>
    <ul>
        <li class="
            @if(strpos(request()->getRequestUri(), 'OrgExam') && !strpos(request()->getRequestUri(), 'OrgExam/Index/SubReport'))
                active
                @endif
        ">
            <div class="teach-supervise @if(strpos(request()->getRequestUri(), 'OrgExam') && !strpos(request()->getRequestUri(), 'OrgExam/Index/SubReport'))
                    active
                    @endif" data-urlid="menu41" data-href="/OrgExam/Index/SubjectTest">知识测评</div>
        </li>
        <li class="
                @if(strpos(request()->getRequestUri(), 'OrgZiXun'))
                active
                @endif
        ">
            <div class="student-manage
                    @if(strpos(request()->getRequestUri(), 'OrgZiXun'))
                    active
                    @endif" data-urlid="menu42" data-href="/OrgZiXun/ZiXunGuanLi/IndexCounselor">咨询管理</div>
        </li>

    </ul>

</div>