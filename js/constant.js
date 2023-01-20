const BASEURL = "http://192.168.137.1:8000/api"
function GoTO (val) {
    window.open(window.location.origin + "/"+ val, "_self")
}


class DataBase{
    constructor(){

    }
    setMultipleData(data){
        const d= new Date();
        d.setTime(d.getTime() + (7*24*60*60*1000))
        let expires = "expires=" + d.toUTCString()
        let list = Object.keys(data)
        list.forEach(element => {
            document.cookie = element + "="+ data[element] + ";" + expires + ";"
        });
    }

    getData(cname){
        let name = cname + "="
        let decodeCookie = decodeURIComponent(document.cookie)
        let ca = decodeCookie.split(";")
        for(let i = 0; i< ca.length; i++){
            let c = ca[i];
            while  (c.charAt(0) == " "){
                c = c.substring(1)
            }
            if (c.indexOf(name) == 0){
                return c.substring(name.length, c.length)
            }
        }
        return undefined;
    }
    checkDataExist(d){
        let data = this.getData(d)
        if (data == undefined){
            return false
        } else {
            return true
        }
    }

    existOrCreate(data){
        let list = Object.keys(data)
        list.forEach(element => {
            if (! this.checkDataExist(element)){
                var n = {}
                n[element] = list[element]
                this.setMultipleData(n)
            }
        })  
    }
}

function userLoginCheck(){
    let db = new DataBase()
    if (!(db.checkDataExist("gender") != false && db.checkDataExist("matricno") != false && db.checkDataExist("firstname") != false && db.checkDataExist("lastname") != false && db.checkDataExist("course") != false )){
        GoTO("studentlogin.html")
    }
}

