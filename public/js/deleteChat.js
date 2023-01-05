
<!--
HTML file used to add CPaaS Portal header.

This file shows menu depending upon logged in partner type whether Partner/Top-Admin.

It includes all relevant CPaaS & OSTicket CSS and Script files along with all required plugins.

-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="">
        <title>EnableX Portal - Support </title>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet">
        <!-- Font Awesome CDN-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Font Awesome CDN-->

        <!-- Global stylesheets -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="/helpdesk/assets/default/css/theme.css?f4f5b6d" media="screen"/>

        <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet"
            type="text/css">
        <link href="/assets/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
        <link href="/assets/css/bootstrap.css" rel="stylesheet" type="text/css">
        <link href="/assets/css/fonts.css" rel="stylesheet" type="text/css">
        <link href="/assets/css/components.css" rel="stylesheet" type="text/css">
        <link href="/assets/css/colors.css" rel="stylesheet" type="text/css">
        <link href="/assets/css/core.css" rel="stylesheet" type="text/css">

        <link type="text/css" rel="stylesheet" href="/helpdesk/css/font-awesome.min.css?1"/>

        <link rel="stylesheet" href="/helpdesk/css/osticket.css?f4f5bd6" media="screen"/>
        <link rel="stylesheet" href="/helpdesk/assets/default/css/print.css?f4f5bc6" media="print"/>
        <!-- <link rel="stylesheet" href="/helpdesk/scp/css/typeahead.css?f4f5bc6" media="screen" /> -->
        <!-- <link type="text/css" href="/helpdesk/css/ui-lightness/jquery-ui-1.10.3.custom.min.css?f4f5bc6"
            rel="stylesheet" media="screen" />
        <link rel="stylesheet" href="/helpdesk/css/jquery-ui-timepicker-addon.css?f4f5bc6" media="all"/> -->
        <link rel="stylesheet" href="/helpdesk/css/thread.css?f4f5bc6" media="screen"/>
        <link rel="stylesheet" href="/helpdesk/css/redactor.css?f4f5bd6" media="screen"/>
        <link type="text/css" rel="stylesheet" href="/helpdesk/css/flags.css?f4f5bd6"/>
        <link type="text/css" rel="stylesheet" href="/helpdesk/css/rtl.css?f4f5bd6"/>
        <!-- <link type="text/css" rel="stylesheet" href="/helpdesk/css/select2.min.css?f4f5bc6"/> -->
        <!-- /global stylesheets -->

        <!-- Core JS files -->
        <script type="text/javascript" src="/assets/js/plugins/loaders/pace.min.js"></script>
        <script type="text/javascript" src="/assets/js/core/libraries/jquery.min.js"></script>        

        <script type="text/javascript" src="/helpdesk/js/jquery-3.5.1.min.js?f4f5bc6"></script>
        <script type="text/javascript" src="/helpdesk/js/jquery-ui-1.12.1.custom.min.js?f4f5bc6"></script>
        <script type="text/javascript" src="/helpdesk/js/jquery-ui-timepicker-addon.js?f4f5bc6"></script>
        <script src="/helpdesk/js/osticket.js?f4f5fa6"></script>
        <script type="text/javascript" src="/helpdesk/js/filedrop.field.js?f4f5bc6"></script>
        <script src="/helpdesk/scp/js/bootstrap-typeahead.js?f4f5bc6"></script>
        <script type="text/javascript" src="/helpdesk/js/redactor.min.js?f4f5bd6"></script>
        <script type="text/javascript" src="/helpdesk/js/redactor-plugins.js?f4f5bd6"></script>
        <script type="text/javascript" src="/helpdesk/js/redactor-osticket.js?f4f5bd6"></script>
        <!-- <script type="text/javascript" src="/helpdesk/js/select2.min.js?f4f5bc6"></script> -->
        <script type="text/javascript" src="/assets/js/core/libraries/popper.min.js"></script>
        <script type="text/javascript" src="/assets/js/core/libraries/bootstrap.min.js"></script>
        <!-- /core JS files -->        

        <!-- Theme JS files -->
        <script type="text/javascript" src="/assets/js/plugins/forms/styling/uniform.min.js"></script>
        <script type="text/javascript" src="/assets/js/plugins/forms/selects/bootstrap_multiselect.js"></script>
        <script type="text/javascript" src="/assets/js/plugins/ui/moment/moment.min.js"></script>
        <script type="text/javascript" src="/assets/js/plugins/pickers/daterangepicker.js"></script>
        <script type="text/javascript" src="/assets/js/core/app.js"></script>


        <!-- /theme JS files -->
        
         <!--asset js files-->
