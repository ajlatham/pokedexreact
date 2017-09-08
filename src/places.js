import React, {Component} from 'react';
export default class Places extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {

    let regions = [];
    if (this.props.regions) {
      regions = this.props.regions.map(function (region, index) {
          return (
            <li key={index}>{region.name}</li>
          )
        });
    }

    return(
      <ul>
        {regions}
      </ul>
    );
  }
}
