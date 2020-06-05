$(document).ready(function(){

//input id userCity     button id submitWeather
// API 
$('#submitWeather').click(function(){
    var city = $('#userCity').val();
    if(city  === ''){
        $('#error').html("Field cannot be empty");
        }else{
            $('#error').hide();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
            type:"GET",
            dataType: "jsonp",
            success: function(data){
              var widget = show(data);
              $('#show').html(widget);
              $('#userCity').val('');
            }
        });
        function show(data){
        return  "<h3><strong>Current Weather for </strong>: " + data.name + ", " + data.sys.country +  "</h3>" +
        "<h3><strong>Weather</strong>: " + data.weather[0].main +"</h3>" +
        "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
        "<h3><strong>Temperature</strong>: " + data.main.temp + "° </h3>" +
        "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
        "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>" ;
    }
    function searchGiphy() {


        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + city + "&api_key=OH5PDKM3ho3LxKUoOM1bofJI3Rrl8UPb&limit=30");

        xhr.done(function (response) {
            var gifs = response.data[0];
            
                $('.search-city-gif').html("<img src='" + gifs.images.original.url + "'/>");
                 

        });

    };
    
    searchGiphy();
  }
});

/*
function show(data){
    return  "<h3><strong>Current Weather for </strong>: " + data.name + ", " + data.sys.country +  "</h3>" +
            "<h3><strong>Weather</strong>: " + data.weather[0].main +"</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "° </h3>" +
            "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
            "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>" ;
}*/
      // refactor...if la press enter hardcode la into city var..
      
$('#submitWeather').click(function(){
     var city = $('#userCity').val();
        if(city === ''){
            $('#error').html("Field cannot be empty");
        }else if(city == "la"){
            $('#error').hide();
            var la = "los angeles"
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + la + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
            type:"GET",
            dataType: "jsonp",
            success: function(data){
              var widget = show(data);
              $('#show').html(widget);
              $('#userCity').val('');
            }
        });
    }else{
    $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
            type:"GET",
            dataType: "jsonp",
            success: function(data){
              var widget = show(data);
              $('#show').html(widget);
              $('#userCity').val('');
            }
        });
    }
});

function show(data){
    return  "<h3><strong>Current Weather for </strong>: " + data.name + ", " + data.sys.country +  "</h3>" +
            "<h3><strong>Weather</strong>: " + data.weather[0].main +"</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "° </h3>" +
            "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
            "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>" ;
}


 $('#userCity').on('keypress', function(e){
    var city = $('#userCity').val();
    if(e.which === 13 && city === ''){
        $('#error').html("Field cannot be empty");
        }else if(e.which === 13){
            $('#error').hide();
         var city = $('#userCity').val();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
            type:"GET",
            dataType: "jsonp",
            success: function(data){
              var widget = show(data);
              $('#show').html(widget);
              $('#userCity').val('');
            }
        });
        function show(data){
        return  "<h3><strong>Current Weather for </strong>: " + data.name + ", " + data.sys.country +  "</h3>" +
        "<h3><strong>Weather</strong>: " + data.weather[0].main +"</h3>" +
        "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
        "<h3><strong>Temperature</strong>: " + data.main.temp + "° </h3>" +
        "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
        "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>" ;
    }
    function searchGiphy() {
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + city + "&api_key=OH5PDKM3ho3LxKUoOM1bofJI3Rrl8UPb&limit=30");

        xhr.done(function (response) {
            console.log("It is working & Sarah smells like old provolone", response);
            var gifs = response.data[0];
            
                $('.search-city-gif').html("<img src='" + gifs.images.original.url + "'/>");     

        });


    };
    searchGiphy();
  }
});
       
       $('#userCity').on('keypress', function(e){
        var city = $('#userCity').val();
        if(e.which === 13 && city === ''){
            $('#error').html("Field cannot be empty");
            
            }else if(e.which === 13){
                $('#error').hide();
             var city = $('#userCity').val();
             if(city == "la"){
                 var la = "los angeles"
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + la + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
                type:"GET",
                dataType: "jsonp",
                success: function(data){
                  var widget = show(data);
                  $('#show').html(widget);
                  $('#userCity').val('');
                }
            });
        
            function show(data){
            return  "<h3><strong>Current Weather for </strong>: " + data.name + ", " + data.sys.country +  "</h3>" +
            "<h3><strong>Weather</strong>: " + data.weather[0].main +"</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "° </h3>" +
            "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
            "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>" ;
        }}
      }else if(e.which === 13){
        var city = $('#userCity').val();
       $.ajax({
           url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
           type:"GET",
           dataType: "jsonp",
           success: function(data){
             var widget = show(data);
             $('#show').html(widget);
             $('#userCity').val('');
           }
       });
       function show(data){
       return  "<h3><strong>Current Weather for </strong>: " + data.name + ", " + data.sys.country +  "</h3>" +
       "<h3><strong>Weather</strong>: " + data.weather[0].main +"</h3>" +
       "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
       "<h3><strong>Temperature</strong>: " + data.main.temp + "° </h3>" +
       "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
       "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>" ;
   }
 }
    });
       
    
        

