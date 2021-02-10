// music should be an object with title, artist, and album properties
const music = {
  favoriteGenre: "Christian Death Metal",
  // `title`, `artist`, and `album`
  artist: "Screaming Save Yours",
  title: "The Body",
  album: "The Story"
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
    <h1>${music.favoriteGenre}</h1>
    <ul>
      <li>artist: ${music.artist} </li>
      <li>title: ${music.title}</li>
      <li>album: ${music.album}</li>
    </ul>
  </div>
`;

// html injection
const element = document.getElementById("music");
element.innerHTML = songSnippet;

