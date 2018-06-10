
export default class DependencyTracker {
  static sayHello(asd) {
    const text = `Hello ${asd}`;
    console.log(text);
    return text;
  }
  respond() {
    console.log(this);
    const response = [
      {
        name: 'Rasbian', curr_ver: 2, last_update: '010-02-18T17:59:41', new_ver: 60, last_check: '010-02-18T17:59:41',
      },
      {
        name: 'Rasbian', curr_ver: 1, last_update: '010-02-18T17:59:41', new_ver: 60, last_check: '010-02-18T17:59:41',
      },
    ];
    return JSON.stringify(response);
  }
}
