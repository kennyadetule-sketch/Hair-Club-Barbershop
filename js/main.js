(() => {
"use strict";
const business=window.BUSINESS;
const page=document.body.dataset.page||location.pathname.split("/").pop()||"index.html";
const qs=(s,r=document)=>r.querySelector(s),qsa=(s,r=document)=>[...r.querySelectorAll(s)];
const escapeHtml=(v="")=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const phoneHref=`tel:${business.phone.replace(/[^\d+]/g,"")}`;
const whatsappHref=`https://wa.me/${business.phone.replace(/\D/g,"")}`;

function setTheme(){
  const root=document.documentElement;
  const map={primary:"--primary-color",secondary:"--secondary-color",accent:"--accent-color",background:"--background",surface:"--surface",text:"--text-primary",muted:"--text-secondary"};
  Object.entries(business.colors).forEach(([k,v])=>{if(map[k])root.style.setProperty(map[k],v)});
}
function hydrateBusinessInfo(){
  qsa("[data-business-name]").forEach(e=>e.textContent=business.name);
  qsa("[data-business-tagline]").forEach(e=>e.textContent=business.tagline);
  qsa("[data-business-description]").forEach(e=>e.textContent=business.description);
  qsa("[data-business-phone]").forEach(e=>{if(e.tagName==="A")e.href=phoneHref;else e.textContent=business.displayPhone});
  qsa("[data-business-email]").forEach(e=>{if(e.tagName==="A")e.href=`mailto:${business.email}`;else e.textContent=business.email});
  qsa("[data-business-address]").forEach(e=>e.textContent=business.address);
  qsa("[data-business-logo]").forEach(e=>{e.src=business.logo;e.alt=`${business.name} logo`});
  qsa("[data-business-maps]").forEach(e=>e.href=business.googleMaps);
  qsa("[data-business-facebook]").forEach(e=>{if(business.facebook)e.href=business.facebook;else e.hidden=true});
  qsa("[data-business-instagram]").forEach(e=>{if(business.instagram)e.href=business.instagram;else e.hidden=true});
  qsa("[data-business-book]").forEach(e=>e.href=business.bookingUrl);
  qsa("[data-business-whatsapp]").forEach(e=>e.href=whatsappHref);
}
function renderHours(){
  const c=qs("[data-hours]");if(!c)return;
  c.innerHTML=Object.entries(business.openingHours).map(([d,h])=>`<div class="hours-row"><strong>${escapeHtml(d)}</strong><span class="${h.toLowerCase()==="closed"?"closed":""}">${escapeHtml(h)}</span></div>`).join("");
}
function renderServices(){
  const c=qs("[data-services]");if(!c)return;
  const limit=Number(c.dataset.limit||business.services.length);
  c.innerHTML=business.services.slice(0,limit).map(s=>`<article class="service-card reveal"><div class="service-card__icon" aria-hidden="true">${escapeHtml(s.icon)}</div><h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.description)}</p><div class="service-card__bottom"><span class="service-card__price">${escapeHtml(s.price)}</span><a href="contact.html" aria-label="Ask about ${escapeHtml(s.name)}">Ask us →</a></div></article>`).join("");
}
function renderGallery(){
  const c=qs("[data-gallery]");if(!c)return;
  c.innerHTML=business.gallery.map((g,i)=>`<button class="gallery-item reveal" type="button" data-gallery-index="${i}" aria-label="Open ${escapeHtml(g.title)} in gallery"><img src="${escapeHtml(g.src)}" alt="${escapeHtml(g.alt)}" loading="${i===0?"eager":"lazy"}" onerror="this.src='images/fallback.svg'"><span class="gallery-item__caption"><strong>${escapeHtml(g.title)}</strong><br><small>${escapeHtml(g.caption)}</small></span></button>`).join("");
  qsa("[data-gallery-index]",c).forEach(b=>b.addEventListener("click",()=>openLightbox(Number(b.dataset.galleryIndex))));
}
let lightboxIndex=0;const lightbox=qs("#lightbox");
function openLightbox(i){if(!lightbox)return;lightboxIndex=(i+business.gallery.length)%business.gallery.length;updateLightbox();lightbox.classList.add("is-open");lightbox.setAttribute("aria-hidden","false");document.body.classList.add("menu-open");qs("#lightbox-close")?.focus()}
function closeLightbox(){if(!lightbox)return;lightbox.classList.remove("is-open");lightbox.setAttribute("aria-hidden","true");document.body.classList.remove("menu-open")}
function updateLightbox(){if(!lightbox)return;const g=business.gallery[lightboxIndex];qs("#lightbox-image").src=g.src;qs("#lightbox-image").alt=g.alt;qs("#lightbox-caption").textContent=`${g.title} — ${g.caption}`}
function initLightbox(){
  if(!lightbox)return;
  qs("#lightbox-close")?.addEventListener("click",closeLightbox);
  qs("#lightbox-prev")?.addEventListener("click",()=>{lightboxIndex=(lightboxIndex-1+business.gallery.length)%business.gallery.length;updateLightbox()});
  qs("#lightbox-next")?.addEventListener("click",()=>{lightboxIndex=(lightboxIndex+1)%business.gallery.length;updateLightbox()});
  lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});
  document.addEventListener("keydown",e=>{if(!lightbox.classList.contains("is-open"))return;if(e.key==="Escape")closeLightbox();if(e.key==="ArrowLeft")qs("#lightbox-prev")?.click();if(e.key==="ArrowRight")qs("#lightbox-next")?.click()});
}
function initNavigation(){
  const toggle=qs("#nav-toggle"),panel=qs("#nav-panel"),overlay=qs("#nav-overlay"),close=qs("#nav-close");if(!toggle||!panel)return;
  const desktop=window.matchMedia("(min-width: 1100px)");
  const setOpen=open=>{
    panel.classList.toggle("is-open",open);
    overlay?.classList.toggle("is-open",open);
    document.body.classList.toggle("menu-open",open);
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
    panel.setAttribute("aria-hidden",String(desktop.matches?false:!open));
    if(open)close?.focus();else if(!desktop.matches)toggle.focus();
  };
  const syncViewport=()=>{
    if(desktop.matches){
      panel.classList.remove("is-open");overlay?.classList.remove("is-open");
      document.body.classList.remove("menu-open");panel.setAttribute("aria-hidden","false");
      toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation");
    }else if(!panel.classList.contains("is-open"))panel.setAttribute("aria-hidden","true");
  };
  toggle.addEventListener("click",()=>setOpen(!panel.classList.contains("is-open")));
  close?.addEventListener("click",()=>setOpen(false));
  overlay?.addEventListener("click",()=>setOpen(false));
  qsa(".nav-links a",panel).forEach(a=>a.addEventListener("click",()=>{if(!desktop.matches)setOpen(false)}));
  desktop.addEventListener("change",syncViewport);syncViewport();
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&panel.classList.contains("is-open"))setOpen(false)});
  qsa(".nav-links a").forEach(a=>{if(a.getAttribute("href")===page)a.setAttribute("aria-current","page")});
}
function renderFaq(){
  const c=qs("[data-faq]");if(!c)return;
  c.innerHTML=business.faq.map((f,i)=>`<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${i}"><span>${escapeHtml(f.question)}</span><span aria-hidden="true">+</span></button><div class="faq-answer" id="faq-answer-${i}"><div><p>${escapeHtml(f.answer)}</p></div></div></article>`).join("");
  qsa(".faq-question").forEach(b=>b.addEventListener("click",()=>{const item=b.closest(".faq-item"),open=item.classList.contains("is-open");qsa(".faq-item.is-open").forEach(x=>{x.classList.remove("is-open");qs(".faq-question",x)?.setAttribute("aria-expanded","false")});if(!open){item.classList.add("is-open");b.setAttribute("aria-expanded","true")}}));
}
function renderReviews(){
  const c=qs("[data-reviews]");if(!c)return;
  c.innerHTML=business.testimonials.map(t=>`<article class="review-card reveal"><div class="stars" aria-label="${t.rating} out of 5 stars">${"★".repeat(t.rating)}<span aria-hidden="true">${"☆".repeat(5-t.rating)}</span></div><blockquote>“${escapeHtml(t.text)}”</blockquote><cite>${escapeHtml(t.name)}</cite></article>`).join("");
}
function initContactForm(){
  const form=qs("#contact-form");if(!form)return;const status=qs("#form-status");
  const error=(f,m)=>{qs(`[data-error-for="${f.name}"]`).textContent=m;f.setAttribute("aria-invalid","true")};
  const clear=f=>{qs(`[data-error-for="${f.name}"]`).textContent="";f.removeAttribute("aria-invalid")};
  form.addEventListener("submit",e=>{e.preventDefault();status.textContent="";status.className="form-status";qsa("input,textarea",form).forEach(clear);let ok=true;
    const name=qs("#name"),email=qs("#email"),phone=qs("#phone"),subject=qs("#subject"),message=qs("#message");
    if(name.value.trim().length<2){error(name,"Please enter your name.");ok=false}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){error(email,"Please enter a valid email address.");ok=false}
    if(phone.value.trim()&&!/^[+()\d\s.-]{7,}$/.test(phone.value.trim())){error(phone,"Please enter a valid phone number.");ok=false}
    if(subject.value.trim().length<3){error(subject,"Please enter a subject.");ok=false}
    if(message.value.trim().length<10){error(message,"Please enter at least 10 characters.");ok=false}
    if(!ok){status.textContent="Please correct the highlighted fields and try again.";status.className="form-status is-error";qs('[aria-invalid="true"]',form)?.focus();return}
    status.textContent="This form is not connected to the shop’s inbox yet. Please call (210) 943-0044 or use the WhatsApp link to contact Hair Club.";status.className="form-status is-error";
  });
}
function initScrollTop(){const b=qs("#scroll-top");if(!b)return;const u=()=>b.classList.toggle("is-visible",scrollY>500);addEventListener("scroll",u,{passive:true});u();b.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}))}
function initReveal(){
  const els=qsa(".reveal");if(!("IntersectionObserver"in window)){els.forEach(e=>e.classList.add("is-visible"));return}
  const o=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");o.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>o.observe(e));
}
function setCurrentYear(){qsa("[data-year]").forEach(e=>e.textContent=new Date().getFullYear())}
function initMap(){const m=qs("[data-map]");if(m)m.src=`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`}
function initSeoAndSchema(){
  const siteUrl=business.siteUrl||"";
  if(siteUrl){const canonical=qs('link[rel="canonical"]');if(canonical)canonical.href=`${siteUrl.replace(/\/$/,"")}/${page==="index.html"?"":page}`;const ogUrl=qs('meta[property="og:url"]');if(ogUrl)ogUrl.content=canonical?.href||siteUrl}
  const schema={"@context":"https://schema.org","@type":"Barbershop","name":business.name,"description":business.description,"telephone":business.phone,"email":business.email,"address":{"@type":"PostalAddress","streetAddress":business.streetAddress,"addressLocality":business.city,"addressRegion":business.region,"postalCode":business.postalCode,"addressCountry":business.country},"sameAs":[business.facebook,business.instagram].filter(Boolean),"url":siteUrl||location.href};
  const s=document.createElement("script");s.type="application/ld+json";s.dataset.businessSchema="true";s.textContent=JSON.stringify(schema);document.head.appendChild(s);
}
function init(){setTheme();hydrateBusinessInfo();renderHours();renderServices();renderGallery();renderFaq();renderReviews();initNavigation();initLightbox();initContactForm();initScrollTop();initReveal();initMap();setCurrentYear();initSeoAndSchema()}
document.addEventListener("DOMContentLoaded",init);
})();