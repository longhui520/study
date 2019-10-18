class Student {
    fullName:string;
    constructor(public firstName:any,public middleName:any,public lastName:any){
        this.fullName = firstName+ " " + middleName + " " + lastName;
    }
}