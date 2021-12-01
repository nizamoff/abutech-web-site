langselect.addEventListener('change', e => {
    lang = langselect.value
    if (langselect.value === "ru") {
        document.location.replace(`/ru/index.html`)
    } else if (langselect.value === "uz") {
        document.location.replace("../index.html")
    }
});

let langBtns = document.querySelectorAll(".mobile-menu-main__button")

for (const button of langBtns) {
    button.addEventListener("click", (e) => {
        if (e.currentTarget.dataset.lang === "ru") {
            document.location.replace(`/ru/index.html`)
        } else if (e.currentTarget.dataset.lang === "uz") {
            document.location.replace("../index.html")
        }
    })
}

let documentBody = document.querySelector(".body")
let drop = document.querySelector(".mobile-menu");
let hamburgerBtn = document.querySelector(".header-right-mobile");
let closeBtn = document.querySelector(".mobile-menu-header-button");


hamburgerBtn.addEventListener("click", () => {
    drop.classList.add("open-hamburger")
    documentBody.classList.add("scroll-hidden")

    closeBtn.addEventListener("click", () => {
        drop.classList.remove("open-hamburger")
        documentBody.classList.remove("scroll-hidden")
    })
    
})

window.addEventListener('scroll', function () {
    const couters = document.querySelectorAll('.counter')
    const speed = 100
    if (this.pageYOffset >= 200) {
        couters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target')
                const count = +counter.innerText;

                const inc = target / speed

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1000);
                } else {
                    count.innerText = target
                }
            }

            updateCount();
        })
    }
})

window.addEventListener('scroll', function () {
    let header = document.querySelector('.header');
    if (pageYOffset >= 40) {
        header.style.boxShadow = '10px 0 50px 0px #9b9b9b';
    } else if (pageYOffset < 1) {
        header.style.boxShadow = 'none';
    }
})