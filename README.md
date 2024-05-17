# Library Management System
![Library](static/img/Library.png)
![Python](https://img.shields.io/badge/Python-3.10-green)
![Django](https://img.shields.io/badge/Django-5.0.0-blue)

This is a simple Library Management System built with Django. It allows users to:

- View a list of all books in the library
- Add new books to the library
- Delete existing books from the library
- View detailed information about a specific book

## Features

- **Book Management :** Add, view, and delete books with details such as title, author, genre, and number of copies.
- **Search Functionality :** Search for books based on title or author.
- **User-friendly Interface :** Simple and intuitive interface for ease of use.

## Getting Started

### Prerequisites

- [Python 3.10 or higher ](https://www.python.org/) 
- [Django 5.0.0 or higher](https://www.djangoproject.com/)
- A text file named 'booklist.txt' containing the book details in the following format: 
   -  **"title"**,**"author"**,**"genre"**,**"copies"**,**"publisher"** 

    - Example

        | title        | author           | genre  | copies | publisher |
        | ------------- |:-------------:| -----:| -----:| -----:|
        | Python Crash Course      | Eric Matthes | programming | 100 | No Starch Press |
        | Fundamentals of Wavelets      | Goswami, Jaideva | signal_processing | 228 | Wiley |
        | Data Smart      | Foreman, John | data_science | 235 | Wiley |



### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yasanthaniroshan/Library-Management-System.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Library-Management-System
    ```

3. Create a virtual environment and activate it:

    ```bash
    python -m venv .
    source bin/activate
    ```

4. Install the required packages:

    ```bash
    pip install -r requirements.txt
    ```

5. Apply the migrations:

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```


### Running the Application

1. Add book details to the `booklist.txt` file in the root directory.
2. Run the script 'AddBooks.py' located in the root directory to add the books from the 'booklist.txt' file to the database.
    ```bash
    python AddBooks.py
    ```
3. Start the development server:

    ```bash
    python manage.py runserver
    ```

4. Access the application in your web browser at http://127.0.0.1:8000/

## Usage

- **Home Page -** 
Provides links to access the different features of the system.
- **View Book List -** Displays a table with all the books in the library.
- **Add Book -** Allows users to add new books by providing the necessary information.
- **Delete Book -** Enables users to delete books by searching for their title or author.
- **View Book -** Displays detailed information about a specific book.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
