import { faMapMarkedAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import BackendTree from "../components/Arbolbinario/backendTree.tsx";
import emailJs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = "service_5t9zejp";
    const templateId = "template_m3ita83";
    const publicKey = "iqjC6TFiX9o9xyio3";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailJs.send(serviceId, templateId, templateParams, publicKey).then(
      (Response) => {
        console.log("succes!", Response.status, Response.text);
        setFormData({
          name: "",
          email: "",
          message: "",
          time: new Date().toLocaleString(),
        });
        alert("Mensaje enviado");
      },
      (error) => {
        console.log("error al enviar mensaje", error);
      }
    );
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="mb-4 text-center">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message!"
                  className="form-control"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-principal w-100">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="text-center mt-5">
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} /> +51 964-309-641
              </p>
              <p>
                <FontAwesomeIcon icon={faMailBulk} /> fmezacolorado@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkedAlt} /> Lima - Perú
              </p>
              <BackendTree />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
