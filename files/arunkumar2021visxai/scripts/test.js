
var url1="./data/data1.csv";
var url2="./data/data3f.csv";
var url3="./data/data4f.csv";
var url4="./data/data5f.csv";
var url5="./data/atad.csv";



var q = d3_queue.queue(1)
  .defer(d3.csv, url1)
  .defer(d3.csv, url2)
  .defer(d3.csv, url3)
  .defer(d3.csv, url4)
  .defer(d3.csv, url5)

  .awaitAll(draw);



  function draw(error, data) {
    "use strict";
    if (error) throw error;

    diag1(data[0])
    diag3(data[1])
    diag4(data[2])
    diag5(data[3])

    width=1200
    height=600


var metric=['WOOD','WBias',"WMProb"]
var menu7m=d3.select("#select7m")

diag7w(data[2],"W")

menu7m.on("change", function(d) {
    var choice=d3.select(this).property("value")
    d3.selectAll("#bee7").remove()
    d3.selectAll("#img7").remove()
    if(choice=="WOOD"){
        diag7w(data[2],"W")
    }
    else if(choice=="WBias"){
        diag7b(data[1],"B")
    }
    else if(choice=="WMProb"){
        diag7p(data[3],"P")
    }
    else{
        diag7w(data[2],"W")
    }

})

        
  
  }

  
  //DIAG 1

function diag1(data){
    width=1200
    height=600

    var margin = {top: 20, right: 20, bottom: 20, left: 20}
    var svg=d3.select("#diagram_1").append("svg").attr("width",width).attr("height",height).attr("id","bee1").style("border","solid 1px")
    svg  = svg.append("g").attr("width",width-margin.left-margin.right-50).attr("height",height-margin.top-margin.bottom-10)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    var y = function(d) { return +d.Score; };
    var yValue = function(d) { return yScale(y(d)); };
    var yScale = d3.scale.linear()
                .domain([0, 1])
                .range([height*0.9, 0])
    var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .tickValues([.25, .5, .75, 1])
                    .tickFormat(d3.format(".2f")); 
    var yy=svg.append("g").attr("transform", "translate(20, 20)").call(yAxis).style("font-size","12px")    .style("font-weight","bold")
    
    svg.append('line')
    .attr('x1',30)
    .attr('y1',height-margin.top-30)
    .attr('x2',margin.left+1400)
    .attr('y2',height-margin.top-30)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);
    
//labels
var labels = ["GLOVE-CNN","GLOVE-LSTM","ROBERTA-LARGE","BERT-LARGE","BERT-BASE"]
//Define xAxis

var x = function(d) { return d.Label; };
var xScale = d3.scale.ordinal()
             .domain(labels)
             .rangePoints([0, width-400]);
var xValue = function(d) { return xScale(x(d)) + 200; };
var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");  

var xx=svg.append("g")
                  .attr("transform", "translate(200," + (height-50)+ ")")
                  .call(xAxis)
                  .style("text-anchor", "center")
                  .style("font-weight","bold")
               
    svg.append('line')
    .attr('x1',margin.left+10)
    .attr('y1',margin.top-5)
    .attr('x2',margin.left+10)
    .attr('y2',margin.top+530)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);              

    var bubbleChart = d3.forceChart()
.size([height, width])
.x(xValue)  
.y(yValue)
.yGravity(2)    
.xGravity(1/5);

var new_data = [];

data.forEach(function(d,i){
    d.id = i;
    new_data.push({
        "Label":d.Label,"Score":+d.Score,"id":d.id,"Status":d.Status
    });
  })
console.log(new_data)


var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("opacity", ".8")
	.style("visibility", "hidden")
	.style("color","white")
	.style("background-color", "black")
    	.style("border-radius", "2px")
	.style("padding", "5px")
	.style("font-family","sans-serif")
	.style("font-size","12px")
;

  svg.append("g")
  .call(bubbleChart, new_data)
  .attr("class", "bubbles")
  .selectAll(".node")
  .append("circle")
  .attr("class",function(d){return d.Label;})
  .attr("id", function(d){return "c" + d.id;})
  .attr("r", 4)
  .attr('stroke', 'black')
  .attr('stroke-width',1)
  .attr("fill", function(d) {
   if (d.Status == "Incorrect"){ return "#fb8072";}
   else if (d.Status == "Correct"){ return "#8dd3c7";}
   return "transparent";
})

.on('mouseover', function(d){
    var val=d.Score.toFixed(4)
    tooltip.html("<center><strong>STS: "+ val+"</center>");
    return tooltip.style("visibility", "visible");
        }
)
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

}

//DIAG 3

function diag3(data){
    width=1200
    height=600

    var margin = {top: 20, right: 20, bottom: 20, left: 20}
    var svg1=d3.select("#diagram_3").append("svg").attr("width",width).attr("height",height).attr("id","bee3").style("border","solid 1px")
    svg1  = svg1.append("g").attr("width",width-margin.left-margin.right-50).attr("height",height-margin.top-margin.bottom-10)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    var y = function(d) { return +d.Score; };
    var yValue = function(d) { return yScale(y(d)); };
    var yScale = d3.scale.linear()
                .domain([0, 1])
                .range([height*0.9, 0])
    var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .tickValues([.25, .5, .75, 1])
                    .tickFormat(d3.format(".2f")); 
    var yy=svg1.append("g").attr("transform", "translate(20, 20)").call(yAxis).style("font-size","12px")    .style("font-weight","bold")
    
    svg1.append('line')
    .attr('x1',30)
    .attr('y1',height-margin.top-30)
    .attr('x2',margin.left+1400)
    .attr('y2',height-margin.top-30)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);
    
//labels
var labels = ["GLOVE-CNN","GLOVE-LSTM","ROBERTA-LARGE","BERT-LARGE","BERT-BASE"]
//Define xAxis

var x = function(d) { return d.Label; };
var xScale = d3.scale.ordinal()
             .domain(labels)
             .rangePoints([0, width-400]);
var xValue = function(d) { return xScale(x(d)) + 200; };
var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");  

var xx=svg1.append("g")
                  .attr("transform", "translate(200," + (height-50)+ ")")
                  .call(xAxis)
                  .style("text-anchor", "center")
                  .style("font-weight","bold")
               
    svg1.append('line')
    .attr('x1',margin.left+10)
    .attr('y1',margin.top-5)
    .attr('x2',margin.left+10)
    .attr('y2',margin.top+530)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);              

