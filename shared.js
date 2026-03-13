/* ═══════════════════════════════════════
   shared.js  –  Reyan's Learning World
   Include in every page:
   <script src="shared.js"></script>
═══════════════════════════════════════ */

/* ── SETTINGS (localStorage) ── */
var FONT_KEY  = 'rlw_font';
var SIZE_KEY  = 'rlw_size';
var SND_KEY   = 'rlw_sound'; // 'on' | 'off'

function loadSettings() {
  var f = localStorage.getItem(FONT_KEY) || 'Nunito,sans-serif';
  var s = localStorage.getItem(SIZE_KEY) || '1.1rem';
  document.documentElement.style.setProperty('--f', f);
  document.documentElement.style.setProperty('--b', s);

  // mark active buttons
  document.querySelectorAll('.fbtn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-font') === f);
  });
  document.querySelectorAll('.zbtn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-size') === s);
  });

  // restore sound toggle on this page
  var snd = localStorage.getItem(SND_KEY) === 'on';
  var tog = document.getElementById('sndTog');
  if (tog) tog.checked = snd;
}

function setFont(f, btn) {
  localStorage.setItem(FONT_KEY, f);
  document.documentElement.style.setProperty('--f', f);
  document.querySelectorAll('.fbtn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
}

function setSize(s, btn) {
  localStorage.setItem(SIZE_KEY, s);
  document.documentElement.style.setProperty('--b', s);
  document.querySelectorAll('.zbtn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
}

function saveSound(on) {
  localStorage.setItem(SND_KEY, on ? 'on' : 'off');
}

/* ── GEAR DRAWER ── */
function toggleSettings() {
  document.getElementById('sdrawer').classList.toggle('open');
}
function initGear() {
  var gear = document.getElementById('gearBtn');
  if (!gear) return;
  gear.onclick = toggleSettings;
  document.addEventListener('click', function(e) {
    var d = document.getElementById('sdrawer');
    if (d && d.classList.contains('open') && !d.contains(e.target) && e.target !== gear) {
      d.classList.remove('open');
    }
  });
}

/* ── SPEECH ── */
var _bv = null;

function getBV() {
  if (_bv) return _bv;
  var vs = window.speechSynthesis.getVoices();
  if (!vs.length) return null;
  var pref = ['Google US English', 'Samantha', 'Karen', 'Moira'];
  for (var i = 0; i < pref.length; i++) {
    var v = vs.find(function(x) { return x.name === pref[i]; });
    if (v) { _bv = v; return v; }
  }
  _bv = vs.find(function(v) { return v.lang === 'en-US'; }) || vs[0];
  return _bv;
}
window.speechSynthesis.onvoiceschanged = function() { _bv = null; };

function isSoundOn() {
  return localStorage.getItem(SND_KEY) === 'on';
}

function _doSpeak(text, rate, pitch) {
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(text);
  var v = getBV(); if (v) u.voice = v;
  u.lang = 'en-US';
  u.rate  = rate  || 0.82;
  u.pitch = pitch || 1.1;
  u.volume = 1;
  window.speechSynthesis.speak(u);
}

function spk(t) {
  if (!isSoundOn()) return;
  _doSpeak(t, 0.82, 1.1);
}

function spkSeq(arr) {
  if (!isSoundOn()) return;
  window.speechSynthesis.cancel();
  arr.forEach(function(t, i) {
    var u = new SpeechSynthesisUtterance(t);
    var v = getBV(); if (v) u.voice = v;
    u.lang = 'en-US';
    u.rate  = i === 0 ? 0.72 : 0.82;
    u.pitch = i === 0 ? 1.25 : 1.1;
    u.volume = 1;
    window.speechSynthesis.speak(u);
  });
}

/* always speaks (for Read Aloud buttons) */
function spkForce(t, rate, pitch) {
  _doSpeak(t, rate || 0.75, pitch || 1.1);
}

/* stop sound when page loses focus or user navigates */
document.addEventListener('visibilitychange', function() {
  if (document.hidden) window.speechSynthesis.cancel();
});
window.addEventListener('pagehide', function() {
  window.speechSynthesis.cancel();
});
window.addEventListener('blur', function() {
  window.speechSynthesis.cancel();
});

/* ── SUBTAB SWITCH (used by all section pages) ── */
function sw(prefix, tab, color) {
  window.speechSynthesis.cancel(); // stop sound on tab switch
  document.querySelectorAll('.sec').forEach(function(s) {
    s.classList.toggle('active', s.id === prefix + '-' + tab);
  });
  document.querySelectorAll('.stab').forEach(function(b) {
    var fn = b.getAttribute('onclick') || '';
    var on = fn.indexOf("'" + tab + "'") > -1;
    b.classList.toggle('active', on);
    b.style.background = on ? color : '';
    b.style.color = on ? '#fff' : '';
  });
}

/* ── SHARED CSS (injected into <head>) ── */
var SHARED_CSS = `
:root { --f:'Nunito',sans-serif; --b:1.1rem;
  --sm:calc(var(--b)*.78); --md:calc(var(--b)*.88);
  --lg:calc(var(--b)*1.15); --xl:calc(var(--b)*1.5);
  --xxl:calc(var(--b)*2.2); --hero:calc(var(--b)*2.8); }
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:var(--f);font-size:var(--b);min-height:100vh;background:#FFFDE7;overflow-x:hidden;}
.back-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 16px;border-radius:30px;border:none;background:rgba(255,255,255,.93);color:#FF6B6B;font-family:var(--f);font-size:var(--md);font-weight:700;cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,.12);position:fixed;top:12px;left:12px;z-index:999;}
.gear-btn{position:fixed;top:12px;right:12px;z-index:1000;width:40px;height:40px;border-radius:50%;border:none;background:#fff;box-shadow:0 3px 12px rgba(0,0,0,.15);cursor:pointer;font-size:1.3rem;display:flex;align-items:center;justify-content:center;}
.sdrawer{position:fixed;top:60px;right:12px;z-index:999;background:#fff;border-radius:18px;padding:18px 20px;box-shadow:0 8px 30px rgba(0,0,0,.15);min-width:280px;display:none;}
.sdrawer.open{display:block;}
.sdrawer h3{font-size:var(--md);font-weight:900;color:#555;margin-bottom:12px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;}
.srow{display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap;}
.slbl{font-size:var(--sm);font-weight:800;color:#888;min-width:60px;text-transform:uppercase;}
.sbtns{display:flex;flex-wrap:wrap;gap:6px;}
.fbtn,.zbtn{padding:5px 12px;border-radius:14px;border:2px solid #eee;background:#f9f9f9;cursor:pointer;font-size:var(--sm);font-weight:600;color:#666;}
.fbtn.active,.zbtn.active{background:#FF6B6B;color:#fff;border-color:#FF6B6B;}
.subhdr{padding:44px 16px 12px;text-align:center;box-shadow:0 4px 14px rgba(0,0,0,.15);}
.subhdr h1{font-size:var(--xl);color:#fff;font-weight:900;}
.subhdr p{font-size:var(--sm);color:rgba(255,255,255,.85);margin-top:3px;}
.sndbr{display:flex;justify-content:center;align-items:center;gap:8px;margin-top:8px;}
.sndlbl{font-size:var(--sm);font-weight:bold;color:#fff;}
.tog{position:relative;width:50px;height:25px;cursor:pointer;}
.tog input{opacity:0;width:0;height:0;}
.togsl{position:absolute;inset:0;background:rgba(255,255,255,.35);border-radius:25px;transition:.3s;}
.togsl::before{content:'';position:absolute;width:19px;height:19px;left:3px;top:3px;background:#fff;border-radius:50%;transition:.3s;box-shadow:0 1px 4px rgba(0,0,0,.3);}
.tog input:checked+.togsl{background:#4CAF50;}
.tog input:checked+.togsl::before{transform:translateX(25px);}
.subbody{display:flex;min-height:calc(100vh - 95px);}
.stabs{width:108px;min-width:108px;background:#fff;box-shadow:3px 0 10px rgba(0,0,0,.07);overflow-y:auto;padding:8px 4px;}
.stab{display:flex;align-items:center;gap:5px;width:100%;padding:7px 5px;border-radius:11px;border:none;background:transparent;cursor:pointer;font-family:var(--f);font-size:.68rem;font-weight:700;color:#555;text-align:left;margin-bottom:2px;transition:all .15s;}
.stab:hover{background:#f5f5f5;color:#FF6B6B;}
.stab.active{color:#fff;box-shadow:0 3px 9px rgba(0,0,0,.2);}
.stabico{font-size:.9rem;min-width:16px;text-align:center;}
.submain{flex:1;padding:12px;overflow-y:auto;}
.sec{display:none;max-width:660px;margin:0 auto;}
.sec.active{display:block;}
@media(max-width:600px){.stabs{width:80px;min-width:80px;}.stab{font-size:.62rem;padding:5px 3px;}}
.bigbox{border-radius:22px;padding:16px 14px 12px;margin-bottom:12px;text-align:center;box-shadow:0 5px 20px rgba(0,0,0,.12);}
.bigchar{font-size:calc(var(--b)*4);font-weight:900;color:#fff;line-height:1;}
.bigsub{font-size:var(--xl);color:#fff;opacity:.92;margin-top:4px;}
.selgrid{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin-bottom:12px;}
.selbtn{padding:5px 11px;border-radius:11px;border:none;background:#fff;color:#333;font-weight:700;font-size:var(--md);cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.12);transition:all .2s;font-family:var(--f);min-width:36px;text-align:center;}
.selbtn.active{color:#fff;transform:scale(1.1);}
.cgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;}
.crd{background:#fff;border-radius:14px;padding:9px 4px 7px;text-align:center;box-shadow:0 3px 9px rgba(0,0,0,.08);cursor:pointer;transition:transform .17s;}
.crd:hover{transform:translateY(-3px) scale(1.04);}
.crdem{font-size:calc(var(--b)*2.2);display:block;margin-bottom:3px;}
.crdlbl{font-size:calc(var(--b)*.68);font-weight:700;color:#333;line-height:1.3;}
.cntbox{background:#fff;border-radius:17px;padding:14px;min-height:80px;display:flex;flex-wrap:wrap;gap:7px;justify-content:center;align-items:center;box-shadow:0 3px 11px rgba(0,0,0,.08);margin-bottom:11px;}
.cntem{font-size:calc(var(--b)*2.5);animation:popIn .3s ease forwards;opacity:0;}
.zeromsg{font-size:var(--lg);color:#aaa;text-align:center;width:100%;}
.infogrid{display:grid;grid-template-columns:repeat(2,1fr);gap:9px;}
.infocrd{background:#fff;border-radius:15px;padding:12px 10px;box-shadow:0 3px 9px rgba(0,0,0,.08);display:flex;align-items:center;gap:9px;cursor:pointer;transition:transform .17s;}
.infocrd:hover{transform:scale(1.02);}
.infoem{font-size:calc(var(--b)*1.9);min-width:36px;text-align:center;}
.infokey{font-size:calc(var(--b)*.6);color:#aaa;font-weight:700;text-transform:uppercase;}
.infoval{font-size:var(--md);font-weight:700;color:#333;margin-top:1px;}
.wgrd2{display:grid;grid-template-columns:repeat(2,1fr);gap:9px;margin-bottom:12px;}
.wcrd2{background:#fff;border-radius:15px;padding:12px 10px;box-shadow:0 3px 9px rgba(0,0,0,.08);display:flex;align-items:center;gap:10px;cursor:pointer;transition:transform .17s;}
.wcrd2:hover{transform:scale(1.02);}
.wem2{font-size:1.9rem;min-width:34px;text-align:center;}
.wtitle{font-size:var(--md);font-weight:900;margin-bottom:2px;}
.wdesc{font-size:var(--sm);color:#777;}
.oppgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:9px;}
.opppair{background:#fff;border-radius:15px;padding:11px 7px;box-shadow:0 3px 9px rgba(0,0,0,.08);display:flex;align-items:center;justify-content:center;gap:7px;cursor:pointer;transition:transform .17s;}
.opppair:hover{transform:scale(1.03);}
.oppside{text-align:center;flex:1;}
.oppem{font-size:calc(var(--b)*1.9);display:block;}
.oppword{font-size:calc(var(--b)*.68);font-weight:700;margin-top:2px;}
.scorebar{background:#fff;border-radius:12px;padding:8px 14px;margin-bottom:12px;font-size:var(--md);font-weight:700;color:#555;box-shadow:0 2px 8px rgba(0,0,0,.08);display:flex;align-items:center;gap:8px;}
.ibox{background:#fff;border-radius:20px;padding:20px;box-shadow:0 5px 20px rgba(0,0,0,.1);margin-bottom:14px;}
.iq{font-size:var(--lg);font-weight:900;color:#333;text-align:center;margin-bottom:16px;}
.achc{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:14px;}
.cbtn{padding:12px 22px;border-radius:16px;border:3px solid #eee;background:#f9f9f9;font-family:var(--f);font-size:var(--xl);font-weight:900;cursor:pointer;transition:all .2s;min-width:58px;}
.cbtn:hover{border-color:#FF6B6B;transform:scale(1.08);}
.cbtn.correct{background:#4CAF50;color:#fff;border-color:#4CAF50;animation:popIn .3s ease;}
.cbtn.wrong{background:#FF6B6B;color:#fff;border-color:#FF6B6B;}
.rmsg{text-align:center;font-size:var(--lg);font-weight:900;color:#333;min-height:26px;}
.nxtbtn{display:block;margin:12px auto 0;padding:10px 26px;border-radius:20px;border:none;background:linear-gradient(135deg,#FF6B6B,#FF8E53);color:#fff;font-family:var(--f);font-size:var(--md);font-weight:700;cursor:pointer;}
.scorescreen{background:#fff;border-radius:20px;padding:30px 20px;box-shadow:0 5px 20px rgba(0,0,0,.12);text-align:center;}
.rbtn{padding:12px 28px;border-radius:20px;border:none;background:linear-gradient(135deg,#6A1B9A,#E91E63);color:#fff;font-family:var(--f);font-size:var(--md);font-weight:700;cursor:pointer;margin-top:12px;}
@keyframes popIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
`;

function injectSharedCSS() {
  var style = document.createElement('style');
  style.textContent = SHARED_CSS;
  document.head.insertBefore(style, document.head.firstChild);
}

/* ── GEAR HTML (injected into body) ── */
function injectGear() {
  var gear = document.createElement('button');
  gear.className = 'gear-btn';
  gear.id = 'gearBtn';
  gear.innerHTML = '&#9881;';
  document.body.insertBefore(gear, document.body.firstChild);

  var drawer = document.createElement('div');
  drawer.className = 'sdrawer';
  drawer.id = 'sdrawer';
  drawer.innerHTML = `
    <h3>&#9881; Settings</h3>
    <div class="srow"><span class="slbl">Font</span><div class="sbtns">
      <button class="fbtn" data-font="Nunito,sans-serif" onclick="setFont('Nunito,sans-serif',this)">Nunito</button>
      <button class="fbtn" data-font="Poppins,sans-serif" onclick="setFont('Poppins,sans-serif',this)">Poppins</button>
      <button class="fbtn" data-font="Georgia,serif" onclick="setFont('Georgia,serif',this)">Georgia</button>
    </div></div>
    <div class="srow"><span class="slbl">Size</span><div class="sbtns">
      <button class="zbtn" data-size="0.9rem"  onclick="setSize('0.9rem',this)">S</button>
      <button class="zbtn" data-size="1rem"    onclick="setSize('1rem',this)">M</button>
      <button class="zbtn" data-size="1.1rem"  onclick="setSize('1.1rem',this)">L</button>
      <button class="zbtn" data-size="1.25rem" onclick="setSize('1.25rem',this)">XL</button>
    </div></div>`;
  document.body.insertBefore(drawer, gear.nextSibling);
}

/* ── SOUND TOGGLE WIRE-UP ── */
function initSoundToggle() {
  var tog = document.getElementById('sndTog');
  if (!tog) return;
  tog.checked = isSoundOn();
  tog.addEventListener('change', function() {
    saveSound(this.checked);
    if (!this.checked) window.speechSynthesis.cancel();
  });
}

/* ── CARD BUILDERS (shared helpers) ── */
function mcard(em, lbl, col) {
  var safe = lbl.replace(/'/g, "&#39;");
  return '<div class="crd" style="border:3px solid ' + col + '33" onclick="spk(\'' + safe + '\')">'
    + '<span class="crdem">' + em + '</span>'
    + '<div class="crdlbl">' + lbl + '</div></div>';
}
function sg(arr, col, id) {
  document.getElementById(id).innerHTML = arr.map(function(x) {
    return mcard(x[1], x[0], col);
  }).join('');
}
function bInf(arr, id, col) {
  document.getElementById(id).innerHTML = arr.map(function(d) {
    var sv = d.v.replace(/'/g, "&#39;");
    return '<div class="infocrd" style="border:3px solid ' + col + '33" onclick="spk(\'' + d.k + '. ' + sv + '\')">'
      + '<div class="infoem">' + d.e + '</div>'
      + '<div><div class="infokey">' + d.k + '</div><div class="infoval">' + d.v + '</div></div></div>';
  }).join('');
}
function bWide(arr, id) {
  document.getElementById(id).innerHTML = arr.map(function(h) {
    var sd = h.d.replace(/'/g, "&#39;");
    return '<div class="wcrd2" style="border:3px solid ' + h.c + '44" onclick="spk(\'' + h.n + '. ' + sd + '\')">'
      + '<span class="wem2">' + h.e + '</span>'
      + '<div><div class="wtitle" style="color:' + h.c + '">' + h.n + '</div>'
      + '<div class="wdesc">' + h.d + '</div></div></div>';
  }).join('');
}
function aS(cls, idx, col) {
  document.querySelectorAll('.' + cls).forEach(function(b, i) {
    var on = i === idx;
    b.classList.toggle('active', on);
    b.style.background  = on ? col : '#fff';
    b.style.color       = on ? '#fff' : '#333';
    b.style.boxShadow   = on ? '0 4px 12px ' + col + '88' : '0 2px 6px rgba(0,0,0,.12)';
  });
}

/* ── AUTO-INIT on DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', function() {
  injectSharedCSS();
  injectGear();
  loadSettings();
  initGear();
  initSoundToggle();
});
