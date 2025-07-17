import Calendar from "./components/Calendar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <main>
        <p className="text-5xl font-bold p-10">Calendar of Harptos</p>
        {<Calendar />}
      </main>
      <footer></footer>
    </div>
  );
}
