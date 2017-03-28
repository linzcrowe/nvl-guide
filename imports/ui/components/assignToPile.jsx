import React, { PropTypes } from 'react';
import Quality from './quality.jsx';
import Centre from './centre.jsx';
import Button from './button.jsx';
import CentredRow from './centredRow.jsx';

export default AssignToPile = (props) => {
  const callback = (err, suc) => {
    if (err) {
      alert(JSON.stringify(err));
    }
  };
  
  return (
    <div>
      <Centre>
        <Quality 
          title={props.qualityTitle}
          description={props.qualityDescription} />
      </Centre>
      <CentredRow>
        <Button primary onClick={() => props.onAssignToLikeEnergise(callback)}>
            I'm Like This
            <br />
            It Energises Me
        </Button>
        <Button primary onClick={() => props.onAssignToLikeDrain(callback)}>
            I'm Like This
            <br />
            Neutral
        </Button>
        <Button primary onClick={() => props.onAssignToLikeDrain(callback)}>
            I'm Like This
            <br />
            It Drains Me
        </Button>
      </CentredRow>
      <CentredRow>
        <Button primary onClick={() => props.onAssignToNotLike(callback)}>
            I'm Not Like
            <br />
            This
        </Button>
      </CentredRow>
    </div>
    );
}

AssignToPile.propTypes = {
  qualityTitle: PropTypes.string.isRequired,
  qualityDescription: PropTypes.string.isRequired,
  onAssignToLikeEnergise: PropTypes.func.isRequired,
  onAssignToLikeDrain: PropTypes.func.isRequired,
  onAssignToNotLike: PropTypes.func.isRequired,
}