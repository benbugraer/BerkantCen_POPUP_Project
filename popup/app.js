const openBtn = document.querySelector(".open-popup-btn"),
popupContainer = document.querySelector(".popup-container"),
closeBtn = document.querySelector(".close-popup-btn");

openBtn.addEventListener('click', () => {
    popupContainer.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    popupContainer.classList.remove('active');
})
