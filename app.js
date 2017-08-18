'use strict';
var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var hours = ['6am ','7am ','8am ','9am ', '10am ', '11am ','12pm ','1pm ', '2pm ', '3pm ','4pm ', '5pm ','6pm ','7pm '];
var totalAllStores = 0;

function Store (name, minCust, maxCust, avCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avCookies = avCookies;
  this.soldCookies = [];
  this.totalCookieSales = 0;
  this.randomCustomersPerHour = function() {
    var number = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    return number;
  };
  this.hourlySales = function(){
    this.soldCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0 ; i < hours.length - 2; i++) {
      var hourlyCookieSales = Math.round(this.avCookies * this.randomCustomersPerHour());
      this.soldCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  };
};
var makeTable = function(){
  var tableSpot = document.getElementById('sales-report');
  var tab = document.createElement('table');
  tab.id = 'salesTable';
  tableSpot.appendChild(tab);
};
makeTable();

var makeHeader = function() {
  var salesHeader = document.getElementById('salesTable');
  var headerData = document.createElement('tr');
  headerData.id = 'header';
  salesHeader.appendChild(headerData);
  var blank = document.createElement('th');
  headerData.appendChild(blank);
  for (var i = 0; i < hours.length; i++) {
    var open = document.createElement('th');
    open.innerText = hours[i];
    headerData.appendChild(open);
  }
  var endCell = document.createElement('td');
  endCell.innerText = ('Totals!');
  headerData.appendChild(endCell);
};
makeHeader();

var makeReport = function(){
  var salesReport = document.getElementById('salesTable');
  for (var i = 0; i < storeNames.length; i++) {
    var storeRow = document.createElement('tr');
    var nameLabel = document.createElement('td');
    nameLabel.innerText = storeNames[i];
    salesReport.appendChild(storeRow);
    storeRow.id = 'store' + i;
    var nameThis = document.getElementById('store' + i);
    nameThis.appendChild(nameLabel);
     var s = 0;
     for (var j = 0; j < soldCookies.length; j++) {
       var numCookiesSold = document.createElement('td');
       numCookiesSold.innerText = soldCookies[j];
       var attachTo = document.getElementById('store' + s);
       attachTo.appendChild(numCookiesSold);
        if (j === soldCookies.length) {
          s++
      };
    }
  };
  makeReport();
// }
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
//   }
// };
//



//
// var makeFooter = function() {
//   totalAllStores = 0;
//   var locateFooter = document.getElementById('salesTable');
//   var lastRow = document.createElement('tr');
//   lastRow.id = 'totRow';
//   locateFooter.appendChild(lastRow);
//   var lowRow = document.getElementById('totRow');
//   var newTot = document.createElement('td');
//   newTot.innerText = 'Totals: ';
//   lowRow.appendChild(newTot);
//   for (var i = 0; i < soldCookies.length; i++) {
//     var hourTotal = 0;
//     for (var c = 0; c < soldCookies.length; c++) {
//       hourTotal += allStores[c].soldCookies[i];
//     }
//     totalAllStores += hourTotal;
//     var newCell = document.createElement('td');
//     newCell.innerText = hourTotal;
//     lowRow.appendChild(newCell);
//   }
//
//   var tableFooter = document.createElement('td');
//   tableFooter.innerText = totalAllStores;
//   lowRow.appendChild(tableFooter);
// };
//
var stAndPike = new Store('1st and Pike',23 ,65 ,6.3);
var SeaTac = new Store('SeaTac Airport', 3 ,24, 1.2);
var seattleCenter = new Store('Seattle Center', 11 , 38 , 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);
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
// // function addNewStore(event){
// //   var storeNames = form.elements['storeNames'].value;
// //   var minCust = parsInt(form.elements['minCust'].value);
// //   var maxCust = parsInt(form.elements['maxCust'].value);
// //   var avCookies = parsFloat(form.elements['avCookies'].value);
// //   var newStores = new store(name, minCust, maxCust, avCookies);
// //   newStores.render();
// //   form.reset();
// // }
// // addNewStore();
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
