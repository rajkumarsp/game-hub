import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch> </BsSearch>}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          variant={"filled"}
          placeholder="Search Game"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
