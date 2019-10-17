import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Name' : 'Nombre';
  }

  render() {
    return (
      <div className="ui field">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
        <input />
      </div>
    )
  }
}

export default Field;