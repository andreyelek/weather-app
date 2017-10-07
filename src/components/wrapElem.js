import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import PropTypes from 'prop-types'
import {setActive} from '../reducers'

export function wrapElem(ComposedComponent) {
  return class SelectableList extends Component {

    handleRequestChange (event, index) {
       setActive(index)
    };
    static childContextTypes =
    {
        muiTheme: PropTypes.object
    }

    getChildContext()
    {
        return {
            muiTheme: getMuiTheme()
        }
    }
    render() {
      return (
        <ComposedComponent
          value={this.props.activeElement}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}