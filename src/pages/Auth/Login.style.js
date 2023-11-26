import styled from "styled-components";
import { breakpoints } from "../../styles/theme";

export const LogWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 80vh;
`

export const InnerLog = styled.div`
    min-width: 400px;
    border-radius: 2px;
    background-color: #FFFFF0;
    box-shadow: rgba(0, 0, 0, 0.5) 1px 4px 21px -4px;
    /* min-height: 400px; */
    text-align: center;
    padding: 30px;
    margin: 0 auto;
    form{
        .formControl{
            display: block;
            padding: 0 20px 0 20px;
            margin-top: 12px;
            label{
                display: block;
                text-align: left !important;
                color: #000;
                margin: 4px 0;
            }
            input{
                width: 100%;
                height: 35px;
                border: 1px;
                padding: 4px 10px;
                border-radius: 6px;
                box-sizing: border-box;
                background-color: #07316129;
            }
        }
        .btnHolder{
            margin: 10px 0;
        }
    }
    ${breakpoints.sm}{
        min-width: 300px;
        padding: 40px 20px;
    }
`