import React from 'react'

export const RowOffsetXs1 = ({ children }) => {
  return (
    <div className="row">
      <div className="col offset-xs-1">
        {children}
      </div>
    </div>
  )
}
