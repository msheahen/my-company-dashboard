import Ember from 'ember';

export default Ember.Component.extend({

  chartOptions: {
    chart: {
      type: 'column'
    },

    title: {
      text: 'Reported Issues vs Time'
    },

    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Open Issues'
      }
    },
    tooltip: {
      valueSuffix: ''
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    }
  },
});
