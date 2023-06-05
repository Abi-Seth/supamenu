import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import AppLogo from '../components/Logo';
import COLOR_PALETTE from '../constants/colors';
import Button from '../components/Button';
import HomeCard from '../components/HomeCard';

function HomePage(props) {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="top-container">
                <div className="logo-container">
                    <AppLogo first_part_color={COLOR_PALETTE.WHITE} last_part_color={COLOR_PALETTE.PRIMARY} font_size={50}/>
                </div>
                <div className='description-container'>
                    <div style={{ width: '50%'}}>
                        <h1>Register your restaurant on SupaMenu</h1>
                        <p>for free and get more revenue!</p>
                    </div>
                    <div className="btns-container">
                        <Button text={'Register your restaurant'} width={42} onClick={() => navigate('/signup')}/>
                        <Button text={'Restaurant already registered? Signin'} background={COLOR_PALETTE.BLACK} border='1px solid white' width={56} onClick={() => navigate('/login')}/>
                    </div>
                </div>
            </div>

            <div className="middle-section">
                <h1 style={{ textAlign: 'center', paddingTop: '1.5em' }}>How it works</h1>
                <div className="cards-container">
                    <div style={{ display: 'flex', justifyContent: 'center', width: '80%', position: 'absolute', top: -80 }}>
                    <HomeCard title={'Step 1'} subtitle={'Register your restaurant'} iconName={'fa-solid fa-user-pen'} width={25}/>
                    <HomeCard title={'Step 2'} subtitle={'Create your restaurant profile and create menu items'} iconName={'fa-sharp fa-solid fa-wine-glass'} width={25}/>
                    <HomeCard title={'Step 3'} subtitle={'Start receiving orders'} iconName={'fa-solid fa-scale-unbalanced'} width={25}/>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
.top-container {
    background-color: ${COLOR_PALETTE.BLACK};
    padding: 30px;
    div.logo-container {
        padding: 20px;
    }

    div.description-container {
        padding: 10px;
        width: 100%;
        color: ${COLOR_PALETTE.WHITE};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        div.btns-container {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50%;
            margin-top: 1em;
        }
    }
}

.middle-section {
    background-image: url('https://assets3.thrillist.com/v1/image/2969793/750x500/flatten;crop;webp=auto;jpeg_quality=50.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .cards-container {
        background-color: ${COLOR_PALETTE.WHITE};
        height: 220px;
        margin-top: 10%;
        display: flex;
        justify-content: space-evenly;
        position: relative;
    }
}
`
export default HomePage;