<script type="text/javascript" src="/assets/js/plugins/tables/datatables/datatables.min.js"></script>
<script type="text/javascript" src="/assets/js/plugins/forms/selects/select2.min.js"></script>
<script type="text/javascript" src="/assets/js/pages/datatables_basic.js"></script>
<script src="//cdn.datatables.net/plug-ins/1.10.11/sorting/date-eu.js" type="text/javascript"></script>
<!-- <script src="https://js.stripe.com/v3/"></script> --><script type='text/javascript' src='/assets/js/plugins/notifications/sweet_alert.min.js'></script>

        <!-- Leadfeeder script starts -->
        <script> 
            (function(){               
              window.ldfdr = window.ldfdr || {};
              (function(d, s, ss, fs){
                fs = d.getElementsByTagName(s)[0];
           
                function ce(src){
                  var cs  = d.createElement(s);
                  cs.src = src;
                  setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1);
                }
           
                ce(ss);
              })(document, 'script', 'https://sc.lfeeder.com/lftracker_v1_JMvZ8gkJG3982pOd.js');
            })();
          </script>                           
        <!-- Leadfeeder script ends -->
        <script>
            $(document).ready(function(){
                $('.cm_helpdesc_page .cm-wallet-container-section').insertBefore('.helpdesc_wrp');
            });
        </script>
    </head>

    <body class="cm_helpdesc_page">
        <!-- Top Bar -->
        <!-- <div class="navbar navbar-inverse">
            <div class="navbar-boxed">
                <div class="navbar-header"> -->
                    <!-- <a class="navbar-brand" href="/"><img src="/images/EnableX_-white-Logo.png" alt=""></a> -->

                    <!-- <ul class="nav navbar-nav visible-xs-block">
                        <li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5" style="font-family: icomoon;"></i></a></li>
                        <li><a class="sidebar-mobile-main-toggle"><i class="icon-paragraph-justify3" style="font-family: icomoon;"></i></a></li>
                    </ul>
                </div>

                <div class="navbar-collapse collapse" id="navbar-mobile">

                    <p class="navbar-text"><span class="label alert-txt">We've launched our Voice & SMS services! </span> </p>
                    <ul class="nav navbar-nav navbar-right">

                        


                        <li class="dropdown dropdown-user">
                            <a class="dropdown-toggle" data-toggle="dropdown">
                                <img src="/users/avtar.jpg" alt="User Profile Photo">
                                <span>Saraswati Linn-tanja</span>
                                <i class="caret"></i>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-right">
                                <li>
                                    <a href="/profile/" id="company_profile">
                                        <i class="icon-user-plus" style="font-family: icomoon;"></i>My Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="/change-password/" id="change_password"><i class="icon-coins" style="font-family: icomoon;"></i>
                                        Change Password
                                    </a>
                                </li> -->
                                <!-- <li>
                                    <a href="/profile/photo/" id="profile_photo"><i class="fa fa-picture-o"></i>
                                        Profile Photo
                                    </a>
                                </li>
                                <li class="divider"></li> -->
                                <!-- <li>
                                    <a class="dropdown-item" href="/logout/" id="logout">
                                        <i class="icon-coins" style="font-family: icomoon;"></i> Sign Out
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="navbar navbar-default" id="navbar-second">
            <div class="navbar-boxed">
                <ul class="nav flot-lft">
                    <li><a href="/"><img src="/img/logo-enx.png" alt="Enablex"></a></li>
                </ul>
                <ul class="nav navbar-nav no-border visible-xs-block">
                    <li><a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle"><i class="icon-menu7" style="font-family: icomoon;"></i></a></li>
                </ul>


                <div class="navbar-collapse collapse" id="navbar-second-toggle">
                    <ul class="nav navbar-nav navbar-right">
                        
