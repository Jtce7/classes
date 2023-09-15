import React, { useState } from "react";

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([
    {
      id: 1,
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      nombre: "John Doe",
      ocupacion: "CEO, Empresa ABC",
    },
    // Otros testimonios
  ]);

  const [nuevoTestimonio, setNuevoTestimonio] = useState({
    texto: "",
    nombre: "",
    ocupacion: "",
  });

  const agregarTestimonio = () => {
    const nuevoId = testimonios.length + 1;
    const nuevoTestimonioConId = { ...nuevoTestimonio, id: nuevoId };
    setTestimonios([...testimonios, nuevoTestimonioConId]);
    setNuevoTestimonio({
      texto: "",
      nombre: "",
      ocupacion: "",
    });
  };

  const editarTestimonio = (id, nuevoContenido) => {
    const nuevosTestimonios = testimonios.map((testimonio) => {
      if (testimonio.id === id) {
        return { ...testimonio, ...nuevoContenido };
      }
      return testimonio;
    });
    setTestimonios(nuevosTestimonios);
  };

  const borrarTestimonio = (id) => {
    const nuevosTestimonios = testimonios.filter(
      (testimonio) => testimonio.id !== id
    );
    setTestimonios(nuevosTestimonios);
  };

  return (
    <section className="testimonios">
      <div className="testimonios__container">
        <h2 className="testimonios__titulo">Testimonios de Clientes</h2>
        <div className="testimonios__lista">
          {testimonios.map((testimonio) => (
            <div className="testimonios__item" key={testimonio.id}>
              <div className="testimonios__contenido">
                <p className="testimonios__texto">{testimonio.texto}</p>
                <p className="testimonios__nombre">{testimonio.nombre}</p>
                <p className="testimonios__ocupacion">{testimonio.ocupacion}</p>
              </div>
              <div className="testimonios__botones">
                <button
                  className="testimonios__boton-editar"
                  onClick={() => {
                    // Lógica para editar el testimonio
                    const nuevoContenido = {
                      texto: "Nuevo texto",
                      nombre: "Nuevo nombre",
                      ocupacion: "Nueva ocupación",
                    };
                    editarTestimonio(testimonio.id, nuevoContenido);
                  }}
                >
                  Editar
                </button>
                <button
                  className="testimonios__boton-eliminar"
                  onClick={() => {
                    // Lógica para eliminar el testimonio
                    borrarTestimonio(testimonio.id);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonios__agregar">
            <h3>Agregar Testimonio</h3>
            <input
                type="text"
                placeholder="Nombre"
                value={nuevoTestimonio.nombre}
                onChange={(e) =>
                setNuevoTestimonio({ ...nuevoTestimonio, nombre: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Ocupación"
                value={nuevoTestimonio.ocupacion}
                onChange={(e) =>
                setNuevoTestimonio({ ...nuevoTestimonio, ocupacion: e.target.value })
                }
            />
            <textarea
                placeholder="Tu testimonio"
                value={nuevoTestimonio.texto}
                onChange={(e) =>
                setNuevoTestimonio({ ...nuevoTestimonio, texto: e.target.value })
                }
            />
            <button
                className="testimonios__boton-agregar"
                onClick={() => {
                // Lógica para agregar el testimonio
                agregarTestimonio();
                }}
            >
                Agregar
            </button>
            </div>
      </div>
    </section>
  );
};

export default Testimonios;
