export const validate = (value)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!value.firstname){
      errors.firstname= "firstname is required!";
    }else if(value.firstname.length<3){
      errors.firstname = "name must contain alteast 3 chars"
    }
    if(!value.lastname){
      errors.lastname = "lastname is required!";
    }else if(value.lastname.length<3){
      errors.firstname = "name must contain alteast 3 chars"
    }
    if(!value.email){
      errors.email = "email is required!";
    }else if(!regex.test(value.email)){
      errors.email = "invalid email address!"
    }
    if(!value.password){
      errors.password= "password is required!";
    }
    if(!value.confirmpassword){
      errors.confirmpassword= "confirm password is required!";
    }else if(value.password != value.confirmpassword){
      errors.confirmpassword = 'password does not match!'
    }
    return errors;
  }