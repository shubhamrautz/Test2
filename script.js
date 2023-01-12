
document.getElementById("submit").onclick = () => {
    
    const name = document.getElementById("name")
    const comments = document.getElementById("comments")
    const gender = document.querySelector('input[name=Gender]:checked')

    if(!name.value){
        name.focus()
        alert("All fields are compulsory")
        return
    }
    if(!comments.value){
        comments.focus()
        alert("All fields are compulsory")
        return
    }
    if(!gender){
        document.querySelector('input[name = Gender]').focus()
        alert("All fields are compulsory")
        return
    }
    alert("Submitted")
    document.getElementById("form1").submit()

}
