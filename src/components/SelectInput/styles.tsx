import styled from '@/util/styled';
import { TextInputContainer } from '../TextInput/styles';

export const SelectInputContainer = styled(TextInputContainer)`
  width: 0;

  .input-field {
    position: relative;
    align-items: center;

    select {
      padding-right: 1.5rem;
      width: 100%;

      option {
        color: black;
        background: white;
      }
    }

    .indicator {
      right: 0;
      z-index: -1;
      position: absolute;
    }
  }
`;
