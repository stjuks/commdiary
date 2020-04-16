import styled from '@/util/styled';

export const PrintableDiariesContainer = styled.div`
  ${({ theme }) => `
    margin: 1rem;

    .back-link {
      box-shadow: inset 0 -2px 0 ${theme.colors.accent};
      color: ${theme.colors.accent};
      display: flex;
      align-items: center;
      padding: 0.5rem;
      margin-bottom: 1rem;

      svg {
        stroke-width: 3px;
      }
    }

    @media print {
      .back-link {
        display: none;
      }

      margin: 0;
    }
  `}
`;

export const DiaryTableContainer = styled.div`
  margin-bottom: 32px;
  page-break-before: always;

  .diary-name {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 8px;
  }

  .table-container {
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-size: 12px;

    .heading {
      font-weight: 700;
    }
  }

  .row-wrapper:nth-child(odd),
  .header {
    background: rgba(0, 0, 0, 0.05);
  }

  .row {
    display: grid;
    grid-template-columns: 48px 96px 48px 48px 1fr;

    > span {
      padding: 8px;
    }
  }

  .rep {
    padding: 8px;

    .rep-label {
      font-weight: 700;
    }

    .sub-label {
      margin-left: 0.5rem;
    }

    .rep-value {
      margin-left: 0.5rem;
    }

    .rep-title {
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
      font-weight: 700;
    }
  }
`;
