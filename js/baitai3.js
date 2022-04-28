// bài tập 3 : nhập số nguyên có 3 chữ số và in ra cách đọc :
function read (){
    // B1 : DOM và lấy giá trị input :
    var soTram = +document.getElementById ("import1").value ;
    var soChuc = +document.getElementById ("import2").value ;
    var soDonVi = +document.getElementById ("import3").value ;
    // B2 : kiểm tra và viết cách đọc
    var  num1;
    var num2 ;
    var num3 ;
    
    switch (soTram){
        case 1 :
        num1 = "một"
        break ;
        case 2 :
        num1 = "hai"
        break ;
        case 3 :
        num1 = "ba"
        break ;
        case 4 :
        num1 = "bốn"
        break ;
        case 5 :
        num1 = "năm"
        break ;
        case 6 :
        num1 = "sáu"
        break ;
        case 7 :
        num1 = "bảy"
        break ;
        case 8 :
        num1 = "tám"
        break ;
        case 9 :
        num1 ="Chín";
        default :
        num1 = "Không "
    }
    switch(soChuc) {
        case 1 :
        num2 = "Mười";
        break ;
        case 2 :
        num2 = "hai";
        break ;
        case 3 :
        num2 = "ba";
        break ;
        case 4 :
        num2 = "bốn";
        break ;
        case 5 :
        num2 = "năm";
        break ;
        case 6 :
        num2 = "sáu";
        break ;
        case 7 :
        num2 = "bảy";
        break ;
        case 8 :
        num2 = "tám";
        break ;
        case 9 :
        num2 = "chín";
        break;
        default :
        num2 = "Lẻ";
    }
    switch (soDonVi) {
        case 1 :
        num3 = "Một";
        break ;
        case 2 :
        num3 = "hai";
        break ;
        case 3 :
        num3 = "ba";
        break ;
        case 4 :
        num3 = "bốn";
        break ;
        case 5 :
        num3 = "năm";
        break ;
        case 6 :
        num3 = "sáu";
        break ;
        case 7 :
        num3 = "bảy";
        break ;
        case 8 :
        num3 = "tám";
        break ;
        case 9 :
        num3 = "chín";
        break ;
        default :
        num3 = "mươi" ;
    }
    
    // B3 : xuất kết quả 
    cachDoc.innerHTML = `${num1} trăm ${num2} ${num3}` ;
}