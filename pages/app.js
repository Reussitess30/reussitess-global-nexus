import "../styles/globals.css";
pkg update -y
pkg upgrade -y
pkg install git nodejs-lts curl openssh -y
git config --global user.name "Reussitess30"
git config --global user.email "you@example.com"
git clone https://github.com/Reussitess30/reussitess-global-nexus.git
cd reussitess-global-nexus
mkdir -p pages styles
cat > pages/_app.js <<'JS'
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
