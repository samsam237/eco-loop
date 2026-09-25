document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.getElementById("materialGrid"), detail=document.getElementById("materialDetail");
 function renderMaterials(){
   const lang=getLang();
   grid.innerHTML="";
   materials.forEach((m,i)=>{
     const b=document.createElement("button"); b.className="material-btn"+(i===0?" active":""); b.innerHTML=`<span style="color:var(--green);font-size:20px">${m.icon}</span><br>${lang==="en"?m.nameEn:m.name}`;
     b.onclick=()=>{document.querySelectorAll(".material-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");detail.innerHTML=`<strong>${lang==="en"?m.nameEn:m.name}</strong><p>${lang==="en"?m.descEn:m.desc}</p>`}; grid.appendChild(b);
   });
   const m=materials[0]; detail.innerHTML=`<strong>${lang==="en"?m.nameEn:m.name}</strong><p>${lang==="en"?m.descEn:m.desc}</p>`;
 }
 renderMaterials();
 document.addEventListener("languagechange",renderMaterials);
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
 document.querySelectorAll("[data-count]").forEach(el=>{
   const target=+el.dataset.count,duration=1000,start=performance.now();
   function tick(now){let p=Math.min((now-start)/duration,1);el.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(tick)}
   const co=new IntersectionObserver(es=>{if(es[0].isIntersecting){requestAnimationFrame(tick);co.disconnect()}},{threshold:.5});co.observe(el);
 });
});