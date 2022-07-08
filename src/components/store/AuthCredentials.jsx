import React from 'react'

    const AuthCredentials = React.createContext({
        AuthKey:"AIzaSyAfmGH_nE-J-pzFAzO6M-_Yl4KFkkRLLOA",
        db_url:"https://foodastic-8862d-default-rtdb.firebaseio.com"
 
    })

    export const AuthCredentialsProvider = (props) => {
        const contextValue = {
          
            AuthKey:"AIzaSyAfmGH_nE-J-pzFAzO6M-_Yl4KFkkRLLOA",
            db_url:"https://foodastic-8862d-default-rtdb.firebaseio.com"
          };
        
          return (
            <AuthCredentials.Provider value={contextValue}>
              {props.children}
            </AuthCredentials.Provider>
          );
        };

export default AuthCredentials;
