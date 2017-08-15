'use strict';
var storeQ = {
  name: '1st and Pike',
  storeHours: ['6am: ''7am: ', '8am ', '9am: ','10am ','11am ','12pm ', '1pm ', '2pm: ', '3pm ', '4pm ', '5pm ','6pm ', '7pm ','8pm'],
  minCust :23,
  maxCust : 65,
  avCookies: 6.5,
  soldCookies: [],
  totalCookieSales: 0,
  randomCustomersPer Hour: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust + 1) + this minCust);
  },
  hourlySales: function(){
    this.soldCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0 ; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
      this.soldCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.hourlySales();
    var storeLocation = document.getElementById('sales-report');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    storeLocation.appendChild(locationName);

    var list = document.getElementById('ul');
    location.appendChild('list');

    for (var i = 0 ; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i]+ ':'+ this.soldCookies[i] + 'cookies';
      list.appendChild(listItems);
    }
    var lstItems = document.createElement('li');
    listItems.innerText = 'Total:' + this.totalCookieSales + 'Cookies';
    list.appendChild(listItems);
  }
};


var storeR = {
  name: 'SeaTac Airport',
  storeHours: ['6am: ''7am: ', '8am ', '9am: ','10am ','11am ','12pm ', '1pm ', '2pm: ', '3pm ', '4pm ', '5pm ','6pm ', '7pm ','8pm'],
  minCust :3,
  maxCust : 11,
  avCookies: 20,
  soldCookies: [],
  totalCookieSales: 0,
  randomCustomersPer Hour: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust + 1) + this minCust);
  },
  hourlySales: function() {
    this.soldCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0 ; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
      this.soldCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.hourlySales();
    var storeLocation = document.getElementById('sales-report');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    storeLocation.appendChild(locationName);

    var list = document.getElementById('ul');
    location.appendChild('list');

    for (var i = 0 ; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i]+ ':'+ this.soldCookies[i] + 'cookies';
      list.appendChild(listItems);
    }
    var lstItems = document.createElement('li');
    listItems.innerText = 'Total:' + this.totalCookieSales + 'Cookies';
    list.appendChild(listItems);
  }
};


var storeS = {
  name: 'Seattle Center',
  storeHours: ['6am: ''7am: ', '8am ', '9am: ','10am ','11am ','12pm ', '1pm ', '2pm: ', '3pm ', '4pm ', '5pm ','6pm ', '7pm ','8pm'],
  minCust : 11,
  maxCust : 38,
  avCookies: 3.7,
  soldCookies: [],
  totalCookieSales: 0,
  randomCustomersPer Hour: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust + 1) + this minCust);
  },
  hourlySales: function(){
    this.soldCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0 ; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
      this.soldCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.hourlySales();
    var storeLocation = document.getElementById('sales-report');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    storeLocation.appendChild(locationName);

    var list = document.getElementById('ul');
    location.appendChild('list');

    for (var i = 0 ; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i]+ ':'+ this.soldCookies[i] + 'cookies';
      list.appendChild(listItems);
    }
    var lstItems = document.createElement('li');
    listItems.innerText = 'Total:' + this.totalCookieSales + 'Cookies';
    list.appendChild(listItems);
  }
};


var storeT = {
  name: 'Capitol Hill',
  storeHours: ['6am: ''7am: ', '8am ', '9am: ','10am ','11am ','12pm ', '1pm ', '2pm: ', '3pm ', '4pm ', '5pm ','6pm ', '7pm ','8pm'],
  minCust :20,
  maxCust : 38,
  avCookies: 2.3,
  soldCookies: [],
  totalCookieSales: 0,
  randomCustomersPer Hour: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust + 1) + this minCust);
  },
  hourlySales: function(){
    this.soldCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0 ; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
      this.soldCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.hourlySales();
    var storeLocation = document.getElementById('sales-report');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    storeLocation.appendChild(locationName);

    var list = document.getElementById('ul');
    location.appendChild('list');

    for (var i = 0 ; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i]+ ':'+ this.soldCookies[i] + ' cookies';
      list.appendChild(listItems);
    }
    var lstItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' Cookies';
    list.appendChild(listItems);
  }
};


var storeT = {
  name: 'Alkai',
  storeHours: ['6am: ''7am: ', '8am ', '9am: ','10am ','11am ','12pm ', '1pm ', '2pm: ', '3pm ', '4pm ', '5pm ','6pm ', '7pm ','8pm'],
  minCust :2,
  maxCust : 16,
  avCookies: 4.6,
  soldCookies: [],
  totalCookieSales: 0,
  randomCustomersPer Hour: function(){
    return Math.round(Math.random()) * (this.maxCust - this.minCust + 1) + this minCust);
  },
  hourlySales: function(){
    this.soldCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0 ; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
      this.soldCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.hourlySales();
    var storeLocation = document.getElementById('sales-report');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    storeLocation.appendChild(locationName);

    var list = document.getElementById('ul');
    location.appendChild('list');

    for (var i = 0 ; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i]+ ':'+ this.soldCookies[i] + 'cookies';
      list.appendChild(listItems);
    }
    var lstItems = document.createElement('li');
    listItems.innerText = 'Total:' + this.totalCookieSales + 'Cookies';
    list.appendChild(listItems);
  }
};












// var newE1 = document.createElement(li);
// var newText = document.createTextNode(store5.name);
// newE1.appendChild(newtext);
// var list = document.getElementsByTagName('ul')[4];
// position.appendChild(newEl);
//
// var body = document.getElementsByTagName('body')[0];
//
// for (var i = 0; i < 100; i++) {
//   var newLi = document.createElement('li');
//   var img = document.createElement('img');
//   img.setAttribute('src', 'img src=https://github.com/codefellows/seattle-201d25/commit/8c48c4225bc55d9c197a957958acaba4e0a9c4da#diff-569ca4d92443a30b113101f5e8993c47/');
//   newLi.innerText = i; // <--- if you want to change the inner text
//   newLi.appendChild(img);
//   list.appendChild(newLi);
//  }
