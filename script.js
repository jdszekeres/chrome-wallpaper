const WEIRD_HOLIDAYS_URL = "https://www.checkiday.com/api/3/?d="


function get_os() {
    os = navigator.userAgentData.platform.toLowerCase()
    if (os.includes("win")) {return "https://simpleicons.org/icons/windows.svg"}
    if (os.includes("linux")) {return "https://simpleicons.org/icons/linux.svg"}
    if (os.includes("mac")) {return "https://simpleicons.org/icons/macos.svg"}
    if (os.includes("android")) {return "https://simpleicons.org/icons/android.svg"}
    return ""
}

(async function() {
    date = new Date()
    document.getElementById("date").innerHTML =   `${date.getMonth()}/${date.getDay()}/${date.getYear()}`
    weird_resp = await fetch(WEIRD_HOLIDAYS_URL)
    json = await weird_resp.json()
    holidays = json.holidays
    final_string = ""
    holidays.forEach((x)=>{final_string+=`Happy ${x.name}<br>`})
    document.getElementById("holidays").innerHTML = final_string
    cpu_count = navigator.hardwareConcurrency
    document.getElementById("cpus").innerHTML = `<i class="fa fa-microchip"></i>`.repeat(cpu_count)
    document.getElementById("os").src = get_os()
})();

function set_time() {
    time = new Date()
    hours = time.getHours()
    if (hours > 12) {
        hours -= 12;
        meridiem = "PM";
      } else if (hours === 12) {
        meridiem = "PM";
      } else if (hours === 0) {
        hours = 12;
      }
    document.getElementById("clock").innerHTML = `${hours}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')} ${meridiem}`
}
set_time()
setInterval(set_time,900)
// genretate bg
scale = 500 // smaller = more detail
// you can still understand the code if you unminify it
noise.seed(Math.random());perlinNoise=(x,y)=>(noise.simplex2(x,y)+1)/2;function colorizeHeightmapWithPerlinNoise(){const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');canvas.width=window.innerWidth/5;canvas.height=window.innerHeight/5;for(let x=0;x<canvas.width;x++){for(let y=0;y<canvas.height;y++){const heightValue=perlinNoise(x/scale,y/scale);const color=getColorForHeight(heightValue);ctx.fillStyle=color;ctx.fillRect(x,y,5,5);}}document.body.style.backgroundImage=`url(${canvas.toDataURL()})`;}function getColorForHeight(height){const thresholds=[0,0.09,0.18,0.27,0.36,0.45,0.54,0.63,0.72,0.81],colors=['#AEDCF7','#A2E5F0','#96EDF0','#8AFAED','#7DF2E0','#92ECCF','#A5E5BC','#B8DDA8','#CBD597'];const index=thresholds.findIndex(threshold=>threshold>height);if(index===-1){return colors[colors.length-1];}else{return colors[index];}}colorizeHeightmapWithPerlinNoise();
