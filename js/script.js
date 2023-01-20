
async function submitStudentLogin(){
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const course = document.getElementById("course").options[document.getElementById("course").selectedIndex].text
    const gender = document.getElementById("gender").options[document.getElementById("gender").selectedIndex].text

    console.log(firstname, lastname, course, gender)
    try {
        const response = await axios.post( BASEURL +"/signup" , {
            firstname,
            lastname,
            course,
            gender
        }) 
        if (response.status == 200){
            let data = new DataBase()
            data.setMultipleData(response.data["data"])
            GoTO("registration.html")
        }

        
    } catch (error) {
        console.log(error)
    }

   
}

const signbutton = document.getElementById("signupbutton")
signbutton.addEventListener ("click", submitStudentLogin)