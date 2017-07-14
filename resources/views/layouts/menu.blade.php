<div id="left-menu" class="left" style="height: 483px;">
    <div class="person-center " data-urlid="menu27" data-href="/OrgUserCenter/user/baseInfo"></div>
    <ul>
        <li class="
            @if(strpos(request()->getRequestUri(), 'OrgExam'))
                active
                @endif
        ">
            <a href=" {{ asset('/OrgExam/Index/SubjectTest') }}"><div class="teach-supervise active" data-urlid="menu41" data-href="/OrgExam/Index/SubjectTest">知识测评</div></a>
        </li>
        <li class="
            @if(strpos(request()->getRequestUri(), 'OrgZiXun'))
                active
                @endif
        ">
            <a href=" {{ asset('/OrgZiXun/ZiXunGuanLi/IndexCounselor') }}"><div class="student-manage" data-urlid="menu42" data-href="/OrgZiXun/ZiXunGuanLi/IndexCounselor">咨询管理</div></a>
        </li>

    </ul>

</div>