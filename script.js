const message = [
"Suamiku...",
"Aku tau aku udah bikin kamu kecewa.",
"Aku benar-benar minta maaf atas semuanya.",
"Aku ga pernah ada niatan bikin kamu ngerasa kaya ini.",
"Kamu itu sangat berarti buat Aku.",
"Aku gak mau kehilangan kamu.🥺",
"Aku sayang kamu, Suamiku.🥺❤️",
"Kasih aku kesempatan yaa dan Aku janji akan berusaha memperbaiki semuanya, please trust me🥺."
]

let i = 0
const text = document.getElementById("text")

function ketik(){

if(i < message.length){
text.innerHTML += message[i] + "<br><br>"
i++
setTimeout(ketik,2000)
}

}

ketik()

function maaf(){
document.getElementById("akhir").innerHTML =
"Terima kasih sudah memaafkan Aku ❤️"
}

/* animasi hati */

function createHeart(){

const heart = document.createElement("div")

heart.classList.add("heart")
heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"
heart.style.fontSize=Math.random()*20+10+"px"
heart.style.animationDuration=Math.random()*3+3+"s"

document.querySelector(".hearts").appendChild(heart)

setTimeout(()=>{
heart.remove()
},5000)

}

setInterval(createHeart,300)