// Click Submit Button  Landing Page
$('.passButton').click(function(e){
    var userPassInput = $('.passInput').val();
    if(userPassInput === "phlebotomist"){
         $('#pass-validation-granted').append('<h5>'+"Access Granted"+'<br>'+"....Redirecting"+'</h5>');
    $('.passInput').val(''); 
    setTimeout(function(){location.href = "weatherApp.html"}, 2000);
    
  }else{

    $('#pass-validation-denied').append('<h5>'+"Password Denied"+'</h5>');
    $('.passInput').val(''); 
    $('h5').fadeOut(5000);

  }
    });
    
    // Press Enter
    $('.passInput').on('keypress', function(e){
        var userPassInput = $(this).val();
        if(e.which === 13 && userPassInput === "phlebotomist"){
           
            $('#pass-validation-granted').append('<h5>'+"Access Granted"+'<br>'+"....Redirecting"+'</h5>');
            $('.passInput').val(''); 
            setTimeout(function(){location.href = "weatherApp.html"}, 2000);
        }else if(e.which === 13 && userPassInput != "phlebotomist"){

            $('#pass-validation-denied').append('<h5>'+"Password Denied"+'</h5>');
            $('.passInput').val(''); 
            $("h5").fadeOut(5000);
        
          }
            }); 
        

// spinning cube..
$(".wrapper").hide(); 
var map = {16: false, 74: false, 75: false};
$("*").keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[16] && map[74] && map[75]) {
           $(".wrapper").show();
        }
    }
})
.keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
  });

