import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="envelope open" />
          <Header.Content>
          WORK YOUR WAY INTO INFOSEC
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          Have all that you need as an INFOSEC expert. For skills, tools and all that is happening in the 
        </p>
        <p>
          For any question, I'm on <a href="https://discord.gg/nAuUER" target="blank">discord server </a>
        </p>
        <p>
          For anything to contribute
          <a href="https://github.com/brunoalfred/gakas" target="blank"> on this repository</a>
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
