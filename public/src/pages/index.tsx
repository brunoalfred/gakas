import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <Header inverted as="h1">
          Nobody gets hacked
        </Header>
        <Header inverted as="h2">
          " To get hacked you need somebody with 197 IQ and he needs about 15
          percent of your password "
        </Header>

        <Header inverted as="h3">
          @Donald Trump
        </Header>
        <Button primary size="huge">
          Get started!
        </Button>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
     
  
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Kevin Mitnick</Header>
            <p>
              Are hackers a threat? The degree of threat presented by any
              conduct, whether legal or illegal, depends on the actions and
              intent of the individual and the harm they cause.
            </p>
            <Header>Emmanuel Goldstein</Header>
            <p>
              Most hackers are young because young people tend to be adaptable.
              As long as you remain adaptable, you can always be a good hacker.
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header>Bruce Sterling</Header>
            <p>
              Hackers are arrogant geek romantics. They lack the attentive
              spirit of inquiry.
            </p>
            <Header>Dan Kaminsky</Header>
            <p>
              It is a fairly open secret that almost all systems can be hacked,
              somehow. It is a less spoken of secret that such hacking has
              actually gone quite mainstream.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid
        columns="3"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="eject"></Icon>Skills  ☠️
            </Header>
            <p>
             Hacking Skills For you !
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="eject"></Icon>Tools  🥵
            </Header>
            <p>
             Hacking Tools For you !

            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="eject"></Icon>Tips 🤫
            </Header>
            <p>
            Hacking Tips For you !
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default withLayout(IndexPage);
