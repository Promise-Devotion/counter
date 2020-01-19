import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
// import App from '../App'
import About from '../components/about/about'
import Home from '../components/home/home'
import { Layout } from 'antd'
// import Sider from 'antd/lib/layout/Sider'
const { Header, Footer, Sider, Content } = Layout;



export default class AppRouter extends React.Component {
    public myClickHandler (data:any) {
    console.log(data)
    }
    public render() {
        return (
            <Router>
                <Layout>
                    <Sider>

                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">about</Link></li>
                        </ul>

                    </Sider>
                    <Layout>
                        <Header>Header</Header>k
                        <Content>
                            <Switch>
                                <Route exact path="/About" component={About} />
                                <Route path="/Home" component={Home} />
                                {/* <Route component={About} /> */}
                            </Switch>
                            <p style={{ fontSize: 24, color: '#f00' }}>hello</p>
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}