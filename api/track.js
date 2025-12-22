export default function handler(req, res) {
    const country = req.headers['x-vercel-ip-country'] || "Unknown";
    const userAgent = req.headers['user-agent'];
    
    // Liste de vos 14 pays souverains pour filtrage
    const sovereignCountries = ["FR", "GB", "IT", "DE", "SE", "SG", "AU", "ES", "BR", "IN", "NZ", "US", "CA"];
    
    const isSovereign = sovereignCountries.includes(country);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        status: "Logged",
        origin: country,
        sovereign_target: isSovereign,
        timestamp: new Date().toISOString(),
        brand: "REUSSITESS® Nexus"
    });
}
