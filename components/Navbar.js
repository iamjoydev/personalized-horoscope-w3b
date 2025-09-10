export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="logo">DWTech • Astro</div>
      <div className="flex items-center gap-4">
        <a className="text-gray-300 hover:text-white" href="#">Home</a>
        <a className="text-gray-300 hover:text-white" href="#">About</a>
        <a className="text-gray-300 hover:text-white" href="#">Contact</a>
      </div>
    </nav>
  );
}
