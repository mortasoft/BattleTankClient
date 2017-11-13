(function () { // make an anonymous function so we don't pollute the global namespace
    var canvas; // our canvas
    var ctx; // canvas context
    var ball; // our ball object
    var keysDown = {}; // for keyboard handling
    var bgImage, bgReady = false; // background image
    var then; // used for game loop

    function init() { // prepares the canvas and initializes the game
        canvas = document.getElementById("main_canvas"); // get the canvas
        ctx = canvas.getContext('2d'); // create canvas Context

        bgImage = new Image(); // background image, grass in our case
        bgImage.onload = function () { // if the image is ready...
            bgReady = true;
            ctx.drawImage(bgImage, 0, 0); // draw it
        }
        bgImage.src = "grass.jpg"; // the path to the background image

        // register event listeners for keyDown and keyUp
        window.addEventListener("keydown", function (e) {
            keysDown[e.keyCode] = true; // key with keyCode is pressed, so we set it to true
        }, false);
        window.addEventListener("keyup", function (e) {
            delete keysDown[e.keyCode]; // when we release the key, it is removed from the pressed keys object
        }, false);

        ball = new Ball(ctx, canvas.width / 2, canvas.height / 2); // let's put the ball in the middle of the canvas
        then = Date.now();
        setInterval(mainLoop, 10); // set the main game loop
    }

    // called each iteration of the game loop
    function update(modifier) {

        loop = Math.floor(Math.random() * (7 - 3 + 1)) + 0;
        console.log(loop);
        if (loop == 0) {
            ball.y -= 10;
        } else if (loop == 1) {
            ball.y += 10;
        } else if (loop == 2) {
            ball.x -= 10;
        } else if (loop == 3) {
            ball.x += 10;
        }

        // keypress handling
        //        if (38 in keysDown)  //up movement - W
        //           ball.y -= ball.speed * modifier;
        //        if (40 in keysDown) //down movement - S
        //            ball.y += ball.speed * modifier;
        //        if (37 in keysDown) //left movement - A
        //            ball.x -= ball.speed * modifier;
        //        if (39 in keysDown) //right movement - D
        //            ball.x += ball.speed * modifier;

        // if the ball runs out of the canvas, let's put it on the other side of it
        if (ball.x < 0)
            ball.x = canvas.width;
        if (ball.x > canvas.width)
            ball.x = 0;
        if (ball.y < 0)
            ball.y = canvas.height;
        if (ball.y > canvas.height)
            ball.y = 0;
    }

    function draw() {
        ctx.drawImage(bgImage, 0, 0); // draws the background
        ball.draw(); // draws the ball
    }

    // main game loop
    function mainLoop() {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000); // update movement
        draw(); // draw the whole canvas

        then = now;
    }

    init(); // call the initialization function

})();
