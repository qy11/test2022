import { useEffect, useState } from 'react';

const useInfo = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    ; (async () => {
      const res = await fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json())
      setInfo(res)
    })();
  }, []);
  return info;
};

export default useInfo;
