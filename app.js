'use strict';

var hours = [' ','6am ','7am ','8am ','9am ', '10am ', '11am ','12pm ','1pm ', '2pm ', '3pm ','4pm ', '5pm ','6pm ','7pm ', 'Total '];
var totalAllStores = 0;
var allStores = [];

function Store (name, minCust, maxCust, avCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avCookies = avCookies;
  this.soldCookies = [];
  this.totalCookieSales = 0;
  this.randomCustomersPerHour = function() {
    var number = Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
    return number;
  };
  this.hourlySales = function(){
    this.soldCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0 ; i < (hours.length - 2); i++) {
      var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
      this.soldCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  };
  this.dailySalesReport = function(){
    this.hourlySales();
    var tableLoco = document.getElementById('salesTable');
    var locoRow = document.createElement('tr');
    var name = this.name;
    locoRow.id = name;
    locoRow.innerText = name;
    tableLoco.appendChild(locoRow);
    var findName = document.getElementById(name);
    for (var i = 0; i < this.soldCookies.length; i++) {
      var newCell = document.createElement('td');
      var dataText = this.soldCookies[i];
      newCell.innerText = dataText;
      findName.appendChild(newCell);
    }
    var newCell = document.createElement('td');
    var dataText = this.totalCookieSales;
    newCell.innerText = dataText;
    findName.appendChild(newCell);
  };
  allStores.push(this);
};

var makeTable = function(){
  var tableSpot = document.getElementById('sales-report');
  var tab = document.createElement('table');
  tab.id = 'salesTable';
  tableSpot.appendChild(tab);
};

var tableHeader = function(){
  var findTable = document.getElementById('salesTable');
  var headRow = document.createElement('tr');
  headRow.id = 'firstRow';
  findTable.appendChild(headRow);
  for (var i = 0; i < hours.length; i++) {
    var makeHeading = document.createElement('th');
    var headingText = hours[i];
    makeHeading.innerText = headingText;
    headRow.appendChild(makeHeading);
  }
};

var tableFooter = function(){
  var locateFooter = document.getElementById('salesTable');
  var bottomRow = document.createElement('tr');
  bottomRow.id = 'bottom';
  var lowRow = document.getElementById('bottom');
  locateFooter.appendChild(bottomRow);
  var newTot = document.createElement('td');
  newTot.innerText = 'Totals: ';
  lowRow.appendChild(newTot);
  for (var i = 1; i < (hours.length - 1) ; i++) {
    var hourTotal = 0;
    for (var c = 0; c < allStores.length; c++) {
      hourTotal += allStores[c].soldCookies[i];
    }
    totalAllStores += hourTotal;
    var newCell = document.createElement('td');
    var dataText = hourTotal;
    newCell.innerText = dataText;
    lowRow.appendChild(newCell);
  }

  // var makeFooter = document.createElement('td');
  // makeFooter.innerText = totalAllStores;
  // lowRow.apppendChild(makeFooter);
};

