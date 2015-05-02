function translate(language) {
  language = language || "eng"; // if not language is set, set it to english
  $(".l10n").each(function() { // go through all HTML elemtns with class "l10n"
    var word = $(this).attr("data-word"); // get the word
    if( l10n && l10n[word] && l10n[word][language] ) { var translated = l10n[word][language]; }
    else { var translated = ""; } // if it's present in the opject, translate it, else leave blank.
    $(this).empty().append(translated); // Empty the element and add the translation.
  });
}

function l(word, lang) {
  lang = lang || "eng";  // if not language is set, set it to english
  if( l10n && l10n[word] && l10n[word][lang] ) { var translated = l10n[word][lang]; }
  else { var translated = ""; } // if it's present in the opject, translate it, else leave blank.
  return translated; // return the translation
}
