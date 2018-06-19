
<!-- Chart code -->
var chart = AmCharts.makeChart("microsoftgraph", {
	"type": "serial",
     "theme": "light",
	"categoryField": "Assignment",
	"rotate": true,
	"startDuration": 1,
	"categoryAxis": {
		"gridPosition": "start",
		"position": "left"
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "Before:[[value]]",
			"fillAlphas": 0.8,
			"id": "AmGraph-1",
			"lineAlpha": 0.2,
			"title": "Before",
			"type": "column",
			"valueField": "before",
      "fillColors":"#FFFFFF"
		},
		{
			"balloonText": "After:[[value]]",
			"fillAlphas": 0.8,
			"id": "AmGraph-2",
			"lineAlpha": 0.2,
			"title": "After",
			"type": "column",
			"valueField": "after",
      "fillColors":"#326ada"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"position": "top",
			"axisAlpha": 0
		}
	],
	"allLabels": [],
	"balloon": {},
	"titles": [],
	"dataProvider": [
		{
			"Assignment":"Computer Basics",
			"before": 75.2,
			"after": 88,
		},
		{
			"Assignment": "The Internet, Cloud Services, and the World Wide Web",
			"before": 88,
			"after": 93
		},
		{
      "Assignment": "Productivity Programs",
			"before": 78,
			"after": 91
		},
		{
      "Assignment": "Computer Security and Privacy",
			"before": 88,
			"after": 97
		},
		{
      "Assignment": "Digital Lifestyles",
			"before": 78,
			"after":88
		}
	],
    "export": {
    	"enabled": true
     }

});
