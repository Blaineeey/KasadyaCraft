export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-800 to-green-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Minecraft Server</h1>
      <p className="text-lg mb-8">Survive, build, and explore with our amazing community!</p>
      <div className="bg-black/40 p-6 rounded-lg shadow-lg text-center">
        <p className="text-sm text-gray-300">
          IP Address: <span className="font-mono text-yellow-300">play.yourserver.com</span>
        </p>
        <p className="text-sm text-gray-300 mt-1">Version: 1.20.1</p>
      </div>
    </main>
  );
}
