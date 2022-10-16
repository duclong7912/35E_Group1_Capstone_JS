var flag = null;
document.getElementById("male").onclick = function () {
    flag = true;
};
document.getElementById("female").onclick = function () {
    flag = false;
};

var validation = new Validation();

document.getElementById("regButton").onclick = function () {

    var email =document.getElementById("email").value;
    var name =document.getElementById("name").value;
    var password =document.getElementById("password").value;
    var phone =document.getElementById("phone").value;
    var confirmPass =document.getElementById("confirmPass").value;


    var isValid = true;

    isValid &= validation.kiemTraRong(email,"err1", "(*)Vui lòng nhập Email")&&validation.kiemTraDinhDang(email,"err1", "(*)Vui lòng nhập Email hợp lệ",validation.dangEmail );

    isValid &= validation.kiemTraRong(name,"err2", "(*)Vui lòng nhập tên")&&
    validation.kiemTraDinhDang(name,"err2","(*)Vui lòng nhập tên hợp lệ", validation.dangChuViet);

    isValid &= validation.kiemTraRong(password,"err3", "(*)Vui lòng nhập mật khẩu")&&validation.kiemTraDinhDang(password,"err3", "(*)Password 6-24 ký tự(1 ký tự số, <br> 1 ký tự in hoa, 1 ký tự đặc biệt)",validation.dangMatKhau)&&validation.kiemTraKyTu(password, "err3", "(*)Password 6-24 ký tự(1 ký tự số, <br> 1 ký tự in hoa, 1 ký tự đặc biệt)", 6,24);

    isValid &= validation.kiemTraRong(phone,"err4", "(*)Vui lòng nhập số điện thoại")&&validation.kiemTraDinhDang(phone,"err4", "(*)Vui lòng nhập số điện thoại hợp lệ",validation.dangso);

    isValid &= validation.kiemTraRong(confirmPass,"err5", "(*)Vui lòng nhập lại mật khẩu")&&
    validation.kiemTraDinhDang(confirmPass,"err5", "(*)Password 6-24 ký tự(1 ký tự số, <br> 1 ký tự in hoa, 1 ký tự đặc biệt)",validation.dangMatKhau)&&validation.kiemTraKyTu(confirmPass, "err5", "(*)Password 6-24 ký tự(1 ký tự số, <br> 1 ký tự in hoa, 1 ký tự đặc biệt)", 6,24)&&validation.confirmPass(confirmPass,password,"err5", "(*)Mật khẩu không trùng khớp" );

    isValid &= validation.kiemTraGioiTinh(flag,"err6", "(*)Vui lòng chọn giới tính");





    if (isValid) {
        var user = new Users();

        user.email = document.querySelector("#email").value;
        user.password = document.querySelector("#password").value;
        user.name = document.querySelector("#name").value;

        user.phone = document.querySelector("#phone").value;
        // document.getElementById("male").onclick = function(){
        //     flag = true;
        // };
        // document.getElementById("female").onclick = function(){
        //     flag = false;
        // };

        user.gender = flag;

        var promise = axios({
            url: " https://shop.cyberlearn.vn/api/Users/signup",
            method: "POST",
            data: user

        });

        promise.then(function (result) {
            console.log("use", user);
        });
        promise.catch(function (err) {
            console.log(err.response?.data);
        });

        console.log(user);
    }
}