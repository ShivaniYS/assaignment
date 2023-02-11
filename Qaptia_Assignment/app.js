
d3.csv("ESOP_database.csv").then(function(data){
    var database = data;
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click",runEnter);
    form.on("submit",runEnter);
    //defining function

    function runEnter(){
        d3.select("tbody").html("")
        d3.event.preventDefault();
        var inputValue = d3.select("#user-input").property("value");
        var filteredEsop_database = ESOP_database.filter(ESOP_database=> ESOP_database.CompanyName.includes(inputValue));
        var output = _.sortBy(filteredEsop_database,'Number_of_ESOPs').reverse()
        for(var i=0;i<filteredEsop_database.length;i++){
            d3.select("tbody").insert("tr").html(
                "<td>" + [i+1] + "</td>" +
                "<td>" + (output[i]['CompanyName'])+"</a>"+"</td>" + 
                "<td>" + (output[i]["ESOP_Plan_Name"])+"</td>" +
                "<td>" + (output[i]["Board Meeting Date"])+"</td>" +
                "<td>" + (output[i]["Shareholder Meeting Date"])+"</td>"
            )
        }
    };
});