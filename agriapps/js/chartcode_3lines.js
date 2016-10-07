var chart;
var chartData = [];


// generate some random data
function generateNowHourlyChartData()
{
  var first_date = new Date();// 現在の年/月/日 時:分:秒 で取得
  // getDate() : 現在日付の取得
  // setDate() : 引数日付に当該オブジェクトのデータを更新
  
  var now_hour = first_date.getHours();
  var hyoji_hour = now_hour + ":00";
  
  var g1 = 30;
  var g2 = 40; // 基準線上
  var g3 = 5; // 基準線下

  chartData.push({
    date: hyoji_hour,
    g1: 22.0,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: hyoji_hour,
    g1: 22.4,
    g2: g2,
    g3: g3
  });
  
  chartData.push({
    date: hyoji_hour,
    g1: 22.6,
    g2: g2,
    g3: g3
  });

}

// 23時を超えてるかどうかを考える
function judgeOver(now_time) 
{
  if (now_time > 23) {
    return 0;
  }
  return now_time;
}

// 時刻に対応する温度を返す
function judgeTimeToData(now_time)
{
  var now_time_copy = now_time;
  var ret = 0;

  if (now_time_copy > 23) {
    now_time_copy = 0;
  }

  switch (now_time_copy) {
    case 0: {
      ret = 16.1;
      break;
    }
    case 1: {
      ret = 16.2;
      break;
    }
    case 2: {
      ret = 16.6;
      break;
    }
    case 3: {
      ret = 17.0;
      break;
    }
    case 4: {
      ret = 17.2;
      break;
    }
    case 5: {
      ret = 17.6;
      break;
    }
    case 6: {
      ret = 17.9;
      break;
    }
    case 7: {
      ret = 18.5;
      break;
    }
    case 8: {
      ret = 18.9;
      break;
    }
    case 9: {
      ret = 19.2;
      break;
    }
    case 10: {
      ret = 20.3;
      break;
    }
    case 11: {
      ret = 21.3;
      break;
    }
    case 12: {
      ret = 22.1;
      break;
    }
    case 13: {
      ret = 24.4;
      break;
    }
    case 14: {
      ret = 23.2;
      break;
    }
    case 15: {
      ret = 22.8;
      break;
    }
    case 16: {
      ret = 21.4;
      break;
    }
    case 17: {
      ret = 21.0;
      break;
    }
    case 18: {
      ret = 20.5;
      break;
    }
    case 19: {
      ret = 20.9;
      break;
    }
    case 20: {
      ret = 20.6;
      break;
    }
    case 21: {
      ret = 20.7;
      break;
    }
    case 22: {
      ret = 20.4;
      break;
    }
    case 23: {
      ret = 20.0;
      break;
    }
    default: {
      console.log(now_time_copy);
      console.log("defaultに侵入した");
      ret = 19.6;
    }
  }
  return ret;
}

