export function debounce(callee, timeoutMs) {
  let lastCall = null;
  let lastCallTimer = null;

  return function perform(...args) {
    const currentTime = Date.now();
    if (lastCall && currentTime - lastCall <= timeoutMs) {
      clearTimeout(lastCallTimer);
    }

    lastCall = currentTime;

    lastCallTimer = setTimeout(() => callee.apply(this, args), timeoutMs);
  };
}
