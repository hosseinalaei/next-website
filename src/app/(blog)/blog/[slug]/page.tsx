export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return <p>url: {slug}</p>;
}
