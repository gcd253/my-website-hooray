const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

const sounds = ["running", "Nintendo DS", "Gameboy Advance", "Wii",
"Wii Sports", "Pixar Lamp"]

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound

    btn.addEventListener("click", () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById("buttons").
    appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}