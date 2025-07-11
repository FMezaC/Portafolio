//estructura de proyecto
export const puntoDeVenta = {
  name: "Tecnologia Utilizada",
  children: [
    {
      name: "CSharp",
      children: [{ name: "API Rest" }, { name: "MVC" }, { name: "N Capas" }],
    },
    { name: "Data Base", children: [{ name: "Sql Server" }] },
  ],
};

export const SysFlotas = {
  name: "Tecnologia Utilizada",
  children: [
    {
      name: "React",
      children: [
        { name: "TypeScrip" },
        { name: "bootstrap" },
        { name: "JavaScript" },
      ],
    },
    {
      name: "Node Js",
      children: [{ name: "Node" }],
    },
    { name: "Data Base", children: [{ name: "PostgreSQL" }] },
  ],
};

export const SysBiblioteca = {
  name: "Tecnologia Utilizada",
  children: [
    {
      name: "CSharp",
      children: [
        { name: "API Rest" },
        { name: "Framework" },
        { name: "N Capas" },
      ],
    },
    { name: "Data Base", children: [{ name: "My SqlServer" }] },
  ],
};
