function calcFinalNote(){
    mat_peso = Number(document.querySelector("#mat_peso").value)
    mat_nota = Number(document.querySelector("#mat_nota").value)

    ling_peso = Number(document.querySelector("#ling_peso").value)
    ling_nota = Number(document.querySelector("#ling_nota").value)


    human_peso = Number(document.querySelector("#human_peso").value)
    human_nota = Number(document.querySelector("#human_nota").value)

    natur_peso = Number(document.querySelector("#natur_peso").value)
    natur_nota = Number(document.querySelector("#natur_nota").value)


    red_peso = Number(document.querySelector("#red_peso").value)
    red_nota = Number(document.querySelector("#red_nota").value)

    totalNotes = mat_peso * mat_nota + ling_peso * ling_nota + human_peso * human_nota + natur_peso * natur_nota + red_peso * red_nota
    totalPesos = mat_peso + ling_peso + human_peso + natur_peso + red_peso

    alert(`Sua média foi de ${totalNotes / totalPesos} pontos!`)
}