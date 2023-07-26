
// Crie uma variável canvas
var canvas = new fabric.Canvas('myCanvas');

//Defina as posições iniciais da bola e do buraco.
ball_y=0;
ball_x=0;
hole_y=400;
holex_=800;


block_image_width = 5;
block_image_height = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola 
	function load_img(){
		fabric.image.fromURL("golf-h.png", function(img) {
			hole_obj =img;
			hole_obj.scaleToWidth(50);
			hole_obj.scaleToHeight(50);
			hole_obj.set({
				top:hole_y,
				left:hole_x
			})
			canvas.add(hole_obj);
			})
	}
	newImage();
}

function newImage()
{

		
		function new_img(){
			fabric.image.fromURL("ball.png", function(img) {
			ball_obj =img;
			ball_obj.scaleToWidth(50);
			ball_obj.scaleToHeight(50);
			ball_obj.set({
			top:ball_y,
			left:ball_x
			})
			canvas.add(ball_obj);
			})
		}
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */

	if((ball_x==hole_x)&&(ball_7)){
		canvas.remove(ball_obj);
	}

	document.getElementById("hd3").innerHTML="Você atingiu o objetvo";
	document.getElementById("myCanvas").style.borderColor="red";
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
		if(ball_y <=450)
		 {
			ball_y = ball_y = block-block_image_height;
			console.log("altura da imagem do bloco t = "= block_image-height);
			console.log("Quando a tecla direcional baixo é pressionada, x = " = ball_x + ", Y ="+ball_y);
		 }
	}

	function down()
	{
		 if(ball_y <=450)
		 {
			ball_y = ball_y = block-block_image_height;
			console.log("altura da imagem do bloco t = "= block_image-height);
			console.log("Quando a tecla direcional baixo é pressionada, x = " = ball_x + ", Y ="+ball_y);
		 }
	}

	function left()
	{
		if(ball_X >5)
		{
			//if(ball_y <=450)
		 {
			ball_y = ball_y = block-block_image_height;
			console.log("altura da imagem do bloco t = "= block_image-height);
			console.log("Quando a tecla direcional baixo é pressionada, x = " = ball_x + ", Y ="+ball_y);
		 }
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			if(ball_y <=450)
		 {
			ball_y = ball_y = block-block_image_height;
			console.log("altura da imagem do bloco t = "= block_image-height);
			console.log("Quando a tecla direcional baixo é pressionada, x = " = ball_x + ", Y ="+ball_y);
		 }
		
		}
	}
	
}

