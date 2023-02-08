const overly = document.querySelector("overly")
const aside = document.querySelector("aside")



const show = () => {
    aside.classList.add("active")
    overly.classList.add("active")
}

const shower = () => {
    aside.classList.remove("active")
    overly.classList.remove("active")
}


// overly.addEventListener("click", () => {
//     aside.classList.remove("active")
//     overly.classList.remove("active")
// })


overly.addEventListener("click", () => {
    aside.classList.remove("active")
    overly.classList.remove("active")
})