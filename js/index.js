// get years
var years = [
'1957',
'1958',
'1959',
'1960',
'1961',
'1962',
'1963',
'1964',
'1965',
'1966',
'1967',
'1968',
'1969',
'1970',
'1971',
'1972',
'1973',
'1974',
'1975',
'1976',
'1977'
];
//sort array
sortedYear = years.sort();

function loadImages(list) {
    // loop through the years and create an image for each one
    for (i = 0; i < sortedYear.length; i++) {
      //parse the years
      var years = sortedYear[i];
      //Tableau Public Viz
      var url = "https://public.tableau.com/views/Measles_3/map?:showVizHome=no&:embed=y&:toolbar=n&:format=png&Year="+years;


      $("#tiles").append("<div class='tile' style='opacity:0;' id='tile-"+i+"'><span class='tile-title'>"+years+"</span><img src='"+url+"'><div class='cover'></div></div>");

    };


  $('#tiles').imagesLoaded()

    .done( function() {

      $(".tile").each(function() {
        $(this).fadeTo("slow",1);
      });
    })
}


loadImages(sortedYear);
