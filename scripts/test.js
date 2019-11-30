var base=d3.select("body").append("div").style("text-align","left");
var title=base.append("svg").attr("width",1280).attr("height",100);
title.append("line").attr("x1",0).attr("x2",1280).attr("y1",5).attr("y2",5).attr("stroke-width",4).attr("stroke","#0d98ba");
title.append("text").attr("y",80).attr("x",225).attr("font-weight","normal").attr("font-size","60px").attr("font-family",'Century Gothic').style("fill","#0d98ba").text("INTERACTIVE VISUAL RESUME").attr("line-height","23px");
title.append("line").attr("x1",0).attr("x2",1280).attr("y1",95).attr("y2",95).attr("stroke-width",4).attr("stroke","#0d98ba");
title.append("line").attr("x1",5).attr("x2",5).attr("y1",5).attr("y2",95).attr("stroke-width",4).attr("stroke","#0d98ba");
title.append("line").attr("x1",1275).attr("x2",1275).attr("y1",5).attr("y2",95).attr("stroke-width",4).attr("stroke","#0d98ba");
var prof=base.append("svg").attr("width",280).attr("height",855).attr("transform", "translate(0," + 0 + ")");
var basic=base.append("svg").attr("width",1000).attr("height",855).attr("transform", "translate(0," + 0 + ")");
basic.append("line").attr("x1",995).attr("x2",995).attr("y1",-10).attr("y2",850).attr("stroke-width",4).attr("stroke","#6a7758");
prof.append("line").attr("x1",5).attr("x2",5).attr("y1",-10).attr("y2",850).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("text").attr("y",100).attr("font-weight","normal").attr("font-size","48px").attr("font-family",'Century Gothic').style("fill","#7d9993").text("ANJANA ARUNKUMAR").attr("line-height","23px");
basic.append("text").attr("y",130).attr("font-weight","normal").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","#898989").text("Bachelor of Engineering | Anna University | 2019").attr("line-height","23px");
basic.append("line").attr("x1",0).attr("x2",650).attr("y1",145).attr("y2",145).attr("stroke-width",2).attr("stroke","#0d98ba");
basic.append("text").attr("y",190).attr("font-weight","normal").attr("font-size","21px").attr("font-family",'Century Gothic').style("fill","#7d9993").text("EXPERIENCE").attr("line-height","31px");
basic.append("text").attr("y",235).attr("font-weight","normal").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","#666666").text("BUSINESS INTELLIGENCE INTERN | DENTSU AEGIS NETWORK | JUNE 2018 -  APRIL 2019").attr("line-height","23px");
basic.append("line").attr("x1",0).attr("x2",650).attr("y1",250).attr("y2",250).attr("stroke-width",2).attr("stroke","#0d98ba");
basic.append("text").attr("y",265).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","#6783a0").text("Hover for Details").attr("line-height","16px");
basic.append("text").attr("x",780).attr("y",60).attr("font-weight","normal").attr("font-size","19px").attr("font-family",'Century Gothic').style("fill","#7d9993").text("POSITIONS").attr("line-height","27px");
basic.append("text").attr("x",860).attr("y",90).attr("font-weight","normal").attr("font-size","19px").attr("font-family",'Century Gothic').style("fill","#7d9993").text("PAPERS").attr("line-height","27px");
basic.append("text").attr("x",780).attr("y",120).attr("font-weight","normal").attr("font-size","19px").attr("font-family",'Century Gothic').style("fill","#7d9993").text("PROJECTS").attr("line-height","27px");
basic.append("text").attr("x",720).attr("y",145).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","#6783a0").text("Hover for Details").attr("line-height","16px");
basic.append("a").attr("xlink:href","mailto:aarunku5@asu.edu?subject=<enter subject>&body=<enter text>").append("svg:image").attr("xlink:href","https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png").attr("x",570).attr("y",70).attr("width",30).attr("height",30);
basic.append("a").attr("xlink:href","https://in.linkedin.com/in/anjana-arunkumar-55820a179").append("svg:image").attr("xlink:href","http://assets.stickpng.com/thumbs/58e91afdeb97430e81906504.png").attr("x",530).attr("y",70).attr("width",30).attr("height",30);
basic.append("a").attr("xlink:href","https://public.tableau.com/profile/anjana4850#!/").append("svg:image").attr("xlink:href","https://user-images.githubusercontent.com/32903323/43256817-e40da78a-90c5-11e8-9c84-9471549a1259.png").attr("x",610).attr("y",70).attr("width",30).attr("height",30);
var radialLineGenerator = d3.radialLine();
var points = [[0, 60],[Math.PI * 0.33, 60],[Math.PI * 0.66, 60],[Math.PI, 60],[Math.PI * 1.33, 60],[Math.PI * 1.66, 60],[Math.PI * 2, 60]];
var radialLine = radialLineGenerator(points);
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(760," + 250 + ")").attr("id","x1");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(890," + 340 + ")").attr("id","x2");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(760," + 430 + ")").attr("id","x3");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(890," + 520 + ")").attr("id","x4");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(760," + 610 + ")").attr("id","x5");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(890," + 700 + ")").attr("id","x6");
var radialLineGenerator = d3.radialLine();
var points = [[0, 48],[Math.PI * 0.33, 48],[Math.PI * 0.66, 48],[Math.PI, 48],[Math.PI * 1.33, 48],[Math.PI * 1.66, 48],[Math.PI * 2, 48]];
var radialLine = radialLineGenerator(points);
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(760," + 250 + ")").attr("id","x1");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(890," + 340 + ")").attr("id","x2");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(760," + 430 + ")").attr("id","x3");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(890," + 520 + ")").attr("id","x4");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(760," + 610 + ")").attr("id","x5");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(890," + 700 + ")").attr("id","x6");
var radialLineGenerator = d3.radialLine();
var points = [[0, 44.4],[Math.PI * 0.33, 44.4],[Math.PI * 0.66, 44.4],[Math.PI, 44.4],[Math.PI * 1.33, 44.4],[Math.PI * 1.66, 44.4],[Math.PI * 2, 44.4]];
var radialLine = radialLineGenerator(points);
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(760," + 250 + ")").attr("id","x1");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(890," + 340 + ")").attr("id","x2");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(760," + 430 + ")").attr("id","x3");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(890," + 520 + ")").attr("id","x4");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(760," + 610 + ")").attr("id","x5");
basic.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(890," + 700 + ")").attr("id","x6");
var radialLineGenerator = d3.radialLine();
var points = [[0, 42],[Math.PI * 0.33, 42],[Math.PI * 0.66, 42],[Math.PI, 42],[Math.PI * 1.33, 42],[Math.PI * 1.66, 42],[Math.PI * 2, 42]];
var radialLine = radialLineGenerator(points);
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(760," + 250 + ")").attr("id","x1");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(890," + 340 + ")").attr("id","x2");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(760," + 430 + ")").attr("id","x3");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(890," + 520 + ")").attr("id","x4");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(760," + 610 + ")").attr("id","x5");
basic.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(890," + 700 + ")").attr("id","x6");
basic.append("line").attr("x1",150).attr("x2",150).attr("y1",250).attr("y2",375).attr("stroke-width",5).attr("stroke","#0d98ba");
basic.append("line").attr("x1",300).attr("x2",300).attr("y1",250).attr("y2",325).attr("stroke-width",5).attr("stroke","#0d98ba");
basic.append("line").attr("x1",450).attr("x2",450).attr("y1",250).attr("y2",375).attr("stroke-width",5).attr("stroke","#0d98ba");
basic.append("line").attr("x1",600).attr("x2",600).attr("y1",250).attr("y2",325).attr("stroke-width",5).attr("stroke","#0d98ba");
basic.append("circle").attr("cx",150).attr("cy",435).attr("r",60).attr("fill","#0d98ba").attr("id","c1");
basic.append("circle").attr("cx",300).attr("cy",385).attr("r",60).attr("fill","#0d98ba").attr("id","c2");
basic.append("circle").attr("cx",450).attr("cy",435).attr("r",60).attr("fill","#0d98ba").attr("id","c3");
basic.append("circle").attr("cx",600).attr("cy",385).attr("r",60).attr("fill","#0d98ba").attr("id","c4");
basic.append("circle").attr("cx",150).attr("cy",435).attr("r",50).attr("fill","#add8e6").attr("id","c1");
basic.append("circle").attr("cx",300).attr("cy",385).attr("r",50).attr("fill","#add8e6").attr("id","c2");
basic.append("circle").attr("cx",450).attr("cy",435).attr("r",50).attr("fill","#add8e6").attr("id","c3");
basic.append("circle").attr("cx",600).attr("cy",385).attr("r",50).attr("fill","#add8e6").attr("id","c4");
basic.append("line").attr("x1",100).attr("x2",200).attr("y1",750).attr("y2",750).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("line").attr("x1",200).attr("x2",300).attr("y1",625).attr("y2",625).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("line").attr("x1",300).attr("x2",400).attr("y1",690).attr("y2",690).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("line").attr("x1",400).attr("x2",500).attr("y1",658).attr("y2",658).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("line").attr("x1",500).attr("x2",600).attr("y1",750).attr("y2",750).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("line").attr("x1",200).attr("x2",200).attr("y1",750).attr("y2",625).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("line").attr("x1",300).attr("x2",300).attr("y1",625).attr("y2",690).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("line").attr("x1",400).attr("x2",400).attr("y1",690).attr("y2",658).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("line").attr("x1",500).attr("x2",500).attr("y1",658).attr("y2",750).attr("stroke-width",4).attr("stroke","#6a7758");
basic.append("line").attr("x1",20).attr("x2",650).attr("y1",800).attr("y2",800).attr("stroke-width",2).attr("stroke","#0d98ba");
basic.append("line").attr("x1",20).attr("x2",20).attr("y1",600).attr("y2",800).attr("stroke-width",2).attr("stroke","#0d98ba");
basic.append("rect").attr("x",125).attr("y",710).attr("width",50).attr("height",30).style("fill","#0d98ba").attr("id","h1");
basic.append("rect").attr("x",225).attr("y",635).attr("width",50).attr("height",30).style("fill","#0d98ba").attr("id","h2");
basic.append("rect").attr("x",325).attr("y",650).attr("width",50).attr("height",30).style("fill","#0d98ba").attr("id","h3");
basic.append("rect").attr("x",425).attr("y",670).attr("width",50).attr("height",30).style("fill","#0d98ba").attr("id","h4");
basic.append("rect").attr("x",525).attr("y",710).attr("width",50).attr("height",30).style("fill","#0d98ba").attr("id","h5");
basic.append("text").attr("x",535).attr("y",780).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","#6783a0").text("Hover over the Boxes").attr("line-height","16px");
basic.append("text").attr("y",50).attr("x",-790).attr("font-weight","normal").attr("font-size","18px").attr("font-family",'Century Gothic').style("fill","#6783a0").text("Fun Facts | Hobbies").attr("line-height","26px").attr("transform", "rotate(270)");
var radialLineGenerator = d3.radialLine();
var points = [[0, 120],[Math.PI * 0.33, 120],[Math.PI * 0.66, 120],[Math.PI, 120],[Math.PI * 1.33, 120],[Math.PI * 1.66, 120],[Math.PI * 2, 120]];
var radialLine = radialLineGenerator(points);
prof.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(130," + 150 + ")").attr("id","prof");
var radialLineGenerator = d3.radialLine();
var points = [[0, 108],[Math.PI * 0.33, 108],[Math.PI * 0.66, 108],[Math.PI, 108],[Math.PI * 1.33, 108],[Math.PI * 1.66, 108],[Math.PI * 2, 108]];
var radialLine = radialLineGenerator(points);
prof.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(130," + 150 + ")").attr("id","prof");
var radialLineGenerator = d3.radialLine();
var points = [[0, 102],[Math.PI * 0.33, 102],[Math.PI * 0.66, 102],[Math.PI, 102],[Math.PI * 1.33, 102],[Math.PI * 1.66, 102],[Math.PI * 2, 102]];
var radialLine = radialLineGenerator(points);
prof.append('path').style("fill","#6a7758").attr('d', radialLine).attr("transform", "translate(130," + 150 + ")").attr("id","prof");
var radialLineGenerator = d3.radialLine();
var points = [[0, 99],[Math.PI * 0.33, 99],[Math.PI * 0.66, 99],[Math.PI, 99],[Math.PI * 1.33, 99],[Math.PI * 1.66, 99],[Math.PI * 2, 99]];
var radialLine = radialLineGenerator(points);
prof.append('path').style("fill","#ccd7c7").attr('d', radialLine).attr("transform", "translate(130," + 150 + ")").attr("id","prof");
prof.append("line").attr("x1",130).attr("x2",130).attr("y1",260).attr("y2",600).attr("stroke-width",5).attr("stroke","#6a7758");
prof.append("circle").attr("cx",130).attr("cy",350).attr("r",15).attr("fill","#0d98ba").attr("id","cs");
prof.append("circle").attr("cx",130).attr("cy",450).attr("r",10).attr("fill","#0d98ba").attr("id","b");
prof.append("circle").attr("cx",130).attr("cy",550).attr("r",10).attr("fill","#0d98ba").attr("id","stat");
prof.append("rect").attr("x",30).attr("y",600).attr("width",210).attr("height",200).style("fill","#6a7758").attr("rx",10).attr("ry",10);
prof.append("rect").attr("x",40).attr("y",610).attr("width",190).attr("height",180).style("fill","#ccd7c7").attr("rx",10).attr("ry",10);
prof.append("rect").attr("x",45).attr("y",615).attr("width",180).attr("height",170).style("fill","#6a7758").attr("rx",10).attr("ry",10);
prof.append("rect").attr("x",50).attr("y",620).attr("width",170).attr("height",160).style("fill","#ccd7c7").attr("rx",10).attr("ry",10);
prof.append("text").attr("x",90).attr("y",830).attr("font-weight","normal").attr("font-size","21px").attr("font-family",'Century Gothic').style("fill","#7d9993").text("HOVER").attr("line-height","31px");
basic.append("line").attr("x1",810).attr("x2",845).attr("y1",280).attr("y2",315).attr("stroke-width",5).attr("stroke","#6a7758");
basic.append("line").attr("x1",810).attr("x2",845).attr("y1",455).attr("y2",495).attr("stroke-width",5).attr("stroke","#6a7758");
basic.append("line").attr("x1",810).attr("x2",845).attr("y1",635).attr("y2",675).attr("stroke-width",5).attr("stroke","#6a7758");
basic.append("line").attr("x1",810).attr("x2",845).attr("y1",400).attr("y2",360).attr("stroke-width",5).attr("stroke","#6a7758");
basic.append("line").attr("x1",810).attr("x2",845).attr("y1",580).attr("y2",540).attr("stroke-width",5).attr("stroke","#6a7758");
basic.append("text").attr("x",115).attr("y",440).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("Development").attr("line-height","16px").attr("id","c1");
basic.append("text").attr("x",260).attr("y",390).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("Tableau Server").attr("line-height","16px").attr("id","c2");
basic.append("text").attr("x",410).attr("y",440).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("Python / R Tool").attr("line-height","16px").attr("id","c3");
basic.append("text").attr("x",560).attr("y",390).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("Client Delivery").attr("line-height","16px").attr("id","c4");
prof.append("text").attr("x",40).attr("y",340).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","#6a7758").text("MAJOR").attr("line-height","16px");
prof.append("text").attr("x",40).attr("y",440).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","#6a7758").text("MINOR").attr("line-height","16px");
prof.append("text").attr("x",40).attr("y",540).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","#6a7758").text("MINOR").attr("line-height","16px");
prof.append("text").attr("x",40).attr("y",355).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("Computer").attr("line-height","11px");
prof.append("text").attr("x",45).attr("y",366).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("Science").attr("line-height","11px");
prof.append("text").attr("x",45).attr("y",455).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("Business").attr("line-height","11px");
prof.append("text").attr("x",45).attr("y",555).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("Statistics").attr("line-height","11px");
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
	.attr("width",200);
