var flag = null;
document.getElementById("mal").onclick = function () {
    flag = true;
};
document.getElementById("fem").onclick = function () {
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

    isValid &= validation.kiemTraRong(email,"err1", "(*)vui long nhap email")&&validation.kiemTraDinhDang(email,"err1", "(*)vui long nhap email hop le",validation.dangEmail );

    isValid &= validation.kiemTraRong(name,"err2", "(*)vui long nhap ten")&&
    validation.kiemTraDinhDang(name,"err2","(*)vui long nhap ten hop le", validation.dangChuViet);

    isValid &= validation.kiemTraRong(password,"err3", "(*)vui long nhap mat khau")&&validation.kiemTraDinhDang(password,"err3", "(*)Vui lòng nhập password 6-24 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt",validation.dangMatKhau)&&validation.kiemTraKyTu(password, "err3", "(*)Vui lòng nhập password 6-24 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt", 6,24);

    isValid &= validation.kiemTraRong(phone,"err4", "(*)vui long nhap so dien thoai")&&validation.kiemTraDinhDang(phone,"err4", "(*)vui long nhap so dien thoai hop le",validation.dangso);

    isValid &= validation.kiemTraRong(confirmPass,"err5", "(*)vui long nhap lại mat khau")&&
    validation.kiemTraDinhDang(confirmPass,"err5", "(*)Vui lòng nhập password 6-24 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt",validation.dangMatKhau)&&validation.kiemTraKyTu(confirmPass, "err5", "(*)Vui lòng nhập password 6-24 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt", 6,24)&&validation.confirmPass(confirmPass,password,"err5", "(*)mat khau khong trung khop" );

    isValid &= validation.kiemTraGioiTinh(flag,"err6", "(*)vui long chon gioi tinh");










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