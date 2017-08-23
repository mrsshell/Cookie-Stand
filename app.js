'use strict';
var hours = ['6am ','7am ','8am ','9am ', '10am ', '11am ','12pm ','1pm ', '2pm ', '3pm ','4pm ', '5pm ','6pm ','7pm '];

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
  this.calcHourlySales = function(){
    this.soldCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0 ; i < hours.length; i++) {
      var hourlyCookieSales = Math.round(this.avCookies * this.customersPerHour());
      this.soldCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  };
  this.calcHourlySales();
};

var stAndPike = new Store('1st and Pike',23 ,65 ,6.3);
var seaTac = new Store('SeaTac Airport', 3 ,24, 1.2);
var seattleCenter = new Store('seattleCenter', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
var storeArray = [stAndPike, seaTac, seattleCenter, capitolHill, alki];

function makeTable(){
  var tableSpot = document.getElementById('table-container');
  var tab = document.createElement('table');
  tab.id = 'table';
  tableSpot.appendChild(tab);
}
makeTable();

function makeHeader(){
  var findTable = document.getElementById('table');
  var tHead = document.createElement('thead');
  var tRow = document.createElement('tr');
  var emptyCell = document.createElement('td');
  emptyCell.innerText = '';
  tRow.appendChild(emptyCell);
  for (var i = 0; i < hours.length; i++) {
    var tableData = document.createElement('td');
    tRow.appendChild(tableData);
    tableData.innerText = hours[i];
  }
  var lastCell = document.createElement('td');
  lastCell.innerText = 'Totals';
  tRow.appendChild(lastCell);
  tHead.appendChild(tRow);
  table.appendChild(tHead);
}
makeHeader();

var tableBody = function(){
  var bodyTable = document.createElement('tbody');
  table.appendChild(bodyTable);
  for (var i = 0; i < storeArray.length; i++) {
    var firstRow = document.createElement('tr');
    var newCell = document.createElement('td');
    newCell.innerText = storeArray[i].name;
    firstRow.appendChild(newCell);
    for (var j = 0; j < hours.length; j++) {
      var dataCell = document.createElement('td');
      dataCell.innerText = storeArray[i].soldCookies[j];
      firstRow.appendChild(dataCell);
    }
    var totalsCell = document.createElement('td');
    totalsCell.innerText = storeArray[i].totalCookieSales;
    firstRow.appendChild(totalsCell);
    bodyTable.appendChild(firstRow);
  }
};
tableBody();

function makeFooter(){
  var tableBottom = document.createElement('tfoot');
  table.appendChild(tableBottom);
  var footerSpace = document.createElement('tr');
  var totalCell = document.createElement('td');
  totalCell.innerText = 'Daily Totals';
  tableBottom.appendChild(totalCell);

  for (var i = 0; i < hours.length; i++) {
    var totalsByHour = document.createElement('td');
    totalsByHour += storeArray[i].totalCookieSales;

    var allSales = 0;
    for (var j = 0; j < storeArray.length; j++) {
      allSales += storeArray[i].soldCookies[j];
      totalsByHour.innerText += allSales.hours;
      footerSpace.appendChild(totalsByHour);
    }
    var overAllTotal = 0;
    overAllTotal += allSales;
    var overAllTotalCell = document.createElement('td');
    overAllTotalCell.innerText = overAllTotal;
    table.appendChild(tableBottom);
  }
};
makeFooter();

//
// function addNewStore(event){
//   event.preventDefault();
//   var storeArray = form.elements['storeArray'].value;
//   var minCust = parsInt(form.elements['minCust'].value);
//   var maxCust = parsInt(form.elements['maxCust'].value);
//   var avCookies = parsFloat(form.elements['avCookies'].value);
//   var newStores = new store(name, minCust, maxCust, avCookies);
//   newStores.storeBuilder();
//   form.reset();
// };
// var orderForm = document.getElementById('order-form');
// orderForm.addEventListener('submit', addNewStore);
// addNewStore();
//
//


// var getTable = document.createElement('table');
// var getSales = getElementsByTagName('body')[0];
// getSales.appendChild('table');
// getTable.setAttribute('id', 'table');
// this.makeReport = function(){
//   var salesReport = document.getElementById('header');
//   var storeData = document.createElement('tr');
//   storeData.id = 'report';
//   salesReport.appendChild(storeData);
//   for (var i = 0; i < storeArray.length; i++) {
//     var storeRow = document.createElement('tr');
//     var nameLabel = document.createElement('td');
//     nameLabel.innerText = storeArray[i];
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
//
//
