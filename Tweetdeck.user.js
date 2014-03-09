// ==UserScript==
// @name Unity_Webapps_Tweetdeck
// @include https://tweetdeck.twitter.com/*
// @version 1.0
// @author Dennis Altermann
// @require utils.js
// ==/UserScript==
 
window.Unity = external.getUnityObject(1.0);
 
Unity.init({ name: "Tweetdeck",
            iconUrl: 'icon://unity-webapps-tweetdeck',
            onInit: null });