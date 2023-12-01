import Link from "next/link";

interface user {
  id: number;
  name: string;
  email: string;
}

async function Page() {
  const datas: Array<user> = await getData();
  return (
    <>
      <h1>UserDatas are</h1>
      {datas.map((item: user,) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          {/* <h6>{item.email}</h6> */}
          <Link href={`user/${item.id}`}>more about {item.name} Details..</Link>
        </div>
      ))}
    </>
  );
}

async function getData() {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await result.json();
  // const slicedData = data.slice(0, 1);
  if (!data) {
    return 'No Data Shown,!';
  }
  console.log(data);
  return data;
}

export default Page;
