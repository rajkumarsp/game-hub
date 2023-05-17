import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const Metacritic = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge borderRadius={3} paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default Metacritic;
