let subTitle=document.getElementById("sub-title");
const subTitleUpdateSettings=[];
const regular={
    fontSize:"3cqw",
    fontWeight:"bolder",
    top:"90%",
    left:"0",
    color:"oklch(0.2321 0.0192 166.45)",
}
createSubTitle=(st,et,cont,style)=>{
    const str=document.createElement("div");
    subTitle.appendChild(str);
    str.style.position="absolute";
    str.innerHTML=cont;
    str.classList.add("hid");
    Object.assign(str.style,style);
    subTitleUpdateSettings.push({st,et,str});
}
updateSubTitle=()=>{
    subTitleUpdateSettings.forEach(s=>{
        if(s.st<audio.currentTime&&s.et>audio.currentTime){
        s.str.classList.remove("hid");
    }
    else{
        s.str.classList.add("hid");
    }
    })
}
renderTitle=()=>{
    updateSubTitle();
}
loopTitle=()=>{
    renderTitle();
    if(!audio.paused){
        requestAnimationFrame(loopTitle);
    }
}
createSubTitle(10.072,19.7,`と<br>あ<br>る`,{
    lineHeight:"1",
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"10%",
    left:"40%",
    color:"oklch(0.5476 0.0957 166.45)",
    opacity:"0.5",
});
createSubTitle(10.072,19.7,`一<br>家<br>の`,{
    lineHeight:"1",
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"15%",
    left:"25%",
    color:"oklch(0.5476 0.0957 166.45)",
    opacity:"0.5",
});
createSubTitle(10.072,19.7,`御<br>茶<br>会<br>議`,{
    lineHeight:"1",
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"20%",
    left:"10%",
    color:"oklch(0.5476 0.0957 166.45)",
    opacity:"0.5",
});
createSubTitle(29.273,32.986,`ぱっと深く深い奇妙で苦い夢から覚める`,regular);
createSubTitle(34.080,38.330,`頬を伝う汗、気分が良いとはとても言えないな`,regular);
createSubTitle(38.330,38.948,`ずっと`,{
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    color:"black"
});
createSubTitle(38.948,41.281,`ウィリアムとジョセフが創りあげた`,regular);
createSubTitle(41.281,43.743,`名作が`,regular);
createSubTitle(43.743,48.204,`頭の中エンドレスループ再生`,regular);
createSubTitle(48.204,48.494,`おや`,{
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    color:"black"
});
createSubTitle(48.494,52.891,`心配しないで誰よりも優しいアプリコットティー`,regular);
createSubTitle(52.891,53.838,`大丈夫だよ、`,regular);
createSubTitle(53.838,58.072,`もう誰も彼も傷つけたりだなんてねしないから`,regular);
createSubTitle(58.072,62.254,`角砂糖３つカップに投げ入れくるくる廻す`,regular);
createSubTitle(62.254,66.303,`安心した、世界は、今日も廻ってる`,regular);
createSubTitle(67.021,67.473,`僕`,{
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    color:"oklch(0.8682 0.076 157.98)"
});
createSubTitle(67.611,72.237,`ケーキも`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"10%",
    left:"30%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(68.804,72.237,`大好き、`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"40%",
    left:"0",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(69.954,72.039,`君も大好き`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"70%",
    left:"10%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});

createSubTitle(72.239,74.955,`銀の`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"0",
    left:"10%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(72.553,74.955,`さじで`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"10%",
    left:"50%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(73.003,74.955,`ソーサー`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"30%",
    left:"10%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(73.738,74.955,`叩けば`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"50%",
    left:"15%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(74.390,74.955,`古代魚と`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"70%",
    left:"20%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(74.955,76.979,`海の`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"0",
    left:"10%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(75.240,76.979,`底の`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"20%",
    left:"50%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(75.524,76.979,`遺跡へ`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"40%",
    left:"10%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(76.122,76.979,`トリップ`,{
    opacity:"0.5",
    fontSize:"13cqw",
    fontWeight:"bolder",
    top:"65%",
    left:"20%",
    transform:"rotate(5deg)",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(77.315,81.513,`僕<br>の<br>事<br>嫌<br>い`,{
    lineHeight:"1",
    opacity:"0.5",
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"5%",
    left:"80%",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(79.4,81.513,`に<br>な<br>っ<br>た<br>？`,{
    lineHeight:"1",
    opacity:"0.5",
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"10%",
    left:"60%",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(80.607,81.513,`っ<br>て<br>聞<br>い<br>た<br>ら`,{
    lineHeight:"1",
    opacity:"0.5",
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"0",
    left:"5%",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(81.513,82.6,`頭撫でられた`,{
    opacity:"0.5",
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"0",
    left:"5%",
    color:"oklch(0.5476 0.0957 166.45)"
});
createSubTitle(82.6,85.765,`とある一家の<br>御茶会議`,{
    opacity:"0.5",
    fontSize:"10cqw",
    fontWeight:"bolder",
    top:"60%",
    left:"5%",
    color:"oklch(0.5476 0.0957 166.45)"
});
