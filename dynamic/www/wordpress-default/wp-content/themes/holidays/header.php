<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- Use title if it's in the page YAML frontmatter -->
        <title><?php echo get_the_title( ); ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <base href="/">

        <?php wp_head(); ?>
        <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/css/global.css">

        <meta name="author" content="www.benrajalu.net" />
        <meta name="application-name" content="Vacances 2015" />

        <link rel="icon" type="image/ico" href="./favicon.ico">
    </head>
    <body <?php body_class(); ?>>
        <div id="page" ng-app="app">
            <!--[if lt IE 8]>
                <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
            <![endif]-->