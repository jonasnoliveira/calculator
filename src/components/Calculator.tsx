import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";

export default function Calculator() {
  return (
    <Container
      maxWidth="xs"
      className="border border-2 border-blue-700 text-center py-3 m-2"
    >
      <Grid>
        <ButtonGroup size="large" aria-label="large button group">
          <Button variant="outlined">AC</Button>
          <Button variant="outlined">
            <BackspaceIcon />
          </Button>
          <Button variant="outlined">%</Button>
          <Button variant="outlined">/</Button>
        </ButtonGroup>
      </Grid>
      <Grid>
        <ButtonGroup size="large" aria-label="large button group">
          <Button variant="outlined">7</Button>
          <Button variant="outlined">8</Button>
          <Button variant="outlined">9</Button>
          <Button variant="outlined">x</Button>
        </ButtonGroup>
      </Grid>
      <Grid>
        <ButtonGroup size="large" aria-label="large button group">
          <Button variant="outlined">4</Button>
          <Button variant="outlined">5</Button>
          <Button variant="outlined">6</Button>
          <Button variant="outlined">-</Button>
        </ButtonGroup>
      </Grid>
      <Grid>
        <ButtonGroup size="large" aria-label="large button group">
          <Button variant="outlined">1</Button>
          <Button variant="outlined">2</Button>
          <Button variant="outlined">3</Button>
          <Button variant="outlined">+</Button>
        </ButtonGroup>
      </Grid>
      <Grid>
        <ButtonGroup size="large" aria-label="large button group">
          <Button variant="outlined" size="large">
            0
          </Button>
          <Button variant="outlined" size="large">
            ,
          </Button>
          <Button variant="contained" size="large">
            =
          </Button>
        </ButtonGroup>
      </Grid>
    </Container>
  );
}
