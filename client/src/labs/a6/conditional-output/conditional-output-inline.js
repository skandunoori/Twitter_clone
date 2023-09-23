const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
      <>
        { loggedIn && <h2 style={{"color":"black"}}>Welcome Inline</h2>}
        {!loggedIn && <h2 style={{"color":"black"}}>Please login Inline</h2>}
      </>
    );
   };
   export default ConditionalOutputInline;