'use stict';

var store1 = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  averageSales: 6.3,
  hours: ['7:00 am', '8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm'],
  hourlySales: [],
  randomCustomers: function() {
    Math.round(Math.random() * (this.max - this.min) + this.min);
    },
  salesByHour: function() {
    var totalSales = 0;
      for (var i = 0, i < this.hours.length; i++  ) {
      this.hourlySales.push(Math.round(averageSales * this.randomCustomers()));
    }
    totalSales = this.sum.hourlySales * hours;
  },
};


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
        for (var i = 0, i < this.hours.length; i++  ) {
        this.hourlySales.push(Math.round(averageSales * this.randomCustomers()));
      }
    },
    totalSales = this.sum.hourlySales * hours;
  };


var store3 = {
  name:'Seattle Center'
  min:11,
  max: 38,
  avgerage sales: 3.7,
  hours: ['7:00 am', '8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm'],
  hourlySales: [],
  randomCustomers: function() {
    Math.round(Math.random() * (this.max - this.min) + this.min);
    },
  salesByHour: function() {
    var totalSales = 0;
      for (var i = 0, i < this.hours.length; i++  ) {
      this.hourlySales.push(Math.round(averageSales * this.randomCustomers()));
    }
  },
  totalSales = this.sum.hourlySales * hours;
};


var store4 = {
  name:'Capitol Hill',
  min: 20,
  max: 38,
  average sales: 2.3,
  hours: ['7:00 am', '8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm'],
  hourlySales: [],
  randomCustomers: function() {
    Math.round(Math.random() * (this.max - this.min) + this.min);
    },
  salesByHour: function() {
    var totalSales = 0;
      for (var i = 0, i < this.hours.length; i++  ) {
      this.hourlySales.push(Math.round(averageSales * this.randomCustomers()));
    }
  },
  totalSales = this.sum.hourlySales * hours;
};

var store5  = {
  name:'Alkai',
  min: 2,
  max: 16,
  avgerage sales: 4.6,
  hours: ['7:00 am', '8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm'],
  hourlySales: [],
  randomCustomers: function() {
    Math.round(Math.random() * (this.max - this.min) + this.min);
    },
  salesByHour: function() {
    var totalSales = 0;
      for (var i = 0, i < this.hours.length; i++  ) {
      this.hourlySales.push(Math.round(averageSales * this.randomCustomers()));
    }
  },
  totalSales = this.sum.hourlySales * hours;
};