<li class=" ">
    <a href="/dashboard/"  id="my-dashboard" >
        <i class="material-icons ">dashboard</i>	<span> My Dashboard</span>
       
    </a>
    
</li>
<li class=" bottom-space">
    <a href="/projects/"  id="my-project" >
        <i class="material-icons ">tune</i>	<span> My Projects</span>
       
    </a>
    
</li>
<li class="dropdown-submenu">
    <a href="#" class='dropdown-toggle' data-toggle='dropdown' id="video" >
        <i class="material-icons ">videocam</i>	<span> Video</span>
       
    </a>
    <ul class='' ><li class=''><a href=/video/overview/ id=video-overview >Dashboard</a></li><li class=''><a href=/video/get-started/?tab=get-started id=video-start-building >Get Started</a></li><li class=''><a href=/video/setting/?tab=settings id=video-room-settings >Settings</a></li><li class=''><a href=/reports/video/ id=video-insights-reports >Insights & Reports</a></li><li class=''><a href=https://www.enablex.io/developer/video-api/ id=video-room-settings >Documentation</a></li></ul>
</li>
<li class="dropdown-submenu">
    <a href="#" class='dropdown-toggle' data-toggle='dropdown' id="voice" >
        <i class="material-icons ">mic</i>	<span> Voice</span>
       
    </a>
    <ul class='' ><li class=''><a href=/voice/overview/ id=voice-overview >Dashboard</a></li><li class=''><a href=/voice/preference/whitelist-countries id=voice-preference >Preferences</a></li><li class=''><a href=/voice/call-settings/add-number-to-project id=voice-call-settings >Voice Settings</a></li><li class=''><a href=/voice/start-building/ id=voice-start-building >Start Building</a></li><li class=''><a href=/reports/voice/cdr id=voice-insights-reports >Insights & Reports</a></li><li class=''><a href=https://www.enablex.io/developer/voice-api/ id=sms-start-building target='_blank'>Documentation</a></li></ul>
</li>
<li class="dropdown-submenu">
    <a href="#" class='dropdown-toggle' data-toggle='dropdown' id="sms" >
        <i class="material-icons ">textsms</i>	<span> SMS</span>
       
    </a>
    <ul class='' ><li class=''><a href=/sms/overview/ id=sms-overview >Dashboard</a></li><li class=''><a href=/sms/try-now/ id=sms-try-now >Try Now</a></li><li class=''><a href=/sms/campaign-settings/ id=sms-my-campaigns >My Campaigns</a></li><li class=''><a href=/sms/preference/ id=sms-my-inventory >Settings</a></li><li class=''><a href=/reports/sms/ id=sms-analytics-report >Reports</a></li><li class=''><a href=https://www.enablex.io/developer/sms-api/ id=sms-start-building target='_blank'>Documentation</a></li></ul>
</li>
<li class=" bottom-space">
    <a href="/number/"  id="number" >
        <i class="material-icons ">dialpad</i>	<span> Number</span>
       
    </a>
    
</li>
<li class="dropdown-submenu">
    <a href="#" class='dropdown-toggle' data-toggle='dropdown' id="my-wallet" >
        <i class="material-icons ">account_balance_wallet</i>	<span> Billing and Payment</span>
       
    </a>
    <ul class='' ><li class=''><a href=/billing/overview/ id=bp-overview >Overview</a></li><li class=''><a href=/billing/top-up/ id=bp-wallet-and-funds >My Wallet and Funds</a></li><li class=''><a href=/billing/usage-summary/ id=bp-usage-summary >Usage Summary</a></li><li class=''><a href=/billing/my-invoices/ id=bp-my-invoices >My Invoice</a></li><li class=''><a href=/my-subscriptions id=bp-pricing >Pricing</a></li></ul>
