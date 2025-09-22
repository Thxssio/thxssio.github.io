import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { RiQuillPenLine } from "react-icons/ri";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { FiLogIn, FiLogOut, FiCreditCard, FiChevronDown } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const userMenuRef = useRef(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!userMenuRef.current?.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!expand) {
      setUserMenuOpen(false);
    }
  }, [expand]);

  const handleLogout = () => {
    logout();
    updateExpanded(false);
    navigate("/login");
  };

  const toggleUserMenu = () => {
    setUserMenuOpen((previous) => !previous);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/publications"
                onClick={() => updateExpanded(false)}
              >
                <FaBookOpen style={{ marginBottom: "2px" }} /> Publications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/stories"
                onClick={() => updateExpanded(false)}
              >
                <RiQuillPenLine style={{ marginBottom: "2px" }} /> Stories
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {!isAuthenticated && (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/login"
                  onClick={() => updateExpanded(false)}
                >
                  <FiLogIn style={{ marginBottom: "2px" }} /> Portal
                </Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item className="fork-btn">
              {!isAuthenticated ? (
                <Button
                  href="https://github.com/Thxssio/thxssio.github.io"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              ) : (
                <div className="nav-account" ref={userMenuRef}>
                  <button
                    type="button"
                    className={`nav-account-trigger${
                      userMenuOpen ? " is-open" : ""
                    }`}
                    onClick={toggleUserMenu}
                    aria-haspopup="true"
                    aria-expanded={userMenuOpen}
                  >
                    <span className="nav-account-icon" aria-hidden>
                      <FiCreditCard />
                    </span>
                    <span className="nav-account-text">
                      <small>Olá</small>
                      <strong>{user?.name || "Usuário"}</strong>
                    </span>
                    <FiChevronDown className="nav-account-caret" aria-hidden />
                  </button>
                  <div
                    className={`nav-account-menu${
                      userMenuOpen ? " is-open" : ""
                    }`}
                  >
                    <Link
                      to="/portal"
                      className="nav-account-item"
                      onClick={() => {
                        setUserMenuOpen(false);
                        updateExpanded(false);
                      }}
                    >
                      <FiCreditCard aria-hidden /> Ir para o portal
                    </Link>
                    <button
                      type="button"
                      className="nav-account-item"
                      onClick={() => {
                        setUserMenuOpen(false);
                        handleLogout();
                      }}
                    >
                      <FiLogOut aria-hidden /> Sair
                    </button>
                  </div>
                </div>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
