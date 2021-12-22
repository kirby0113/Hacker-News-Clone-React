import react from "React";
import styled from "styled-components";

export type HeaderProps =  {
  purpose?: string;
}

const StyledHeader = styled.div``;

export const Header = ({ purpose }: HeaderProps) => {
  return (
    <StyledHeader>
    test
    </StyledHeader>
  );
};