<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', "学科评测")</title>

    <!-- Styles -->
    <link href="{{ asset('bundle/css/common/base.css') }}" rel="stylesheet">
    <link href="{{ asset('bundle/css/common/color.css') }}" rel="stylesheet">
    @yield('meta')
</head>

<body onresize="changeMenuHeight()">
    <div class="pop-mask"></div>
    @include('layouts.menu')

    @yield('content')
    <div id="divLoading" style="display: none">
        <div align="center" style="margin-top: 30px; margin-bottom: 30px;">
            <img src="http://ex.mofangge.com/bundle/img/loading.gif">
        </div>
    </div>
    <!-- Scripts -->
    <script type="text/javascript">
        var el = document.getElementById("left-menu");
        var org = document.getElementById("middle-org");
        changeMenuHeight();
        function changeMenuHeight() {
            el.style.height = document.documentElement.clientHeight + 'px';
            document.getElementById("top-head").style.width = document.documentElement.clientWidth - 130 + 'px';
            if (org) {
                org.style.height = document.documentElement.clientHeight - 80 + 'px';
                document.querySelector("#middle-org > ul.org").style.height = document.documentElement.clientHeight - 80 - 58 + 'px';
            }
        }
    </script>
    <script src="{{ asset('bundle/js/jquery-2.2.0.min.js') }}"></script>
    <script src="{{ asset('bundle/js/vendor.js') }}"></script>
    <script src="{{ asset('bundle/js/common.js') }}"></script>
    <script src="{{ asset('bundle/js/index.js') }}"></script>
    {{--<script src="{{ asset('bundle/js/SubjectTest.js') }}"></script>--}}
    @yield('javaScript')

</body>
</html>
