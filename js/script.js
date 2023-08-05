// -------------------------BURGER-MENU---------------------------------


const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".header__nav");

burger.addEventListener("click", function () {
    navMenu.classList.toggle("open")
    if(this.classList.toggle("active")){
        document.body.style.overflow = "hidden";
    } else{
        document.body.style.overflow = "auto";
    }
});




// -------------------------FOCUS ON INPUT---------------------------------


const inputs = document.querySelectorAll('.form__item-input');
const spans = document.querySelectorAll('.form__item-label');

inputs.forEach((input, i) => {
    input.addEventListener('focus', function() {
        spans[i].classList.add('hide');
    });
    input.addEventListener('blur', function() {
        if (!input.value) {
            spans[i].classList.remove('hide');
        }
    });
});



// -------------------------ANIMATION ON SCROLL---------------------------------
const animItems = document.querySelectorAll(".anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnscroll);
    function animOnscroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i],
                animItemHeight = animItem.offsetHeight,
                animItemOffset = offset(animItem).top,
                animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint =
                    window.innerHeight - window.innerHeight / animStart;
            }

            if (
                scrollY > animItemOffset - animItemPoint &&
                scrollY < animItemOffset + animItemHeight
            ) {
                animItem.classList.add("active");
            } else {
                if (!animItem.classList.contains("anim-stop")) {
                    animItem.classList.remove("active");
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
}

