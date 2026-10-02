import './index.css'

const qualityPortfolio = [
  { name: 'SAP', shares: 190, avg: 182.25, current: 187.49, value: 35623.1, unrealized: 995.30 },
  { name: 'Munich Re', shares: 38, avg: 526.00, current: 499.40, value: 18977.20, unrealized: -1010.80 },
  { name: 'Siemens', shares: 55, avg: 272.15, current: 273.50, value: 15042.50, unrealized: 74.25 },
  { name: 'Deutsche Telekom', shares: 516, avg: 29.05, current: 26.06, value: 13446.96, unrealized: -1542.84 },
  { name: 'RWE', shares: 130, avg: 57.52, current: 58.30, value: 7579.00, unrealized: 101.40 },
  { name: 'Allianz', shares: 11, avg: 449.90, current: 411.70, value: 4528.70, unrealized: -420.20 },
]

const gainPortfolio = [
  { name: 'NVIDIA', shares: 210, avg: 196.69, current: 204.17, value: 42876.31, unrealized: 1572.39 },
  { name: 'Broadcom', shares: 127, avg: 307.50, current: 308.79, value: 39216.18, unrealized: 163.82 },
  { name: 'Meta', shares: 57, avg: 525.77, current: 645.68, value: 36803.88, unrealized: 6835.03 },
  { name: 'ASML', shares: 49, avg: 1423.40, current: 1602.20, value: 78507.80, unrealized: 8761.20 },
  { name: 'Eli Lilly', shares: 45, avg: 998.36, current: 1021.87, value: 45984.12, unrealized: 1057.73 },
]

const qualitySummary = {
  portfolio1: {
    total: 247954.61,
    stocks: 95.197.46,
    cash: 152757.15,
    gvv: -2.045.39,
    month: -82.70,
    year: -2.045.39,
    ytd: 61.61,
  },
  portfolio2: {
    total: 267827.72,
    stocks: 243388.29,
    cash: 24439.44,
    gvv: 17827.72,
    month: 969.80,
    year: 17827.72,
    ytd: 9.13,
  },
}

const directComparison = [
  { month: '09-03', portfolio1: 98.8, portfolio2: 99.8, urth: 100 },
  { month: '09-04', portfolio1: 98.7, portfolio2: 100.2, urth: 100 },
  { month: '09-05', portfolio1: 98.6, portfolio2: 100.1, urth: 100 },
  { month: '09-06', portfolio1: 99.1, portfolio2: 100.8, urth: 100 },
  { month: '09-07', portfolio1: 99.2, portfolio2: 101.2, urth: 100 },
  { month: '09-08', portfolio1: 99.6, portfolio2: 101.5, urth: 100 },
  { month: '09-09', portfolio1: 99.4, portfolio2: 101.8, urth: 100 },
  { month: '09-10', portfolio1: 99.9, portfolio2: 101.9, urth: 100 },
]

const performanceData = [
  249381.1, 248273.8, 247166.5, 250684.3, 249937.1, 249505.2, 246351.1, 248081.7,
  247688.3, 246311.8, 248255.7, 249875.6, 250946.2, 248203.9, 251253.2, 248991.8,
  249521.1, 249202.4, 249694.1, 251404.1, 251406.3,
]

const portfolio2PerformanceData = [
  251041.6, 250028.7, 249184.1, 253371.2, 250070.3, 257688.4, 258323.3, 254819.6,
  256521.1, 259144.7, 256692.2, 258083.2, 259317.9, 260353.4, 259135.7, 262531.9,
  260561.1, 262446.1, 263017.2,
]

