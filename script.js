function register() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Kiểm tra xem email và số điện thoại có giá trị hay không
    if (email && phone) {
        // Gửi thông tin đăng ký đi (có thể sử dụng AJAX hoặc fetch để gửi dữ liệu lên server)

        // Hiển thị thông báo đăng ký thành công (điều này có thể thay đổi tùy thuộc vào cách bạn muốn hiển thị thông báo)
        alert("Đăng ký thành công!\nEmail: " + email + "\nSố điện thoại: " + phone);

        // Đặt giá trị trống lại sau khi đăng ký
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
    } else {
        // Hiển thị thông báo lỗi nếu thiếu thông tin
        alert("Vui lòng nhập đầy đủ thông tin đăng ký.");
    }
}
