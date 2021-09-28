import React, {useState} from 'react';
import {IoIosHeartEmpty, IoIosHeart} from 'react-icons/io';

function Heart(value) {
  const [saved,setSaved] = useState('')

return(
    <div style={styles.heartStyle}>
       
        
        {saved >= 1 ? (
            <IoIosHeart onClick={() => setSaved(1)}/>
        ) : (
            <IoIosHeartEmpty onClick={() => setSaved(1)}/>
        )}
    </div>
  );
}

export default Heart;

const styles={
    heartStyle:{
        color:'red'
    }
}