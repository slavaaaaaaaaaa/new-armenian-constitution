// Theme toggle and the status / contested filters. The page reads fine without this script.
(function () {
  var root = document.documentElement;
  var dark = matchMedia("(prefers-color-scheme: dark)");

  var themeBtn = document.querySelector("button.theme");
  function isDark() { return root.dataset.theme ? root.dataset.theme === "dark" : dark.matches; }
  function syncTheme() { themeBtn.setAttribute("aria-pressed", isDark() ? "true" : "false"); }
  themeBtn.hidden = false;
  syncTheme();
  dark.addEventListener("change", syncTheme);
  themeBtn.addEventListener("click", function () {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncTheme();
  });

  var bar = document.querySelector(".filters");
  var forms = JSON.parse(bar.dataset.forms);
  var rules = new Intl.PluralRules(bar.dataset.lang);
  function points(n) { return n + " " + (forms[rules.select(n)] || forms.other); }

  var tagBtns = bar.querySelectorAll("button[data-tag]");
  var hotBtn = bar.querySelector(".hot-only");
  var items = document.querySelectorAll("article.item");
  var tag = "all", hotOnly = false;

  function apply() {
    var shown = 0;
    items.forEach(function (it) {
      var ok = (tag === "all" || it.dataset.tag === tag) && (!hotOnly || it.classList.contains("hot"));
      it.hidden = !ok;
      if (ok) shown++;
    });
    document.querySelectorAll(".content > section").forEach(function (sec) {
      var n = sec.querySelectorAll("article.item:not([hidden])").length;
      sec.hidden = n === 0;
      sec.querySelector(".count").textContent = points(n);
    });
    tagBtns.forEach(function (b) {
      var t = b.dataset.tag;
      var n = 0;
      items.forEach(function (it) {
        if ((t === "all" || it.dataset.tag === t) && (!hotOnly || it.classList.contains("hot"))) n++;
      });
      b.querySelector(".n").textContent = n;
      b.setAttribute("aria-pressed", t === tag ? "true" : "false");
    });
    hotBtn.setAttribute("aria-pressed", hotOnly ? "true" : "false");
    document.querySelector(".empty").hidden = shown > 0;
  }

  tagBtns.forEach(function (b) {
    b.addEventListener("click", function () { tag = b.dataset.tag; apply(); });
  });
  hotBtn.addEventListener("click", function () { hotOnly = !hotOnly; apply(); });
  bar.hidden = false;
})();
