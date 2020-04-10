import React from 'react';

export default function Custom404() {
    return(
        <div style={{
            background: '#6ab9f1',
            margin: '-8px !important',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '-webkit-fill-available',
        }}>
            <img src="/Custom404.jpg" style={{
                width: '60%',
                height: 'auto'
            }}/>
        </div>
    );
  }