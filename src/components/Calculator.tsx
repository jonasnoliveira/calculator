import { Button, ButtonGroup, Container } from "@mui/material";

export default function Calculator() {
  return (
    <Container>
      <div>
        <ButtonGroup size="large" aria-label="large button group">
          <Button variant="outlined">9</Button>
          <Button variant="outlined">8</Button>
          <Button variant="outlined">7</Button>
        </ButtonGroup>

        <Button variant="outlined">6</Button>
        <Button variant="outlined">5</Button>
        <Button variant="outlined">4</Button>
        <Button variant="outlined">3</Button>
        <Button variant="outlined">2</Button>
        <Button variant="outlined">1</Button>
        <Button variant="outlined">0</Button>
      </div>
    </Container>
  );
}
