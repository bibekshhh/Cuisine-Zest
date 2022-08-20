var suggestionBox = document.querySelector('#header-search-suggestion-box');

document.querySelector('#header-search').addEventListener('keyup', (e) => {
    if (suggestionBox.style.display = "none") {
        suggestionBox.style.display = "block";
    } else {
        suggestionBox.style.display = "none";
    }
});

var li = document.querySelectorAll('#header-search-suggestion-box li');
li.forEach(e => {
    e.onclick = (elem) => {
        console.log(elem.target.innerText)
        document.querySelector('#header-search').value = elem.target.innerText;
        suggestionBox.style.display = "none";
    }
});
$('#header-search').focusout(e => {
    setTimeout(() => {
        if (suggestionBox.style.display = "block") {
            suggestionBox.style.display = "none";
        } else {
            suggestionBox.style.display = "block";
        }
    }, 300);
});

window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 250) {
        document.querySelector(".navbar").classList.add('shadow');
    } else {
        document.querySelector(".navbar").classList.remove('shadow');

    }
}

document.querySelector('.index-page #login-redirect-btn').onclick = () => {
    window.location.assign("https://www.shyamshah.info.np/login.html");
}
document.querySelector('.index-page .brand-logo').onclick = () => {
    window.location.assign("https://www.shyamshah.info.np");
}

// -----------------------------

const body = document.querySelector("body");
const btnCloseModal = document.getElementById("close_myList_modal");
const modalElm = document.getElementById("myList_modal");
const favourite_list = document.querySelector('.favourite-list');
const items_in_cart = document.querySelector('.items_in_cart');
const clear_cart_btn = document.querySelector('.clear-cart-btn');
const no_of_itmes_navbar = document.querySelector('.no_of_itmes_navbar');

const no_items_in_cart_img = document.querySelector('#no_items_in_cart_img');


const dir_open_modal = document.querySelector('.myFavourites');
dir_open_modal.onclick = () => {
    body.style.overflow = "hidden";
    modalElm.classList.add("open");
}

document.querySelectorAll('.favourites-btn').forEach(e => {
    e.onclick = (favourites) => {

        body.style.overflow = "hidden";
        const add_item = favourites.target.parentElement.parentElement.parentElement;

        var title = add_item.querySelector('.title').innerText;
        var description = add_item.querySelector('.genre a').innerText;
        var image = add_item.querySelector('img').src;

        var repeated = false;
        document.querySelectorAll('.favourite').forEach(e => {
            if (title == e.querySelector('.title').innerText) {
                repeated = true;
            }
        });

        const items_in_cart_count_x = document.querySelectorAll('.favourite').length;
        if (items_in_cart_count_x != 0 && repeated == false) {
            favourite_list.innerHTML += `<div class="favourite item">
        <div class="remove-item">&times;</div>
        <div class="description">
            <div class="title">${title}</div>
            <div class="caption">${description}</div>
        </div>
        <div class="image">
            <img src="${image}">
        </div>
    </div>`;
        } else if (items_in_cart_count_x == 0 && repeated == false) {
            favourite_list.innerHTML = "";
            favourite_list.innerHTML += `<div class="favourite item">
        <div class="remove-item">&times;</div>
        <div class="description">
            <div class="title">${title}</div>
            <div class="caption">${description}</div>
        </div>
        <div class="image">
            <img src="${image}">
        </div>
    </div>`;
        }

        modalElm.classList.add("open");
        document.querySelectorAll('.remove-item').forEach(e => {
            e.onclick = (item) => {
                item.target.parentElement.remove();
            }
        });

        setInterval(() => {
            const items_in_cart_count = document.querySelectorAll('.favourite').length;
            items_in_cart.innerText = items_in_cart_count;
            no_of_itmes_navbar.innerText = items_in_cart_count;

            if (items_in_cart_count == 0) {
                favourite_list.innerHTML = `<img src="https://www.valeorx.com/static/media/empty-cart.60e68bfd.png" style="height: 100%;width: 100%;">`;
            }
        }, 100);

        clear_cart_btn.onclick = () => {
            document.querySelectorAll('.favourite').forEach(e => {
                e.remove();
                favourite_list.innerHTML = `<img src="https://www.valeorx.com/static/media/empty-cart.60e68bfd.png" style="height: 100%;width: 100%;">`;
            });
        }

    }
});

btnCloseModal.addEventListener("click", function() {
    modalElm.classList.remove("open");
    body.style.overflow = "auto";

});

// -----------------------------


document.querySelectorAll('.product .view-more-btn').forEach(e => {
    e.onclick = () => {
        window.location.assign("https://www.shyamshah.info.np/product.html");
    }
})