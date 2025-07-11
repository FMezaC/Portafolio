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
    "Barcode scanning",
    "User management",
    "Sales reporting",
    "Inventory control",
    "Product sales",
  ];

  const featFlota = [
    "Fleet and vehicle management",
    "Transported cargo reporting",
    "Invoice management and tracking",
    "Expense and travel allowance",
  ];

  const featBiblioteca = [
    "Book registration and cataloging",
    "User and loan management",
    "Return tracking",
    "Library usage and activity reporting",
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
                  Developed a Point of Sale (POS) system to streamline sales,
                  inventory, and customer management, including automated
                  receipt generation. Designed to digitize and optimize retail
                  operations for small businesses.
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
                  Led optimization of freight operations by enhancing vehicle,
                  billing, and expense management systems. Improved fleet
                  logistics and financial oversight, enabling greater
                  operational efficiency and analytics-driven decision-making.
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
                  Created a solution to simplify book lending and user
                  management, improving access to information and ensuring
                  better organization and traceability of library resources.
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
