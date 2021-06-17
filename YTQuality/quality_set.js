


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
    let buffer = new Array();
    //tutaj można zdefiniować co ile mają być pobierane statystyki 
    stats_collect = setInterval(stats, 1000);
    //tutaj definiowane jest po jakim czasie pobierane są zgromadzone statystyki
    
    ///////////////////////////////////////////////////////////////////////////////////
    //tutaj można zdefiniować własne ustawienia jakości, podając czas od początku testu
    setTimeout(setQuality, 70000, "hd720");
    setTimeout(setQuality, 100000, "small");
    setTimeout(setQuality, 140000, "large");
    setTimeout(pause, 150000, 10000);
    setTimeout(capture, 200000);
    function setQuality(quality){
        //player = document.getElementById('movie_player');
        //console.log(player);
        player.setPlaybackQualityRange(quality, quality);
    }
    function pause(timeout){
        player.pauseVideo();
        setTimeout(player.playVideo, timeout);
    }
    function stats() {

        //player = document.getElementById('movie_player');
        
        //console.log(player);

        //player.pauseVideo();
    
        //player.playVideo();
        bandwidth = player.getStatsForNerds(0).bandwidth_kbps;
        res = player.getStatsForNerds(0).resolution;
        buffers = player.getStatsForNerds(0).buffer_health_seconds;
        speeds.push(bandwidth);
        resolutions.push(res);
        buffer.push(buffers);
        currentTime = player.getCurrentTime();
        times.push(currentTime);
        console.log(speeds);
        console.log(times);
        console.log(resolutions);

        console.log(buffers);

    }

    function capture() {
        clearInterval(stats_collect);
        var blob = new Blob([speeds], { type: 'application/octet-binary' });
        var blob2 = new Blob([times], {type: 'application/octet-binary'});
        var blob3 = new Blob([resolutions], {type: 'application/octet-binary'});
        var blob4 = new Blob([buffer], {type: 'application/octet-binary'});
    
        // pass a useful mime type here
        var url = URL.createObjectURL(blob);
        var url2 = URL.createObjectURL(blob2);
        var url3 = URL.createObjectURL(blob3);
        var url4 = URL.createObjectURL(blob4);
        function download(dataurl, filename) {
            var a = document.createElement("a");
            a.href = dataurl;
            a.setAttribute("download", filename);
            a.click();
          }
          
        download(url, "speeds.csv");
        download(url2, "times.csv");
        download(url3, "resolutions.csv");
        download(url4, "buffer_sec.csv");

    }

  

    //*#include <IE.au3>

    //;Attach to open YouTube player within browser
    //$oIE = _IEAttach ("https://www.youtube.com", "url",1)
    
    //;Get a reference to the movie player
    //$oPlayerRef = $oIE.document.getElementById("movie_player")
    
    //;Video ID / sCPN
    //msgbox(0,"",$oPlayerRef.getStatsForNerds(0).video_id_and_cpn)
    //;Viewport / Frames
    //msgbox(0,"",$oPlayerRef.getStatsForNerds(0).dims_and_frames)
    //;Current / Optimal Res
    //msgbox(0,"",$oPlayerRef.getStatsForNerds(0).resolution)
    //;Volume / Normalized
    //msgbox(0,"",$oPlayerRef.getStatsForNerds(0).volume)
    //;Codecs
    //msgbox(0,"",$oPlayerRef.getStatsForNerds(0).codecs)
    //;Connection Speed
    //msgbox(0,"",$oPlayerRef.getStatsForNerds(0).bandwidth_kbps)
    //;Network Activity
    //msgbox(0,"",$oPlayerRef.getStatsForNerds(0).network_activity_bytes)
    //;Buffer Health
    //msgbox(0,"",$oPlayerRef.getStatsForNerds(0).buffer_health_seconds)
    //;Mystery Text
    //msgbox(0,"",$oPlayerRef.getStatsForNerds(0).debug_info)//
    
}


