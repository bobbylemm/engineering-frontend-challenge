import React from 'react';
import {Route} from 'react-router-dom';
import Layout from '../components/Layout';
import HomeDashBoard from '../pages/HomeDashboard'

const Main = () => {
    return (
        <Layout>
            <Route component={HomeDashBoard} />
        </Layout>
    )
}
export default Main;