const signalRows = [
  { asset: 'SAP', ticker: 'SAP.DE', price: 187.49, currency: 'EUR', status: 'Daten vorhanden' },
  { asset: 'Munich Re', ticker: 'MUV2.DE', price: 499.40, currency: 'EUR', status: 'Daten vorhanden' },
  { asset: 'Siemens', ticker: 'SIE.DE', price: 273.50, currency: 'EUR', status: 'Daten vorhanden' },
  { asset: 'Deutsche Telekom', ticker: 'DTE.DE', price: 26.06, currency: 'EUR', status: 'Daten vorhanden' },
  { asset: 'RWE', ticker: 'RWE.DE', price: 58.30, currency: 'EUR', status: 'Daten vorhanden' },
  { asset: 'Allianz', ticker: 'ALV.DE', price: 411.70, currency: 'EUR', status: 'Daten vorhanden' },
  { asset: 'NVIDIA', ticker: 'NVDA', price: 229.64, currency: 'USD', status: 'Daten vorhanden' },
  { asset: 'Broadcom', ticker: 'AVGO', price: 347.30, currency: 'USD', status: 'Daten vorhanden' },
  { asset: 'Meta', ticker: 'META', price: 726.22, currency: 'USD', status: 'Daten vorhanden' },
  { asset: 'ASML', ticker: 'ASMLAS', price: 1602.20, currency: 'EUR', status: 'Daten vorhanden' },
  { asset: 'Eli Lilly', ticker: 'LLY', price: 1149.33, currency: 'USD', status: 'Daten vorhanden' },
  { asset: 'Microsoft', ticker: 'MSFT', price: '-', currency: 'USD', status: 'Auf ausstehend' },
  { asset: 'Johnson & Johnson', ticker: 'JNJ', price: '-', currency: 'USD', status: 'Auf ausstehend' },
  { asset: 'Amazon', ticker: 'AMZN', price: '-', currency: 'USD', status: 'Auf ausstehend' },
  { asset: 'Alphabet', ticker: 'GOOGL', price: '-', currency: 'USD', status: 'Auf ausstehend' },
  { asset: 'Airbus', ticker: 'AIR.PA', price: '-', currency: 'EUR', status: 'Auf ausstehend' },
  { asset: 'Rheinmetall', ticker: 'RHM.DE', price: '-', currency: 'EUR', status: 'Auf ausstehend' },
]

const progressData = [
  { date: '2026-09-03', p1total: 249.809.32, p1diff: -190.68, p1pct: -0.08, p2total: 249.437.50, p2diff: -562.50, p2pct: -0.22, urth: 210.34 },
  { date: '2026-09-04', p1total: 249.764.67, p1diff: 44.65, p1pct: 0.09, p2total: 251.828.10, p2diff: 2.390.67, p2pct: 0.73, urth: 209.82 },
  { date: '2026-09-07', p1total: 248.739.10, p1diff: -1025.57, p1pct: -0.50, p2total: 253.445.18, p2diff: 1.617.00, p2pct: 1.38, urth: 209.82 },
  { date: '2026-09-08', p1total: 248.132.80, p1diff: -606.30, p1pct: -0.75, p2total: 253.599.49, p2diff: 154.31, p2pct: 1.44, urth: 208.63 },
  { date: '2026-09-09', p1total: 247.525.09, p1diff: -607.71, p1pct: -0.99, p2total: 253.496.85, p2diff: -102.64, p2pct: 1.40, urth: 207.45 },
  { date: '2026-09-10', p1total: 246.552.24, p1diff: -972.85, p1pct: -1.38, p2total: 250.779.33, p2diff: -2.717.52, p2pct: 0.31, urth: 205.87 },
  { date: '2026-09-11', p1total: 247.644.32, p1diff: 1.092.08, p1pct: -0.94, p2total: 251.155.04, p2diff: 375.71, p2pct: 0.46, urth: 207.69 },
  { date: '2026-09-14', p1total: 249.308.35, p1diff: 1.664.03, p1pct: -0.28, p2total: 245.911.93, p2diff: -5.243.11, p2pct: -1.64, urth: 206.80 },
  { date: '2026-09-15', p1total: 249.396.94, p1diff: 88.59, p1pct: -0.24, p2total: 245.408.77, p2diff: -503.16, p2pct: -1.84, urth: 205.63 },
  { date: '2026-09-16', p1total: 249.584.09, p1diff: 187.15, p1pct: -0.17, p2total: 247.708.95, p2diff: 2.300.18, p2pct: -0.92, urth: 204.71 },
  { date: '2026-09-17', p1total: 249.884.45, p1diff: 404.36, p1pct: -0.00, p2total: 251.571.47, p2diff: 3.862.52, p2pct: 0.63, urth: 207.15 },
  { date: '2026-09-18', p1total: 248.021.61, p1diff: -1.975.84, p1pct: -0.79, p2total: 253.721.35, p2diff: 2.149.88, p2pct: 1.49, urth: 206.77 },
  { date: '2026-09-21', p1total: 248.639.59, p1diff: 626.98, p1pct: -0.54, p2total: 261.428.82, p2diff: 7.707.47, p2pct: 4.57, urth: 209.70 },
  { date: '2026-09-22', p1total: 248.098.46, p1diff: -541.13, p1pct: -0.76, p2total: 263.398.80, p2diff: 1.969.98, p2pct: 5.35, urth: 210.02 },
  { date: '2026-09-23', p1total: 248.549.36, p1diff: 450.92, p1pct: -0.58, p2total: 262.701.70, p2diff: -697.10, p2pct: 5.08, urth: 207.84 },
  { date: '2026-09-24', p1total: 248.521.39, p1diff: -28.00, p1pct: -0.59, p2total: 264.398.97, p2diff: 1.697.27, p2pct: 5.76, urth: 207.65 },
  { date: '2026-09-25', p1total: 249.096.15, p1diff: 574.76, p1pct: -0.36, p2total: 264.240.31, p2diff: -158.66, p2pct: 5.70, urth: 208.73 },
]

