import React from 'react'

export const Alert = ({ alert }) => {
  return (
    alert != null && (
      <div className={`alert-div card-panel ${alert.type}`}>
        <i className="fas fa-minus-circle"></i>{alert.msg}
      </div>
    )
  )
}

export default Alert
