$('body').show();
$('.version').text(NProgress.version);
NProgress.start();
setTimeout(function () {
	NProgress.done();
	$('.fade').removeClass('out')
}, 1000);
(function () {
	$('img').attr('draggable', 'false');
	$('a').attr('draggable', 'false')
})();

function setCookie(name, value, time) {
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec * 1);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()
}
function getsec(str) {
	var str1 = str.substring(1, str.length) * 1;
	var str2 = str.substring(0, 1);
	if (str2 == "s") {
		return str1 * 1000
	} else if (str2 == "h") {
		return str1 * 60 * 60 * 1000
	} else if (str2 == "d") {
		return str1 * 24 * 60 * 60 * 1000
	}
}
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2])
	} else {
		return null
	}
}

$("#gotop").hide();
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $("#gotop").fadeIn()
    } else {
        $("#gotop").fadeOut()
    }
});
$("#gotop").click(function () {
    $('html,body').animate({
        'scrollTop': 0
    }, 500)
});

$("img.thumb").lazyload({
	placeholder: "../images/occupying.png",
	effect: "fadeIn"
});
$(".single .content img").lazyload({
	placeholder: "../images/occupying.png",
	effect: "fadeIn"
});

console.log('的', $('.pagination li:last'))

// // next: '.pagination li:last',
// jQuery.ias({
// 	history: false,
// 	container: '.content',
// 	item: '.excerpt',
// 	pagination: '.pagination',
// 	next: '.next-page a',
// 	trigger: '查看更多',
// 	loader: '<div class="pagination-loading"><img src="__TMPL__/public/assets/images/loading.gif" /></div>',
// 	triggerPageThreshold: 5,
// 	onRenderComplete: function (er) {
// 		console.log('d', er)
// 		$('.excerpt .thumb').lazyload({
// 			placeholder: '__TMPL__/public/assets/images/occupying.png',
// 			threshold: 400
// 		});
// 		$('.excerpt img').attr('draggable', 'false');
// 		$('.excerpt a').attr('draggable', 'false')
// 	},
//     onPageChange: function (pageNum, pageUrl, scrollOffset) {
//         console.log(pageNum);
//     }
// });
// $(window).scroll(function () {
// 	var sidebar = $('.sidebar');
// 	var sidebarHeight = sidebar.height();
// 	var windowScrollTop = $(window).scrollTop();
// 	if (windowScrollTop > sidebarHeight - 60 && sidebar.length) {
// 		$('.fixed').css({
// 			'position': 'fixed',
// 			'top': '70px',
// 			'width': '360px'
// 		})
// 	} else {
// 		$('.fixed').removeAttr("style")
// 	}
// });

try {
	if (window.console && window.console.log) {
		console.log("\n欢迎访问站破影阁！\n\n");
		console.log("\n请记住我们的网址：%c www.pyge.top", "color:red")
	}
} catch (e) { };

function SiteSearch(send_url, divTgs) {
	var str = $.trim($(divTgs).val());
	if (str.length > 0 && str != "请输入关键字") {
		str = str.replace(/\s+/g, "");
		str = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\，|\。|\：|\；|\·|\~|\！|\、|\《|\》|\‘|\“|\”|\【|\】|\?{|\}|\-|\=|\——|\+|\’|\—|\？]/g, "");
		str = str.replace(/<[^>]*>|/g, "");
		window.location.href = send_url + "?keyword=" + encodeURI(str)
	}
	return false
}