</li>
<li class=" bottom-space">
    <a href="/analytics/"  id="analytics" >
        <i class="material-icons ">assessment</i>	<span> Analytics</span>
       
    </a>
    
</li>
<li class=" bottom-space active open">
    <a href="/helpdesk/"  id="support" >
        <i class="material-icons ">help_outline</i>	<span> Support</span>
       
    </a>
    
</li>

                    </ul>
                </div>
            </div>
        </div> -->
        <!-- <div class="wallet-sec">
            <div class="row">
            <div class="col-xs-8 col-md-8 col-lg-8">
                <nav>
                    <li class="light-color"><span>Plan: </span>Trial</li>
                    <li class="light-dark"><span>:</span> </li>
                </nav>
            </div>
            <div class="col-xs-4 col-md-4 col-lg-4">
                <a href="/billing/overview">
                    <button class="btn btn-denger pull-right">Top up wallet</button>
                </a>
            </div>
            </div>
        </div>  -->

        <div class="wallet-sec">
                        <div class="portal-banner">
                            <img src="/images/dash-Banner.png" alt="Recognizes EnableX as a leader">
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-md-8 col-lg-8">
                                <nav class="wallet-div">
                                    <li class="light-dark"><span>EnableX Wallet:</span><em>-$0.07</em> </li>
                                    <li class="light-color"><span>Plan: </span><em>Trial</em></li>
                                </nav>
                            </div>
                            <div class="col-xs-4 col-md-4 col-lg-4">
                                <a href="/billing/top-up">
                                    <button class="btn btn-denger pull-right">Top up wallet</button>
                                </a>
                            </div>
                        </div>
                    </div>
        <!-- /Top Bar -->

        <!-- Page container -->
        <div class="page-container">
            <div class="page-content">

                <!-- Main sidebar -->
                <div class="sidebar sidebar-main sidebar-default ">
                    <div class="sidebar-content">

                        <!-- Main navigation -->
                        <div class="sidebar-category sidebar-category-visible ">
                            <!-- <div class="category-title h6">
                                <span>Navigation</span>
                                <ul class="icons-list">
                                    <li><a href="#" data-action="collapse"></a></li>
                                </ul>
                            </div>-->

                            <!-- <div class="sidebar-user" style="">
                                <div class="card-body">
                                    <div class="media">
                                        <div class="mr-3">
                                            <a href="#"><img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="38" height="38" class="rounded-circle" alt=""></a>
                                        </div>

                                        <div class="media-body">
                                            <div class="media-title font-weight-semibold">Victoria Baker</div>
                                            <div class="font-size-xs opacity-50">
                                                <i class="icon-pin font-size-sm"></i> &nbsp;Santa Ana, CA
                                            </div>
                                        </div>

                                        <div class="ml-3 align-self-center">
                                            <a href="#" class="text-white"><i class="icon-cog3"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <div class="category-content sidebar-user">
                                <div class="navbar-header">
                                    <ul class="nav navbar-nav pull-left">
                                        <li>
                                            <div class="row">
                                                <div class="col-xs-8 col-md-8 col-lg-8">
                                                    <a href="/" ><img class="logo" src="/assets/images/enablexlogo.png" alt="logo"></a>                                        
                                                </div>
                                                <div class="col-xs-4 col-md-4 col-lg-4">
                                                    <a id="menu-bar"  class="sidebar-control " >
                                                        <!-- <i class="icon-paragraph-justify3"></i> -->
                                                        <img  src="/assets/images/menu.png" alt="menu"/>
                                                    </a>
                                                </div>
                                            </div>
                                        
                                        </li>
                                    </ul>
                                    <!-- <ul class="nav navbar-nav hidden-xs">
                                        <li><a data-toggle="collapse" data-target="#navbar-mobile"><img  src="/img/logo-enx.png" alt="menu"/></a></li>
                                    </ul> -->
                                </div>
                                <div style="display: none;" id="e-logo"  class="e-logo">
                                    <a class="navbar-brand  " href="/"> <img src="/assets/images/e_logo.png"></a>
                                </div>
                                <div class="media">
                                
                                    <div class="navbar-boxed ">
                                    
                                        <div class="navbar-collapse collapse " id="navbar-second-toggle">
                                            <ul class="nav navbar-nav media-body">
                                                
                                                
                                                <li class="dropdown dropdown-user ">
                                                    <img src="/img/users/avtar.jpg" alt="User Profile Photo">
                                                <div id="hidden-user" class="">
                                                    <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                                        <h6>Welcome</h6>
                                                    <span>Saraswati Linn-tanja  <i class="caret"></i></span>             
                                                    </a>
                                
                                                    <ul class="dropdown-menu dropdown-menu-right">
                                                        <li>
                <a href="/account-settings/profile/" id="accounts">
                    My Profile
                </a>
            </li>
                                                        <li>
                <a href="/account-settings/password/" id="change_password">
                    Change Password
                </a>
            </li>
                                                        <li>
                <a href="/account-settings/notification/" id="notification">
                    Notification Settings
                </a>
            </li>
                                                        <li>
                <a href="/account-settings/users/" id="user-management">
                    User Management
                </a>
            </li>
                                                        <!-- <li>
                                                            <a class="dropdown-item" href="/logout/" >Sign Out
                                                            </a>
                                                        </li> -->
                                                    </ul>
                                                </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                            <!-- <div class="user-details">
                                    <a href="#" class="media-left"><img src="/images/ovalCopy.png" class="img-circle" alt=""></a>
                                    <div class="media-body">
                                        
                                        <span class="media-heading text-semibold">Welcome</span>
                                        
                                    <ul class="nav">
                                        <li class="dropdown dropdown-user">
                                            <a class="dropdown-toggle no-padding" data-toggle="dropdown" aria-expanded="true">
                                                <img src="/images/avtar.jpg" alt="">
                                                <span>Saraswati Linn-tanja</span>
                                                <i class="caret"></i>
                                            </a>
                    
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                
                                                <li>
                                                    <a href="/account-settings/password/" id="change_password"><i class="fa fa-key"></i>
                                                        Change Password
                                                    </a>
                                                </li>
                                                
                                                <li>
                                                    <a class="dropdown-item" href="/logout/" id="logout">
                                                        <i class="icon-switch2"></i>Sign Out
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                        
                                    </div>
                                    
                                </div>   -->

                                    
                                </div>
                            </div>

                            <div class="category-content no-margin">
                                <ul class="navigation navigation-main navigation-accordion navigation-bordered">
                                    
