import styled from '@/util/styled';

export const PrintableDiariesContainer = styled.div`
  margin: 1rem;

  @media print {
    margin: 0;
  }
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
    border: 1px solid rgba(0, 0, 0, .25);
    border-radius: 4px;

    .heading {
      font-weight: 700;
    }
  }

  .row {
    font-size: 12px;
    display: grid;
    grid-template-columns: 48px 96px 48px 48px 1fr;

    > span {
      padding: 8px;
    }

    :nth-child(odd) {
      background: rgba(0, 0, 0, .05);
    }
  }
`;
