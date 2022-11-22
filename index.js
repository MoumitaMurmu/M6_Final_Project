function validate(){
  let firstName = document.getElementById("first-name").value
  let lastName = document.getElementById("last-name").value
  let email = document.getElementById("email").value
  let city = document.getElementById("city").value
  let state = document.getElementById("state").value
  let zip = document.getElementById("zip").value
  let tNC = document.getElementById("t-and-c").checked
  let error = false
//   console.log(firstName, lastName, email, city, state, zip,tNC)
if(firstName.length >= 2){
    document.getElementById("first-name-valid").style.display = 'block'
    document.getElementById("first-name-invalid").style.display = 'none'
// console.log("Looks good!")
}
else{
    document.getElementById("first-name-invalid").style.display = 'block'
    document.getElementById("first-name-valid").style.display = 'none'
    error = true
    // console.log("Please enter a valid first name.")
}
if(lastName.length >= 2){
    document.getElementById("last-name-valid").style.display = 'block'
    document.getElementById("last-name-invalid").style.display = 'none'
// console.log("Looks good!")
}
else{
    document.getElementById("last-name-invalid").style.display = 'block'
    document.getElementById("last-name-valid").style.display = 'none'
    error = true
    // console.log("Please enter a valid last name.")
}
if(email.includes('@') && 
email.includes('.') && 
email.indexOf('@') != 0 && 
email.length - email.lastIndexOf('.') >= 3)
{
    document.getElementById("email-valid-feedback").style.display = 'block'
    document.getElementById("email-invalid-feedback").style.display = 'none'
// console.log("Looks good!")
}
else{
    document.getElementById("email-invalid-feedback").style.display = 'block'
    document.getElementById("email-valid-feedback").style.display = 'none'
    error = true
    // console.log("Please enter a valid email.")
}
if(city.length >= 3){
    document.getElementById("city-valid").style.display = 'block'
    document.getElementById("city-invalid").style.display = 'none'
// console.log("Looks good!")
}
else{
    document.getElementById("city-invalid").style.display = 'block'
    document.getElementById("city-valid").style.display = 'none'
    error = true
    // console.log("Please enter a valid last name.")
}
if(state != 'None'){
    document.getElementById("state-valid").style.display = 'block'
    document.getElementById("state-invalid").style.display = 'none'
// console.log("Looks good!")
}
else{
    document.getElementById("state-invalid").style.display = 'block'
    document.getElementById("state-valid").style.display = 'none'
    error = true
    // console.log("Please enter a valid last name.")
}
//  let zipNumber = parseInt(zip)

if(zip && zip.length === 6 && !isNaN(zip)){
    document.getElementById("zip-valid").style.display = 'block'
    document.getElementById("zip-invalid").style.display = 'none'
// console.log("Looks good!")
}
else{
    document.getElementById("zip-invalid").style.display = 'block'
    document.getElementById("zip-valid").style.display = 'none'
    error = true
    // console.log("Please enter a valid last name.")
}
if(tNC){
    document.getElementById("t-and-c-invalid").style.display = 'none'
}else{
    document.getElementById("t-and-c-invalid").style.display = 'block'
    error = true  
}

// console.log(error)
if(!error){
    alert('Your details have been saved successfully!')

    // document.getElementById("first-name").value = ''
    // document.getElementById("last-name").value = ''
    // document.getElementById("email").value = ''
    // document.getElementById("city").value = ''
    // document.getElementById("state").value = ''
    // document.getElementById("zip").value = ''
    // document.getElementById("t-and-c").checked = false
    //Below code is the Another way of doing above code.....
    document.getElementById('id=registration-form').reset()
     
    let validFeedbacks = document.getElementsByClassName('valid-feedback')
    for(let i = 0; i<validFeedbacks.length; i++){
     validFeedbacks[i].style.display = 'none'
    }
    let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
    for(let i = 0; i<invalidFeedbacks.length; i++){
        invalidFeedbacks[i].style.display = 'none'
       }
}

}



  
  