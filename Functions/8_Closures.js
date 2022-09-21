// Nếu bạn là một fan cứng của tips javascript thì việc định nghĩa Closures là gì? Thì đó là điều đơn giản nhưng nếu bạn là một dev mới hoặc một seo web thì chúng tôi cũng sẽ giúp bạn hiểu rõ hơn một chút tại đây đó là Closures đại diện cho các hàm lồng nhau. Bạn hiểu khái niệm lồng nhau chứ? Lồng nhau có nghĩa là một hàm này được định nghiwax bên trong hàm khác. Hay nói các khác đó là sử dụng Closures là đang sử dụng hay thực hiện những chức năng lồng nhau. Để hiểu kỹ hơn chúng tôi xin phép lấy một ví dụ ở bài viết "Javascript closure là gì? Vì sao người phỏng vấn thích hỏi bạn câu hỏi này?"

function f1() {
    var N = 0;
    console.log(N);
    function f2() {
        N  += 1;
        console.log('-->>', N);
    }

    return f2;
}

var result = f1();

console.log( result() ); // Chạy lần 1 
console.log( result() ); // Chạy lần 2
console.log( result() ); // Chạy lần 3