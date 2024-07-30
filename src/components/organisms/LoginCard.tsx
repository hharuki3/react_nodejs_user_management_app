import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";

export const LoginCard: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box>
        <Heading as="h1">ユーザー管理アプリ</Heading>
        <Input placeholder="ユーザーID" />
        <PrimaryButton>ログイン</PrimaryButton>
      </Box>
    </Flex>
  );
});
