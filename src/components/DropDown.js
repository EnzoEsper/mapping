import React from 'react';
import {  Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {lineaToArr} from './lineas';

import './DropDown.css';

export default class Drop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
          Seleccione una linea
        </DropdownToggle>
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: 200,
                  },
                };
              },
            },
          }}
        >
          <DropdownItem header>Linea 2</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea1'))}}>A</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea2'))}}>B</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Linea 3</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea3'))}}>A</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea4'))}}>B</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea5'))}}>C</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Linea 5</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea6'))}}>A</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea7'))}}>B</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea8'))}}>C</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Linea 8</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea9'))}}>A (Guiraldes)</DropdownItem>
          <DropdownItem>B (Calle 21)</DropdownItem>
          <DropdownItem>B (Edison)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Linea 12</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea12'))}}>Don Bosco</DropdownItem>
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea13'))}}>V. Monona</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea14'))}}>101</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea15'))}}>104</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea16'))}}>106</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea17'))}}>107</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => {this.props.onClickHandle(lineaToArr('linea18'))}}>110</DropdownItem>

        </DropdownMenu>
      </Dropdown>
    );
  }
}