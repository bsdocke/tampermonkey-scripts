// ==UserScript==
// @name         Remove Facebook side panels
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove the left toolbar and the newsfeed/suggestions column on the right-hand side using CSS styles injected into the head
// @author       You
// @match        *.facebook.com*
// @grant        none
// ==/UserScript==
var head = document.getElementsByTagName('head')[0];
var s = document.createElement('style');
s.setAttribute('type', 'text/css');
if (s.styleSheet) {   
    s.styleSheet.cssText = '#leftCol { display:none !important;}\r\n#rightCol { display:none !important;}\r\n#contentArea { width: 100% !important; margin: 0 !important;}\r\n#contentCol{margin: 0 !important;}';
} else {                
    s.appendChild(document.createTextNode('#leftCol{display:none !important;}\r\n#rightCol{display:none !important;}\r\n#contentArea { width: 100% !important;}\r\n#contentCol{margin: 0 !important;}'));
}
head.appendChild(s);
