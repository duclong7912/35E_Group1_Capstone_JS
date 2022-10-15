function getProductDetail() {
  var url = new URLSearchParams(window.location.search);
  var id = url.get("id");

  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
  });

  promise.then(function (res) {
    var productDetail = res.data.content;
    // console.log(productDetail);
    document.querySelector("#image").src = productDetail.image;
    document.querySelector("#name").innerHTML = productDetail.name;
    document.querySelector("#info").innerHTML = productDetail.description;
    document.querySelector("#price").innerHTML = productDetail.price + "$";

    for (i = 0; i < productDetail.size.length; i++) {
      var li = document.createElement("li");
      var textNode = document.createTextNode(productDetail.size[i]);
      li.appendChild(textNode);
      document.querySelector("#arrSize").appendChild(li);
    }

    renderRelateProduct(res.data.content.relatedProducts);
  });

  promise.catch(function (err) {
    console.log(err);
  });
}
getProductDetail();

function renderRelateProduct(arrRelateProduct) {
  var content = ``;

  for (var i = 0; i < arrRelateProduct.length; i++) {
    var product = arrRelateProduct[i];

    content += `
      <div class="col-12 col-sm-6 mt-sm-4 mt-4 mt-xl-4 mt-lg-3 col-lg-4">
          <div class="product__item">
              <div class="product__head">
                  <img src="${product.image}" style="width: 100%" alt="product">
              </div>
              <div class="product__body">
                  <h6>${product.name}</h6>
                  <p>${
                    product.description.length > 75
                      ? product.description.substr(0, 75) + "..."
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
