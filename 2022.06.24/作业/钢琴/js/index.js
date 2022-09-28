// 获取所有需要鼠标点击的元素。
var key60 = document.querySelector('#key60');
var key61 = document.querySelector('#key61');
var key62 = document.querySelector('#key62');
var key63 = document.querySelector('#key63');
var key64 = document.querySelector('#key64');
var key65 = document.querySelector('#key65');
var key66 = document.querySelector('#key66');
var key67 = document.querySelector('#key67');
var key68 = document.querySelector('#key68');
var key69 = document.querySelector('#key69');
var key70 = document.querySelector('#key70');
var key71 = document.querySelector('#key71');
var key72 = document.querySelector('#key72');
var main = document.querySelector('#main');
// console.log(main);

//事件委托
main.onclick = function (ev) {
    if (ev.target.nodeName == 'DIV') {
        //获取ID后面的数字作为音乐的下标
        var soundIndex = ev.target.id.substring(3);
        // console.log(soundIndex);
        playAudio(soundIndex);
    }
}
// 根据声音文件的索引，播放相应的声音
function playAudio(soundIndex) {
    // 获取声音文件的属性名称 60~72
    var attrName = 'sound' + soundIndex;
    // 获取播放的声音文件  oggSound就是sounds.js中的一个对象。
    // audioFile就是一个base64格式的字符。
    var audioFile = oggSound[attrName];
    // 创建一个播放声音的对象
    var audio = new Audio(audioFile);
    // 调用audio对象的play()函数去播放声音。
    audio.play();

    // 更改某个键的背景，及还原背景
    // 当前操作的元素的id
    var eleId = '#key' + soundIndex;
    var ele = document.querySelector(eleId);

    ele.style.backgroundColor = 'red';

    var timer = setTimeout(function () {
        if (ele.classList.contains('whiteKey')) {
            ele.style.backgroundColor = '#eee';
        } else {
            ele.style.backgroundColor = '#666';
        }
    }, 100);
}

// key60.onclick = function () {
//     playAudio(60);
// }
// key61.onclick = function () {
//     playAudio(61);
// }
// key62.onclick = function () {
//     playAudio(62);
// }
// key63.onclick = function () {
//     playAudio(63);
// }
// key64.onclick = function () {
//     playAudio(64);
// }
// key65.onclick = function () {
//     playAudio(65);
// }
// key66.onclick = function () {
//     playAudio(66);
// }
// key67.onclick = function () {
//     playAudio(67);
// }
// key68.onclick = function () {
//     playAudio(68);
// }
// key69.onclick = function () {
//     playAudio(69);
// }
// key70.onclick = function () {
//     playAudio(70);
// }
// key71.onclick = function () {
//     playAudio(71);
// }
// key72.onclick = function () {
//     playAudio(72);
// }

// 按下某个键，播放相应的声音


window.onkeypress = function (e) {
    // 通过e事件对象获取按下的是某个键
    console.log(e.key);
    // console.log(e.keyCode);
    switch (e.key) {
        case 'a':
        case "A":
        case 'q':
        case 'Q':
        case 'z':
        case 'Z':
        case '1':
            playAudio(60);
            break;
        case 'w':
        case "W":
            playAudio(61);
            break;
        case 'x':
        case "X":
        case 's':
        case "S":
        case "2":

            playAudio(62);
            break;
        case 'e':
        case "E":
            playAudio(63);
            break;
        case 'd':
        case "D":
        case 'c':
        case "C":
        case "3":
            playAudio(64);
            break;
        case 'r':
        case "R":
        case 'f':
        case 'F':
        case 'v':
        case 'V':
        case "4":

            playAudio(65);
            break;
        case 't':
        case "T":
            playAudio(66);
            break;
        case 'g':
        case "G":
        case 'b':
        case "B":
        case "5":


            playAudio(67);
            break;
        case 'y':
        case "Y":
            playAudio(68);
            break;
        case 'h':
        case "H":
        case 'n':
        case "N":
        case "6":

            playAudio(69);
            break;
        case 'u':
        case "U":
            playAudio(70);
            break;
        case 'j':
        case "J":
        case 'm':
        case "M":
        case "7":

            playAudio(71);
            break;
        case 'i':
        case "I":
        case 'k':
        case "K":
        case ',':
        case ',':
        case "8":

            playAudio(72);
            break;

        default:
            break;
    }
}
