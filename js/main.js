$(document).ready(function(){
    $("span#backtop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $("span#backtop").fadeIn();
        }
        else{
            $("span#backtop").fadeOut();
        }
    });
    $('span#backtop').click(function(){
        $('html,body').animate(
            {scrollTop: 0},
            700
        );
        return false;
    });
})


let products = [
    {
        name: 'Yebo',
        thumb: './images/yebo.png',
        link: './product/Yebo/index.html',
    },
    {
        name: 'LeoSpa',
        thumb: './images/leospa.png',
        link: './product/LeoSpa/LEOSPA/index.html',
    },
    {
        name: 'Jogger',
        thumb: './images/jogger-shoes.png',
        link: './product/Jogger/index.html',
    },
    {
        name: 'TodoListv1',
        thumb: './images/yebo.png',
        link: 'https://binhnguyen2504.github.io/todolist-react-v1/',
    },
    {
        name: 'TodoListv2',
        thumb: './images/yebo.png',
        link: 'https://todolist-react-v2.vercel.app/',
    },
	{
        name: 'MusicPlayer',
        thumb: './images/yebo.png',
        link: 'https://ngbinhdev.web.app/',
    },
];
let productsHtml = products.map((product, index) => {
    let temp = (index % 2) ? "push-sm-1" : "";
    return `
    <div class="col-sm-5 product__item ${temp}">
        <div class="product__item-img">
            <img class="img-fluid" src="${product.thumb}" alt="${product.name}">
            <div class="bg-dark"></div>
            <div class="view">
                <a href="${product.link}"><span>View Demo</span></a>
            </div>
        </div>
        <span class="text-xs-center"><b>${product.name}</b> - Code by Binh</span>
    </div>
    `
})
document.querySelector('#product .product .row').innerHTML = productsHtml.join('');
