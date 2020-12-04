import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BodyTypeControl from "./body-type/BodyTypeControl";


function App(){
  return ( 
    <React.Fragment>
      <Header />
      <BodyTypeControl />
      <Footer />      
    </React.Fragment>
  );
}

export default App;