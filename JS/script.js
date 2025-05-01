function changeColor() {
    let p1 = document.getElementById("p1");

    let r = Math.round(Math.random() * 255),
    g = Math.round(Math.random() * 255), 
    b = Math.round(Math.random() * 255);

    let col = "rgb("+ r + ", " + g + ", " + b + ")";
    let size = Math.round(Math.random()*100) + "px";

    p1.style.color = col;
    p1.style.fontSize = size;

    console.log(col, size);
}

function closeWindow() {
    window.close();
}

let rotation = 0;

function gradientTomfoolery(e, mult) {
    let body = document.getElementById("body");
    let banana = document.getElementById("banana");
    
    let x = e.pageX
    let y = e.pageY

    let red = "red",
        orange = "orange " + mult*10 + "%",
        yellow = "rgb(255, 241, 148) 10%",
        green = "green " + mult*10 + "%"

    body.style.background = 
    "repeating-radial-gradient(circle at "
    + x + "px "
    + y + "px"
    + ", " 
    + red
    + ", "
    + orange
    + ", " 
    + yellow
    + ", "
    + green
    + ", "
    + yellow
    + ", "
    + orange
    + ")";

    banana.style.filter = "hue-rotate(" + rotation + "deg)"
    rotation += 1;

}

function aboutPage() {
    //let rq = new  XMLhtt
}