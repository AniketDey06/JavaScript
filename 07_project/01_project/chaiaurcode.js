const button = document.querySelectorAll('.button')
// console.log(button);
const body = document.querySelector('body')

button.forEach(function(b){
    console.log(b);
    b.addEventListener('click',function(e){
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id
        }
        
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
    })
})