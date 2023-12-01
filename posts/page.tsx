import Link from "next/link";

interface user {
  id: number;
  title: string;
  body: string;
}

async function Page() {
  const datas: Array<user> = await getData();
  return (
    <>
      <h1>UserDatas are</h1>
      {datas.map((item: user,) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          {/* <h6>{item.email}</h6> */}
          <Link href={`posts/${item.id}`}>more about {item.title} Details..</Link>
        </div>
      ))}
    </>
  );
}

async function getData() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json();
  // const slicedData = data.slice(0, 1);
  if (!data) {
    return 'No Data Shown,!';
  }
  console.log(data);
  return data;
}

export default Page;
