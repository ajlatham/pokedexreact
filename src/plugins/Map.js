import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd';
import { Route, NavLink } from 'react-router-dom'
import Clock from '../clock';
import Regions from '../Recources/Locations/regions';
import Places from '../places';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

 class Map extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  getInitialState() {
    return {
      regions:[]
    }
  }
  componentDidMount() {
    Regions.getRegionsList()
    .then(function (data) {
      this.setState({
        regions: data.results
      });
    }.bind(this));
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
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px' }}>
              <Route path="/types" component={Types} />
              <Places regions={this.state.regions} />
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
