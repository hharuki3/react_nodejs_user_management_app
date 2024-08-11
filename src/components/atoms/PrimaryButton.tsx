import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, disabled = false, isLoading = false } = props;
  return (
    <Button
      isDisabled={disabled}
      isLoading={isLoading}
      onClick={onClick}
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
});
