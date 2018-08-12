//      
export default class Dependency {
               
                  
                  
  constructor(name        , currVer        , lastCheck      ) {
    this.name = name;
    this.currVer = currVer;
    this.lastCheck = lastCheck;
  }
  static fromJsonString(jsonString        ) {
    console.log(`jsonString: ${JSON.parse(jsonString)}`);
    const jsonObject = JSON.parse(jsonString);
    return new Dependency(
      jsonObject.name,
      Number(jsonObject.currVer),
      new Date(jsonObject.lastCheck),
    );
  }
  static fromJsonObject(jsonObject        ) {
    console.log('002', jsonObject);
    return new Dependency(
      jsonObject.name,
      Number(jsonObject.currVer),
      new Date(jsonObject.lastCheck),
    );
  }
}
