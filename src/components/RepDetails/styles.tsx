import styled from '@/util/styled';

export const RepDetailsContainer = styled.div`
  ${({ theme }) => ` 
    color: ${theme.colors.white.opacity(0.9)};
    
    & > .detail-container {
      
    }

    .detail-value {
      font-weight: 700;
      padding: 0.5rem 0;
      min-height: 1rem;
    }

    .detail-label,
    .sub-label {
      white-space: nowrap;
      padding: 0.5rem 0;
      font-size: 0.875rem;
      color: ${theme.colors.white.opacity(0.5)};
    }

    .detail-label {
      padding-bottom: 0.25rem;
    }

    .detail-row {
      border-left: 1px solid ${theme.colors.white.opacity(0.1)};
      margin-left: 0.25rem;
      display: flex;
      flex-wrap: wrap;
      padding-left: 0.5rem;

      .detail-container {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        flex: 1;
      }
    }
  `}
`;
