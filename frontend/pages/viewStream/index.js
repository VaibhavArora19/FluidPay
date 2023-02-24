import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi';
import { getStreams } from '@/subgraph';

const index = () => {
  const [streams, setStreams] = useState();
  const {address} = useAccount();

    useEffect(() => {

      if(address) {
        
        (async function() {

          const result = await getStreams(address); 
          setStreams(result);

        })();
      }

    }, [address]);

  return (
    <div>index</div>
  )
}

export default index