import React from 'react';
import { useToast } from '@chakra-ui/react';

const Notification = ({ title, description, status }) => {
  const toast = useToast();
  React.useEffect(() => {
    if (title && description && status) {
      toast({ title, description, status, duration: 5000, isClosable: true });
    }
  }, [title, description, status, toast]);

  return null;
};

export default Notification;
