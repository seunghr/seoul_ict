import styled from 'styled-components'

// 상단에 제목이 표시 되는 일
// sticky 상단에 고정
export const Menu = styled.div`
  position: sticky; top: 0;
  width: 100%; height: 100px;
  font-size: 18px;
  color: #fff;
  display: flex; 
  justify-content: center;
  align-items: center;  
`
// 카드 여러개가 포함되는 컨테이너 블록
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #5b5b5b;
  width: 100%; margin: 0 auto;
  @media all and (max-width: 1500px){
    width: 80%;
  }
  @media all and (max-width: 1000px){
    width: 100%;
  }
`
// 카드 한장
// &:hover 스타일드 컴포넌트에서 &의 의미 : 자기 자신
export const Item = styled.div`
  cursor: pointer;
  width: 20%; height: 400px;
  line-height: 50px;
  margin: 2%;
  border-radius: 20px;
  color: #FFFFFF;
  overflow: hidden;
  &:hover{
    transform: translate(0, -20px);
  }
  @media all and (max-width: 800px){
    width: 46%;
  }
  @media all and (max-width: 500px){
    width: 98%;
  }
`
// 카드 내부에 이미지를 표시할 필요가 있을 때 사용하는 태그
export const Image = styled.div`
  height: 250px; 
  background-image: url(${props => props.imagePath});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`
// 카드 내부에 색만 표시되고 싶다면 이걸로 쓴다
export const ColorBox = styled.div`
  height: 250px; 
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`