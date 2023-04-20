// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");


// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let imageDisplay = document.querySelector('.display-image');
let songNameDisplay = document.querySelector(".display-song");
let artistNameDisplay = document.querySelector(".display-artist");
let songlinkDisplay = document.querySelector(".display-link");








// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let songs = [
  {
    image: 'https://i.scdn.co/image/ab67616d0000b273058d066d6e23426b9ed2b9a9',
    songName: 'Before You',
    artist: 'Benson Boone',
    songLink: 'https://www.youtube.com/watch?v=pdxXAPI-dVg'
  },
  {
    image: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRKI89P1wPXZUkEX0EyQyjM4sbT5FhtmLD4rMRi26URE3D0Aa5ksHWVNRlzpW_zwl3Bw7WzN3OvJBBcUAo',
    songName: '3.15',
    artist: 'Bazzi',
    songLink: 'https://www.youtube.com/watch?v=Y6-n3JRwmsE'
  }
];
//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
 

// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to 
//store the image url, song name, artist, and song link.
function addSongInfo() {
let inputImage = document.querySelector("#image-input").value;
let inputSongName = document.querySelector("#song-name-input").value;
let inputArtist = document.querySelector("#artist-input").value;
let inputSongLink = document.querySelector("#song-link-input").value;

// task 14: create an array that stores all of the objects.
 let inputSong = {
image: inputImage,
songName: inputSongName,
artist: inputArtist,
songLink: inputSongLink
};
songs.push(inputSong);
}
//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.






// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let inputImage = document.querySelector("#image-input").value;
let inputSongName = document.querySelector("#song-name-input").value;
let inputArtist = document.querySelector("#artist-input").value;
let inputSongLink = document.querySelector("#song-link-input").value;


// task 10: use `.push()` to add each input value to the correct array.

songs.image.push(inputImage);
songs.songName.push(inputSongName);
songs.artist.push(inputArtist);
songs.songLink.push(inputSongLink);





/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function displaySongInfo() {
imageDisplay.innerHTML = "";
songNameDisplay.innerHTML = "";
artistNameDisplay.innerHTML = "";
songLinkDisplay.innerHTML = "";




for (let i = 0; i < songs.length; i++) {
imageDisplay.innerHTML += `<img src="${songs[i].image}">`;
songNameDisplay.innerHTML += `<p>${songs[i].songName}</p>`;
artistNameDisplay.innerHTML += `<p>${songs[i].artist}</p>`;
songLinkDisplay.innerHTML += `<a href="${songs[i].songLink}" target="_blank">Listen</a>`;
}
}

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

for (let i = 0; i < songs.length; i++) {
  imageDisplay.innerHTML += `<img src="${songs[i].image}">`;
}

for (let i = 0; i < songs.length; i++) {
  songNameDisplay.innerHTML += `<p>${songs[i].songName}</p>`;
}

for (let i = 0; i < songs.length; i++) {
  artistNameDisplay.innerHTML += `<p>${songs[i].artist}</p>`;
}

for (let i = 0; i < songs.length; i++) {
  songLinkDisplay.innerHTML += `<a href="${songs[i].songLink}" target="_blank">Listen</a>`;
}






