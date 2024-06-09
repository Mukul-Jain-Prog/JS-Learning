// Stack(Primitive) , Heap(Non-Primitive)

let youName="Mukul@gmail.com"
let anothername=youName // here this statement as it is primtive type so it will use stack, so what it does basically give a copy of variable to that not the reference so the value in future doesn't get changed by updating new variable
console.log(anothername)
anothername="chaiaurcode"
console.log(youName)
console.log(anothername)

let user={
    email:"user@google.com",
    upi: "user@ybl"
}
let user2=user// Now here as it's object,so used heap memory,now  basically it will refer to the same value or have the same reference for the value for both object
user2.email="mukul@google.com"
// now the changes will reflect to the original object too as it refer to the same value or can be say there is only one value , that will now by changed by another object, so automatically the value will update for original object
console.log(user.email)
console.log(user2.email)