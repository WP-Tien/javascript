// 1. Async
// Từ khóa Async được đặt trước 1 hàm làm cho hàm trả về promise.
async function myFunction() {
    return `Hello`;
}

async function myFunction() {
    return Promise.resolve('Hello');
}

myFunction().then(
    function (value) {
        /**
         * Code if successful.
         */

        console.log(value);
    },
    function (error) {
        /**
         * Code if some error.
         */
        console.log(error);
    }
);

// 2. Await 
// Từ khóa Await được đặt trước 1 hàm làm cho hàm chờ một promise.
// let value = await promise;

// Từ khóa await chỉ có thể được sử dụng bên trong một hàm không đồng bộ.
