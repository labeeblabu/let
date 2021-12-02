function localStorag(e){
e.preventDefault()
console.log(e)
console.log(e.target.value)
const form=new FormData(e.target)
const details={
  Name:form.get("name"),
  Email:form.get("email")
}
// window.localStorage.setItem("Name","jkjhgkjhg")
localStorage.setItem("Name",details.Name)
localStorage.setItem("Email",details.Email)


let obj1={name:name,email:email}
let jsonFile=JSON.stringify(obj1)
}
localStorage.setItem(`user1`,jsonFile)


let user1=JSON.parse(localStorage.getItem(`user1`))
let li=document.createElement('li')
let text=document.createTextNode(`${user1.name}:${user1.email}`)
li.appendChild(text)
users.appendChild(li)