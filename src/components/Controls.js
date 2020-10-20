import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            id="inputTask"
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
          />
          <button
            id="buttonPrev"
            disabled
            style={{ marginLeft: '1rem' }}
            data-testid="move-back-btn"
            data-task=""
          >
            Move back
          </button>
          <button
            id="buttonNext"
            disabled
            style={{ marginLeft: '1rem' }}
            data-testid="move-forward-btn"
            data-task=""
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
