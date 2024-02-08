import Image from "next/image";
export default function Home() {
  return (
    <div>


      <nav className="flex justify-between items-center p-4">
        <Image src="/logo.png" width={180} height={120} alt="Logo" className="w-18 h-12" />
        <div className="page-group">
          <h1 className="home">Home</h1>
          <h1 className="other-pages">Privacy Policy</h1>
          <h1 className="other-pages">Contact Us</h1>
        </div>
        <div className="signup-group">
          <h1>Login</h1>
          <h1 className="signup">Sign Up</h1>
        </div>
      </nav>

      <div className="background text-center py-16">
        <h1 className="text-4xl font-bold">German Simulations</h1>
        <p className="text-lg">Bridging the Gap Between Theory and Practice</p>
      </div>
    </div>
  );
}
