import * as React from 'react';
import { SectionInterface } from '../types';

export default ({backgroundColor="", backgroundImage, children, className = ""}: SectionInterface) => {
    return (
        <div className={`section ${className}`} style={{backgroundSize:"cover", backgroundImage: `url('${backgroundImage}')`}}>
            <div style={{background: backgroundColor}}>
                {children}
            </div>            
        </div>
    );
}