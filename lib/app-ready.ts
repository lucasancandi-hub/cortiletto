const READY_EVENT = "cortiletto:app-ready";

let isReady = false;

export function markAppReady() {
  if (isReady || typeof window === "undefined") return;
  isReady = true;
  window.dispatchEvent(new Event(READY_EVENT));
}

export function onAppReady(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  if (isReady) {
    callback();
    return () => {};
  }

  window.addEventListener(READY_EVENT, callback, { once: true });
  return () => window.removeEventListener(READY_EVENT, callback);
}
