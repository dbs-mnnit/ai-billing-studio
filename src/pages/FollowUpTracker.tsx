import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Mail, Clock, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

interface Invoice {
  id: string;
  clientName: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'unpaid' | 'overdue';
  lastReminder?: string;
}

const FollowUpTracker = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: 'INV-2024-001',
      clientName: 'Elena Thomas',
      amount: 950,
      dueDate: '2024-07-15',
      status: 'overdue',
      lastReminder: '2024-07-20'
    },
    {
      id: 'INV-2024-002',
      clientName: 'Raj Mehta',
      amount: 400,
      dueDate: '2024-08-01',
      status: 'unpaid'
    },
    {
      id: 'INV-2024-003',
      clientName: 'Studio Nova',
      amount: 1200,
      dueDate: '2024-07-25',
      status: 'paid'
    },
    {
      id: 'INV-2024-004',
      clientName: 'DesignCo',
      amount: 750,
      dueDate: '2024-08-10',
      status: 'unpaid'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleSendReminder = (invoiceId: string, clientName: string) => {
    toast({
      title: "Reminder Sent",
      description: `Payment reminder sent to ${clientName}`,
    });
    
    setInvoices(prev => prev.map(inv => 
      inv.id === invoiceId 
        ? { ...inv, lastReminder: new Date().toISOString().split('T')[0] }
        : inv
    ));
  };

  const handleEnableAutoFollowUp = (invoiceId: string) => {
    toast({
      title: "AI Follow-Up Enabled",
      description: "Smart reminders will be sent automatically based on payment patterns",
    });
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="badge-paid">Paid</Badge>;
      case 'unpaid':
        return <Badge className="badge-unpaid">Unpaid</Badge>;
      case 'overdue':
        return <Badge className="badge-overdue">Overdue</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const overdueCount = invoices.filter(inv => inv.status === 'overdue').length;
  const unpaidCount = invoices.filter(inv => inv.status === 'unpaid').length;

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Follow-Up Tracker</h1>
          <p className="text-muted-foreground">Monitor payments and send smart reminders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="card-elevated">
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive mb-2">{overdueCount}</div>
              <p className="text-muted-foreground">Overdue Invoices</p>
            </div>
          </Card>
          <Card className="card-elevated">
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">{unpaidCount}</div>
              <p className="text-muted-foreground">Pending Payment</p>
            </div>
          </Card>
          <Card className="card-elevated">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">
                ${invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0)}
              </div>
              <p className="text-muted-foreground">Collected This Month</p>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="card-elevated mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Search Invoices</Label>
              <div className="relative mt-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by client or invoice ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="status">Filter by Status</Label>
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Invoices Table */}
        <Card className="card-elevated">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Invoice ID</th>
                  <th className="text-left py-4 px-4 font-semibold">Client</th>
                  <th className="text-left py-4 px-4 font-semibold">Amount</th>
                  <th className="text-left py-4 px-4 font-semibold">Due Date</th>
                  <th className="text-left py-4 px-4 font-semibold">Status</th>
                  <th className="text-left py-4 px-4 font-semibold">Last Reminder</th>
                  <th className="text-left py-4 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-4 px-4 font-medium">{invoice.id}</td>
                    <td className="py-4 px-4">{invoice.clientName}</td>
                    <td className="py-4 px-4 font-semibold">${invoice.amount}</td>
                    <td className="py-4 px-4">{formatDate(invoice.dueDate)}</td>
                    <td className="py-4 px-4">{getStatusBadge(invoice.status)}</td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {invoice.lastReminder ? formatDate(invoice.lastReminder) : 'Never'}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        {invoice.status !== 'paid' && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleSendReminder(invoice.id, invoice.clientName)}
                              className="gap-1"
                            >
                              <Mail className="w-3 h-3" />
                              Send Reminder
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => handleEnableAutoFollowUp(invoice.id)}
                              className="gap-1"
                            >
                              <Clock className="w-3 h-3" />
                              Auto Follow-Up
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Follow-Up Timeline */}
        <Card className="card-elevated mt-8">
          <h3 className="text-xl font-semibold mb-6">Recent Follow-Up Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Reminder sent to Elena Thomas</p>
                <p className="text-sm text-muted-foreground">INV-2024-001 • 2 days ago</p>
              </div>
              <Badge variant="secondary">Manual</Badge>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Payment received from Studio Nova</p>
                <p className="text-sm text-muted-foreground">INV-2024-003 • 5 days ago</p>
              </div>
              <Badge className="badge-paid">Paid</Badge>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Auto reminder scheduled for Raj Mehta</p>
                <p className="text-sm text-muted-foreground">INV-2024-002 • 1 week ago</p>
              </div>
              <Badge variant="secondary">AI</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FollowUpTracker;