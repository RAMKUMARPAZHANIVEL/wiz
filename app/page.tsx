export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          WIZ
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          Hello, world. The foundation is set.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-900 px-4 py-2 text-sm font-medium text-green-800 dark:text-green-100">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Production deployment live
        </div>
      </div>
    </main>
  );
}
