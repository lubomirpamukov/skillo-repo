# QA Automation Environment Setup Guide

This guide will walk you through setting up your development environment for QA automation tasks.

---

## Prerequisites

Before starting the setup, ensure you have the following software installed on your machine:

1.  **Node.js**:
    - **Required Version**: $\ge$ 18.x.x
    - **Reason**: Node.js is required to run our automation scripts, including the verification script and our test runner. It also includes **npm** (Node Package Manager), which we use for project dependencies.

2.  **Visual Studio Code (VS Code)**:
    - **Required Version**: Latest stable release.
    - **Reason**: VS Code is our preferred code editor, offering excellent support for JavaScript, testing frameworks, and extensions that boost productivity and helps us with code consistency.

---

## Recommended VS Code Extensions & Configuration

To ensure code consistency and quality, we use **Prettier** for formatting and **ESLint** for static analysis.

### 1. Install Extensions

VS Code will prompt you to install the recommended extensions based on the configuration file located at **`.vscode/extensions.json`**. If the prompt doesn't appear, you can manually install the required extensions (ESLint and Prettier - Code formatter) via the Extensions view (Ctrl+Shift+X).

### 2. Configure Automatic Formatting

All necessary settings for automatic formatting and linting on save are already defined in the workspace file **`.vscode/settings.json`**.

This configuration ensures:

1.  **Prettier** applies consistent code style.
2.  **ESLint** catches and auto-fixes issues upon saving your files.

---

## Installation Verification

After installing the prerequisites, use the provided environment check script to verify the setup.

### 1. Locate the Script

The verification logic is contained within the `displayEnvironmentInfo()` function.
**Path**: `lectures/01-development-env-basics/homework/task01/verify-setup.js`

### 2. Run the Verification Script

Execute the script from your terminal (ensure you are in the `task01` directory, or adjust the path):

```bash

node verify-setup.js
```

## Troubleshooting

If you encounter issues during setup or verification, consult the common solutions below:

| Issue | Description | Solution |
| :--- | :--- | :--- |
| **Node/NPM not found** | When running the very-setup.js script if Node version, or NPM version dont show version | Ensure **Node.js** was installed correctly and that the installation directory is added to your system's **PATH** environment variable. Restart your terminal after installation. |
| **Wrong Node Version** | The script shows a Node version older than v18.x.x. | Use a **Node Version Manager** (**nvm** for Linux/macOS, **nvm-windows** for Windows) to install and switch to the required version. Alternatively, download and install the latest LTS version directly from the official Node.js website. |
| **`execSync` Error** | The script throws an error when trying to run `execSync("npm --version")`. | This often indicates an issue with running subprocesses. Ensure your user has the necessary permissions and that the `npm` command is globally accessible. Try running `npm -v` directly in the terminal to confirm. |


## Project Structure

Below is an overview of the main folders and their purposes in this QA Automation Course workspace. This structure ensures clear organization, making it easy for any team member to locate resources, scripts, and documentation throughout the course.

### Directory Tree

qa-automation-course/
├── resources/
├── lectures/
│   └── 01-development-env-basics/
│       ├── examples/
│       ├── practice/
│       └── homework/
│           ├── task01/
│           ├── task02/
│           └── task03/
├── .vscode/
└── package.json

| File/Folder Name | Purpose |
|------------------|---------|
| `resources/` | Contains supplementary materials, references, and assets for the course. |
| `lectures/` | Main directory for all lecture-related content and exercises. |
| `01-development-env-basics/` | Module for Lecture 1: Development Environment Basics. |
| `examples/` | Example scripts and code samples provided for reference. |
| `practice/` | Practice exercises and hands-on coding challenges. |
| `homework/` | Homework assignments and related scripts for this lecture. |
| `task01/` | Environment setup scripts and documentation (e.g., `verify-setup.js`, setup guides). |
| `task02/` | Test data management scripts and configuration files. |
| `task03/` | Test helper functions, debugging utilities, and DevTools practice logs. |
| `.vscode/` | Visual Studio Code workspace settings and recommended extensions for consistent development practices. |
| `package.json` | Project metadata and dependencies managed by NPM. |