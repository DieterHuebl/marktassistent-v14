* {
  box-sizing: border-box;
}

:root {
  color: #edf3ff;
  background: #020d1b;
  font-family: 'Inter', sans-serif;
  line-height: 1.4;
  font-weight: 400;
  color-scheme: dark;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-width: 100%;
  background: linear-gradient(180deg, #020b16 0%, #071724 100%);
}

body {
  min-height: 100vh;
}

button, input, select {
  font: inherit;
}

.app-shell {
  max-width: 100%;
  min-height: 100vh;
  padding: 0 18px 28px;
  background: #050d18;
  color: #edf3ff;
}

.topbar {
  background: rgba(9, 18, 30, 0.9);
  border-bottom: 1px solid rgba(140, 164, 197, 0.22);
  padding: 10px 18px 8px;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(2.1rem, 2vw, 3rem);
  line-height: 1.1;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #f3f6fa;
}

.subhead {
  margin-top: 8px;
  color: #a8b5c6;
  font-size: 0.84rem;
  letter-spacing: 0.01em;
}

.statusbar {
  margin: 14px 18px 0;
  padding: 12px 16px;
  border-radius: 8px;
  background: rgba(25, 38, 54, 0.9);
  border: 1px solid rgba(155, 167, 186, 0.18);
  color: #dfe9f6;
  font-size: 0.9rem;
}

.tabbar {
  margin: 18px 18px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tab {
  background: rgba(18, 29, 40, 0.8);
  color: #dfe8f5;
  border: 1px solid rgba(138, 160, 185, 0.2);
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab:hover {
  border-color: rgba(148, 185, 236, 0.7);
}

.tab.active {
  background: rgba(39, 79, 121, 0.55);
  border-color: rgba(120, 170, 255, 0.8);
  box-shadow: inset 0 0 0 1px rgba(132, 180, 255, 0.25);
  color: #edf3ff;
}

.summary-row {
  margin: 18px 18px 0;
  display: grid;
  grid-template-columns: repeat(8, minmax(110px, 1fr));
  gap: 12px;
}

.metric-card {
  background: rgba(16, 28, 41, 0.8);
  border: 1px solid rgba(142, 165, 190, 0.2);
  border-radius: 8px;
  padding: 8px 10px;
  min-height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.metric-card span {
  color: #9aa8b7;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.metric-card strong {
  font-size: clamp(1.1rem, 1vw, 1.6rem);
  font-weight: 700;
  margin-top: 6px;
}

.panel {
  margin: 18px 18px 0;
  background: rgba(12, 22, 32, 0.82);
  border: 1px solid rgba(126, 154, 183, 0.2);
  border-radius: 12px;
  padding: 18px 18px 8px;
}

.panel h2 {
  margin: 0 0 16px;
  font-size: clamp(1.5rem, 1.8vw, 2.3rem);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.table-panel table,
.signal-panel table,
.transaction-panel table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.table-panel th,
.table-panel td,
.signal-panel th,
.signal-panel td,
.transaction-panel th,
.transaction-panel td {
  padding: 12px 10px;
  text-align: left;
  border-bottom: 1px solid rgba(132, 154, 184, 0.18);
  font-size: 0.92rem;
}

.table-panel th,
.signal-panel th,
.transaction-panel th {
  color: #a2b0c2;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
}

.table-panel tbody tr:hover,
.signal-panel tbody tr:hover,
.transaction-panel tbody tr:hover {
  background: rgba(255, 255, 255, 0.02);
}

.positive {
  color: #5ce2a8;
}

.negative {
  color: #ff6a7a;
}

.chart-panel {
  padding-bottom: 18px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.chart-wrap {
  width: 100%;
  min-height: 200px;
  background: linear-gradient(180deg, rgba(12,24,36,0.2), rgba(7,18,25,0.2));
  border-radius: 12px;
  overflow: hidden;
}

.line-chart {
  width: 100%;
  height: 270px;
  display: block;
}

.subtitle {
  margin: 0 0 16px;
  color: #a8b6c7;
  font-size: 0.9rem;
}

.stat-panel {
  display: grid;
  grid-template-columns: repeat(4, minmax(160px, 1fr));
  gap: 12px;
}

.mini-metric {
  display: flex;
  flex-direction: column;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(126, 154, 183, 0.18);
  background: rgba(17, 31, 44, 0.7);
}

.mini-metric span {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9aa9bb;
}

.mini-metric strong {
  margin-top: 7px;
  font-size: 1.2rem;
}

.footer-note {
  margin: 18px 18px 0;
  padding: 8px 0 0;
  color: #8ea0b5;
  font-size: 0.78rem;
}

@media (max-width: 1200px) {
  .summary-row {
    grid-template-columns: repeat(4, minmax(110px, 1fr));
  }
}

@media (max-width: 850px) {
  .tabbar {
    flex-direction: column;
  }

  .summary-row {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }

  .stat-panel {
    grid-template-columns: 1fr 1fr;
  }

  .panel,
  .statusbar,
  .tabbar,
  .summary-row,
  .footer-note {
    margin-left: 10px;
    margin-right: 10px;
  }

  .topbar {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 560px) {
  .summary-row,
  .stat-panel {
    grid-template-columns: 1fr;
  }

  .table-panel th,
  .table-panel td,
  .signal-panel th,
  .signal-panel td,
  .transaction-panel th,
  .transaction-panel td {
    font-size: 0.74rem;
    padding: 8px 6px;
  }
}
