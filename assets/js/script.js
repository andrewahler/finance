$(".flex-form").on("submit",function(event){
    event.preventDefault()
    var start = $("#startcity").val()
    var destination = $("#destinationcity").val()
    var startdate = $("#startdate").val()
    var enddate = $("#enddate").val()
    var guest = $("#guest").val()
    console.log(start,destination,startdate,enddate,guest)
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://priceline-com.p.rapidapi.com/flights/SFO/LAX/2021-02-15/2021-02-25?adults=1",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "228a621e74msh789b3a09ca3ee81p17d2e0jsneb2a72df51c0",
            "x-rapidapi-host": "priceline-com.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
})
