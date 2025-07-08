import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, DollarSign, Clock, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Analytics = () => {
  const handleExportCSV = () => {
    toast({
      title: "Export Started",
      description: "Your analytics data is being prepared for download.",
    });
  };

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Track your invoicing performance and revenue trends</p>
            </div>
            <Button onClick={handleExportCSV} variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated text-center p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">$12,450</div>
            <p className="text-muted-foreground">Total Invoiced</p>
            <div className="flex items-center justify-center mt-2 text-success text-sm">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% vs last month
            </div>
          </Card>

          <Card className="card-elevated text-center p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-success-light rounded-lg mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">$9,200</div>
            <p className="text-muted-foreground">Revenue Collected</p>
            <div className="flex items-center justify-center mt-2 text-success text-sm">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8% vs last month
            </div>
          </Card>

          <Card className="card-elevated text-center p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-warning-light rounded-lg mx-auto mb-4">
              <Clock className="w-6 h-6 text-warning" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">$3,250</div>
            <p className="text-muted-foreground">Outstanding</p>
            <div className="flex items-center justify-center mt-2 text-warning text-sm">
              4 pending invoices
            </div>
          </Card>

          <Card className="card-elevated text-center p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">12</div>
            <p className="text-muted-foreground">Avg. Payment Days</p>
            <div className="flex items-center justify-center mt-2 text-success text-sm">
              <TrendingUp className="w-3 h-3 mr-1" />
              -3 days improvement
            </div>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Revenue Chart */}
          <Card className="card-elevated">
            <h3 className="text-xl font-semibold mb-6">Monthly Revenue Trend</h3>
            <div className="h-64 bg-muted/30 rounded-lg flex items-end justify-center p-4 space-x-2">
              {/* Simulated Bar Chart */}
              <div className="flex items-end space-x-2 h-full">
                <div className="bg-primary w-8 h-16 rounded-t flex items-end justify-center pb-1">
                  <span className="text-xs text-primary-foreground">Jan</span>
                </div>
                <div className="bg-primary w-8 h-20 rounded-t flex items-end justify-center pb-1">
                  <span className="text-xs text-primary-foreground">Feb</span>
                </div>
                <div className="bg-primary w-8 h-24 rounded-t flex items-end justify-center pb-1">
                  <span className="text-xs text-primary-foreground">Mar</span>
                </div>
                <div className="bg-primary w-8 h-32 rounded-t flex items-end justify-center pb-1">
                  <span className="text-xs text-primary-foreground">Apr</span>
                </div>
                <div className="bg-primary w-8 h-28 rounded-t flex items-end justify-center pb-1">
                  <span className="text-xs text-primary-foreground">May</span>
                </div>
                <div className="bg-primary w-8 h-36 rounded-t flex items-end justify-center pb-1">
                  <span className="text-xs text-primary-foreground">Jun</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Payment Status Distribution */}
          <Card className="card-elevated">
            <h3 className="text-xl font-semibold mb-6">Payment Status Distribution</h3>
            <div className="h-64 flex items-center justify-center">
              {/* Simulated Donut Chart */}
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--success))"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="188 377"
                    className="opacity-80"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--warning))"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="63 377"
                    strokeDashoffset="-188"
                    className="opacity-80"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--destructive))"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="31 377"
                    strokeDashoffset="-251"
                    className="opacity-80"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm">Paid</span>
                </div>
                <span className="font-semibold">74%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span className="text-sm">Unpaid</span>
                </div>
                <span className="font-semibold">18%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span className="text-sm">Overdue</span>
                </div>
                <span className="font-semibold">8%</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Payment Timeline */}
        <Card className="card-elevated">
          <h3 className="text-xl font-semibold mb-6">Average Payment Timeline</h3>
          <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center p-4">
            {/* Simulated Line Chart */}
            <div className="w-full h-full flex items-end justify-between px-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-16 bg-primary rounded-full mb-2"></div>
                <span className="text-xs text-muted-foreground">Week 1</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 h-20 bg-primary rounded-full mb-2"></div>
                <span className="text-xs text-muted-foreground">Week 2</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 h-12 bg-primary rounded-full mb-2"></div>
                <span className="text-xs text-muted-foreground">Week 3</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 h-8 bg-primary rounded-full mb-2"></div>
                <span className="text-xs text-muted-foreground">Week 4</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Most clients pay within the first two weeks. Consider follow-up after day 10.
          </p>
        </Card>

        {/* Top Clients */}
        <Card className="card-elevated mt-8">
          <h3 className="text-xl font-semibold mb-6">Top Clients by Revenue</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">SN</span>
                </div>
                <div>
                  <p className="font-medium">Studio Nova</p>
                  <p className="text-sm text-muted-foreground">3 invoices</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">$3,200</p>
                <p className="text-sm text-muted-foreground">26% of total</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-success-light rounded-full flex items-center justify-center">
                  <span className="font-semibold text-success">DC</span>
                </div>
                <div>
                  <p className="font-medium">DesignCo</p>
                  <p className="text-sm text-muted-foreground">2 invoices</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">$2,100</p>
                <p className="text-sm text-muted-foreground">17% of total</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-warning-light rounded-full flex items-center justify-center">
                  <span className="font-semibold text-warning">ET</span>
                </div>
                <div>
                  <p className="font-medium">Elena Thomas</p>
                  <p className="text-sm text-muted-foreground">1 invoice</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">$950</p>
                <p className="text-sm text-muted-foreground">8% of total</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;