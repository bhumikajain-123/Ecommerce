<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>@stack('title')</title>

    <link href="{{ asset('css/dashboardstyles.css') }}" rel="stylesheet">
    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"></script>
</head>

<body class="sb-nav-fixed">

    <!-- 🔵 HEADER -->
    @include('user.layouts.header')

    <div id="layoutSidenav">

        <!-- 🔵 SIDEBAR -->
        @include('user.layouts.sidebar')

        <!-- 🟢 CONTENT -->
        <div id="layoutSidenav_content">

            <main>
                <div class="container-fluid px-4 mt-4">

                    @yield('content')

                </div>
            </main>

            <!-- 🔻 FOOTER -->
            @include('user.layouts.footer')

        </div>
    </div>

    <script src="{{ asset('js/dashboard_script.js') }}"></script>

</body>
</html>