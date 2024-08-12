import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  image: string;
  username: string;
  nickname: string;
  onClick: () => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { image, username, nickname, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={image}
          alt="プロフィール画像"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {username}
        </Text>
        <Text fontSize="sm" color="gray">
          {nickname}
        </Text>
      </Stack>
    </Box>
  );
});
