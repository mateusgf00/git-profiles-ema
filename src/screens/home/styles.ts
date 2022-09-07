import styled from "styled-components";


export const Container = styled.div`
  margin-top: 32px;
  margin-left: 20%;
  margin-right: 20%;  
`;

export const InputSearchContainer = styled.div`
  width:60%;
  margin: 0 auto;

  input{
      width:100%;
      background: #fff;
      border: none;
      border-radius:25px;
      height: 50px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
      outline: 0;
      padding: 0 16px;
      &::placeholder {
          color: #BCBCBC;
      }
  }
`;