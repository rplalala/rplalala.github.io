// 把 Artitalk 从碎碎念改成随言。由于需要取消pjax处理，所以单独拿出来
function myArtitalk() {
	document.querySelector(".item-headline a[title='artitalk page link']").innerHTML = "随言";
}
// 执行将碎碎念改为随言一次
myArtitalk();