# Notes App — Frontend Version Control Task

A lightweight note-taking web app built with React, Vite, and Tailwind CSS.

## Features
- Create, edit, and delete notes
- Tag-based filtering
- LocalStorage persistence
- Fully responsive design

## Tech Stack
- React 18 + Vite
- Tailwind CSS v4

## Setup
- npm install
- npm run dev

## Additional Project Documentation and Branch Strategy

This project followed a feature-based branching strategy to ensure clean development and easy integration.

- main → Stable and production-ready code
- feature-header → Implemented the application header UI and layout
- feature-notes-v1 → Core notes functionality (create, edit, delete notes)

Each feature was developed in its own branch and merged into main after completion and review.

## Screenshots of Merged PRs

![Merged PR - Header Feature](./screenshot/Pull%20Requests.png)
![Merged PR - Notes Feature](./screenshot/Pull%20Requests.png)


## Git Commands Frequently Used

```
# Create a new feature branch
git checkout -b feature-header

# Switch branches
git checkout main

# Stage changes
git add .

# Commit changes
git commit -m "Implement header component"

# Push branch to remote
git push origin feature-header

# Pull latest updates
git pull origin main

# Merge a feature branch into main
git checkout main
git merge feature-header

# Delete branch after merge
git branch -d feature-header
```

## Lessons Learned

- Structured Branching Improves Workflow
Using separate feature branches (feature-header, feature-notes-v1) made development more organized and easier to manage.

- Breaking Features into Components
Building the header and notes functionality separately improved modularity and code readability.

- State Management with React (useState)

- Learned how to manage dynamic data like notes and UI state efficiently.

- LocalStorage for Persistence

- Implemented client-side storage to persist notes without a backend.

- Incremental Development Approach

- Building features step-by-step (header → notes logic) reduced complexity and bugs.

- Version Control Discipline

- Writing meaningful commit messages and managing branches improved collaboration readiness.