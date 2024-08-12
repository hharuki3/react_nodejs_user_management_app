import { Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo } from "react";
import { UserCard } from "../organisms/UserCard";

export const UserManageMent: FC = memo(() => {
  return (
    <Wrap spacing="30px" p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          image="https://picsum.photos/800"
          username="username"
          nickname="nickname"
        />
      </WrapItem>
    </Wrap>
  );
});
