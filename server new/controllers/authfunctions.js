const login = (req,res)=>{

}
const signup = async(req,res)=>{
     const response = await creds.create(
      {  name: "anshik",
        email: 'hi there i am a description',
        password: "i am an strong password"}
    )
    console.log(response)
    res.send("succesfull")
}
module.exports = {
    signup,login
}