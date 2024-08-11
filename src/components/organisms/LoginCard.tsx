import { FC, memo, useState } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";

export const LoginCard: FC = memo(() => {
  const [text, setText] = useState("");
  const { login, loading } = useAuth();
  const onClickLogin = () => login(text);
    // ここにaxiosを使ったログイン処理を実装。axiosの処理はhooksディレクトリに記述する
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
          <PrimaryButton onClick={onClickLogin} disabled={text === ''} isLoading={loading}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
