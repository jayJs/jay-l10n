function translate(language) {
  language = language || "eng";
  $("[data-translate]").each(function() {
    var word = $(this).attr("data-translate"); 
    if( l10n && l10n[word] && l10n[word][language] ) { var translated = l10n[word][language]; }
    else { var translated = ""; }
    $(this).empty().append(translated);
  });
}


function l(word, lang) {
  lang = lang || "eng";
  if( l10n && l10n[word] && l10n[word][lang] ) { var translated = l10n[word][lang]; }
  else { var translated = ""; }
  return translated;
}