<li class=" ">
    <a href="/dashboard/"  id="my-dashboard" >
        <i class="material-icons ">dashboard</i>	<span> My Dashboard</span>
       
    </a>
    
</li>
<li class=" bottom-space">
    <a href="/projects/"  id="my-project" >
        <i class="material-icons ">tune</i>	<span> My Projects</span>
       
    </a>
    
</li>
<li class="dropdown-submenu">
    <a href="#" class='dropdown-toggle' data-toggle='dropdown' id="video" >
        <i class="material-icons ">videocam</i>	<span> Video</span>
       
    </a>
    <ul class='' ><li class=''><a href=/video/overview/ id=video-overview >Dashboard</a></li><li class=''><a href=/video/get-started/?tab=get-started id=video-start-building >Get Started</a></li><li class=''><a href=/video/setting/?tab=settings id=video-room-settings >Settings</a></li><li class=''><a href=/reports/video/ id=video-insights-reports >Insights & Reports</a></li><li class=''><a href=https://www.enablex.io/developer/video-api/ id=video-room-settings >Documentation</a></li></ul>
</li>
<li class="dropdown-submenu">
    <a href="#" class='dropdown-toggle' data-toggle='dropdown' id="voice" >
        <i class="material-icons ">mic</i>	<span> Voice</span>
       
    </a>
    <ul class='' ><li class=''><a href=/voice/overview/ id=voice-overview >Dashboard</a></li><li class=''><a href=/voice/preference/whitelist-countries id=voice-preference >Preferences</a></li><li class=''><a href=/voice/call-settings/add-number-to-project id=voice-call-settings >Voice Settings</a></li><li class=''><a href=/voice/start-building/ id=voice-start-building >Start Building</a></li><li class=''><a href=/reports/voice/cdr id=voice-insights-reports >Insights & Reports</a></li><li class=''><a href=https://www.enablex.io/developer/voice-api/ id=sms-start-building target='_blank'>Documentation</a></li></ul>
