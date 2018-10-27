// @flow
export default class Dependency {
  name: string;
  currVer: number;
  lastCheck: Date;
  constructor(name: string, currVer: number, lastCheck: Date) {
    this.name = name;
    this.currVer = currVer;
    this.lastCheck = lastCheck;
  }
  static fromJsonString(jsonString: string) {
    console.log(`jsonString: ${JSON.parse(jsonString)}`);
    const jsonObject = JSON.parse(jsonString);
    return new Dependency(
      jsonObject.name,
      Number(jsonObject.currVer),
      new Date(jsonObject.lastCheck),
    );
  }
  static fromJsonObject(jsonObject: Object) {
    console.log('002', jsonObject);
    return new Dependency(
      jsonObject.name,
      Number(jsonObject.currVer),
      new Date(jsonObject.lastCheck),
    );
  }
}
