import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)
`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)
`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)
`
    border-radius: 16px;
    border: 1px solid #f2f2f2;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: black;
    margin: 8px;

    &:focus{
        outline: none;
        box-shadow: 0 0 .3em rgba(0, 0, 0, .5);

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, .5);
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)
`
    padding: 16px;
    display: none;
    margin-top: -5px;
    
    &.is-selected {
        display: block;
    }
    
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;