var new_data = [];

data.forEach(function(d,i){
    d.id = i;
    new_data.push({
        "Label":d.Label,"Score":+d.Score,"id":d.id,"Status":d.Status,"cx":+d.px,"cy":+d.py,
        "SEVEN":+d.SEVEN,"FOUR":+d.FOUR,"TWO":+d.TWO,"FIVET":+d.FIVET,"FOURT":+d.FOURT,"THREET":+d.THREET,"TWOT":+d.TWOT

    });
  })


var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("opacity", ".8")
	.style("visibility", "hidden")
	.style("color","white")
	.style("background-color", "black")
    	.style("border-radius", "2px")
	.style("padding", "5px")
	.style("font-family","sans-serif")
	.style("font-size","12px")
;


svg1.append("g")
.selectAll("dot")
.data(new_data)
.enter()
.append("circle")
.attr("class",function(d){return d.Label;})
.attr("id", function(d){return "c-3-"+d.id;})
.attr("cx",function(d){return d.cx;})
.attr("cy",function(d){return d.cy;})
.attr("r", 4)
.attr('stroke', 'black')
.attr('stroke-width',1)
.attr("fill", function(d) {
 if (d.Status == "Incorrect"){ return "#fb8072";}
 else if (d.Status == "Correct"){ return "#8dd3c7";}
 return "transparent";
})
.on('mouseover', function(d){
    var val=d.Score.toFixed(4)
    tooltip.html("<center><strong>STS: "+ val+"</center>");
    return tooltip.style("visibility", "visible");
        }
)
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

var splits3=['Select Number of Splits','7 Equal','4 Equal','2 Equal','5 Thresholded',"4 Thresholded","3 Thresholded", "2 Thresholded"]
var menu3=d3.select("#diagram_3").append("select").style("width","170px").style("height","20px").style("position","relative").style("top","-580px").style("left","-200px").attr("id","select3")

d3.select("#select3")
      .selectAll('myOptions')
     	.data(splits3)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) 
      .attr("value", function (d) { return d; })

menu3.on("change", function(d) {
    var so = d3.select(this).property("value")
    color=["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    size=function(x){if(x=="Incorrect"){return 3}else{return 5}}
    if(so=='7 Equal'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-3-"+d.id).style("fill",color[+d.SEVEN]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        var carr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.SEVEN==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.SEVEN==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.SEVEN==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.SEVEN==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else if(+d.SEVEN==5){arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
            else if(+d.SEVEN==6){arr[m][5]=arr[m][5]+1;if(d.Status=="Correct"){carr[m][5]=carr[m][5]+1}}
            else {arr[m][6]=arr[m][6]+1;if(d.Status=="Correct"){carr[m][6]=carr[m][6]+1}}

        })
        svg1.append("text").attr("x",1050).attr("y",30).text("Split 1: 0.270-0.385").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 2: 0.385-0.458").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 3: 0.458-0.483").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 4: 0.483-0.495").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",110).text("Split 5: 0.495-0.518").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",130).text("Split 6: 0.518-0.550").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",150).text("Split 7: 0.550-1.000").attr("class","threshold3").style("font","Robota")

        for (var i=0;i<7;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",90+m*200).attr("y",420+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }
    }
    else if(so=='4 Equal'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-3-"+d.id).style("fill",color[+d.FOUR]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOUR==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOUR==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOUR==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.459").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.459-0.497").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 3: 0.497-0.523").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",110).text("Split 4: 0.523-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<4;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",90+m*200).attr("y",480+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='2 Equal'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-3-"+d.id).style("fill",color[+d.TWO]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWO==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.490").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.490-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<2;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",90+m*200).attr("y",520+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='5 Thresholded'){
        data.forEach(function(d){
            svg1.selectAll(".threshold3").remove()
            d3.selectAll("#c-3-"+d.id).style("fill",color[+d.FIVET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        var carr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FIVET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FIVET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FIVET==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.FIVET==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else {arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.340").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.340-0.385").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 3: 0.385-0.340").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",110).text("Split 4: 0.270-0.585").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",130).text("Split 5: 0.585-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<5;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",90+m*200).attr("y",460+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='4 Thresholded'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-3-"+d.id).style("fill",color[+d.FOURT]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOURT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOURT==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOURT==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.405").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.405-0.505").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 3: 0.505-0.600").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",110).text("Split 4: 0.6000-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<4;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",90+m*200).attr("y",480+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='3 Thresholded'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-3-"+d.id).style("fill",color[+d.THREET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        var carr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.THREET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.THREET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else {arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
        })

        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.380").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.380-0.635").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 3: 0.635-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<3;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",90+m*200).attr("y",500+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='2 Thresholded'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-3-"+d.id).style("fill",color[+d.TWOT]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWOT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.500").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.500-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<2;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",90+m*200).attr("y",520+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }


    else {
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-3-"+d.id).style("fill",color1(d.Status)).attr("r",4)
        })
    }


})

}


//DIAG 4

function diag4(data){
    width=1200
    height=600

    var margin = {top: 20, right: 20, bottom: 20, left: 20}
    var svg1=d3.select("#diagram_4").append("svg").attr("width",width).attr("height",height).attr("id","bee4").style("border","solid 1px")
    svg1  = svg1.append("g").attr("width",width-margin.left-margin.right-50).attr("height",height-margin.top-margin.bottom-10)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    var y = function(d) { return +d.Score; };
    var yValue = function(d) { return yScale(y(d)); };
    var yScale = d3.scale.linear()
                .domain([0, 1])
                .range([height*0.9, 0])
    var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .tickValues([.25, .5, .75, 1])
                    .tickFormat(d3.format(".2f")); 
    var yy=svg1.append("g").attr("transform", "translate(20, 20)").call(yAxis).style("font-size","12px")    .style("font-weight","bold")
    
    svg1.append('line')
    .attr('x1',30)
    .attr('y1',height-margin.top-30)
    .attr('x2',margin.left+1400)
    .attr('y2',height-margin.top-30)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);
    
//labels
var labels = ["GLOVE-CNN","GLOVE-LSTM","ROBERTA-LARGE","BERT-LARGE","BERT-BASE"]
//Define xAxis

