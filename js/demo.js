const state={step:0,selected:null};
const stage=document.getElementById('stage'),progress=document.getElementById('progress'),next=document.getElementById('nextBtn'),back=document.getElementById('backBtn');
const steps=[['observe','demo.observe'],['context','demo.context'],['match','demo.match'],['action','demo.action'],['follow','demo.follow']];
const data={resource:'demo.dataResource',state:'demo.dataState',city:'demo.dataCity',need:'demo.dataNeed',actor:'demo.dataActor',action:'demo.dataAction',result:'demo.dataResult'};
function d(k){return t(data[k])}
function renderProgress(){progress.innerHTML=steps.map((s,i)=>`<div class="pstep ${i<=state.step?'done':''}"><span>${i+1}</span><small>${t(s[1])}</small></div>`).join('')}
function render(){renderProgress();back.disabled=state.step===0;back.style.opacity=state.step===0?.4:1;
const bodies=[
`<div class="live-card"><div class="live-icon">◌</div><div><span class="tag">${t('demo.signal')}</span><h3>${d('resource')}</h3><p>${t('demo.obsText')}</p></div></div><div class="data-pills"><span>Yaoundé</span><span>${d('state')}</span><span>${t('demo.available')}</span></div>`,
`<div class="context-grid"><div><span>${t('demo.resource')}</span><strong>${d('resource')}</strong></div><div><span>${t('demo.state')}</span><strong>${d('state')}</strong></div><div><span>${t('demo.location')}</span><strong>${d('city')}</strong></div><div><span>${t('demo.possibilities')}</span><strong>${t('demo.possibilitiesV')}</strong></div></div><div class="confidence"><b>${t('demo.qualification')}</b><span>${t('demo.qualificationV')}</span></div>`,
`<div class="match-layout"><div class="need-card"><span>${t('demo.need')}</span><h3>${d('need')}</h3><p>${d('actor')} · ${d('city')}</p></div><div class="match-arrow">↔</div><div class="match-card selected"><span>${t('demo.matchScore')}</span><h3>${d('resource')}</h3><p>${t('demo.matchReason')}</p><b>${t('demo.compatible')}</b></div></div>`,
`<div class="action-card"><span class="action-number">04</span><div><span class="tag">${t('demo.actionTag')}</span><h3>${d('action')}</h3><p>${t('demo.actionText')}</p></div><div class="action-status">✓ ${t('demo.confirmed')}</div></div>`,
`<div class="result-card"><div class="result-icon">↻</div><span class="tag">${t('demo.followTag')}</span><h2>${d('result')}</h2><p>${t('demo.resultText')}</p><div class="result-stats"><div><strong>80</strong><span>${t('demo.units')}</span></div><div><strong>1</strong><span>${t('demo.newUse')}</span></div><div><strong>100%</strong><span>${t('demo.tracked')}</span></div></div></div>`
];
const headings=[t('demo.h1'),t('demo.h2'),t('demo.h3'),t('demo.h4'),t('demo.h5')];
stage.innerHTML=`<div class="stage-head"><div><div class="stage-kicker">0${state.step+1} · ${t(steps[state.step][1])}</div><h2>${headings[state.step]}</h2></div></div>${bodies[state.step]}`;
next.textContent=state.step===steps.length-1?t('demo.restart'):t('demo.next');}
next.onclick=()=>{if(state.step===steps.length-1)state.step=0;else state.step++;render();window.scrollTo({top:0,behavior:'smooth'})};back.onclick=()=>{if(state.step>0)state.step--;render()};document.addEventListener('languagechange',render);render();