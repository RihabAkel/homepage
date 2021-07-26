import React ,{ useEffect}from 'react'
import './Dashboard.css' 
import pic1 from'./pic1.jpg' 
import pic2 from'./pic2.jpg'
import M from 'materialize-css'

import pic4 from'./pic4.jpg'
 const Dashboard =() =>{

  useEffect(() => {
    let elements =document.querySelectorAll(".parallax");
    M.Parallax.init(elements);

  }, []);
 
  return (

  <body>
   
    <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <div className="container">
                <br/><br/>
                <h1 className="header center white-text text-lighten-1">SerreMASCiR</h1>
                <div className="row center">
                    <h5 className="header col s12 black-text lighten-5"> <b>Tout ce dont les agriculteurs ont besoins pour entretenire leurs serres </b></h5>
                    <h4 className="header col s12 black-text"> SerreMASCiR  est bien pour controller sa serre.</h4>
                </div>
               
                <br/><br/>
                <div className="parallax"><img src={pic2} alt={"Unsplashed background img 1"} /></div>
                
                
           </div>
           
       </div>

  </div>
  <div className="container">
    <div className="section">

    
    <div className="row">
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons green-text">next_week</i></h2>
          <h5 className="center">Centralisez les contenus de votre équipe</h5>

          <p className="light">Créez, stockez et partagez des contenus cloud avec Google Docs, Sheets et Slides, Microsoft Office et FireBox Paper, et regroupez-les avec les fichiers standard de votre FireBox.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons green-text">group</i></h2>
          <h5 className="center">Collaborez en équipe, partout et à tout moment</h5>

          <p className="light">Accédez facilement au travail de votre équipe sur votre ordinateur, votre appareil mobile ou le navigateur Web de votre choix.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons green-text">attach_money</i></h2>
          <h5 className="center">Gagnez en coût</h5>

          <p className="light">Grâce à notre infrastructure autonome sécurisée et à nos outils d'administration offrant contrôle et visibilité, les données de votre entreprise sont en sécurité dans SerreMASCiR.</p>
        </div>
      </div>
    </div>

  </div>
</div>
  <div className="parallax-container valign-wrapper">
     <div className="section no-pad-bot">
         <div className="container">
             <div className="row center">
                <h5 className="header col s12 black-text">Offrez un espace de travail intelligent à votre agriculteurs </h5>
           </div>
        </div>
        <div className="parallax"><img src={pic1} alt={"Unsplashed background img 1"} /></div>
     </div>
    
 </div>



 
 <div className="container">
    <div className="section">

    <div className="row">
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons green-text">next_week</i></h2>
          <h5 className="center">Personnalisez vos alertes </h5>

          <p className="center">SerreMASCiR .</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons green-text">speed</i></h2>
          <h5 className="center">Retrouvez rapidement ce dont vous avez besoin</h5>

          <p className="light">Avec les suggestions intelligentes de fichiers et de dossiers, votre équipe garde une longueur d'avance. Tous les utilisateurs ont accès aux contenus dont ils ont besoin, quand ils en ont besoin.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons green-text">dashboard</i></h2>
          <h5 className="center">Sauvegardez vos scans et examinez vos plantes</h5>

          <p className="light">Stream watch ta serre depuis ton Laptop.</p>
        </div>
      </div>

    </div>
  </div>
  </div>
  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 black-text">Multipliez les possibilités avec SerreMASCiR </h5>
        </div>
      </div>
    </div>
    <div className="parallax"><img src={pic4} alt="Unsplashed background img 1" /></div>
  </div>

  
  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        
        <div className="col s12 center " >
          <h5 className="white-text">Follow us on social media for special offers:</h5>
            <a className="white-text" href="#!" ><i className="fab fa-facebook small fa-4x" href="#!"></i></a>
            <a className="white-text" href="#!"><i className="fab fa-twitter small fa-4x" href="#!"></i></a>
            <a className="white-text" href="#!"><i className="fab fa-linkedin small fa-4x" href="#!"></i></a>
            <a className="white-text" href="#!"><i className="fab fa-google small fa-4x" href="#!"></i></a>
              
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      <p className="flow-text right"> SerreMASCiR  &copy; 2021 </p>
     
      </div>
      
    </div>
  </footer>
 
  <script src="http://materializecss.com/js/init.js"></script>
  
</body>


  )}

export default Dashboard