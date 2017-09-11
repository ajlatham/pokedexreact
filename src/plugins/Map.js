import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd';
import { Route, NavLink } from 'react-router-dom'
import Clock from 'clock';
import Regions from 'Recources/Locations/regions';
import Places from 'places';
import Types from 'Types';
import SubNav from 'components/SubNav';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

 class Map extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  

  render() {
    return(
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <NavLink to="/regions" >
                Regions
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/types" activeClassName="active">
                Types
              </NavLink>
            </Menu.Item>
            <Search
                placeholder="Search by name or number"
                style={{ width: 200, marginLeft: 40 }}
                onSearch={value => console.log(value)}
              />
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <SubNav />
            <Content style={{ padding: '0 24px' }}>
              <Route path="/types" component={Types} />
            </Content>
          </Layout>
        </Content>
        <Footer>
          <div style={{ textAlign: 'center' }}>
            <Clock message="Gotta catch em all!" />
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default Map;