d3.selectAll("#c1").on('mouseover', 
function(d){
tooltip.html("<p><strong>Analysis of chain stores for profit analysis and factors:</strong><br><br>Use of Tableau and R Tool to build models and charts representing-</br><br>- The nature of sales and profit margins</br><br>- Isolate non-profitable products region-wise in the continental USA</br><br>- Make recommendations regarding marketing strategies for these products based on the analysis</br></p>");
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
d3.selectAll("#c2").on('mouseover', 
function(d){
tooltip.html("<p><strong>Survey design and ad campaign structuring deployed interface:</strong><br><br>-Survey launched in Google Data Studio</br><br>-Results visualized in Tableau</br></p>");
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
d3.selectAll("#c3").on('mouseover', 
function(d){
tooltip.html("<p><strong>Use of R tool/Python to perform sentiment analysis:</strong><br><br>- Performing granular sentiment detection, using a recurrent neural network approach</br><br>over a dataset of online reviews for Slack, an American</br><br>cloud-based set of proprietary team collaboration tools and services.</br></p>");
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
d3.selectAll("#c4").on('mouseover', 
function(d){
tooltip.html("<p><strong>Building a client interface:</strong><br><br>- Attaching sentiment scores to opinion units, keywords and performance indicators</br><br>- Generating interactive visualizations such as treemaps, bar charts, and pie charts</br><br>- Generating Abstractive Summary</br></p>");
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
var myimage = prof.append('image')
    .attr('xlink:href', 'data:image/jpeg;base64,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')
    .attr('width', 120)
    .attr('height', 120).attr('x',70).attr('y',90).attr("id","prof");
d3.selectAll("#prof").on('mouseover', 
function(d){
tooltip.html('<center><p style="color:rgb(125,153,147)";><strong>FAVORITES</strong></p><p><strong>Movie:</strong>Lion King<br><strong>Author:</strong>L.M.Montgomery<br><strong>Sport:</strong>Swimming<br><strong>Band:</strong>Guns & Roses<br><strong>Subject:</strong>Data Science & Psychology</p></center>');
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY+20)+"px").style("left",(event.pageX-90)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
basic.append("text").attr("x",120).attr("y",765).attr("font-weight","normal").attr("font-size","14px").attr("font-family",'Century Gothic').style("fill","black").text("VIOLIN").attr("line-height","16px").attr("id","h1");
d3.selectAll("#h1").on('mouseover', 
function(d){
tooltip.html('<center><p><strong>VIOLIN</strong></p><p>Music has always felt like quicksilver down my spine.</p><p>I have learned both Carnatic and Western Music from the age of 7.</p></center>');return tooltip.style("visibility", "visible");})    
.on("mousemove", function(){return tooltip.style("top", (event.pageY)+"px").style("left",(event.pageX)+"px");})   
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
basic.append("text").attr("x",210).attr("y",615).attr("font-weight","normal").attr("font-size","14px").attr("font-family",'Century Gothic').style("fill","black").text("TABLE TENNIS").attr("line-height","16px").attr("id","h2");
d3.selectAll("#h2").on('mouseover', 
function(d){
tooltip.html('<center><p><strong>TABLE TENNIS</strong></p><p>I have participated in district level tt in India since I was 8.</p><p>It has greatly helped me improve my adaptive skills and reflexes.</p></center>');return tooltip.style("visibility", "visible");})    
.on("mousemove", function(){return tooltip.style("top", (event.pageY)+"px").style("left",(event.pageX)+"px");})   
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
basic.append("text").attr("x",320).attr("y",710).attr("font-weight","normal").attr("font-size","14px").attr("font-family",'Century Gothic').style("fill","black").text("QUIZZING").attr("line-height","16px").attr("id","h3");
d3.selectAll("#h3").on('mouseover', 
function(d){
tooltip.html('<center><p><strong>QUIZZING</strong></p><p>I have regularly participated on both topical and general quizzes</p><p>at the inter school and state levels.</p></center>');return tooltip.style("visibility", "visible");})    
.on("mousemove", function(){return tooltip.style("top", (event.pageY)+"px").style("left",(event.pageX)+"px");})   
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
basic.append("text").attr("x",400).attr("y",650).attr("font-weight","normal").attr("font-size","12px").attr("font-family",'Century Gothic').style("fill","black").text("FREELANCE WORK").attr("line-height","14px").attr("id","h4");
d3.selectAll("#h4").on('mouseover', 
function(d){
tooltip.html('<center><p><strong>FREELANCE WORK</strong></p><p>Regular interviewer and article contributor to RAPRA Quarterly Newsletter (circulation of 6000)</p><p>Member of Interact Club, Lions Club and Rotary Club of Chennai since 2013</p></center>');return tooltip.style("visibility", "visible");})    
.on("mousemove", function(){return tooltip.style("top", (event.pageY)+"px").style("left",(event.pageX)+"px");})   
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});
basic.append("text").attr("x",520).attr("y",765).attr("font-weight","normal").attr("font-size","14px").attr("font-family",'Century Gothic').style("fill","black").text("JAPANESE").attr("line-height","16px").attr("id","h5");
d3.selectAll("#h5").on('mouseover', 
function(d){
tooltip.html('<center><p><strong>JAPANESE</strong></p><p>Certified in N5 and N4 levels of Japanese.</p><p>Selected for teacher training program by ABK AOTS Dosokai.</p></center>');return tooltip.style("visibility", "visible");})    
.on("mousemove", function(){return tooltip.style("top", (event.pageY)+"px").style("left",(event.pageX)+"px");})   
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

prof.append("text").attr("x",80).attr("y",700).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","black").text("CHOOSE FIELD").attr("line-height","16px").attr("id","def");
d3.selectAll("#cs").on('mouseover', 
function(d){
d3.selectAll("#def").remove();
prof.append("text").attr("x",65).attr("y",650).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","black").text("Computer Science").attr("line-height","16px").attr("id","csd");
prof.append("text").attr("x",55).attr("y",670).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Gold medal - Anna University").attr("line-height","11px").attr("id","csd");
prof.append("text").attr("x",55).attr("y",690).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- CGPA : 9.51/10.00").attr("line-height","11px").attr("id","csd");
prof.append("text").attr("x",55).attr("y",710).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Editor of  dept. newsletter").attr("line-height","11px").attr("id","csd");
prof.append("text").attr("x",55).attr("y",730).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Chapter Representative of").attr("line-height","11px").attr("id","csd");
prof.append("text").attr("x",55).attr("y",750).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("  Computer Society of India").attr("line-height","11px").attr("id","csd");
prof.append("text").attr("x",55).attr("y",770).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Big Data & Cloud Computing").attr("line-height","11px").attr("id","csd");
})  
.on("mouseout", function(){d3.selectAll("#csd").remove();prof.append("text").attr("x",80).attr("y",700).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","black").text("CHOOSE FIELD").attr("line-height","16px").attr("id","def");
});
d3.selectAll("#b").on('mouseover', 
function(d){
d3.selectAll("#def").remove();
prof.append("text").attr("x",100).attr("y",650).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","black").text("Business").attr("line-height","16px").attr("id","bd");
prof.append("text").attr("x",55).attr("y",670).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Enterprise Resource Planning").attr("line-height","11px").attr("id","bd");
prof.append("text").attr("x",55).attr("y",690).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Innovation Diffusion Theory").attr("line-height","11px").attr("id","bd");
prof.append("text").attr("x",55).attr("y",710).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Decision Systems").attr("line-height","11px").attr("id","bd");
prof.append("text").attr("x",55).attr("y",730).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Data Analytics").attr("line-height","11px").attr("id","bd");
prof.append("text").attr("x",55).attr("y",770).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Text Mining in Management").attr("line-height","11px").attr("id","bd");
prof.append("text").attr("x",55).attr("y",750).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Visualization in Management").attr("line-height","11px").attr("id","bd");
})  
.on("mouseout", function(){d3.selectAll("#bd").remove();prof.append("text").attr("x",80).attr("y",700).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","black").text("CHOOSE FIELD").attr("line-height","16px").attr("id","def");
});
d3.selectAll("#stat").on('mouseover', 
function(d){
d3.selectAll("#def").remove();
prof.append("text").attr("x",100).attr("y",650).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","black").text("Statistics").attr("line-height","16px").attr("id","statd");
prof.append("text").attr("x",55).attr("y",670).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Graphical Perception").attr("line-height","11px").attr("id","statd");
prof.append("text").attr("x",55).attr("y",690).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Statistical Anomaly Prediction").attr("line-height","11px").attr("id","statd");
prof.append("text").attr("x",55).attr("y",710).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Computational Packages").attr("line-height","11px").attr("id","statd");
prof.append("text").attr("x",55).attr("y",730).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Applied Regression Analysis").attr("line-height","11px").attr("id","statd");
prof.append("text").attr("x",55).attr("y",770).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- Biostatistics").attr("line-height","11px").attr("id","statd");
prof.append("text").attr("x",55).attr("y",750).attr("font-weight","normal").attr("font-size","11px").attr("font-family",'Century Gothic').style("fill","black").text("- EDA").attr("line-height","11px").attr("id","statd");
})  
.on("mouseout", function(){d3.selectAll("#statd").remove();prof.append("text").attr("x",80).attr("y",700).attr("font-weight","bold").attr("font-size","16px").attr("font-family",'Century Gothic').style("fill","black").text("CHOOSE FIELD").attr("line-height","16px").attr("id","def");
});

d3.selectAll("#x1").on('mouseover', 
function(d){
tooltip.html('<center><p style="color:rgb(125,153,147)";><strong>International Journal of Management Information Systems </strong></p><p>Enterprise Systems, Organizational Practices, and Firm Performance: An Innovation Diffusion Perspective. </p></center>');
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY+20)+"px").style("left",(event.pageX-90)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

d3.selectAll("#x2").on('mouseover', 
function(d){
tooltip.html('<center><p style="color:rgb(125,153,147)";><strong>Decision Sciences Institute Annual Meeting - 2019</strong></p><p>Abstractive Summarization Through Sentiment Analysis Of User Product Reviews - An RNN Approach</p></center>');
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY+20)+"px").style("left",(event.pageX-90)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

d3.selectAll("#x3").on('mouseover', 
function(d){
tooltip.html('<center><p style="color:rgb(125,153,147)";><strong>Southwest Decision Sciences Institute Annual Meeting - 2019</strong></p><p>ES Configurations and their Impact on firm Performance</p></center>');
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY+20)+"px").style("left",(event.pageX-90)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

d3.selectAll("#x5").on('mouseover', 
function(d){
tooltip.html('<center><p style="color:rgb(125,153,147)";><strong>E-3</strong></p><p>Behavioral Models of the Praying Mantis as a Basis for Robotic Behavior</p></center>');
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY+20)+"px").style("left",(event.pageX-90)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

d3.selectAll("#x6").on('mouseover', 
function(d){
tooltip.html('<center><p style="color:rgb(125,153,147)";><strong>Loyola - ICAM Symposium</strong></p><p>Sentiment Analysis- A Study in Sarcasm</p></center>');
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY+20)+"px").style("left",(event.pageX-90)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

d3.selectAll("#x4").on('mouseover', 
function(d){
tooltip.html('<center><p style="color:rgb(125,153,147)";><strong>North East Decision Sciences Institute Annual Meeting - 2018</strong></p><p>Configuring SME Enterprise Systems</p></center>');
return tooltip.style("visibility", "visible");})       
.on("mousemove", function(){return tooltip.style("top", (event.pageY+20)+"px").style("left",(event.pageX-90)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

basic.append("line").attr("x1",680).attr("x2",680).attr("y1",-10).attr("y2",850).attr("stroke-width",3).attr("stroke","#6a7758");
prof.append("line").attr("x1",250).attr("x2",250).attr("y1",-10).attr("y2",850).attr("stroke-width",3).attr("stroke","#6a7758");

basic.append("text").attr("x",735).attr("y",255).attr("font-weight","normal").attr("font-size","12px").attr("font-family",'Century Gothic').style("fill","black").text("Journals");
basic.append("text").attr("x",880).attr("y",345).attr("font-weight","normal").attr("font-size","12px").attr("font-family",'Century Gothic').style("fill","black").text("DSI");
basic.append("text").attr("x",742).attr("y",435).attr("font-weight","normal").attr("font-size","12px").attr("font-family",'Century Gothic').style("fill","black").text("SWDSI");
basic.append("text").attr("x",875).attr("y",525).attr("font-weight","normal").attr("font-size","12px").attr("font-family",'Century Gothic').style("fill","black").text("NEDSI");
basic.append("text").attr("x",750).attr("y",615).attr("font-weight","normal").attr("font-size","12px").attr("font-family",'Century Gothic').style("fill","black").text("E-3");
basic.append("text").attr("x",855).attr("y",705).attr("font-weight","normal").attr("font-size","12px").attr("font-family",'Century Gothic').style("fill","black").text("Symposiums");

