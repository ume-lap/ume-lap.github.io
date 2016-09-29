var chart = AmCharts.makeChart("chart1div", {
  "type": "serial",
  "categoryField": "category",
  "categoryAxis": {
    "gridPosition": "start"
  },
  "graphs": [
    {
      "title": "Graph title",
      "valueField": "column-1"
    }
  ],
  "valueAxes": [
    {
      "title": "Axis title"
    }
  ],
  "legend": {
    "useGraphSettings": true
  },
  "titles": [
    {
      "size": 15,
      "text": "Chart Title"
    }
  ],
  "dataProvider": [
    {
      "category": "category 1",
      "column-1": 8
    },
    {
      "category": "category 2",
      "column-1": 10
    }
  ]
});

// --------------------------------------------
// --------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var chart2 = AmCharts.makeChart("chart2div", {
  "type": "serial",
  "categoryField": "category",
  "categoryAxis": {
    "gridPosition": "start"
  },
  "graphs": [
    {
      "title": "Graph title",
      "valueField": "column-1"
    }
  ],
  "valueAxes": [
    {
      "title": "Axis title"
    }
  ],
  "legend": {
    "useGraphSettings": true
  },
  "titles": [
    {
      "size": 15,
      "text": "Chart Title"
    }
  ],
  "dataProvider": [
    {
      "category": "category 1",
      "column-1": 100
    },
    {
      "category": "category 2",
      "column-1": 200
    },
  ]   
});
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



chart.addListener("rendered", zoomChart);

zoomChart();

function zoomChart() {
    chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
}

