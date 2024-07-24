import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <h1 className="font-bold text-inherit text-xl">Gestor de Tareas</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/historial" color="foreground">Historial de Tareas Terminadas</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="shadow">
            Iniciar Sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
