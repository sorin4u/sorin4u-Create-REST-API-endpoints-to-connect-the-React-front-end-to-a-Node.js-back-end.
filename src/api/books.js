// // Import the API endpoint
// const API_ENDPOINT = "http://localhost:5000/api/books"; // Replace with your actual API endpoint

// // Create the addNewBook function
// export const addNewBook = async (newTitle, newStart, newEnd) => {
//     try {
//         const response = await fetch(API_ENDPOINT, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 title: newTitle,
//                 start: newStart,
//                 end: newEnd,
//             }),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const newBook = await response.json();
//         return newBook;
//     } catch (error) {
//         console.error('Failed to add new book:', error);
//         throw error; // Re-throw the error to handle it in the calling function
//     }
// };

// // Create the getBooks function
// export const getBooks = async () => {
//     try {
//         const response = await fetch(API_ENDPOINT);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Failed to fetch books:', error);
//         throw error; // Re-throw the error to handle it in the calling function
//     }
// };

// // Create the updateBook function
// export const updateBook = async (id, newTitle, newStart, newEnd) => {
//     const response = await fetch(`${API_ENDPOINT}/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             title: newTitle,
//             start: newStart,
//             end: newEnd,
//         }),
//     });
//     return response.status;
// };

// // Create the deleteBook function
// export const deleteBook = async (id) => {
//     const response = await fetch(`${API_ENDPOINT}/${id}`, {
//         method: "DELETE",
//     });
//     return response.status;
// };



import { API_ENDPOINT } from ".";

export const getBooks = async () => {
  const response = await fetch(`${API_ENDPOINT}/books`);
  const books = await response.json();

  return books;
};

export const addNewBook = async (newTitle, newStart, newEnd) => {
  const response = await fetch(`${API_ENDPOINT}/books`, {
    method: "POST",
    body: JSON.stringify({
      title: newTitle,
      start: newStart,
      end: newEnd
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newBook = await response.json();

  return newBook;
};

export const deleteBook = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
    method: "DELETE",
  });

  return response.status;
};

export const updateBook = async (id, newTitle, newStart, newEnd) => {
  const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      newTitle,
      newStart,
      newEnd
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.status;
};
