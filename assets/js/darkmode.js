var dayMode, nightMode, darkStyle;
var dayModeUI, nightModeUI, dayModeUIMob, nightModeUIMob;

window.addEventListener("load", changeSkin);

function changeSkin() {
  dayModeMob = document.getElementById("daymode-Mob");
  nightModeMob = document.getElementById("nightmode-Mob");
  dayMode = document.getElementById("daymode");
  nightMode = document.getElementById("nightmode");
  dayModeUI = document.getElementById("daymode-UI");
  nightModeUI = document.getElementById("nightmode-UI");
  dayModeUIMob = document.getElementById("daymode-UI-Mob");
  nightModeUIMob = document.getElementById("nightmode-UI-Mob");

  var saved = getCookieValue("mode");
  if (saved === "dark") {
    applySkin("dark");
  } else if (saved === "light") {
    applySkin("light");
  } else {
    // No saved preference — follow system
    applySystemPreference();
  }

  // Listen for system preference changes (applies only when no cookie is set)
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function() {
      if (getCookieValue("mode") === "") {
        applySystemPreference();
      }
    });
  }
}

function applySystemPreference() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applySkin("dark");
  } else {
    applySkin("light");
  }
}

function setToggleDisplay(mode) {
  var showDay = mode === "light-icons";
  var els = [dayMode, dayModeMob, dayModeUI, dayModeUIMob];
  var nightEls = [nightMode, nightModeMob, nightModeUI, nightModeUIMob];
  for (var i = 0; i < els.length; i++) {
    if (els[i]) els[i].style.display = showDay ? "inline-block" : "none";
  }
  for (var i = 0; i < nightEls.length; i++) {
    if (nightEls[i]) nightEls[i].style.display = showDay ? "none" : "inline-block";
  }
}

// Apply skin visually without saving preference
function applySkin(a) {
  if ("dark" === a) {
    setToggleDisplay("dark-icons");
    darkStyle = document.getElementById("darkmode");
    if (null == darkStyle) {
      document.head.innerHTML += '<link id="darkmode" rel="stylesheet" href="assets/css/darkmode.css" type="text/css"/>';
    }
  }
  if ("light" === a) {
    setToggleDisplay("light-icons");
    darkStyle = document.getElementById("darkmode");
    if (darkStyle) darkStyle.parentNode.removeChild(darkStyle);
  }
}

// User explicitly toggles — save preference to cookie
function toggleSkin() {
  darkStyle = document.getElementById("darkmode");
  if (darkStyle) {
    applySkin("light");
    createCookie("mode", "light");
  } else {
    applySkin("dark");
    createCookie("mode", "dark");
  }
}

function createCookie(a, c, b) {
  if (b) {
    var d = new Date();
    d.setTime(d.getTime() + 864E5 * b);
    b = "; expires=" + d.toGMTString();
  } else {
    b = "";
  }
  document.cookie = a + "=" + c + b + "; path=/";
}

function getCookieValue(a, c) {
  return (c = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)")) ? c.pop() : "";
}
