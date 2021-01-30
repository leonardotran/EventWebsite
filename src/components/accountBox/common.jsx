
import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  margin-bottom:15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  margin-top: 12px;
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 600;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(241, 196, 15);
  font-weight: 600;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1.5px solid rgba(200, 200, 200, 0.3);
  padding: 0px 12px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(119,204,137);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: .9rem 1.8rem;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: color .5s;
  transition: all, 240ms ease-in-out;
  background: rgb(119,204,137);
  background: linear-gradient(
        90deg, 
        rgba(119,204,137,1) 35%, 
        rgba(25,124,66,1) 65%);
  );

  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(1.03);
  }
`;