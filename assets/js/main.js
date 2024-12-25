// go to about section by arrow 
document.querySelector(".arrow-down").addEventListener("click", () => {
    window.scrollTo({
        top: 650,
        left: 0,
        behavior: "smooth"
    })
})

// send message to whatsapp
const form = document.querySelector("form"),
    name = document.getElementById("Name"),
    email = document.getElementById("Email"),
    message = document.getElementById("Message"),
    sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

let whatsUrl = "https://wa.me/201029379363?text=";

sendBtn.addEventListener("click", () => {
    if (name.value && email.value && message.value) {
        whatsUrl += `أهلا انا ${name.value} وبريدي الإلكتروني هو ${email.value} ${message.value}`
        window.open(whatsUrl, "_blank")
    }
})