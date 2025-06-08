import { Header } from "./components/header";
import { Center, Text } from "@chakra-ui/react";

import styles from "./index.module.css";

export const Desktop = () => {
  return (
    <>
      <Header />
      <Center>
        <Text textStyle="7xl">Профориентация</Text>
      </Center>
      <div className={styles.div} />
      <div className={styles.div} />
      <div className={styles.div} />
    </>
  );
};
