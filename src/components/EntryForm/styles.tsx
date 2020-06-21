import styled from '@/util/styled';

export const EntryFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  button {
    margin: 0.25rem 1rem;
    flex: 1;
  }
`;

export const MainFormFields = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0.5rem 0.5rem 0 0.5rem;

  .short-fields {
    min-width: 18rem;
    display: flex;
    flex: 1;

    .input-container { width: calc(100% / 3); }
  }

  .content-field {
    min-width: 10rem;
    flex: 1;
  }

  .input-container {
    padding: 0.5rem;
    box-sizing: border-box;
  }

  @media only screen and (min-width: 540px) {
  }
`
