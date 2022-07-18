import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;


    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 40px;
        padding-left: 8px;
        color: #f2f2f2;
    }

    button{
        background-color: #46db55;
        color: white;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
    }

    button:hover{
        background-color: #2fd637;
        box-shadow: 0 0 .3em rgba(0, 0, 0, .5);
    }
`;