const transactionRows = [
  { date: '03.09.2026', portfolio: 'P1', description: '6 Startkäufe', gross: 87331.35, costs: 218.33, net: 162450.32 },
  { date: '11.09.2026', portfolio: 'P1', description: 'SAP +55 @ 175,80 €', gross: 9669.00, costs: 24.17, net: 152757.15 },
  { date: '03.09.2026', portfolio: 'P2', description: 'NVIDIA / Broadcom / Meta / ASML / Eli Lilly', gross: 224998.07, costs: 562.50, net: 24439.44 },
]

const formatEuro = (value: number) => `${value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`

const formatSigned = (value: number, isPercent = false) => {
  const abs = Math.abs(value)
  const sign = value >= 0 ? '+' : '-'
  const formatted = abs.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return `${sign}${formatted}${isPercent ? '%' : ' €'}`
}

const createLinePath = (data: number[], width: number, height: number, padding: number) => {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  return data
    .map((point, index) => {
      const x = padding + (index / (data.length - 1)) * (width - padding * 2)
      const y = height - padding - ((point - min) / range) * (height - padding * 2)
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')
}

function App() {
  const tabs = ['Portfolio 1 • Qualitäts-Kern', 'Portfolio 2 • Gewinnchancen', 'Direktvergleich', 'Tagesfortschreibung', 'Chancen & Signale', 'Transaktionen']
  const [activeTab, setActiveTab] = React.useState(tabs[0])

  const renderMainArea = () => {
    if (activeTab === 'Portfolio 1 • Qualitäts-Kern') {
      return (
        <>
          <section className="panel table-panel">
            <h2>Portfolio 1 • Qualitäts-Kern</h2>
            <table>
              <thead>
                <tr>
                  <th>WERT</th>
                  <th>STÜCK</th>
                  <th>Ø EINDSTAND</th>
                  <th>KURS €</th>
                  <th>AKTIENWERT</th>
                  <th>UNREAL. G/V</th>
                </tr>
              </thead>
              <tbody>
                {qualityPortfolio.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.shares}</td>
                    <td>{formatEuro(item.avg)}</td>
                    <td>{formatEuro(item.current)}</td>
                    <td>{formatEuro(item.value)}</td>
                    <td className={item.unrealized >= 0 ? 'positive' : 'negative'}>{formatEuro(item.unrealized)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="panel chart-panel">
            <div className="card-header">
              <h3>Entwicklung Portfolio 1</h3>
            </div>
            <div className="chart-wrap">
              <ChartPreview data={performanceData} accent="#7eb9ff" />
            </div>
          </section>
        </>
      )
    }

    if (activeTab === 'Portfolio 2 • Gewinnchancen') {
      return (
        <>
          <section className="panel table-panel">
            <h2>Portfolio 2 • Gewinnchancen</h2>
            <table>
              <thead>
                <tr>
                  <th>WERT</th>
                  <th>STÜCK</th>
                  <th>Ø EINDSTAND</th>
                  <th>KURS €</th>
                  <th>AKTIENWERT</th>
                  <th>UNREAL. G/V</th>
                </tr>
              </thead>
              <tbody>
                {gainPortfolio.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.shares}</td>
                    <td>{formatEuro(item.avg)}</td>
                    <td>{formatEuro(item.current)}</td>
                    <td>{formatEuro(item.value)}</td>
                    <td className={item.unrealized >= 0 ? 'positive' : 'negative'}>{formatEuro(item.unrealized)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="panel chart-panel">
            <div className="card-header">
              <h3>Entwicklung Portfolio 2</h3>
            </div>
            <div className="chart-wrap">
              <ChartPreview data={portfolio2PerformanceData} accent="#7eb9ff" />
            </div>
          </section>
        </>
      )
    }

    if (activeTab === 'Direktvergleich') {
      return (
        <>
          <section className="panel">
            <h2>Grafischer Direktvergleich • Start = 100</h2>
            <div className="chart-wrap large">
              <ChartPreview data={directComparison.map((item) => item.portfolio1 * 2.5)} accent="#6ee3d7" />
            </div>
          </section>
          <section className="panel stat-panel">
            <div className="mini-metric"><span>Gesamtvermögen</span><strong>{formatEuro(qualitySummary.portfolio2.total)}</strong></div>
            <div className="mini-metric"><span>Aktienwert</span><strong>{formatEuro(qualitySummary.portfolio2.stocks)}</strong></div>
            <div className="mini-metric"><span>Cash</span><strong>{formatEuro(qualitySummary.portfolio2.cash)}</strong></div>
            <div className="mini-metric"><span>Gewinn</span><strong className="positive">{formatEuro(qualitySummary.portfolio2.gvv)}</strong></div>
          </section>
        </>
      )
    }

    if (activeTab === 'Tagesfortschreibung') {
      return (
        <section className="panel table-panel spread-panel">
          <h2>Tagesfortschreibung ab 03.09.2026</h2>
          <table>
            <thead>
              <tr>
                <th>DATUM</th>
                <th>P1 GESAMT</th>
                <th>P1 TAG</th>
                <th>P1 %</th>
                <th>P2 GESAMT</th>
                <th>P2 TAG</th>
                <th>P2 %</th>
                <th>URTH</th>
              </tr>
            </thead>
            <tbody>
              {progressData.map((row) => (
                <tr key={row.date}>
                  <td>{row.date}</td>
                  <td>{formatEuro(row.p1total)}</td>
                  <td className={row.p1diff >= 0 ? 'positive' : 'negative'}>{formatSigned(row.p1diff, false)}</td>
                  <td className={row.p1pct >= 0 ? 'positive' : 'negative'}>{formatSigned(row.p1pct, true)}</td>
                  <td>{formatEuro(row.p2total)}</td>
                  <td className={row.p2diff >= 0 ? 'positive' : 'negative'}>{formatSigned(row.p2diff, false)}</td>
                  <td className={row.p2pct >= 0 ? 'positive' : 'negative'}>{formatSigned(row.p2pct, true)}</td>
                  <td>{row.urth.toFixed(2)} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )
    }

    if (activeTab === 'Chancen & Signale') {
      return (
        <section className="panel table-panel signal-panel">
          <h2>Chancen &amp; Signale</h2>
          <p className="subtitle">Aktuelle Beobachtungsliste. Kaufoptionen/Ziele werden im verbindlichen 22:30-Tagesbericht mit aktuellen Webdaten bewertet; die App erfährt bei fehlender Datenlage keine Zielkurse.</p>
          <table>
            <thead>
              <tr>
                <th>AKTIE</th>
                <th>TICKER</th>
                <th>LETZTER KURS</th>
                <th>WÄHRUNG</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {signalRows.map((row) => (
                <tr key={row.asset}>
                  <td>{row.asset}</td>
                  <td>{row.ticker}</td>
                  <td>{row.price === '-' ? '-' : formatEuro(Number(row.price))}</td>
                  <td>{row.currency}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )
    }

    if (activeTab === 'Transaktionen') {
      return (
        <section className="panel table-panel transaction-panel">
          <h2>Verbindliches Transaktionsjournal</h2>
          <table>
            <thead>
              <tr>
                <th>DATUM</th>
                <th>PORTFOLIO</th>
                <th>VORGANG</th>
                <th>BRUTTO</th>
                <th>KOSTEN</th>
                <th>CASH DANACH</th>
              </tr>
            </thead>
            <tbody>
              {transactionRows.map((row, index) => (
                <tr key={`${row.date}-${row.portfolio}-${index}`}>
                  <td>{row.date}</td>
                  <td>{row.portfolio}</td>
                  <td>{row.description}</td>
                  <td>{formatEuro(row.gross)}</td>
                  <td>{formatEuro(row.costs)}</td>
                  <td>{formatEuro(row.net)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )
    }

    return null
  }

  const metricCards = [
    { label: 'Gesamtvermögen', value: qualitySummary.portfolio2.total, type: 'green' },
    { label: 'Aktienwert', value: qualitySummary.portfolio2.stocks, type: 'blue' },
    { label: 'Cash', value: qualitySummary.portfolio2.cash, type: 'neutral' },
    { label: 'Gesamt G/V', value: qualitySummary.portfolio2.gvv, type: 'green' },
    { label: 'Heute', value: qualitySummary.portfolio2.month, type: 'orange' },
    { label: 'Monat', value: qualitySummary.portfolio2.month, type: 'orange' },
    { label: 'Jahr', value: qualitySummary.portfolio2.year, type: 'green' },
    { label: 'Cashquote', value: qualitySummary.portfolio2.ytd, type: 'green' },
  ]

  return (
    <div className="app-shell">
      <header className="topbar">
        <h1>Marktassistent V14 ALPHA STABIL · DIREKTSTARKT</h1>
        <div className="subhead">Qualitäts-Kern • Gewinnchancen • automatische Nachholung fehlender Handelstage • persistente Historie • grafischer Direktvergleich</div>
      </header>

      <div className="statusbar">
        Datenstand 2026-10-01 • synchron vollständige Markttage 21 • Update 2.10.2026, 11:13:32 • Selbsttest 6/6 • Alpha-Vantage-Datenmotor • 3-Sekunden-Abstand • Historie wird lokal und im Browser gespeichert.
      </div>

      <nav className="tabbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <section className="summary-row">
        {metricCards.map((card, index) => (
          <div className="metric-card" key={`${card.label}-${index}`}>
            <span>{card.label}</span>
            <strong>{typeof card.value === 'number' ? formatEuro(card.value) : card.value}</strong>
          </div>
        ))}
      </section>

      {renderMainArea()}

      <footer className="footer-note">
        Startbasis: 03.09.2026 unverändert. Kurshistorie und Transaktionsledger werden getrennt geführt. Neue Kursdaten verlangen keine historischen Transaktionen.
      </footer>
    </div>
  )
}

function ChartPreview({ data, accent }: { data: number[]; accent: string }) {
  const width = 1100
  const height = 320
  const padding = 26
  const linePath = createLinePath(data, width, height, padding)

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="line-chart" aria-label="Portfolio chart">
      {[0, 1, 2, 3].map((line) => (
        <line
          key={line}
          x1={padding}
          x2={width - padding}
          y1={padding + line * ((height - padding * 2) / 3)}
          y2={padding + line * ((height - padding * 2) / 3)}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      ))}
      <path d={linePath} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default App
