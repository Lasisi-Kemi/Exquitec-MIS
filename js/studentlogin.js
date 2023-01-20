let db =new DataBase()

if (db.checkDataExist("gender") != false && db.checkDataExist("matricno") != false && db.checkDataExist("firstname") != false && db.checkDataExist("lastname") != false && db.checkDataExist("course") != false ){
    GoTO("dashboard.html")
} else {
    console.log("has issue")
}


async function LogInStudent() {
    const studentid = document.getElementById("studentId").value
    const password = document.getElementById("password").value
    var j = {
        studentid,
        password
    }
    try {
        var response = await axios.post(BASEURL + "/loginstudent/", j)
        if (response.status == 200){
            let data = new DataBase()
            data.setMultipleData(response.data["data"])
            GoTO("dashboard.html")
        }
    } catch (error) {
        console.error(error)
    }

}

const loginbutton = document.getElementById("loginbutton")
loginbutton.addEventListener ("click", LogInStudent)