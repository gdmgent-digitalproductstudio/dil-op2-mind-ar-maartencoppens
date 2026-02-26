document.querySelector("#switchCardBtn").addEventListener("click", () => {
  //card 1 randomizer
  const target1 = document.querySelector("#eyeMarker1");
  target1.setAttribute(
    "src",
    `./markers/target-${Math.floor(Math.random() * 3)}.png`,
  );

  //card 2 randomizer
  const target2 = document.querySelector("#eyeMarker2");
  target2.setAttribute(
    "src",
    `./markers/target-${Math.floor(Math.random() * 3)}.png`,
  );

  //audio
  const audio = document.getElementById("switchSound");
  audio.currentTime = 0;
  audio.play();
});
