(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)})({2:function(){function a(a){g.setAttribute('disabled',!0),d.style.display='inline',c.innerHTML='',b.innerHTML='';const f=new window.MsBingSpeechService(h);f.start().then(()=>{console.log('service started'),b.innerHTML+='service started<br/>',f.on('turn.start',()=>b.innerHTML+='turn.start<br/>'),f.on('speech.startDetected',()=>b.innerHTML+='speech.startDetected<br/>'),f.on('speech.endDetected',()=>b.innerHTML+='speech.endDetected<br/>'),f.on('speech.phrase',()=>b.innerHTML+='speech.phrase<br/>'),f.on('recognition',(a)=>{'Success'===a.RecognitionStatus&&(console.log(a),c.innerHTML+=`<p>${a.DisplayText}</p>`)}),f.on('close',()=>{g.removeAttribute('disabled'),d.style.display='none',b.innerHTML+='recognizer stopped<br/>[end]'}),f.on('turn.end',()=>{f.stop(),c.innerHTML+='[end]',b.innerHTML+='turn.end<br/>'});const e=new FileReader;e.addEventListener('loadend',(a)=>{console.log('sound file loaded:',a.currentTarget.result),b.innerHTML+='audio file loaded</br>',f.sendFile(a.currentTarget.result)}),e.readAsArrayBuffer(a)}).catch((a)=>console.error('could not start service:',a))}const b=document.querySelector('#log'),c=document.querySelector('#messages'),d=document.querySelector('#spinner'),e=document.querySelector('form'),f=e.querySelector('input[type="text"]'),g=e.querySelector('input[type="submit"]'),h={format:'simple',language:'en-US',subscriptionKey:'',debug:!0};e.addEventListener('submit',(b)=>{b.preventDefault(),h.subscriptionKey=f.value,fetch('future-of-flying.wav').then((a)=>a.blob()).then((b)=>a(b))})}});