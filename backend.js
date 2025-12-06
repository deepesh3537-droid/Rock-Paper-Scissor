function hide() {
    document.getElementById("Fight").classList.add("hidden");
    document.getElementsByClassName("Computer")[0].classList.add("hidden");
    document.getElementsByClassName("Player")[0].classList.add("hidden");
    document.querySelector(".Stage2").classList.remove("hidden");

    const music = document.getElementById("bg-music");
    music.play();

}

document.getElementById("Fight").addEventListener("click", hide);
