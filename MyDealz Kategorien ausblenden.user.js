// ==UserScript==
// @name         MyDealz Kategorien ausblenden
// @namespace    http://www.mydealz.de
// @version      1.0
// @description  Ausblendung der Kategorien
// @author       Ramoth / vielleichtmann1
// @include      http://www.mydealz.de/*
// @include      https://www.mydealz.de/*
// @grant        none
// ==/UserScript==

categories = document.getElementsByClassName("thread-category text--muted3 text--bold space--after-3");
for (i=0; i<categories.length; i++)
{
categories[i].style.display = "none"; 
}
