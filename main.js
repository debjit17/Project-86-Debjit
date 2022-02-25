var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
var birthday;


function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        birthday = Img;

        birthday.scaleToWidth(700);
        birthday.scaleToHeight(510);
        birthday.set({
            top:0,
            left:0
        });
        canvas.add(birthday);
    });
}

function playSound(){
    x.play();
}
