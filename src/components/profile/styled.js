import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
    align-items: flex-start;
`;

export const WrapperInfoUser = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;

    h1{
        font-size: 32px;
        font-weight: bold;
    }

    h3{
        font-size: 18px;
        font-weight: bold;
    }

    h4{
        font-size: 16px;
        font-weight: bold;
    }
`;
export const WrapperImg = styled.img `
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;

export const WrapperUserGeneric = styled.div `
    display: flex;
    align-items: center;
    margin-top: 8px;
    
    h3{
        margin-right: 5px;
    }

    a{
        color: blue;
        font-weight: bold;
        font-size: 17px;
    }
`;

export const WrapperStatusCount = styled.div `
    display: flex;
    align-items: flex-start;

    div{
        margin: 8px;
        text-align: center;
    }
`