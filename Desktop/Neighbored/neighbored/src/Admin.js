import City from "./City";

class Admin {
  constructor(username, password, cityName, latitude, longitude) {
    this.username = username;
    this.password = password;
    this.city = new City(cityName, latitude, longitude);
  }
}

export default Admin;
