setInterval(function(){
    var url = window.location.href; // Url need to update
    const youtube = "https://www.youtube.com/";
    if (url==youtube){
        location.replace("https://yeh-john.github.io/webapp/javascript/youtube-searcher/");
    } else {
        console.log(url);
    }
},1000);