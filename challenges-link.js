// Adds a "Challenges" button to the main navigation, right after "Black Sea Projects".
(function () {
  function addBtn() {
    if (document.getElementById('challenges-nav-btn')) return;
    var ref = Array.prototype.find.call(document.querySelectorAll('button'), function (b) {
      return b.textContent.indexOf('Black Sea Projects') > -1;
    });
    if (!ref) return;
    var btn = ref.cloneNode(false);
    btn.id = 'challenges-nav-btn';
    btn.textContent = '🎯 Challenges';
    btn.onclick = function () { window.location.href = 'challenges.html'; };
    ref.parentNode.insertBefore(btn, ref.nextSibling);
  }
  new MutationObserver(addBtn).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', addBtn);
  addBtn();
})();
