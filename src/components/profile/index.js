import React from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

export default function Profile() {
    const { githubState } = useGithub();


  
    return (
    <S.Wrapper>
        <S.WrapperImg src={githubState.user.avatar_url}alt="Avatar of User" />  
        <S.WrapperInfoUser>
            <div>
                <h1>{githubState.user.name}</h1>
                <S.WrapperUserGeneric>
                    <h3>Company:</h3>
                    <span>{githubState.user.company}</span>
                </S.WrapperUserGeneric>
                
                <S.WrapperUserGeneric>
                    <h3>Location:</h3>
                    <span>{githubState.user.location}</span>
                </S.WrapperUserGeneric>
                
                <S.WrapperUserGeneric>
                    <h3>Blog:</h3>
                    <span>{githubState.user.blog}</span>
                </S.WrapperUserGeneric>
                
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>{githubState.user.followers}</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>{githubState.user.following}</span>
                </div>
                <div>
                    <h4>Gists</h4>
                    <span>{githubState.user.public_gists}</span>
                </div>
                <div>
                    <h4>Repos</h4>
                    <span>{githubState.user.public_repos}</span>
                </div>
            </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
  )
}
