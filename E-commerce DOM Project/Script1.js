
const Ecommerce = () => {
    const cart = [];
    const arry = [];
    let imgs = [];
    let addToCartBtn = [];
    let count = 0;
    const products = [
        {
            name: "First",
            price: 50,
            id: 1,
            img: "https://www.cubeex.co.il/content/images/thumbs/0000620_-hp-aio-24-r002nj_550.png"
        },
        {
            name: "Second",
            price: 40,
            id: 2,
            img: "https://www.cubeex.co.il/content/images/thumbs/0001284_-msi_450.jpeg"
        },
           { 
               name: "third",
            price: 30,
            id: 3,
               img: "https://www.cubeex.co.il/content/images/thumbs/0000996_-asus_450.png"
             },
              {
                  name: "fourth",
            price: 20,
            id: 4,
            img: "https://www.cubeex.co.il/content/images/thumbs/0000620_-hp-aio-24-r002nj_550.png"
             }
    ]

    const getProducts = () => products; 
    const getPlength = () => (products.length);
    const getCart = () => cart;
   

    function get_rand_color() {
        var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
        while (color.length < 6) {
            color = "0" + color;
        }
        return "#" + color;
    }
    const createElement = () => {


       
        for (i = 0; i < products.length ; i++) {
            arry[i] = document.createElement('div');
            arry[i].style.backgroundColor = get_rand_color();
            arry[i].style.height = 229 + "px";
            arry[i].style.width = 1000 + "px";
            arry[i].setAttribute('id', 'div' + i);
            
 
           imgs[i] = document.createElement("IMG");
            imgs[i].setAttribute("src", products[i].img);
            imgs[i].setAttribute("width", "304");
            imgs[i].setAttribute("height", "228");
            imgs[i].setAttribute("alt", "The Pulpit Rock");


            addToCartBtn[i] = document.createElement("BUTTON"); 
            addToCartBtn[i].setAttribute('id', 'btn' + i);
            addToCartBtn[i].innerHTML = "addToCart";
            let x = products[i];
            addToCartBtn[i].addEventListener("click", function () {
                cart[count] = x;
                count++;
                
            });


            document.getElementById('container1').appendChild(arry[i]);
            document.getElementById('div' + i).appendChild(imgs[i]);
            document.getElementById('div' + i).appendChild(addToCartBtn[i]);


            

           
        }


    }

  




    return { getProducts, getPlength, createElement, get_rand_color, getCart }  
}
const e = Ecommerce();
document.getElementById("myBtn").addEventListener("click", e.createElement);
console.log(e.getCart());








