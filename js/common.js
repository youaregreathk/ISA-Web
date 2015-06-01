function navigation(){
    var html=""
    html+='<nav class="navbar navbar-default navbar-custom navbar-fixed-top">'
    html+='<div class="container-fluid">'
    html+='<!-- Brand and toggle get grouped for better mobile display -->'
    html+='<div class="navbar-header page-scroll">'
    html+='<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'
    html+='<span class="sr-only">Toggle navigation</span>'
    html+='<span class="icon-bar"></span>'
    html+='<span class="icon-bar"></span>'
    html+='<span class="icon-bar"></span>'
    html+='</button>'
    html+='<a class="navbar-brand" href="index.html"><img src="img/ISA/LOGO.jpg" height="40" width="40"/>UCLA ISA</a>'
    html+='</div>'

    html+='<!-- Collect the nav links, forms, and other content for toggling -->'
    html+='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
    html+='<ul class="nav navbar-nav navbar-right">'
    html+='<li>'
    html+='<a href="index.html">Home</a>'
    html+='</li>'
    html+='<li>'
    html+='<a href="about.html">About</a>'
    html+='</li>'
    html+='<li>'
    html+='<a href="calendar.html">Calendar</a>'
    html+='</li>'
    html+='<li>'
    html+='<a href="past_event.html">Past event</a>'
    html+='</li>'
    html+='<li>'
    html+='<a href="sponsorship.html">Sponsorship</a>'
    html+='</li>'
    html+='<li>'
    html+='<a href="contact.html">Contact</a>'
    html+='</li>'
    html+='</ul>'
    html+='</div>'
    html+='<!-- /.navbar-collapse -->'
    html+='</div>'
    html+='<!-- /.container -->'
    html+='</nav>'

    document.write(html)
}

function footer(){
    var html=""
    html+='<footer>'
    html+='<div class="container">'
    html+='<div class="row">'
    html+='<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">'
    html+='<ul class="list-inline text-center">'

    /*html+='<li>'
    html+='<a href="#">'
    html+='<span class="fa-stack fa-lg">'
    html+='<i class="fa fa-circle fa-stack-2x"></i>'
    html+='<i class="fa fa-twitter fa-stack-1x fa-inverse"></i>'
    html+='</span>'
    html+='</a>'
    html+='</li>'*/

    html+='<li>'
    html+='<a href="https://www.facebook.com/uclaisa/timeline">'
    html+='<span class="fa-stack fa-lg">'
    html+='<i class="fa fa-circle fa-stack-2x"></i>'
    html+='<i class="fa fa-facebook fa-stack-1x fa-inverse"></i>'
    html+='</span>'
    html+='</a>'
    html+='</li>'

    /*html+='<li>'
    html+='<a href="#">'
    html+='<span class="fa-stack fa-lg">'
    html+='<i class="fa fa-circle fa-stack-2x"></i>'
    html+='<i class="fa fa-github fa-stack-1x fa-inverse"></i>'
    html+='</span>'
    html+='</a>'
    html+='</li>'*/

    html+='<li>'
    html+='<a href="http://eepurl.com/bo3gR9">Subscribe our newsletter!</a>'
    html+='</li>'

    html+='</ul>'            
    html+='<p class="copyright text-muted">Copyright &copy; UCLA ISA 2015</p>'
    html+='</div>'
    html+='</div>'
    html+='</div>'
    html+='</footer>'

    document.write(html)
}