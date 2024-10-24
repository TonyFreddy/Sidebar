document.addEventListener("DOMContentLoaded", function() {
    const monthYearDisplay = document.getElementById('monthYear');
    const daysContainer = document.querySelector('.days');

    // Date courante
    let currentDate = new Date();

    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    // Fonction pour afficher le calendrier
    function renderCalendar() {
        daysContainer.innerHTML = ""; // Effacer les jours précédents

        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        monthYearDisplay.innerText = `${monthNames[currentMonth]} ${currentYear}`;

        // Obtenir le premier jour du mois (0 = Dimanche, 1 = Lundi, ...)
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        // Ajuster pour que Lundi soit le premier jour de la semaine
        const startingEmptyDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

        // Obtenir le nombre total de jours dans le mois
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Ajouter les cases vides pour les jours avant le premier jour du mois
        for (let i = 0; i < startingEmptyDays; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty');
            daysContainer.appendChild(emptyDiv);
        }

        // Ajouter les jours du mois
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.innerText = day;
            daysContainer.appendChild(dayDiv);
        }
    }

    // Événements pour changer de mois et d'année
    document.getElementById('prevMonth').addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    document.getElementById('prevYear').addEventListener('click', function() {
        currentDate.setFullYear(currentDate.getFullYear() - 1);
        renderCalendar();
    });

    document.getElementById('nextYear').addEventListener('click', function() {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        renderCalendar();
    });

    // Afficher le calendrier au chargement initial
    renderCalendar();
});
