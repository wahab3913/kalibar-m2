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
import { Filter, Truck, Users, Package, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MonthlyReviewTab() {
  const [selectedWarehouses, setSelectedWarehouses] = useState<string[]>([
    '101',
  ]);
  const [tempSelectedWarehouses, setTempSelectedWarehouses] = useState<
    string[]
  >(['101']);
  const [isWarehouseDropdownOpen, setIsWarehouseDropdownOpen] = useState(false);

  const userRole = 'Manager';

  const availableWarehouses =
    userRole === 'Manager'
      ? ['101']
      : userRole === 'Director'
      ? ['101', '102', '103', '104', '105']
      : ['101', '102', '103', '104', '105', '106', '107', '108'];

  const getPrevious4Weeks = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    const startMonday = new Date(today);
    startMonday.setDate(today.getDate() - diff - 28);

    const endSunday = new Date(today);
    endSunday.setDate(today.getDate() - diff - 1);

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
      return `${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    };

    return `Reviewing Data: ${formatDate(startMonday)} – ${formatDate(
      endSunday
    )}`;
  };

  const monthlyDriverData = [
    {
      name: 'John Smith',
      shifts: 20,
      totalGallons: 25010,
      totalStops: 560,
      avgMins: 46.8,
      avgShiftLength: 8.3,
      avgStopsPerShift: 28.0,
      avgYardTime: 1.3,
      avgOtherTime: 0.5,
    },
    {
      name: 'Sarah Johnson',
      shifts: 20,
      totalGallons: 28050,
      totalStops: 660,
      avgMins: 39.2,
      avgShiftLength: 8.1,
      avgStopsPerShift: 33.0,
      avgYardTime: 1.1,
      avgOtherTime: 0.4,
    },
    {
      name: 'Mike Davis',
      shifts: 19,
      totalGallons: 23426,
      totalStops: 523,
      avgMins: 44.5,
      avgShiftLength: 8.2,
      avgStopsPerShift: 27.5,
      avgYardTime: 1.2,
      avgOtherTime: 0.6,
    },
    {
      name: 'Lisa Wilson',
      shifts: 20,
      totalGallons: 21250,
      totalStops: 500,
      avgMins: 50.1,
      avgShiftLength: 8.4,
      avgStopsPerShift: 25.0,
      avgYardTime: 1.5,
      avgOtherTime: 0.7,
    },
    {
      name: 'Tom Anderson',
      shifts: 18,
      totalGallons: 24012,
      totalStops: 533,
      avgMins: 47.9,
      avgShiftLength: 8.2,
      avgStopsPerShift: 29.6,
      avgYardTime: 1.4,
      avgOtherTime: 0.5,
    },
  ];

  const filteredData = monthlyDriverData;

  const totalDrivers = filteredData.length;
  const totalShifts = filteredData.reduce((sum, item) => sum + item.shifts, 0);
  const totalTrucks = Math.ceil(totalDrivers * 0.8);
  const totalGallons = filteredData.reduce(
    (sum, item) => sum + item.totalGallons,
    0
  );
  const avgWeeklyGallons = totalGallons / 4;
  const totalDeliveries = filteredData.reduce(
    (sum, item) => sum + item.totalStops,
    0
  );
  const avgShiftLength =
    filteredData.reduce((sum, item) => sum + item.avgShiftLength, 0) /
    filteredData.length;
  const avgMinsWarehouse =
    filteredData.reduce((sum, item) => sum + item.avgMins, 0) /
    filteredData.length;
  const avgStopsPerShift =
    filteredData.reduce((sum, item) => sum + item.avgStopsPerShift, 0) /
    filteredData.length;
  const totalYardTime = filteredData.reduce(
    (sum, item) => sum + item.avgYardTime * item.shifts,
    0
  );
  const avgYardTimePerWeek = totalYardTime / 4;
  const totalOtherTime = filteredData.reduce(
    (sum, item) => sum + item.avgOtherTime * item.shifts,
    0
  );
  const avgOtherTimePerWeek = totalOtherTime / 4;

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

  return (
    <div className="space-y-6">
      <Card
        className="border-0 shadow-sm"
        style={{ backgroundColor: '#003286' }}
      >
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div>
              <Label className="text-xs font-semibold text-white uppercase tracking-wide mb-2 block">
                Review Period
              </Label>
              <div className="text-lg font-semibold text-white bg-white/10 rounded-lg px-4 py-3 border border-white/20">
                {getPrevious4Weeks()}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">MONTHLY REVIEW</h2>
            </div>

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
                          id={`monthly-warehouse-${warehouse}`}
                          checked={tempSelectedWarehouses.includes(warehouse)}
                          onCheckedChange={() =>
                            handleWarehouseToggle(warehouse)
                          }
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <label
                          htmlFor={`monthly-warehouse-${warehouse}`}
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

      {/* Summary Metrics - Row 1 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Drivers
              </h3>
              <Users className="h-5 w-5 text-white" />
            </div>
            <div className="text-4xl font-bold text-white">{totalDrivers}</div>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Shifts
              </h3>
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div className="text-4xl font-bold text-white">{totalShifts}</div>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Trucks
              </h3>
              <Truck className="h-5 w-5 text-white" />
            </div>
            <div className="text-4xl font-bold text-white">{totalTrucks}</div>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Total Gallons
              </h3>
              <Package className="h-5 w-5 text-white" />
            </div>
            <div className="text-4xl font-bold text-white">
              {(totalGallons / 1000).toFixed(1)}K
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Avg Monthly Gallons
              </h3>
              <Package className="h-5 w-5 text-white" />
            </div>
            <div className="text-4xl font-bold text-white">
              {(avgWeeklyGallons / 1000).toFixed(1)}K
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Metrics - Row 2 */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Total Deliveries
              </h3>
              <Package className="h-5 w-5 text-white" />
            </div>
            <div className="text-4xl font-bold text-white">
              {totalDeliveries}
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Avg Shift Length
              </h3>
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div className="text-4xl font-bold text-white">
              {avgShiftLength.toFixed(1)}h
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Avg Mins (Warehouse)
            </h3>
            <div className="text-2xl font-bold text-white pb-2">
              {avgMinsWarehouse.toFixed(1)}
            </div>
            <p className="text-xs text-white/80">
              Avg fuel / bulk / bulk DEF / package / combo
            </p>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Avg Stops/Shift
            </h3>
            <div className="text-2xl font-bold text-white pb-2">
              {avgStopsPerShift.toFixed(1)}
            </div>
            <p className="text-xs text-white/80">
              Avg fuel / bulk / bulk DEF / package / combo
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Time Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Total Yard Time
            </h3>
            <div className="text-4xl font-bold text-white">
              {totalYardTime.toFixed(1)}h
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Avg Yard Time/Week
            </h3>
            <div className="text-4xl font-bold text-white">
              {avgYardTimePerWeek.toFixed(1)}h
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Total Other Time
            </h3>
            <div className="text-4xl font-bold text-white">
              {totalOtherTime.toFixed(1)}h
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: '#003286' }}
        >
          <CardContent className="p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Avg Other Time/Week
            </h3>
            <div className="text-4xl font-bold text-white">
              {avgOtherTimePerWeek.toFixed(1)}h
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Driver Overview Table */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardHeader className="border-b border-border py-4">
          <CardTitle className="text-lg font-bold ">Driver Overview</CardTitle>
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
                    Name
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    # of Shifts
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Total Gallons
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Total Stops
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Avg Mins
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Avg Shift Length
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Avg Stops/Shift
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-border">
                    Avg Yard Time
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider">
                    Avg Other Time
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
                      {row.name}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground font-medium">
                      {row.shifts}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground font-medium">
                      {row.totalGallons.toLocaleString()}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground font-medium">
                      {row.totalStops}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground">
                      {row.avgMins.toFixed(1)}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground">
                      {row.avgShiftLength.toFixed(1)}h
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground">
                      {row.avgStopsPerShift.toFixed(1)}
                    </td>
                    <td className="px-4 py-3.5 text-sm border-r border-border text-muted-foreground">
                      {row.avgYardTime.toFixed(1)}h
                    </td>
                    <td className="px-4 py-3.5 text-sm text-muted-foreground">
                      {row.avgOtherTime.toFixed(1)}h
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
