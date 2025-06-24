"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<string | null>(null)


  useEffect(() => {
    fetch("http://localhost:5176")
      .then(response => response.json())
      .then(payload => setData(payload))
  }, [])

  return (
    <div>
      <h1 className="text-center">Hello World</h1>

      <p>
        {
          !data ? <>No data</> : <>{data}</>
        }
      </p>
    </div>
  );
}
