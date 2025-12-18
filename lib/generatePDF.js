import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generateCertificatPDF = async (certificatData) => {
  try {
    const container = document.createElement("div");
    container.style.width = "800px";
    container.style.padding = "60px";
    container.style.background =
      "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)";
    container.style.position = "absolute";
    container.style.left = "-9999px";

    container.innerHTML = `
      <div style="border: 10px solid #ffd700; border-radius: 20px; padding: 40px; text-align: center; font-family: Arial, sans-serif;">
        <div style="font-size: 48px; margin-bottom: 20px;">🏆 🇬🇵</div>
        <h1 style="font-size: 36px; color: #1e293b; margin-bottom: 10px; text-transform: uppercase;">Passeport de Réussite</h1>
        <div style="font-size: 20px; color: #ffd700; font-weight: bold; margin-bottom: 30px;">REUSSITESS®971</div>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; color: white; margin-bottom: 30px;">
          <div style="font-size: 36px; margin-bottom: 10px;">${certificatData.pays?.emoji}</div>
          <h2 style="font-size: 32px; margin-bottom: 10px;">${certificatData.prenom}</h2>
          <p style="font-size: 18px;">${certificatData.pays?.nom}</p>
        </div>
        
        <div style="font-size: 20px; color: #334155; font-style: italic; margin-bottom: 30px; line-height: 1.6;">
          "${certificatData.phraseInspirante}"
        </div>
        
        <div style="display: flex; justify-content: space-around; margin-bottom: 30px;">
          <div>
            <div style="color: #94a3b8; font-size: 14px;">Objectif</div>
            <div style="font-size: 18px; font-weight: bold; color: #1e293b;">${certificatData.objectif?.icon} ${certificatData.objectif?.label}</div>
          </div>
          <div>
            <div style="color: #94a3b8; font-size: 14px;">N° Passeport</div>
            <div style="font-size: 16px; font-weight: bold; color: #ffd700;">${certificatData.numeroPasseport}</div>
          </div>
          <div>
            <div style="color: #94a3b8; font-size: 14px;">Date</div>
            <div style="font-size: 16px; font-weight: bold; color: #1e293b;">${certificatData.date}</div>
          </div>
        </div>
        
        <div style="border-top: 3px solid #ffd700; padding-top: 20px; font-size: 14px; color: #64748b; line-height: 1.6;">
          <strong style="color: #1e293b;">Guadeloupe Terre de Champions</strong><br/>
          REUSSITESS®971<br/>
          <strong style="color: #ffd700;">EXCELLENCE • INNOVATION • SUCCÈS</strong><br/>
          ✨ Positivité à l'infini ✨
        </div>
      </div>
    `;

    document.body.appendChild(container);

    const canvas = await html2canvas(container, {
      scale: 2,
      backgroundColor: "#ffffff",
      logging: false,
    });

    document.body.removeChild(container);

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const imgWidth = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(
      `Passeport-Reussite-${certificatData.prenom}-${certificatData.numeroPasseport}.pdf`,
    );

    return true;
  } catch (error) {
    console.error("Erreur génération PDF:", error);
    return false;
  }
};
