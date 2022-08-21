
import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = () => {
  const [userRegistration ,setUserRegistration] = useState({
    username: "",dob:"",gender:"",
    email: "",phone: "", govt:"", guardian:"", emergency:"",
    address:"", state:"", country:"", pincode:"",
    ocuupation:"", religon:"", Maritial:"", Nationality:"" ,
   
  })

  const[record, setRecord] = useState([])


  const handleInput= (e)=>{
    const name=e.target.name;
    const value =e.target.value;
    // console.log(name , value)

    setUserRegistration({...userRegistration, [name]: value})
}

  const handleSubmit= (e)=>{
      e.preventDefault()
      const newRecord ={...userRegistration , id:new Date().getTime().toString() }
      console.log(record)

       setRecord([...record , newRecord])
       console.log(record)
       setUserRegistration({username:"" ,dob:"" ,gender:"", govt:"" , guardian:"" ,
       email:"", phone:"", emergency:"", address:"", state:"", country:"",
       pincode:"", ocuupation:"", religon:"", Maritial:"", Nationality:""})
    }
    let num = 0;

  return (
    <>
    <h2>Registration Form</h2>
    <div className='form'>
      
     
    <form  action="" onSubmit= {handleSubmit}>
      
    <div className='one'>
    <label className='heading'>Personal Details</label><br></br>
        <label className="mama1" htmlFor="username">Full Name</label>
        <input className="mama" type="text" autoComplete="off" placeholder='Enter FullName' size="35"  required
        value={ userRegistration.username } onChange={handleInput}
        name='username' id="username"
        />

       <label className="mama1" htmlFor="dob">DOB(Age)</label>
        <input className="mama" type="text" autoComplete="off" placeholder='DD/MM/YY' size="25" required
        value={ userRegistration.dob } onChange={handleInput}
        name='dob' id="dob"
        />

       <label className="mama1" htmlFor="gender">Gender</label>
        <select className="mama" type="text" autoComplete="off" placeholder='Enter Gender' required
        value={ userRegistration.gender } onChange={handleInput}
        name='gender' id="gender"
        >
          <option>Gender</option>

          <option>Male</option>
          <option>Female</option>
          <option>Other</option>

        </select>

        <label className="mama1" htmlFor="phone">Mobile</label>
        <input className="mama" type="text"  autoComplete="off" placeholder='Enter Mobile' required
           value={userRegistration.phone } onChange={handleInput}
        name='phone' id="phone" 
        />

       <label className="mama1" htmlFor="govt">Govt ID</label>
        <input className="mama" type="text"  autoComplete="off" placeholder='Enter Govt ID No.' required
           value={userRegistration.govt } onChange={handleInput}
        name='govt' id="govt" 
        />
         
    </div >

     
    <div className='one'>
    <label className='heading'>Contact Details</label><br></br>
       <label className="mama1" htmlFor="guardian">Guardian Details</label>
        <input className="mama" type="text" autoComplete="off" placeholder="Enter Guardian Details"
          value= {userRegistration.guardian} onChange={handleInput}
         name='guardian' id="guardian" 
         />

        <label className="mama1" htmlFor="email">Email</label>
        <input className="mama" type="text" autoComplete="off" placeholder='Enter Email' size='25' required
          value= {userRegistration.email} onChange={handleInput}
         name='email' id="email" 
         />

        <label className="mama1" htmlFor="emergency">Eme Contact No</label>
        <input className="mama" type="text" autoComplete="off" placeholder='Enter Eme No'
          value= {userRegistration.emergency} onChange={handleInput}
         name='emergency' id="emergency" 
         />
      
    </div>
     
    <div className='one'>
    <label className='heading'>Address Details</label><br></br>
        <label className="mama1" htmlFor="address">Address</label>
        <input className="mama" type="text" autoComplete="off" placeholder="Enter Address" size="45"
          value= {userRegistration.address} onChange={handleInput}
         name='address' id="address" 
         />

        <label className="mama1" htmlFor="state">State</label>
        <input className="mama" type="text" autoComplete="off" placeholder='Enter State'
          value= {userRegistration.state} onChange={handleInput}
         name='state' id="state" 
         />

        <label className="mama1" htmlFor="country">Country</label>
        <input className="mama" type="text" autoComplete="off" placeholder='Enter Country'
          value= {userRegistration.country} onChange={handleInput}
         name='country' id="country" 
         />

       <label className="mama1" htmlFor="pincode">PinCode</label>
        <input className="mama" type="text" autoComplete="off" placeholder='Enter PinCode'
          value= {userRegistration.pincode} onChange={handleInput}
         name='pincode' id="pincode" 
         />
    </div>
     
     
    <div className='one'>
    <label className='heading'>Other Details</label><br></br>
        <label className="mama1" htmlFor="occupation">Occupation</label>
        <input className="mama" type="text" autoComplete="off" placeholder="Enter Occupation" size="30"
          value= {userRegistration.occupation} onChange={handleInput}
         name='occupation' id="occupation" 
         />

        <label className="mama1" htmlFor="religon">Religon</label>
        <input className="mama" type="text" autoComplete="off" placeholder='Enter Religon'
          value= {userRegistration.religon} onChange={handleInput}
         name='religon' id="religon" 
         />

        <label className="mama1" htmlFor="Maritial">Maritial Status</label>
        <input className="mama" type="text" autoComplete="off" placeholder='Enter Maritial Status'
          value= {userRegistration.Maritial} onChange={handleInput}
         name='Maritial' id="Maritial" 
         />

       <label className="mama1" htmlFor="Nationality">Nationality</label>
        <input className="mama" type="text" autoComplete="off" placeholder='Enter Nationality'
          value= {userRegistration.Nationality} onChange={handleInput}
         name='Nationality' id="Nationality" 
         />
    </div>

    
  <div className='one'>
      <button className='btn' type="submit">submit</button>
  </div>
    </form>
    </div>
  
     <div className='map'>
      <h3 className='h3'>User Details</h3>
      {record.map((curElem) => {
        num= num+1
        return(
          <div >
 
  <table className="table">
  {/* <thead className='table'> */}
    <tr className='tr'>
    <th className="table">Sl.No</th>
      <th  className="table" scope="col">Name</th>
      <th  className="table" scope="col">DOB</th>
      <th  className="table" scope="col">Gender</th>
      <th className="table" scope="col">Phone</th>
      <th  className="table"scope="col">Govt Id</th>
      <th  className="table" scope="col">Email Id</th>
      <th  className="table" scope="col">Address</th>
      <th  className="table" scope="col">State</th>
      <th  className="table" scope="col">Country</th>
      <th  className="table" scope="col">PinCode</th>
      <th  className="table" scope="col">Natiannality></th>
      <th  className="table" scope="col">Occupation</th>
      <th  className="table" scope="col">Religon</th>
      <th  className="table" scope="col">Maritial Status</th>
      <th  className="table" scope="col">Guardian</th>
      
    </tr>
  {/* </thead> */}
  {/* <tbody className='table' > */}
    <tr className='tr'>
    <th className="table">{num}</th>
      <td className="table"> <p>{curElem.username}</p></td>
      <td  className="table"><p>{curElem.dob}</p></td>
      <td  className="table"><p>{curElem.gender}</p></td>
      <td  className="table"> <p>{curElem.phone}</p></td>
      <td  className="table"><p>{curElem.govt}</p></td>
      <td  className="table"><p>{curElem.email}</p></td>
      <td className="table"><p>{curElem.address}</p></td>
      <td  className="table"><p>{curElem.state}</p></td>
      <td  className="table"><p>{curElem.country}</p></td>
      <td  className="table"> <p>{curElem.pincode}</p></td>
      <td  className="table"><p>{curElem.Nationality}</p></td>
      <td  className="table"> <p>{curElem.occupation}</p></td>
      <td  className="table"><p>{curElem.religon}</p></td>
      <td  className="table"><p>{curElem.Maritial}</p></td>
      <td  className="table"><p>{curElem.guardian}</p></td>
    </tr>
     
  {/* </tbody> */}
</table>
            
          </div>
        )
      })}
     </div>
    
    
    </>
  )
}

export default Form