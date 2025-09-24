export default function SideMenu() {
  return (
    <aside className="sticky top-0 pt-14 flex-1 h-full">
      <div>
        <p className="mb-4 *:text-lg font-semibold">We have,</p>
        <ul className="ml-4 flex flex-col items-start justify-start gap-3 text-md">
          <li>
            <a href="#section-1">Place to stay for trips</a>
          </li>
          <li>
            <a href="#section-2">Air Conditioned Rooms</a>
          </li>
          <li>
            <a href="#section-3">Non Air Conditioned Rooms</a>
          </li>
          <li>
            <a href="#section-4">Breakfast</a>
          </li>
          <li>
            <a href="#section-5">Lunch</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
