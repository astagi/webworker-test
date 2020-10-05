import fibonacci from "../fibonacci";

export default class fibonacciWorker {
  constructor() {
    this.onmessage = () => { };
  }

  postMessage(data) {
    this.onmessage({ data: fibonacci (data) });
  }
}
