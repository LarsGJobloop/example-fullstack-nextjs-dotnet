// "use client"

// import { useEffect, useState } from "react";

export default async function Home() {
  const response = await fetch("http://localhost:5176")
  const data = await response.text()
  
  // const [data, setData] = useState<string | null>(null)
  // useEffect(() => {
  //   fetch("http://localhost:5176")
  //     .then(response => response.text())
  //     .then(payload => setData(payload))
  // }, [])

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
