// 1. Напишите функцию, которая использует forEach для умножения каждого элемента массива на 2 и вывода результата в консоль.

const array = [1, 3, 5, 7, 9, 4];
array.forEach((item) => console.log(item * 2))

// 2. Напишите функцию, которая использует forEach, чтобы складывать все элементы массива и возвращать сумму.

// const array = [1, 3, 5, 7, 9, 4];
let sum = 0;
array.forEach((item) => sum += item)
console.log(sum);

// 3. Дан массив строк. Используйте forEach, чтобы преобразовать каждую строку в верхний регистр и сохранить изменения в том же массиве.

let arrString = ['hallo', 'dog', 'sun', 'ball'].forEach((item) => console.log(item.toUpperCase()))

// 4. Дан массив чисел. Создайте новый массив, в котором будут лежать квадраты каждого числа из исходного массива.

// const array = [1, 3, 5, 7, 9, 4];
const newArray = array.map((item) => item ** 2)
console.log(newArray);

// 5. Дан массив объектов с информацией о товарах. Необходимо создать новый массив, содержащий только имена товаров.

let object = [
    { name: 'ball', price: 10, id: 1 },
    { name: 'puppet', price: 15, id: 2 },
    { name: 'auto', price: 18, id: 3 }
]
let newObj = object.map((item) => item.name)
console.log(newObj);

// 6. Дан массив чисел. Создайте новый массив, в котором будут только отрицательные числа из исходного массива.

let array1 = [-3, 4, -5, 6, -7];
let newArrey1 = array1.map((item) => {
    if (item < 0) {
        return item
    }
    })
console.log(newArrey1);

