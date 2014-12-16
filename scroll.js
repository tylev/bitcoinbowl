document.addEventListener("orientationchange", updateLayout);

// The wrapperWidth before orientationChange. Used to identify the current page number in updateLayout();
wrapperWidth = 0;

var myScroll = new iScroll('pageWrapper', {
	snap: true,
	momentum: false,
	hScrollbar: false,
	vScrollbar: false,
    lockDirection: true});
var page2Scroll = new iScroll('wrapper2', {hScrollbar: false, vScrollbar: false, lockDirection: true });
var page3Scroll = new iScroll('wrapper3', {hScrollbar: false, vScrollbar: false, lockDirection: true });

updateLayout();

function updateLayout() {

    var currentPage = 0;

    if (wrapperWidth > 0) {
        currentPage = - Math.ceil( $('#pageScroller').position().left / wrapperWidth);
    }

    wrapperWidth = $('#pageWrapper').width();

    $('#pageScroller').css('width', wrapperWidth * 5);
    $('.page').css('width', wrapperWidth);
    myScroll.refresh();
    setTimeout(function () {
        page2Scroll.refresh();
        page3Scroll.refresh();
    }, 0);
    myScroll.scrollToPage(currentPage, 0, 0);
}


