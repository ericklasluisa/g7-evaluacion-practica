import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main className="m-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-center text-gray-100">
        Simplifica tu Vida con Nuestra App de Gestión de Tareas
      </h1>
      <p className="text-lg text-gray-300 text-center px-24 py-10">
        Organiza, prioriza y completa tus tareas de manera eficiente con nuestra
        intuitiva aplicación. Con funciones diseñadas para mejorar tu
        productividad y colaboración, nunca ha sido tan fácil mantenerte al día
        con tus responsabilidades diarias.
      </p>
      <div>
        <Button color="primary" variant="shadow" size="lg">
          Inicia sesión
        </Button>
      </div>
    </main>
  );
}
