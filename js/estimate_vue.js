new Vue({
  el: '#vue',
  data: {
    premiums: tablePremiums,
    rateClasses: {
      '310': 'Up to 100 cc',
      '311': '111 - 400 cc, Zero electric',
      '312': '401 - 750 cc',
      '313': '751 - 1150 cc',
      '314': 'Over 1150 cc',
    },
    territories: {
      D: 'Lower Mainland',
      E: 'Maple Ridge / Pitt Meadows',
      F: 'Squamish / Whistler area',
      G: 'Pemberton area / Hope area',
      H: 'Fraser Valley',
      L: 'Thompson / Okanagan area',
      N: 'Kootenays',
      P: 'Cariboo area',
      R: 'Prince George area',
      S: 'Northern coast',
      V: 'Peace River area',
      W: 'South Vancouver Island / other islands',
      X: 'Mid Vancouver Island / Sunshine Coast',
      Y: 'Northern Vancouver Island',
      Z: "Other provinces / 'Murrica",
    },
    claimRates: {
      '3.05': '205% surcharge',
      '2.65': '165% surcharge',
      '2.30': '130% surcharge',
      '2.00': '100% surcharge',
      '1.75': '75% surcharge',
      '1.55': '55% surcharge',
      '1.40': '40% surcharge',
      '1.30': '30% surcharge',
      '1.20': '20% surcharge',
      '1.10': '10% surcharge',
      '1.00': 'Base Rate',
      '0.95': '5% discount',
      '0.90': '10% discount',
      '0.85': '15% discount',
      '0.80': '20% discount',
      '0.75': '25% discount',
      '0.70': '30% discount',
      '0.65': '35% discount',
      '0.60': '40% discount',
      '0.57': '43% discount',
    },
    model: {
      rateClass: '312',
      territory: 'D',
      claimRate: '1.00',
      sexaquinquagenarian: false,
      collector: false,
      fee: 33,
      liability: '$200k'
    }
  },
  computed: {
    computedRateClass: function () {
      let rateClass = parseInt(this.model.rateClass, 10)
      if (this.model.sexaquinquagenarian) {rateClass += 10}
      if (this.model.collector) {rateClass += 400}
      return `${rateClass}`
    },
    cost: function () {
      return this.premiums[this.computedRateClass][this.model.territory]
    },
    payable: function () {
      return this.cost + this.model.fee
    }
  },
})