document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.menu ul li');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupName = document.getElementById('popup-name');
    const popupPrice = document.getElementById('popup-price');
    const closeBtn = document.querySelector('.close-btn');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const image = item.getAttribute('data-image');
            const name = item.getAttribute('data-name');
            const price = item.querySelector('span:last-child').textContent;

            if (image && name && price) {
                popupImage.src = image;
                popupName.textContent = name;
                popupPrice.textContent = `${price} هزارتومان `;

                openPopup();
            }
        });
    });

    closeBtn.addEventListener('click', closePopup);

    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('overlay')) {
            closePopup();
        }
    });

    function openPopup() {
        document.getElementById('overlay').style.display = 'block';
        popup.style.display = 'block';
        document.body.classList.add('blur');
    }

    function closePopup() {
        document.getElementById('overlay').style.display = 'none';
        popup.style.display = 'none';
        document.body.classList.remove('blur');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const menus = document.querySelectorAll('.menu');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryName = category.getAttribute('data-category');
            
            menus.forEach(menu => {
                if (menu.id === `${categoryName}-menu`) {
                    menu.style.display = 'block';
                } else {
                    menu.style.display = 'none';
                }
            });
        });
    });
});
