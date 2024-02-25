'use client';

import ActionButtons from '../ActionButtons';

function CompletePrevisualization() {
  return (
    <>
      Complete previsualization
      <ActionButtons
        primaryButton={{
          label: 'Ajouter au panier',
          action: () => console.log('add to cart'),
        }}
        secondaryButton={{
          label: 'Modifier',
          action: () => console.log('add to '),
        }}
      />
    </>
  );
}

export default CompletePrevisualization;
