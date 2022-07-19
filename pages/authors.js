import React, { useEffect, useState } from 'react';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();
  const getAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };
  useEffect(() => {
    getAllAuthors();
  }, [user]);
  return (
    <div>
      {
        authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllAuthors} />
        ))
      }
    </div>
  );
}
