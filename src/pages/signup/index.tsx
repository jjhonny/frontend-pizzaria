import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.scss";

import logoImg from "../../../public/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizarria" />

        <div className={styles.login}>
          <h1>Cadastrar Conta</h1>
          <form>
            <Input type="text" placeholder="Digite seu nome" />
            <Input type="text" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          <Link className={styles.text} href="/">
            <span>Já possui uma conta? Faça login!</span>
          </Link>
        </div>
      </div>
    </>
  );
}
