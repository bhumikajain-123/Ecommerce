<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Assets -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <link href = "{{asset('css/style.cs') }}" rel = "stylesheet">
  <script src = "{{asset('js/script.js') }}"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <title>@yield('title')</title>
</head>

<body>

  <!-- Header -->
  @include('layouts.header')

  <!-- Page Content -->
  <div class="container mt-4">
    @yield('content')
  </div>

  <!-- Footer -->
  @include('layouts.footer')

  <!-- JS -->
  <script src="{{ asset('js/app.js') }}"></script>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>