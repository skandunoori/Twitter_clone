const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if(loggedIn) {
      return (<h2 style={{"color":"black"}}>Welcome If Else</h2>);
    } else {
      return (<h2 style={{"color":"black"}}>Please login If Else</h2>);
    }
   };
   export default ConditionalOutputIfElse;