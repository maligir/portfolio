import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const Newsletter = ({onValidated }) => {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })

    setButtonText("Sending...");
    emailjs.init("qCCnCpPfISaMtCqjl")
    emailjs.send("service_nl6isbc", "template_ti6olcx", {email: email})
    .then(function(result) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    }, function(error) {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    });
    setButtonText("Submit");

    clearFields();
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit"><span>{buttonText}</span></button>
                </div>
                {status.succes === false && <Alert variant="danger">{status.message}</Alert>}
              {status.succes === true && <Alert variant="success">{status.message}</Alert>}
              </form>
              
            </Col>
          </Row>
        </div>
      </Col>
  )
}
