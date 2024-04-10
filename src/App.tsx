import { menuItems } from './data/db';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <>
      <header className="bg-blue-700 py-4">
        <h1 className="font-medium text-3xl text-white text-center">
          Calculadora de Propinas
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2 gap-x-4">
        <div className="bg-gray-200 rounded-3xl p-4">
          <h2 className="text-2xl font-bold">Menú</h2>

          <div className="space-y-3 mt-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-3xl p-4">
          <h2 className="text-2xl font-bold">Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
