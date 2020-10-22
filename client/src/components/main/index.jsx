import React, {useContext, memo } from 'react';
import './main.css'
import Sidebar from '../sidebar';
import Box from '@material-ui/core/Box';
import { Route } from 'react-router-dom';
import Product from '../product';
import { AppContext } from '../../contexts/appContext';

function Main(){
    const { sidebarState } = useContext(AppContext)
    return (
        <Box id="main-content-wrapper" display="flex">
            <div id="main-sidebar-wrapper" className={sidebarState?'open':'close'}>
                <Sidebar />
            </div>
            <div>
                <Route component={Product} />
            </div>
        </Box>
    )
}
export default memo(Main)