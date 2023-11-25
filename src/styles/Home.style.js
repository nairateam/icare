import styled from "styled-components";

export const HomeWrap = styled.div`
    background-color: #073161;
    width: 100vw;
    min-height: 100vh;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const HeroWrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0 40px; */
    .leftHero{
        padding-left: 40px;
        h2{
            font-size: 42px;
            line-height: 52px;
            font-weight: 600;
            color: #FFF;
            margin: 0;
        }
        p{
            color: #FFFFFFEB;
            font-size: 18px;
        }
        button{
        width: 180px;
        height: 50px;
        border-radius: 50px;
        border: none;
        background-color: #0041FF;
        color: #FFF;
        font-weight: 600;
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
        a{
            color: #FFF;
            text-decoration: none;
        }

    }
    }
    .rightHero{
        padding: 0;
        margin: 0;
        img{
            object-fit: cover;
            object-position: bottom right;
            margin-bottom: -4px;
        }
    }
`

export const Foot = styled.section`
    text-align: center;
    padding: 5px 40px;
    border: 1px solid #6D6E6F;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    color: grey;
    font-size: 14px;
`