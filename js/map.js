document.addEventListener("DOMContentLoaded", function() {
    const map = L.map('map').setView([37.9838, 23.7275], 7); // Center map on Greece

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Array of 50 test locations with latitudes and longitudes
    const locations = [
        { name: "Αθήνα", lat: 37.9838, lng: 23.7275 },
        { name: "Θεσσαλονίκη", lat: 40.6401, lng: 22.9444 },
        { name: "Πάτρα", lat: 38.2466, lng: 21.7346 },
        { name: "Ηράκλειο", lat: 35.3387, lng: 25.1442 },
        { name: "Λάρισα", lat: 39.6417, lng: 22.4167 },
        { name: "Βόλος", lat: 39.3616, lng: 22.9444 },
        { name: "Ιωάννινα", lat: 39.6641, lng: 20.8502 },
        { name: "Καβάλα", lat: 40.9364, lng: 24.4110 },
        { name: "Ξάνθη", lat: 41.1423, lng: 24.8846 },
        { name: "Κέρκυρα", lat: 39.6243, lng: 19.9214 },
        { name: "Ρόδος", lat: 36.4348, lng: 28.2176 },
        { name: "Χανιά", lat: 35.5114, lng: 24.0209 },
        { name: "Σέρρες", lat: 41.0894, lng: 23.5508 },
        { name: "Άγιος Νικόλαος", lat: 35.1904, lng: 25.7171 },
        { name: "Λαμία", lat: 38.9039, lng: 22.4345 },
        { name: "Σπάρτη", lat: 37.0734, lng: 22.4299 },
        { name: "Κομοτηνή", lat: 41.1203, lng: 25.4056 },
        { name: "Αλεξανδρούπολη", lat: 40.8480, lng: 25.8780 },
        { name: "Καστοριά", lat: 40.5200, lng: 21.2625 },
        { name: "Πύργος", lat: 37.6333, lng: 21.4333 },
        { name: "Μεσολόγγι", lat: 38.3512, lng: 21.4237 },
        { name: "Λευκάδα", lat: 38.8371, lng: 20.7111 },
        { name: "Κατερίνη", lat: 40.2730, lng: 22.5000 },
        { name: "Κιλκίς", lat: 40.9890, lng: 22.8689 },
        { name: "Σάμος", lat: 37.7665, lng: 26.9716 },
        { name: "Ναύπλιο", lat: 37.5667, lng: 22.8000 },
        { name: "Άρτα", lat: 39.1601, lng: 21.1003 },
        { name: "Τρίκαλα", lat: 39.5548, lng: 21.7687 },
        { name: "Ρέθυμνο", lat: 35.3675, lng: 24.4768 },
        { name: "Καλαμάτα", lat: 37.0382, lng: 22.1146 },
        { name: "Σύρος", lat: 37.4374, lng: 24.9300 },
        { name: "Σκιάθος", lat: 39.1650, lng: 23.4860 },
        { name: "Λήμνος", lat: 39.8890, lng: 25.2490 },
        { name: "Ικαρία", lat: 37.6362, lng: 26.1554 },
        { name: "Φλώρινα", lat: 40.7825, lng: 21.3816 },
        { name: "Αιδηψός", lat: 38.9676, lng: 23.2125 },
        { name: "Εύοσμος", lat: 40.6319, lng: 22.9458 },
        { name: "Άνω Πατήσια", lat: 38.0025, lng: 23.7486 },
        { name: "Λαγκάδα", lat: 38.7500, lng: 21.2167 },
        { name: "Παλαιό Φάληρο", lat: 37.9477, lng: 23.6920 },
        { name: "Κορυδαλλός", lat: 37.9558, lng: 23.6375 },
        { name: "Νέα Ιωνία", lat: 38.0514, lng: 23.7486 },
        { name: "Νέα Σμύρνη", lat: 37.9458, lng: 23.7386 },
        { name: "Ελληνικό", lat: 37.9241, lng: 23.7326 },
        { name: "Αγία Παρασκευή", lat: 38.0185, lng: 23.7911 },
        { name: "Χαλάνδρι", lat: 38.0330, lng: 23.7900 },
        { name: "Περιστέρι", lat: 37.9330, lng: 23.6660 },
        { name: "Γλυφάδα", lat: 37.8958, lng: 23.7597 },
        { name: "Άγιος Δημήτριος", lat: 37.9333, lng: 23.7333 },
        { name: "Αμαρούσιο", lat: 38.0500, lng: 23.7833 },
        { name: "Μαρούσι", lat: 38.0500, lng: 23.7833 },
        { name: "Καλλιθέα", lat: 37.9658, lng: 23.7100 },
        { name: "Νέα Κηφισιά", lat: 38.0850, lng: 23.7950 },
        { name: "Πειραιάς", lat: 37.9460, lng: 23.6370 }
    ];

    // Add markers for each location
    locations.forEach(location => {
        L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(`<b>${location.name}</b>`)
            .openPopup();
    });
});
