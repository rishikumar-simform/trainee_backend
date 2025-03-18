## Book Management API  

This is a simple **Node.js** and **Express.js** backend application that manages books using a **MySQL** database. It provides RESTful API endpoints to create, read, and update books.  


## Technologies

- **Frontend**: React, React Router, Fetch API
- **Backend**: Express.js
- **Database**: Mysql
- **CORS**: For handling cross-origin requests between the React frontend and Express backend.


## Getting Started
### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)



### Installation  

1. Clone the repository:  
   
```bash
   git clone https://github.com/rishikumar-simform/trainee_backend.git
   cd trainee_backend
```

2. Install dependencies:  
   
```bash
   npm install
```

3. Set up environment variables:  
   Create a .env file in the project root and add your MySQL database credentials:  
   
```env
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   DB_PORT=your_mysql_port
```

4. Start the server:  
   

```bash
   npm start
```

   The server will run on http://localhost:5000.

### API Endpoints  

#### Fetch all books  
**GET** /books  
**Response:**  
json
[
  { "id": 1, "title": "Book Title", "author": "Author Name" }
]


#### Add a new book  
**POST** /books  
**Body:**  
json
{
  "title": "New Book",
  "author": "New Author"
}

**Response:**  
json
{
  "id": 2,
  "title": "New Book",
  "author": "New Author"
}


#### Update a book  
**PUT** /books/:id  
**Body:**  
json
{
  "title": "Updated Title",
  "author": "Updated Author"
}

**Response:**  
json
{
  "message": "Book updated successfully"
}

