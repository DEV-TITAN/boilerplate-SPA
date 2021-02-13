/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <h3>
            <span>Contact Us</span>
          </h3>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map" />
              <h3>Endereço</h3>
              <p>Politécnica UFBA - 8° andar - Sala 8.3.5</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope" />
              <h3>E-mail</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call" />
              <h3>Telefone</h3>
              <p>+55 71 9XXXX-XXXX</p>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6 ">
            <iframe
              className="mb-4 mb-lg-0"
              src="https://maps.google.com/maps?q=escola%20polit%C3%A9cnica%20da%20ufba&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              style={{ border: 0, width: '100%', height: '370px' }}
              allowFullScreen
            />
          </div>

          <div className="col-lg-6">
            <form className="php-email-form">
              <div className="form-row">
                <div className="col form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Seu nome"
                    data-rule="minlen:4"
                    data-msg="Insira pelo menos 4 caracteres"
                  />
                  <div className="validate" />
                </div>
                <div className="col form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Seu e-mail"
                    data-rule="email"
                    data-msg="Por favor digite um e-mail válido"
                  />
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Assunto"
                  data-rule="minlen:4"
                  data-msg="Insira pelo menos 8 caracteres do assunto"
                />
                <div className="validate" />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  data-rule="required"
                  data-msg="Por favor escreva algo para nós"
                  placeholder="Mensagem"
                />
              </div>
              <div className="text-center">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
