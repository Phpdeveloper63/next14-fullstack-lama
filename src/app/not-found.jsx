import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h2>Opps this page does not exist</h2>
      this is the custom 404
      <Link href="/">Home</Link>
    </div>
  );
}

export default NotFound;
