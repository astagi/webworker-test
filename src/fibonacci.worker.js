import fibonacci from "./fibonacci";

self.onmessage = async function (e) {
  self.postMessage(fibonacci(e.data));
};
