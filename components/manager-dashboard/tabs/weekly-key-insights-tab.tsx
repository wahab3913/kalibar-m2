'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function WeeklyKeyInsightsTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Warehouse Weekly Insights Card */}
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
          <CardHeader
            style={{ backgroundColor: '#003286' }}
            className="border-b border-border pb-4"
          >
            <CardTitle className="text-lg font-bold text-white">
              Warehouse Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                General Comments
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                Weekly performance shows a 5.2% improvement compared to monthly
                average. Overall efficiency metrics are trending positively
                across all warehouses.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Drastic Changes
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                Warehouse 101 experienced a 12% increase in delivery volume
                compared to monthly average. Warehouse 102 saw a 8% decrease in
                yard time.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-destructive rounded-full"></div>
                KPI Alignment
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                All warehouses are meeting standard KPIs. Warehouse 101 yard
                time is slightly above policy threshold (1.5h vs 1.2h standard).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Driver Weekly Insights Card */}
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
          <CardHeader
            style={{ backgroundColor: '#003286' }}
            className="border-b border-border pb-4"
          >
            <CardTitle className="text-lg font-bold text-white">
              Driver Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Performance Highlights
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    Sarah Johnson: Highest deliveries (165) with excellent
                    efficiency
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    Mike Davis: Lowest yard time (0.9h avg) - best in class
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>John Smith: Most improved (+15% vs monthly avg)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-destructive rounded-full"></div>
                Areas of Concern
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    Tom Anderson: Yard time 18% above warehouse average
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Lisa Wilson: Delivery count 12% below target</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Dates to Review
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                Sept 25, 2025 - Multiple drivers reported extended yard times.
                Sept 27, 2025 - Peak performance day across all metrics.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations for Improvement Card */}
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
          <CardHeader
            style={{ backgroundColor: '#003286' }}
            className="border-b border-border pb-4"
          >
            <CardTitle className="text-lg font-bold text-white">
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Company Standards
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Implement yard time reduction training for drivers exceeding
                    1.5h average
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Review loading procedures at Warehouse 101 to meet policy
                    standards
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Driver-Specific Actions
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Schedule one-on-one coaching session with Tom Anderson on
                    yard efficiency
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Pair Lisa Wilson with Sarah Johnson for mentorship on
                    delivery optimization
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-destructive rounded-full"></div>
                Policy-Based Messages
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                Send reminder about proper loading documentation procedures.
                Reinforce safety protocols for high-volume delivery days.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
