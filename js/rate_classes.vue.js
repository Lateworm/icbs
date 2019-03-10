new Vue({
  el: '#vue',
  methods: {
    chartPowerConservative: function() {
      new Chartist.Bar('.ct-chart-hp-conservative', {
        labels: ['311', '312', '313', '314'].reverse(),
        series: [
          [9.6,     24,     55,     80].reverse(),
          [48-9.6,  148-55, 200-55, 192-80].reverse(),
        ]
      }, {
        stackBars: true,
        horizontalBars: true,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value
          }
        }
      }).on('draw', function(data) {
        if(data.type === 'bar') {
          data.element.attr({
            style: 'stroke-width: 30px'
          });
        }
      });
    },
    chartPowerInclusive: function() {
      new Chartist.Bar('.ct-chart-hp-inclusive', {
        labels: ['311', '312', '313', '314'].reverse(),
        series: [
          [9.6,     24,     55,     80].reverse(),
          [70-9.6,  148-55, 200-55, 445-80].reverse(),
        ]
      }, {
        stackBars: true,
        horizontalBars: true,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value
          }
        }
      }).on('draw', function(data) {
        if(data.type === 'bar') {
          data.element.attr({
            style: 'stroke-width: 30px'
          });
        }
      });
    },
  },
  mounted: function () {
    this.chartPowerConservative();
    this.chartPowerInclusive();
  },
})