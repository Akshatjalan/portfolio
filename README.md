# My Modern Bento Grid Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC) ![React](https://img.shields.io/badge/React-18-61DAFB) ![License](https://img.shields.io/badge/License-MIT-green)

A high-performance, responsive personal portfolio website built with **Next.js (App Router)** and **Tailwind CSS**. 

This project features a modern **Bento Grid** layout, showcasing experience, projects, and skills in a clean, modular interface. It includes micro-interactions, 3D-style hover effects, and a fully responsive design.

## ✨ Features

* **Bento Grid Layout:** A modular, grid-based design that adapts seamlessly from mobile to desktop.
* **Responsive Design:** optimized for all screen sizes (Mobile `grid-cols-2` / Desktop `grid-cols-4`).
* **Micro-Interactions:** Smooth hover states, scaling images, and tilt effects on project cards.
* **Dark Mode UI:** A premium dark aesthetic using Slate and Zinc color palettes with Vibrant Orange accents (`#ff6522`).
* **Performance:** Built on Next.js Server Components for lightning-fast load times.
* **Tailwind CSS:** Utility-first styling with custom animations (spinners, glows).

## 🛠️ Tech Stack

* **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
* **Language:** JavaScript (ES6+) / React
* **Icons:** Custom SVGs (Heroicons style)
* **Font:** Geist Sans / Inter (Default Next.js fonts)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/my-portfolio.git](https://github.com/yourusername/my-portfolio.git)
    cd my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(Note: This project uses Tailwind v3. If you encounter issues, ensure `autoprefixer` is installed via `npm install autoprefixer`)*

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📂 Project Structure

```bash
.
├── src/
│   ├── app/
│   │   ├── layout.js      # Root layout (Fonts, Meta tags)
│   │   ├── page.js        # Main Bento Grid layout
│   │   └── globals.css    # Tailwind directives & global styles
│   └── components/        # (Optional) Reusable UI components
├── public/                # Static assets (images, icons)
├── tailwind.config.js     # Tailwind configuration
└── postcss.config.mjs     # PostCSS configuration
