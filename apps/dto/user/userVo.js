class UserVo {
    id = 0;
    userName = "";
    password = "";
    firstName = "";
    lastName = "";
    fullName = "";
    email = "";
    dob = "";
    address = "";
    createdDate = "";
    upatedDate = "";

    /**
     * Function
     */
    mapperData(entity){
        this.id = entity.getId();
        this.userName = entity.getUserName();
        this.password = entity.getPassword();
        this.firstName = entity.getFirstName();
        this.lastName = entity.getLastName();
        this.email = entity.getEmail();
        this.dob = entity.getDOB();
        this.address = entity.getAddress();
        this.createdDate = entity.getCreatedDate();
        this.upatedDate = entity.getUpdatedDate();
    }

    getId (){
        return this.id ;
    }
     
     setId (id){
        this.id = id ;
    }
 
     getUserName(){
        return this.userName ;
    }
     
     setUserName (userName){
        this.userName = userName ;
    }
 
     getPassword (){
        return this.password ;
    }
     
     setPassword (password){
        this.password = password ;
    }
 
     getFirstName (){
        return this.firstName ;
    }
     
     setFirstName (firstName){
        this.firstName = firstName ;
    }
 
     getLastName (){
        return this.lastName ;
    }
     
     setLastName (lastName){
        this.lastName = lastName;
    }
 
     getEmail (){
        return this.email ;
    }
     
     setEmail (email){
        this.email = email ;
    }
 
     getDOB (){
        return this.dob ;
    }
     
     setDOB (dob){
        this.dob = dob ;
    }
 
     getAddress (){
        return this.address ;
    }
     
     setAddress (address){
        this.address =  address;
    }
 
     getCreatedDate (){
        return this.createdDate ;
    }
     
     setCreatedDate (createdDate){
        this.createdDate = createdDate ;
    }
     getUpdatedDate (){
        return this.upatedDate ;
    }
     
     setUpdatedDate (updatedDate){
        this.upatedDate = updatedDate ;
    }
    getFullName(){
       return this.fullName ;
   }
    
    setFullName(fullName){
       this.fullName = fullName ;
   }
}

module.exports = UserVo;