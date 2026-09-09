/* 홈 화면에 앱으로 추가하기 — 모든 학습앱이 공유하는 스크립트
 *
 * 안드로이드(크롬·삼성인터넷) : 브라우저가 설치 가능하다고 알려주면 우리가 만든 버튼을 띄운다
 * 아이폰(사파리)              : 설치 API가 없어서 "공유 → 홈 화면에 추가" 안내만 보여준다
 * 이미 설치해서 실행 중이면     : 아무것도 띄우지 않는다
 *
 * 각 앱 화면은 건드리지 않는다. 아래쪽에 작은 띠 하나만 잠깐 떴다가, 닫으면 다시 안 뜬다.
 */
(function () {
  'use strict';

  // ---------- 서비스워커 (오프라인) ----------
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* 안 되면 그냥 온라인 전용으로 */ });
    });
  }

  // ---------- 상황 판별 ----------
  var ua = navigator.userAgent;
  var installed = window.matchMedia('(display-mode: standalone)').matches ||
                  window.matchMedia('(display-mode: fullscreen)').matches ||
                  navigator.standalone === true;
  var isIOS = /iP(hone|ad|od)/.test(ua) ||
              (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);   // 아이패드는 맥으로 위장한다
  var iosOtherBrowser = /CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);            // 사파리 아니면 추가 못 함
  var dismissKey = 'pwa-hide:' + location.pathname;

  if (installed) return;
  try { if (localStorage.getItem(dismissKey)) return; } catch (e) { /* 저장 못 해도 계속 */ }

  var deferred = null;   // 안드로이드 설치 프롬프트
  var bar = null;

  // ---------- 띠 만들기 ----------
  var onPress = null;   // 버튼을 누르면 할 일 (도중에 바뀔 수 있다)

  function build(msg, btnLabel, handler) {
    if (bar) return;
    onPress = handler;
    var css = document.createElement('style');
    css.textContent =
      // left/right 를 같이 주고 margin:auto 로 가운데 정렬한다.
      // left:50% 만 주면 너비를 화면 절반으로만 잡아서 글자가 줄줄이 접힌다.
      '#pwaBar{position:fixed;left:12px;right:12px;bottom:14px;margin:0 auto;' +
      'width:-moz-fit-content;width:fit-content;max-width:460px;' +
      'transform:translateY(160%);' +
      'z-index:2147483000;display:flex;align-items:center;gap:10px;box-sizing:border-box;' +
      'padding:10px 12px 10px 14px;border-radius:14px;' +
      'background:#1e293b;color:#fff;' +
      'font-family:"Segoe UI Variable","Segoe UI","Noto Sans KR",sans-serif;font-size:13.5px;line-height:1.45;' +
      'box-shadow:0 10px 30px rgba(15,23,42,.35);' +
      'transition:transform .28s cubic-bezier(.22,1,.36,1);}' +
      '#pwaBar.on{transform:translateY(0);}' +
      '#pwaBar .pwtx{flex:1;min-width:0;}' +
      '#pwaBar button{flex-shrink:0;font:inherit;cursor:pointer;border:0;border-radius:9px;}' +
      '#pwaBar .pwgo{background:#6366f1;color:#fff;font-weight:700;padding:7px 13px;}' +
      '#pwaBar .pwgo:hover{background:#818cf8;}' +
      '#pwaBar .pwx{background:transparent;color:#94a3b8;padding:6px 8px;font-size:15px;line-height:1;}' +
      '#pwaBar .pwx:hover{color:#fff;}' +
      '@media print{#pwaBar{display:none!important;}}';
    document.head.appendChild(css);

    bar = document.createElement('div');
    bar.id = 'pwaBar';
    var t = document.createElement('div');
    t.className = 'pwtx';
    t.textContent = msg;
    var go = document.createElement('button');
    go.className = 'pwgo';
    go.textContent = btnLabel;
    var x = document.createElement('button');
    x.className = 'pwx';
    x.textContent = '✕';
    x.setAttribute('aria-label', '닫기');

    go.addEventListener('click', function () { if (onPress) onPress(t, go); });
    x.addEventListener('click', close);

    bar.appendChild(t); bar.appendChild(go); bar.appendChild(x);
    document.body.appendChild(bar);
    setTimeout(function () { if (bar) bar.classList.add('on'); }, 30);
  }

  function close() {
    if (!bar) return;
    bar.classList.remove('on');
    setTimeout(function () { if (bar && bar.parentNode) bar.parentNode.removeChild(bar); bar = null; }, 300);
    try { localStorage.setItem(dismissKey, '1'); } catch (e) {}
  }

  // ---------- 안드로이드 ----------
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    setTimeout(function () {
      build('홈 화면에 앱으로 추가할까요?', '설치', function () {
        if (!deferred) return;
        deferred.prompt();
        deferred.userChoice.then(function () { deferred = null; close(); });
      });
    }, 2500);
  });

  window.addEventListener('appinstalled', function () {
    deferred = null;
    close();
  });

  // ---------- 아이폰 ----------
  if (isIOS && !iosOtherBrowser) {
    setTimeout(function () {
      build('홈 화면에 앱으로 추가할까요?', '방법', function (textEl, goEl) {
        textEl.textContent = '화면 아래 공유 버튼(⬆︎ 모양)을 누르고 «홈 화면에 추가»를 고르면 돼요';
        goEl.textContent = '알겠어요';
        onPress = close;
      });
    }, 2500);
  }
})();
