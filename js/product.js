document.querySelector('.product-page #login-redirect-btn').onclick = () => {
    window.location.assign("https://www.shyamshah.info.np/login.html");
}

document.querySelector('.product-page .brand-logo').onclick = () => {
    window.location.assign("https://www.shyamshah.info.np");
}

const fileSelector = document.getElementById("add-image");
const imgPreview = document.querySelector('.carousel-indicators');

fileSelector.addEventListener("change", function() {
    viewImg();
});

function viewImg() {
    const files = fileSelector.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function() {
            imgPreview.innerHTML += '<img src="' + this.result + '" />';
        });
    }
}

var review = [{
        "id": "1",
        "name": "Bibek Shah",
        "feedback": "I've used a similar recipe for years. I usually mix the Italian dressing in with the cooked pasta the night before and let it sit in the refrigerator overnight before adding the vegetables.",
        "date": "2022/01/12",
        "rating": "4",
        "image": ["https://th.bing.com/th/id/R.95e7ab69449dd4258fbde23fa05b44f6?rik=W5DXz2Y54tNFPA&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.IkCXmvVYMKh2eH4fEcCTeAHaHW?pid=ImgDet&rs=1", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F266788.jpg&w=272&h=272&c=sc&poi=face&q=60"]
    },
    {
        "id": "2",
        "name": "Saugat Gautam",
        "feedback": "This is one of the best cuisine recommendation I have taken off kouzines.com. Thanks kouzines for this wonderful suggestion.",
        "date": "2021/10/17",
        "rating": "5",
        "image": ["https://th.bing.com/th/id/OIP.IkCXmvVYMKh2eH4fEcCTeAHaHW?pid=ImgDet&rs=1"]
    },
    {
        "id": "4",
        "name": "Prashant Jha",
        "feedback": "This is a good, basic starter recipe for pasta salad. I added green and black olives (I love olives), salami, mozzeralla cubes and instead of the italian dressing, I used caesar. I got a lot of compliments!",
        "date": "2022/01/25",
        "rating": "3",
        "image": ["https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F266788.jpg&w=272&h=272&c=sc&poi=face&q=60"]
    },
    {
        "id": "3",
        "name": "Yaman Sarbariya",
        "feedback": "The food wasn't that nice than I thought it'd be but I'd stil recommend others to give it a shot!",
        "date": "2022/01/04",
        "rating": "3",
        "image": []
    },
    {
        "id": "5",
        "name": "Ocean Rimal",
        "feedback": "Good customer service. I liked the food very much and would recommend it to everyone. Moreover the environment inside the restaurant was  pretty awesome.",
        "date": "2020/04/13",
        "rating": "4",
        "image": []
    },
    {
        "id": "6",
        "name": "Prem Ale",
        "feedback": "Loved the restaurant. I wish I could have tried more stuffs out there. The foods there are very hygenic.",
        "date": "2022/03/13",
        "rating": "5",
        "image": ['https://th.bing.com/th/id/OIP.2QTYWFJ2QJfpSahOp4PFfAHaEz?pid=ImgDet&w=900&h=583&rs=1', 'https://th.bing.com/th/id/OIP.DJcoNpaMTp_IHhIOEJoqGwHaE8?pid=ImgDet&w=700&h=467&rs=1']
    }
];


var reviewBox = document.querySelector('.review-list');

function output() {

    for (var i = 0; i < review.length; i++) {
        var image_count = review[i].image.length;
        reviewBox.innerHTML += `<div class="review">
                <div class="description">
                    <div class="rating">${review[i].rating} <span><i class="fas fa-star"></i></span></div>
                    <div class="caption">${review[i].feedback}</div>
                </div>
                <div class="images">
                
            ${(image_count == 0) ? `<img src="" style="display: none;">`
             : (image_count == 1) ? `<img src="${review[i].image[0]}">`
             : (image_count == 2) ? `<img src="${review[i].image[0]}"><img src="${review[i].image[1]}">`
             : (image_count == 3) ? `<img src="${review[i].image[0]}"><img src="${review[i].image[1]}"><img src="${review[i].image[2]}">`
             : ``}
                </div>
                <div class="user">
                    <div class="name">${review[i].name}</div>
                    <div class="date text-muted">${review[i].date}</div>
                </div>
            </div>`;
        }
}
output();
var sortByRating = document.querySelector('#sortByRating');
var sortByDate = document.querySelector('#sortByDate');
var sortRatingByHighToLow = document.querySelector('#sortRatingByHighToLow');
var sortDateByNewToOld = document.querySelector('#sortDateByNewToOld');

sortByRating.onclick = () => {
    reviewBox.innerHTML = "";
    review.sort(rating_sort);
    output();
}
sortRatingByHighToLow.onclick = () => {
    reviewBox.innerHTML = "";
    review.sort(backwardRating_sort);
    output();
}
sortByDate.onclick = () => {
    reviewBox.innerHTML = "";
    review.sort(date_sort);
    output();
}
sortDateByNewToOld.onclick = () => {
    reviewBox.innerHTML = "";
    review.sort(backwardDate_sort);
    output();
}

function rating_sort(a, b) {
    return a.rating - b.rating;
}

function backwardRating_sort(a, b) {
    return b.rating - a.rating;
}

function date_sort(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function backwardDate_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}