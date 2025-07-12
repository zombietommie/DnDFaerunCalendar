import Calendar from "./components/Calendar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <main>
        <h1>Calendar of Harptos</h1>
        {<Calendar />}
      </main>
      <footer></footer>
    </div>
  );
}
