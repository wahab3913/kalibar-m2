'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Filter } from 'lucide-react';

interface HeaderCardProps {
  title: string;
  periodLabel: string;
  periodValue: string;
  selectedWarehouses: string[];
  availableWarehouses: string[];
  tempSelectedWarehouses: string[];
  isWarehouseDropdownOpen: boolean;
  setIsWarehouseDropdownOpen: (open: boolean) => void;
  handleWarehouseToggle: (warehouse: string) => void;
  handleApply: () => void;
  handleClear: () => void;
  bgColor?: string;
}

export function HeaderCard({
  title,
  periodLabel,
  periodValue,
  selectedWarehouses,
  availableWarehouses,
  tempSelectedWarehouses,
  isWarehouseDropdownOpen,
  setIsWarehouseDropdownOpen,
  handleWarehouseToggle,
  handleApply,
  handleClear,
  bgColor = '#003286',
}: HeaderCardProps) {
  return (
    <Card className="border-0 shadow-sm" style={{ backgroundColor: bgColor }}>
      <CardContent className="p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-end">
          {/* Period Display */}
          <div>
            <Label className="text-xs font-semibold text-white uppercase tracking-wide mb-2 block">
              {periodLabel}
            </Label>
            <div className="text-sm md:text-lg font-semibold text-white bg-white/10 rounded-lg px-3 md:px-4 py-2 md:py-3 border border-white/20">
              {periodValue}
            </div>
          </div>

          {/* Title */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {title}
            </h2>
          </div>

          {/* Warehouse Dropdown */}
          <div>
            <Label className="text-xs font-semibold text-white uppercase tracking-wide mb-2 block">
              Warehouse
            </Label>
            <DropdownMenu
              open={isWarehouseDropdownOpen}
              onOpenChange={setIsWarehouseDropdownOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between bg-white/10 hover:bg-white/20 text-white text-left font-normal border-white/20 shadow-sm hover:shadow-md transition-all text-sm md:text-base"
                >
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {selectedWarehouses.length > 0 ? (
                      selectedWarehouses.map((warehouse) => (
                        <span
                          key={warehouse}
                          className="inline-flex items-center px-2 md:px-2.5 py-0.5 md:py-1 rounded-md text-xs font-semibold bg-white text-primary"
                        >
                          {warehouse}
                        </span>
                      ))
                    ) : (
                      <span className="text-white/70 text-xs md:text-sm">
                        Select warehouses...
                      </span>
                    )}
                  </div>
                  <Filter className="ml-2 h-3 w-3 md:h-4 md:w-4 shrink-0 text-white/70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-64 md:w-72 p-3 md:p-4 shadow-lg border-border"
                align="end"
              >
                <div className="space-y-2 md:space-y-2.5 max-h-64 overflow-y-auto mb-3 md:mb-4">
                  {availableWarehouses.map((warehouse) => (
                    <div
                      key={warehouse}
                      className="flex items-center space-x-2 md:space-x-3 p-1.5 md:p-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <Checkbox
                        id={`warehouse-${warehouse}`}
                        checked={tempSelectedWarehouses.includes(warehouse)}
                        onCheckedChange={() => handleWarehouseToggle(warehouse)}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <label
                        htmlFor={`warehouse-${warehouse}`}
                        className="text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                      >
                        {warehouse} - Warehouse
                      </label>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 pt-3 md:pt-4 border-t border-border">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleClear}
                    className="flex-1 hover:bg-muted bg-transparent text-xs md:text-sm"
                  >
                    Clear
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleApply}
                    className="flex-1 bg-primary hover:bg-primary/90 shadow-sm text-xs md:text-sm"
                  >
                    Apply
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
