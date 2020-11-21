import React from 'react';

import { Grid } from './styles';

import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';


const Layout: React.FC = ({ children }) => {
    return (
        <Grid>
            <MainHeader/>
            <Content>
                { children }
            </Content>
            <Aside/>
        </Grid>

    )
}

export default Layout;