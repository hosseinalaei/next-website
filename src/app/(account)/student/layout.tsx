export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside className="w-80 flex bg-gray-300 justify-center items-center"></aside>
      <main>{children}</main>
    </>
  );
}
