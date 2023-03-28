// ==UserScript==
// @name         MP4电影，影视工场，茶杯狐去广告
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  去除看视频网站的广告!
// @author       bbbyqq
// @match        *://www.boxmp4.com/*
// @match        *://boxmp4.com/*
// @match        *://www.ysgc.vip/*
// @match        *://ysgc.vip/*
// @match        *://www.a2mu.com/*
// @match        *://www.cupfox.app/*
// @match        *://cupfox.app/*
// @license      bbbyqq
// ==/UserScript==

(function () {
  'use strict'

  setInterval(() => {
    document.querySelector('#HMRichBox')?.remove()
    document.querySelector('#HMcoupletDivleft')?.remove()
    document.querySelector('#HMcoupletDivright')?.remove()
    document.querySelector('#bfad')?.remove()
    document.querySelector('#bfad1')?.remove()
    document.querySelector('#bfad2')?.remove()
    document.querySelector('#xqad')?.remove()
    document.querySelector('#syad1')?.remove()
    document.querySelector('#syad2')?.remove()
    document.querySelector('#adv_wrap_hh')?.remove()
    document.querySelector('#fulerbox')?.remove()
    document.querySelector('#hm_cpm_show')?.remove()
    document.querySelector('#fix_bottom_dom')?.remove()
    document.querySelector('#HMRichBox')?.remove()
    document.querySelector('.cupfox-box')?.remove()
  }, 1)

})();
