const purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    console.log(this.shoes * this.stateTax);
  },
};

purchase1.shoes;
