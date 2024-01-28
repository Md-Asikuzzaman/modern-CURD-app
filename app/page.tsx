import Card from './components/Card';

export default async function Home() {
  var posts: any[] = [];

  try {
    const res = await fetch('http://localhost:3000/api/posts', {
      cache: 'no-cache',
    });
    posts = (await res.json()) as any[];
  } catch (error) {
    console.log(error);
  }

  if (posts.length <= 0) {
    return <h1>No Data</h1>;
  }

  return (
    <main className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
      {posts?.map((post: any) => (
        <Card key={post.id} post={post} />
      ))}
    </main>
  );
}