</li>
<li class="dropdown-submenu">
    <a href="#" class='dropdown-toggle' data-toggle='dropdown' id="sms" >
        <i class="material-icons ">textsms</i>	<span> SMS</span>
       
    </a>
    <ul class='' ><li class=''><a href=/sms/overview/ id=sms-overview >Dashboard</a></li><li class=''><a href=/sms/try-now/ id=sms-try-now >Try Now</a></li><li class=''><a href=/sms/campaign-settings/ id=sms-my-campaigns >My Campaigns</a></li><li class=''><a href=/sms/preference/ id=sms-my-inventory >Settings</a></li><li class=''><a href=/reports/sms/ id=sms-analytics-report >Reports</a></li><li class=''><a href=https://www.enablex.io/developer/sms-api/ id=sms-start-building target='_blank'>Documentation</a></li></ul>
</li>
<li class=" bottom-space">
    <a href="/number/"  id="number" >
        <i class="material-icons ">dialpad</i>	<span> Number</span>
       
    </a>
    
</li>
<li class="dropdown-submenu">
    <a href="#" class='dropdown-toggle' data-toggle='dropdown' id="my-wallet" >
        <i class="material-icons ">account_balance_wallet</i>	<span> Billing and Payment</span>
       
    </a>
    <ul class='' ><li class=''><a href=/billing/overview/ id=bp-overview >Overview</a></li><li class=''><a href=/billing/top-up/ id=bp-wallet-and-funds >My Wallet and Funds</a></li><li class=''><a href=/billing/usage-summary/ id=bp-usage-summary >Usage Summary</a></li><li class=''><a href=/billing/my-invoices/ id=bp-my-invoices >My Invoice</a></li><li class=''><a href=/my-subscriptions id=bp-pricing >Pricing</a></li></ul>
</li>
<li class=" bottom-space">
    <a href="/analytics/"  id="analytics" >
        <i class="material-icons ">assessment</i>	<span> Analytics</span>
       
    </a>
    
</li>
<li class=" bottom-space active open">
    <a href="/helpdesk/"  id="support" >
        <i class="material-icons ">help_outline</i>	<span> Support</span>
       
    </a>
    
