function getData() {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
        headers: {
            "keyword": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNUUiLCJIZXRIYW5TdHJpbmciOiIwOS8wNi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODYyNjg4MDAwMDAiLCJuYmYiOjE2NTczODYwMDAsImV4cCI6MTY4NjQxNjQwMH0.pEODM9bBATPcuhNAPQpJPKax0xMaxEWk3jymHJnYfeU"
        }
    });
    promise.then(function (res) {
        console.log(res.data.content);
        renderProduct(res.data.content);
    });
    promise.catch(function (err) {
        console.log(err);
    })
}

function renderProduct(arrProduct) {
    var contentP = "";
    for (var i = 0; i < arrProduct.length; i++) {
        var product = arrProduct[i];
        contentP += `
                <div class="col-12 col-sm-6 col-lg-4 mt-4">
                    <div class="product__item">
                        <div class="product__head">
                            <img src=${product.image} style="object-fit:cover; width:100%;" alt="product">
                        </div>
                        <div class="product__body">
                            <h6>${product.name}</h6>
                            <p>${product.shortDescription}</p>
                        </div>
                        <div class="product__footer">
                            <button onclick ="redirectDetail(${product.id})" >Buy now</button>
                            <div class="product__price">
                                <h6>${product.price}$</h6>
                            </div>
                        </div>
                    </div>
                </div>
        `
    };
    document.querySelector("#dataProduct").innerHTML = contentP;
}

function redirectDetail(id){
    location.assign(`./detail.html?id=${id}`); 
}


getData();