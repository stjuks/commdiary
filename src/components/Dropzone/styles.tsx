import styled from '@/util/styled';

export const DropzoneContainer = styled.div`
  ${({ theme }) => `
    border-radius: 0.5rem;
    border: 1px dashed ${theme.colors.white.opacity(0.25)};
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    height: 10rem;
    padding: 2rem;
    color: ${theme.colors.lightGrey};
    text-align: center;
    line-height: 1.5rem;

    .file-item {
      display: flex;
      align-items: center;

      .file-icon {
        margin-top: -2px;
        font-size: 1.25rem;
        stroke-width: 1.5;
      }

      .filename {
        margin-left: 0.5rem;
      }
    }
  `}
`;
