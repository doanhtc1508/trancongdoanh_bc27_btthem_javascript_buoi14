function ngayTruocDo () {
    // B1 lấy giá trị từ input
    var ngay = +document.getElementById("ngay").value ;
    var thang = +document.getElementById ("thang").value ;
    var nam = +document.getElementById ("nam").value ;
    // B2 : Tính ngày
    var ngayTruoc = "Ngày "+(--ngay )+" Tháng "+ (thang)+" Năm " + (nam );
    // B3 : xuất kết quả
    document.getElementById ("ketQua1").innerHTML = ngayTruoc ;

}

function ngaySauDo () {
    // B1 lấy giá trị từ input
    var ngay = +document.getElementById ("ngay").value ;
    var thang = +document.getElementById ("thang").value ;
    var nam = +document.getElementById ("nam").value ;

    // B2 : Tính ngày
    var ngayHomSau = "Ngày "+ (++ngay)+" Tháng "+ (thang)+ " Năm "+ (nam);
    // B3 : xuất kết quả :
    document.getElementById ("ketQua2").innerHTML = ngayHomSau ;

}