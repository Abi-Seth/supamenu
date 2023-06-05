import React from 'react';
import styled from 'styled-components';

import COLOR_PALETTE from '../constants/colors';

function HomeCard({ iconName, iconColor = COLOR_PALETTE.PRIMARY, title, subtitle, width = 40 }) {
    return (
        <Container style={{ width: `${width}%`}}>
            <div><i className={iconName} style={{ color: iconColor, fontSize: 40 }}></i></div>
            <div><span style={{ fontWeight: 'bold', textAlign: 'center', margin: '1em 0'}}>{ title }</span></div>
            <div>
                <span style={{ fontSize: '0.86em', display: 'flex', textAlign: 'center', marginTop: '1em' }}>
                    { subtitle }
                </span>
            </div>
        </Container>
    );
}

const Container = styled.div`
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${COLOR_PALETTE.BLACK};
background-color: ${COLOR_PALETTE.WHITE};
width: 100%;
border: 1px solid ${COLOR_PALETTE.GRAY};
padding: 30px;
`
export default HomeCard;