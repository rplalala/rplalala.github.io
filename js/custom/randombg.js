var pcImg="url(https://alicdn.dingzh.cc/ding-BlogDemo/img/pcBg/pc_bg",phoneImg="url(https://alicdn.dingzh.cc/ding-BlogDemo/img/phoneBg/phone_bg",pcNum=384,phoneNum=200,timer=null,mobile_flag=isMobile();function isMobile(){for(var e=navigator.userAgent,n=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!1,o=0;o<n.length;o++)if(e.indexOf(n[o])>0){i=!0;break}var g=window.screen.width,r=window.screen.height;return g>325&&r<750&&(i=!0),i}function ranbg(){let e=document.getElementById("web_bg");if(e){if(mobile_flag){var n=Math.floor(Math.random()*phoneNum)+1;e.style.backgroundImage=phoneImg+n+".jpg)"}else{n=Math.floor(Math.random()*pcNum)+1;e.style.backgroundImage=pcImg+n+".jpg)"}timer||clearTimeout(timer)}else timer=setTimeout(ranbg,0)}ranbg();