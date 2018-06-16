/**
 * amCharts plugin
 * Before the chart is initialized, this plugin will sort the `graphs` array
 * by their `index` value
 */
AmCharts.addInitHandler(function(chart) {

  // Reorder chart graph's based on their "index" value
  chart.graphs.sort(function(a, b) {
    if (a.index == b.index) {
      return 0;
    }
    return a.index < b.index ? -1 : 1;
  });

}, ["serial"]);

/**
 * Make the chart
 */
var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "legend": {
    "align": "center",
    "equalWidths": false,
    "periodValueText": "total: [[value.sum]]",
    "valueAlign": "left",
    "valueWidth": 100
  },
  "dataProvider": [{
    "month": "Aug.",
    "b_adams": 80,
    "wh_adamson": 80,
    "d_carter": 90,
    "hillcrest": 92,
    "lincoln": 88,
    "t_jefferson": 89
  }, {
    "month": "Sept.",
    "b_adams": 70,
    "wh_adamson": 80,
    "d_carter": 76,
    "hillcrest":82,
    "lincoln": 83,
    "t_jefferson": 85
  }, {
    "month": "Oct.",
    "b_adams": 98,
    "wh_adamson": 70,
    "d_carter": 80,
    "hillcrest": 99,
    "lincoln": 72,
    "t_jefferson": 84
  }, {
    "month": "Nov.",
    "b_adams": 88,
    "wh_adamson": 98,
    "d_carter": 87,
    "hillcrest": 84,
    "lincoln": 90,
    "t_jefferson": 98
  }, {
    "month": "Jan.",
    "b_adams": 91,
    "wh_adamson": 91,
    "d_carter": 89,
    "hillcrest": 84,
    "lincoln": 82,
    "t_jefferson": 80
  }, {
    "month": "Feb.",
    "b_adams": 88,
    "wh_adamson": 89,
    "d_carter": 90,
    "hillcrest": 91,
    "lincoln": 88,
    "t_jefferson": 89
  }, {
    "month": "Mar.",
    "b_adams": 93,
    "wh_adamson": 94,
    "d_carter": 90,
    "hillcrest": 89,
    "lincoln": 90,
    "t_jefferson": 90
  }, {
    "month": "Apr.",
    "b_adams": 88,
    "wh_adamson": 89,
    "d_carter": 72,
    "hillcrest": 76,
    "lincoln": 79,
    "t_jefferson": 80
  }, {
    "month": "May",
    "b_adams": 95,
    "wh_adamson": 96,
    "d_carter": 97,
    "hillcrest": 98,
    "lincoln": 99,
    "t_jefferson": 99
  }
  ],
  "valueAxes": [{
    "stackType": "regular",
    "gridAlpha": 0.07,
    "position": "left",
    "title": "Test Scores",
    "labelsEnabled": false
  }],
  "graphs": [{
    "fillAlphas": 0.5,
    "lineAlpha": 0.5,
    "title": "Bryan Adams",
    "valueField": "b_adams",
    "index": 6
  }, {
    "fillAlphas": 0.5,
    "lineAlpha": 0.5,
    "title": "W.H Adamson",
    "valueField": "wh_adamson",
    "index": 5
  }, {
    "fillAlphas": 0.5,
    "lineAlpha": 0.5,
    "title": "David W. Carter",
    "valueField": "d_carter",
    "index": 4
  },
{
    "fillAlphas": 0.5,
    "lineAlpha": 0.5,
    "title": "Hillcrest",
    "valueField": "hillcrest",
    "index": 3
  },
{
    "fillAlphas": 0.5,
    "lineAlpha": 0.5,
    "title": "Lincoln",
    "valueField": "lincoln",
    "index": 2
  },
{
    "fillAlphas": 0.5,
    "lineAlpha": 0.5,
    "title": "Thomas Jefferson",
    "valueField": "t_jefferson",
    "index": 1
  }
],
  "plotAreaBorderAlpha": 0,
  "marginLeft": 0,
  "marginBottom": 0,
  "chartCursor": {
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "month",
  "categoryAxis": {
    "startOnAxis": true,
    "axisColor": "#DADADA",
    "gridAlpha": 0.07
  }
});
