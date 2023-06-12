import { api, apiHost } from '@/lib/config';
import * as React from 'react'
import { useEffect } from 'react';

const WikiPage: React.FC<any> = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const pageId = 'wiki-4fc3f5d4c4c94173aaae55b8a697d63f';
    fetch(`${apiHost}${api.getNotionPage}`, {
      method: 'POST',
      body: JSON.stringify({ pageId }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        console.log('page', res);
      })
      .catch(er => {
        console.log('err', er);
      })

  }, [])
  return (
    <div>
      afa
    </div>
  )
}

export default WikiPage;
