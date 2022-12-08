import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Container, Typography, AppBar, Toolbar } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const Logo = styled(Link)`
  text-transform: unset;
  color: inherit;
  text-decoration: unset;
`;

const NavLink = styled(Link)`
  text-transform: unset;
  color: #a5a5a5;
  margin: 0 20px;
  text-decoration: unset;
`;

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "#343A40",
          height: "50px",
          "& .MuiToolbar-regular": {
            minHeight: "50px",
          },
        }}
        position="static"
      >
        <Toolbar>
          <Typography variant="h4">
            <Logo to="/">Transport</Logo>
          </Typography>
          <Typography variant="body2">
            <NavLink to="/counter">Counter</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>{props.children}</Container>
      </main>
    </div>
  );
};

export default Layout;
