import React from "react";

interface Person {
  firstName: string;
  lastName: string;
}
interface Props {
  text: string;
  ok?: number;
  i?: number;
  fn?: (bob: string) => void;
  person: Person;
}

export const TextField: React.FC<Props> = () => {
  return <div></div>;
};
