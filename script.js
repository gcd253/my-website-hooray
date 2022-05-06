const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

const sounds = ["Coin", "Gameboy Advance", "My Leg!!", "Nintendo DS", "Pixar Lamp",
"Running", "Spongebob Flute", "Warp Pipe", "Wii", "Wii Sports", "Xbox"]

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