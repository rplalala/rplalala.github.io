function getdate(e){var t=31536e6,n=2592e6,r=864e5,a=36e5,o=6e4;return function(e){var i=parseInt(function(e){return Math.floor(parseInt(e)/t)}(e)),u=parseInt(function(e){return Math.floor(parseInt(e)/n)}(e-i*t)),l=parseInt(function(e){return Math.floor(parseInt(e)/r)}(e-i*t-u*n)),f=parseInt(function(e){return Math.floor(parseInt(e)/a)}(e-i*t-u*n-l*r)),c=parseInt(function(e){return Math.floor(parseInt(e)/o)}(e-i*t-u*n-l*r-f*a)),m=parseInt(function(e){return Math.floor(parseInt(e)/1e3)}(e-i*t-u*n-l*r-f*a-c*o)),s="";0!=i&&(s=s+i+" 年 ");0!=u&&(s=s+u+" 月 ");0!=l&&(s=s+l+" 天 ");return s=(f<10?s+"0"+f:s+f)+" 时 ",s=(c<10?s+"0"+c:s+c)+" 分 ",s="本站已安全运行 "+(s=(m<10?s+"0"+m:s+m)+" 秒")}(e)}function getdiffTime(){var e=new Date("2021/12/31 12:00:00"),t=new Date;document.getElementById("timeShow").innerHTML=getdate(t-e)}var timer=null;function myAplayer(){let e=document.getElementsByClassName("aplayer-icon-lrc")[0];e?(e.click(),timer||clearTimeout(timer)):timer=setTimeout(myAplayer,0)}function addFav(){alert("您的浏览器不支持自动收藏😭 请 Ctrl + D 手动收藏本站😋")}myAplayer(),setInterval("getdiffTime()",1e3);