export default function SideMenu() {
  return (
    <aside className="sticky pt-14 flex-1 h-full">
      <div>
        <p className="mb-4 *:text-lg font-semibold">We have,</p>
        <ul className="ml-4 flex flex-col items-start justify-start gap-3 text-md">
          <li>Place to stay for trips</li>
          <li>Air Conditioned Rooms</li>
          <li>Non Air Conditioned Rooms</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </div>
    </aside>
  );
}