function generateHourlyChartData() {
  // ローカル変数調整 --------------------------------------

  var first_date = new Date();// 現在の年/月/日 時:分:秒 で取得
  // getDate() : 現在日付の取得
  // setDate() : 引数日付に当該オブジェクトのデータを更新
  
  var now_hour = first_date.getHours();
  now_hour++;
  var min_literal = "";

  var g1 = 30;
  var g2 = 40; // 基準線上
  var g3 = 5; // 基準線下

  // 処理 --------------------------------------------------
  for (var i = 24; i > 0; now_hour++, i--) {
    now_hour = judgeOver(now_hour);
    g1 = judgeTimeToData(now_hour);
    min_literal = now_hour + ":00";
    chartData.push({
      date: min_literal,
      g1: g1,
      g2: g2,
      g3: g3
    });
  }
  
  $("#now-temp").html(judgeTimeToData(first_date.getHours()));

  /*
  chartData.push({
    date: "00:00",
    g1: 16.1,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "01:00",
    g1: 16.2,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "02:00",
    g1: 16.6,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "03:00",
    g1: 17.0,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "04:00",
    g1: 17.2,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "05:00",
    g1: 17.6,
    g2: g2,
    g3: g3
  });
  
  chartData.push({
    date: "06:00",
    g1: 17.9,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "07:00",
    g1: 18.5,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "08:00",
    g1: 18.9,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "09:00",
    g1: 19.2,
    g2: g2,
    g3: g3
  });
  
  chartData.push({
    date: "10:00",
    g1: 20.3,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "11:00",
    g1: 21.3,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "12:00",
    g1: 22.1,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "13:00",
    g1: 24.4,
    g2: g2,
    g3: g3
  });
  
  chartData.push({
    date: "14:00",
    g1: 23.2,
    g2: g2,
    g3: g3
  });

  ch  chartData.push({
    date: "02:00",
    g1: 16.6,
    g2: g2,
    g3: g3
  });
artData.push({
    date: "15:00",
    g1: 22.8,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "16:00",
    g1: 21.4,
    g2: g2,
    g3: g3
  });
  
  chartData.push({
    date: "17:00",
    g1: 21.0,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "18:00",
    g1: 20.5,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "19:00",
    g1: 20.9,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "20:00",
    g1: 20.6,
    g2: g2,
    g3: g3
  });
  
  chartData.push({
    date: "21:00",
    g1: 20.7,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "22:00",
    g1: 20.4,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "23:00",
    g1: 20.0,
    g2: g2,
    g3: g3
  });

  chartData.push({
    date: "24:00",
    g1: 19.6,
    g2: g2,
    g3: g3
  });
  */
}


// create chart
AmCharts.ready(function() {
  // generateChartData();
  generateHourlyChartData();
  // generateNowHourlyChartData();

  // SERIAL CHART    
  chart = new AmCharts.AmSerialChart();
  chart.titles = [{
    "text" : ""
  }];
  chart.marginTop = 0;
  chart.autoMarginOffset = 5;
  chart.pathToImages = "http://www.amcharts.com/lib/images/";
  chart.zoomOutButton = {
      backgroundColor: '#000000',
      backgroundAlpha: 0.15
  };
  chart.dataProvider = chartData;
  chart.categoryField = "date";
  chart.panEventsEnabled = false;// zoom処理を受け取らない

  // AXES
  // category                
  var categoryAxis = chart.categoryAxis;
  categoryAxis.parseDates = false; // as our data is date-based, we set parseDates to true
  categoryAxis.minPeriod = "hh"; // our data is daily, so we set minPeriod to DD
  categoryAxis.dashLength = 2;
  categoryAxis.gridAlpha = 0.15;
  categoryAxis.axisColor = "#DADADA";

  // value axis
  var valueAxis = new AmCharts.ValueAxis();
  valueAxis.axisColor = "#FF6600";
  valueAxis.axisThickness = 2;
  valueAxis.gridAlpha = 0;
  chart.addValueAxis(valueAxis);

  // GRAPHS
  // first graph
  var graph1 = new AmCharts.AmGraph();
  graph1.title = "実測値（デモ）";
  graph1.valueField = "g1";
  graph1.bullet = "round";
  graph1.hideBulletsCount = 30;
  chart.addGraph(graph1);

  // second graph                
  var graph2 = new AmCharts.AmGraph();
  graph2.title = "上限値";
  graph2.valueField = "g2";
  graph2.bullet = "none";
  graph2.hideBulletsCount = 30;
  graph2.lineThickness = 5;
  chart.addGraph(graph2);

  var graph3 = new AmCharts.AmGraph();
  graph3.title = "下限値";
  graph3.valueField = "g3";
  graph3.bullet = "none";
  graph3.hideBulletsCount = 30;
  graph3.lineThickness = 5;
  chart.addGraph(graph3);
  
  // CURSOR
  var chartCursor = new AmCharts.ChartCursor();
  chartCursor.cursorPosition = "mouse";
  chartCursor.pan = true; // これをtrueにするとタッチデバイス上でzoomじゃなくてpanになる
  chart.addChartCursor(chartCursor);

  // SCROLLBAR
  //var chartScrollbar = new AmCharts.ChartScrollbar();
  //chart.addChartScrollbar(chartScrollbar);

  // LEGEND
  var legend = new AmCharts.AmLegend();
  legend.marginLeft = 110;
  chart.addLegend(legend);

  // WRITE
  chart.write("chartdiv");
});