var stAndPike = new Store('1st and Pike',23 ,65 ,6.3);
var SeaTac = new Store('SeaTac Airport', 3 ,24, 1.2);
var seattleCenter = new Store('Seattle Center', 11 , 38 , 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

makeTable();
tableHeader();
stAndPike.dailySalesReport();
SeaTac.dailySalesReport();
seattleCenter.dailySalesReport();
capitolHill.dailySalesReport();
Alki.dailySalesReport();
tableFooter();



// storeQ.dailySalesReport();
// var storeR = {
//   name: 'SeaTac Airport',
//   storeHours: ['6am ','7am ', '8am ', '9am ','10am ','11am ','12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ','6pm ', '7pm ','8pm '],
//   minCust :3,
//   maxCust : 11,
//   avCookies: 20,
//   soldCookies: [],
//   totalCookieSales: 0,
//   randomCustomersPerHour: function(){
//     var number = Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return number;
//   },
//   hourlySales: function() {
//     this.soldCookies = [];
//     this.totalCookieSales = 0;
//     for (var i = 0 ; i < this.storeHours.length; i++) {
//       var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
//       this.soldCookies.push(hourlyCookieSales);
//       this.totalCookieSales += hourlyCookieSales;
//     }
//   },
//   dailySalesReport: function(){
//     this.hourlySales();
//     var storeLocation = document.getElementById('sales-report');
//     var locationName = document.createElement('h2');
//     locationName.innerText = this.name;
//     storeLocation.appendChild(locationName);
//     var list = document.createElement('ul');
//     storeLocation.appendChild(list);
//     for (var i = 0 ; i < this.storeHours.length; i++) {
//       var listItems = document.createElement('li');
//       listItems.innerText = this.storeHours[i] + ':' + this.soldCookies[i] + ' cookies';
//       list.appendChild(listItems);
//     }
//     var listItems = document.createElement('li');
//     listItems.innerText = 'Total:' + this.totalCookieSales + ' cookies';
//     list.appendChild(listItems);
//   }
// };
// storeR.dailySalesReport();
// var storeS = {
//   name: 'Seattle Center',
//   storeHours: ['6am ','7am: ', '8am ', '9am: ','10am ','11am ','12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ','6pm ', '7pm ','8pm '],
//   minCust : 11,
//   maxCust : 38,
//   avCookies: 3.7,
//   soldCookies: [],
//   totalCookieSales: 0,
//   randomCustomersPerHour: function(){
//     var number = Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return number;
//   },
//   hourlySales: function(){
//     this.soldCookies = [];
//     this.totalCookieSales = 0;
//     for (var i = 0 ; i < this.storeHours.length; i++) {
//       var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
//       this.soldCookies.push(hourlyCookieSales);
//       this.totalCookieSales += hourlyCookieSales;
//     }
//   },
//   dailySalesReport: function(){
//     this.hourlySales();
//     var storeLocation = document.getElementById('sales-report');
//     var locationName = document.createElement('h2');
//     locationName.innerText = this.name;
//     storeLocation.appendChild(locationName);
//     var list = document.createElement('ul');
//     storeLocation.appendChild(list);
//     for (var i = 0 ; i < this.storeHours.length; i++) {
//       var listItems = document.createElement('li');
//       listItems.innerText = this.storeHours[i] + ':' + this.soldCookies[i] + ' cookies';
//       list.appendChild(listItems);
//     }
//     var listItems = document.createElement('li');
//     listItems.innerText = 'Total:' + this.totalCookieSales + ' cookies';
//     list.appendChild(listItems);
//   }
// };
// storeS.dailySalesReport();
// var storeT = {
//   name: 'Capitol Hill',
//   storeHours: ['6am ','7am ', '8am ', '9am: ','10am ','11am ','12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ','6pm ', '7pm ','8pm '],
//   minCust :20,
//   maxCust : 38,
//   avCookies: 2.3,
//   soldCookies: [],
//   totalCookieSales: 0,
//   randomCustomersPerHour: function(){
//     var number = Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return number;
//   },
//   hourlySales: function(){
//     this.soldCookies = [];
//     this.totalCookieSales = 0;
//     for (var i = 0 ; i < this.storeHours.length; i++) {
//       var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
//       this.soldCookies.push(hourlyCookieSales);
//       this.totalCookieSales += hourlyCookieSales;
//     }
//   },
//   dailySalesReport: function(){
//     this.hourlySales();
//     var storeLocation = document.getElementById('sales-report');
//     var locationName = document.createElement('h2');
//     locationName.innerText = this.name;
//     storeLocation.appendChild(locationName);
//     var list = document.createElement('ul');
//     storeLocation.appendChild(list);
//     for (var i = 0 ; i < this.storeHours.length; i++) {
//       var listItems = document.createElement('li');
//       listItems.innerText = this.storeHours[i] + ':' + this.soldCookies[i] + '  cookies';
//       list.appendChild(listItems);
//     }
//     var listItems = document.createElement('li');
//     listItems.innerText = 'Total: ' + this.totalCookieSales + '  cookies';
//     list.appendChild(listItems);
//   }
// };
// storeT.dailySalesReport();
// var storeU = {
//   name: 'Alkai',
//   storeHours: ['6am ','7am ', '8am ', '9am: ','10am ','11am ','12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ','6pm ', '7pm ','8pm '],
//   minCust :2,
//   maxCust : 16,
//   avCookies: 4.6,
//   soldCookies: [],
//   totalCookieSales: 0,
//   randomCustomersPerHour: function(){
//     var number = Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return number;
//   },
//   hourlySales: function(){
//     this.soldCookies = [];
//     this.totalCookieSales = 0;
//     for (var i = 0 ; i < this.storeHours.length; i++) {
//       var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
//       this.soldCookies.push(hourlyCookieSales);
//       this.totalCookieSales += hourlyCookieSales;
//     }
//   },
//   dailySalesReport: function(){
//     this.hourlySales();
//     var storeLocation = document.getElementById('sales-report');
//     var locationName = document.createElement('h2');
//     locationName.innerText = this.name;
//     storeLocation.appendChild(locationName);
//     var list = document.createElement('ul');
//     storeLocation.appendChild(list);
//     for (var i = 0 ; i < this.storeHours.length; i++) {
//       var listItems = document.createElement('li');
//       listItems.innerText = this.storeHours[i] + ':' + this.soldCookies[i] + '  cookies';
//       list.appendChild(listItems);
//     }
//     var listItems = document.createElement('li');
//     listItems.innerText = 'Total: ' + this.totalCookieSales + '  cookies';
//     list.appendChild(listItems);
//   }
// };
// storeU.dailySalesReport();
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
