
const img = [];

img[0] = 'img_refresh/10.jpg'; //#efd65c
img[1] = 'img_refresh/1.jpg'; //#efd65c
img[2] = 'img_refresh/2.jpg'; //#f7c9ff
img[3] = 'img_refresh/3.jpg'; //#65ffd4
img[4] = 'img_refresh/4.jpg'; //#8fffa2
img[5] = 'img_refresh/5.jpg'; //#b3356a
img[6] = 'img_refresh/6.jpg'; //#5e178a
img[7] = 'img_refresh/7.jpg'; //#fff8a8
img[8] = 'img_refresh/8.jpg'; //#4f117e
img[9] = 'img_refresh/9.jpg'; //#a31b1b
img[10] = 'img_refresh/11.jpg'; //#a31b1b
img[11] = 'img_refresh/12.jpg'; //#a31b1b



window.onload = function () {
    const random = Math.floor(Math.random() * img.length);
    document.body.style.backgroundImage = `url(${img[random]})`;
   

}