import React, { Component } from "react";
import { Container } from "reactstrap";
import StoryCard from "./StoryCard";

class StoriesCard extends Component {
  render() {
    return (
      <Container>
        {this.props.stories.map((story) => (
          <StoryCard story={story} key={story.id} />
        ))}
      </Container>
    );
  }
}
export default StoriesCard;
