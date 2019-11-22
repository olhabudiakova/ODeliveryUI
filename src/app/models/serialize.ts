export class Serialize {
  fillFromJSON(json: string) {
    const jsonObj = JSON.parse(json);
    for (const propName of jsonObj) {
      this[propName] = jsonObj[propName];
    }
  }
}
