document.addEventListener('DOMContentLoaded', () => {
    const profileData = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "210-1234567",
        id: "12345678",
        discounts: [
            { date: "2024-01-01", time: "10:00", company: "Επιχείρηση Α", amountSpent: "100€", amountSaved: "10€" },
            { date: "2024-01-15", time: "14:30", company: "Επιχείρηση Β", amountSpent: "50€", amountSaved: "5€" },
            { date: "2024-02-10", time: "09:20", company: "Επιχείρηση Γ", amountSpent: "200€", amountSaved: "20€" }
        ]
    };

    document.getElementById('profileName').textContent = profileData.name;
    document.getElementById('profileEmail').textContent = profileData.email;
    document.getElementById('profilePhone').textContent = profileData.phone;
    document.getElementById('profileID').textContent = profileData.id;

    const discountTableBody = document.getElementById('discountTableBody');
    profileData.discounts.forEach(discount => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${discount.date}</td>
            <td>${discount.time}</td>
            <td>${discount.company}</td>
            <td>${discount.amountSpent}</td>
            <td>${discount.amountSaved}</td>
        `;
        discountTableBody.appendChild(row);
    });
});