var x = function(d) { return d.Label; };
var xScale = d3.scale.ordinal()
             .domain(labels)
             .rangePoints([0, width-400]);
var xValue = function(d) { return xScale(x(d)) + 200; };
var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");  

var xx=svg1.append("g")
                  .attr("transform", "translate(200," + (height-50)+ ")")
                  .call(xAxis)
                  .style("text-anchor", "center")
                  .style("font-weight","bold")
               
    svg1.append('line')
    .attr('x1',margin.left+10)
    .attr('y1',margin.top-5)
    .attr('x2',margin.left+10)
    .attr('y2',margin.top+530)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);              

var new_data = [];

data.forEach(function(d,i){
    d.id = i;
    new_data.push({
        "Label":d.Label,"Score":+d.Score,"id":d.id,"Status":d.Status,"cx":+d.px,"cy":+d.py,
        "SEVEN":+d.SEVEN,"FOUR":+d.FOUR,"TWO":+d.TWO,"FIVET":+d.FIVET,"FOURT":+d.FOURT,"THREET":+d.THREET,"TWOT":+d.TWOT

    });
  })


var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("opacity", ".8")
	.style("visibility", "hidden")
	.style("color","white")
	.style("background-color", "black")
    	.style("border-radius", "2px")
	.style("padding", "5px")
	.style("font-family","sans-serif")
	.style("font-size","12px")
;


svg1.append("g")
.selectAll("dot")
.data(new_data)
.enter()
.append("circle")
.attr("class",function(d){return d.Label;})
.attr("id", function(d){return "c-4-"+d.id;})
.attr("cx",function(d){return d.cx;})
.attr("cy",function(d){return d.cy;})
.attr("r", 4)
.attr('stroke', 'black')
.attr('stroke-width',1)
.attr("fill", function(d) {
 if (d.Status == "Incorrect"){ return "#fb8072";}
 else if (d.Status == "Correct"){ return "#8dd3c7";}
 return "transparent";
})
.on('mouseover', function(d){
    var val=d.Score.toFixed(4)
    tooltip.html("<center><strong>STS: "+ val+"</center>");
    return tooltip.style("visibility", "visible");
        }
)
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

var splits4=['Select Number of Splits','7 Equal','4 Equal','2 Equal','5 Thresholded',"4 Thresholded","3 Thresholded", "2 Thresholded"]
var menu4=d3.select("#diagram_4").append("select").style("width","170px").style("height","20px").style("position","relative").style("top","-580px").style("left","-200px").attr("id","select4")

d3.select("#select4")
      .selectAll('myOptions')
     	.data(splits4)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) 
      .attr("value", function (d) { return d; })

menu4.on("change", function(d) {
    var so = d3.select(this).property("value")
    color=["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    size=function(x){if(x=="Incorrect"){return 3}else{return 5}}
    if(so=='7 Equal'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-4-"+d.id).style("fill",color[+d.SEVEN]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        var carr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.SEVEN==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.SEVEN==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.SEVEN==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.SEVEN==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else if(+d.SEVEN==5){arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
            else if(+d.SEVEN==6){arr[m][5]=arr[m][5]+1;if(d.Status=="Correct"){carr[m][5]=carr[m][5]+1}}
            else {arr[m][6]=arr[m][6]+1;if(d.Status=="Correct"){carr[m][6]=carr[m][6]+1}}

        })
        svg1.append("text").attr("x",1000).attr("y",30).text("Split 1: 0.270-0.385").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 2: 0.385-0.458").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 3: 0.458-0.483").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 4: 0.483-0.495").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",110).text("Split 5: 0.495-0.518").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",130).text("Split 6: 0.518-0.550").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",150).text("Split 7: 0.550-1.000").attr("class","threshold3").style("font","Robota")

        for (var i=0;i<7;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",180+m*200).attr("y",420+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }
    }
    else if(so=='4 Equal'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-4-"+d.id).style("fill",color[+d.FOUR]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOUR==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOUR==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOUR==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.459").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.459-0.497").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 3: 0.497-0.523").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",110).text("Split 4: 0.523-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<4;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",180+m*200).attr("y",480+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='2 Equal'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-4-"+d.id).style("fill",color[+d.TWO]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWO==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.490").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.490-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<2;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",180+m*200).attr("y",520+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='5 Thresholded'){
        data.forEach(function(d){
            svg1.selectAll(".threshold3").remove()
            d3.selectAll("#c-4-"+d.id).style("fill",color[+d.FIVET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        var carr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FIVET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FIVET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FIVET==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.FIVET==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else {arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.340").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.340-0.385").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 3: 0.385-0.340").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",110).text("Split 4: 0.270-0.585").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",130).text("Split 5: 0.585-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<5;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",180+m*200).attr("y",460+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='4 Thresholded'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-4-"+d.id).style("fill",color[+d.FOURT]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOURT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOURT==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOURT==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.405").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.405-0.505").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 3: 0.505-0.600").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",110).text("Split 4: 0.6000-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<4;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",180+m*200).attr("y",480+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='3 Thresholded'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-4-"+d.id).style("fill",color[+d.THREET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        var carr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.THREET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.THREET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else {arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
        })

        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.380").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.380-0.635").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 3: 0.635-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<3;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",180+m*200).attr("y",500+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='2 Thresholded'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-4-"+d.id).style("fill",color[+d.TWOT]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWOT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.500").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.500-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<2;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",180+m*200).attr("y",520+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }


    else {
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-4-"+d.id).style("fill",color1(d.Status)).attr("r",4)
        })
    }


})

}


//DIAG 5


function diag5(data){
    width=1200
    height=600

    var margin = {top: 20, right: 20, bottom: 20, left: 20}
    var svg1=d3.select("#diagram_5").append("svg").attr("width",width).attr("height",height).attr("id","bee5").style("border","solid 1px")
    svg1  = svg1.append("g").attr("width",width-margin.left-margin.right-50).attr("height",height-margin.top-margin.bottom-10)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    var y = function(d) { return +d.Score; };
    var yValue = function(d) { return yScale(y(d)); };
    var yScale = d3.scale.linear()
                .domain([0.4, 1])
                .range([height*0.9, 0])
    var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .tickValues([.4,.5, .6, .7,.8,.9,1])
                    .tickFormat(d3.format(".2f")); 
    var yy=svg1.append("g").attr("transform", "translate(20, 20)").call(yAxis).style("font-size","12px")    .style("font-weight","bold")
    
    svg1.append('line')
    .attr('x1',30)
    .attr('y1',height-margin.top-30)
    .attr('x2',margin.left+1400)
    .attr('y2',height-margin.top-30)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);
    
