const $=s=>document.querySelector(s);
const el=(t,h)=>{const e=document.createElement(t);e.innerHTML=h;return e};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

NAV.forEach((n,i)=>$("#navlinks").append(el("li",`<a href="#${NAV_IDS[i]}">${n}</a>`)));
$("#footNav").innerHTML=NAV.map((n,i)=>`<li><a href="#${NAV_IDS[i]}">${n}</a></li>`).join("");

const socHTML=[["GitHub",SITE.github],["LinkedIn",SITE.linkedin],["Email",SITE.email&&"mailto:"+SITE.email]]
  .filter(s=>s[1]).map(([n,u])=>`<li><a href="${esc(u)}" ${n!=="Email"?'target="_blank" rel="noopener"':""}>${n}</a></li>`).join("");
$("#social").innerHTML=socHTML;$("#footSocial").innerHTML=socHTML;
if(SITE.cv)$("#cv").href=SITE.cv;else $("#cv").remove();

$("#facts").innerHTML=FACTS.map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join("");
$("#skillsList").innerHTML=Object.entries(SKILLS).map(([k,v])=>`<div class="skill-row reveal"><h3>${k}</h3><ul class="tags">${v.map(s=>`<li>${s}</li>`).join("")}</ul></div>`).join("");
$("#projectList").innerHTML=PROJECTS.map(p=>`<article class="proj reveal"><h3>${p.name}</h3><p>${p.desc}</p><ul class="tags">${p.tech.map(t=>`<li>${t}</li>`).join("")}</ul><div class="links"><a href="${esc(p.repo||SITE.github)}" target="_blank" rel="noopener">${p.repo?"GitHub repository":"GitHub profile"}</a>${p.demo?`<a href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo</a>`:""}</div></article>`).join("");
$("#researchBox").innerHTML=`<article class="research reveal"><h3>${RESEARCH.title}</h3><p class="muted">${RESEARCH.desc}</p><dl>${RESEARCH.meta.map(([a,b])=>`<dt>${a}</dt><dd>${b}</dd>`).join("")}</dl>${RESEARCH.paper?`<a class="btn" href="${esc(RESEARCH.paper)}">Read paper</a>`:""}</article>`;
$("#timeline").innerHTML=EXPERIENCE.map(e=>`<li class="reveal"><h3>${e.title}</h3><time>${e.date}</time><p>${e.text}</p></li>`).join("");
$("#certs").innerHTML=CERTS.map(c=>`<li><span>${c.name}</span><span class="badge">${c.status}</span></li>`).join("");
$("#interests").innerHTML=INTERESTS.map(i=>`<div class="int reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${i.icon}"/></svg><div><h3>${i.name}</h3><p>${i.text}</p></div></div>`).join("");
$("#clist").innerHTML=[["Email",SITE.email?`<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`:"Not added yet"],["GitHub",`<a href="${SITE.github}" target="_blank" rel="noopener">github.com/sauravgaudel</a>`],["LinkedIn",SITE.linkedin?`<a href="${esc(SITE.linkedin)}" target="_blank" rel="noopener">Profile</a>`:"Not added yet"],["Location",SITE.location]].map(([a,b])=>`<li><span>${a}</span>${b}</li>`).join("");
$("#year").textContent=new Date().getFullYear();

const nav=$("#nav"),menu=$("#menu"),burger=$("#burger"),totop=$("#totop");
burger.onclick=()=>burger.setAttribute("aria-expanded",menu.classList.toggle("open"));
menu.addEventListener("click",e=>{if(e.target.tagName==="A"){menu.classList.remove("open");burger.setAttribute("aria-expanded",false)}});
addEventListener("scroll",()=>{nav.classList.toggle("scrolled",scrollY>10);totop.classList.toggle("show",scrollY>600)},{passive:true});
totop.onclick=()=>scrollTo({top:0});

const links=[...document.querySelectorAll("#navlinks a")];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>{
  const on=a.getAttribute("href")==="#"+e.target.id;a.classList.toggle("active",on);on?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}),{rootMargin:"-45% 0px -50% 0px"});
NAV_IDS.forEach(id=>so.observe(document.getElementById(id)));

const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");ro.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(n=>ro.observe(n));

$("#form").addEventListener("submit",e=>{
  e.preventDefault();const f=e.target;let ok=true;
  [...f.elements].filter(x=>x.name).forEach(x=>{
    const err=x.parentElement.querySelector(".err");let m="";
    if(!x.value.trim())m="This field is required.";
    else if(x.name==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x.value))m="Enter a valid email address.";
    err.textContent=m;x.setAttribute("aria-invalid",!!m);if(m)ok=false});
  if(!ok)return;
  if(!SITE.email){$("#formNote").textContent="No email address has been added to this site yet, so the message can't be sent.";return}
  const body=`${f.message.value}\n\nFrom: ${f.name.value} <${f.email.value}>`;
  location.href=`mailto:${SITE.email}?subject=${encodeURIComponent(f.subject.value)}&body=${encodeURIComponent(body)}`;
});
