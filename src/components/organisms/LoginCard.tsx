import { FC, memo, useState } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";

export const LoginCard: FC = memo(() => {
  const [text, setText] = useState("");
  const onClickLogin = () =>
    // ここにaxiosを使ったログイン処理を実装
    alert(`ログインしました：${text}`);
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            onChange={onChangeText}
            value={text}
          />
          <PrimaryButton onClick={onClickLogin}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
