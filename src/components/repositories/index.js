import React, { useEffect, useState } from 'react'
import * as S from './styled'
import RepositoryItem from '../repositoryItem'
import useGithub from '../../hooks/github-hooks';

export default function Repositories() {

    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [ hasUserForSearchRepos, setHasUserForSearchRepos ] = useState(false);

    useEffect(() => {
        if(githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchRepos(githubState.repositories);
    }, [githubState.user.login])

    return (
        <>
            {hasUserForSearchRepos ? 

                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>
                            Repositories
                        </S.WrapperTab>
                        <S.WrapperTab>
                            Starred
                        </S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name} />
                                
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperList>
                        <S.WrapperTabPanel>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name} />
                                
                            ))}
                        </S.WrapperTabPanel>
                    </S.WrapperList>
                </S.WrapperTabs>
            : <></>}
        </>
     )
}