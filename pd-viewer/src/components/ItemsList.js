//ItemsList

import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import PdItem from './PdItem';
import axios from 'axios';
// import usePromise from '../lib/usePromise';


const ItemsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// usePromise 적용은 필요하면 적용하기. 

//여기서 부터 수정 작업 필요.
const ItemsList = ({category}) => {
  const [articles,setArticles] = useState(null);
  const[loading,setLoading] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'food' ? 'food' : `${category}`
        switch(query){
          case "food":
            var response = await axios.get(
              'https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json'
            );
            console.log(response.data.getFoodKr.item)
            setArticles(response.data.getFoodKr.item);
            break;
            case "walking":
              var response = await axios.get(
                'https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&pageNo=1&numOfRows=100&resultType=json'
              );
              console.log(response.data.getWalkingKr.item)
              setArticles(response.data.getWalkingKr.item);
              break;
              default:
                alert("카테고리를 선택해주세요.")
        }
        
      } catch(e) {
        console.log(e)
      }
      setLoading(false);
    };
    fetchData();
  },[category])


  // 대기중일 때
  if (loading) {
    return <ItemsListBlock>대기중...</ItemsListBlock>
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!articles) {
    console.log("articles 응답이 없을 경우.")
    return null;
  }

  // response 값이 유효할 때
  
  return (
    <ItemsListBlock>
      {articles.map(article => (
        <PdItem key={article.MAIN_TITLE} article={article} />
      ))}
    </ItemsListBlock>
  );
};

export default ItemsList;