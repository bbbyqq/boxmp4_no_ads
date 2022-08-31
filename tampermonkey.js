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
// @license      bbbyqq
// ==/UserScript==

(function () {
  'use strict'

  let flag = false
  let t = setInterval(() => {
    if (flag) {
      clearInterval(t)
    } else {
      const box = document.querySelector('#HMRichBox')
      const left = document.querySelector('#HMcoupletDivleft')
      const right = document.querySelector('#HMcoupletDivright')
      if (box && left && right) {
        box.remove()
        left.remove()
        right.remove()
        flag = true
      }
    }
  }, 1)

})();
