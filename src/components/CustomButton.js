import { Button, Stack } from "@chakra-ui/react";

function CustomButton({ name }) {
  return (
    <Stack direction={'row'} align={'center'}>
      <Button colorScheme="teal" variant={'ghost'}>
        {name}
      </Button>
    </Stack>
  );
}

export default CustomButton;