//labels
var labels = ["GLOVE-CNN","GLOVE-LSTM","ROBERTA-LARGE","BERT-LARGE","BERT-BASE"]
//Define xAxis

var x = function(d) { return d.Label; };
var xScale = d3.scale.ordinal()
             .domain(labels)
             .rangePoints([0, width-400]);
var xValue = function(d) { return xScale(x(d)) + 200; };
var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");  

var xx=svg1.append("g")
                  .attr("transform", "translate(200," + (height-50)+ ")")
                  .call(xAxis)
                  .style("text-anchor", "center")
                  .style("font-weight","bold")
               
    svg1.append('line')
    .attr('x1',margin.left+10)
    .attr('y1',margin.top-5)
    .attr('x2',margin.left+10)
    .attr('y2',margin.top+530)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);              

var new_data = [];

data.forEach(function(d,i){
    d.id = i;
    new_data.push({
        "Label":d.Label,"Score":+d.Score,"id":d.id,"Status":d.Status,"cx":+d.px,"cy":+d.py,
        "SEVEN":+d.SEVEN,"FOUR":+d.FOUR,"TWO":+d.TWO,"FIVET":+d.FIVET,"FOURT":+d.FOURT,"THREET":+d.THREET,"TWOT":+d.TWOT

    });
  })


var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("opacity", ".8")
	.style("visibility", "hidden")
	.style("color","white")
	.style("background-color", "black")
    	.style("border-radius", "2px")
	.style("padding", "5px")
	.style("font-family","sans-serif")
	.style("font-size","12px")
;


svg1.append("g")
.selectAll("dot")
.data(new_data)
.enter()
.append("circle")
.attr("class",function(d){return d.Label;})
.attr("id", function(d){return "c-5-"+d.id;})
.attr("cx",function(d){return d.cx+10;})
.attr("cy",function(d){return d.cy+40;})
.attr("r", 4)
.attr('stroke', 'black')
.attr('stroke-width',1)
.attr("fill", function(d) {
 if (d.Status == "Incorrect"){ return "#fb8072";}
 else if (d.Status == "Correct"){ return "#8dd3c7";}
 return "transparent";
})
.on('mouseover', function(d){
    var val=d.Score.toFixed(4)
    tooltip.html("<center>Model: "+d.Label+"<br/>Confidence: "+ val+"</center>");
    return tooltip.style("visibility", "visible");
        }
)
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

var splits5=['Select Number of Splits','7 Equal','4 Equal','2 Equal','5 Thresholded',"4 Thresholded","3 Thresholded", "2 Thresholded"]
var menu5=d3.select("#diagram_5").append("select").style("width","170px").style("height","20px").style("position","relative").style("top","-580px").style("left","-200px").attr("id","select5")

d3.select("#select5")
      .selectAll('myOptions')
     	.data(splits5)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) 
      .attr("value", function (d) { return d; })

menu5.on("change", function(d) {
    var so = d3.select(this).property("value")
    color=["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    size=function(x){if(x=="Incorrect"){return 3}else{return 5}}
    if(so=='7 Equal'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-5-"+d.id).style("fill",color[+d.SEVEN]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        var carr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.SEVEN==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.SEVEN==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.SEVEN==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.SEVEN==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else if(+d.SEVEN==5){arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
            else if(+d.SEVEN==6){arr[m][5]=arr[m][5]+1;if(d.Status=="Correct"){carr[m][5]=carr[m][5]+1}}
            else {arr[m][6]=arr[m][6]+1;if(d.Status=="Correct"){carr[m][6]=carr[m][6]+1}}

        })
        svg1.append("text").attr("x",35).attr("y",230).text("Split 1: 0.450-0.840").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",250).text("Split 2: 0.840-0.930").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 3: 0.930-0.982").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 4: 0.982-0.987").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",310).text("Split 5: 0.987-0.995").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",330).text("Split 6: 0.995-0.998").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",350).text("Split 7: 0.998-1.000").attr("class","threshold3").style("font","Robota")

        for (var i=0;i<7;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",100+m*200).attr("y",420+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }
    }
    else if(so=='4 Equal'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-5-"+d.id).style("fill",color[+d.FOUR]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOUR==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOUR==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOUR==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.982").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.982-0.987").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 3: 0.987-0.998").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",310).text("Split 4: 0.998-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<4;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",100+m*200).attr("y",480+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='2 Equal'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-5-"+d.id).style("fill",color[+d.TWO]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWO==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.987").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.987-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<2;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",100+m*200).attr("y",520+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='5 Thresholded'){
        data.forEach(function(d){
            svg1.selectAll(".threshold3").remove()
            d3.selectAll("#c-5-"+d.id).style("fill",color[+d.FIVET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        var carr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FIVET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FIVET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FIVET==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.FIVET==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else {arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.560").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.560-0.670").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 3: 0.675-0.780").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",310).text("Split 4: 0.780-0.890").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",330).text("Split 5: 0.890-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<5;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",100+m*200).attr("y",460+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='4 Thresholded'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-5-"+d.id).style("fill",color[+d.FOURT]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOURT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOURT==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOURT==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.580").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.580-0.710").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 3: 0.710-0.840").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",310).text("Split 4: 0.840-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<4;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",100+m*200).attr("y",480+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='3 Thresholded'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-5-"+d.id).style("fill",color[+d.THREET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        var carr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.THREET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.THREET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else {arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
        })

        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.630").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.630-0.810").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 3: 0.810-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<3;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",100+m*200).attr("y",500+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }
    else if(so=='2 Thresholded'){
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-5-"+d.id).style("fill",color[+d.TWOT]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWOT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.730").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.730-1.000").attr("class","threshold3").style("font","Robota")
        for (var i=0;i<2;i++){
            for(var m=0;m<5;m++){
                svg1.append("text").attr("x",100+m*200).attr("y",520+20*i).text("Split "+(i+1)+": "+carr[m][i]+"/"+arr[m][i]).attr("class","threshold3")
            }
        }


    }


    else {
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-5-"+d.id).style("fill",color1(d.Status)).attr("r",4)
        })
    }


})

}




