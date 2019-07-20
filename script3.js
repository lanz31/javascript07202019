let products = [
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: "img/case1.jpg"
    },
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: "img/case2.jpg"
    },
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: "img/case3.jpg"
    },
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: "img/case1.jpg"
    },
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: "img/case2.jpg"
    },
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: "img/case3.jpg"
    },
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: "img/case1.jpg"
    },
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: "img/case2.jpg"
    },
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: "img/case3.jpg"
    },
    {
        pname: "Product 1",
        price: 1500,
        pcode: "prod",
        description: "This is product 1",
        manufacturer: "ASUS",
        stocks: "20",
        supplier: "ASUS",
        expdate: "2019/11/26",
        url: "https://www.google.com",
        imgurl: ""
    },
];

let output = "";
let container = document.getElementById('content');

products.forEach(function (product) {
    if (product.imgurl == "")
    {
        product.imgurl = "img/default.jpg"
    }

    output += `
        <div class="card">
            <img src="${product.imgurl}" class="card-img-top" title="${product.pname}">
            <div class="card-body">
                <h5 class="card-title">${product.pname}</h5>
                <a href="${product.url}" class="btn btn-primary floating-btn">Buy</a>
            </div>
        </div>
    `;

    container.innerHTML = output;
});