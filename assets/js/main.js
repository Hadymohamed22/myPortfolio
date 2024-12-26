AOS.init()

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

sendBtn.addEventListener("click", () => {
    if (name.value && email.value && message.value) {
        let whatsUrl = `https://wa.me/201029379363?text=` + `أهلا انا ${name.value} وبريدي الإلكتروني ${email.value} و ${message.value}`
        window.open(whatsUrl, "_blank")
    }
})

// toggle theme
const toggleBtn = document.getElementById("toggleBtn"),
    lightBtn = document.getElementById("lightBtn"),
    darkBtn = document.getElementById("darkBtn"),
    footerDivider = document.getElementById("footerDivider");

toggleBtn.addEventListener("click", toggleThemeMenuState);
function toggleThemeMenuState() {
    toggleBtn.classList.toggle("open");
    if (toggleBtn.classList.contains("open")) {
        lightBtn.classList.add("open");
        darkBtn.classList.add("open");
    } else {
        lightBtn.classList.remove("open");
        darkBtn.classList.remove("open");
    }
}

lightBtn.addEventListener("click", () => {
    document.documentElement.classList.remove("dark")
    footerDivider.src = "assets/images/footer-divider-light.svg"
})

darkBtn.addEventListener("click", () => {
    document.documentElement.classList.add("dark")
    footerDivider.src = "assets/images/footer-divider-dark.svg"
})