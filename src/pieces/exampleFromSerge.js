"use strict";

var _ = require('underscore');

var products = [];

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
  
  static create(name, price, description) {
    let product = new Product(name, price, description);
    products.push(product);
    return product;
  }
}

Product.create('iPhone', 3000, 'This is very cool iPhone');
Product.create('iPad', 10000, 'iPad not iPhone');
Product.create('IPT-2017', 10000, 'Device for IP telephony');

function search(searchBy) {

  if (!searchBy) {
    return;
  }
  
  // создает регулярку из куска текста, введенного юзером в строке поиска
  searchBy = new RegExp(searchBy, 'i');
  
  // делаем toString на случай, если поле оказалось с числом
  // т.к. метод match только у строк
  return products.filter(product => _.toArray(product).some(item => item.toString().match(searchBy)));
  
  /*return products
            // возвращаем только тот элемент массива, который удовлетворяет условию
            .filter(
              // underscore.js: toArray - преобразовывает объект к массиву
              // по принципу: каждое значение по ключу = новый элемент
              // т.е. на выходе получится что-то вроде ['iPhone', 3000, 'This is very cool iPhone']
              product => _.toArray(product)
                          // возвращает true, если хотя бы 1 элемент массива удовлетворил условию
                          .some(
                            item => item.match(searchBy)
                          )
            )*/
}

console.log(search('iP'))
console.log(search('iPa'))
console.log(search(1000))