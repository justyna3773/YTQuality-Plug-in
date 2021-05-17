


//tworzenie nowego elementu skryptowego
var script = document.createElement("script");
// var fs = require('fs');
//wstrzyknięcie funkcji jako stringa i dodanie do skryptu
script.innerHTML = injection.toString();

//Add a call to that injection function so it'll automatically execute once it's injected.
//automatyczne odtwarzanie funkcji po iniekcji
script.innerHTML += "injection();";

//wstrzyknięcie nowego skryptu do ciała strony
document.body.appendChild(script);

//funkcja do wstrzyknięcia
function injection() {
    //var intercept = setInterval(setQuality, 10000, "large");
    //setTimeout(capture, 300000);
    player = document.getElementById('movie_player');
    console.log(player);
    let speeds = new Array();
    //tablica przechowujaca wartości "Connection Speed" ze 'stats for nerds'
    let resolutions = new Array();
    //tablica przechowująca informacje o "Current Res" ze 'stats for nerds'
    let times = new Array();//tablica przechowująca czas od początku testu
    //tutaj można zdefiniować co ile mają być pobierane statystyki 
    stats_collect = setInterval(stats, 1000);
    //tutaj definiowane jest po jakim czasie pobierane są zgromadzone statystyki
    setTimeout(capture, 200000);
    ///////////////////////////////////////////////////////////////////////////////////
    //tutaj można zdefiniować własne ustawienia jakości, podając czas od początku testu
    myvar3 = setTimeout(setQuality, 70000, "hd720");
    myvar4 = setTimeout(setQuality, 100000, "small");
    myvar5 = setTimeout(setQuality, 140000, "large");
    
    function setQuality(quality){
        //player = document.getElementById('movie_player');
        //console.log(player);
        player.setPlaybackQualityRange(quality, quality);
    }
    function stats() {

        //player = document.getElementById('movie_player');
        
        //console.log(player);

        //player.pauseVideo();
    
        //player.playVideo();
        bandwidth = player.getStatsForNerds(0).bandwidth_kbps;
        res = player.getStatsForNerds(0).resolution;
        speeds.push(bandwidth);
        resolutions.push(res);
        currentTime = player.getCurrentTime();
        times.push(currentTime);
        console.log(speeds);
        console.log(times);
        console.log(resolutions);

    }

    function capture() {
        clearInterval(stats_collect);
        var blob = new Blob([speeds], { type: 'application/octet-binary' });
        var blob2 = new Blob([times], {type: 'application/octet-binary'});
        var blob3 = new Blob([resolutions], {type: 'application/octet-binary'});
        // pass a useful mime type here
        var url = URL.createObjectURL(blob);
        var url2 = URL.createObjectURL(blob2);
        var url3 = URL.createObjectURL(blob3);
        function download(dataurl, filename) {
            var a = document.createElement("a");
            a.href = dataurl;
            a.setAttribute("download", filename);
            a.click();
          }
          
        download(url, "speeds.csv");
        download(url2, "times.csv");
        download(url3, "resolutions.csv");

    }

    
    
    //     // function download_txt() {
    //     //     var textToSave = speeds
    //     //     var hiddenElement = document.createElement('a');

    //     //     hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    //     //     hiddenElement.target = '_blank';
    //     //     hiddenElement.download = 'myFile.txt';
    //     //     hiddenElement.click();
    //     //   }

    //     //   document.getElementById('test').addEventListener('click', download_txt);

    // }


}


