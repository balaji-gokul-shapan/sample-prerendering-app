import Image from 'next/image';
import Link from 'next/link';
interface CommentProps {
  name: string;
  email: string;
  body: string;
  postId: string;
  userId: string;
}
export default async function ProductsId({
  params,
}: {
  params: { productsId: string };
}) {

    //NOTE - /single Promise

//   const productData = await getProductId({ productsId: params.productsId });
//   const commentDataId = await getCommentsId({ productsId: params.productsId });

//NOTE - promise.all
  const [productData, commentDataId] = await Promise.all([
    getProductId({ productsId: params.productsId }),
    getCommentsId({ productsId: params.productsId })
  ]);

  //REVIEW - getcomments section
//   const commentData = await getComments();


  return (
    <div>
      <article>
        <h1>Products Details of {params.productsId}</h1>
        <h2>{productData.title}</h2>
        <p>{productData.description}</p>
        <Image
          src={productData.images}
          alt={productData.title}
          width={200}
          height={100}
        />
        <p>{productData.price}</p>
      </article>
      <section>
        <h2>Comments</h2>

          <div key={commentDataId.userId}>
            <h3>{commentDataId.name}</h3>
            <p>{commentDataId.email}</p>
            <p>{commentDataId.body}</p>
          </div>
          <Link
                style={{ float: 'right' }}
                href={`/products/${productData.id}/review`}>
                Add Review
              </Link>

               {/*//REVIEW -  all comments without Id */}
        {/* {commentData.map((item: CommentProps, index: number) => {
          return (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>{item.email}</p>
              <p>{item.body}</p>
              <Link
                style={{ float: 'right' }}
                href={`/products/${productData.id}/comments`}>
                Add Comments
              </Link>
            </div>
          );
        })} */}
      </section>
      <Link href={'/products'}>Back</Link>
    </div>
  );

  async function getProductId({ productsId }: { productsId: string }) {
    const res = await fetch(`https://fakestoreapi.com/products/${productsId}`);
    const productData = res.json();
    console.log('productData: ', productData);
    return productData;
  }
  async function getCommentsId({ productsId }: { productsId: string }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${productsId}`);
    const data = await res.json();
    console.log('data: ', data);

    return data;
  }

  async function getComments() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const data = await res.json();
    const selComments = data.slice(0, 1);
    console.log('selComments: ', selComments);
    return selComments;
  }
}
