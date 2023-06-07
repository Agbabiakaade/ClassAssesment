import React from "react";
const UserOutput = (prop) =>{
    return(
        <div>
            <h3>User Output</h3>
            <p>{prop.paragraph1}</p>
            <p>{prop.paragraph2}</p>
        </div>
    );
}

export default UserOutput;