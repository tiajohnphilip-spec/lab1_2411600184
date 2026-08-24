const username = localStorage.getItem("username");

// Check if the user is logged in
if (username === null) {
    window.location.href = "index.html";
} else {
    document.getElementById("studentName").textContent = username;
    document.getElementById("navUsername").textContent = username;

    // Greeting based on the current time
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById("greeting").textContent = greeting;

    // Display current date
    const today = new Date();

    document.getElementById("currentDate").textContent =
        today.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

    // Student information
    document.getElementById("gpaValue").textContent = "3.75";
    document.getElementById("coursesValue").textContent = "6";
    document.getElementById("assignmentsValue").textContent = "3";
    document.getElementById("attendanceValue").textContent = "95%";

    // Recent activities
    const activities = [
        ["August 24, 2026", "Submitted laboratory exercise", "Web Systems and Technologies"],
        ["August 23, 2026", "Completed quiz", "Database Systems"],
        ["August 22, 2026", "Attended class", "Networking"],
        ["August 20, 2026", "Uploaded assignment", "Computer Programming"]
    ];

    const activityTable = document.getElementById("activityTable");

    for (let i = 0; i < activities.length; i++) {
        const row = document.createElement("tr");

        const date = document.createElement("td");
        date.textContent = activities[i][0];

        const activity = document.createElement("td");
        activity.textContent = activities[i][1];

        const subject = document.createElement("td");
        subject.textContent = activities[i][2];

        row.appendChild(date);
        row.appendChild(activity);
        row.appendChild(subject);

        activityTable.appendChild(row);
    }
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", function () {
    const logout = confirm("Are you sure you want to log out?");

    if (logout) {
        localStorage.removeItem("username");
        window.location.href = "index.html";
    }
});