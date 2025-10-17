"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"
import { TrendingUp, Target, Award, AlertTriangle, CheckCircle } from "lucide-react"

// Sample data for charts
const deliveryTrendsData = [
  { time: "6 AM", deliveries: 45, success: 42 },
  { time: "8 AM", deliveries: 120, success: 115 },
  { time: "10 AM", deliveries: 180, success: 172 },
  { time: "12 PM", deliveries: 220, success: 205 },
  { time: "2 PM", deliveries: 195, success: 180 },
  { time: "4 PM", deliveries: 165, success: 152 },
  { time: "6 PM", deliveries: 85, success: 78 },
  { time: "8 PM", deliveries: 35, success: 32 },
]

const driverPerformanceData = [
  { name: "Sarah J.", deliveries: 47, success: 100, avgTime: 18.2, efficiency: 118 },
  { name: "Mike C.", deliveries: 43, success: 98.7, avgTime: 19.5, efficiency: 112 },
  { name: "Lisa R.", deliveries: 41, success: 97.3, avgTime: 21.1, efficiency: 108 },
  { name: "John D.", deliveries: 38, success: 95.8, avgTime: 22.8, efficiency: 102 },
  { name: "Emma W.", deliveries: 36, success: 94.2, avgTime: 24.1, efficiency: 98 },
  { name: "Alex M.", deliveries: 34, success: 92.1, avgTime: 26.3, efficiency: 89 },
  { name: "Chris B.", deliveries: 32, success: 89.5, avgTime: 28.7, efficiency: 82 },
  { name: "Taylor S.", deliveries: 29, success: 87.2, avgTime: 31.2, efficiency: 76 },
]

const routeEfficiencyData = [
  { zone: "Zone A", efficiency: 94, color: "#0891b2" },
  { zone: "Zone B", efficiency: 89, color: "#f59e0b" },
  { zone: "Zone C", efficiency: 76, color: "#dc2626" },
  { zone: "Zone D", efficiency: 91, color: "#4b5563" },
]

const weeklyTrendsData = [
  { day: "Mon", deliveries: 2847, success: 94.2, avgTime: 24.3 },
  { day: "Tue", deliveries: 2956, success: 95.1, avgTime: 23.8 },
  { day: "Wed", deliveries: 3124, success: 93.7, avgTime: 25.1 },
  { day: "Thu", deliveries: 2789, success: 96.3, avgTime: 22.9 },
  { day: "Fri", deliveries: 3456, success: 92.8, avgTime: 26.2 },
  { day: "Sat", deliveries: 2234, success: 89.4, avgTime: 28.7 },
  { day: "Sun", deliveries: 1876, success: 91.2, avgTime: 27.3 },
]

export function PerformanceTab() {
  const [timeRange, setTimeRange] = useState("today")
  const [selectedMetric, setSelectedMetric] = useState("deliveries")

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Performance Analytics</h2>
          <p className="text-muted-foreground">Detailed insights into driver and route performance</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 bg-input border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="w-40 bg-input border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deliveries">Deliveries</SelectItem>
              <SelectItem value="efficiency">Efficiency</SelectItem>
              <SelectItem value="success">Success Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Performance Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Top Performer</CardTitle>
            <Award className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">Sarah J.</div>
            <p className="text-xs text-muted-foreground">47 deliveries, 100% success</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Avg Efficiency</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">98.4%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 inline-flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.1%
              </span>{" "}
              from last week
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Best Route</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">Zone A</div>
            <p className="text-xs text-muted-foreground">94% efficiency rating</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Needs Attention</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">Zone C</div>
            <p className="text-xs text-muted-foreground">76% efficiency, requires optimization</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trends">Delivery Trends</TabsTrigger>
          <TabsTrigger value="drivers">Driver Performance</TabsTrigger>
          <TabsTrigger value="routes">Route Analysis</TabsTrigger>
          <TabsTrigger value="weekly">Weekly Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Hourly Delivery Trends</CardTitle>
              <CardDescription className="text-muted-foreground">
                Delivery volume and success rates throughout the day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={deliveryTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="deliveries"
                    stackId="1"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="success"
                    stackId="2"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2))"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drivers" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Driver Performance Ranking</CardTitle>
              <CardDescription className="text-muted-foreground">
                Top performing drivers based on efficiency and success rate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-foreground">Rank</TableHead>
                    <TableHead className="text-foreground">Driver</TableHead>
                    <TableHead className="text-foreground">Deliveries</TableHead>
                    <TableHead className="text-foreground">Success Rate</TableHead>
                    <TableHead className="text-foreground">Avg Time</TableHead>
                    <TableHead className="text-foreground">Efficiency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {driverPerformanceData.map((driver, index) => (
                    <TableRow key={driver.name}>
                      <TableCell className="font-medium">
                        <Badge
                          className={index < 3 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}
                        >
                          #{index + 1}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium text-foreground">{driver.name}</TableCell>
                      <TableCell className="text-foreground">{driver.deliveries}</TableCell>
                      <TableCell className="text-foreground">
                        <span
                          className={
                            driver.success >= 95
                              ? "text-green-600"
                              : driver.success >= 90
                                ? "text-accent"
                                : "text-destructive"
                          }
                        >
                          {driver.success}%
                        </span>
                      </TableCell>
                      <TableCell className="text-foreground">{driver.avgTime}m</TableCell>
                      <TableCell className="text-foreground">
                        <div className="flex items-center gap-2">
                          <span className={driver.efficiency >= 100 ? "text-green-600" : "text-muted-foreground"}>
                            {driver.efficiency}%
                          </span>
                          {driver.efficiency >= 110 && <TrendingUp className="h-3 w-3 text-green-600" />}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="routes" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Route Efficiency by Zone</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Performance comparison across delivery zones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={routeEfficiencyData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="efficiency"
                      label={({ zone, efficiency }) => `${zone}: ${efficiency}%`}
                    >
                      {routeEfficiencyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Zone Performance Details</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Detailed metrics for each delivery zone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {routeEfficiencyData.map((zone) => (
                  <div key={zone.zone} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: zone.color }} />
                      <span className="font-medium text-foreground">{zone.zone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground">{zone.efficiency}%</span>
                      {zone.efficiency >= 90 ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Weekly Performance Overview</CardTitle>
              <CardDescription className="text-muted-foreground">
                Daily trends for deliveries, success rate, and average time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="day" />
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
                    dataKey="avgTime"
                    stroke="hsl(var(--chart-3))"
                    strokeWidth={2}
                    name="Avg Time (min)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
