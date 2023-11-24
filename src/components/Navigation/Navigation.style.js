import styled from "styled-components";

export const Navbar = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    img{
        width: 150px;
    }
    ul{
        display: flex;
        align-items: center;
        gap: 2rem;
        color: #FFF;
        li{
            list-style: none;
        }
    }
    button{
        width: 180px;
        height: 50px;
        border-radius: 50px;
        border: none;
        background-color: #0041FF;
        color: #FFF;
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
        a{
            color: #FFF;
            text-decoration: none;
        }
    }
`