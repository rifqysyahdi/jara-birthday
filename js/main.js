/* =============================================
   JARA BIRTHDAY WEBSITE — MAIN.JS
   ============================================= */
(function () {
  'use strict';

  // ─── CONFIG ─────────────────────────────────
  const BIRTHDAY   = new Date('2026-07-05T00:00:00');
  const ADMIN_KEY  = 'rifqy';
  const PHOTO_COUNT = 20;
  const STORY_PHOTOS = [1,2,3,4,5,6,7,8,9,10];
  const STORY_DURATION = 5000;

  const PHOTO_CAPTIONS = [
    'Senyummu, favoritku.', 'Kenangan yang berharga.', 'Aku suka momen ini.',
    'Hari yang hangat.', 'Selalu bikin aku senyum.', 'Istimewa.',
    'Momen kecil yang berarti besar.', 'Jara, dalam bingkai.', 'Aku suka foto ini.',
    'Sederhana, tapi bermakna.', 'Tak terlupakan.', 'Tepat seperti adamu.',
    'Hari yang tidak ingin aku lupakan.', 'Satu dari banyak alasan.', 'Tersenyum untukmu.',
    'Selalu ada cerita di balik ini.', 'Cantik, seperti biasa.', 'Momen favoritku.',
    'Kamu dan duniamu.', 'Untuk selalu diingat.'
  ];

  const TIMELINE = [
    { month: 'September 2025', event: 'Awal dari segalanya',          desc: '23 September 2025 — hari di mana semuanya perlahan dimulai.',                         special: false },
    { month: 'Oktober 2025',   event: 'Mulai bertukar cerita',         desc: 'Semakin sering berbicara, semakin banyak hal yang ingin aku ceritakan padamu.',         special: false },
    { month: 'November 2025',  event: 'Semakin mengenal',              desc: 'Sisi-sisi dirimu yang pelan-pelan aku temukan — dan setiap kali membuatku kagum.',      special: false },
    { month: 'Desember 2025',  event: 'Menutup tahun bersama',         desc: 'Akhir tahun yang tidak terasa seperti akhir — malah seperti awal dari sesuatu.',        special: false },
    { month: 'Januari 2026',   event: 'Harapan baru',                  desc: 'Memulai tahun dengan kamu dalam pikiranku, dan itu terasa sangat menyenangkan.',        special: false },
    { month: 'Februari 2026',  event: 'Momen kecil yang berharga',     desc: 'Bukan momen besar, tapi hal-hal kecil sehari-hari yang justru paling kuingat.',        special: false },
    { month: 'Maret 2026',     event: 'Semakin nyaman',                desc: 'Nyaman berbicara apa saja — dan itu bukan hal yang mudah aku temukan.',               special: false },
    { month: 'April 2026',     event: 'Cerita yang tak terlupakan',    desc: 'Bulan yang penuh dengan hal-hal baru yang jadi bagian dari cerita kita.',              special: false },
    { month: 'Mei 2026',       event: 'Mengumpulkan kenangan',         desc: 'Setiap hari, satu kenangan baru ditambahkan ke dalam koleksi favoritku.',             special: false },
    { month: 'Juni 2026',      event: 'Menunggu harimu',               desc: 'Countdown dimulai. Aku sudah siapkan sesuatu yang kecil — untukmu.',                  special: false },
    { month: '5 Juli 2026 🎂', event: 'Happy Birthday, Jara!',         desc: 'Dan hari ini, aku ingin kamu tahu betapa berartinya kamu. Selamat ulang tahun.',       special: true  }
  ];

  const REASONS = [
    'Aku suka senyummu.','Aku suka cara kamu bercerita.','Aku suka caramu peduli.',
    'Aku suka bagaimana kamu mengingat hal-hal kecil.','Aku suka ketika kamu tertawa.',
    'Aku suka ketika kamu bersemangat membahas sesuatu.','Aku suka suaramu.','Aku suka cara kamu hadir.',
    'Aku suka ketulusanmu.','Aku suka caramu selalu berusaha.',
    'Aku suka cara kamu menyemangati orang lain.','Aku suka ketika kamu bercerita tentang hal yang kamu sukai.',
    'Aku suka bagaimana kamu mendengarkan dengan sungguh-sungguh.','Aku suka cara kamu menghadapi masalah.',
    'Aku suka keberanianmu.','Aku suka bagaimana kamu tetap kuat.',
    'Aku suka cara kamu bercanda.','Aku suka ketika kamu tiba-tiba mengirim pesan di tengah hari.',
    'Aku suka bagaimana kamu membuat suasana jadi lebih hangat.','Aku suka cara kamu bicara soal masa depan.',
    'Aku suka matamu.','Aku suka cara kamu berterima kasih atas hal-hal kecil.',
    'Aku suka bagaimana kamu tidak pernah berhenti belajar.','Aku suka caramu menatap sesuatu yang kamu sukai.',
    'Aku suka ketika kamu merasa excited tentang sesuatu.','Aku suka cara kamu menjaga orang yang kamu sayang.',
    'Aku suka bagaimana kamu setia.','Aku suka cara kamu mengambil keputusan.',
    'Aku suka ketika kamu diam tapi matamu berbicara.','Aku suka caramu percaya pada orang lain.',
    'Aku suka bagaimana kamu tidak pernah bermuka dua.','Aku suka cara kamu merespons dengan tulus.',
    'Aku suka bagaimana kamu bisa membuat orang nyaman.','Aku suka cara kamu tersenyum saat canggung.',
    'Aku suka ketika kamu bersemangat bercerita.','Aku suka bagaimana kamu sangat genuine.',
    'Aku suka caramu menjadi diri sendiri tanpa berusaha terlihat berbeda.',
    'Aku suka ketika kamu mengingat hal kecil yang aku ceritakan.',
    'Aku suka cara kamu menjawab pertanyaan dengan jujur.','Aku suka semangatmu.',
    'Aku suka caramu menikmati hal-hal sederhana.','Aku suka ketika kamu tertawa lepas.',
    'Aku suka cara kamu merespons cerita orang lain dengan empati.','Aku suka bagaimana kamu tidak mudah menyerah.',
    'Aku suka cara kamu berkata "nggak apa-apa" dengan tulus.','Aku suka ketika kamu mengirim voice note.',
    'Aku suka bagaimana kamu bisa membuat hari biasa terasa bermakna.','Aku suka cara kamu memilih kata-kata.',
    'Aku suka ketika kamu diam-diam memperhatikan detail.','Aku suka bagaimana kamu selalu mau mengerti.',
    'Aku suka cara kamu bilang selamat pagi.','Aku suka ketika kamu cerita hal random hari ini.',
    'Aku suka bagaimana kamu tidak pernah berpura-pura.','Aku suka cara kamu bisa tetap positif.',
    'Aku suka ketika kamu tiba-tiba jadi serius.','Aku suka bagaimana kamu menghargai waktu bersama.',
    'Aku suka cara kamu melihat sisi baik dari segala hal.','Aku suka ketika kamu bercerita soal mimpimu.',
    'Aku suka bagaimana kamu tidak pernah sepenuhnya bisa diprediksi.',
    'Aku suka cara kamu hadir saat dibutuhkan.','Aku suka ketika kamu tiba-tiba berkata sesuatu yang dalam.',
    'Aku suka bagaimana kamu membuat perpisahan terasa tidak seperti perpisahan.',
    'Aku suka cara kamu mengatakan "hati-hati".','Aku suka ketika kamu bertanya balik dengan antusias.',
    'Aku suka bagaimana kamu selalu berusaha memahami.',
    'Aku suka cara kamu bilang terima kasih bahkan untuk hal kecil.',
    'Aku suka ketika kamu tertawa di saat yang tidak terduga.',
    'Aku suka bagaimana kamu bisa menjadi teman yang baik.','Aku suka cara kamu mengekspresikan dirimu.',
    'Aku suka ketika kamu bersikap hangat pada siapa pun.','Aku suka bagaimana kamu selalu menepati janjimu.',
    'Aku suka cara kamu berkembang setiap harinya.','Aku suka ketika kamu berbicara soal hal yang kamu percaya.',
    'Aku suka bagaimana kamu tahu kapan harus diam dan kapan harus bicara.',
    'Aku suka cara kamu membuat orang merasa diterima.','Aku suka ketika kamu tidak takut untuk jujur.',
    'Aku suka bagaimana kamu bisa menjadi sumber kenyamanan.',
    'Aku suka cara kamu menyadari hal-hal yang luput dari orang lain.',
    'Aku suka ketika kamu bersikap dewasa di momen yang tepat.',
    'Aku suka bagaimana kamu tidak menyimpan dendam.','Aku suka cara kamu menjalani hari dengan kesabaran.',
    'Aku suka ketika kamu setuju pada hal yang benar.','Aku suka bagaimana kamu percaya semuanya akan baik-baik saja.',
    'Aku suka cara kamu berterima kasih pada semesta.',
    'Aku suka ketika kamu bicara soal hal yang membuatmu takut tapi tetap kamu hadapi.',
    'Aku suka bagaimana kamu selalu ada bahkan hanya lewat layar.',
    'Aku suka cara kamu menceritakan kenangan lama dengan hangat.',
    'Aku suka ketika kamu berjuang diam-diam tapi tetap tersenyum.',
    'Aku suka bagaimana kamu tidak perlu validasi untuk melangkah.',
    'Aku suka cara kamu mau tumbuh bersama.',
    'Aku suka ketika kamu menjadi orang yang pertama aku pikirkan.',
    'Aku suka bagaimana kamu membuat kenangan tanpa disengaja.',
    'Aku suka cara kamu mengisi kekosongan hanya dengan kehadiranmu.',
    'Aku suka ketika kamu bilang selamat malam dengan tulus.',
    'Aku suka bagaimana kamu membuat aku percaya bahwa hal-hal baik itu nyata.',
    'Aku suka cara kamu menjadi dirimu sendiri tanpa usaha.',
    'Aku suka bagaimana kamu ada, tepat seperti adamu.',
    'Aku suka semua versi dirimu — yang kamu tunjukkan maupun yang tidak.',
    'Aku suka kamu, Jara. Sesederhana itu.'
  ];

  // ─── STATE ───────────────────────────────────
  let storyIndex   = 0;
  let storyTimer   = null;
  let lightboxIndex = 0;
  let isPlaying    = false;
  let confettiRunning = false;
  let confettiParticles = [];

  // ─── UTILS ───────────────────────────────────
  const isAdmin    = () => new URLSearchParams(location.search).get('admin') === ADMIN_KEY;
  const isBirthday = () => new Date() >= BIRTHDAY;
  const shouldShow = () => isAdmin() || isBirthday();
  const pad        = n => String(n).padStart(2,'0');
  function timeLeft(to) {
    const d = Math.max(0, to - new Date());
    return { d:Math.floor(d/864e5), h:Math.floor(d%864e5/36e5), m:Math.floor(d%36e5/6e4), s:Math.floor(d%6e4/1e3) };
  }

  // ─── STARS ───────────────────────────────────
  function initStars(id, n=150) {
    const c = document.getElementById(id); if (!c) return;
    const ctx = c.getContext('2d');
    let stars = [];
    const resize = () => { c.width=c.offsetWidth; c.height=c.offsetHeight; makeStars(); };
    const makeStars = () => {
      stars = Array.from({length:n}, () => ({
        x:Math.random()*c.width, y:Math.random()*c.height,
        r:Math.random()*1.5+0.3, o:Math.random(), d:Math.random()*.006+.002,
        dir:Math.random()>.5?1:-1
      }));
    };
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height);
      stars.forEach(s => {
        s.o+=s.d*s.dir; if(s.o>1||s.o<.1) s.dir*=-1;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,255,255,${s.o})`; ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener('resize', resize);
  }

  // ─── LOCK SCREEN ─────────────────────────────
  function initLock() {
    const el = document.getElementById('lock-screen');
    if (!el) return;
    if (shouldShow()) { el.style.display='none'; return; }
    initStars('lock-stars', 200);
    const update = () => {
      const t = timeLeft(BIRTHDAY);
      document.getElementById('ld').textContent = pad(t.d);
      document.getElementById('lh').textContent = pad(t.h);
      document.getElementById('lm').textContent = pad(t.m);
      document.getElementById('ls').textContent = pad(t.s);
    };
    update(); setInterval(update, 1000);
  }

  // ─── INTRO ───────────────────────────────────
  function initIntro() {
    const el = document.getElementById('intro-screen');
    if (!el) return;
    if (!shouldShow()) { el.style.display='none'; return; }
    initStars('stars-canvas', 220);

    const lines = [
      'Hai, Jara…',
      'Aku buat sesuatu kecil untukmu.',
      'Sesuatu yang semoga bisa membuatmu tersenyum.',
      'Selamat datang.'
    ];
    let li=0, ci=0;
    const typEl = document.getElementById('intro-typing');
    const entEl = document.getElementById('intro-enter');
    typEl.innerHTML='<span class="cursor"></span>';

    function type() {
      if (li >= lines.length) { setTimeout(()=>{ entEl.style.display='block'; },400); return; }
      const line = lines[li];
      if (ci < line.length) {
        typEl.querySelector('.cursor').insertAdjacentText('beforebegin', line[ci++]);
        setTimeout(type, 55 + Math.random()*40);
      } else {
        li++; ci=0;
        if (li < lines.length) {
          typEl.innerHTML += '<br><span class="cursor"></span>';
          setTimeout(type, 600);
        } else { type(); }
      }
    }
    setTimeout(type, 900);

    document.getElementById('enter-btn').addEventListener('click', () => {
      el.style.transition='opacity 1s'; el.style.opacity='0';
      setTimeout(() => { el.style.display='none'; showMain(); }, 1000);
    });
  }

  // ─── SHOW MAIN ───────────────────────────────
  function showMain() {
    const main = document.getElementById('main-content');
    main.classList.remove('hidden');
    requestAnimationFrame(() => {
      main.classList.add('visible');
      setTimeout(() => {
        document.getElementById('music-player').classList.remove('hidden');
        setTimeout(() => document.getElementById('music-player').classList.add('visible'), 100);
      }, 1500);
      initScrollReveal();
      initStars('cd-stars', 120);
    });
  }

  // ─── GIFT BOX ────────────────────────────────
  function initGift() {
    initStars('gift-stars', 160);
    let done=false;
    document.getElementById('gift-box').addEventListener('click', () => {
      if (done) return; done=true;
      document.getElementById('gift-box').classList.add('opened');
      spawnSparkles();
      document.getElementById('gift-hint').style.opacity='0';
      setTimeout(showHeartRain, 500);
      setTimeout(showPajero, 1200);
    });
  }

  function spawnSparkles() {
    const box = document.getElementById('gift-box');
    const r   = box.getBoundingClientRect();
    const cx  = r.left + r.width/2, cy = r.top + r.height/2;
    for (let i=0;i<14;i++) {
      const sp=document.createElement('div');
      sp.className='gift-sparkle';
      const a=(i/14)*Math.PI*2, dist=50+Math.random()*60;
      sp.style.cssText=`position:fixed;left:${cx}px;top:${cy}px;width:7px;height:7px;border-radius:50%;background:#FFD700;pointer-events:none;z-index:999;--tx:${Math.cos(a)*dist}px;--ty:${Math.sin(a)*dist}px;animation:sparkleOut .9s ease forwards`;
      document.body.appendChild(sp);
      setTimeout(()=>sp.remove(),1000);
    }
  }

  // ─── HEART RAIN ──────────────────────────────
  function showHeartRain() {
    const c = document.getElementById('heart-rain');
    const emojis = ['❤️','🤍','💛','🧡','💕','✨','⭐','💖','🌸'];
    let n=0;
    const iv = setInterval(()=>{
      if(n++>70){clearInterval(iv);return;}
      const h=document.createElement('span');
      h.className='heart-particle';
      h.textContent=emojis[Math.floor(Math.random()*emojis.length)];
      h.style.left=Math.random()*100+'vw';
      h.style.fontSize=(1+Math.random()*1.5)+'rem';
      h.style.animationDuration=(2.5+Math.random()*3)+'s';
      h.style.animationDelay=Math.random()*0.8+'s';
      c.appendChild(h);
      setTimeout(()=>h.remove(),6000);
    },75);
  }

  // ─── PAJERO SURPRISE ─────────────────────────
  function showPajero() {
    const el=document.getElementById('pajero-surprise');
    el.classList.add('active');
    document.getElementById('pajero-close').addEventListener('click',()=>{
      el.classList.remove('active');
      setTimeout(revealLetter,600);
    },{once:true});
  }

  // ─── LETTER ──────────────────────────────────
  function revealLetter() {
    const sec=document.getElementById('letter-section');
    sec.scrollIntoView({behavior:'smooth',block:'start'});
    setTimeout(()=>sec.querySelector('.letter-paper').classList.add('revealed'),900);
  }

  // ─── COUNTDOWN ───────────────────────────────
  function initCountdown() {
    const cdEl=document.getElementById('main-countdown');
    const bdEl=document.getElementById('birthday-now');
    if(!cdEl) return;
    const update=()=>{
      if(isBirthday()){
        cdEl.style.display='none';
        if(bdEl) bdEl.style.display='block';
        clearInterval(iv); return;
      }
      const t=timeLeft(BIRTHDAY);
      document.getElementById('cd-d').textContent=pad(t.d);
      document.getElementById('cd-h').textContent=pad(t.h);
      document.getElementById('cd-m').textContent=pad(t.m);
      document.getElementById('cd-s').textContent=pad(t.s);
    };
    update(); const iv=setInterval(update,1000);
  }

  // ─── TIMELINE ────────────────────────────────
  function buildTimeline() {
    const wrap=document.querySelector('.timeline'); if(!wrap) return;
    TIMELINE.forEach((item,i)=>{
      const isRight = i%2===0;
      const entry=document.createElement('div');
      entry.className='timeline-entry';
      entry.innerHTML=`
        <div class="timeline-text reveal">
          <div class="timeline-month">${item.month}</div>
          <div class="timeline-event">${item.event}</div>
          <div class="tla"></div>
          <div class="timeline-desc">${item.desc}</div>
        </div>
        <div class="timeline-dot${item.special?' special':''}"></div>
        <div style="flex:1"></div>`;
      wrap.appendChild(entry);
    });
  }

  // ─── GALLERY ─────────────────────────────────
  function buildGallery() {
    const grid=document.querySelector('.gallery-grid'); if(!grid) return;
    const rots=[-3,1,-1.5,2,-2,3,-0.5,1.5,-2.5,0.5,-3,2.5,-1,3,-2,1,-0.5,2,-1.5,1];
    for(let i=1;i<=PHOTO_COUNT;i++){
      const rot=rots[(i-1)%rots.length];
      const div=document.createElement('div');
      div.className='polaroid reveal';
      div.style.setProperty('--rot',rot+'deg');
      div.dataset.idx=i-1;
      div.innerHTML=`<img src="assets/photos/${i}.jpeg" alt="Kenangan ${i}" loading="lazy"><div class="polaroid-caption">${PHOTO_CAPTIONS[i-1]}</div>`;
      div.addEventListener('click',()=>openLightbox(i-1));
      grid.appendChild(div);
    }
  }

  // ─── LIGHTBOX ────────────────────────────────
  function openLightbox(idx){
    lightboxIndex=idx;
    document.getElementById('lightbox-img').src=`assets/photos/${idx+1}.jpeg`;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow='hidden';
  }
  function closeLightbox(){
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow='';
  }
  function lbNav(d){
    lightboxIndex=(lightboxIndex+d+PHOTO_COUNT)%PHOTO_COUNT;
    document.getElementById('lightbox-img').src=`assets/photos/${lightboxIndex+1}.jpeg`;
  }

  // ─── STORIES ─────────────────────────────────
  function buildStories() {
    const wrap=document.querySelector('.story-circles'); if(!wrap) return;
    STORY_PHOTOS.forEach((n,i)=>{
      const div=document.createElement('div');
      div.className='story-circle'; div.dataset.idx=i;
      div.innerHTML=`
        <div class="story-circle-ring">
          <img src="assets/photos/${n}.jpeg" class="story-circle-img" alt="">
        </div>
        <span class="story-circle-label">Kenangan ${i+1}</span>`;
      div.addEventListener('click',()=>openStory(i));
      wrap.appendChild(div);
    });
    // Build progress bars
    const bars=document.getElementById('story-bars'); if(!bars) return;
    bars.innerHTML='';
    STORY_PHOTOS.forEach((_,i)=>{
      bars.innerHTML+=`<div class="story-progress-bar"><div class="story-progress-fill" id="spf${i}"></div></div>`;
    });
  }

  function openStory(idx){
    storyIndex=idx;
    document.getElementById('story-viewer').classList.remove('hidden');
    document.body.style.overflow='hidden';
    renderStory();
  }
  function closeStory(){
    clearTimeout(storyTimer);
    document.getElementById('story-viewer').classList.add('hidden');
    document.body.style.overflow='';
  }
  function renderStory(){
    document.getElementById('story-img').src=`assets/photos/${STORY_PHOTOS[storyIndex]}.jpeg`;
    document.getElementById('story-num').textContent=`Kenangan ${storyIndex+1}`;
    // update circles
    document.querySelector(`.story-circle[data-idx="${storyIndex}"]`)?.classList.add('viewed');
    // progress bars
    STORY_PHOTOS.forEach((_,i)=>{
      const bar=document.getElementById(`spf${i}`); if(!bar) return;
      bar.style.transition='none';
      bar.style.width=i<storyIndex?'100%':'0';
    });
    const cur=document.getElementById(`spf${storyIndex}`);
    if(cur){
      cur.style.width='0';
      requestAnimationFrame(()=>{
        cur.style.transition=`width ${STORY_DURATION}ms linear`;
        cur.style.width='100%';
      });
    }
    clearTimeout(storyTimer);
    storyTimer=setTimeout(()=>{
      if(storyIndex<STORY_PHOTOS.length-1){ storyIndex++; renderStory(); }
      else { closeStory(); }
    },STORY_DURATION);
  }
  function storyNav(d){
    clearTimeout(storyTimer);
    storyIndex=Math.max(0,Math.min(STORY_PHOTOS.length-1,storyIndex+d));
    renderStory();
  }

  // ─── REASONS ─────────────────────────────────
  function buildReasons() {
    const grid=document.querySelector('.reasons-grid'); if(!grid) return;
    REASONS.forEach((r,i)=>{
      const card=document.createElement('div');
      card.className='reason-card reveal';
      card.innerHTML=`<div class="reason-num">${String(i+1).padStart(2,'0')}</div><div class="reason-text">${r}</div>`;
      grid.appendChild(card);
    });
  }

  // ─── CONFETTI ────────────────────────────────
  function initConfetti() {
    const canvas=document.getElementById('confetti-canvas'); if(!canvas) return;
    const ctx=canvas.getContext('2d');
    const colors=['#C9A98A','#F7F5F2','#DDD6CC','#FFD700','#E8A87C','#B7B3AD','#FFFFFF','#FF69B4'];
    const resize=()=>{ canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; };
    resize(); window.addEventListener('resize',resize);

    const launch=()=>{
      if(confettiRunning) return; confettiRunning=true;
      confettiParticles=[];
      for(let i=0;i<140;i++){
        confettiParticles.push({
          x:Math.random()*canvas.width, y:-30-Math.random()*250,
          w:7+Math.random()*9, h:4+Math.random()*6,
          color:colors[Math.floor(Math.random()*colors.length)],
          rot:Math.random()*Math.PI*2, rotS:(Math.random()-.5)*.12,
          vx:(Math.random()-.5)*2.5, vy:2.5+Math.random()*4, op:1
        });
      }
      anim();
    };
    const anim=()=>{
      if(!confettiParticles.length){confettiRunning=false;return;}
      ctx.clearRect(0,0,canvas.width,canvas.height);
      confettiParticles=confettiParticles.filter(p=>p.y<canvas.height+60&&p.op>0);
      confettiParticles.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotS;
        if(p.y>canvas.height-120) p.op-=.015;
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
        ctx.globalAlpha=p.op; ctx.fillStyle=p.color;
        ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore();
      });
      requestAnimationFrame(anim);
    };
    new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)launch();}),{threshold:.2})
      .observe(document.getElementById('final-section'));
  }

  // ─── MUSIC ───────────────────────────────────
  function initMusic() {
    const btn=document.getElementById('music-toggle');
    const audio=document.getElementById('bg-music');
    const player=document.getElementById('music-player');
    if(!btn||!audio) return;

    btn.addEventListener('click',()=>{
      if(isPlaying){ audio.pause(); isPlaying=false; btn.textContent='♪'; player.classList.remove('playing'); }
      else { audio.play().then(()=>{ isPlaying=true; btn.textContent='⏸'; player.classList.add('playing'); }).catch(()=>{}); }
    });
    audio.addEventListener('timeupdate',()=>{
      if(!audio.duration) return;
      document.getElementById('music-progress-fill').style.width=(audio.currentTime/audio.duration*100)+'%';
    });
    // Auto-play on first user interaction
    document.addEventListener('click',()=>{
      if(!isPlaying) audio.play().then(()=>{ isPlaying=true; btn.textContent='⏸'; player.classList.add('playing'); }).catch(()=>{});
    },{once:true});
  }

  // ─── SCROLL REVEAL ───────────────────────────
  function initScrollReveal() {
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('revealed'); obs.unobserve(e.target); }
    }),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal,.timeline-text,.polaroid,.reason-card').forEach(el=>obs.observe(el));
  }

  // ─── PARALLAX ────────────────────────────────
  function initParallax() {
    window.addEventListener('scroll',()=>{
      const y=window.scrollY;
      const gift=document.querySelector('.gift-wrapper');
      if(gift) gift.style.transform=`translateY(${y*0.15}px)`;
    },{passive:true});
  }

  // ─── BIND EVENTS ─────────────────────────────
  function bindEvents() {
    document.getElementById('lightbox-close')?.addEventListener('click',closeLightbox);
    document.getElementById('lightbox-prev')?.addEventListener('click',()=>lbNav(-1));
    document.getElementById('lightbox-next')?.addEventListener('click',()=>lbNav(1));
    document.getElementById('lightbox')?.addEventListener('click',e=>{if(e.target===e.currentTarget)closeLightbox();});
    document.addEventListener('keydown',e=>{
      if(document.getElementById('lightbox').classList.contains('active')){
        if(e.key==='ArrowLeft') lbNav(-1);
        if(e.key==='ArrowRight') lbNav(1);
        if(e.key==='Escape') closeLightbox();
      }
      if(!document.getElementById('story-viewer').classList.contains('hidden')){
        if(e.key==='ArrowLeft') storyNav(-1);
        if(e.key==='ArrowRight') storyNav(1);
        if(e.key==='Escape') closeStory();
      }
    });
    document.getElementById('story-close')?.addEventListener('click',closeStory);
    document.querySelector('.story-tap-prev')?.addEventListener('click',()=>storyNav(-1));
    document.querySelector('.story-tap-next')?.addEventListener('click',()=>storyNav(1));
  }

  // ─── MAIN INIT ───────────────────────────────
  document.addEventListener('DOMContentLoaded',()=>{
    initLock();
    initIntro();
    buildTimeline();
    buildGallery();
    buildStories();
    buildReasons();
    initGift();
    initCountdown();
    initConfetti();
    initMusic();
    initParallax();
    bindEvents();
  });

})();
