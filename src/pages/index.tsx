import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.scss";

import logoImg from "../../public/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FormEvent, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: "algum@teste.com",
      password: "12341234",
    };

    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizarria" />

        <div className={styles.login}>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <Input type="text" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link className={styles.text} href="/signup">
            <span>Não possui uma conta? Cadastre-se</span>
          </Link>
        </div>
      </div>
    </>
  );
}
