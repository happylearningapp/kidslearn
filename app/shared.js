/* ═══════════════════════════════════════
   shared.js  –  Reyan's Learning World
   Include in every page:
   <script src="shared.js"></script>
═══════════════════════════════════════ */

/* ── SETTINGS (localStorage) ── */
var FONT_KEY  = 'rlw_font';
var SIZE_KEY  = 'rlw_size';
var SND_KEY   = 'rlw_sound';   // 'on' | 'off'  (defaults to ON if unset)
var VOICE_KEY    = 'rlw_voice';    // voice name string
var KID_NAME_KEY = 'rlw_kid_name'; // child's display name
var KID_AGE_KEY  = 'rlw_kid_age';  // child's age (2-12)

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

  // restore sound toggle on this page  (default ON if never set)
  var snd = isSoundOn();
  var tog = document.getElementById('sndTog');
  if (tog) tog.checked = snd;
  updateSoundBtn();
  loadKidInfo(); // pre-populate name/age inputs in drawer
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
function toggleSettings(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  var d = document.getElementById('sdrawer');
  d.classList.toggle('open');
  if (d.classList.contains('open')) { populateVoices(); loadKidInfo(); }
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
  // 1. User-saved voice preference
  var saved = localStorage.getItem(VOICE_KEY);
  if (saved) {
    var sv = vs.find(function(v) { return v.name === saved; });
    if (sv) { _bv = sv; return sv; }
  }
  // 2. Built-in preference list (matches allowed voice list)
  var pref = ['Samantha', 'Karen', 'Moira', 'Daniel', 'Tessa', 'Flo', 'Reed'];
  for (var i = 0; i < pref.length; i++) {
    var v = vs.find(function(x) { return x.name === pref[i]; });
    if (v) { _bv = v; return v; }
  }
  // 3. Any en-US, then any voice
  _bv = vs.find(function(v) { return v.lang === 'en-US'; }) || vs[0];
  return _bv;
}
window.speechSynthesis.onvoiceschanged = function() { _bv = null; populateVoices(); };

