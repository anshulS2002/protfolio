import React from 'react'
import "./index.scss"
const index = ({letterClass,strArray,idx}) => {
    return (
        <span>
            {
                strArray.map((char,i)=>(
                    <span key={char+1} className={`${letterClass} _${i+idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default index
