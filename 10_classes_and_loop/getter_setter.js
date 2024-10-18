class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hadiyal`
    }

    set password(value){
        this._password = value
    }
}

const vishal = new User("v@vishal.ai", "123")
console.log(vishal.password);