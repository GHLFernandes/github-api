import React from 'react';
import ResetCSS from './global/resetCSS'
import GithubProvider from './providers/github-provider'
import App from './App';

export default function Providers() {
  return (
    <main>
        <GithubProvider>
            <ResetCSS/>
            <App/>
        </GithubProvider>
    </main>
  )
}
