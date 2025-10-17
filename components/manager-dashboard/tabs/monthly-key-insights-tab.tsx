'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MonthlyKeyInsightsTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Warehouse Monthly Insights Card */}
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
          <CardHeader
            style={{ backgroundColor: '#003286' }}
            className="border-b border-border pb-4"
          >
            <CardTitle className="text-lg font-bold text-white">
              Warehouse Monthly Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Monthly vs Company Standards
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                Monthly performance shows 8.3% improvement compared to company
                standards. All warehouses are meeting or exceeding baseline KPIs
                for delivery efficiency and yard time management.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Trends Noticed
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Tuesdays and Wednesdays consistently show 12% higher
                    efficiency across all metrics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Fridays show 8% lower performance, likely due to end-of-week
                    fatigue
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Morning shifts (6-10 AM) outperform afternoon shifts by 15%
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-destructive rounded-full"></div>
                Branch Comparison & Ranking
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                Warehouse 101 ranks #2 in the Northeast branch with 94.2%
                efficiency rating. Warehouse 102 leads the branch at 96.1%,
                while Warehouse 103 is at 91.8%.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Drastic Changes & KPI Alignment
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                Warehouse 101 experienced a 15% increase in delivery volume
                compared to previous month. Yard time increased by 0.3h but
                remains within company standards (1.5h vs 1.8h threshold).
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Quarterly Comparison
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">↑</span>
                  <span>
                    Delivery completion rate up 7.2% vs previous quarter
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">↑</span>
                  <span>Average shift efficiency improved by 5.8%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">↓</span>
                  <span>Yard time increased by 2.1% - requires attention</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Driver Monthly Insights Card */}
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
          <CardHeader
            style={{ backgroundColor: '#003286' }}
            className="border-b border-border pb-4"
          >
            <CardTitle className="text-lg font-bold text-white">
              Driver Monthly Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Performance Trends by Day
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Sarah Johnson: Consistently performs 18% better on Tuesdays
                    and Wednesdays
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Mike Davis: Friday performance drops 12% below weekly
                    average
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Team-wide: Monday morning shifts show 10% slower start times
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-destructive rounded-full"></div>
                KPI Outliers
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>
                    Tom Anderson: Yard time 22% above warehouse monthly average
                    (1.7h vs 1.3h)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>
                    Lisa Wilson: Delivery count 15% below monthly target (500 vs
                    588 expected)
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Top & Bottom Performers
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">↑</span>
                  <span>
                    Highest Avg Yard Time: Lisa Wilson (1.5h) - needs efficiency
                    review
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">↓</span>
                  <span>
                    Lowest Avg Yard Time: Sarah Johnson (1.1h) - best practice
                    model
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Most Deliveries: Sarah Johnson (660 total)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Least Deliveries: Lisa Wilson (500 total)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Most Improved
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                John Smith: 22% improvement vs quarterly average. Delivery
                efficiency up from 24.5 to 28.0 stops per shift. Yard time
                reduced by 0.4h.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Specific Dates to Review
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>
                    Sept 12, 2025 - Tom Anderson: Yard time 2.8h (95% above
                    average)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>
                    Sept 18, 2025 - Lisa Wilson: Only 18 deliveries completed
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>
                    Sept 25, 2025 - Team-wide peak performance day (all metrics
                    +15%)
                  </span>
                </li>
              </ul>
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
              Recommendations for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Company Standards Comparison
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Implement yard time reduction training for drivers exceeding
                    1.5h monthly average
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Review loading procedures at Warehouse 101 to align with
                    company policy standards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Establish Friday performance improvement program to address
                    end-of-week efficiency drop
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
                    Schedule comprehensive yard efficiency coaching and shadow
                    Sarah Johnson for 2 shifts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Pair Lisa Wilson with John Smith for mentorship on delivery
                    optimization techniques
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    Mike Davis: Address Friday performance decline with schedule
                    adjustment or workload review
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    John Smith: Recognize improvement with performance bonus and
                    share best practices with team
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-destructive rounded-full"></div>
                General Observations
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>
                    Consider shift rotation to balance high-performing
                    Tuesday/Wednesday slots across all drivers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>
                    Investigate Monday morning delays - may require earlier
                    warehouse opening or pre-shift prep time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>
                    Replicate Sept 25 conditions (peak performance day) to
                    identify success factors
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
