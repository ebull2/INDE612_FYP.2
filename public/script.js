


const input = document.querySelector('.theme-switcher input');

input.addEventListener('change', (e) => {

    if(e.target.checked) {

        document.body.setAttribute('data-theme', 'dark');
    } else {


        document.body.setAttribute('data-theme', 'light');

    }

});




    // const svg = d3.create("svg")
    //     .attr("viewBox", [0, 0, width, height])
    //     .style("overflow", "visible");
  
    // svg.append("g")
    //     .call(xAxis);
  
    // svg.append("g")
    //     .call(yAxis);
  
    // const path = svg.append("g")
    //     .attr("fill", "none")
    //     .attr("stroke", "steelblue")
    //     .attr("stroke-width", 1.5)
    //     .attr("stroke-linejoin", "round")
    //     .attr("stroke-linecap", "round")
    //   .selectAll("path")
    //   .data(data.series)
    //   .join("path")
    //     .style("mix-blend-mode", "multiply")
    //     .attr("d", d => line(d.values));
  
    // svg.call(hover, path);
  
    // return svg.node();
  

    //     const data = d3.json('/server/data.json').text();
    //     const columns = data.columns.slice(1);
    //     return {
    //       y: "Price",
    //       BTCprice: data.map(d => ({
    //         name: d.name.replace(/, ([\w-]+).*/, " $1"),
    //         values: columns.map(k => +d[k])
    //       })),
    //       prices: columns.map(d3.utcParse("%Y-%m"))
    //     };


    // var trace1 = {
    //     x: [1, 2, 3, 4],
    //     y: [10, 15, 13, 17],
    //     type: 'scatter'
    //   };




    
    
      
    //   var trace2 = {
    //     x: [1, 2, 3, 4],
    //     y: [16, 5, 11, 9],
    //     type: 'scatter'
    //   };
      
    

    
