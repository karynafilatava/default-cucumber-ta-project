module.exports.checkVisible = function (elem) {
    let elmTop;
    let elmButtom;
    let screenSize;
    this.elements = {
        'desktop': '#intro',
        'phonePicture': '.phone_picture.animated',
        'sliding': '.sliding_pictures',
        'video_ctrl': '.video_controls',
        'features': '.features_wrapper',
        'video': '.background_video',
        'soundtracks': '#soundtracks>div.content_wrapper',
        'videolist': '.video_item',
        'creators': '#creators>div>div'
    };

    browser.executeScript('return window.innerHeight').then((num) => {
        screenSize = num;
    });

    return browser.executeScript("return document.querySelector('" + this.elements[elem] + "').getBoundingClientRect()")
        .then((size) => {
            elmButtom = size.bottom;
            elmTop = size.top;
            return (elmTop < 0) && (elmButtom < screenSize);
        });
};