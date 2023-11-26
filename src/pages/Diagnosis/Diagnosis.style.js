import styled from "styled-components";
import { breakpoints } from "../../styles/theme";

export const DiagnoseWrap = styled.section`
    padding: 40px 50px;
    .diagnoseBoard{
        width: 100%;
        p{
            color: #FFF;
        }
        form{
            padding: 20px 0;
            h3{
                color: #FFF;
                font-size: 28px;
                margin: 5px 0;
            }
            input{
                width: 100%;
                height: 40px;
                border: 1.5px solid #FFFFFFEB;
                background: none;
                border-radius: 4px;
                margin: 10px 0 0 0;
                padding: 0 12px ;
                color: #FFFFFFEB;
                box-sizing: border-box;
            }
            ::placeholder{
                    font-family: 'Montserrat', sans-serif;
                    color: #FFFFFFE0;
                }
        }
        ${breakpoints.lg}{
            p{
                max-width: 60%;
            }
            form{
                h3{
                    font-size: 22px;
                    margin-bottom: 0;
                }
            }
        }
    }
    ${breakpoints.lg}{
        padding: 40px;
    }
    ${breakpoints.md}{
        padding: 30px 20px;
    }
`

export const ResponseWrap = styled.section`
    padding: 10px 50px;
    color: #FFF;
    margin-bottom: 30px;
    .aiChat{
        padding: 30px 20px;
        border-radius: 4px;
        background: #FFFFF0;
        min-width: 200px;
        color: #000;
        span{
            display: flex;
            align-items: center;
            gap: .5rem;
            img{
                width: 30px;
                height: 30px;
                background: white;
                padding: 5px;
                border-radius: 50%;
            }
        }
        h5{
            font-size: 18px;
            margin: 0;
            text-transform: capitalize;
        }
        p{
            margin: 0;
            padding: 10px 48px;
            font-size: 16px;
            line-height: 26px;
        }
        ${breakpoints.sm}{
            padding: 20px;
        }
    }
    ${breakpoints.md}{
        padding: 10px 25px;
    }
`
