console.clear();

setTimeout(() => {
    Highcharts.setOptions({
        plotOptions: {
            series: {
                marker: {
                    enabled: true,
                    radius: 1
                }
            }
        }
    });    
});
