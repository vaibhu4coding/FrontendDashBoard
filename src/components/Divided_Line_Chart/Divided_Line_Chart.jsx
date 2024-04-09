import React from 'react';

const HorizontalDivider = ({ feedback }) => {
  const { negative, neutral, positive } = feedback;

  // Calculate the width of each section based on the feedback percentages
  const negativeWidth = `${negative}%`;
  const neutralWidth = `${neutral}%`;
  const positiveWidth = `${positive}%`;

  return (
    <div style={{ display: 'flex', height: '5.9px', marginTop: '10px' }}>
      <div style={{ flex: negativeWidth, backgroundColor: '#fea7a9', borderRadius: '10px 0 0 10px', marginRight: '5px' }}></div>
      <div style={{ flex: neutralWidth, backgroundColor: '#ffcd8e', marginRight: '5px' }}></div>
      <div style={{ flex: positiveWidth, backgroundColor: '#90edb5', borderRadius: '0 10px 10px 0' }}></div>
    </div>
  );
};

export default HorizontalDivider;
