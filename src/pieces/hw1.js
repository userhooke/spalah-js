"use strict";

var _ = require('underscore');

var wallets = [];

class Wallet {
  constructor(name, currency, platform, os, description, sourceCode, price) {
    this.name = name;
    this.currency = currency;
    this.platform = platform;
    this.os = os;
    this.description = description;
    this.sourceCode = sourceCode;
    this.price = price;
  }

  static createOpenSource(name, currency, platform, os, description, sourceCode, price) {
    let wallet = new Wallet(name, currency, platform, os, description, sourceCode, 0);
    wallets.push(wallet);
    return wallet;
  }
  static createClosedSource(name, currency, platform, os, description, sourceCode, price) {
    let wallet = new Wallet(name, currency, platform, os, description, false, price);
    wallets.push(Wallet);
    return wallet;
  }
}

Wallet.createOpenSource(
"Electrum", 
"BTC", 
"Desktop, Mobile", 
"Windows, MacOs, Linux, Android", 
"Electrum's focus is speed and simplicity, with low resource usage. It uses remote servers that handle the most complicated parts of the Bitcoin system, and it allows you to recover your wallet from a secret phrase.", 
"https://github.com/spesmilo/electrum");

Wallet.createOpenSource(
"Bitcoin Core",
"BTC",
"Desktop",
"Windows, MacOs, Linux",
"Bitcoin Core is a full Bitcoin client and builds the backbone of the network. It offers high levels of security, privacy, and stability. However, it has fewer features and it takes a lot of space and memory.",
"https://github.com/bitcoin/bitcoin");

Wallet.createOpenSource(
"Trezor",
"BTC",
"Hardware",
"Trezor is a hardware wallet providing a high level of security without sacrificing convenience. Unlike cold storage, Trezor is able to sign transactions while connected to an online device. That means spending bitcoins is secure even when using a compromised computer.",
"https://github.com/trezor/");

Wallet.createClosedSource(
"Coinbase",
"BTC, ETC, ETH, XRP",
"Web, Android",
"Coinbase is a web wallet service that aims to be easy to use. It also provides an Android web wallet app, merchant tools and integration with US bank accounts to buy and sell bitcoins.",
10);



// Search function
var search = function(searchBy) {
  if (!searchBy) {
    return;
  }

  searchBy = new RegExp(searchBy, 'i');
  return wallets.filter(wallet => _.toArray(wallet).some(item => item.toString().match(searchBy)));
}
// Search function end

// old search 
var oldSearch = function(searchTerm, productsArr) {
  // создаем временный массив для результатов посика внутри функции
  let tempArr = [];
  // перебираем массив объектов
  productsArr.forEach((item, i, productsArr) => {
  // в каждом объекте смотрим ключи
    for (let key in item) {
  // регулярка для разделения строк в значениях ключа по , и проблелу
       let re = /\s|,\s/gi;
      // проверка для отсечения методов - ругается split
       if (typeof item[key] == "string") {
         // сплитом делим строку на массив слов, который перебираем форычом
       let m = item[key].split(re).forEach((item2) => {
         // если слово в массиве совпадает с искомым словом - пихаем во временный массив
          if (item2 == searchTerm)  {
          tempArr.push(item); 
          } 
       });
         
       }

    }
  })
  return tempArr;
  
}
// old search end

module.exports.wallets = wallets;
module.exports.search = search;
module.exports.oldSearch = oldSearch;