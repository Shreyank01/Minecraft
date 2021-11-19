var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_img_width = 30;
var block_img_height = 30;

var player_object = ""; 
var block_img_object = "";




function player_update() {

    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_Img(get_Img) {
    
    fabric.Image.fromURL(get_Img, function(Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_img_object);
    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

keyPressed = e.keycode;
console.log(keyPressed);

    if (e.shiftkey == true && keyPressed == '80') {

        console.log("shift and p are pressed together");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }

    if (e.shiftkey == true && keyPressed == '77') {

        console.log("shift and m are pressed together");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }


    if (keyPressed == '38'){
        up();
        console.log("up");
    }

    if (keyPressed == '40'){
        down();
        console.log("down");
    }

    if (keyPressed == '37'){
        left();
        console.log("left");
    }

    if (keyPressed == '39'){
        right();
        console.log("right");
    }

    if (keyPressed =='84'){

        new_Img('trunk.jpg');
        console.log("t");
    }

    if (keyPressed == '68'){

        new_Img('dark_green.png');
        console.log("d");
    }

    if (keyPressed == '76'){

        new_Img('light_green.png');
        console.log("l");
    }

    if (keyPressed == '71'){

        new_Img('ground.png');
        console.log("g");
    }

    if (keyPressed == '87'){

        new_Img('wall.jpg');
        console.log("w");
    }

    if (keyPressed == '89'){

        new_Img('yellow_wall.png');
        console.log("y");
    }

    if (keyPressed == '82'){

        new_Img('roof.jpg');
        console.log("r");
    }

    if (keyPressed == '67'){

        new_Img('cloud.jpg');
        console.log("c");
    }

    if (keyPressed == '85'){

        new_Img('unique.png');
        console.log("u");
    }
}

function up() {
    if(player_y >= 0){

        player_y = player_y - block_img_height;
        console.log("Block image height = " + block_img_height);
        console.log("when up arrow is pressed , x = " + player_x + "y = " + player_y );
        canvas.remove(player_object);
        player_update();

    }
}

function down() {
    if(player_y <= 600){

        player_y = player_y + block_img_height;
        console.log("Block image height = " + block_img_height);
        console.log("when down arrow is pressed , x = " + player_x + "y = " + player_y );
        canvas.remove(player_object);
        player_update();

    }
}

function left() {
    if(player_x >= 0){

        player_x = player_x - block_img_width;
        console.log("Block image width = " + block_img_width);
        console.log("when left arrow is pressed , x = " + player_x + "y = " + player_y );
        canvas.remove(player_object);
        player_update();

    }
}

function right() {
    if(player_x <= 900){

        player_x = player_x + block_img_width;
        console.log("Block image width = " + block_img_width);
        console.log("when right arrow is pressed , x = " + player_x + "y = " + player_y );
        canvas.remove(player_object);
        player_update();

    }
}

