async function getUser() {
  let users;
  try {
    const data = await fetch("https://api.nationalize.io/?name=giri", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    users = await data.json();
    let s = users.country;
    if (s.length > 1) {
      document.getElementById("1").innerHTML = users.country[0].country_id;
      document.getElementById("2").innerHTML = users.country[0].probability;
      document.getElementById("3").innerHTML = users.country[1].country_id;
      document.getElementById("4").innerHTML = users.country[1].probability;
    } else {
      document.getElementById(
        "5"
      ).innerHTML = `in this data only country is less than ${s.length}`;
    }
  } catch (error) {
    console.log(error);
  }
  //return users;
}
