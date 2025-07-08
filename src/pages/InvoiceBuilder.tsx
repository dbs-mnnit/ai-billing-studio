import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Sparkles, FileText, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const InvoiceBuilder = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    service: '',
    rate: '',
    dueDate: '',
    autoFollowUp: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAIFill = () => {
    // Simulate AI auto-fill
    setFormData({
      clientName: 'Elena Thomas',
      clientEmail: 'elena@designstudio.com',
      service: 'Web Development - Landing Page Design & Development',
      rate: '950',
      dueDate: '2024-08-15',
      autoFollowUp: true
    });
    toast({
      title: "AI Assistant Applied",
      description: "Invoice details have been auto-filled based on your recent projects.",
    });
  };

  const handleExportPDF = () => {
    toast({
      title: "PDF Generated Successfully",
      description: "Invoice has been exported to PDF with your branding.",
    });
  };

  const handleSendEmail = () => {
    toast({
      title: "Invoice Sent",
      description: "Invoice has been sent to elena@designstudio.com",
    });
  };

  const handleSave = () => {
    toast({
      title: "Invoice Saved",
      description: "Invoice has been saved as a template for future use.",
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
          <h1 className="text-3xl font-bold text-foreground">Create Invoice</h1>
          <p className="text-muted-foreground">Generate professional invoices with AI assistance</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Card className="card-elevated">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Invoice Details</h2>
                <Button onClick={handleAIFill} variant="outline" className="gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Auto-Fill
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input
                      id="clientName"
                      value={formData.clientName}
                      onChange={(e) => handleInputChange('clientName', e.target.value)}
                      placeholder="Enter client name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientEmail">Client Email</Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                      placeholder="client@example.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Description</Label>
                  <Textarea
                    id="service"
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    placeholder="Describe the services provided"
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rate">Amount ($)</Label>
                    <Input
                      id="rate"
                      type="number"
                      value={formData.rate}
                      onChange={(e) => handleInputChange('rate', e.target.value)}
                      placeholder="0.00"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) => handleInputChange('dueDate', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="autoFollowUp"
                    checked={formData.autoFollowUp}
                    onChange={(e) => handleInputChange('autoFollowUp', e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="autoFollowUp" className="text-sm">
                    Enable Smart Follow-Up Reminders
                  </Label>
                  <Badge variant="secondary" className="ml-2">AI</Badge>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button onClick={handleExportPDF} variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                Export PDF
              </Button>
              <Button onClick={handleSendEmail} variant="default" className="gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
              <Button onClick={handleSave} variant="secondary" className="gap-2">
                Save Template
              </Button>
            </div>
          </div>

          {/* Live Preview */}
          <div className="lg:sticky lg:top-6">
            <Card className="card-elevated">
              <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
              
              <div className="bg-white border rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">INVOICE</h2>
                    <p className="text-muted-foreground">#INV-2024-001</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Your Business</p>
                    <p className="text-sm text-muted-foreground">your@business.com</p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Bill To:</h4>
                    <p className="font-medium">{formData.clientName || 'Client Name'}</p>
                    <p className="text-sm text-muted-foreground">{formData.clientEmail || 'client@example.com'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Due Date</p>
                    <p className="font-medium">{formData.dueDate || 'Select date'}</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4 mb-6">
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <h5 className="font-medium">Service</h5>
                      <p className="text-sm text-muted-foreground">
                        {formData.service || 'Service description will appear here'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">
                        ${formData.rate || '0.00'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-lg font-semibold">Total Amount</span>
                  <span className="text-2xl font-bold text-primary">
                    ${formData.rate || '0.00'}
                  </span>
                </div>

                {formData.autoFollowUp && (
                  <div className="mt-4 p-3 bg-primary-light rounded-lg flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">Smart Follow-Up Enabled</span>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBuilder;