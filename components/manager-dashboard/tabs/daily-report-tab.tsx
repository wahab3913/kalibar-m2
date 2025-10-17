'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TrendingUp, Filter, Truck, Users, Package, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DailyReportTab() {
  const [selectedWarehouses, setSelectedWarehouses] = useState<string[]>([
    '101',
  ]);
  const [tempSelectedWarehouses, setTempSelectedWarehouses] = useState<
    string[]
  >(['101']);
  const [isWarehouseDropdownOpen, setIsWarehouseDropdownOpen] = useState(false);

  const userRole = 'Manager'; // This would come from auth context in production

  const availableWarehouses =
    userRole === 'Manager'
      ? ['101']
      : userRole === 'Director'
      ? ['101', '102', '103', '104', '105']
      : ['101', '102', '103', '104', '105', '106', '107', '108']; // VP or higher

  const getMostRecentWeek = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Days since Monday
    const monday = new Date(today);
    monday.setDate(today.getDate() - diff - 7); // Go back to previous week's Monday
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const formatDate = (date: Date) => {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return `${months[date.getMonth()]} ${date.getDate()}`;
    };

    return `Week of ${formatDate(monday)} – ${formatDate(
      sunday
    )}, ${monday.getFullYear()}`;
  };

  const weeklyData = [
    {
      driverName: 'John Smith',
      warehouseCode: '101',
      routeTypes: ['Fuel', 'Bulk'],
      totalShifts: 5,
      totalDeliveries: 142,
      avgStopsPerShift: 28.4,
      avgMinsFuel: 45.2,
      avgMinsBulk: 52.1,
      avgMinsBulkDEF: 38.7,
      avgMinsPackage: 41.3,
      avgMinsCombo: 48.9,
    },
    {
      driverName: 'Sarah Johnson',
      warehouseCode: '101',
      routeTypes: ['Package'],
      totalShifts: 5,
      totalDeliveries: 165,
      avgStopsPerShift: 33.0,
      avgMinsFuel: 0,
      avgMinsBulk: 0,
      avgMinsBulkDEF: 0,
      avgMinsPackage: 38.5,
      avgMinsCombo: 0,
    },
    {
      driverName: 'Mike Davis',
      warehouseCode: '102',
      routeTypes: ['Fuel'],
      totalShifts: 5,
      totalDeliveries: 138,
      avgStopsPerShift: 27.6,
      avgMinsFuel: 43.8,
      avgMinsBulk: 0,
      avgMinsBulkDEF: 0,
      avgMinsPackage: 0,
      avgMinsCombo: 0,
    },
    {
      driverName: 'Lisa Wilson',
      warehouseCode: '102',
      routeTypes: ['Bulk', 'Bulk DEF'],
      totalShifts: 5,
      totalDeliveries: 125,
      avgStopsPerShift: 25.0,
      avgMinsFuel: 0,
      avgMinsBulk: 55.3,
      avgMinsBulkDEF: 42.1,
      avgMinsPackage: 0,
      avgMinsCombo: 0,
    },
    {
      driverName: 'Tom Anderson',
      warehouseCode: '101',
      routeTypes: ['Combo'],
      totalShifts: 5,
      totalDeliveries: 148,
      avgStopsPerShift: 29.6,
      avgMinsFuel: 0,
      avgMinsBulk: 0,
      avgMinsBulkDEF: 0,
      avgMinsPackage: 0,
      avgMinsCombo: 46.7,
    },
  ];

  const filteredData = weeklyData.filter((item) =>
    selectedWarehouses.includes(item.warehouseCode)
  );

  const uniqueDrivers = new Set(filteredData.map((d) => d.driverName)).size;
  const totalShifts = filteredData.reduce(
    (sum, item) => sum + item.totalShifts,
    0
  );
  const totalDeliveries = filteredData.reduce(
    (sum, item) => sum + item.totalDeliveries,
    0
  );
  const totalGallons = filteredData.reduce(
    (sum, item) => sum + item.totalDeliveries * 8.5,
    0
  ); // Mock calculation
  const avgShiftLength = 8.2; // Mock value
  const totalYardTime = filteredData.reduce(
    (sum, item) => sum + item.totalShifts * 1.2,
    0
  );
  const avgYardTime = totalYardTime / totalShifts || 0;
  const totalOtherTime = filteredData.reduce(
    (sum, item) => sum + item.totalShifts * 0.4,
    0
  );
  const avgOtherTime = totalOtherTime / totalShifts || 0;
  const totalTrucks = Math.ceil(filteredData.length * 0.8); // Mock calculation

  const avgMinsFuel =
    filteredData.reduce(
      (sum, item) =>
        sum + (item.routeTypes.includes('Fuel') ? item.avgMinsFuel : 0),
      0
    ) /
    (filteredData.filter((item) => item.routeTypes.includes('Fuel')).length ||
      1);
  const avgMinsBulk =
    filteredData.reduce(
      (sum, item) =>
        sum + (item.routeTypes.includes('Bulk') ? item.avgMinsBulk : 0),
      0
    ) /
    (filteredData.filter((item) => item.routeTypes.includes('Bulk')).length ||
      1);
  const avgMinsBulkDEF =
    filteredData.reduce(
      (sum, item) =>
        sum + (item.routeTypes.includes('Bulk DEF') ? item.avgMinsBulkDEF : 0),
      0
    ) /
    (filteredData.filter((item) => item.routeTypes.includes('Bulk DEF'))
      .length || 1);
  const avgMinsPackage =
    filteredData.reduce(
      (sum, item) =>
        sum + (item.routeTypes.includes('Package') ? item.avgMinsPackage : 0),
      0
    ) /
    (filteredData.filter((item) => item.routeTypes.includes('Package'))
      .length || 1);
  const avgMinsCombo =
    filteredData.reduce(
      (sum, item) =>
        sum + (item.routeTypes.includes('Combo') ? item.avgMinsCombo : 0),
      0
    ) /
    (filteredData.filter((item) => item.routeTypes.includes('Combo')).length ||
      1);
  const avgStopsPerShift =
    filteredData.reduce((sum, item) => sum + item.avgStopsPerShift, 0) /
    (filteredData.length || 1);

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

  const handleCancel = () => {
    setTempSelectedWarehouses(selectedWarehouses);
    setIsWarehouseDropdownOpen(false);
  };

  return (
    <div className="space-y-6">
      <Card
        className="border-0 shadow-sm"
        style={{ backgroundColor: '#003286' }}
      >
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Date Display */}
            <div>
              <Label className="text-xs font-semibold text-white uppercase tracking-wide mb-2 block">
                Week Period
              </Label>
              <div className="text-lg font-semibold text-white bg-white/10 rounded-lg px-4 py-3 border border-white/20">
                {getMostRecentWeek()}
              </div>
            </div>

            {/* Title */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">Weekly Recap</h2>
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
                    className="w-full justify-between bg-white/10 hover:bg-white/20 text-white text-left font-normal border-white/20 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex flex-wrap gap-1.5 flex-1">
                      {selectedWarehouses.length > 0 ? (
                        selectedWarehouses.map((warehouse) => (
                          <span
                            key={warehouse}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-primary"
                          >
                            {warehouse}
                          </span>
                        ))
                      ) : (
                        <span className="text-white/70">
                          Select warehouses...
                        </span>
                      )}
                    </div>
                    <Filter className="ml-2 h-4 w-4 shrink-0 text-white/70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-72 p-4 shadow-lg border-border"
                  align="end"
                >
                  <div className="space-y-2.5 max-h-64 overflow-y-auto mb-4">
                    {availableWarehouses.map((warehouse) => (
                      <div
                        key={warehouse}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted transition-colors"
                      >
                        <Checkbox
                          id={`warehouse-${warehouse}`}
                          checked={tempSelectedWarehouses.includes(warehouse)}
                          onCheckedChange={() =>
                            handleWarehouseToggle(warehouse)
                          }
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <label
                          htmlFor={`warehouse-${warehouse}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                        >
                          {warehouse} - Warehouse
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleClear}
                      className="flex-1 hover:bg-muted bg-transparent"
                    >
                      Clear
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleApply}
                      className="flex-1 bg-primary hover:bg-primary/90 shadow-sm"
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Card 1: # of Drivers */}
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                # of Drivers
              </h3>
              <Users className="h-4 w-4 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">{uniqueDrivers}</div>
          </CardContent>
        </Card>

        {/* Card 2: # of Shifts */}
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                # of Shifts
              </h3>
              <Clock className="h-4 w-4 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">{totalShifts}</div>
          </CardContent>
        </Card>

        {/* Card 3: # of Trucks */}
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                # of Trucks
              </h3>
              <Truck className="h-4 w-4 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">{totalTrucks}</div>
          </CardContent>
        </Card>

        {/* Card 4: Total Gallons Delivered */}
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                Total Gallons Delivered
              </h3>
              <Package className="h-4 w-4 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">
              {(totalGallons / 1000).toFixed(1)}k
            </div>
          </CardContent>
        </Card>

        {/* Card 5: Total # of Deliveries */}
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                Total # of Deliveries
              </h3>
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">
              {totalDeliveries}
            </div>
          </CardContent>
        </Card>

        {/* Card 6: Avg Shift Length */}
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                Avg Shift Length
              </h3>
              <Clock className="h-4 w-4 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">
              {avgShiftLength.toFixed(1)}h
            </div>
          </CardContent>
        </Card>

        {/* Card 7: Total Yard Time / Avg Yard Time */}
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                Total Yard Time
              </h3>
              <Clock className="h-4 w-4 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">
              {totalYardTime.toFixed(1)}h
            </div>
            <div className="text-sm text-white/80">
              Avg: {avgYardTime.toFixed(2)}h
            </div>
          </CardContent>
        </Card>

        {/* Card 8: Total Other Time / Avg Other Time */}
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                Total Other Time
              </h3>
              <Clock className="h-4 w-4 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">
              {totalOtherTime.toFixed(1)}h
            </div>
            <div className="text-sm text-white/80">
              Avg: {avgOtherTime.toFixed(2)}h
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Table Section */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardHeader className="border-b border-border py-4">
          <CardTitle className="text-lg font-bold text-foreground">
            Weekly Driver Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  style={{ backgroundColor: '#003286' }}
                  className="text-white"
                >
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Driver Name
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Warehouse Code
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Route Type
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Total # of Shifts
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Total # of Deliveries
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Avg # of Stops per Shift
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Avg Mins (Fuel)
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Avg Mins (Bulk)
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Avg Mins (Bulk DEF)
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Avg Mins (Package)
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider">
                    Avg Mins (Combo)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-border">
                {filteredData.map((row, index) => (
                  <tr
                    key={index}
                    className={cn(
                      'transition-colors duration-150 hover:bg-muted/10',
                      index % 2 === 0 ? 'bg-white' : 'bg-muted/50'
                    )}
                  >
                    <td className="px-4 py-3.5 text-sm border-r border-border font-semibold text-foreground">
                      {row.driverName}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground font-medium">
                      {row.warehouseCode}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground font-medium">
                      {row.routeTypes.join(', ')}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground font-medium">
                      {row.totalShifts}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground font-medium">
                      {row.totalDeliveries}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground">
                      {row.avgStopsPerShift.toFixed(1)}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground">
                      {row.avgMinsFuel > 0 ? row.avgMinsFuel.toFixed(1) : '-'}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground">
                      {row.avgMinsBulk > 0 ? row.avgMinsBulk.toFixed(1) : '-'}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground">
                      {row.avgMinsBulkDEF > 0
                        ? row.avgMinsBulkDEF.toFixed(1)
                        : '-'}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground">
                      {row.avgMinsPackage > 0
                        ? row.avgMinsPackage.toFixed(1)
                        : '-'}
                    </td>
                    <td className="px-4 py-3.5 text-sm text-muted-foreground">
                      {row.avgMinsCombo > 0 ? row.avgMinsCombo.toFixed(1) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
