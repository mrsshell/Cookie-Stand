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
