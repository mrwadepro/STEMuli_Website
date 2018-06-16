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
var DemocharData = [{
    yaxis: "Asian",
    before: createBefore(),
    after: createAfter()
  },
  {
    yaxis: "African American",
    before: createBefore(),
    after: createAfter()
  },
  {
    yaxis: "Native American",
    before: createBefore(),
    after: createAfter()
  },
  {
    yaxis: "Native Hawaiian or Other Pacific Islander",
    before: createBefore(),
    after: createAfter()
  },
  {
    yaxis: "Caucasian",
    before: createBefore(),
    after: createAfter()
  }
];
var filteredArray = [];
var charData = [{
    yaxis: "Bryan Adams",
    before: createBefore(),
    after: createAfter()
  },
  {
    yaxis: "W.H Adamson",
    before: createBefore(),
    after: createAfter()
  },
  {
    yaxis: "David W. Carter",
    before: createBefore(),
    after: createAfter()
  },
  {
    yaxis: "Hillcrest",
    before: createBefore(),
    after: createAfter()
  },
  {
    yaxis: "Lincoln",
    before: createBefore(),
    after: createAfter()
  },
  {
    yaxis: "Thomas Jefferson",
    before: createBefore(),
    after: createAfter()
  }
];
/*var defaultData = [
  // Data set District graph #1
  [{
      yaxis: "Bryan Adams",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "W.H Adamson",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "David W. Carter",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "Hillcrest",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "Lincoln",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "Thomas Jefferson",
      before: createBefore(),
      after: createAfter()
    }]
  // Data set #2
  [{
      yaxis: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #3
  [{
      yaxis: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #4
  [{
      yaxis: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #5
  [{
      yaxis: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #6
  [{
      yaxis: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #7
  [{
      yaxis: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ],
  // Data set #8
  [{
      yaxis: "A0 Introductory Unit",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A1 Modeling with Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A2 Linear Functions",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A3 Linear Equations and Inequalities in One Variable ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M1 Modeling Unit ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A4 Linear Equations and inequalities in Two Variables",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "P1 Project ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A5 Quadratic Functions ",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "A6 Quadratic Equations",
      before: createBefore(),
      after: createAfter()
    },
    {
      yaxis: "M2 Modeling",
      before: createBefore(),
      after: createAfter()
    }
  ]
];*/
<!-- Chart code -->
var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
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
      "fillColors": "#ffffff"
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
chart.dataProvider = charData;
chart.categoryField = "yaxis";
$(function() {
  $(":checkbox").on("change", function() {});
});
function generate(){
for (var i = 0; i < charData.length; i++) {
  charData[i].before=createBefore();
  charData[i].after=createAfter();
  chart.dataProvider = charData;
  chart.validateData();
  chart.animateAgain();
}
}
function generate1(){
  for (var i = 0; i < DemocharData.length; i++) {
    DemocharData[i].before=createBefore();
    DemocharData[i].after=createAfter();
    chart2.dataProvider = DemocharData;
    chart2.validateData();
    chart2.animateAgain();
  }
}
function selectDataset(toBeFilter, id) {
  createBefore();
  createAfter();
  charData = charData.filter(function(value, index) {
    if (toBeFilter != value.yaxis) {
      return toBeFilter != value.yaxis
    }
    if (toBeFilter == value.yaxis) {
      filteredArray.push(value.yaxis);
      return false
    }

  });
  if(document.getElementById(id).checked){
    var position = filteredArray.indexOf(toBeFilter);
    var removedItem = filteredArray.splice(position,1);
    charData.push({"yaxis": removedItem,
    "before": createBefore(),
    "after": createAfter()
  });
  }
  chart.dataProvider = charData;
  chart.validateData();
  chart.animateAgain();
}

var chart2 = AmCharts.makeChart("chartdiv1", {
  "type": "serial",
  "theme": "light",
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
      "fillColors": "#ffffff"
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
chart2.dataProvider = DemocharData;
chart2.categoryField = "yaxis";
$(function() {
  $(":checkbox").on("change", function() {});
});
