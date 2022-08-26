// ==UserScript==
// @name         MP4电影去广告
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  去除MP4电影所有广告!
// @author       bbbyqq
// @match        *://www.boxmp4.com/*
// @match        *://boxmp4.com/*
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
