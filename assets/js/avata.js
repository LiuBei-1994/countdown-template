function countDown(year,month,day,hour,minute,second)
{
    var leftTime = (new Date(year,month-1,day,hour,minute,second)) - (new Date());
    if(leftTime <= 0) {
        $('#countdown').remove();
        leftTime = 0;
        clearInterval(timeInterval);
        return false;
    }
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10);
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10);
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);
    var seconds = parseInt(leftTime / 1000 % 60, 10);
    function checkTime(i) {
        if(i<10) i = "0" + i;
        return i;
    }
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    $('#days').html(days);
    $('#hours').html(hours);
    $('#minutes').html(minutes);
    $('#seconds').html(seconds);
    setTimeout(function(){
    	countDown(year,month,day,hour,minute,second);
    });
}

$(function(){
	countDown(2020,1,24,0,0,0);
    $('#title').html('距离除夕夜还有');
	$('#foot1').html('© 2019 <a href="/">'+location.host.replace('www.','')+'</a> 版权所有');
	if(location.host == 'www.lbstt.com') {
		$('#foot2').html('<a href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action" target="_blank">备案号：豫ICP备19010773号-2</a>');
	}
	else if(location.host == 'www.lbbug.com') {
        // $('#wrapper').css('background-image','url("assets/img/fullscreen-bg1.jpg")');
		$('#foot2').html('<a href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action" target="_blank">备案号：豫ICP备19010773号-1</a>');
	}
	else if(location.host == 'www.liubei.pro') {
        // $('#wrapper').css('background-image','url("assets/img/fullscreen-bg1.jpg")');
		$('#foot2').html('<a href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action" target="_blank">备案号：豫ICP备19010773号-3</a>');
	}
});