//DIAG 7 W

function diag7w(data,met){
    width=1200
    height=600
    var margin = {top: 20, right: 20, bottom: 20, left: 20}
    var svg1=d3.select("#diagram_7").append("svg").attr("width",width).attr("height",height).attr("id","bee7").style("border","solid 1px")
    svg1  = svg1.append("g").attr("width",width-margin.left-margin.right-50).attr("height",height-margin.top-margin.bottom-10)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    imginsert("AC")

    // var svg1=d3.select("#bee7").select("g")
    var y = function(d) { return +d.Score; };
    var yValue = function(d) { return yScale(y(d)); };
    var yScale = d3.scale.linear()
                .domain([0, 1])
                .range([height*0.9, 0])
    var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .tickValues([.25, .5, .75, 1])
                    .tickFormat(d3.format(".2f")); 
    var yy=svg1.append("g").attr("transform", "translate(20, 20)").call(yAxis).style("font-size","12px")    .style("font-weight","bold")
    
    svg1.append('line')
    .attr('x1',30)
    .attr('y1',height-margin.top-30)
    .attr('x2',margin.left+1400)
    .attr('y2',height-margin.top-30)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);
    
//labels
var labels = ["GLOVE-CNN","GLOVE-LSTM","ROBERTA-LARGE","BERT-LARGE","BERT-BASE"]
//Define xAxis

var x = function(d) { return d.Label; };
var xScale = d3.scale.ordinal()
             .domain(labels)
             .rangePoints([0, width-400]);
var xValue = function(d) { return xScale(x(d)) + 200; };
var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");  

var xx=svg1.append("g")
                  .attr("transform", "translate(200," + (height-50)+ ")")
                  .call(xAxis)
                  .style("text-anchor", "center")
                  .style("font-weight","bold")
               
    svg1.append('line')
    .attr('x1',margin.left+10)
    .attr('y1',margin.top-5)
    .attr('x2',margin.left+10)
    .attr('y2',margin.top+530)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);              

var new_data = [];

data.forEach(function(d,i){
    d.id = i;
    new_data.push({
        "Label":d.Label,"Score":+d.Score,"id":d.id,"Status":d.Status,"cx":+d.px,"cy":+d.py,
        "SEVEN":+d.SEVEN,"FOUR":+d.FOUR,"TWO":+d.TWO,"FIVET":+d.FIVET,"FOURT":+d.FOURT,"THREET":+d.THREET,"TWOT":+d.TWOT

    });
  })


var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("opacity", ".8")
	.style("visibility", "hidden")
	.style("color","white")
	.style("background-color", "black")
    	.style("border-radius", "2px")
	.style("padding", "5px")
	.style("font-family","sans-serif")
	.style("font-size","12px")
;


svg1.append("g")
.selectAll("dot")
.data(new_data)
.enter()
.append("circle")
.attr("class",function(d){return d.Label;})
.attr("id", function(d){return "c-7-"+d.id;})
.attr("cx",function(d){return d.cx;})
.attr("cy",function(d){return d.cy;})
.attr("r", 4)
.attr('stroke', 'black')
.attr('stroke-width',1)
.attr("fill", function(d) {
 if (d.Status == "Incorrect"){ return "#fb8072";}
 else if (d.Status == "Correct"){ return "#8dd3c7";}
 return "transparent";
})
.on('mouseover', function(d){
    var val=d.Score.toFixed(4)
    tooltip.html("<center><strong>STS: "+ val+"</center>");
    return tooltip.style("visibility", "visible");
        }
)
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

d3.selectAll("#select7").remove()
var splits7=['Select Number of Splits','7 Equal','4 Equal','2 Equal','5 Thresholded',"4 Thresholded","3 Thresholded", "2 Thresholded"]
var menu7=d3.select("#diagram_7").append("select").style("width","170px").style("height","20px").style("position","relative").style("top","-580px").style("left","-200px").attr("id","select7")

d3.select("#select7")
      .selectAll('myOptions')
     	.data(splits7)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) 
      .attr("value", function (d) { return d; })

menu7.on("change", function(d) {
    var so = d3.select(this).property("value")
    d3.selectAll("#ranking").remove()
    color=["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    size=function(x){if(x=="Incorrect"){return 3}else{return 5}}
    var arr
    var carr

    d3.select("#sevenpic").selectAll("#img7").remove()

if(so=='7 Equal'){
    imginsert("W7")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.SEVEN]).attr("r",size(d.Status))
        })
        arr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        carr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.SEVEN==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.SEVEN==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.SEVEN==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.SEVEN==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else if(+d.SEVEN==5){arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
            else if(+d.SEVEN==6){arr[m][5]=arr[m][5]+1;if(d.Status=="Correct"){carr[m][5]=carr[m][5]+1}}
            else {arr[m][6]=arr[m][6]+1;if(d.Status=="Correct"){carr[m][6]=carr[m][6]+1}}

        })
        svg1.append("text").attr("x",1000).attr("y",30).text("Split 1: 0.270-0.385").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 2: 0.385-0.458").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 3: 0.458-0.483").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 4: 0.483-0.495").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",110).text("Split 5: 0.495-0.518").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",130).text("Split 6: 0.518-0.550").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",150).text("Split 7: 0.550-1.000").attr("class","threshold3").style("font","Robota")
    }
    else if(so=='4 Equal'){
        imginsert("W4")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.FOUR]).attr("r",size(d.Status))
        })
        arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOUR==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOUR==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOUR==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.459").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.459-0.497").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 3: 0.497-0.523").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",110).text("Split 4: 0.523-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='2 Equal'){
        imginsert("W2")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.TWO]).attr("r",size(d.Status))
        })
        arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWO==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.490").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.490-1.000").attr("class","threshold3").style("font","Robota")
    }
    else if(so=='5 Thresholded'){
        imginsert("TW5")
        data.forEach(function(d){
            svg1.selectAll(".threshold3").remove()
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.FIVET]).attr("r",size(d.Status))
        })
         arr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
         carr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FIVET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FIVET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FIVET==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.FIVET==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else {arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.340").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.340-0.385").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 3: 0.385-0.340").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",110).text("Split 4: 0.270-0.585").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",130).text("Split 5: 0.585-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='4 Thresholded'){
        imginsert("TW4")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.FOURT]).attr("r",size(d.Status))
        })
         arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
         carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOURT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOURT==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOURT==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.405").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.405-0.505").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 3: 0.505-0.600").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",110).text("Split 4: 0.6000-1.000").attr("class","threshold3").style("font","Robota")
    }
    else if(so=='3 Thresholded'){
        imginsert("TW3")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.THREET]).attr("r",size(d.Status))
        })
         arr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        carr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.THREET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.THREET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else {arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
        })

        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.380").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.380-0.635").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",90).text("Split 3: 0.635-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='2 Thresholded'){
        imginsert("TW2")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.TWOT]).attr("r",size(d.Status))
        })
         arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
         carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWOT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",1000).attr("y",50).text("Split 1: 0.270-0.500").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1000).attr("y",70).text("Split 2: 0.500-1.000").attr("class","threshold3").style("font","Robota")
    }


    else {
        svg1.selectAll(".threshold3").remove()
        imginsert("AC")
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color1(d.Status)).attr("r",4)
        })
    }


})

}


