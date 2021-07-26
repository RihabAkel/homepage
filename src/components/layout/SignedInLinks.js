import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating green lighten-1">AA</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks;

/*import { connect } from 'react-redux'
import React , { Component} from 'react'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'
import pic1 from './pic1.jpg'



class SignedInLinks extends Component   {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
  return (
    <div>
      <ul className="right">
       
        <li><NavLink to='/files'>My scans</NavLink></li>
        <li><NavLink to='/upload'>My graphs</NavLink></li>
        <li><NavLink to='#!' className="btn btn-floating waves-light teal lighten-1 " > AA</NavLink></li>
        <li>
        
              <ul id="slide-out" class="sidenav ">
              <li>
                 <div class="user-view">
                        <div class="background">
                               <img src={pic1}/>
                        </div>
                        <a class="btn-floating halfway-fab waves-effect waves-light blue btn tooltipped"data-position="bottom" data-tooltip="Add a new profile picture" ><i class="material-icons">add_a_photo</i></a>
                        
                        
                        
                        
                      
                </div>
                
                </li>
                   <li><a href="#!"><i class="material-icons ">create</i>Edit Profile</a></li>
                   <li><a>Log Out</a></li>
                   <li><div class="divider"></div></li>

                   <li><a class="waves-effect" href="#!"><i class="material-icons ">monetization_on</i>SerreMASCiR premium services</a></li>
                   <li><a class="waves-effect"><i class="material-icons ">feedback</i>Feedback</a></li>
                   <li><a class="waves-effect" href="#!"><i class="material-icons ">help</i>Help</a></li>
             </ul>
             <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons ">menu</i></a>
       
       </li>

     
  
  
       
      </ul>
      <a class="waves-effect waves-light btn-large">Scanner</a>
<a class="waves-effect waves-light btn-large">Traiter</a>
<a class="waves-effect waves-light btn-large">Etablir un diagnostique</a>
    </div>
  )
}
}


export default SignedInLinks;*/