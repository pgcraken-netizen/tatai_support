export function tasksFor(count){return [{id:'a',icon:'🍼',label:'Aのお世話',care:true},{id:'b',icon:'🧷',label:'Bのおむつ',care:true},...(count===3?[{id:'c',icon:'🤲',label:'Cの抱っこ',care:true}]:[]),{id:'meal',icon:'🍳',label:'朝ごはん',care:false},{id:'wash',icon:'🧺',label:'洗濯もの',care:false}];}
export function summarize(tasks,assign){const groups={self:[],family:[],help:[],later:[],consult:[],unassigned:[]};tasks.forEach(t=>(groups[assign[t.id]]||groups.unassigned).push(t));return groups;}
export function canAssign(task,target,adults,help){return !(task.care&&target==='later')&&!(target==='family'&&adults===1)&&!(target==='help'&&!help);}
export function compare(first,second){return ['self','family','help','later','consult'].map(key=>({key,before:first[key].length,after:second[key].length}));}