// DIAG 7 B

function diag7b(data,met){
    width=1200
    height=600

    var margin = {top: 20, right: 20, bottom: 20, left: 20}
    var svg1=d3.select("#diagram_7").append("svg").attr("width",width).attr("height",height).attr("id","bee7").style("border","solid 1px")
    svg1  = svg1.append("g").attr("width",width-margin.left-margin.right-50).attr("height",height-margin.top-margin.bottom-10)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
    imginsert("AC")

    var y = function(d) { return +d.Score; };
    var yValue = function(d) { return yScale(y(d)); };
    var yScale = d3.scale.linear()
                .domain([0, 1])
                .range([height*0.9, 0])
    var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .tickValues([.25, .5, .75, 1])
                    .tickFormat(d3.format(".2f")); 
    var yy=svg1.append("g").attr("transform", "translate(20, 20)").call(yAxis).style("font-size","12px")    .style("font-weight","bold")
    
    svg1.append('line')
    .attr('x1',30)
    .attr('y1',height-margin.top-30)
    .attr('x2',margin.left+1400)
    .attr('y2',height-margin.top-30)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);
    
//labels
var labels = ["GLOVE-CNN","GLOVE-LSTM","ROBERTA-LARGE","BERT-LARGE","BERT-BASE"]
//Define xAxis

var x = function(d) { return d.Label; };
var xScale = d3.scale.ordinal()
             .domain(labels)
             .rangePoints([0, width-400]);
var xValue = function(d) { return xScale(x(d)) + 200; };
var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");  

var xx=svg1.append("g")
                  .attr("transform", "translate(200," + (height-50)+ ")")
                  .call(xAxis)
                  .style("text-anchor", "center")
                  .style("font-weight","bold")
               
    svg1.append('line')
    .attr('x1',margin.left+10)
    .attr('y1',margin.top-5)
    .attr('x2',margin.left+10)
    .attr('y2',margin.top+530)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);              

var new_data = [];

data.forEach(function(d,i){
    d.id = i;
    new_data.push({
        "Label":d.Label,"Score":+d.Score,"id":d.id,"Status":d.Status,"cx":+d.px,"cy":+d.py,
        "SEVEN":+d.SEVEN,"FOUR":+d.FOUR,"TWO":+d.TWO,"FIVET":+d.FIVET,"FOURT":+d.FOURT,"THREET":+d.THREET,"TWOT":+d.TWOT

    });
  })


var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("opacity", ".8")
	.style("visibility", "hidden")
	.style("color","white")
	.style("background-color", "black")
    	.style("border-radius", "2px")
	.style("padding", "5px")
	.style("font-family","sans-serif")
	.style("font-size","12px")
;


svg1.append("g")
.selectAll("dot")
.data(new_data)
.enter()
.append("circle")
.attr("class",function(d){return d.Label;})
.attr("id", function(d){return "c-7-"+d.id;})
.attr("cx",function(d){return d.cx;})
.attr("cy",function(d){return d.cy;})
.attr("r", 4)
.attr('stroke', 'black')
.attr('stroke-width',1)
.attr("fill", function(d) {
 if (d.Status == "Incorrect"){ return "#fb8072";}
 else if (d.Status == "Correct"){ return "#8dd3c7";}
 return "transparent";
})
.on('mouseover', function(d){
    var val=d.Score.toFixed(4)
    tooltip.html("<center><strong>STS: "+ val+"</center>");
    return tooltip.style("visibility", "visible");
        }
)
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

d3.select("#select7").remove()
var splits7=['Select Number of Splits','7 Equal','4 Equal','2 Equal','5 Thresholded',"4 Thresholded","3 Thresholded", "2 Thresholded"]
var menu7=d3.select("#diagram_7").append("select").style("width","170px").style("height","20px").style("position","relative").style("top","-580px").style("left","-200px").attr("id","select7")

d3.select("#select7")
      .selectAll('myOptions')
     	.data(splits7)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) 
      .attr("value", function (d) { return d; })

