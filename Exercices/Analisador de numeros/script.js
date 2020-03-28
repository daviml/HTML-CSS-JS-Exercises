let num = document.querySelector('input#txtnum')
//ou let num = Number(document.getElementById('txtnum'))
let list = document.querySelector('select#sellist')
let res = document.querySelector('div#res')
let vet = []

function inRange(x){
    if(Number(x)>=1 && Number(x)<=100){
        return true
    }
    else{
        return false
    }
}
function InList(y,l){
    if(l.indexOf(Number(y)) != -1){
        return true
    }
    else{
        return false
    }
}

function add(){
    
    if(inRange(num.value) && !InList(num.value,vet)){
        vet.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML=''
    }
    else{
        alert('Not in Range or Already exist.')
    }
    num.value=''
    num.focus()

}

function end(){
    if(vet.length == 0){
        alert('empty list')
    }
    else{
        let tot = vet.length
        res.innerHTML = ''
        res.innerHTML += `<p>${tot} elementos</p>`
        let maior = vet[0]
        let menor = vet[0]
        let soma =0
        let media =0
        for(let pos in vet){
            soma += vet[pos]
            
            if(vet[pos] > maior){
                maior = vet[pos]
            }
            if(vet[pos] < menor){
                menor = vet[pos]
            }
        }
        media = soma/tot
        res.innerHTML += `<p>${maior} é o maior</p>`
        res.innerHTML += `<p>${menor} é o menor</p>`
        res.innerHTML += `<p>${soma} é a soma</p>`
        res.innerHTML += `<p>${media} é a media</p>`
        

    }
}