let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let slider = document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');
let timer;
let autoplay=1;
let index_no = 0;
let playing_song = false;
let track = document.createElement('audio');
let All_song = [
    {
        name:"Song:Soul Of Mother",
        path:"Music/Soul Of Mother.mp3",
        img:"Image/1.jpeg",
        artist:"Singer:K.S.Chitra"
    },
    {
        name:"Song:Un Paarvaiyil Paithiyam Aanen",
        path:"Music/Un Paarvaiyil Paithiyam Aanen.mp3",
        img:"Image/2.jpg",
        artist:"Singers:Karthik & Sumangali"
    },
    {
        name:"Song:Deivangal Ellam Thotre Pogum",
        path:"Music/Deivangal Ellam Thotre Pogum.mp3",
        img:"Image/3.jpg",
        artist:"Singer:Vijay Yesudas"
    },
    {
        name:"Song:Iravaga Nee Nilavaga Naan",
        path:"Music/Iravaga Nee Nilavaga Naan.mp3",
        img:"Image/4.jpg",
        artist:"Singers:G.V.Prakash & Saindhavi Prakash"
    },
    {
        name:"Song:Rathathin Rathame",
        path:"Music/Rathathin Rathame.mp3",
        img:"Image/5.jpg",
        artist:"Singers:Haricharan & Srimathumitha"
    },
    {
        name:"Song:Na Un Arugil Nesamaguren",
        path:"Music/Na Un Arugil Nesamaguren.mp3",
        img:"Image/6.jpg",
        artist:"Singers:Stephen Zechariah & Saindhavi Prakash"
    },
    {
        name:"Song:Sonthamulla Vazhkkai Anandham Vilayadum Veedu",
        path:"Music/Sonthamulla Vazhkkai Anandham Vilayadum Veedu.mp3",
        img:"Image/7.jpg",
        artist:"Singer:Karunguyil Ganesh"
    }
];
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].artist;
    timer = setInterval(range_slider , 1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
}
load_track(index_no);
function justplay(){
    if(playing_song == false){
        playsong();
    }
    else{
        pausesong();
    }
}
function reset_slider(){
    slider.value = 0;
}
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>'
}
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>'
}
function next_song(){
    if(index_no< All_song.length -1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}
function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}