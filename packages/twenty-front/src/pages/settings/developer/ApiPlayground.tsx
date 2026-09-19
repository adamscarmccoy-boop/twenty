import { styled } from '@linaria/react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { useState } from 'react';
import { themeCssVariables } from 'twenty-ui/theme-constants';

import { REACT_APP_SERVER_BASE_URL } from '~/config';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${themeCssVariables.spacing[4]};
  padding: ${themeCssVariables.spacing[6]};
  background: ${themeCssVariables.background.secondary};
  border-radius: ${themeCssVariables.border.radius.md};
  border: 1px solid ${themeCssVariables.border.color.light};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${themeCssVariables.spacing[3]};
  border-bottom: 1px solid ${themeCssVariables.border.color.light};
  margin-bottom: ${themeCssVariables.spacing[4]};
`;

const StyledTitle = styled.h2`
  color: ${themeCssVariables.font.color.primary};
  font-size: ${themeCssVariables.font.size.md};
  font-weight: ${themeCssVariables.font.weight.semiBold};
  margin: 0;
`;

const StyledButtonRow = styled.div`
  display: flex;
  gap: ${themeCssVariables.spacing[2]};
`;

const StyledTabButton = styled.button<{ isActive: boolean }>`
  padding: 6px 12px;
  font-size: ${themeCssVariables.font.size.sm};
  border-radius: ${themeCssVariables.border.radius.sm};
  cursor: pointer;
  border: none;
  background: ${({ isActive }) =>
    isActive ? themeCssVariables.color.blue : themeCssVariables.background.tertiary};
  color: ${themeCssVariables.font.color.primary};

  &:hover {
    opacity: 0.9;
  }
`;

const StyledIframeContainer = styled.div`
  flex: 1;
  width: 100%;
  min-height: 500px;
  border-radius: ${themeCssVariables.border.radius.md};
  overflow: hidden;
  border: 1px solid ${themeCssVariables.border.color.light};
  background: ${themeCssVariables.background.primary};
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const ApiPlayground = () => {
  const [activeTab, setActiveTab] = useState<'graphql' | 'rest'>('graphql');

  const targetUrl =
    activeTab === 'graphql'
      ? `${REACT_APP_SERVER_BASE_URL}/api/graphql-playground`
      : `${REACT_APP_SERVER_BASE_URL}/api/docs`;

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>
          <Trans>Developer API Playground</Trans>
        </StyledTitle>
        <StyledButtonRow>
          <StyledTabButton
            type="button"
            isActive={activeTab === 'graphql'}
            onClick={() => setActiveTab('graphql')}
          >
            <Trans>GraphQL Explorer</Trans>
          </StyledTabButton>
          <StyledTabButton
            type="button"
            isActive={activeTab === 'rest'}
            onClick={() => setActiveTab('rest')}
          >
            <Trans>REST OpenAPI</Trans>
          </StyledTabButton>
        </StyledButtonRow>
      </StyledHeader>
      <StyledIframeContainer>
        <StyledIframe
          title={t`Twenty API Explorer`}
          src={targetUrl}
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </StyledIframeContainer>
    </StyledContainer>
  );
};
