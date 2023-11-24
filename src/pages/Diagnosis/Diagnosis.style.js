import styled from "styled-components";

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
    }
`