menu7.on("change", function(d) {
    var so = d3.select(this).property("value")
    color=["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    size=function(x){if(x=="Incorrect"){return 3}else{return 5}}
    if(so=='7 Equal'){
        imginsert("B7")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.SEVEN]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        var carr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.SEVEN==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.SEVEN==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.SEVEN==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.SEVEN==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else if(+d.SEVEN==5){arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
            else if(+d.SEVEN==6){arr[m][5]=arr[m][5]+1;if(d.Status=="Correct"){carr[m][5]=carr[m][5]+1}}
            else {arr[m][6]=arr[m][6]+1;if(d.Status=="Correct"){carr[m][6]=carr[m][6]+1}}

        })
        svg1.append("text").attr("x",1050).attr("y",30).text("Split 1: 0.270-0.385").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 2: 0.385-0.458").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 3: 0.458-0.483").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 4: 0.483-0.495").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",110).text("Split 5: 0.495-0.518").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",130).text("Split 6: 0.518-0.550").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",150).text("Split 7: 0.550-1.000").attr("class","threshold3").style("font","Robota")
    }
    else if(so=='4 Equal'){
        imginsert("B4")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.FOUR]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOUR==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOUR==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOUR==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.459").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.459-0.497").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 3: 0.497-0.523").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",110).text("Split 4: 0.523-1.000").attr("class","threshold3").style("font","Robota")
    }
    else if(so=='2 Equal'){
        imginsert("B2")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.TWO]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWO==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.490").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.490-1.000").attr("class","threshold3").style("font","Robota")
    }
    else if(so=='5 Thresholded'){
        imginsert("TB5")
        data.forEach(function(d){
            svg1.selectAll(".threshold3").remove()
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.FIVET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        var carr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FIVET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FIVET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FIVET==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.FIVET==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else {arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.340").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.340-0.385").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 3: 0.385-0.340").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",110).text("Split 4: 0.270-0.585").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",130).text("Split 5: 0.585-1.000").attr("class","threshold3").style("font","Robota")
    }
    else if(so=='4 Thresholded'){
        imginsert("TB4")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.FOURT]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOURT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOURT==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOURT==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.405").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.405-0.505").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 3: 0.505-0.600").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",110).text("Split 4: 0.6000-1.000").attr("class","threshold3").style("font","Robota")
    }
    else if(so=='3 Thresholded'){
        imginsert("TB3")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.THREET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        var carr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.THREET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.THREET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else {arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
        })

        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.380").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.380-0.635").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",90).text("Split 3: 0.635-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='2 Thresholded'){
        imginsert("TB2")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.TWOT]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWOT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",1050).attr("y",50).text("Split 1: 0.270-0.500").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",1050).attr("y",70).text("Split 2: 0.500-1.000").attr("class","threshold3").style("font","Robota")

    }


    else {
        svg1.selectAll(".threshold3").remove()
        imginsert("AC")
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color1(d.Status)).attr("r",4)
        })
    }


})

}

//DIAG 7 P

function diag7p(data,met){
    width=1200
    height=600
    var margin = {top: 20, right: 20, bottom: 20, left: 20}
    var svg1=d3.select("#diagram_7").append("svg").attr("width",width).attr("height",height).attr("id","bee7").style("border","solid 1px")
    svg1  = svg1.append("g").attr("width",width-margin.left-margin.right-50).attr("height",height-margin.top-margin.bottom-10)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    imginsert("AC")

    var y = function(d) { return +d.Score; };
    var yValue = function(d) { return yScale(y(d)); };
    var yScale = d3.scale.linear()
                .domain([0.4, 1])
                .range([height*0.9, 0])
    var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .tickValues([.4,.5, .6, .7,.8,.9,1])
                    .tickFormat(d3.format(".2f")); 
    var yy=svg1.append("g").attr("transform", "translate(20, 20)").call(yAxis).style("font-size","12px")    .style("font-weight","bold")
    
    svg1.append('line')
    .attr('x1',30)
    .attr('y1',height-margin.top-30)
    .attr('x2',margin.left+1400)
    .attr('y2',height-margin.top-30)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);
    
//labels
var labels = ["GLOVE-CNN","GLOVE-LSTM","ROBERTA-LARGE","BERT-LARGE","BERT-BASE"]
//Define xAxis

var x = function(d) { return d.Label; };
var xScale = d3.scale.ordinal()
             .domain(labels)
             .rangePoints([0, width-400]);
var xValue = function(d) { return xScale(x(d)) + 200; };
var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");  

var xx=svg1.append("g")
                  .attr("transform", "translate(200," + (height-50)+ ")")
                  .call(xAxis)
                  .style("text-anchor", "center")
                  .style("font-weight","bold")
               
    svg1.append('line')
    .attr('x1',margin.left+10)
    .attr('y1',margin.top-5)
    .attr('x2',margin.left+10)
    .attr('y2',margin.top+530)
    .attr('fill','none')
    .style('stroke','black')
    .style('stroke-width',1);              

var new_data = [];

data.forEach(function(d,i){
    d.id = i;
    new_data.push({
        "Label":d.Label,"Score":+d.Score,"id":d.id,"Status":d.Status,"cx":+d.px,"cy":+d.py,
        "SEVEN":+d.SEVEN,"FOUR":+d.FOUR,"TWO":+d.TWO,"FIVET":+d.FIVET,"FOURT":+d.FOURT,"THREET":+d.THREET,"TWOT":+d.TWOT

    });
  })


var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("opacity", ".8")
	.style("visibility", "hidden")
	.style("color","white")
	.style("background-color", "black")
    	.style("border-radius", "2px")
	.style("padding", "5px")
	.style("font-family","sans-serif")
	.style("font-size","12px")
;


svg1.append("g")
.selectAll("dot")
.data(new_data)
.enter()
.append("circle")
.attr("class",function(d){return d.Label;})
.attr("id", function(d){return "c-7-"+d.id;})
.attr("cx",function(d){return d.cx+10;})
.attr("cy",function(d){return d.cy+40;})
.attr("r", 4)
.attr('stroke', 'black')
.attr('stroke-width',1)
.attr("fill", function(d) {
 if (d.Status == "Incorrect"){ return "#fb8072";}
 else if (d.Status == "Correct"){ return "#8dd3c7";}
 return "transparent";
})
.on('mouseover', function(d){
    var val=d.Score.toFixed(4)
    tooltip.html("<center>Model: "+d.Label+"<br/>Confidence: "+ val+"</center>");
    return tooltip.style("visibility", "visible");
        }
)
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

d3.select("#select7").remove()
var splits7=['Select Number of Splits','7 Equal','4 Equal','2 Equal','5 Thresholded',"4 Thresholded","3 Thresholded", "2 Thresholded"]
var menu7=d3.select("#diagram_7").append("select").style("width","170px").style("height","20px").style("position","relative").style("top","-580px").style("left","-200px").attr("id","select7")

d3.select("#select7")
      .selectAll('myOptions')
     	.data(splits7)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) 
      .attr("value", function (d) { return d; })

