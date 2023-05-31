//ItemsList

import React from 'react';
import styled from 'styled-components';
import PdItem from './PdItem';


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
const sampleArticle = {
    MAIN_TITLE: '제목',
    ITEMCNTNTS: '내용',
    MAIN_IMG_NORMAL:'https://via.placeholder.com/160',
}

const ItemsList = () => {
    return (
        <ItemsListBlock>
            <PdItem article={sampleArticle}/>
            <PdItem article={sampleArticle}/>
            <PdItem article={sampleArticle}/>
            <PdItem article={sampleArticle}/>
            <PdItem article={sampleArticle}/>
        </ItemsListBlock>
    )

};

export default ItemsList;