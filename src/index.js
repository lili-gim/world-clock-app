function updateTime() {
  //Paris

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");

  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");

  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A<[/small>]");

  //Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A<[/small>]"
  );
}

setInterval(updateTime, 1000);
