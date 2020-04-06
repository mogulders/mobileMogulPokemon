class City {
  constructor(name, latitude, longitude) {
    this.id = 0;
    this.cityName = name;
    this.details = "";

    this.approvedPartyList = [];
    this.unapprovedPartyList = [];
    this.latitude = latitude;
    this.longitude = longitude;
    this.coordinates = [this.latitude, this.longitude];
    this.cityRadius = 0;
  }
}

export default City;
