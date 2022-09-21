// IIFE là viết tắt của Immediately Invoked Function Expression, có nghĩa là khởi tạo một function và thực thi nó ngay lập tức

// Cú pháp: 
(function () {
    // do stuff here
});

// Ta có thể truyền tham số vào:
(function () {
    // Do stuff
})(window, name);

// Vậy tại sao lại dùng IIFE? Bởi vì IIFE như là một các hộp đóng gói code của chính nó.
// Do đó, những biến trong hộp này là private, bên ngoài(global) không thể truy xuất hay thay đổi được. 
// Và nếu vô tình bạn đặt tên biến giống với global thì cũng không bị ảnh hưởng bên ngoài. 

// Bạn có thể thấy rằng ta có hai biến greeting. Một là toàn cục, một trong IIFE. Hai biến này nằm ở hai context và bộ nhớ khác nhau, nên khi ta thay đổi biến greeting trong IIFE không làm ảnh hưởng greeting ở ngoài và ngược lại.
// Có một điều lưu ý là khi tạo thư viện bằng khối IIFE thì bạn nên sử dụng ‘use strict’ để tránh được một số lỗi về type, scope trong js. Nếu như ví dụ trên nếu không có strict mode như sau:


var greeting = "Hola";
var name = "Tien";

(function (window, name) {
    // 'use strict';
    // do stuff
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
})(window, name);


//
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);//biến i ở đây là biến i của for
    });
}

//
for (var i = 0; i < 10; i++) {
    (function (i) {//IIFE tạo ra một scope khác cho từng i, nên giá trị của i là khác nhau
        setTimeout(function () {
            console.log(i);
        });
    })(i);//biến i ở đây được tạo riêng cho từng IIFE 
}