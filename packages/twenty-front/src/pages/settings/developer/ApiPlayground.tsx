import React, { useState } from 'react';

export const ApiPlayground: React.FC = () => {
  const [endpoint, setEndpoint] = useState<'/graphql' | '/open-api/'>('/graphql');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: '16px',
        background: '#111827',
        color: '#f9fafb',
        borderRadius: '12px',
        border: '1px solid #374151',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '12px',
          borderBottom: '1px solid #374151',
          marginBottom: '16px',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>
          Developer API Playground
        </h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              borderRadius: '6px',
              cursor: 'pointer',
              border: 'none',
              background: endpoint === '/graphql' ? '#4f46e5' : '#1f2937',
              color: '#fff',
            }}
            onClick={() => setEndpoint('/graphql')}
          >
            GraphQL Explorer
          </button>
          <button
            type="button"
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              borderRadius: '6px',
              cursor: 'pointer',
              border: 'none',
              background: endpoint === '/open-api/' ? '#4f46e5' : '#1f2937',
              color: '#fff',
            }}
            onClick={() => setEndpoint('/open-api/')}
          >
            REST OpenAPI
          </button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          width: '100%',
          minHeight: '500px',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid #374151',
          background: '#030712',
        }}
      >
        <iframe
          title="Twenty API Explorer"
          src={endpoint}
          style={{ width: '100%', height: '100%', border: 'none' }}
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </div>
    </div>
  );
};
