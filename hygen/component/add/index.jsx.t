---
to: src/<%= category %>/<%= name %>.jsx
unless_exists: true
---
import react from "React";
import styled from "styled-components";

const Styled<%= name %> = styled.div``;

export const <%= name %> = ({ purpose }) => {
  return (
    <Styled<%= name %>>
    test
    </Styled<%= name %>>
  );
};