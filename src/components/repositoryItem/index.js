import React from 'react';
import * as S from './styled';

export default function RepositoryItem( {name, fullName, linkToRepo} ) {
  return (
    <S.Wrapper>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperFullName>full name:</S.WrapperFullName>
        <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</S.WrapperLink>

    </S.Wrapper>
  )
}
