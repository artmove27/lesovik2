<?php
include ('sc.inc.php');
$a = $_GET['sc'];
$z = ".scn";
$ff = $a.$z;
//echo $ff;
  if(!file_exists($ff)){ header('Location: http://www.er404.ru/');
     exit; }

?>
<html>
<head>
 <script type="text/javascript" src="http://www.er404.ru/js/jquery.js"></script>
<script type="text/javascript" src="http://www.er404.ru/js/easyTooltip.js"></script>

<title>Мир 404 / 

<?php echo $S_NAME ; ?> 
/
<?php echo $Q_NAME ; ?>
</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
<style type="text/css">
<!--
BODY {
	FONT-SIZE: 12px; FONT-FAMILY: Geneva, Arial, Helvetica, san-serif
}
TD {
	FONT-SIZE: 12px; FONT-FAMILY: Geneva, Arial, Helvetica, san-serif
}

.tt {  
	FONT-WEIGHT: normal; FONT-SIZE: 20px; FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif
; color: #333399}
.heading { FONT-WEIGHT: bold; FONT-SIZE: 12px; FONT-FAMILY: Geneva, Arial, Helvetica, san-serif; color: #333399 }
.productheading { FONT-WEIGHT: bold; FONT-SIZE: 12px; FONT-FAMILY: Geneva, Arial, Helvetica, san-serif; color: #4282C6}
.topm {  font-family: "Times New Roman", Times, serif; font-size: 14px}
-->
<!--
ul#main-nav {font-family:helvetica,arial,sans-serif;margin:0;padding:0;float:left;width:100%;}
ul#main-nav li {margin:0;padding:0;list-style:none;float:left;margin:0 0.3em 0 0;}
ul#main-nav li a {text-decoration:none;display:block;padding:0.3em 0.5em;border:1px solid silver;color:#003;background:#fff;}
ul#main-nav li a:hover {border:1px solid gray;color:#000;background:#efefef}
-->
</style>
  
<script type="text/javascript">
<!--
//2
$(document).ready(function(){	
		$("a#link").easyTooltip({
			useElement: "item"				   
		});
                $("a#link2").easyTooltip({
			useElement: "item2"				   
		});

    $("a#link3").easyTooltip({
			useElement: "item3"				   
		});
    $("a#link4").easyTooltip({
			useElement: "item4"				   
		});
    $("a#link5").easyTooltip({
			useElement: "item5"				   
		});

    $("a#link6").easyTooltip({
			useElement: "item6"				   
		});

    $("a#link7").easyTooltip({
			useElement: "item7"				   
		});

    $("a#link8").easyTooltip({
			useElement: "item8"				   
		});

    $("a#link9").easyTooltip({
			useElement: "item9"				   
		});

	});

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->
</script>
<style>

/* Easy Tooltip */

#easyTooltip{
	margin:0 10px 1em 0;
	width:250px;
	padding:8px;
	background:#fcfcfc;
	border:1px solid #e1e1e1;
	line-height:130%;				
	}
#easyTooltip h3{
	margin:0 0 .5em 0;
	font:13px Arial, Helvetica, sans-serif;
	text-transform:uppercase;
   color: #990033;
	}	
#easyTooltip p{
	margin:0 0 .5em 0;
	}		
#easyTooltip img{
		background:#fff;
		padding:1px;
		border:1px solid #e1e1e1;
		float:left;
		margin-right:10px;
		}		

#item{display:none;}
#item2{display:none;}
#item3{display:none;}
#item4{display:none;}					
#item5{display:none;}
#item6{display:none;}
#item7{display:none;}
#item8{display:none;}
#item9{display:none;}
/* // Easy Tooltip */

</style>
</head>

<body bgcolor="#FFFFFF" text="#000000">
 <!--  шапка -->
<div align="center" > 
  <table width="900" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td>
        <div align="right"><span class="tt">Мир 404 

/
<?php echo $S_NAME ; ?>  

//</span></div>
      </td>
    </tr>
    <tr>
      <td> 
<ul id="main-nav">
 <li><a href="http://www.er404.ru/" title="Мир 404">Home</a></li>
