import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.scss";

import logoImg from "../../public/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizarria" />

        <div className={styles.login}>
          <form>
            <Input type="text" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
        </div>
      </div>
    </>
  );
}
