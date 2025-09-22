import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Particle from "../Particle";
import { useAuth } from "../../context/AuthContext";
import circleAnimation from "../../Assets/CircleLogin.json";
import confettiAnimation from "../../Assets/Confeti.json";
import portalLogo from "../../Assets/logo.png";
import "./Login.css";

const INITIAL_STATE = {
  email: "",
  password: "",
};

function Login() {
  const { login, status, isAuthenticated, user, initializing } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isLoading = status === "loading";
  const isDisabled = isLoading || initializing;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (initializing || isLoading) {
      return;
    }

    setError(null);
    setSuccess(false);

    if (!form.email || !form.password) {
      setError("Preencha e-mail e senha.");
      return;
    }

    try {
      const result = await login(form);
      setForm(INITIAL_STATE);
      setSuccess(true);
      return result;
    } catch (err) {
      setError(err?.message || "Erro desconhecido ao tentar entrar.");
      return null;
    }
  };

  useEffect(() => {
    if (!success) {
      setShowConfetti(false);
      return undefined;
    }

    setShowConfetti(true);
    const timeout = setTimeout(() => setShowConfetti(false), 2800);
    return () => clearTimeout(timeout);
  }, [success]);

  const alreadyLogged = !initializing && isAuthenticated;

  useEffect(() => {
    if (!alreadyLogged) {
      return undefined;
    }

    const delay = success ? 2800 : 600;
    const timeout = setTimeout(() => {
      navigate("/portal", { replace: true });
    }, delay);

    return () => clearTimeout(timeout);
  }, [alreadyLogged, success, navigate]);

  return (
    <section className="login-page">
      <Particle />
      {showConfetti && (
        <div className="login-confetti">
          <Lottie
            animationData={confettiAnimation}
            loop={false}
            autoplay
            className="login-confetti-animation"
          />
        </div>
      )}
      <Container className="login-container">
        <div className="login-card">
          <aside className="login-visual">
            <div className="login-visual-inner">
              <span className="login-tag">Portal</span>
              <Lottie
                animationData={circleAnimation}
                loop
                autoplay
                className="login-animation"
              />
              <div className="login-visual-text">
                <h2>Bem-vindo de volta!</h2>
                <p>Use o acesso temporário enquanto finalizamos a integração do novo sistema de autenticação.</p>
              </div>
            </div>
          </aside>

          <div className="login-form-wrapper">
            <header className="login-header">
              <div className="login-header-text">
                <h1 className="login-title">Portal</h1>
                <p className="login-subtitle">
                  Acesse com suas credenciais corporativas para continuar.
                </p>
              </div>
              {alreadyLogged && (
                <Button
                  as={Link}
                  to="/portal"
                  variant="outline-success"
                  size="sm"
                  className="login-portal-link"
                >
                  Ir para o painel
                </Button>
              )}
            </header>

            {initializing && (
              <div className="login-feedback">
                <Spinner animation="border" variant="light" size="sm" />
                <span>Carregando sessão...</span>
              </div>
            )}

            {!initializing && success ? (
              <Alert variant="success" className="login-alert">
                Login realizado com sucesso!
              </Alert>
            ) : (
              !initializing && alreadyLogged && user && (
                <Alert variant="success" className="login-alert">
                  Você já está autenticado como <strong>{user.name}</strong>.
                </Alert>
              )
            )}

            {!initializing && error && (
              <Alert variant="danger" className="login-alert">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} autoComplete="on" className="login-form">
              <Form.Group controlId="loginEmail" className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <div className="login-input-wrapper">
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="admin@admin.com"
                    autoComplete="email"
                    disabled={isDisabled}
                    required
                    className="login-input"
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="loginPassword" className="mb-4">
                <Form.Label>Senha</Form.Label>
                <div className="login-input-wrapper">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="admin"
                    autoComplete="current-password"
                    disabled={isDisabled}
                    required
                    className="login-input"
                  />
                  <button
                    type="button"
                    className="login-toggle-password"
                    onClick={() => setShowPassword((previous) => !previous)}
                    disabled={isDisabled}
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              </Form.Group>

              <div className="login-form-footer">
                <Form.Check
                  type="checkbox"
                  label="Lembrar de mim"
                  id="loginRemember"
                  disabled={isDisabled}
                />
              </div>

              <Button
                type="submit"
                variant="success"
                className="login-button"
                disabled={isDisabled}
                aria-label="Acessar portal"
              >
                {isLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Entrando...
                  </>
                ) : (
                  <span className="login-button-label">
                    <img
                      src={portalLogo}
                      alt="Portal"
                      className="login-button-logo"
                    />
                  </span>
                )}
              </Button>
            </Form>

          </div>
        </div>
      </Container>
    </section>
  );
}

export default Login;
