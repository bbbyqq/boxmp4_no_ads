// ==UserScript==
// @name         MP4电影，影视工场去广告
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  去除www.boxmp4.com和www.ysgc.cc的广告!
// @author       bbbyqq
// @match        *://www.boxmp4.com/*
// @match        *://www.ysgc.cc/*
// @match        *://boxmp4.com/*
// @match        *://ysgc.cc/*
// @match        *://www.a2mu.com/*
// @license      bbbyqq
// ==/UserScript==

(function () {
  'use strict'

  setInterval(() => {
    const box = document.querySelector('#HMRichBox')
    const left = document.querySelector('#HMcoupletDivleft')
    const right = document.querySelector('#HMcoupletDivright')
    const bfad = document.querySelector('#bfad')
    const xqad = document.querySelector('#xqad')
    const adv = document.querySelector('#adv_wrap_hh')

    box?.remove()
    left?.remove()
    right?.remove()
    bfad?.remove()
    xqad?.remove()
    adv?.remove()
  }, 1)

})();
