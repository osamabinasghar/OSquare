import React from 'react';
import { FileSpreadsheet, MessageSquare } from 'lucide-react';

const productIcons = {
  'OSquare Teams': MessageSquare,
  'Excel': FileSpreadsheet
};

const ProductBadge = ({ name }) => {
  const Icon = productIcons[name] || MessageSquare;

  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700">
      <Icon className="w-4 h-4 mr-2" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default ProductBadge;