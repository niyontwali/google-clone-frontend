# Google Clone Frontend

This repository contains the source code for the Google Clone Project, built using React, TypeScript, and Redux for state management. Though it is a smaller project, I have ensured that every folder and file is organized following best practices to illustrate what a project with an optimal structure looks like.

You can view the live demo of the Google Clone project at [google-clone.nijohn.dev](http://google-clone.nijohn.dev).


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Search Functionality
- Pagination
- Responsive Design

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/niyontwali/google-clone-frontend.git
    cd google-clone
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```
3. You will need a `.env` file containing the variables for the project. You can create this file by running the following command:

    ```sh
    cp .env.example .env
    ```

This command will create a `.env` file with the same variables as `.env.example` then you will add the respective values.

4. **Start the development server:**
    ```bash
    npm run dev
    ```

5. **Build for production:**
    ```bash
    npm run build
    ```

6. **Preview the production build:**
    ```bash
    npm run preview
    ```

**Note:** Additional scripts can be found in the `scripts` section of the `package.json` file.

## Usage

After starting the development server, the application will run on port 5173 by default. Open your browser and navigate to `http://localhost:5173` to see the Google Clone app in action. You can perform searches, paginate through results, and observe the responsive design adapt to different screen sizes.

## Screenshots

### Home Page
<img width="1470" alt="Screenshot 2024-07-12 at 22 41 33" src="https://github.com/user-attachments/assets/107d37fa-e28a-4d51-9ea8-033b5215b300">


### Search Results
<img width="1470" alt="Screenshot 2024-07-12 at 22 42 13" src="https://github.com/user-attachments/assets/6a4e0b21-7e62-4425-abf3-13e8d1d68ded">


## Technologies Used

- React
- TypeScript
- Redux
- Tailwind CSS
- React Router DOM (for navigation)

## Project Structure

```
google-clone/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── redux/
│   ├── routes/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── vite-env.d.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
```

## License

This project is licensed under the MIT License.

## Contact

John Niyontwali - [nijohn0006@gmail.com](mailto:nijohn0006@gmail.com)

Projected Hosted link: [https://google-clone.nijohn.dev](https://google-clone.nijohn.dev)
