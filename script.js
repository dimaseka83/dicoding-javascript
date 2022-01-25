
class Mail {
    constructor(author){
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts(){
        return this._contacts;
    }
}

const mail1 = new Mail("Dhimas");
mail1.sendMessage("Hallo", "Eka");
console.log(mail1.showAllContacts());

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
    
    sendMessage(msg, to){
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('sinko', true, 0895647378);
console.log("Whatsapp");
wa1.sendMessage('halo',0895647378);