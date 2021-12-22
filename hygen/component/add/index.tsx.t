---
to: <%= category %>/<%= name %>.tsx
unless_exists: true
---
import react from "React";
import styled from "styled-components";

export type <%= name %>Props =  {
  purpose?: string;
}

const Styled<%= name %> = styled.div``;

export const <%= name %> = ({ purpose }: <%= name %>Props) => {
  return (
    <Styled<%= name %>>
    test
    </Styled<%= name %>>
  );
};