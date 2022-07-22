import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add an Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {
        authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllAuthors} />
        ))
      }
      </div>
    </div>
  );
}
