'use strict';
var hours = ['6am ','7am ','8am ','9am ', '10am ', '11am ','12pm ','1pm ', '2pm ', '3pm ','4pm ', '5pm ','6pm ','7pm '];

var table = document.createElement('table');
var bodyget = document.getElementsByTagName('body')[0];
bodyget.appendChild('table');
table.setAttribute('id', 'table');

function Store (name, minCust, maxCust, avCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avCookies = avCookies;
  this.soldCookies = [];
  this.totalCookieSales = 0;

  this.customersPerHour = function() {
    var number = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    return number;
  };
  this.soldCookies = function(){
    this.soldCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0 ; i < hours.length; i++) {
      var hourlyCookieSales = Math.round(this.avCookies * this.customersPerHour());
      this.soldCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  };
  this.soldCookies();
};
var stAndPike = new Store('1st and Pike',23 ,65 ,6.3);
var seaTac = new Store('SeaTac Airport', 3 ,24, 1.2);
var seattleCenter = new Store('seattleCenter', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
var storeNames = [stAndPike, seaTac, seattleCenter, capitolHill, alki];

this.storeBuilder = function(){
  this.soldCookies();
  var firstRow = document.createElement('tr');
  var newCell = document.createElement('td');
  newCell.innerText = this.name;
  firstRow.appendChild(newCell);
  for (var i = 0; i < hours.length; i++) {
    var dataCell = document.createElement('td');
    dataCell.innerText = this.soldCookies[i];
    firstRow.appendChild(dataCell);
  }
  var totalsCell = document.createElement('td');
  totalsCell.innerText = this.totalCookieSales;
  firstRow.appendChild(totalCell);
  table.appendChild(firstRow);
};

var makeHeader = function() {
  var findTable = document.getElementById('sales-report');
  var headerData = document.createElement('tr');
  salesHeader.appendChild(headerData);
  var nada = document.createElement('td');
  nada.innerText = '';
  headerData.appendChild(nada);
  for (var i = 0; i < hours.length; i++) {
    var open = document.createElement('th');
    open.innerText = hours[i];
    headerData.appendChild(open);
  }
  var endCell = document.createElement('td');
  endCell.innerText = ('Totals!');
  headerData.appendChild(endCell);
  table.appendChild(headerData);
};
makeHeader();

var makeReport = function(){
  for (var i = 0; i < storeNames.length; i++) {
    storeNames[i].storeBuilder();
  }
  makeReport();
};

var makeFooter = function(){
  var tableBottom = document.getElementById('table');
  var footerSpace = document.createElement('tr');
  var totalCell = document.createElement('td');
  totalCell.innerText = ('Daily Totals');
  var overAllTotalCell = document.createElement('td');
  var overAllTotal = 0;
  footerSpace.appendChild(totalCell);
  for (var i = 0; i < this.hours.length; i++) {
    var totalsByHour = document.createElement('th');
    var allSales = 0;
    for (var j = 0; j < this.storeNames.length; j++) {
      allSales += this.storeNames[i].soldCookies[j];
    }
    overAllTotal += allSales;
    overAllTotalCell.innerText = overAllTotal;
    totalsByHour.innerText = allSales;
    footerSpace.appendChild(totalsByHour);
  }
  footerSpace.appendChild(overAllTotalCell);
  tableBottom.appendChild(footerSpace);
};
makeFooter();

// var orderForm = document.getElementById('order-form');
// orderForm.addEventListener('submit', makeNewStore);
//
// function addNewStore(event){
//   event.preventDefault();
//   var storeNames = form.elements['storeNames'].value;
//   var minCust = parsInt(form.elements['minCust'].value);
//   var maxCust = parsInt(form.elements['maxCust'].value);
//   var avCookies = parsFloat(form.elements['avCookies'].value);
//   var newStores = new store(name, minCust, maxCust, avCookies);
//   newStores.storeBuilder();
//   form.reset();
// };
// addNewStore();
// // }
// var getTable = document.createElement('table');
// var getSales = getElementsByTagName('body')[0];
// getSales.appendChild('table');
// getTable.setAttribute('id', 'table');
// this.makeReport = function(){
//   var salesReport = document.getElementById('header');
//   var storeData = document.createElement('tr');
//   storeData.id = 'report';
//   salesReport.appendChild(storeData);
//   for (var i = 0; i < storeNames.length; i++) {
//     var storeRow = document.createElement('tr');
//     var nameLabel = document.createElement('td');
//     nameLabel.innerText = storeNames[i];
//     salesReport.appendChild(storeRow);
//     this.hourlySales = function(){
//       this.customersPerHour = function() {
//         var number = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//         return number;
//       };
//       for (var i = 0 ; i < hours.length; i++) {
//         var hourlyCookieSales = Math.round(this.avCookies * this.customersPerHour());
//         this.soldCookies.push(hourlyCookieSales);
//         this.totalCookieSales += hourlyCookieSales;
//         for (var j = 0; j < this.soldCookies.length; j++) {
//           var numCookiesSold = document.createElement('td');
//           numCookiesSold.innerText = this.soldCookies[j];
//         }
//       }
//     };
//   }
// };
// this.makeReport();
  // var makeReport = function(){
  //   var salesReport = document.getElementById('salesTable');
  //   var tablebody = document.createElement('tr');
  //   salesReport.id = ''
  //
  //
  //   data.innerText = hours;
  //   salesHeader.appendChild(salesTable);
  // };
  //
  // var makeReport = function(){
  //   var salesReport = document.getElementById('salesTable');
  //   var tablebody = document.createElement('tr');
  //   salesReport.id = ''
  //
  //
  //     var TableData = function(){
  //     var placeBody = document.getElementById('salesTable');
  //
  //   }
  // }
  //   var tableLoco = document.getElementById('salesTable');
  //   var locoRow = document.createElement('tr');
  //
  // //   var name = this.name;
  // //   locoRow.id = name;
  // //   locoRow.innerText = name;
  // //   tableLoco.appendChild(locoRow);
  // //   var findName = document.getElementById(name);
  // //   for (var i = 0; i < this.soldCookies.length; i++) {
  // //     var newCell = document.createElement('td');
  // //     var dataText = this.soldCookies[i];
  // //     newCell.innerText = dataText;
  // //     findName.appendChild(newCell);
  // //   }
  // //   var newCell = document.createElement('td');
  // //   var dataText = this.totalCookieSales;
  // //   newCell.innerText = dataText;
  // //   findName.appendChild(newCell);
  // // };
  // // allStores.push(this);
// };
//
//
// var tableHeader = function(){
//   var findTable = document.getElementById('salesTable');
//   var headRow = document.createElement('tr');
//   headRow.id = 'firstRow';
//   findTable.appendChild(headRow);
//   for (var i = 0; i < hours.length; i++) {
//     var makeHeading = document.createElement('th');
//     var headingText = hours[i];
//     makeHeading.innerText = headingText;
//     headRow.appendChild(makeHeading);
//
///
//
// makeTable();
// tableHeader();
// stAndPike.dailySalesReport();
// SeaTac.dailySalesReport();
// seattleCenter.dailySalesReport();
// capitolHill.dailySalesReport();
// Alki.dailySalesReport();
// makeFooter();
//
//
//
// // var makeForm function(){
// //   var placement =  document.getElementsByTagName('form');
// //   var
// // }
// // storeU.dailySalesReport();
// // var newE1 = document.createElement(li);
// // var newText = document.createTextNode(store5.name);
// // newE1.appendChild(newtext);
// // var list = document.getElementsByTagName('ul')[4];
// // position.appendChild(newEl);
// //
// // var body = document.getElementsByTagName('body')[0];
