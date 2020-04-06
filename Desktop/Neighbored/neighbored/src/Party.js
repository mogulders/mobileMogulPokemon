class Party {
  constructor(title, partyDate, address, type, partyDescription, favorited) {
    //User Defined
    this.title = title;
    this.partyDate = partyDate;
    this.address = address;
    this.type = type;
    this.partyDescription = partyDescription;
    this.partyFullDescription = "";
    this.favorited = favorited;

    //Presets
    this.approved = false;

    //Dont Knows Rn
    this.location = [this.lattitude, this.longitutude];
    this.cost = null;
  }
}

export default Party;
