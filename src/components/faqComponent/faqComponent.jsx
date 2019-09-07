import * as React from "react";
import { FaqContainer, FaqText } from "./components";

export const FaqComponent = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <FaqContainer>
      <FaqText> What do you do after you get a tattoo ?</FaqText>
      <FaqText>You Take Care Of It</FaqText>
    </FaqContainer>
  );
};