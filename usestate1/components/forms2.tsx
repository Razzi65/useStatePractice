import { useState } from "react"

const Forms2 = () => {



    const [email,setemail] = useState()
    const [paswrd,setpaswrd] = useState()

    const [newdata,setnewdata] = useState([{
        email: "samplename",
        password: " sample password"
    }])

    const emailChange = (e) => {
        setemail(e.target.value)
    }

    const paswrdChange = (e) => {
        setpaswrd(e.target.value)
    }

    const data1 = [{
        email: "samplename",
        password: " sample password"
    }]

    const data2 = {
        email: email,
        password:paswrd
    }

    const addinList = () => {
        setnewdata([...newdata, data2])
        console.log(newdata);
        
    }

    return (
        
        
        
        <div className="container w-50">


                    <form>
  <div className="form-group">

    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>emailChange(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>paswrdChange(e)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button onClick={()=>addinList()} type="submit" className="btn btn-primary">Submit</button>

</form>
           Email: {email} <br/>
           Password: {paswrd}
        </div>
    )
}


export default Forms2