function updateTime() {
  let amsterdamElement = document.querySelector("#Amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM	Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let darwinElement = document.querySelector("#Darwin");
  if (darwinElement) {
    let darwinDateElement = darwinElement.querySelector(".date");
    let darwinTimeElement = darwinElement.querySelector(".time");
    let darwinTime = moment().tz("Australia/Darwin");

    darwinDateElement.innerHTML = darwinTime.format("MMMM	Do YYYY");
    darwinTimeElement.innerHTML = darwinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <a href="index.html">home</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
