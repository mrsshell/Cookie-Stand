'use strict';

var store1 = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  averageSales: 6.3,
  hours: ['7:00 am', '8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm'],
  hourlySales: [],
  randomCustomers: function() {
    return Math.round(Math.random() * (this.max - this.min) + this.min);
    },
  salesByHour: function() {
    var totalSales = 0;
      for (var i = 0; i < this.hours.length; i++) {
        var cookiesPerHour = Math.round(this.averageSales * this.randomCustomers());
        this.hourlySales.push(cookiesPerHour);
        totalSales = (totalSales + cookiesPerHour);
    }
  },
  toSalesPage: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var pikeStore = document.getElementById('store1');
      var newLi = document.createElement('li');
      var newString = this.hours[i] + this.hourlySales[i] + 'Cookies';
      newLi.innerText = newString;
      pikeStore.appendChild(newLi);
    }
  },
};
store1.salesByHour();
store1.toSalesPage();


var store2 = {
  name:'SeaTac Airport',
  min: 3,
  max: 11,
  averageSales: 20,
  hours: ['7:00 am', '8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm'],
    hourlySales: [],
    randomCustomers: function() {
      Math.round(Math.random() * (this.max - this.min) + this.min);
      },
      salesByHour: function() {
        var totalSales = 0;
          for (var i = 0; i < this.hours.length; i++) {
            var cookiesPerHour = Math.round(this.averageSales * this.randomCustomers());
            this.hourlySales.push(cookiesPerHour);
            totalSales = (totalSales + cookiesPerHour);
        }
      },
      toSalesPage: function() {
        for (var i = 0; i < this.hours.length; i++) {
          var pikeStore = document.getElementById('store2');
          var newLi = document.createElement('li');
          var newString = this.hours[i] + this.hourlySales[i] + 'Cookies';
          newLi.innerText = newString;
          pikeStore.appendChild(newLi);
        }
      },
    };
    store1.salesByHour();
    store1.toSalesPage();


var store3 = {
  name:'Seattle Center'
  min:11,
  max: 38,
  averageSales: 3.7,
  hours: ['7:00 am', '8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm'],
  hourlySales: [],
  randomCustomers: function() {
    Math.round(Math.random() * (this.max - this.min) + this.min);
    },
    salesByHour: function() {
      var totalSales = 0;
        for (var i = 0; i < this.hours.length; i++) {
          var cookiesPerHour = Math.round(this.averageSales * this.randomCustomers());
          this.hourlySales.push(cookiesPerHour);
          totalSales = (totalSales + cookiesPerHour);
      }
    },
    toSalesPage: function() {
      for (var i = 0; i < this.hours.length; i++) {
        var pikeStore = document.getElementById('store3');
        var newLi = document.createElement('li');
        var newString = this.hours[i] + this.hourlySales[i] + 'Cookies';
        newLi.innerText = newString;
        pikeStore.appendChild(newLi);
      }
    },
  };
  store1.salesByHour();
  store1.toSalesPage();


var store4 = {
  name:'Capitol Hill',
  min: 20,
  max: 38,
  averageSales: 2.3,
  hours: ['7:00 am', '8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm'],
  hourlySales: [],
  randomCustomers: function() {
    Math.round(Math.random() * (this.max - this.min) + this.min);
    },
    salesByHour: function() {
      var totalSales = 0;
        for (var i = 0; i < this.hours.length; i++) {
          var cookiesPerHour = Math.round(this.averageSales * this.randomCustomers());
          this.hourlySales.push(cookiesPerHour);
          totalSales = (totalSales + cookiesPerHour);
      }
    },
    toSalesPage: function() {
      for (var i = 0; i < this.hours.length; i++) {
        var pikeStore = document.getElementById('store4');
        var newLi = document.createElement('li');
        var newString = this.hours[i] + this.hourlySales[i] + 'Cookies';
        newLi.innerText = newString;
        pikeStore.appendChild(newLi);
      }
    },
  };
  store1.salesByHour();
  store1.toSalesPage();


var store5  = {
  name:'Alkai',
  min: 2,
  max: 16,
  averageSales: 4.6,
  hours: ['7:00 am', '8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm'],
  hourlySales: [],
  randomCustomers: function() {
    Math.round(Math.random() * (this.max - this.min) + this.min);
    },
    salesByHour: function() {
      var totalSales = 0;
        for (var i = 0; i < this.hours.length; i++) {
          var cookiesPerHour = Math.round(this.averageSales * this.randomCustomers());
          this.hourlySales.push(cookiesPerHour);
          totalSales = (totalSales + cookiesPerHour);
      }
    },
    toSalesPage: function() {
      for (var i = 0; i < this.hours.length; i++) {
        var pikeStore = document.getElementById('store5');
        var newLi = document.createElement('li');
        var newString = this.hours[i] + this.hourlySales[i] + 'Cookies';
        newLi.innerText = newString;
        pikeStore.appendChild(newLi);
      }
    },
  };
  store1.salesByHour();
  store1.toSalesPage();

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
