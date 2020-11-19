$(".flex-form").on("submit", function (event) {
  event.preventDefault();
  var start = $("#startcity").val();
  var destination = $("#destinationcity").val();
  var startdate = $("#startdate").val();
  var enddate = $("#enddate").val();
  var guest = $("#guest").val();

  console.log(start, destination, startdate, enddate, guest);
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://priceline-com.p.rapidapi.com/flights/SFO/LAX/2021-02-15/2021-02-25?adults=1",
    method: "GET",
    headers: {
      "x-rapidapi-key": "228a621e74msh789b3a09ca3ee81p17d2e0jsneb2a72df51c0",
      "x-rapidapi-host": "priceline-com.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    var airlinedetails = response.airSearchRsp.airline
    var basedonairports = response.airSearchRsp.totalTripSummary.airport
    var totalTripSummary = response.airSearchRsp.totalTripSummary.airline 
    var airportArray= response.airSearchRsp.airport
    var itinerary = response.airSearchRsp.pricedItinerary
    var airportcode =""
    var airlinecode =""
    for ( let i=0;i<basedonairports.length;i++){
        airportcode+=`<tr><td>${basedonairports[i].origin}</td>
            <td>${basedonairports[i].destination}</td>
            <td>${basedonairports[i].lowestTotalFare.amount}</td>
            </tr>
            `
    }
    $("#ap").html (airportcode)
    for ( let i=0; i<totalTripSummary.length;i++){
        airlinecode+=`<tr><td>${totalTripSummary[i].code}</td>
        <td>${totalTripSummary[i].lowestTotalFare.amount}</td>
        </tr>
        `
    }
    $("#al").html (airlinecode)
    var htmlcode= ""
    for (let i=0;i<itinerary.length;i++){
htmlcode+=`<tr>
<td>${itinerary[i].pricingInfo.baseFare}</td>
<td>${itinerary[i].pricingInfo.totalFare}</td>
<td>${itinerary[i].pricingInfo.voidWindowClose}</td>
<td>${itinerary[i].pricingInfo.tickitingAirline}</td>
<td>${itinerary[i].totalTripDurationInHours}</td>
`
    }
    $("#opt").html (htmlcode)
  });

});
