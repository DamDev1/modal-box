const container = document.getElementById("modalContainer");
const close = document.getElementsByClassName("close")[0];
const btn = document.getElementById("myBtn")

function modal(){
    container.style.display = "block";
    btn.style.display = "none";
};

close.onclick = function(){
    container.style.display = "none";
    btn.style.display = "Block";
}

// window.onclick = function(event){
//     if(event.target == container){
//         container.style.display = "none";
//     }
// }