</li>
                          
                                </ul>
                            
                            </div>
                            <ul id="logout" class="navigation navigation-main navigation-accordion navigation-bordered">
                                <li class="logout pt-10 pb-10">
                                    <a href="/logout/">
                                        <i class="material-icons">logout</i>    <span> Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>	
                        <!-- /main navigation -->

                    </div>
                </div>
                <!-- /main sidebar -->

                <!-- Main content -->
                <div class="content-wrapper">
                    <div class="helpdesc_wrp"></div>
                    <!-- Page header -->
                    <!-- <div class="page-header"> 
                        <div class="page-header-content">
                            <div class="page-title">
                                <h4>
                                    <span class="text-semibold">Support</span>
                                    <small class="display-block"><a  href='/dashboard/'>Dashboard</a> / Support</small>
                                    <small class="display-block my-prog-p"></small>
                                </h4>
                            </div>
                        </div> 
                </div> -->
                    <!-- /page header -->
                    
                    <div class="search">
    <div class="row">
        <div class="col-xs-12 col-lg-12 col-md-12 project-mar-top">
            <h1 class="sett-headding ">Ticket History</h1>
            <p class="p-0">View existing or closed tickets you submitted on this account.</p>
        </div>
    </div>
    <div class="helpdesk-wrapper">
    <div class="flush-left">
        <form class="form-horizontal" action="./" method="get" id="ticketSearchForm">
            <input type="hidden" name="a"  value="search">
            <div class="row p-0">
                <div class="col-md-12 col-lg-12 col-xs-12 p-0">
                    <div class="col-lg-4 p-0">
                        <input type="text" class="form-control" name="keywords" size="30" value="">
                    </div>
                    <div class="col-lg-4">
                        <input type="submit" class="btn btn-default" value="Search">
                    </div>
                    
                </div>
            </div>
        </form>
    
    </div>
    <div class="flush-rihgt">
    <a class="btn btn-primary has-text new" href="/helpdesk/open.php">Create New Ticket</a>
</div>
</div>

    
</div>

<div class="ticket-list">
<!-- <p class="col-md-8 p-0 m-0">
    <a href=""
        ><i class="refresh icon-refresh"></i>
        </a>
</p> -->

<p class="col-md-4 pull-right text-right states">
    <!-- <small> -->
    <i class="icon-file-alt" style="color: #00AEEF;"></i>
    <a class="state active"
        href="?a=search&amp;status=open">
    Open (2)    </a>
        &nbsp;
    <span>|</span>
        &nbsp;
    <i class="icon-file-text" style="color: #00AEEF;"></i>
    <a class="state "
        href="?a=search&amp;status=closed">
    Closed Ticket (1)    </a>
    <!-- </small> -->
</p>
</div>
<table class="table table-bordered table-lg cm-responsive-table" id="ticketTable">
    <!-- <caption>Showing&nbsp;1 - 2 of 2 Open Tickets</caption> -->
    <thead class="thead-dark">
        <tr class="active">
            <th class="text-center;" colspan="5">Showing&nbsp;1 - 2 of 2 Open Tickets</th>
        </tr>
        <tr class="active">
            <th class="col-sm-2">
                <a href="./?sort=ID&order=ASC&amp;" title="Sort By Ticket ID">Ticket #&nbsp;<i class="icon-sort"></i></a>
            </th>
            <th class="col-sm-2">
                <a href="./?sort=date&order=ASC&amp;" title="Sort By Date">Creation Date&nbsp;<i class="icon-sort"></i></a>
            </th>
            <th class="col-sm-3">
                <a href="./?sort=dept&order=ASC&amp;" title="Sort By Department">Department&nbsp;<i class="icon-sort"></i></a>
            </th>
            <th class="col-sm-3">
                <a href="./?sort=subject&order=ASC&amp;" title="Sort By Subject">Subject&nbsp;<i class="icon-sort"></i></a>
            </th>
            <th class="col-sm-2">
                <a href="./?sort=status&order=ASC&amp;" title="Sort By Status">Status&nbsp;<i class="icon-sort"></i></a>
            </th>
        </tr>
    </thead>
    <tbody>
                <tr id="1283">
                <td>
                <a class="Icon webTicket" title="info@sattvaconnect.com"
                    href="./?id=1283">001293</a>
                </td>
                <td>27 Apr,2022</td>
                <td><span class="truncate">Billing Support</span></td>
                <td>
                                      <div style="max-height: 1.2em; max-width: 320px;" class="link truncate" href="./?id=1283">API not working</div>
                                    </td>
                <td><span class='label label-success'>Open</span></td>
            </tr>
                    <tr id="1277">
                <td>
                <a class="Icon webTicket" title="info@sattvaconnect.com"
                    href="./?id=1277"><b>001287</b></a>
                </td>
                <td>25 Apr,2022</td>
                <td><span class="truncate">Web Support</span></td>
                <td>
                                      <div style="max-height: 1.2em; max-width: 320px;" class="link truncate" href="./?id=1277"><b>Delete Chat Feature</b></div>
                                    </td>
                <td><span class='label label-success'>Open</span></td>
            </tr>
            </tbody>
