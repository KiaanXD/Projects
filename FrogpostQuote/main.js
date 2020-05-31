const fullQuotes = [
  {
    date: "5/25/2020",
    quote:
      '"hey covert how about you back off u fucking asshole u think russian doesnt know he made a mistake u just have to rub it in? u just have to ruin his life? u just have to break his heart? stomp on him? kick him while hes down?"',
    image: "frogquotes/frogquote0.png",
    link:
      "https://cdn.discordapp.com/attachments/568968174171586593/714634043068514415/unknown.png",
  },
  {
    date: "5/14/2020",
    quote: '"and thats when i licked the spider off of her feet :P"',
    image: "frogquotes/frogquote1.png",
    link:
      "https://cdn.discordapp.com/attachments/568968174171586593/710563949174849556/unknown.png",
  },
  {
    date: "3/05/2017",
    quote:
      '"OK I ADMIT IT I LOVE YOU OK i fucking love you and it breaks my heart when i see you play with someone else or anyone commenting in your profile i just want to be your boyfriend and put a heart in my profile linking to your profile and have a walltext of you commenting cute things i want to play video games talk in discord all night andw atch a movie together but you just seem so uninsterested in me it fucking kills me and i cant take it anymore i want to remove you but i care too much about you so please i\'m begging you to eaither love me back or remove me and never contact me again it hurts so much to say this because i need you by my side but if you dont love me then i want you to leave because seeing your icon in my friendlist would kill me everyday of my pathetic life."',
    image: "frogquotes/frogquote2.png",
    link:
      "https://cdn.discordapp.com/attachments/568968174171586593/716473946588971038/unknown.png",
  },
  {
    date: "5/06/2020",
    quote:
      '"all you small cock people sound the same, you and your small cocked poems and songs, it\'s not the "boat of the drope" it\'s the motion of the lotion or whatever, it\'s all just ridiculousness."',
    image: "frogquotes/frogquote3.png",
    link:
      "https://cdn.discordapp.com/attachments/568968174171586593/707726480305815573/unknown.png",
  },
];

const myImage = document.querySelector("#logo");
const quoteBtn = document.querySelector("#quoteBtn");
const quoteDate = document.querySelector("#quoteDate");
const quote = document.querySelector("#quote");
const imageLink = document.querySelector("#imageLink");
quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let rngNumber = Math.floor(Math.random() * fullQuotes.length);
  quote.innerHTML = fullQuotes[rngNumber].quote;
  quoteDate.innerHTML = "Posted on: " + fullQuotes[rngNumber].date;
  myImage.setAttribute("src", fullQuotes[rngNumber].image);
  imageLink.setAttribute("href", fullQuotes[rngNumber].link);
}
