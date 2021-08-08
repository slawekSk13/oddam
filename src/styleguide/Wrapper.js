import React from 'react';

 const Wrapper = ({children}) => {
     const style={
         position: 'relative'
     }
          return(
         <div style={style}>
             {children}
         </div>
     );
}

export default Wrapper;