//Major Cites Weather
$('.england-city-plus').click(function(){
   $(this).hide();
   $('.england-city-minus').show();
   $('.england-after').fadeIn(900);
      var englandCity = "london";
       $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + englandCity + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
            type:"GET",
            dataType: "jsonp",
            success: function(data){
              var widget = show(data);
              $('.england-after').html(widget);
        }
        });
        $('.england-city-minus').click(function(){
            $('.england-after').fadeOut(900);
            $('.england-city-minus').hide();
            $('.england-city-plus').show();
            
        });
       
    });
    // edited... refactor to match chicago
    $('.chicago-city-plus').click(function(){
        $('#chicago-plus').hide();
        $('.chicago-city-minus').show();
        $('.chicago-after').fadeIn(900);
           var chicagoCity = "chicago";
            $.ajax({
                 url: "http://api.openweathermap.org/data/2.5/weather?q=" + chicagoCity + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
                 type:"GET",
                 dataType: "jsonp",
                 success: function(data){
                   var widget = show(data);
                   $('.chicago-after').html(widget);
             }
             });
             $('.chicago-city-minus').click(function(){
                $('.chicago-after').fadeOut(900);
                $('.chicago-city-minus').hide();
                $('#chicago-plus').show();
                
            });
         });
        
     
         $('.san-fran-city-plus').click(function(){
            $(this).hide();
            $('.sanFran-city-minus').show();
            $('.sanFrancisco-after').fadeIn(900);
               var sanFranCity = "san francisco";
                $.ajax({
                     url: "http://api.openweathermap.org/data/2.5/weather?q=" + sanFranCity + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
                     type:"GET",
                     dataType: "jsonp",
                     success: function(data){
                       var widget = show(data);
                       $('.sanFrancisco-after').html(widget);
                 }
                 });
                 $('.sanFran-city-minus').click(function(){
                     $('.sanFrancisco-after').fadeOut(900);
                     $('.sanFran-city-minus').hide();
                     $('.san-fran-city-plus').show();
                     
                 });
                
             });
          
             $('.new-york-city-plus').click(function(){
                $(this).hide();
                $('.new-york-city-minus').show();
                $('.newYork-after').fadeIn(900);
                   var newYorkCity = "new york";
                    $.ajax({
                         url: "http://api.openweathermap.org/data/2.5/weather?q=" + newYorkCity + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
                         type:"GET",
                         dataType: "jsonp",
                         success: function(data){
                           var widget = show(data);
                           $('.newYork-after').html(widget);
                     }
                     });
                     $('.new-york-city-minus').click(function(){
                         $('.newYork-after').fadeOut(900);
                         $('.new-york-city-minus').hide();
                         $('.new-york-city-plus').show();
                         
                     });
                    
                 });

                 $('.salt-lake-city-plus').click(function(){
                    $(this).hide();
                    $('.salt-lake-city-minus').show();
                    $('.saltLake-after').fadeIn(900);
                       var saltCity = "salt lake city";
                        $.ajax({
                             url: "http://api.openweathermap.org/data/2.5/weather?q=" + saltCity + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
                             type:"GET",
                             dataType: "jsonp",
                             success: function(data){
                               var widget = show(data);
                               $('.saltLake-after').html(widget);
                         }
                         });
                         $('.salt-lake-city-minus').click(function(){
                             $('.saltLake-after').fadeOut(900);
                             $('.salt-lake-city-minus').hide();
                             $('.salt-lake-city-plus').show();
                             
                         });
                        
                     });

                     $('.tokyo-city-plus').click(function(){
                        $(this).hide();
                        $('.tokyo-city-minus').show();
                        $('.tokyo-after').fadeIn(900);
                           var tokyoCity = "tokyo";
                            $.ajax({
                                 url: "http://api.openweathermap.org/data/2.5/weather?q=" + tokyoCity + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
                                 type:"GET",
                                 dataType: "jsonp",
                                 success: function(data){
                                   var widget = show(data);
                                   $('.tokyo-after').html(widget);
                             }
                             });
                             $('.tokyo-city-minus').click(function(){
                                 $('.tokyo-after').fadeOut(900);
                                 $('.tokyo-city-minus').hide();
                                 $('.tokyo-city-plus').show();
                                 
                             });
                            
                         });

                         $('.mumbai-city-plus').click(function(){
                            $(this).hide();
                            $('.mumbai-minus').show();
                            $('.mumbai-after').fadeIn(900);
                               var mumbaiCity = "mumbai";
                                $.ajax({
                                     url: "http://api.openweathermap.org/data/2.5/weather?q=" + mumbaiCity + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
                                     type:"GET",
                                     dataType: "jsonp",
                                     success: function(data){
                                       var widget = show(data);
                                       $('.mumbai-after').html(widget);
                                 }
                                 });
                                 $('.mumbai-minus').click(function(){
                                     $('.mumbai-after').fadeOut(900);
                                     $('.mumbai-minus').hide();
                                     $('.mumbai-city-plus').show();
                                     
                                 });
                                
                             });

                             $('.moscow-city-plus').click(function(){
                                $(this).hide();
                                $('.moscow-city-minus').show();
                                $('.moscow-after').fadeIn(900);
                                   var moscowCity = "moscow";
                                    $.ajax({
                                         url: "http://api.openweathermap.org/data/2.5/weather?q=" + moscowCity + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
                                         type:"GET",
                                         dataType: "jsonp",
                                         success: function(data){
                                           var widget = show(data);
                                           $('.moscow-after').html(widget);
                                     }
                                     });
                                     $('.moscow-city-minus').click(function(){
                                         $('.moscow-after').fadeOut(900);
                                         $('.moscow-city-minus').hide();
                                         $('.moscow-city-plus').show();
                                         
                                     });
                                    
                                 });

                                 $('.mexico-city-plus').click(function(){
                                    $(this).hide();
                                    $('.mexico-city-minus').show();
                                    $('.mexico-after').fadeIn(900);
                                       var mexCity = "mexico city";
                                        $.ajax({
                                             url: "http://api.openweathermap.org/data/2.5/weather?q=" + mexCity + "&units=imperial" + "&APPID=caa56179220f8c539f1268b7d8779d7f",
                                             type:"GET",
                                             dataType: "jsonp",
                                             success: function(data){
                                               var widget = show(data);
                                               $('.mexico-after').html(widget);
                                         }
                                         });
                                         $('.mexico-city-minus').click(function(){
                                             $('.mexico-after').fadeOut(900);
                                             $('.mexico-city-minus').hide();
                                             $('.mexico-city-plus').show();                                        
                                         });                                      
                                     });
});


function searchGiphy(){
    var userInput = $("#gifSearch").val();
    
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+userInput+"&api_key=OH5PDKM3ho3LxKUoOM1bofJI3Rrl8UPb&limit=30");
    
    xhr.done(function(response){
        console.log("It is working & Sarah smells like old provolone",response);
        var gifs = response.data
        for(i in gifs){
            $('.main-gif-container').append("<img src='" + gifs[i].images.original.url+  "'/>")
        }
    });
    
    }
    // click submit
    $('#gifBtn').click(function(){
        searchGiphy();
    });
  // press enter
  $('#gifSearch').on('keypress', function(e){
    if(e.which === 13){
        searchGiphy();
    }
  });

const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting= false;
}
// Type Method
TypeWriter.prototype.type = function(){
    // current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt= this.words[current];
    
    // Check if deleting
    if(this.isDeleting){
        // Remove character
        this.txt = fullTxt.substring(0, this.txt.length -1);
    }else{
        // Add char
        this.txt = fullTxt.substring(0,this.txt.length +1);
    }

    // Insert txt into element
    this.txtElement.innerHTML= `<span class = "txt">${this.txt}</span>`;
    // Initial type speed
    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /=2;
    }
    //  If word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        // Make pause at end
        typeSpeed = this.wait;
        //Set delete to true
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);
// Init app
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
// Init TypeWriter
new TypeWriter(txtElement,words,wait);
}
// ------------------------------------------------------------------------------------------------------------------------------
// the ES6 way create a class & constructor
/*
class TypeWriter {
    constructor(txtElement, words, wait = 3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting= false;
    }

    type(){

    }
}*/
