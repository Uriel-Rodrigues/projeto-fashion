function gaveta(){
    let nav = document.querySelector("header nav");
    let overlay = document.querySelector("#overlay")

    nav.classList.remove("right-[-80%]");
    nav.classList.add("right-0");

    overlay.classList.remove("hidden")
    overlay.classList.add("visible")
    overlay.classList.remove("pointer-events-none")
}

function fecharGaveta(){
    let nav = document.querySelector("header nav")
    let overlay = document.querySelector("#overlay")

    nav.classList.remove("right-0");
    nav.classList.add("right-[-80%]")

    overlay.classList.remove("visible")
    overlay.classList.add("hidden")

}