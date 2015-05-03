function translate(language) {
  language = language || "eng";
  $("[data-translate]").each(function() {
    var word = $(this).attr("data-translate");
    if( l10n && l10n[word] && l10n[word][language] ) {
      var translated = l10n[word][language];
    } else { var translated = ""; }
    $(this).empty().append(translated);
  });
}

function l(word) {
  if( language && l10n && l10n[word] && l10n[word][language] ) {
    var translated = l10n[word][language];
  } else {
    var translated = "";
    console.error("l10n: '"+ word + "' not translated.")
  }
  return translated;
}
