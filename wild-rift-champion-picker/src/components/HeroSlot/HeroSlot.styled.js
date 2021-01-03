import styled from 'styled-components'

export const HeroSlotWrapper = styled.div`
  border: 1px solid #ccc;
  height: 360px;
  width: 275px;
  margin-right: 25px;
  background-image: url(${props => props.img});
  display: inline-flex;
`

export const HeroName = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: white;
  align-self: center;
  width: 100%;
  text-align: center;
`;

export const HeroDropGuide = styled.div`
  font-size: 17px;
  font-weight: bold;
  align-self: center;
  width: 100%;
  color: black;
  text-align: center;
`;
