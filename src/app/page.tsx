import Link from "next/link";

function Index() {
  return (
    <div className="bg-white px-14 py-10 rounded-md text-left mt-5 max-w-96 ring-3 ring ring-black">
      <h1 className="text-6xl font-semibold font-serif">
        <span className="text-yellow-500">Football</span>
        <br />
        <span className="text-red-500">info</span>
      </h1>
      <p className="text-lg leading-normal mt-6">
        Футбольные команды и сорвенования, по информации из{" "}
        <Link href="https://www.football-data.org/">публичных источников</Link>.
      </p>
      <Link href="/info" className="btn block text-center mt-5 w-full">
        Открыть
      </Link>
    </div>
  );
}

export default Index;
