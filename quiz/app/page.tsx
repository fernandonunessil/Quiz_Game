import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full grid justify-center items-center h-screen">
        <div>
          <h1 className="text-center text-4xl font-bold">Quiz-Game</h1>
          <p>Descubra quais livros vc deveria ler</p>
          <div className="text-center p-2">
            {/* <button className="bg-green-500 text-white p-2 rounded">Começar</button> */}
            <Link href={"/quiz"} className="bg-green-500 text-white p-2 rounded">Começar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
