export function verifyCredentials (email:string , password:string):{state:boolean, error:string} | boolean {

    if(!email){
        return {
            state:false,
            error:"E-mail"
        }
    }else if(!password) {
        return {
            state:false,
            error:"Password"
        }

    }

    return true

}