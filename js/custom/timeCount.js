function getdate(t){var e=31536e6,n=2592e6,r=864e5,a=36e5,o=6e4;return function(t){var f=parseInt(function(t){return Math.floor(parseInt(t)/e)}(t)),u=parseInt(function(t){return Math.floor(parseInt(t)/n)}(t-f*e)),i=parseInt(function(t){return Math.floor(parseInt(t)/r)}(t-f*e-u*n)),I=parseInt(function(t){return Math.floor(parseInt(t)/a)}(t-f*e-u*n-i*r)),s=parseInt(function(t){return Math.floor(parseInt(t)/o)}(t-f*e-u*n-i*r-I*a)),p=parseInt(function(t){return Math.floor(parseInt(t)/1e3)}(t-f*e-u*n-i*r-I*a-s*o)),c="";0!=f&&(c=c+f+" 年 ");0!=u&&(c=c+u+" 月 ");0!=i&&(c=c+i+" 天 ");return c=(I<10?c+"0"+I:c+I)+" 时 ",c=(s<10?c+"0"+s:c+s)+" 分 ",c="本站已安全运行 "+(c=(p<10?c+"0"+p:c+p)+" 秒")}(t)}function getdiffTime(){var t=new Date("2021/12/31 12:00:00"),e=new Date;document.getElementById("timeShow").innerHTML=getdate(e-t)}setInterval("getdiffTime()",1e3);