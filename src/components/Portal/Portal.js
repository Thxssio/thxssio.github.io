import React, { useEffect, useState } from "react";
import { Container, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCreditCard,
  FiDollarSign,
  FiPieChart,
  FiTrendingUp,
} from "react-icons/fi";
import Particle from "../Particle";
import { useAuth } from "../../context/AuthContext";
import portalLogo from "../../Assets/logo.png";
import "./Portal.css";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const percentFormatter = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const SUMMARY_CARDS = [
  {
    id: "cash",
    label: "Saldo em caixa",
    value: 18540.82,
    change: 0.087,
    icon: FiDollarSign,
    caption: "Atualizado há 5 minutos",
    tone: "positive",
  },
  {
    id: "expenses",
    label: "Gastos do mês",
    value: 9420.18,
    change: -0.042,
    icon: FiPieChart,
    caption: "Período: abril 2024",
    tone: "negative",
  },
  {
    id: "cards",
    label: "Faturas em aberto",
    value: 5240.4,
    change: 0.056,
    icon: FiCreditCard,
    caption: "Vencimento médio em 12 dias",
    tone: "neutral",
  },
  {
    id: "pipeline",
    label: "Entradas previstas",
    value: 14280.5,
    change: 0.132,
    icon: FiTrendingUp,
    caption: "Próximos 30 dias",
    tone: "positive",
  },
];

const CREDIT_CARDS = [
  {
    id: "corporate",
    name: "Cartão Corporate",
    closingDay: 25,
    dueDay: 2,
    currentInvoice: 3142.9,
    limit: 12000,
    categoryShare: "Marketing, viagens e SaaS",
  },
  {
    id: "black",
    name: "Cartão Black",
    closingDay: 18,
    dueDay: 5,
    currentInvoice: 2097.5,
    limit: 15000,
    categoryShare: "Executivo, eventos e representação",
  },
];

const RECENT_EXPENSES = [
  {
    id: "fb-ads",
    description: "Facebook Ads",
    category: "Marketing",
    method: "Cartão Corporate",
    amount: 1740,
    date: "12/04/2024",
  },
  {
    id: "cloud",
    description: "Infraestrutura em nuvem",
    category: "Operacional",
    method: "Cartão Black",
    amount: 980,
    date: "10/04/2024",
  },
  {
    id: "coworking",
    description: "Coworking - mensalidade",
    category: "Administrativo",
    method: "Débito conta matriz",
    amount: 1250,
    date: "05/04/2024",
  },
  {
    id: "consulting",
    description: "Consultoria fiscal",
    category: "Financeiro",
    method: "Transferência",
    amount: 1840,
    date: "28/03/2024",
  },
];

const CASH_FLOW = [
  {
    id: "incoming",
    label: "Entradas confirmadas",
    amount: 18680,
    variation: 0.118,
    type: "in",
    detail: "15 lançamentos",
  },
  {
    id: "pending",
    label: "Entradas em negociação",
    amount: 5320,
    variation: -0.042,
    type: "pending",
    detail: "5 clientes aguardando assinatura",
  },
  {
    id: "outgoing",
    label: "Saídas previstas",
    amount: 14820,
    variation: 0.061,
    type: "out",
    detail: "18 lançamentos",
  },
];

const CATEGORY_ALLOCATION = [
  { id: "marketing", label: "Marketing", value: 0.34, amount: 3225 },
  { id: "operational", label: "Operacional", value: 0.28, amount: 2660 },
  { id: "people", label: "Pessoas", value: 0.19, amount: 1800 },
  { id: "admin", label: "Administrativo", value: 0.12, amount: 1140 },
  { id: "other", label: "Outros", value: 0.07, amount: 595 },
];

