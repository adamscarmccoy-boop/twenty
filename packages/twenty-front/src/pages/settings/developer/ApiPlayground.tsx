import React, { useState } from 'react';

export const ApiPlayground: React.FC = () => {
  const [endpoint, setEndpoint] = useState('/graphql');

  return (
    <div className="flex flex-col h-full w-full p-4 bg-neutral-900 text-neutral-100 rounded-xl border border-neutral-800">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
        <h2 className="text-sm font-semibold tracking-wide">Developer API Playground</h2>
        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            className={`px-2.5 py-1 rounded-md transition ${endpoint === '/graphql' ? 'bg-indigo-600 text-white' : 'bg-neutral-800 text-neutral-400'}`}
            onClick={() => setEndpoint('/graphql')}
          >
            GraphQL Explorer
          </button>
          <button
            type="button"
            className={`px-2.5 py-1 rounded-md transition ${endpoint === '/rest' ? 'bg-indigo-600 text-white' : 'bg-neutral-800 text-neutral-400'}`}
            onClick={() => setEndpoint('/rest')}
          >
            REST OpenAPI
          </button>
        </div>
      </div>
      <div className="flex-1 w-full rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950">
        <iframe
          title="Twenty API Explorer"
          src={endpoint === '/graphql' ? '/api/graphql-playground' : '/api/docs'}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </div>
    </div>
  );
};

export default ApiPlayground;