function isSoundOn() {
  var val = localStorage.getItem(SND_KEY);
  return val === null ? true : val === 'on'; // default ON for first-time visitors
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
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
html{-webkit-text-size-adjust:100%;text-size-adjust:100%;}
body{font-family:var(--f);font-size:var(--b);min-height:100vh;background:#FFFDE7;overflow-x:hidden;max-width:100vw;}
input,select,button{-webkit-appearance:none;appearance:none;}
.submain,.subbody{-webkit-overflow-scrolling:touch;}
.back-btn{display:none!important;}
.gear-btn{display:none!important;}
.sdrawer{position:fixed;top:66px;right:12px;z-index:999;background:#fff;border-radius:18px;padding:16px 18px;box-shadow:0 8px 32px rgba(0,0,0,.18);width:298px;max-width:calc(100vw - 24px);max-height:calc(100vh - 82px);overflow-y:auto;display:none;}
.sdrawer.open{display:block;}
.sdrawer h3{font-size:var(--md);font-weight:900;color:#555;margin-bottom:12px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;}
.srow{display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-wrap:nowrap;}
.slbl{font-size:var(--sm);font-weight:800;color:#888;min-width:48px;flex-shrink:0;text-transform:uppercase;}
.sbtns{display:flex;flex-wrap:nowrap;gap:5px;flex:1;}
.fbtn,.zbtn{flex:1;padding:6px 4px;border-radius:12px;border:2px solid #eee;background:#f9f9f9;cursor:pointer;font-size:var(--sm);font-weight:600;color:#666;text-align:center;white-space:nowrap;}
.fbtn.active,.zbtn.active{background:#FF6B6B;color:#fff;border-color:#FF6B6B;}
.subhdr{padding:0 10px;height:58px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px;box-shadow:0 4px 14px rgba(0,0,0,.15);}
.subhdr h1,.subhdr p,.sndbr{display:none;}
.subbody{display:flex;min-height:calc(100vh - 58px);}
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
/* Shared nav buttons — use .nav-row as container */
.nav-row{display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap;}
.prvbtn,.nxtbtn{display:inline-block;min-width:100px;padding:10px 20px;border-radius:20px;border:none;background:linear-gradient(135deg,#FF6B6B,#FF8E53);color:#fff;font-family:var(--f);font-size:var(--md);font-weight:700;cursor:pointer;text-align:center;transition:opacity .18s,transform .15s;-webkit-tap-highlight-color:transparent;}
.prvbtn:hover,.nxtbtn:hover{opacity:.86;transform:scale(1.04);}
.shufbtn{display:inline-block;min-width:100px;padding:10px 20px;border-radius:20px;border:none;background:linear-gradient(135deg,#6A1B9A,#1565C0);color:#fff;font-family:var(--f);font-size:var(--md);font-weight:700;cursor:pointer;text-align:center;transition:opacity .18s,transform .15s;-webkit-tap-highlight-color:transparent;}
.shufbtn:hover{opacity:.86;transform:scale(1.04);}
.shuf-row{text-align:center;margin-bottom:8px;}
.shuf-toggle{padding:7px 20px;border-radius:20px;border:2px solid #ddd;background:#f5f5f5;font-family:var(--f);font-size:var(--sm);font-weight:800;cursor:pointer;transition:all .22s;color:#888;-webkit-tap-highlight-color:transparent;}
.shuf-toggle.on{background:linear-gradient(135deg,#E91E63,#FF8E53);color:#fff;border-color:transparent;}
.scorescreen{background:#fff;border-radius:20px;padding:30px 20px;box-shadow:0 5px 20px rgba(0,0,0,.12);text-align:center;}
.rbtn{padding:12px 28px;border-radius:20px;border:none;background:linear-gradient(135deg,#6A1B9A,#E91E63);color:#fff;font-family:var(--f);font-size:var(--md);font-weight:700;cursor:pointer;margin-top:12px;}
@keyframes popIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes pgFadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
.hdr-home{display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.22);color:#fff;font-size:1.2rem;text-decoration:none;font-weight:900;flex-shrink:0;-webkit-tap-highlight-color:transparent;}
.hdr-home:active{background:rgba(255,255,255,.42);}
.hdr-title{flex:1;color:#fff;font-size:1.05rem;font-weight:900;font-family:var(--f);text-align:center;line-height:1.2;}
.hdr-title small{display:block;font-size:.6rem;font-weight:700;opacity:.75;letter-spacing:.6px;text-transform:uppercase;margin-top:1px;}
.hdr-right{display:flex;align-items:center;gap:6px;flex-shrink:0;}
.hdr-snd-btn{display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.22);border:none;font-size:1.3rem;cursor:pointer;transition:all .2s cubic-bezier(.34,1.56,.64,1);-webkit-tap-highlight-color:transparent;}
.hdr-snd-btn:active{transform:scale(.88);}
.hdr-snd-btn.muted{background:rgba(0,0,0,.28);opacity:.75;}
.hdr-gear{display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.22);border:none;color:#fff;font-size:1.1rem;cursor:pointer;-webkit-tap-highlight-color:transparent;}
.hdr-gear:active{background:rgba(255,255,255,.42);}
.vsel{flex:1;padding:7px 10px;border-radius:12px;border:2px solid #eee;font-family:var(--f);font-size:var(--sm);background:#f9f9f9;color:#555;cursor:pointer;min-width:0;}
.vsel:focus{border-color:#FF6B6B;outline:none;}
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
    </div></div>
    <hr style="border:none;border-top:1px solid #f0f0f0;margin:10px 0 8px">
    <div class="srow">
      <span class="slbl">&#128100; Name</span>
      <input type="text" id="kidNameInp" class="vsel" placeholder="Child's name…"
        maxlength="20" autocomplete="off" oninput="saveKidName(this.value)"/>
    </div>
    <div class="srow" style="align-items:flex-start;">
      <span class="slbl" style="padding-top:4px;">&#127874; Age</span>
      <div id="ageBtns" class="sbtns" style="flex-wrap:wrap;gap:6px;flex:1;"></div>
    </div>
    <p style="font-size:.6rem;color:#bbb;text-align:center;margin-top:6px">
      &#128274; Stored on this device only &mdash; never sent anywhere
    </p>`;
  document.body.insertBefore(drawer, gear.nextSibling);
}

/* ── COMPACT PAGE HEADER (reads data-page-* from <body>) ── */
function injectPageHeader() {
  var body = document.body;
  var title = body.getAttribute('data-page-title');
  if (!title) return; // home page – no subhdr needed
  var sub      = body.getAttribute('data-page-sub')      || '';
  var gradient = body.getAttribute('data-page-gradient') || 'linear-gradient(135deg,#FF6B6B,#FF8E53)';
  var backUrl  = body.getAttribute('data-page-back')     || 'home.html';

  var inner =
    '<a class="hdr-home" href="' + backUrl + '">&#8592;</a>' +
    '<div class="hdr-title">' + title + '<small>' + sub + '</small></div>' +
    '<div class="hdr-right">' +
      '<input type="checkbox" id="sndTog" style="display:none"/>' +
      '<button id="sndIconBtn" class="hdr-snd-btn" onclick="toggleSoundBtn()" title="Sound">&#128266;</button>' +
      '<button class="hdr-gear" onclick="toggleSettings(event)" title="Settings">&#9881;</button>' +
    '</div>';

  // Find and reuse existing header div, or create new one
  var hdr = document.querySelector('.subhdr') || document.querySelector('.gkhdr');
  if (hdr) {
    hdr.className = 'subhdr';
    // If already populated by inline script on first paint, skip re-injection
    if (hdr.querySelector('.hdr-home')) return;
    hdr.style.cssText = 'background:' + gradient;
    hdr.innerHTML = inner;
  } else {
    hdr = document.createElement('div');
    hdr.className = 'subhdr';
    hdr.style.cssText = 'background:' + gradient;
    hdr.innerHTML = inner;
    document.body.insertBefore(hdr, document.body.firstChild);
  }
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

/* ── SOUND ICON BUTTON (compact header) ── */
function toggleSoundBtn() {
  var on = !isSoundOn();
  saveSound(on);
  var tog = document.getElementById('sndTog');
  if (tog) tog.checked = on;
  if (!on) window.speechSynthesis.cancel();
  updateSoundBtn();
}
function updateSoundBtn() {
  var btn = document.getElementById('sndIconBtn');
  if (!btn) return;
  var on = isSoundOn();
  btn.innerHTML = on ? '&#128266;' : '&#128263;';
  btn.classList.toggle('muted', !on);
  btn.title = on ? 'Sound On \u2013 tap to mute' : 'Muted \u2013 tap to unmute';
}

/* ── VOICE SELECTION ── */
function setVoice(name) {
  localStorage.setItem(VOICE_KEY, name);
  _bv = null; // clear cache so getBV() re-reads saved value
  // Play a quick test so user can hear the chosen voice
  spkForce('Hello! This is your new voice.');
}

/* Allowed voice names (exact match against v.name) */
var ALLOWED_VOICES = ['Aman','Daniel','Eddy','Flo','Karen','Moira','Reed','Rishi','Samantha','Shelley','Tara','Tessa'];

function populateVoices() {
  var sel = document.getElementById('voiceSel');
  if (!sel) return;
  var vs = window.speechSynthesis.getVoices();
  if (!vs.length) return; // voices not ready yet – voiceschanged will retry

  // Strip parenthetical suffixes like "(Enhanced)", "(Premium)" to get base name
  function baseName(n) { return n.replace(/\s*\(.*?\)\s*/g, '').trim(); }

  // Keep ONLY voices whose base name is in the allowed list — no fallback
  var list = vs.filter(function(v) {
    return ALLOWED_VOICES.indexOf(baseName(v.name)) !== -1;
  });

  if (!list.length) {
    sel.innerHTML = '<option value="">— voices loading… —</option>';
    return;
  }

  // Sort to match the order in ALLOWED_VOICES
  list.sort(function(a, b) {
    return ALLOWED_VOICES.indexOf(baseName(a.name)) - ALLOWED_VOICES.indexOf(baseName(b.name));
  });

  var saved = localStorage.getItem(VOICE_KEY);
  if (!saved) { var bv = getBV(); if (bv) saved = bv.name; }

  sel.innerHTML = list.map(function(v) {
    return '<option value="' + v.name.replace(/"/g, '&quot;') + '"'
      + (v.name === saved ? ' selected' : '') + '>'
      + baseName(v.name)
      + '</option>';
  }).join('');
}

/* ── KID INFO (name + age) ── */
function saveKidName(name) {
  if (name && name.trim()) localStorage.setItem(KID_NAME_KEY, name.trim());
  else localStorage.removeItem(KID_NAME_KEY);
  if (typeof onKidInfoSaved === 'function') onKidInfoSaved(); // home page hook
}

function saveKidAge(age, btn) {
  localStorage.setItem(KID_AGE_KEY, String(age));
  document.querySelectorAll('.abtn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  if (typeof onKidInfoSaved === 'function') onKidInfoSaved();
}

function loadKidInfo() {
  var ni = document.getElementById('kidNameInp');
  if (ni) ni.value = localStorage.getItem(KID_NAME_KEY) || '';
  var ab = document.getElementById('ageBtns');
  if (!ab) return;
  var saved = localStorage.getItem(KID_AGE_KEY) || '';
  ab.innerHTML = '';
  for (var a = 2; a <= 6; a++) {
    var b = document.createElement('button');
    b.className = 'zbtn abtn';
    b.textContent = a;
    if (String(a) === saved) b.classList.add('active');
    (function(age, btn) {
      btn.onclick = function() { saveKidAge(age, btn); };
    })(a, b);
    ab.appendChild(b);
  }
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

/* ── Inject CSS immediately (before first paint) to prevent FOUC ── */
injectSharedCSS();

/* ── Apply saved font/size NOW (before body renders) to prevent reflow shake ── */
/* document.documentElement is always available even in <head> scripts.         */
(function() {
  var f = localStorage.getItem('rlw_font');
  var s = localStorage.getItem('rlw_size');
  if (f) document.documentElement.style.setProperty('--f', f);
  if (s) document.documentElement.style.setProperty('--b', s);
})();

/* ── AUTO-INIT on DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', function() {
  injectGear();
  injectPageHeader();
  loadSettings();
  initGear();
  initSoundToggle();
  populateVoices();               // try immediately (desktop Chrome)
  setTimeout(populateVoices, 400); // retry – Android/iOS deliver voices async
});
