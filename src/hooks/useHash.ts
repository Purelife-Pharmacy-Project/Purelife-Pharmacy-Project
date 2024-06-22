import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export const useHash = () => {
  const [hash, setHash] = useState(window.location.hash);

  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);
  return hash;
};
