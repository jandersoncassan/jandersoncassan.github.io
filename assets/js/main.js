(function () {
  var STORAGE_KEY = 'jc-lang';
  var toggleButtons = document.querySelectorAll('.lang-toggle button');
  var translatable = document.querySelectorAll('[data-pt]');

  function applyLang(lang) {
    var isEn = lang === 'en';
    document.documentElement.lang = isEn ? 'en' : 'pt-BR';

    translatable.forEach(function (el) {
      var value = el.getAttribute(isEn ? 'data-en' : 'data-pt');
      if (value === null) return;
      if (el.tagName === 'TITLE' || el.hasAttribute('data-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', meta.getAttribute(isEn ? 'data-en' : 'data-pt'));
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', ogTitle.getAttribute(isEn ? 'data-en' : 'data-pt'));
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', ogDesc.getAttribute(isEn ? 'data-en' : 'data-pt'));

    toggleButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  toggleButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  var preferred = saved || (navigator.language && navigator.language.toLowerCase().indexOf('pt') === 0 ? 'pt' : 'pt');
  if (preferred !== 'pt') applyLang(preferred);
})();
