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
    min-width: 20rem;
    display: flex;
    flex: 1;

    .input-container { flex: 1; }
  }

  .content-field {
    flex: 1;
  }

  .input-container {
    padding: 0.5rem;
  }

  @media only screen and (min-width: 540px) {
    .short-fields { max-width: 20rem; }
  }
`
