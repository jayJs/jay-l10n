Jay-l10n
===================

Simple jQuery based localization tool for Single Page Apps.  

##Installation  
```  
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="/l10n.js"></script>
```  

##Translations  
Use a javascript object to store the translations:  
```  
var l10n = {}  

l10n.hello = {
  est: "Tere maailm",
  eng: "Hello world",
  lat: "Sveiki pasaule"
}
```  
This way of storing the translations makes the translastion process easier.
Especially if you need to change one expression in 3 languages.

##HTML  
```  
<div class="l10n" data-word="haveACoffee"></div>
```  
If function translate(language) is run, the content of this element will be translated into disaired language.  

##API  

**translate(language)**  
Translates all elements with class "l10n" on the site.  
Run this on page load and again if the user switches language while being on site.  
```  
var language = "eng";
translate(language);  
```  

**l(word,language)**
Use this when adding content dynamically.  
```  
// This here clears the div "hello" and
// adds the translation of "hello" to it in english.
var language = "eng";
$("#hello").empty().append(l("hello",language)); // get the desired language translation of "hello".
```  

##Licence

The MIT License (MIT)  

Copyright (c) 2015 Martin Sookael

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
