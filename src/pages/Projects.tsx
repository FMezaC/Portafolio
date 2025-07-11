import AnimatedLetters from "../components/AnimatedLetters";
import Ventas from "../assets/images/Ventas.jpg";
import Flotas from "../assets/images/Flotas.jpg";
import Biblioteca from "../assets/images/Biblioteca.jpg";
import {
  puntoDeVenta,
  SysFlotas,
  SysBiblioteca,
} from "../components/ProyectStructure/projectStructure.ts";
import TreeNode from "../components/TreeNodes/TreeView.js";
import Bubble from "../components/AnimatedLetters/bubble.tsx";

const Proyects = () => {
  const featVentas = [
    "Escaneo de códigos de barras",
    "Gestión de usuarios",
    "Reportes de ventas",
    "Control de stock",
    "Venta de productos",
  ];

  const featFlota = [
    "Control de flotas y unidades",
    "Reporte de carga transportada",
    "Gestion y control de facturas",
    "Control de viatico",
  ];

  const featBiblioteca = [
    "Registro y catálogo de libros",
    "Gestión de usuarios y préstamos",
    "Control de devolución",
    "Reportes de uso y actividad bibliotecaria",
  ];

  return (
    <section id="projects" className="bg-secundario py-5">
      <div className="container">
        <AnimatedLetters textAnimated="Proyects" />
        <Bubble />
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={Ventas} className="card-img-top" alt="Ventas" />
              <div className="card-body">
                <h5 className="card-title">Punto de ventas</h5>
                <p className="card-text">
                  Sistema de Punto de Ventas (POS) desarrollado para facilitar
                  la gestión de ventas, inventario, clientes y genera tickets,
                  objetivo Automatizar y digitalizar procesos de ventas en
                  pequeños comercios
                </p>
                <TreeNode node={puntoDeVenta} />
                <ol className="">
                  {featVentas.map((item, idx) => (
                    <li key={idx} className="">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={Flotas} className="card-img-top" alt="Flota" />
              <div className="card-body">
                <h5 className="card-title">Sistema de flotas</h5>
                <p className="card-text">
                  Controlar y optimizar la operación de transporte de carga,
                  facilitando la administración de vehículos, carga, facturación
                  y viáticos. Objetivo la gestión logística y financiera de
                  flotas para mejorar la eficiencia operativa y la toma de
                  decisiones.
                </p>
                <TreeNode node={SysFlotas} />
                <ol className="">
                  {featFlota.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={Biblioteca} className="card-img-top" alt="Biblioteca" />
              <div className="card-body">
                <h5 className="card-title">Biblioteca</h5>
                <p className="card-text">
                  Sistema diseñado para gestionar el préstamo de libros,
                  usuarios y catálogos bibliográficos de forma eficiente.
                  Objetivo facilitar el acceso a la información, mejorando la
                  organización y trazabilidad de los recursos disponibles.
                </p>
                <TreeNode node={SysBiblioteca} />
                <ol>
                  {featBiblioteca.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyects;
