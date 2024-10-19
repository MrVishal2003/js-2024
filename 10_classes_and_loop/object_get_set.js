const User = {
    _email: "vishal@vv.com",
    _password: "hvr",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const data = Object.create(User)
console.log(data.email);
