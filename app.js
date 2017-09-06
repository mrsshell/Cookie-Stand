'use strict';
var stores = [];
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function store(name, minCust, maxCust, avgCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.total = 0;
  this.hourlyCookies = [];
  this.customersPerHour = function(){
      var number = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      return number;
    };

    this.calcHourlySales = function(){
      this.hourlyCookies = [];
      for (var i = 0; i < hours.length; i++){
        var hourTotal = Math.round(this.customersPerHour() * this.avgCookies);
        this.hourlyCookies.push(hourTotal);
      }
      return this.hourlyCookies;
    };

    this.calcDailySales = function(){
      var total = 0;
      this.calcHourlySales();
      for (var i = 0; i < this.hourlyCookies.length; i++){
        this.total += this.hourlyCookies[i];
      }
    };
  this.salesReport = function(){
    this.calcDailySales();
  };
  this.salesReport();

  this.render = function(){
    var table = document.getElementById('table-content');
    var tRow = document.createElement('tr');
    var storeName = document.createElement('td');
    storeName.innerText = this.name;
    tRow.appendChild(storeName);
    for (var j = 0; j < hours.length; j++){
      var soldCookies = document.createElement('td');
      soldCookies.innerText = this.hourlyCookies[j];
      tRow.appendChild(soldCookies);
    }
    var totalData = document.createElement('td');
    totalData.innerText = this.total;
    tRow.appendChild(totalData);
    table.appendChild(tRow);
  };
  stores.push(this);
};
var stAndPike = new store('1st and Pike', 23, 65, 6.3);
var seaTac = new store('SeaTac Airport', 3, 24, 1.2);
var seattleCennter = new store('Seattle Center', 11, 38, 3.7);
var capitolHill = new store('Capitol Hill', 20, 38, 2.3);
var alki = new store('Alki', 2, 16, 4.6);
