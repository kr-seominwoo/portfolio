document.getElementById("all").addEventListener("click", all);
document.getElementById("blockchain").addEventListener("click", blockchain);
document.getElementById("backend").addEventListener("click", backend);

function all() {
    document.getElementById("all").className = "active";
    document.getElementById("blockchain").className = "";
    document.getElementById("backend").className = "";

    let work = document.getElementsByClassName("work");
    for(let i = 0; i < work.length; ++i) work[i].style.display = "";
}

function blockchain() {
    document.getElementById("all").className = "";
    document.getElementById("blockchain").className = "active";
    document.getElementById("backend").className = "";

    let blockchain = document.getElementsByClassName("blockchain");
    for(let i = 0; i < blockchain.length; ++i) blockchain[i].style.display = "";
    let backend = document.getElementsByClassName("backend");
    for(let i = 0; i < backend.length; ++i) backend[i].style.display = "none";
}

function backend() {
    document.getElementById("all").className = "";
    document.getElementById("blockchain").className = "";
    document.getElementById("backend").className = "active";

    let blockchain = document.getElementsByClassName("blockchain");
    for(let i = 0; i < blockchain.length; ++i) blockchain[i].style.display = "none";
    let backend = document.getElementsByClassName("backend");
    for(let i = 0; i < backend.length; ++i) backend[i].style.display = "";
}