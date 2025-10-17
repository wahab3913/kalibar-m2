import { useState } from 'react';

export function useWarehouseSelector(
  userRole: string,
  initialWarehouse: string = '101'
) {
  const [selectedWarehouses, setSelectedWarehouses] = useState<string[]>([
    initialWarehouse,
  ]);
  const [tempSelectedWarehouses, setTempSelectedWarehouses] = useState<
    string[]
  >([initialWarehouse]);
  const [isWarehouseDropdownOpen, setIsWarehouseDropdownOpen] = useState(false);

  const availableWarehouses =
    userRole === 'Manager'
      ? ['101']
      : userRole === 'Director'
      ? ['101', '102', '103', '104', '105']
      : ['101', '102', '103', '104', '105', '106', '107', '108'];

  const handleWarehouseToggle = (warehouse: string) => {
    setTempSelectedWarehouses((prev) =>
      prev.includes(warehouse)
        ? prev.filter((w) => w !== warehouse)
        : [...prev, warehouse]
    );
  };

  const handleApply = () => {
    setSelectedWarehouses(tempSelectedWarehouses);
    setIsWarehouseDropdownOpen(false);
  };

  const handleClear = () => {
    setTempSelectedWarehouses([]);
  };

  return {
    selectedWarehouses,
    setSelectedWarehouses,
    tempSelectedWarehouses,
    setTempSelectedWarehouses,
    isWarehouseDropdownOpen,
    setIsWarehouseDropdownOpen,
    availableWarehouses,
    handleWarehouseToggle,
    handleApply,
    handleClear,
  };
}
