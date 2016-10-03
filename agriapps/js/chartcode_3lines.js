var chart;
var chartData = [];


// generate some random data
function generateChartData() {
    var firstDate = new Date();// 現在の年/月/日 時:分:秒 で取得
    // getDate() : 現在日付の取得
    // setDate() : 引数日付に当該オブジェクトのデータを更新
    
    firstDate.setDate(firstDate.getDate() - 50);

    for (var i = 0; i < 50; i++) {
        var newDate = new Date(firstDate);// firstDateのコピーを作ってる
        newDate.setDate(newDate.getDate() + i);// 

        var g1 = Math.round(Math.random() * 60) + 0;
        var g2 = 40; // 基準線上
        var g3 = 5; // 基準線下

        chartData.push({
            date: newDate,
            g1: g1,
            g2: g2,
            g3: g3
        });
    }
}

// create chart
AmCharts.ready(function() {
    // generate some random data first
    generateChartData();

    // SERIAL CHART    
    chart = new AmCharts.AmSerialChart();
    chart.marginTop = 0;
    chart.autoMarginOffset = 5;
    chart.pathToImages = "http://www.amcharts.com/lib/images/";
    chart.zoomOutButton = {
        backgroundColor: '#000000',
        backgroundAlpha: 0.15
    };
    chart.dataProvider = chartData;
    chart.categoryField = "date";

    // AXES
    // category                
    var categoryAxis = chart.categoryAxis;
    categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
    categoryAxis.minPeriod = "DD"; // our data is daily, so we set minPeriod to DD
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
    // graph2.fillAlphas = 0.2;
    // graph2.fillToGraph = graph1; // this here we specify which graph object to fill to
    graph2.valueField = "g2";
    graph2.bullet = "square";
    graph2.hideBulletsCount = 30;
    chart.addGraph(graph2);

    var graph3 = new AmCharts.AmGraph();
    graph3.title = "下限値";
    // graph2.fillAlphas = 0.2;
    // graph2.fillToGraph = graph1; // this here we specify which graph object to fill to
    graph3.valueField = "g3";
    graph3.bullet = "square";
    graph3.hideBulletsCount = 30;
    chart.addGraph(graph3);


    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorPosition = "mouse";
    chart.addChartCursor(chartCursor);

    // SCROLLBAR
//    var chartScrollbar = new AmCharts.ChartScrollbar();
//    chart.addChartScrollbar(chartScrollbar);

    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.marginLeft = 110;
    chart.addLegend(legend);

    // WRITE
    chart.write("chartdiv");
});

