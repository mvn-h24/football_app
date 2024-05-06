export function Index() {
  return (
    <section className="min-h-full bg-[url('/soccer-ball-goal.jpg')] bg-cover bg-center mflex justify-items-center items-center">
      <div className="px-10 lg:px-32 xl:px-40 w-1/2 pt-8">
        <div className="bg-white px-16 py-14 rounded-md text-left">
          <h1 className="text-6xl font-semibold font-serif mb-6">
            <span className="text-red-500">Football</span> <br />
            <span>info</span>
          </h1>
          <p className="text-lg max-w-md">
            Check out actual football stats on this site
          </p>
        </div>
      </div>
    </section>
  );
}

export default Index;