<!--
<li><a href="http://www.er404.ru/scena/000001/scena.php?sc=000001"><b><font color="#990033">Quest</font></b></a></li>
--> 
<li><a href="http://www.er404.ru/about.html" title="О проекте">О проекте</a></li>
 <li><a href="http://www.er404.ru/scena.php?sc=autor" title="Авторы">Авторы</a></li>
 <li><a href="http://www.er404.ru/scena.php?sc=reklama" title="Реклама">Реклама</a></li>
<!--
          <li><a href="file:///C|/www/er404/e.g.%20%27/about/index.html%27" title="e.g. 'Information about the company ...">Контакты</a></li>
-->
 <li><a href="http://www.702px.ru" title="e.g. 'Information about the company ...">Блог</a></li>
</ul>
 </td>
    </tr>
    <tr>
      <td height="15">&nbsp;</td>
    </tr>
  </table>
  
</div> 
<table width="900" border="0" cellspacing="0" cellpadding="0" align="center">
  <tr> 
    <td> 
      <div align="center">
        <script type="text/javascript"><!--
google_ad_client = "ca-pub-9627185953308729";
/* t2-404 */
google_ad_slot = "0997040254";
google_ad_width = 728;
google_ad_height = 15;
//-->
</script>
        <script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
      </div>
    </td>
  </tr>
  <tr>
    <td height="10">&nbsp;</td>
  </tr>
</table>

<!-- сцена -->
<?php

include ($ff);
//include('000001.scn');
?>
<!--  подвал  -->
<table width="900" border="0" cellspacing="0" cellpadding="0" align="center">
  <tr>
    <td colspan="2"> 
      <div align="right">
        <script type="text/javascript" src="//yandex.st/share/share.js" charset="utf-8"></script>
      </div>
      <div class="yashare-auto-init" data-yashareL10n="ru" data-yashareType="button" data-yashareQuickServices="yaru,vkontakte,facebook,twitter,odnoklassniki,moimir,lj,friendfeed,moikrug"></div> 
</td>
  </tr>
  <tr> 
    <td colspan="2"> 
      <hr size="1" align="center">
    </td>
  </tr>
  <tr> 
    <td> 
      <script type="text/javascript"><!--
google_ad_client = "ca-pub-9627185953308729";
/* er404 */
google_ad_slot = "0736976171";
google_ad_width = 728;
google_ad_height = 90;
//-->
</script>
      <script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
    </td>
    <td> 
      <div align="right"><a href="https://plus.google.com/110017850993014945586" target="_blank">Copyright 
        ©2008<br>
        WebMaster A. Tomilov</a><br>
      </div>
    </td>
  </tr>
  <tr> 
    <td>&nbsp; </td>
    <td> 
      <p align="right">&nbsp;</p>
      <!-- toodoo-key: kgg6GJRMEu6rBXrvr5fnp -->
      <!-- google -->
      <p align="right"> 
        <script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
        <script type="text/javascript">
var pageTracker = _gat._getTracker("UA-4518055-4");
pageTracker._trackPageview();
</script>
      </p>
      <p align="right"> 
        <!-- HotLog -->
        <script type="text/javascript" language="javascript">
hotlog_js="1.0";
hotlog_r=""+Math.random()+"&s=578335&im=15&r="+escape(document.referrer)+"&pg="+
escape(window.location.href);
document.cookie="hotlog=1; path=/"; hotlog_r+="&c="+(document.cookie?"Y":"N");
</script>
        <script type="text/javascript" language="javascript1.1">
hotlog_js="1.1";hotlog_r+="&j="+(navigator.javaEnabled()?"Y":"N")
</script>
        <script type="text/javascript" language="javascript1.2">
hotlog_js="1.2";
hotlog_r+="&wh="+screen.width+'x'+screen.height+"&px="+
(((navigator.appName.substring(0,3)=="Mic"))?
screen.colorDepth:screen.pixelDepth)</script>
        <script type="text/javascript" language="javascript1.3">hotlog_js="1.3"</script>
        <script type="text/javascript" language="javascript">hotlog_r+="&js="+hotlog_js;
document.write("<a href='http://click.hotlog.ru/?578335' target='_top'><img "+
" src='http://hit29.hotlog.ru/cgi-bin/hotlog/count?"+
hotlog_r+"&' border=0 width=88 height=31 alt=HotLog><\/a>")
</script>
        <!-- /HotLog -->
      </p>
    </td>
  </tr>
</table>



</body>
</html>
