const inputEl=document.querySelector("input")
const button=document.querySelector("button")
const parts=document.querySelector(".partsSpeech")
const phone=document.querySelector(".phonetics")
const audio=document.querySelector(".audio")
const x=document.querySelector(".x")
const antonym=document.querySelector(".antonyms")
const synonym=document.querySelector(".synonyms")
//const exampl=document.querySelector(".examples")
const result=document.querySelector(".result")
button.addEventListener("click", function(){
    
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+inputEl.value)
    .then(res=>res.json())
        .then(data=>{
            let definition=data[0].meanings[0].definitions
            let antonyms=data[0].meanings[0].antonyms
            let meaningList=""
            let antonymsList=""
            definition.forEach((meaning,defNum)=>{
                meaningList+=`<p>${defNum + 1}. ${meaning.definition}</p>`
            })

            result.style.visibility="visible"
            parts.innerHTML=`<b>Part of Speech</b>: ${data[0].meanings[0].partOfSpeech}` 
            phone.innerHTML=`<b>Phonetics: </b>${data[0].phonetics[0].text}`
            x.innerHTML=`<b>Definitions: </b> ${meaningList}`
            antonym.innerHTML=`<b>Antonyms: </b> ${data[0].meanings[0].antonyms}`
            synonym.innerHTML=`<b>Synonyms: </b> ${data[0].meanings[0].synonyms}`
            //exampl.innerHTML=`<b>Example: </b>${data[0].meanings[0].examples}`
            audio.innerHTML=`<audio src="${data[0].phonetics[0].audio}" >Unsupported</audio>
            <i onclick="playM()" class="fa fa-volume-up" aria-hidden="true"></i>
            `
        })
    .catch(err=>alert(`Couldn't find the Word. If this error persists, try these:

1.  Review the spelling of the searched word.
2. Ensure proper Internet Connection.
3. If problem persists after all these, please contact the developers @mayowayusuf3004@gmail.com`))
})

function playM(){
 document.querySelector("audio").play()
}