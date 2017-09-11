import React, {Component} from 'react';
import Regions from 'Recources/Locations/regions';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

export default class SubNav extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Regions.getRegionsList()
    .then(function (data) {
      this.setState({
        regions: data.results
      });
    }.bind(this));
  }

  capitalizedFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    let regions = [];
    if (this.state.regions) {
      this.state.regions.forEach((region, index) => {
        regions.push((
          <Menu.Item key={index}>{this.capitalizedFirstLetter(region.name)}</Menu.Item>
        ));
      });
    }

    return(
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
        >
          {regions}
        </Menu>
      </Sider>
    );
  }
}
