let A = 4;
let B = 4;
let C = 4;
let D = 4;



    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let btn = document.querySelector("#click");
    
    let x;
    let y;

    btn.addEventListener("click" , () => {

        setTimeout(() => {
            canvas.classList.add("canvas")
        })
        
        
        click()
    })


    let img = new Image();
    img.src = "X.jpg"
    ctx.drawImage(img, 0, 0 , 750, 712)


    
    
    let click = () => {
    let fade = () => {
    let img = new Image();
    img.src = "X.jpg"

        for( i = 0; i < 100; i++){
            for( j =0; j <40; j++){
                x = i * 5;
                y = j * 6;
                ctx.drawImage(img, x , y , 2 , 2   , x+i * A , y + j * B , 2 , 2);
            }
        }
        A= A + .05
        B= B - .05
        for( i = 0; i < 100; i++){
            for( j =40; j <100; j++){
                x = i * 5;
                y = j * 6;
                ctx.drawImage(img, x , y , 2 , 2   , x+i * C , y + j * D , 2 , 2);
            }
        }
            C = C + .05
            D = D - .05
        // canvas.width = canvas.width;
        // ctx.globalAlpha = 0
    }
    setInterval(fade , 100)
}