import DynamicFileViewer from '../components/DynamicFileViewer';

export default function FichierServeurPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '2rem' }}>🗂️ Visualisation dynamique des fichiers du serveur</h1>
      <DynamicFileViewer />
    </div>
  );
}