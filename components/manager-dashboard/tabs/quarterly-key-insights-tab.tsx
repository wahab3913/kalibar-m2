'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function QuarterlyKeyInsightsTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Warehouse Quarterly Insights Card */}
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
          <CardHeader
            style={{ backgroundColor: '#003286' }}
            className="border-b border-border pb-4"
          >
            <CardTitle className="text-lg font-bold text-white">
              Warehouse Quarterly Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Quarterly Performance vs. Standards
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Average shift completion: <strong>7.8 hours</strong>{' '}
                    (Target: 8.0 hours) - 2.5% below standard
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Deliveries per shift: <strong>18.3</strong> (Target: 15.0) -
                    Exceeding by 22%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Fuel efficiency: <strong>12.4 MPG</strong> (Standard: 11.0
                    MPG) - Above standard
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Weekly Performance Trends
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    <strong>Mondays</strong> show 15% lower delivery completion
                    rates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    <strong>Thursdays-Fridays</strong> demonstrate peak
                    performance (23% above average)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    Weekend shifts maintain consistent performance within 5%
                    variance
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Branch Comparison & Ranking
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Warehouse ranking: <strong>2nd out of 5</strong> in the
                    branch
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Leading in: Delivery completion rate and fuel efficiency
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Opportunity area: Yard time is 8% higher than top-performing
                    warehouse
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-destructive rounded-full"></div>
                KPI Deviations & Alerts
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    <strong>Yard time</strong> increased by 18% in Q4 compared
                    to Q3
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    <strong>Average stops per shift</strong> decreased by 12%
                    quarter-over-quarter
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    Package delivery time exceeds company policy by 22 minutes
                    on average
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Driver Quarterly Insights Card */}
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
          <CardHeader
            style={{ backgroundColor: '#003286' }}
            className="border-b border-border pb-4"
          >
            <CardTitle className="text-lg font-bold text-white">
              Driver Quarterly Insights
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
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    <strong>Best performance days:</strong> Wednesday-Friday
                    (avg 19.2 deliveries/shift)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    <strong>Challenging days:</strong> Monday mornings show 20%
                    slower start times
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    Weekend shifts maintain 95% consistency with weekday
                    performance
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-destructive rounded-full"></div>
                Drivers Below Quarterly Average
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    <strong>Driver D102:</strong> 28% below warehouse average in
                    deliveries (12.3 vs 17.1 avg)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    <strong>Driver D087:</strong> Yard time 45 mins above
                    average (2.1 hrs vs 1.35 hrs)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    <strong>Driver D145:</strong> Fuel efficiency 15% below
                    warehouse standard
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Top Performers & Yard Time
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Driver D034:</strong> Lowest avg yard time - 52
                    minutes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Driver D091:</strong> Consistent sub-60 min yard
                    time all quarter
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    <strong>Driver D087:</strong> Highest avg yard time - 2.1
                    hours (157% above target)
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Delivery Performance Leaders
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    <strong>Most deliveries:</strong> Driver D056 - 542 total
                    (avg 23.1/shift)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>
                    <strong>Runner-up:</strong> Driver D123 - 518 total (avg
                    22.5/shift)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    <strong>Needs support:</strong> Driver D102 - 287 total (avg
                    12.3/shift)
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Drivers Requiring Review
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-3">
                <strong>Driver D102:</strong> Worst days: Oct 15, Nov 8, Dec 3
                (6-8 deliveries only). <strong>Driver D087:</strong>{' '}
                Consistently high yard time on Mondays throughout quarter.{' '}
                <strong>Driver D145:</strong> Fuel consumption spike in Nov-Dec
                period.
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
              Recommendations for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Company Standards & Compliance
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Overall warehouse performance:{' '}
                    <strong>87% compliance</strong> with company policy
                    standards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Areas of excellence: Delivery completion, fuel efficiency,
                    safety metrics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Improvement needed: Yard time management, Monday
                    performance, package delivery time
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
                    <strong>Driver D102</strong> - Recommend route optimization
                    training and shadowing top performer
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    <strong>Driver D087</strong> - Review loading procedures,
                    implement time management coaching
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    <strong>Driver D145</strong> - Vehicle maintenance check,
                    eco-driving refresher course
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                General Operational Improvements
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Implement <strong>Monday morning briefings</strong> to
                    address slow start times
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Review <strong>yard workflow</strong> to reduce average yard
                    time by 15-20%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Standardize <strong>best practices</strong> from top
                    performers across all drivers
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-full"></div>
                Focus Areas for Next Quarter
              </h4>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    <strong>Priority 1:</strong> Reduce average yard time to 1.2
                    hours (Target: 11% reduction)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    <strong>Priority 2:</strong> Improve Monday performance to
                    match weekly average (+15% target)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>
                    <strong>Priority 3:</strong> Bring all drivers within 10% of
                    warehouse average delivery count
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
                Schedule refresher training on company delivery time standards.
                Implement monthly performance reviews for drivers below 80% of
                warehouse average. Recognize and reward top performers to
                maintain high engagement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
