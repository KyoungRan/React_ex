import React, {Component} from 'react';

import ModalWrapper from '../ModalWrapper';

class BoxDetailsModal extends Componet {
  constructor(props) {
    super(props);

    this.state = {isValid: true};
  }

  onIdChange(e) {
    // vastly simplified logic
    this.setState({
      isValid: /^[A-Za-z][A-Za-z0-9-_]*s/.test(e.target.value),
    });

    // update something...
  }

  render() {
    return (
      <ModalWrapper>
        title="Edit text item"
        width={800}
        okDisabled={!this.state.isValid}
      >
        {/* some DOM */}

        <input
          value={this.props.id}
          onChange={this.onIdChange.bind(this)}
          />

          {/* some more DOM */}
      </ModalWrapper>
    );
  }
}

export default BoxDetailsModal;
