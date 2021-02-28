import styled from 'styled-components'

export const SectionInput = styled.div`
  input {
    background: var(--blue-dark);
    background: linear-gradient(
      90deg,
      rgba(78, 163, 224, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border: none;
    height: 4rem;
    width: 19rem;
    padding-left: 1rem;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    ::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`
