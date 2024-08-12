import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { UserCard } from "../organisms/UserCard";
import { UserDetailModal } from "../organisms/UserDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectedUser } from "../../hooks/useSelectedUser";

export const UserManageMent: FC = memo(() => {
  const { getUser, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectedUser();
  const onClickUser = (id: number) => {
    onSelectUser({ id: id, users: users, onOpen: onOpen });
  };
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
                id={user.id}
                image="https://picsum.photos/800"
                username={user.name}
                nickname={user.username}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} selectedUser={selectedUser} />
    </>
  );
});
