function translate(language) {
  var allElements = document.body.getElementsByTagName('*');
  for (var i = 0; i < allElements.length; i++) {
    var tag = allElements[i];
    if (tag.getAttribute('data-translate')) {
      var word = tag.getAttribute('data-translate');
      if( l10n && l10n[word] && l10n[word][language] ) {
        var translated = l10n[word][language];
      } else {
        var translated = "";
        console.error("l10n: '"+ word + "' not translated.")
      }
      tag.innerHTML = translated;
    }
  }
}

function l(word) {
  if(language && l10n && l10n[word] && l10n[word][language]) {
    var translated = "<span data-translate='" + word + "'>" + l10n[word][language] + "</span>";
  } else {
    var translated = "";
    console.error("l10n: '"+ word + "' not translated.")
  }
  return translated;
}