const CONTENT_ACTIONS = [
  {
    id: "stories",
    title: "Stories",
    description: "Publicar novas histórias, revisar rascunhos e destacar narrativas recentes.",
    path: "/stories",
  },
  {
    id: "publications",
    title: "Publications",
    description: "Atualize artigos, papers e notas técnicas com poucos cliques.",
    path: "/publications",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Inclua novos projetos, ajuste status e mantenha o portfólio em dia.",
    path: "/project",
  },
];

const formatCurrency = (value) => currencyFormatter.format(value);

const formatPercent = (value) => percentFormatter.format(value);

function TrendBadge({ tone, value }) {
  if (value === 0 || Number.isNaN(value)) {
    return null;
  }

  const Icon = value > 0 ? FiArrowUpRight : FiArrowDownRight;
  const signifiedTone = tone === "negative" ? -1 : 1;
  const isPositive = value * signifiedTone > 0;

  return (
    <span className={`portal-trend portal-trend-${isPositive ? "up" : "down"}`}>
      <Icon aria-hidden />
      {formatPercent(Math.abs(value))}
    </span>
  );
}

function Portal() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const pageClassName = `portal-page${isReady ? " portal-page-ready" : ""}`;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isAuthenticated) {
    return (
      <section className={pageClassName}>
        <Particle />
        <div className="portal-veil" aria-hidden />
        <Container className="portal-container portal-container-compact">
          <div className="portal-locked-card" data-portal-animate>
            <img src={portalLogo} alt="Portal" className="portal-locked-logo" />
            <h1>Acesso exclusivo</h1>
            <p>
              Entre com suas credenciais para visualizar o painel financeiro em tempo real.
            </p>
            <Button as={Link} to="/login" variant="success">
              Fazer login
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={pageClassName}>
      <Particle />
      <div className="portal-veil" aria-hidden />
      <Container className="portal-container">
        <header
          className="portal-header"
          data-portal-animate
          style={{ "--portal-delay": "140ms" }}
        >
          <div className="portal-header-text">
            <span className="portal-breadcrumb">Portal / Financeiro</span>
            <h1>Monitoramento financeiro</h1>
            <p>
              Acompanhe saldo, faturas e gastos em uma visão unificada para acelerar decisões.
            </p>
          </div>
          <div className="portal-header-actions">
            <div className="portal-user-card" aria-live="polite">
              <span>{user?.name || "Usuário"}</span>
              <small>{user?.email || "Acesso corporativo"}</small>
            </div>
            <Button
              type="button"
              variant="outline-light"
              className="portal-logout-button"
              onClick={handleLogout}
            >
              Sair
            </Button>
          </div>
        </header>

        <section
          className="portal-panel portal-panel-highlight"
          data-portal-animate
          style={{ "--portal-delay": "200ms" }}
        >
          <header className="portal-panel-header">
            <h2>Gestão de conteúdo</h2>
            <Badge bg="light" text="dark" className="portal-soft-badge">
              Stories • Publications • Projects
            </Badge>
          </header>
          <div className="portal-content-grid">
            {CONTENT_ACTIONS.map((action, index) => (
              <article key={action.id} className="portal-content-card">
                <header>
                  <strong>{action.title}</strong>
                  <span>Ferramentas rápidas</span>
                </header>
                <p>{action.description}</p>
                <div className="portal-content-actions">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => navigate(action.path)}
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    Abrir seção
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="portal-summary-grid">
          {SUMMARY_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className="portal-summary-card"
                data-portal-animate
                style={{ "--portal-delay": `${index * 80}ms` }}
              >
                <div className="portal-summary-icon">
                  <Icon aria-hidden />
                </div>
                <div className="portal-summary-body">
                  <header>
                    <h3>{card.label}</h3>
                    <TrendBadge tone={card.tone} value={card.change} />
                  </header>
                  <strong>{formatCurrency(card.value)}</strong>
                  <span>{card.caption}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="portal-sections">
          <section
            className="portal-panel"
            data-portal-animate
            style={{ "--portal-delay": "260ms" }}
          >
            <header className="portal-panel-header">
              <h2>Fluxo de caixa (30 dias)</h2>
              <Badge bg="success" className="portal-soft-badge">
                Atualizado agora
              </Badge>
            </header>
            <ul className="portal-flow-list">
              {CASH_FLOW.map((item) => (
                <li key={item.id} className={`portal-flow-item portal-flow-${item.type}`}>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.detail}</span>
                  </div>
                  <div className="portal-flow-amount">
                    <span>{formatCurrency(item.amount)}</span>
                    <TrendBadge tone={item.type === "out" ? "negative" : "positive"} value={item.variation} />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="portal-panel"
            data-portal-animate
            style={{ "--portal-delay": "320ms" }}
          >
            <header className="portal-panel-header">
              <h2>Distribuição de gastos</h2>
              <Badge bg="dark" className="portal-soft-badge">
                Abril 2024
              </Badge>
            </header>
            <div className="portal-allocation">
              {CATEGORY_ALLOCATION.map((item) => (
                <article key={item.id} className="portal-allocation-item">
                  <div className="portal-allocation-label">
                    <span>{item.label}</span>
                    <strong>{formatCurrency(item.amount)}</strong>
                  </div>
                  <div className="portal-allocation-progress" role="progressbar" aria-valuenow={item.value * 100} aria-valuemin={0} aria-valuemax={100}>
                    <span style={{ width: `${item.value * 100}%` }} />
                  </div>
                  <small>{formatPercent(item.value)} do total</small>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section
          className="portal-panel"
          data-portal-animate
          style={{ "--portal-delay": "380ms" }}
        >
          <header className="portal-panel-header">
            <h2>Faturas por cartão</h2>
            <Badge bg="secondary" className="portal-soft-badge">
              Contas corporativas
            </Badge>
          </header>
          <div className="portal-cards-grid">
            {CREDIT_CARDS.map((card, index) => {
              const utilization = Math.min(card.currentInvoice / card.limit, 1);
              const available = card.limit - card.currentInvoice;
              return (
                <article
                  key={card.id}
                  className="portal-card-tile"
                  data-portal-animate
                  style={{ "--portal-delay": `${420 + index * 80}ms` }}
                >
                  <header>
                    <strong>{card.name}</strong>
                    <span>
                      Fecha dia {card.closingDay} • vence dia {card.dueDay}
                    </span>
                  </header>
                  <div className="portal-card-amounts">
                    <div>
                      <label>Fatura atual</label>
                      <strong>{formatCurrency(card.currentInvoice)}</strong>
                    </div>
                    <div>
                      <label>Limite disponível</label>
                      <strong>{formatCurrency(available)}</strong>
                    </div>
                  </div>
                  <div className="portal-card-progress" role="progressbar" aria-valuenow={utilization * 100} aria-valuemin={0} aria-valuemax={100}>
                    <span style={{ width: `${utilization * 100}%` }} />
                  </div>
                  <footer>
                    <small>{card.categoryShare}</small>
                  </footer>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="portal-panel"
          data-portal-animate
          style={{ "--portal-delay": "520ms" }}
        >
          <header className="portal-panel-header">
            <h2>Gastos recentes</h2>
            <Badge bg="info" text="dark" className="portal-soft-badge">
              Últimos 30 dias
            </Badge>
          </header>
          <div className="portal-table-wrapper">
            <table className="portal-table">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Categoria</th>
                  <th>Método</th>
                  <th>Data</th>
                  <th className="portal-table-amount">Valor</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_EXPENSES.map((expense) => (
                  <tr key={expense.id}>
                    <td data-title="Descrição">{expense.description}</td>
                    <td data-title="Categoria">{expense.category}</td>
                    <td data-title="Método">{expense.method}</td>
                    <td data-title="Data">{expense.date}</td>
                    <td data-title="Valor" className="portal-table-amount">
                      {formatCurrency(expense.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Container>
    </section>
  );
}

export default Portal;
