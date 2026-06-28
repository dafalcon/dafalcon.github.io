(function () {
  var GOATCOUNTER_ENDPOINT = "https://dafalcon.goatcounter.com/count";
  var GOATCOUNTER_SCRIPT_ID = "goatcounter-script";
  var pendingPath = null;
  var isLocalHost = /^(localhost|127(?:\.\d{1,3}){3}|0\.0\.0\.0)$/i.test(window.location.hostname);

  if (isLocalHost) {
    return;
  }

  window.goatcounter = window.goatcounter || {};
  window.goatcounter.endpoint = GOATCOUNTER_ENDPOINT;
  window.goatcounter.no_onload = true;

  function currentPath() {
    return window.location.pathname + window.location.search;
  }

  function ensureScript() {
    if (document.getElementById(GOATCOUNTER_SCRIPT_ID)) {
      return;
    }

    var script = document.createElement("script");
    script.id = GOATCOUNTER_SCRIPT_ID;
    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.dataset.goatcounter = GOATCOUNTER_ENDPOINT;
    script.addEventListener("load", function () {
      if (pendingPath) {
        countPath(pendingPath);
      }
    });
    document.head.appendChild(script);
  }

  function countPath(path) {
    if (!window.goatcounter || typeof window.goatcounter.count !== "function") {
      pendingPath = path;
      ensureScript();
      return;
    }

    pendingPath = null;
    window.goatcounter.count({ path: path });
  }

  function onRouteChange() {
    countPath(currentPath());
  }

  ensureScript();

  if (typeof document$ !== "undefined" && document$ && typeof document$.subscribe === "function") {
    document$.subscribe(onRouteChange);
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onRouteChange, { once: true });
  } else {
    onRouteChange();
  }
})();
