import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { UserCard } from "../organisms/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManageMent: FC = memo(() => {
  const { getUser, users, loading } = useAllUsers();

  useEffect(() => getUser(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap spacing="30px" p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                image="https://picsum.photos/800"
                username={user.name}
                nickname={user.username}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
