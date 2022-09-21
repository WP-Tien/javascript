// Tiếp theo chúng ta sẽ nói đến sự kết hợp giữa Anonymous Function và Name Function đó chính là Function Expression. Bởi vì sao chúng ta lại nói vậy, bạn mới đọc phần phía trên đó là không thể gọi trực tiếp khi sử dụng anonymous function thì chúng ta có thể gán một biến cho một function , ngoài ra chúng ta cũng có thể làm điều tương tự với name function Xem ví dụ để có thể hiểu hơn những điều chúng ta mới thảo luận xong 

// # Named function expression
const say = function sayHelllo(name) {
    console.log('Hello', name);
}

say('Tien');

// #Anonymous function expression
const say2 = function(name) {
    console.log(`Hello ${name}`);
}

say2('Tein');