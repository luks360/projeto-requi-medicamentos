<?php include('../../../backend/sessions.php'); ?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--<meta name="google-signin-client_id" content="469673828599-qsk5o17sgmtifbgglfdl85bto9e0s776.apps.googleusercontent.com">-->
    <title>Home</title>

    <script src="https://accounts.google.com/gsi/client" async defer></script>

    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <!--JQuery-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


    <!-- Custom styles for this template -->
    <link href="../../../../public/css/index-style.css" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link rel="icon" type="imagem/png" href="../../../../public/img/logoP.png"/>

    <script src="../../../backend/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <!--<script src="../../../backend/signin.js"></script>-->

    <!--Google Platform Library-->
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
    <script src="../../../backend/login.js"></script>

    <style>
        a {
            text-decoration: none;
        }
    </style>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style="background-color: #90EE90 !important;">
            <div class="container-fluid">
                <!-- Logo icon -->
                <b class="logo-icon">
                    <!-- Dark Logo icon -->
                    <img class="iconP" src="../../../../public/img/logoP.png" alt="homepage" />
                </b>
                <!--End Logo icon -->
                <!-- Logo text -->
                <span class="logo-text">
                    <!-- dark Logo text -->
                    <img src="../../../../public/img/logoText.png" alt="homepage" style="height: 45px; width: 100px;"/>
                </span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contato</a>
                        </li>
                    </ul>
                    <div class="data">
                    <?php
                    if ($login_button == '') {
                        echo '<div id="buttonDiv"></div>';
                        // Botão do google com html
                        // echo '<div id="g_id_onload"
                        // data-client_id="YOUR_GOOGLE_CLIENT_ID"
                        // data-login_uri="https://your.domain/your_login_endpoint"
                        // data-auto_prompt="false">';
                        // echo '</div>';
                        // echo '<div class="g_id_signin"
                        // data-type="standard"
                        // data-size="large"
                        // data-theme="outline"
                        // data-text="sign_in_with"
                        // data-shape="rectangular"
                        // data-logo_alignment="left">';
                        // Botão do google com javascript
                        // echo '<div class="dropdown">';
                        // echo '<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><img src=' . $_SESSION['user_image'] . ' class="rounded-circle" width="40" height="40"/><h5 style="display: inline-block; padding-left: 5px; color: #2ab152;">' . $_SESSION['user_first_name'] .'</h5></a>';

                        // echo '<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">';
                        //     echo '<li><a class="dropdown-item" href="dashboard.php">Dashboard</a></li>';
                        //     echo '<li><a class="dropdown-item" href="profile.php">Perfil</a></li>';
                        //     echo '<li><a class="dropdown-item" href="solicitations.php">Solicitações</a></li>';
                        //     echo '<li><a class="dropdown-item" href="../../../backend/logout.php">Logout</a></li>';
                        // echo '</ul>';
                        // echo '</div>';
                    } else {
                        echo '<div>' . $login_button . '</div>';
                    }
                    
                    ?>
                    </div>
                    <!--<form>                        
                        <button class="cadastrar btn btn-outline-success" type="submit">Cadastrar-se</button>
                        <button class="login btn btn-outline-success" type="submit">Login</button>
                    </form>-->
                </div>
            </div>
        </nav>
    </header>

    <main>

        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="bd-placeholder-img" width="100%" height="100%" src="../../../../public/img/farmacia.png"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" style="filter: brightness(33%);">

                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Quem somos</h1>
                            <p>A FRM procura ajudar a resolver suas demandas de medicamentos rapidamente.</p>
                            <p><a class="btn btn-lg btn-primary" href="#quemsomos">Saiba mais</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="bd-placeholder-img" width="100%" height="100%" src="../../../../public/img/medicamentos.jpg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" style="filter: brightness(33%);">

                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Precisa de medicamentos?</h1>
                            <p>Você veio ao lugar certo, faça já seu cadastro!</p>
                            <p><a class="btn btn-lg btn-primary" href="#paraclientes">Saiba mais</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


        <!-- Marketing messaging and featurettes
  ================================================== -->
        <!-- Wrap the rest of the page in another container to center all the content. -->

        <div class="information">
            <h2 class="featurette-heading information" style="font-weight: 400; margin-top: -35px; margin-bottom: 35px; text-align: center;">Informações</h2>
        </div>

        <div class="container marketing">

            <!-- START THE FEATURETTES -->

            <div class="row featurette" id="quemsomos">
                <div class="col-md-7">
                    <h2 class="featurette-heading ">O que é a FRM? <span class="text-muted"> Um pouco sobre
                            nós.</span></h2>
                    <p class="lead">A FRM é um projeto de sistema que visá melhorar a requisição de medicamentos, para dessa forma aqueles que usarem este sistema tenham a maior praticidade possivel.
                    </p>
                </div>
                <div class="col-md-5">
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400"
                        height="400" src="../../../../public/img/logoG.png" role="img">
                </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette" id="paraclientes">
                <div class="col-md-7">
                    <h2 class="featurette-heading">O que eu como cliente posso fazer? <span class="text-muted">Simples, tenha suas necessidades atendidas!</span></h2>
                    <p class="lead">Obviamente você primeiro terá que ter um cadastro no sistema, e depois disso você poderá: </p><br/>
                    <li class="lead">Fazer requisições de medicamentos rapidamente;</li>
                    <li class="lead">Escolher aceitar a oferta recebida ou não.</li>
                </div>
                <div class="col-md-5">
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="../../../../public/img/clients.png" width="350"
                        height="350" role="img" />
                </div>
            </div>

            <hr class="featurette-divider">

            <!-- /END THE FEATURETTES -->

        </div><!-- /.container -->

        

        <!-- FOOTER -->
        <footer class="container">
            <p class="float-end"><a href="#"><button class="topo btn btn-outline-success">Voltar ao topo</button></a></p>
            <p>2022 © FRM, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
    </main>
</body>

</html>