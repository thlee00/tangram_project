import React, { useState } from "react";
import type { TangramObject } from "../types/TangramObject";
import { sampleObjects } from "../data/sampleObjects";
import SelectedObjectDetail from "../components/SelectedObjectDetail";

const IdeaFactory: React.FC = () => {
  const [selected, setSelected] = useState<TangramObject | null>(null);

  return (
    <div className="p-6 relative">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">🧠 Idea Factory</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {sampleObjects.map((obj) => (
          <div
            key={obj.id}
            onClick={() => setSelected(obj)}
            className="w-28 h-28 bg-white border rounded-lg flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
          >
            <img
              src={obj.tangramImage}
              alt={obj.name}
              className="h-20 object-contain"
            />
          </div>
        ))}
      </div>


      {selected && (
        <SelectedObjectDetail obj={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default IdeaFactory;
