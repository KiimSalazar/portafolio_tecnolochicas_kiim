let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Ayudo a las personas a tener conciencia en los animales.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