menu7.on("change", function(d) {
    var so = d3.select(this).property("value")
    color=["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    color1=function(x){if(x=="Incorrect"){return "#fb8072"}else{return"#8dd3c7"}}
    size=function(x){if(x=="Incorrect"){return 3}else{return 5}}
    if(so=='7 Equal'){
        imginsert("P7")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.SEVEN]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        var carr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.SEVEN==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.SEVEN==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.SEVEN==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.SEVEN==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else if(+d.SEVEN==5){arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
            else if(+d.SEVEN==6){arr[m][5]=arr[m][5]+1;if(d.Status=="Correct"){carr[m][5]=carr[m][5]+1}}
            else {arr[m][6]=arr[m][6]+1;if(d.Status=="Correct"){carr[m][6]=carr[m][6]+1}}

        })
        svg1.append("text").attr("x",35).attr("y",230).text("Split 1: 0.450-0.840").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",250).text("Split 2: 0.840-0.930").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 3: 0.930-0.982").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 4: 0.982-0.987").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",310).text("Split 5: 0.987-0.995").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",330).text("Split 6: 0.995-0.998").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",350).text("Split 7: 0.998-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='4 Equal'){
        imginsert("P4")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.FOUR]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOUR==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOUR==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOUR==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.982").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.982-0.987").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 3: 0.987-0.998").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",310).text("Split 4: 0.998-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='2 Equal'){
        imginsert("P2")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.TWO]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWO==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.987").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.987-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='5 Thresholded'){
        imginsert("TP5")
        data.forEach(function(d){
            svg1.selectAll(".threshold3").remove()
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.FIVET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        var carr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FIVET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FIVET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FIVET==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else if(+d.FIVET==4){arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
            else {arr[m][4]=arr[m][4]+1;if(d.Status=="Correct"){carr[m][4]=carr[m][4]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.560").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.560-0.670").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 3: 0.675-0.780").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",310).text("Split 4: 0.780-0.890").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",330).text("Split 5: 0.890-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='4 Thresholded'){
        imginsert("TP4")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.FOURT]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        var carr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.FOURT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.FOURT==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else if(+d.FOURT==3){arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
            else {arr[m][3]=arr[m][3]+1;if(d.Status=="Correct"){carr[m][3]=carr[m][3]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.580").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.580-0.710").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 3: 0.710-0.840").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",310).text("Split 4: 0.840-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='3 Thresholded'){
        imginsert("TP3")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.THREET]).attr("r",size(d.Status))
        })
        var arr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        var carr=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.THREET==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else if(+d.THREET==2){arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
            else {arr[m][2]=arr[m][2]+1;if(d.Status=="Correct"){carr[m][2]=carr[m][2]+1}}
        })

        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.630").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.630-0.810").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",290).text("Split 3: 0.810-1.000").attr("class","threshold3").style("font","Robota")

    }
    else if(so=='2 Thresholded'){
        imginsert("TP2")
        svg1.selectAll(".threshold3").remove()
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color[+d.TWOT]).attr("r",size(d.Status))
        })
        var arr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        var carr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        data.forEach(function(d){
            var m=0
            if(d.Label=="GLOVE-CNN"){m=0}
            else if(d.Label=="GLOVE-LSTM"){m=1}
            else if(d.Label=="BERT-BASE"){m=4}
            else if(d.Label=="BERT-LARGE"){m=3}
            else {m=2}
            if(+d.TWOT==1){arr[m][0]=arr[m][0]+1;if(d.Status=="Correct"){carr[m][0]=carr[m][0]+1}}
            else{arr[m][1]=arr[m][1]+1;if(d.Status=="Correct"){carr[m][1]=carr[m][1]+1}}
        })
        svg1.append("text").attr("x",35).attr("y",250).text("Split 1: 0.450-0.730").attr("class","threshold3").style("font","Robota")
        svg1.append("text").attr("x",35).attr("y",270).text("Split 2: 0.730-1.000").attr("class","threshold3").style("font","Robota")


    }


    else {
        svg1.selectAll(".threshold3").remove()
        imginsert("AC")
        data.forEach(function(d){
            d3.selectAll("#c-7-"+d.id).style("fill",color1(d.Status)).attr("r",4)
        })
    }


})

}

function imginsert(fn){
    d3.select("#sevenpic").selectAll("svg").remove()
    var sel = d3.select("#select7m").property("value")
    if(sel=="WMProb")
    {
        d3.select("#lastdiv").style("position","relative").style("top","0px")
        var svg=d3.select("#sevenpic").append("svg").attr("width",900).attr("height",400).attr("id","img7").style("border","solid 1px")
        path="./img/Rank/"+fn+".png"
        svg.append("image").attr("xlink:href",path).attr("width",900).attr("height",400)
        var svg=d3.select("#sevenpic").append("svg").attr("width",300).attr("height",400).attr("id","img7").style("border","solid 1px").style("position","relative").style("left","15")
        path="./img/Rank/"+fn+".png"    
        svg.append("image").attr("xlink:href",'./img/WMPROB.png').attr("width",300).attr("height",400)}
    else if(sel=="WBias")
    {
        d3.select("#lastdiv").style("position","relative").style("top","0px")
        var svg=d3.select("#sevenpic").append("svg").attr("width",900).attr("height",400).attr("id","img7").style("border","solid 1px")
        path="./img/Rank/"+fn+".png"
        svg.append("image").attr("xlink:href",path).attr("width",900).attr("height",400)
        var svg=d3.select("#sevenpic").append("svg").attr("width",300).attr("height",400).attr("id","img7").style("border","solid 1px").style("position","relative").style("left","15")
        path="./img/Rank/"+fn+".png"    
        svg.append("image").attr("xlink:href",'./img/WBIAS.png').attr("width",300).attr("height",400)}
    else if(sel=="WOOD")
    {
        d3.select("#lastdiv").style("position","relative").style("top","0px")
        var svg=d3.select("#sevenpic").append("svg").attr("width",900).attr("height",400).attr("id","img7").style("border","solid 1px")
        path="./img/Rank/"+fn+".png"
        svg.append("image").attr("xlink:href",path).attr("width",900).attr("height",400)
        var svg=d3.select("#sevenpic").append("svg").attr("width",300).attr("height",400).attr("id","img7").style("border","solid 1px").style("position","relative").style("left","15")
        path="./img/Rank/"+fn+".png"    
        svg.append("image").attr("xlink:href",'./img/WOOD.png').attr("width",300).attr("height",400)}
    else{
        d3.select("#lastdiv").style("position","relative").style("top","100px")
        var svg=d3.select("#sevenpic").append("svg").attr("width",1200).attr("height",600).attr("id","img7").style("border","solid 1px")
        path="./img/Rank/"+fn+".png"
        svg.append("image").attr("xlink:href",path).attr("width",1200).attr("height",600)
    }

}