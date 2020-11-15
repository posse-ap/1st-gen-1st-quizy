'use strict';

const takanawa = document.getElementById('takanawa');
const takawa = document.getElementById('takawa');
const kouwa = document.getElementById('kouwa');
var result=null;

takanawa.addEventListener('click', (event)=>{
   var text = event.target.innerHTML;
   if(text === 'たかなわ'){
    setResult(1,true, 'たかなわ',takanawa,takanawa,takanawa,takanawa,);
   }else{
    setResult(1,false,'たかなわ',takanawa,takanawa,takanawa,takanawa,);
   }
}, false)
takawa.addEventListener('click', (event)=>{
    var text = event.target.innerHTML;
    console.log(text)
   if(text === 'たかなわ'){
    setResult(1,true,'たかなわ',takanawa,takawa,takanawa,takawa,);
   }else{
    setResult(1,false,'たかなわ',takanawa,takawa,takanawa,takawa,);
   }
}, false);

kouwa.addEventListener('click', (event)=>{
    var text = event.target.innerHTML;
    console.log(text)
   if(text === 'たかなわ'){
    setResult(1,true,'たかなわ',takanawa,kouwa,takanawa,kouwa,);
   }else{
    setResult(1,false,'たかなわ',takanawa,kouwa,takanawa,kouwa,);
   }
}, false);

function setResult(number,flag,text,color1,color2,fontcolor1,fontcolor2,){
    console.log('ボタンが押されました');
    if(flag===true){
        result= '正解！'
        color1.style.background = '#08B3F0';
        fontcolor1.style.color='white';
    }else{
      result ='不正解！'
      color1.style.background=  '#08B3F0';
      color2.style.background=  '#FD6647';
      fontcolor1.style.color='white';
      fontcolor2.style.color='white';
    }
    var quiz =document.getElementById('quiz'+number)
    var display =document.createElement('div')
    var display1 = document.createElement('p')
    var display2 = document.createElement('p')
    display.className='box'
    display1.className='finalanswer1'
    display2.className='finalanswer2'
    display1.textContent=result
    display2.textContent='正解は「'+ text +'」です！'
    display.appendChild(display1);
    display.appendChild(display2);
    quiz.appendChild(display);
    }


