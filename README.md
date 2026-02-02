# 📅 School exams calendar
A JavaScript-based calendar to track school exams, assignments, and important dates.
This **calendar uses** a **Node.js localhost server** and a **MySQL database**

## 📃 Features (available / in progress):

### Frontend
- Homepage ✅
- Sign-in page ✅
- Sign-up page ✅
- Password reset page 🗄️
- Calendar page 🔜
- Support & FAQ page 🗄️
- Cookies 🗄️

### Database (MySQL):
- Store login / registration data ✅
- Test setup ✅
- Hashed credentials 🛠️ (High priority for security reasons)
- Store exam / test dates 🔜
- Test setup 🔜
- Hashed exam data 🗄️

### Backend (Node.js localhost server):

- Sign-in handling ✅
- Sign-in class implementation ✅
- Sign-up handling ✅
- Requesting calendar data 🔜
- Hashing login credentials 🛠️ (High priority for security reasons)
- Hashing exam data 🔜 (Will be implemented after calendar test setup)
- Creating new exam entries (permission-based) 🗄️
- Password reset 🗄️
- Account deletion 🗄️
- Two-factor authentication (2FA) 🗄️

### Security & Sessions:
- Session creation after successful sign-in 🗄️
- Redirect users to the homepage after login 🗄️
- Prevent access to the homepage without a valid session ID 🗄️


#### Feature Status Legend:
- ✅ Implemented
- 🛠️ Currently in development
- 🔜 Planned for future release
- 🗄️ Backlog (will move to 🔜 once core features are finished)

## 🚦 Testing the Website:
If you want to test the current state of the website, follow these steps:

ℹ️ Node.js and required modules are included in this repository

1. Download the repository
2. Configure index.js inside the Server folder
   - Enter your MySQL credentials (username, password, database, table)
3. Start the Node.js server using the following command in CMD:

`node "C:\Users\...\SchoolExamsCalendar\Nodejs-Server\index.js"`

ℹ️ If you’re unsure about the file path, copy it and paste it after node
4. Open index.html or HOMEPAGE.html in your browser
🎉 The application should now be running!

## ⚠️ Important Notes:
- This project is still in development
- Since I am German, the website language is German
- Bugs in the frontend or Node.js backend are expected
  ℹ️ The project is currently in alpha, reported bugs will be fixed

If you have questions or encounter issues, please use the Issues section