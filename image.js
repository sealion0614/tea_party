let audio=document.getElementById("tea-party-audio");
let player=document.getElementById("player");
let input=document.getElementById("time-jump");

const images=[
    { t: 0,    src: "part1/1-1.png" },
    { t: 2.954,  src: "part1/1-2.png" },
    { t: 5.230,  src: "part1/1-3.png" },
    { t: 8.1,  src: "" },
    { t: 10.072, src: "part1/1-4.png" },
    { t: 19.7, src: "part1/1-5.png" },
    { t: 29.273, src: "part1/2-1.png" },
    { t: 31.651, src: "part1/2-2.png" },
    { t: 34.072, src: "part1/2-3.png" },
    { t: 37.965, src: "" },
    { t: 38.901, src: "part1/2-4.png" },
    { t: 43.753, src: "part1/2-5.png" },
    { t: 44.281, src: "part1/2-6.png" },
    { t: 44.891, src: "part1/2-7.png" },
    { t: 45.503, src: "part1/2-8.png" },
    { t: 46.117, src: "part1/2-9.png" },
    { t: 46.734, src: "part1/2-10.png" },
    { t: 47.265, src: "part1/2-11.png" },
    { t: 48.196, src: "" },
    { t: 48.481, src: "part1/3-1.png" },
    { t: 52.850, src: "part1/3-2.png" },
    { t: 58.030, src: "part1/3-3.png" },
    { t: 62.275, src: "part1/3-4.png" },
    { t: 64.127, src: "part1/3-5.png" },
    { t: 66.686, src: "" },
    { t: 67.744, src: "part1/3-6.png" },
    { t: 77.301, src: "part1/3-7.png" },
    { t: 81.557, src: "part1/3-8.png" },
    { t: 83, src: "part1/3-9.png" },
];
const sources=images.map(i=>i.src).filter(Boolean);
const preloaded=[];
const ready=Promise.all(
    sources.map(src=>{
        const img=new Image();
        img.src=src;
        preloaded.push(img);
        return img.decode().catch(()=>{});
    })
);
audio.style.visibility="hidden";
ready.then(()=>{
    audio.style.visibility="visible";
});
const effects=[
    {
        start:34.072,duration:37.965-34.072,hold:false,
        keyframes:[
            {transform:"translate(0,0) scale(1,1)",easing:"ease"},
            {transform:"translate(-30%,0) scale(2,2)",easing:"ease"}
        ]
    },
    {
        start:38.901,duration:42-38.901,hold:true,
        keyframes:[
            {transform:"scale(2,2)",easing:"ease"},
            {transform:"scale(1,1)",easing:"ease"}
        ]
    },
    {
        start:67.744,duration:5,hold:true,
        keyframes:[
            {transform:"scale(1,1) translate(0,0)",easing:"ease"},
            {transform:"scale(2,2) translate(20%,-20%)",easing:"ease"},
            {transform:"scale(2,2) translate(-20%,10%)",easing:"ease"},
            {transform:"scale(1,1) translate(0,0)",easing:"ease"},
        ]
    },
    {
        start:72.096,duration:0.5,hold:true,
        keyframes:[
            {transform:"rotate(0) scale(1,1)"},
            {transform:"rotate(90deg) scale(3,3)"},
            {transform:"rotate(180deg) scale(1,1)"},
        ]
    },
    {
        start:72.596,duration:77.301-72.596,hold:true,
        keyframes:[
            {transform:"rotate(180deg) scale(1,1) translate(0,0)",easing:"ease"},
            {transform:"rotate(180deg) scale(3,3) translate(0,-20%)",easing:"ease"},
            {transform:"rotate(180deg) scale(3,3) translate(-10%,-30%)",easing:"ease"},
            {transform:"rotate(180deg) scale(1,1) translate(0,0)",easing:"ease"},
        ]
    },
];
effects.forEach(e=>{
    if(e.hold){
        const next=images.find(im=>im.t>e.start);
        e.end=next?next.t:Infinity;
    }
    else{
        e.end=Infinity;
    }
})
const anm=effects.map(e=>{
    const a=player.animate(e.keyframes,{
        duration:e.duration*1000,
        fill:e.hold?"forwards":"none",
        easing:"linear",
    });
    a.pause();
    return a;
})

let shownIndex=-2;

function render(){
    const t=audio.currentTime;
    let idx=-1;
    for(let i=0;i<images.length;i++){
        if(t>=images[i].t){
            idx=i;
        }
    }
    if(idx!==shownIndex){
        shownIndex=idx;
        let src="";
        if(idx>=0){
            src=images[idx].src;
        }
        player.style.backgroundImage=src?`url(${src})`:"none";
    }

    anm.forEach((a,i)=>{
        if(t>=effects[i].end){
            a.currentTime=-1;
        }
        else{
            a.currentTime=(t-effects[i].start)*1000;
        }
    })
}

function loop(){
    render();
    if(!audio.paused) requestAnimationFrame(loop);
}

audio.addEventListener("play",()=>{
    requestAnimationFrame(loop);
    requestAnimationFrame(loopTitle);
});

["seeking","seeked","pause","ratechange","timeupdate","ended"].forEach(ev=>audio.addEventListener(ev,()=>{
    render();
    renderTitle();
}));

render();

document.addEventListener("keydown",e=>{
    if(e.key=="a"){
        console.log(audio.currentTime.toFixed(3));
    }
});

input.addEventListener("keydown",e=>{
    if(e.key=="Enter"){
        audio.currentTime=Number(input.value);
        input.value="";
        render();
    }
});