function Validation(){
    this.dangso = /^[0-9]+$/;
    this.dangChuViet = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    this.dangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.dangMatKhau = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;

    this.kiemTraRong = function(value, error, mess){
        if(value.trim() === ""){
            document.getElementById(error).innerHTML = mess;
           
            return false;
        }
        document.getElementById(error).innerHTML = "(*)";
        return true;
    };
    this.kiemTraKyTu = function(value, error, mess, min, max){
        if(value.length >= min && value.length <= max){
            document.getElementById(error).innerHTML = "(*)";
            
            return true;
        }
        document.getElementById(error).innerHTML = mess;
        
        return false;
    };


    this.kiemTraDinhDang = function(value, error, mess, letter){
        if(value.match(letter)){
            document.getElementById(error).innerHTML = "(*)";
           
            return true;
        }
        document.getElementById(error).innerHTML = mess;
        
        return false;
    };

    this.kiemTraGioiTinh = function(flag, error, mess ){
        if(flag === null){
            document.getElementById(error).innerHTML = mess;
            document.getElementById(error).style.display = "block";
            return false;
        }
        document.getElementById(error).innerHTML = "";
        document.getElementById(error).style.display = "none";
        
        return true;
    };

     this.confirmPass = function(value, pass, error, mess){
        if(value === pass){
            document.getElementById(error).innerHTML = "(*)";
           
            return true;
        }
        document.getElementById(error).innerHTML = mess;
        
        return false;
     };

}