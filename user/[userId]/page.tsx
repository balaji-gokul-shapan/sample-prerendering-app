import Link from "next/link";

export default async function UserDetails({params,}: { params: { userId: string };
}) {
const data = await getDataId({userId: params.userId})
  return (
    <>
      <h1>User Details</h1>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
      <Link style={{float:'right'}} href={`/user/${params.userId}/comments`}>comments</Link>
      <Link href={'/user'}>Back</Link>
      {/* <p>{params.userId}</p> */}

    </>
  );

  async function getDataId({userId}: {userId: string}) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await result.json();
    // const slicedData = data.slice(0, 1);
    if (!data) {
      return 'No Data Shown,!';
    }
    console.log(data);
    return data;
  }

}