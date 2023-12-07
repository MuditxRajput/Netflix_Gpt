const Validate=(email,password)=>{
 const ValidateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
 const ValidatePassword =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 if(!ValidateEmail) return "Email is not valid";
 if(!ValidatePassword) return "Password is not valid"

 return null;
}
export default Validate;