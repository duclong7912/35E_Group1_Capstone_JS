window.onload = function () {
  getInfoProduct();
};

function getInfoProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise.then(function (res) {
    // console.log(res.data.content);
    renderListProduct(res.data.content);
  });

  promise.catch(function (err) {
    console.log(err);
  });
}

function renderListProduct(arrProduct) {
  var content = ``;

  for (var i = 0; i < arrProduct.length; i++) {
    var product = arrProduct[i];

    content += `
    <div class="col-12 col-sm-6 mt-sm-4 mt-4 mt-xl-4 mt-lg-3 col-lg-4">
        <div class="product__item">
            <div class="product__head">
                <img src="${product.image}" style="width: 100%" alt="product">
            </div>
            <div class="product__body">
                <h6>${product.name}</h6>
                <p>${
                  product.description.length > 50
                    ? product.description.substr(0, 50) + "..."
                    : product.description
                }</p>
            </div>
            <div class="product__footer">
                <a href="./detail.html?id=${product.id}">
                    <button>Buy now</button>
                </a>
                <div class="product__price">
                    <h6>${product.price + "$"}</h6>
                </div>
            </div>
        </div>
    </div>
    `;
  }

  document.querySelector(".product__content").innerHTML = content;
}
