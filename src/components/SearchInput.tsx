import { Input } from "@chakra-ui/react";
import React from "react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input
        borderRadius={20}
        placeholder="Searrch games..."
        variant="outline"
      />
    </InputGroup>
  );
};

export default SearchInput;
