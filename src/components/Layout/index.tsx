import React from 'react';

import { Grid } from './styles';

import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';


const Layout: React.FC = () => {
    return (
        <Grid>
            <MainHeader/>
            <Content/>
            <Aside/>
        </Grid>

    )
}

export default Layout;