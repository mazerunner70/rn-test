
export default class Dependency {
  constructor(name, currVer, lastUpdate, newVer, lastCheck) {
    this.name = name;
    this.currVer = currVer;
    this.lastUpdate = lastUpdate;
    this.newVer = newVer;
    this.lastCheck = lastCheck;
  }
}
