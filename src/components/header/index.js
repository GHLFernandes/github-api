import React, { useState } from 'react'
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = (e) => {
    if(!usernameForSearch) return;

    return getUser(usernameForSearch);
  }


  return (
    <S.Wrapper>
        <input 
          type="text" 
          placeholder="Digite o username para pesquisa..." 
          onChange={(e) => setUsernameForSearch(e.target.value)}/>

        <button 
          type="submit"
          onClick={submitGetUser}>
            Buscar</button>
    </S.Wrapper>
  )
}

export default Header;