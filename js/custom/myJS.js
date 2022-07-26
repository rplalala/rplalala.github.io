// 1.时间戳转换。页脚时间
function getdate(period) {
	var yearLevelValue = 365 * 24 * 60 * 60 * 1000;
	var monthLevelValue = 30 * 24 * 60 * 60 * 1000;
	var dayLevelValue = 24 * 60 * 60 * 1000;
	var hourLevelValue = 60 * 60 * 1000;
	var minuteLevelValue = 60 * 1000;
	var secondLevelValue = 1000;
	return getDifference(period);

	function getDifference(period) {
		/*******计算出时间差中的年、月、日、天、时、分、秒*******/
		var year = parseInt(getYear(period));
		var month = parseInt(getMonth(period - year * yearLevelValue));
		var day = parseInt(getDay(period - year * yearLevelValue - month * monthLevelValue));
		var hour = parseInt(getHour(period - year * yearLevelValue - month * monthLevelValue - day * dayLevelValue));
		var minute = parseInt(getMinute(period - year * yearLevelValue - month * monthLevelValue - day * dayLevelValue -
			hour * hourLevelValue));
		var second = parseInt(getSecond(period - year * yearLevelValue - month * monthLevelValue - day * dayLevelValue -
			hour * hourLevelValue - minute * minuteLevelValue));
		var result = "";
		if (year != 0) result = result + year + " 年 ";
		if (month != 0) result = result + month + " 月 ";
		if (day != 0) result = result + day + " 天 ";
		result = (hour < 10 ? result + "0" + hour : result + hour) + " 时 ";
		result = (minute < 10 ? result + "0" + minute : result + minute) + " 分 ";
		result = (second < 10 ? result + "0" + second : result + second) + " 秒";
		result = "本站已安全运行 " + result;
		return result;

		function getYear(period) {
			//Math.floor()
			return Math.floor(parseInt(period) / yearLevelValue);
		}

		function getMonth(period) {
			return Math.floor(parseInt(period) / monthLevelValue);
		}

		function getDay(period) {
			return Math.floor(parseInt(period) / dayLevelValue);
		}

		function getHour(period) {
			return Math.floor(parseInt(period) / hourLevelValue);
		}

		function getMinute(period) {
			return Math.floor(parseInt(period) / minuteLevelValue);
		}

		function getSecond(period) {
			return Math.floor(parseInt(period) / secondLevelValue);
		}

	}
}

function getdiffTime() {
	var oldData = new Date("2021/12/31 12:00:00");
	var newData = new Date();
	document.getElementById("timeShow").innerHTML = getdate(newData - oldData);
}

// 2. 等待 .aplayer-icon-lrc 这个dom结构加载完之后，才去关闭歌词
var timer = null;
function myAplayer() {
	let dom = document.getElementsByClassName("aplayer-icon-lrc")[0];
	if(dom) {
		// 执行dom加载完成后的操作，例如echart的初始化操作
	   dom.click();
	   // 清除定时器
	   if(!timer) {
		   clearTimeout(timer)
	   }
   } else {
	   //  自我调用
	   timer = setTimeout(myAplayer, 0)
   }
}

// 3.收藏
function addFav() {
	alert("您的浏览器不支持自动收藏😭 请 Ctrl + D 手动收藏本站😋")
}

// 执行关闭歌词一次。定时器 setInterval、setTimeout是异步的，并不会说一个一个按顺序加载
myAplayer();
// 执行页脚计时器每秒一次
setInterval("getdiffTime()", 1000); //每隔一秒执行一次 getdiffTime() 函数