interface UserInterface{
    name: string;
    email:string;
    age:number;
    payInvoice():string;
  }
  class User implements UserInterface{
    name: string;//private name: string; Only accessible withing class "User"
    email: string;// protected email: string; Accessbible from any class that inherits from this class 
    age:number;// public age:number; Accessible for all
    constructor(name: string, email: string, age: number){
      this.name = name;
      this.email = email;
      this.age = age;
    }
    payInvoice():string{
      return `${this.name} paid invoice`;
    }
  }
  class Member extends User {
    id: number;
    constructor(id: number, name: string, email: string, age:number){
      super(name, email, age);
      this.id = id;
    }
    checkInvoice(){
      super.payInvoice()
    }
  }
  
  let mike: User = new Member(1, 'Rick', 'rick@gmail.com', 33);
  console.log(mike.payInvoice());//Rick paid invoice
  
  
  
  
  
  