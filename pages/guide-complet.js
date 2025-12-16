import Layout from '../components/Layout';

export default function GuideComplet() {
  return (
    <Layout>
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ff9800, #ff5722)",
          color: "white",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>📖 Guide Complet</h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "800px", textAlign: "center" }}>
          Bienvenue dans le Guide complet de REUSSITESS®. Parcourez les différentes sections pour atteindre vos objectifs.
        </p>
      </div>
    </Layout>
  );
}
