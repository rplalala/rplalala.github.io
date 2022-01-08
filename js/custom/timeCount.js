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
//setInterval(function() {getdiffTime()},1000); 两个是一个意思
setInterval("getdiffTime()", 1000); //每隔一秒执行一次 getdiffTime() 函数