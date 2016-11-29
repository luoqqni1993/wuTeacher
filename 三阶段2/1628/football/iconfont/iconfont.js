;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-sousuo" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M864.5282 808.5048l-251.3122-236.0699c37.3832-41.6028 61.5808-95.5942 65.4794-155.7374 9.2241-142.2945-98.6553-265.1252-240.9558-274.349-142.3005-9.2237-265.1364 98.6511-274.3605 240.9456s98.6553 265.1252 240.9558 274.349c67.559 4.379 130.7189-17.649 179.4279-57.2092l252.9851 237.6419c4.8269 4.5349 9.9727 1.0603 15.0864-4.383l9.2601-9.8573C866.2091 818.3921 869.3551 813.0398 864.5282 808.5048zM406.5334 623.7371c-123.5744-8.0106-217.2568-114.6762-209.2469-238.2455s114.6811-217.2477 238.2555-209.2381c123.5744 8.0106 217.2568 114.6762 209.2469 238.2455S530.1069 631.7477 406.5334 623.7371z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-exit" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1024 512 768 256l0 192L352 448c-17.672 0-32 14.328-32 32l0 64c0 17.672 14.328 32 32 32l416 0 0 192L1024 512z"  ></path>'+
      ''+
      '<path d="M609 768l-64 0c-17.672 0-32 14.328-32 32l0 97-384 0 0-768 384 0 0 96c0 17.672 14.328 32 32 32l64 0c17.672 0 32-14.328 32-32l0-192c0-17.672-14.328-32-32-32l-62 0-2 0-448 0-64 0-2 0c-16.568 0-30 13.432-30 30l0 2 0 66 0 828 0 66 0 2c0 16.568 13.432 30 30 30l2 0 64 0 450 0c2.618 0 5.144-0.37 7.564-1L609 1024c17.672 0 32-14.328 32-32l0-192C641 782.328 626.672 768 609 768z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1007.072 542.48 512.016 79.152 16.96 541.12c-9.68 9.04-10.224 24.24-1.168 33.92 9.04 9.68 24.24 10.224 33.92 1.168l462.272-431.36 462.288 432.672c4.64 4.336 10.528 6.48 16.4 6.48 6.4 0 12.8-2.544 17.52-7.6C1017.248 566.72 1016.752 551.536 1007.072 542.48z"  ></path>'+
      ''+
      '<path d="M856 552c-13.248 0-24 10.752-24 24l0 368L640 944 640 688 384 688l0 256L192 944 192 576c0-13.248-10.736-24-24-24S144 562.752 144 576l0 416 288 0L432 736l160 0 0 256 288 0L880 576C880 562.752 869.248 552 856 552z"  ></path>'+
      ''+
      '<path d="M688 208l144 0 0 128c0 13.264 10.752 24 24 24S880 349.264 880 336L880 160 688 160c-13.248 0-24 10.736-24 24S674.752 208 688 208z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wode" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M734.811622 710.704574c-67.37755-11.662621-96.382141-48.606021-106.58962-66.054415 58.011228-59.874669 99.18907-159.348218 99.18907-262.362406 0-166.290327-108.365056-253.29796-215.411071-253.29796s-215.411071 87.007633-215.411071 253.29796c0 103.013165 41.177841 202.486714 99.18907 262.362406-10.207479 17.448394-39.21207 54.391794-106.58962 66.054415-100.310613 17.361413-160.197562 80.031754-160.197562 167.643138l0 17.171078 766.019391 0 0-17.171078C895.009184 790.736329 835.123258 728.064964 734.811622 710.704574z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon112" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M866.49 910.881 156.53 910.881c-40.04 0-74.22-13.672-102.54-41.99C25.67 840.561 12 805.41 12 765.369L12 372.79C12 314.2 47.16 261.46 100.87 239c-1.96-1.95-2.93-4.88-2.93-7.81 11.72-30.27 20.51-45.9 25.39-45.9l96.68 0c4.88 0 16.6 14.65 33.2 42.97l58.59 0c2.93-6.84 6.84-13.67 21.49-40.04 20.51-35.16 46.87-71.29 64.45-74.22l313.48 0c8.79 0 18.55 9.77 30.271 29.3 12.699 18.55 22.46 38.09 29.3 56.64l11.72 28.32 83.98 0c40.039 0 73.239 14.65 101.56 42.97 28.33 28.32 42.97 61.52 42.97 101.56l0 392.579c0 40.041-14.64 75.191-42.97 103.521C939.729 897.209 906.529 910.881 866.49 910.881L866.49 910.881 866.49 910.881zM128.21 353.26c23.44 22.46 58.59 22.46 81.06 0 22.46-22.46 22.46-57.62 0-80.08-22.47-22.46-57.62-22.46-81.06 0C105.75 295.64 105.75 330.8 128.21 353.26L128.21 353.26 128.21 353.26zM745.399 350.33c-52.739-53.71-116.21-80.08-191.409-80.08-75.19 0-138.67 26.37-191.4 80.08-52.74 52.73-79.11 116.21-79.11 191.41 0 74.219 26.37 137.689 79.11 190.43 52.73 52.73 116.21 79.1 191.4 79.1 75.199 0 138.67-26.369 191.409-79.1 53.71-52.74 80.08-116.211 80.08-190.43C825.479 466.54 799.109 403.06 745.399 350.33L745.399 350.33 745.399 350.33zM684.85 671.619c-36.13 36.131-79.1 53.711-130.859 53.711-50.78 0-94.721-17.58-130.86-53.711-36.13-36.129-54.68-79.1-54.68-129.879 0-51.76 18.55-94.73 54.68-130.86 36.14-36.14 80.08-54.69 130.86-54.69 51.76 0 94.729 18.55 130.859 54.69 36.13 36.13 54.69 79.1 54.69 130.86C739.54 592.52 720.979 635.49 684.85 671.619L684.85 671.619z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
