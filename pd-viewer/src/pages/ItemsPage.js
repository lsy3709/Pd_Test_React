// import React, {useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Categories from '../components/Categories';
import ItemsList from '../components/ItemsList';

const ItemsPage = ({ match }) => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || 'food';

    // useEffect( () => {
    //   const titleElement = document.getElementsByTagName("title")[0];
    //   titleElement.innerHTML=`뉴스 -${params.category}`;
    // },[params.category ] );

  return (
    <>
      <Categories />
      <ItemsList category={category} />
    </>
  );
};

export default ItemsPage;