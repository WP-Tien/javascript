// Đến đây chúng ta đã thở phào nhẹ nhõm khi callback là một khái niệm quen thuộc trước ES6 ra đời. Có ai đã từng mông lung khi sử dụng callback như tôi không? Khi sử dụng callback function thì có thể chúng ta sẽ đi vào mãi mà không trở ra. Mà thôi để nói về callback là một câu chuyện dài, nếu bạn có thời gian thì có thể đọc bài viết này. Còn ở đây chúng ta thì hiểu về cú pháp mà thôi, thông thường, các callback lại được sử dụng để đạt được các hoạt động không đồng bộ trong JavaScript. Ví dụ dưới dây:

function callback(name) {
    console.log(`Helllo ${name}`);
}

function b(callback) {
    callback('anonystick.com');
}

// calling
b(callback);