</table>
<div>&nbsp;Page:
<b>[1]</b>&nbsp;</div>        <link rel="stylesheet" type="text/css" href="/helpdesk/css/filedrop.css?f4f5bc6"/><!--
HTML file used to add CPaaS Portal footer.

-->
        </div>
    </div>
</div>
<!-- Page container -->

<div  id="welcome-modal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <div id="carousel-example-generic" class="carousel slide">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                </ol>
                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                    <div class="item active">
                        <img class="img-responsive" src="/images/welcome.png" alt="welcom">
                        <div class="carousel-caption d-none d-md-block text-right">
                            <h2>WELCOME</h2>
                            <h3>
                                Your account is ready. Start Building Solutions that Engage!
                            </h3>
                            <!--<h3>Your account is ready with <br><span> free minutes </span></h3>-->
                            <div class="carousel-btn-rgt">
                                <ul>
                                    <li><a class="Skip-Intro" data-dismiss="modal">Skip Intro</a></li>
                                    <li class="carousel-Next">
                                        <a href="/apps/">Get App Key
                                            <img src="/images/video.png" width="30px" alt="video">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="/images/popup-slider-1.png" alt="popup-slider-1">
                        <div class="carousel-caption">
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="/images/popup-slider-2.png" alt="popup-slider-2">
                        <div class="carousel-caption">
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="/images/popup-slider-3.png" alt="popup-slider-3">
                        <div class="carousel-captionGet">
                            <a href="/apps/">
                                Get App Key <img style="margin-left: 10px;" src="/images/video.png" width="30px" alt="video">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Controls -->
                <a class="left carousel-control" href="#carousel-example-generic" role="button"
                data-slide="prev">
                    <span class="glyphicon glyphicon-menu-left"></span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button"
                data-slide="next">
                    <span class="glyphicon glyphicon-menu-right"></span>
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Footer -->
<!-- <footer>
    <div class="footer footer-boxed">
        <div class="row">
            <div class="col-md-6">
                <ul>
                    <li><a href="https://www.enablex.io/legals/tou/" target="_blank">Terms </a></li>
                    <li><a href="https://www.enablex.io/legals/privacy-policy/" target="_blank"> Privacy Policy</a></li>
                </ul>
            </div>
            <div class="col-md-6">
                <p class="text-right">	© 2022 vCloudx Pte. Ltd.</p>
            </div>
        </div>
    </div>
</footer> -->
<!-- <footer class="footer-pricing">
    © 2022 VCLOUDX PTE. LTD. All Rights Reserved.
</footer> -->
<div id="overlay"></div>
<!-- <div id="loading">
    <h4>Please Wait!</h4>
    <p>Please wait... it will take a second!</p>
</div> -->
<!-- /footer -->

<!--Select 2-->
<script>
    if ($('select').length > 0)
        $('select').select2();

    $(function () {
        $(".styled").uniform({
            radioClass: 'choice'
        });
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(document).ready(function(){
        $("#grid-view").click(function(){
            $("#grid-view-sec").toggle();
            $("#table-view-sec").hide();
        });

        $("#table-view").click(function(){
            $("#grid-view-sec").hide();
            $("#table-view-sec").toggle();
            
        });
    });

    (function(w,d,s){w._uptime_rum={};w._uptime_rum.uuid='JSM4-3A432D5A08AB7DD2';w._uptime_rum.url='https://rum.uptime.com/rum/record-data';s=document.createElement('script');s.async=1;s.src='https://rum.uptime.com/static/rum/compiled/rum.js';d.getElementsByTagName('head')[0].appendChild(s);})(window,document);
</script>
</body>
</html>