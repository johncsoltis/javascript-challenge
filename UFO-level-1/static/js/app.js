// from data.js
var tableData = data;

// select table body with d3
tbody = d3.select("tbody")

// loop through data and add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

// display table
displayData(tableData)

//select and define variables from index
var inputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data based on user input
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===inputText.property("value"))
    displayData(new_table)
}

// execute change handlers once filter input recieved
inputText.on("change", changeHandler)
button.on("click", changeHandler)
