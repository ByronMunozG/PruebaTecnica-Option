import { Alert, Center } from '@mantine/core';
import { IoAlertCircleOutline } from 'react-icons/io5';

const ErrorAlert = () => (
  <Center>
    <Alert
      icon={<IoAlertCircleOutline size={16} />}
      title="¡Error!"
      color="red"
      mt="lg"
      style={{ maxWidth: '40vw' }}
    >
      ¡Ocurrió un error!, por favor contáctese con el administrador.
    </Alert>
  </Center>
);

export default ErrorAlert;
