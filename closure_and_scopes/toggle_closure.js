function toggle() {
    var index = 0;
    var prints = [...arguments];
    return function print() {
        console.log(prints[index]);
        index = (index>=prints.length-1)? 0 : index+1;

    }
}

var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");

hello();
hello();

onOff();
onOff();
onOff();

speed();
speed();
speed();
speed();