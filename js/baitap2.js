function kiemTra () {
    // B1 : DOM tới inut và lấy giá trị
    var month = +document.getElementById ("month").value ;
    var year = +document.getElementById ("year").value ;
    // B2 : tính giá trị :
    
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 ==0)){
        switch (month) {
            case 1 :
            case 3 :
            case 5 :
            case 7 :
            case 8 :
            case 10 :
            case 12 :
                document.getElementById ("checkMonth").innerHTML =
                 "Tháng " + month + ": Có 31 ngày" ;
            break ;
            case 2 :
                document.getElementById ("checkMonth").innerHTML =
                 "Tháng" + month + ": Có 29 ngày " + "Năm Nhuận " + year;   
            break;
            case 4 :
                case 6 :
                case 9 :
                case 11 :
                    document.getElementById("checkMonth").innerHTML =
                     "Tháng " + month + ": Có 30 ngày" ;
                break;
            default :
                document.getElementById ("checkMonth").innerHTML =
                "Tháng không hợp lệ" ;     
        }
    }else {
        switch (month) {
            case 1 :
            case 3 :
            case 5 :
            case 7 :
            case 8 :
            case 10 :
            case 12 :
                document.getElementById ("checkMonth").innerHTML =
                 "Tháng " + month + ": Có 31 ngày" ;
            break ;
            case 2 : 
                document.getElementById ("checkMonth").innerHTML = 
                "Tháng " + month + ": Có 28 ngày" ;
            break ;
            case 4 :
            case 6 :
            case 9 :
            case 11 :
                document.getElementById("checkMonth").innerHTML =
                 "Tháng " + month + ": Có 30 ngày" ;
            break;
            default :
                 document.getElementById ("checkMonth").innerHTML =
                   "Tháng không hợp lệ" ;        
        }

    }
}