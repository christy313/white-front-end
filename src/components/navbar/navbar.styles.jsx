import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
`;

// export const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 24px;
  padding: 3px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 24px;
`;
