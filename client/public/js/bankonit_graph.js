function createBefore() {
  beforeNum = Math.floor(Math.random() * (70 - 49 + 1)) + 49;
  return beforeNum;
}

function createAfter() {
  afterNum = Math.floor(Math.random() * (99 - 78 + 1)) + 78;
  return afterNum;
}
$(function() {
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    html: false
  });

  $('[data-toggle="popover"]').popover({
    container: 'body',
    html: true
  });
});
var chartData = [
  // Data set #1
  [{
      standard: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #2
  [{
      standard: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #3
  [{
      standard: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #4
  [{
      standard: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #5
  [{
      standard: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #6
  [{
      standard: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #7
  [{
      standard: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #8
  [{
      standard: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      standard: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ]
]
<!-- Chart code -->
var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "categoryField": "standard",
  "rotate": true,
  "startDuration": 1,
  "categoryAxis": {
    "gridPosition": "start",
    "position": "left"
  },
  "trendLines": [],
  "graphs": [{
      "balloonText": "Before:[[value]]",
      "fillAlphas": 0.8,
      "id": "AmGraph-1",
      "lineAlpha": 0.2,
      "title": "Before",
      "type": "column",
      "valueField": "before",
      "fillColors": "#E6ECF0"
    },
    {
      "balloonText": "After:[[value]]",
      "fillAlphas": 0.8,
      "id": "AmGraph-2",
      "lineAlpha": 0.2,
      "title": "After",
      "type": "column",
      "valueField": "after",
      "fillColors": "#326ada"
    }
  ],
  "guides": [],
  "valueAxes": [{
    "id": "ValueAxis-1",
    "position": "top",
    "axisAlpha": 0
  }],
  "allLabels": [],
  "balloon": {},
  "titles": [],

});
chart.dataProvider = chartData[0];
$(function() {
  $(":checkbox").on("change", function() {});
});

function selectDataset(d) {
  createBefore();
  createAfter();
  chart.dataProvider = chartData[d];
  chart.validateData();
  chart.animateAgain();
}
