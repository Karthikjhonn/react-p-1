import React from "react";
class notfound extends React.Component{
    render(){
        return(
            <div style={{height:'100vh',width:"100%",display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center'}} className="bg-light">
                <h1 > Not Found!</h1> 
                <a href="/">home</a>
            </div>
        )   
    }
}
export default notfound