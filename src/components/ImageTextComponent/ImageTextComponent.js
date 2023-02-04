import React from 'react';
const ImageTextComponent = (props) => {
        return(
            <>
            <div className="imagetextcomponent-main">
            <div className={`imagetextcomponent-container ${props.imgPosition}`}>
                <img className="imagetextcomponent-img" src={props.imgPath} />
                </div>
                <div>
                    <h2>{props.name}</h2>
                <div>{props.desc}</div>
                </div>
                
            </div>
            
            </>
        )
}
export default ImageTextComponent;