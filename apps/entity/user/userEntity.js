class UserEntity {
    id = 0;
    user_name = "";
    password = "";
    first_name = "";
    last_name = "";
    email = "";
    dob = "";
    address = "";
    created_date;
    updated_date;

    convertFromVo(obj){
        this.id = obj.getId();
        this.user_name = obj.getUserName();
        this.password = obj.getPassword();
        this.first_name = obj.getFirstName()
        this.last_name = obj.getLastName();
        this.email = obj.getEmail();
        this.dob = obj.getDOB();
        this.address = obj.getAddress();
        this.created_date = obj.getCreatedDate();
        this.updated_date = obj.getUpdatedDate();
    }

    mappResutFromDB(e){
      this.id = e.id;
      this.user_name = e.user_name;
      this.password = e.password;
      this.first_name = e.first_name
      this.last_name = e.last_name;
      this.email = e.email;
      this.dob = e.dob;
      this.address = e.address;
      this.created_date = e.created_date;
      this.updated_date = e.updated_date;
    }
     getId(){
       return this.id ;
    }
    
     setId(id){
        this.id = id ;
    }

     getUserName(){
       return this.user_name ;
    }
    
     setUserName(user_name){
        this.user_name = user_name ;
    }

     getPassword(){
       return this.password ;
    }
    
     setPassword(password){
        this.password = password ;
    }

     getFirstName(){
       return this.first_name ;
    }
    
     setFirstName(first_name){
        this.first_name = first_name ;
    }

     getLastName(){
       return this.last_name ;
    }
    
     setLastName(last_name){
        this.last_name = last_name;
    }

     getEmail(){
       return this.email ;
    }
    
     setEmail(email){
        this.email = email ;
    }

     getDOB(){
       return this.dob ;
    }
    
     setDOB(dob){
        this.dob = dob ;
    }
     getAddress(){
       return this.address ;
    }
    
     setAddress(address){
        this.address =  address;
    }

     getCreatedDate(){
       return this.created_date ;
    }
    
     setCreatedDate(created_date){
        this.created_date = created_date ;
    }
     getUpdatedDate(){
       return this.updated_date ;
    }
    
     setUpdatedDate(updated_date){
        this.updated_date = updated_date ;
    }
}

module.exports = UserEntity;