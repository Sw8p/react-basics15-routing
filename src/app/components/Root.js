import React, { Component } from 'react'

import { Header } from './Header'
import { RowOffsetXs1 } from './RowOffsetXs1'

export class Root extends Component {
  render () {
    return (
      <div className="container">
        <RowOffsetXs1>
          <Header />
        </RowOffsetXs1>
        <RowOffsetXs1>
          {this.props.children}
        </RowOffsetXs1>
      </div>
    )
  }
}