const kameido = document.getElementById('kameido')
var answer2one = document.createElement('div');
answer2one.className='finalanswer';
answer2one.innerHTML='　<strong>正解！</strong><p>　正解は「かめいど」です！';
var quiz2_already = false;
kameido.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz2_already === false){
    kameido.style.background='#08b3f0';
    kameido.style.color='white';
    document.getElementById('finalanswer2-1').appendChild(answer2one);
    quiz2_already = true;
    }
})
const kamedo = document.getElementById('kamedo')
var answer2two = document.createElement('div');
answer2two.className='finalanswer';
answer2two.innerHTML='　<strong>不正解！</strong><p>　正解は「かめいど」です！';
kamedo.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz2_already === false){
    kameido.style.background='#08b3f0';
    kamedo.style.background='#fd6647';
    kamedo.style.color='white';
    kameido.style.color='white';
    document.getElementById('finalanswer2-2').appendChild(answer2two);
    quiz2_already = true;
    }
})
const kameto = document.getElementById('kameto')
var answer2three = document.createElement('div');
answer2three.className='finalanswer';
answer2three.innerHTML='　<strong>不正解！</strong><p>　正解は「かめいど」です！';
kameto.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz2_already === false){
    kameido.style.background='#08b3f0';
    kameto.style.background='#fd6647';
    kameido.style.color='white';
    kameto.style.color='white';
    document.getElementById('finalanswer2-3').appendChild(answer2three)
    quiz2_already = true;
    }
})
const koujimachi = document.getElementById('koujimachi')
var answer3one = document.createElement('div');
answer3one.className='finalanswer';
answer3one.innerHTML='　<strong>正解！</strong><p>　正解は「こうじまち」です！';
var quiz3_already = false
koujimachi.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz3_already === false){
    koujimachi.style.background='#08b3f0';
    koujimachi.style.color='white';
    kameido.style.color='white';
    document.getElementById('finalanswer3-1').appendChild(answer3one);
    quiz3_already = true;
    }
})
const kayumachi = document.getElementById('kayumachi')
var answer3two = document.createElement('div');
answer3two.className='finalanswer';
answer3two.innerHTML='　<strong>不正解！</strong><p>　正解は「こうじまち」です！';
kayumachi.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz3_already === false){
    koujimachi.style.background='#08b3f0';
    kayumachi.style.background='#fd6647';
    koujimachi.style.color='white';
    kayumachi.style.color='white';
    document.getElementById('finalanswer3-2').appendChild(answer3two);
    quiz3_already = true;
    }
})
const okatomachi = document.getElementById('okatomachi')
var answer3three = document.createElement('div');
answer3three.className='finalanswer';
answer3three.innerHTML='　<strong>不正解！</strong><p>　正解は「おかとまち」です！';
okatomachi.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz3_already === false){
    koujimachi.style.background='#08b3f0';
    okatomachi.style.background='#fd6647';
    koujimachi.style.color='white';
    okatomachi.style.color='white';
    document.getElementById('finalanswer3-3').appendChild(answer3three)
    quiz3_already = true;
    }
})
const onarimon = document.getElementById('onarimon')
var answer4two = document.createElement('div');
answer4two.className='finalanswer';
answer4two.innerHTML='　<strong>正解！</strong><p>　正解は「おなりもん」です！';
var quiz4_already = false
onarimon.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz4_already === false){
    onarimon.style.background='#08b3f0';
    onarimon.style.color='white';
    document.getElementById('finalanswer4-2').appendChild(answer4two);
    quiz4_already = true
    }
})
const goseimon = document.getElementById('goseimon')
var answer4one = document.createElement('div');
answer4one.className='finalanswer';
answer4one.innerHTML='　<strong>不正解！</strong><p>　正解は「おなりもん」です！';
goseimon.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz4_already === false){
    onarimon.style.background='#08b3f0';
    goseimon.style.background='#fd6647';
    onarimon.style.color='white';
    goseimon.style.color='white';
    document.getElementById('finalanswer4-1').appendChild(answer4one);
    quiz4_already =true
    }
})
const okadomon = document.getElementById('okadomon')
var answer4three = document.createElement('div');
answer4three.className='finalanswer';
answer4three.innerHTML='　<strong>不正解！</strong><p>　正解は「おなりもん」です！';
okadomon.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz4_already ===false){
    onarimon.style.background='#08b3f0';
    okadomon.style.background='#fd6647';
    onarimon.style.color='white';
    okadomon.style.color='white';
    document.getElementById('finalanswer4-3').appendChild(answer4three)
    quiz4_already =true
    }
})
const todoroki = document.getElementById('todoroki')
var answer5three = document.createElement('div');
answer5three.className='finalanswer';
answer5three.innerHTML='　<strong>正解！</strong><p>　正解は「とどろき」です！';
var quiz5_already = false
todoroki.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz5_already ===false){
    todoroki.style.background='#08b3f0';
    todoroki.style.color='white';
    document.getElementById('finalanswer5-3').appendChild(answer5three);
    quiz5_already = true
    }
})
const tatariki = document.getElementById('tatariki')
var answer5two = document.createElement('div');
answer5two.className='finalanswer';
answer5two.innerHTML='　<strong>不正解！</strong><p>　正解は「たたりき」です！';
tatariki.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz5_already ===false){
    todoroki.style.background='#08b3f0';
    tatariki.style.background='#fd6647';
    todoroki.style.color='white';
    tatariki.style.color='white';
    document.getElementById('finalanswer5-2').appendChild(answer5two);
    quiz5_already = true
    }
})
const tatara = document.getElementById('tatara')
var answer5one = document.createElement('div');
answer5one.className='finalanswer';
answer5one.innerHTML='　<strong>不正解！</strong><p>　正解は「たたら」です！';
tatara.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz5_already ===false){
    todoroki.style.background='#08b3f0';
    tatara.style.background='#fd6647';
    todoroki.style.color='white';
    tatara.style.color='white';
    document.getElementById('finalanswer5-1').appendChild(answer5one)
    quiz5_already = true
    }
})
const shakuji = document.getElementById('shakuji')
var answer6three = document.createElement('div');
answer6three.className='finalanswer';
answer6three.innerHTML='　<strong>正解！</strong><p>　正解は「しゃくじい」です！';
var quiz6_already = false
shakuji.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz6_already === false){
    shakuji.style.background='#08b3f0';
    shakuji.style.color='white';
    document.getElementById('finalanswer6-3').appendChild(answer6three);
    quiz6_already = true
    }
})
const sekikoui = document.getElementById('sekikoui')
var answer6two = document.createElement('div');
answer6two.className='finalanswer';
answer6two.innerHTML='　<strong>不正解！</strong><p>　正解は「しゃくじい」です！';
sekikoui.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz6_already === false){
    shakuji.style.background='#08b3f0';
    sekikoui.style.background='#fd6647';
    sekikoui.style.color='white';
    shakuji.style.color='white';
    document.getElementById('finalanswer6-2').appendChild(answer6two);
    quiz6_already = true
    }
})
const iji = document.getElementById('iji')
var answer6one = document.createElement('div');
answer6one.className='finalanswer';
answer6one.innerHTML='　<strong>不正解！</strong><p>　正解は「いじい」です！';
iji.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz6_already === false){
    shakuji.style.background='#08b3f0';
    iji.style.background='#fd6647';
shakuji.style.color='white';
iji.style.color='white';
    document.getElementById('finalanswer6-1').appendChild(answer6one)
    quiz6_already = true
    }
})
const zoushiki = document.getElementById('zoushiki')
var answer7three = document.createElement('div');
answer7three.className='finalanswer';
answer7three.innerHTML='　<strong>正解！</strong><p>　正解は「ぞうしき」です！';
var quiz7_already = false
zoushiki.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz7_already === false){
    zoushiki.style.background='#08b3f0';
    zoushiki.style.color='white';
    document.getElementById('finalanswer7-3').appendChild(answer7three);
    quiz7_already = true
}
})
const zasshiki = document.getElementById('zasshiki')
var answer7two = document.createElement('div');
answer7two.className='finalanswer';
answer7two.innerHTML='　<strong>不正解！</strong><p>　正解は「ぞうしき」です！';
zasshiki.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz7_already === false){
    zoushiki.style.background='#08b3f0';
    zasshiki.style.background='#fd6647';
    zoushiki.style.color='white';
    zasshiki.style.color='white';
    document.getElementById('finalanswer7-2').appendChild(answer7two);
    quiz7_already = true
}
})
const zasshoku = document.getElementById('zasshoku')
var answer7one = document.createElement('div');
answer7one.className='finalanswer';
answer7one.innerHTML='　<strong>不正解！</strong><p>　正解は「ぞうしき」です！';
zasshoku.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz7_already === false){
    zoushiki.style.background='#08b3f0';
    zasshoku.style.background='#fd6647';
    zoushiki.style.color='white';
    zasshoku.style.color='white';
    document.getElementById('finalanswer7-1').appendChild(answer7one)
    quiz7_already = true
}
})
const okachimachi = document.getElementById('okachimachi')
var answer8one = document.createElement('div');
answer8one.className='finalanswer';
answer8one.innerHTML='　<strong>正解！</strong><p>　正解は「おかちまち」です！';
var quiz8_already = false
okachimachi.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz8_already === false){
    okachimachi.style.background='#08b3f0';
    okachimachi.style.color='white';
    document.getElementById('finalanswer8-1').appendChild(answer8one);
    quiz8_already = true
}
})
const goshirochou = document.getElementById('goshirochou')
var answer8two = document.createElement('div');
answer8two.className='finalanswer';
answer8two.innerHTML='　<strong>不正解！</strong><p>　正解は「おかちまち」です！';
goshirochou.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz8_already === false){
    okachimachi.style.background='#08b3f0';
    goshirochou.style.background='#fd6647';
    okachimachi.style.color='white';
    goshirochou.style.color='white';
    document.getElementById('finalanswer8-2').appendChild(answer8two);
    quiz8_already = true
}
})
const mitochou = document.getElementById('mitochou')
var answer8three= document.createElement('div');
answer8three.className='finalanswer';
answer8three.innerHTML='　<strong>不正解！</strong><p>　正解は「おかちまち」です！';
mitochou.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz8_already === false){
    okachimachi.style.background='#08b3f0';
    mitochou.style.background='#fd6647';
    okachimachi.style.color='white';
    mitochou.style.color='white';
    document.getElementById('finalanswer8-3').appendChild(answer8three)
    quiz8_already = true
}
})
const shishibone = document.getElementById('shishibone')
var answer9one = document.createElement('div');
answer9one.className='finalanswer';
answer9one.innerHTML='　<strong>正解！</strong><p>　正解は「ししぼね」です！';
var quiz9_already = false
shishibone.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz9_already === false){
    shishibone.style.background='#08b3f0';
    shishibone.style.color='white';
    document.getElementById('finalanswer9-1').appendChild(answer9one);
    quiz9_already = true
}
})
const shikone = document.getElementById('shikone')
var answer9two = document.createElement('div');
answer9two.className='finalanswer';
answer9two.innerHTML='　<strong>不正解！</strong><p>　正解は「ししぼね」です！';
shikone.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz9_already === false){
    shishibone.style.background='#08b3f0';
    shikone.style.background='#fd6647';
    shishibone.style.color='white';
    shikone.style.color='white';
    document.getElementById('finalanswer9-2').appendChild(answer9two);
    quiz9_already = true
}
})
const rokkotsu = document.getElementById('rokkotsu')
var answer9three = document.createElement('div');
answer9three.className='finalanswer';
answer9three.innerHTML='　<strong>不正解！</strong><p>　正解は「ししぼね」です！';
rokkotsu.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz9_already === false){
    shishibone.style.background='#08b3f0';
    rokkotsu.style.background='#fd6647';
    shishibone.style.color='white';
    rokkotsu.style.color='white';
    document.getElementById('finalanswer9-3').appendChild(answer9three)
    quiz9_already = true
}
})
const kogure = document.getElementById('kogure')
var answer10one = document.createElement('div');
answer10one.className='finalanswer';
answer10one.innerHTML='　<strong>正解！</strong><p>　正解は「こぐれ」です！';
var quiz10_already = false
kogure.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
        if(quiz10_already === false){
    kogure.style.background='#08b3f0';
    kogure.style.color='white';
    document.getElementById('finalanswer10-1').appendChild(answer10one);
    quiz10_already = true
}
})
const koshaku = document.getElementById('koshaku')
var answer10two = document.createElement('div');
answer10two.className='finalanswer';
answer10two.innerHTML='　<strong>不正解！</strong><p>　正解は「こぐれ」です！';
koshaku.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz10_already === false){
    kogure.style.background='#08b3f0';
    koshaku.style.background='#fd6647';
    kogure.style.color='white';
    koshaku.style.color='white';
    document.getElementById('finalanswer10-2').appendChild(answer10two);
    quiz10_already = true
}
})
const kobaku = document.getElementById('kobaku')
var answer10three = document.createElement('div');
answer10three.className='finalanswer';
answer10three.innerHTML='　<strong>不正解！</strong><p>　正解は「こぐれ」です！';
kobaku.addEventListener('click', ()=>{
    console.log('ボタンが押されました！')
    if(quiz10_already === false){
    kogure.style.background='#08b3f0';
    kobaku.style.background='#fd6647';
    kogure.style.color='white';
    kobaku.style.color='white';
    document.getElementById('finalanswer10-3').appendChild(answer10three)
    quiz10_already = true
}
})