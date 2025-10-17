"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import {
  FileText,
  TrendingUp,
  TrendingDown,
  Download,
  RefreshCw,
  Sparkles,
  Target,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react"

// Sample data for summary charts
const weeklyComparisonData = [
  { week: "Week 1", deliveries: 18234, success: 92.1, efficiency: 87.3 },
  { week: "Week 2", deliveries: 19456, success: 94.2, efficiency: 89.1 },
  { week: "Week 3", deliveries: 20123, success: 93.8, efficiency: 91.2 },
  { week: "Week 4", deliveries: 21567, success: 95.1, efficiency: 93.4 },
]

const monthlyTrendsData = [
  { month: "Jan", deliveries: 78234, success: 91.2, cost: 45600 },
  { month: "Feb", deliveries: 82156, success: 92.8, cost: 47200 },
  { month: "Mar", deliveries: 85432, success: 94.1, cost: 48900 },
  { month: "Apr", deliveries: 89567, success: 93.7, cost: 50100 },
  { month: "May", deliveries: 92341, success: 95.2, cost: 51800 },
  { month: "Jun", deliveries: 94876, success: 94.8, cost: 52400 },
]

export function SummariesTab() {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateReport = () => {
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Automated Summaries
          </h2>
          <p className="text-muted-foreground">AI-generated insights and performance reports</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32 bg-input border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isGenerating ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
            Generate Report
          </Button>
        </div>
      </div>

      {/* AI Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-border bg-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-card-foreground">Weekly Performance</CardTitle>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                Improved
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Success Rate</span>
                <span className="font-semibold text-foreground">95.1%</span>
              </div>
              <Progress value={95.1} className="h-2" />
              <p className="text-xs text-muted-foreground">
                +2.9% improvement from last week. Excellent performance in Zone A and B.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-card-foreground">Efficiency Gains</CardTitle>
              <Badge className="bg-accent/10 text-accent border-accent/20">
                <Target className="h-3 w-3 mr-1" />
                On Target
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Route Optimization</span>
                <span className="font-semibold text-foreground">93.4%</span>
              </div>
              <Progress value={93.4} className="h-2" />
              <p className="text-xs text-muted-foreground">
                AI route suggestions reduced delivery time by 4.2 minutes on average.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-card-foreground">Cost Efficiency</CardTitle>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <TrendingDown className="h-3 w-3 mr-1" />
                Reduced
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cost per Delivery</span>
                <span className="font-semibold text-foreground">$2.34</span>
              </div>
              <Progress value={78} className="h-2" />
              <p className="text-xs text-muted-foreground">
                $0.18 reduction per delivery through optimized routing and scheduling.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Reports */}
      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weekly">Weekly Report</TabsTrigger>
          <TabsTrigger value="monthly">Monthly Trends</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Weekly Performance Comparison</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Progress tracking over the last 4 weeks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={weeklyComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                    />
                    <Bar dataKey="deliveries" fill="hsl(var(--primary))" name="Deliveries" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Key Metrics Summary</CardTitle>
                <CardDescription className="text-muted-foreground">This week's performance highlights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-foreground">Delivery Success</span>
                    </div>
                    <span className="text-sm font-semibold text-green-700">95.1%</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-foreground">Avg Delivery Time</span>
                    </div>
                    <span className="text-sm font-semibold text-blue-700">22.1 min</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium text-foreground">Active Drivers</span>
                    </div>
                    <span className="text-sm font-semibold text-amber-700">127</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 border border-purple-200">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-foreground">Route Efficiency</span>
                    </div>
                    <span className="text-sm font-semibold text-purple-700">93.4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Summary Text */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                AI-Generated Weekly Summary
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Automated analysis of this week's performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm max-w-none">
                <h4 className="text-foreground font-semibold mb-2">Performance Highlights</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong className="text-foreground">Outstanding week</strong> with 21,567 successful deliveries,
                    exceeding target by 8.2%
                  </li>
                  <li>
                    • <strong className="text-foreground">Driver performance</strong> reached new highs with Sarah
                    Johnson leading at 100% success rate
                  </li>
                  <li>
                    • <strong className="text-foreground">Route optimization</strong> in Zone A reduced average delivery
                    time by 12%
                  </li>
                  <li>
                    • <strong className="text-foreground">Cost efficiency</strong> improved by $0.18 per delivery
                    through AI-suggested route changes
                  </li>
                </ul>

                <Separator className="my-4" />

                <h4 className="text-foreground font-semibold mb-2">Areas for Improvement</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong className="text-foreground">Zone C performance</strong> needs attention - 76% efficiency
                    vs 94% target
                  </li>
                  <li>
                    • <strong className="text-foreground">Afternoon deliveries</strong> are 15% slower than morning
                    routes
                  </li>
                  <li>
                    • <strong className="text-foreground">Driver training</strong> recommended for bottom 10% performers
                  </li>
                </ul>

                <Separator className="my-4" />

                <h4 className="text-foreground font-semibold mb-2">Recommended Actions</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Implement Zone A routing patterns in Zone C for 15-20% efficiency gain</li>
                  <li>• Shift 25% of afternoon capacity to morning window (8-11 AM)</li>
                  <li>• Schedule performance review sessions with underperforming drivers</li>
                  <li>• Consider bonus incentives for drivers maintaining &gt;95% success rates</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">6-Month Performance Trends</CardTitle>
              <CardDescription className="text-muted-foreground">
                Long-term analysis of delivery operations and costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="deliveries"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    name="Deliveries"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="success"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                    name="Success Rate (%)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="cost"
                    stroke="hsl(var(--chart-3))"
                    strokeWidth={2}
                    name="Operating Cost ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Predictive Insights
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  AI predictions for next week's performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <h4 className="font-medium text-foreground mb-2">📈 Expected Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Delivery volume predicted to increase by 12% next week based on seasonal trends and current
                    trajectory.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <h4 className="font-medium text-foreground mb-2">⚡ Efficiency Opportunity</h4>
                  <p className="text-sm text-muted-foreground">
                    Implementing AI route suggestions could save 18 minutes per driver per day, reducing costs by $2,400
                    weekly.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                  <h4 className="font-medium text-foreground mb-2">⚠️ Capacity Alert</h4>
                  <p className="text-sm text-muted-foreground">
                    Zone C may reach capacity limits by Thursday. Consider redistributing 15% of routes to Zone A.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Action Items</CardTitle>
                <CardDescription className="text-muted-foreground">
                  AI-recommended improvements for next week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">High Priority</p>
                    <p className="text-xs text-muted-foreground">
                      Optimize Zone C routing - potential 20% efficiency gain
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Medium Priority</p>
                    <p className="text-xs text-muted-foreground">Schedule driver training for bottom 10% performers</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Low Priority</p>
                    <p className="text-xs text-muted-foreground">
                      Review incentive structure for high-performing drivers
                    </p>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Download className="h-4 w-4 mr-2" />
                  Export Action Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
