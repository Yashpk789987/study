fetch(
  "https://maps.googleapis.com/maps/api/geocode/json?address=32.3182314,-86.902298&key=AIzaSyBFffBBAkxKlHcYqWafNgQwmD-pH4JMizk"
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
