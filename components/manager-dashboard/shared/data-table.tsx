'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  title: string;
  columns: TableColumn[];
  data: any[];
  headerBgColor?: string;
}

export function DataTable({
  title,
  columns,
  data,
  headerBgColor = '#003286',
}: DataTableProps) {
  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <CardHeader
        style={{ backgroundColor: headerBgColor }}
        className="border-b border-border py-4"
      >
        <CardTitle className="text-base md:text-lg font-bold text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                style={{ backgroundColor: headerBgColor }}
                className="text-white"
              >
                {columns.map((column, index) => (
                  <th
                    key={column.key}
                    className={cn(
                      'px-3 md:px-4 py-3 md:py-4 text-left text-xs font-bold uppercase tracking-wider',
                      index < columns.length - 1 && 'border-r border-border'
                    )}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-border">
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={cn(
                    'transition-colors duration-150 hover:bg-muted/10',
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-muted/50'
                  )}
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={column.key}
                      className={cn(
                        'px-3 md:px-4 py-3 md:py-3.5 text-xs md:text-sm',
                        colIndex === 0
                          ? 'font-semibold text-foreground'
                          : 'text-muted-foreground',
                        colIndex < columns.length - 1 &&
                          'border-r border-border'
                      )}
                    >
                      {column.render
                        ? column.render(row[column.key], row)
                        : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
