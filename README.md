# Project Open to Intern

A full-stack internship management platform that connects students with colleges for internship opportunities. Similar to platforms like Internshala and Chegg Internships.

![Homepage](https://github.com/user-attachments/assets/18a35c52-cc39-4406-bd49-b6da1b8e61e9)

## 🚀 Features

- **College Management**: Register and manage colleges with their details and logos
- **Intern Applications**: Students can apply for internships at registered colleges
- **College Search**: Search colleges by abbreviated name and view registered interns
- **Responsive Design**: Fully responsive UI that works on all devices
- **Modern UI**: Built with a custom design system using design tokens

## 🏗 Project Structure

This is a monorepo containing both frontend and backend:

```
/
├── backend/           # Express.js backend API
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── validators/
│   └── package.json
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── theme/
│   └── package.json
└── package.json       # Root workspace config
```

## 🛠 Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication (available)
- **Multer** for file uploads

### Frontend
- **React 19** with Vite
- **React Router** for navigation
- **Axios** for API calls
- **TailwindCSS** for styling
- **React Hot Toast** for notifications

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/functionup/colleges` | Create a new college |
| POST | `/functionup/interns` | Register as an intern |
| GET | `/functionup/collegeDetails?collegeName=xxx` | Get college details with interns |

### Request/Response Examples

#### Create College
```json
POST /functionup/colleges
{
  "name": "iith",
  "fullName": "Indian Institute of Technology, Hyderabad",
  "logoLink": "https://example.com/logo.png"
}
```

#### Create Intern
```json
POST /functionup/interns
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "mobile": "9876543210",
  "collegeName": "iith"
}
```

#### Get College Details
```json
GET /functionup/collegeDetails?collegeName=iith

Response:
{
  "status": true,
  "data": {
    "name": "iith",
    "fullName": "Indian Institute of Technology, Hyderabad",
    "logoLink": "https://example.com/logo.png",
    "interns": [
      {
        "_id": "...",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "mobile": "9876543210"
      }
    ]
  }
}
```

## 🎨 Design System

The frontend uses a custom design token system:

```javascript
{
  colors: {
    primary: "#735F32",
    primaryVariant: "#C69749",
    background: { default: "#000000", surface: "#282A3A" },
    text: { primary: "#ffffff", secondary: "rgba(255, 255, 255, 0.6)" }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB connection string

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dipesh-J/Project-Open-to-Intern.git
cd Project-Open-to-Intern
```

2. Install dependencies:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

### Running Locally

**Frontend (Development)**:
```bash
npm run dev:frontend
# or
cd frontend && npm run dev
```
Frontend runs on http://localhost:5173

**Backend**:
```bash
npm run dev:backend
# or
cd backend && npm run dev
```
Backend runs on http://localhost:3001

### Building for Production

```bash
cd frontend && npm run build
```

## 📱 Screenshots

### Home Page
![Homepage](https://github.com/user-attachments/assets/18a35c52-cc39-4406-bd49-b6da1b8e61e9)

### Search Colleges
![Colleges](https://github.com/user-attachments/assets/a1e77cbe-6f07-4e12-aa94-f4a4e85e5b02)

### Add College
![Add College](https://github.com/user-attachments/assets/39c371b4-2017-44f2-8048-49c754f84120)

### Apply as Intern
![Apply Intern](https://github.com/user-attachments/assets/bddd1ac6-93e8-48af-8ce0-333b34e948ef)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Connect your repository to Vercel or Netlify
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/dist`
4. Set environment variable: `VITE_API_URL=https://your-backend-url.com`

### Backend Deployment (Render/Railway)

1. Connect your repository
2. Set root directory: `backend`
3. Set start command: `npm start`
4. Add environment variables:
   - `PORT`: Port number
   - `MONGODB_URI`: Your MongoDB connection string

## 📝 Data Models

### College Model
```javascript
{
  name: String,        // Unique, lowercase (e.g., "iith")
  fullName: String,    // Full college name
  logoLink: String,    // URL to college logo
  isDeleted: Boolean   // Soft delete flag
}
```

### Intern Model
```javascript
{
  name: String,        // Intern's full name
  email: String,       // Unique email
  mobile: String,      // Unique 10-digit mobile
  collegeId: ObjectId, // Reference to college
  isDeleted: Boolean   // Soft delete flag
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Dipesh Joshi**

---

Built with ❤️ for connecting students with opportunities
