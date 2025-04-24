# Franchise Dashboard - Internship Test Project
Overview
This is a Next.js project for a franchise management dashboard. It includes a responsive sidebar and various components to display franchise data, such as account progress, financial wellbeing, and an AI chat assistant.
Setup Instructions

# Clone the repository:
sh```
git clone <repository-url>
cd franchise-dashboard
```

Install dependencies:
sh```
npm install
```

Run the development server:
sh```
npm run dev
```

Open http://localhost:3000 to view the app.


Components
/dashboard/home
Nav: Shows user profile pic with settings
Sidebar: A responsive sidebar with tabs for navigation (desktop: fixed, mobile: dialog).
AccountProgress: Shows progress with a circular bar and step completion.
TotalFranchiseesOnboard: Displays total franchisees and stage-wise counts.
KeyInsightsFeedback: Shows sales growth and feedback.
FinancialWellbeing: Tracks financial targets and current values.
ProspectLeads: Lists leads with names and stages.
PendingMessages: Displays pending user questions.
AIChatAssistant: A chat interface with input and send functionality.

Notes

Built with Next.js and Tailwind CSS.
Components are located in src/components/.
Dashboard is accessible at /dashboard and also at / since redirect to /dashboard.
Sample data used is located at src/utils/data.ts -- can be swapped by api.ts for providing dynamic data from backend.
Types for typesafe data is at src/utils/type.ts
[demopage] is currently to make other routes accessible under dashboard page.
