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

}