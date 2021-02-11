document.querySelector('#btnXuatThongTin').onclick = function (event) {
    event.preventDefault();

    let arrInput = document.querySelectorAll('#inputInfo input,#inputInfo select');
    console.log(arrInput);
    let nhanVien = {};
    for (let i = 0; i < arrInput.length; i++) {
        let tagInput = arrInput[i];
        let id = tagInput.id;
        nhanVien = { ...nhanVien };
        nhanVien[id] = tagInput.value;
    }
    console.log(nhanVien);
    xuatKQ(nhanVien);
}

function xuatKQ(nhanVien) {
    document.getElementById('maNVInfo').value = nhanVien.maNV;
    document.getElementById('tenNVInfo').value = nhanVien.tenNV;
    document.getElementById('chucVuInfo').value = nhanVien.chucVu;
    document.getElementById('tongLuong').value = nhanVien.heSoLuong * nhanVien.luongCB;
}