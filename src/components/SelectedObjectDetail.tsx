// src/components/SelectedObjectDetail.tsx
import React from "react";
import type { TangramObject } from "../types/TangramObject";

interface Props {
  obj: TangramObject;
  onClose: () => void;
}

const SelectedObjectDetail: React.FC<Props> = ({ obj, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <button
        onClick={onClose}
        className="mb-4 text-sm text-blue-500 hover:underline"
      >
        ← 돌아가기
      </button>
      <h2 className="text-xl font-bold mb-2">{obj.name}</h2>
      <p className="text-gray-600 mb-4">Color: {obj.color}</p>
      <img
        src={obj.generatedImage}
        alt="Generated"
        className="w-full rounded-md"
      />
    </div>
  </div>
);

export default SelectedObjectDetail;
