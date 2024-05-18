import React, {ReactNode} from 'react';
import './Title.css';

function Title({children}: { children: ReactNode }) {
  return <div className="title">
    {children}
  </div>;
}

export default Title;
