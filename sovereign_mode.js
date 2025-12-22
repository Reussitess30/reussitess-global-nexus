// Script de déverrouillage de l'Empire REUSSITESS®
document.addEventListener('keydown', (e) => {
    let input = "";
    document.addEventListener('keypress', (k) => {
        input += k.key;
        if (input.includes("0x69f4")) {
            console.log("--- 🏛️ SOVEREIGN MODE ACTIVATED ---");
            alert("Accès Souverain Validé : Bienvenue Maître du Nexus.");
            // Ici, vous pouvez déclencher l'affichage de stats cachées
            input = ""; 
        }
    });
});
fetch('/api/track');
