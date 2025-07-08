import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Upload, CreditCard, Bell, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [businessInfo, setBusinessInfo] = useState({
    name: 'Your Business Name',
    email: 'your@business.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business St, City, State 12345',
    website: 'www.yourbusiness.com'
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    paymentReminders: true,
    overdueNotices: true,
    weeklyReports: false
  });

  const [brandColor, setBrandColor] = useState('#3b82f6');

  const handleBusinessInfoChange = (field: string, value: string) => {
    setBusinessInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully.",
    });
  };

  const handleUpgradePlan = () => {
    toast({
      title: "Upgrade Plan",
      description: "Redirecting to billing portal...",
    });
  };

  const handleCancelSubscription = () => {
    toast({
      title: "Subscription Cancelled",
      description: "Your subscription will remain active until the end of the current billing period.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account and business preferences</p>
        </div>

        <div className="space-y-8">
          {/* Business Information */}
          <Card className="card-elevated">
            <h2 className="text-xl font-semibold mb-6">Business Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={businessInfo.name}
                    onChange={(e) => handleBusinessInfoChange('name', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={businessInfo.email}
                    onChange={(e) => handleBusinessInfoChange('email', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={businessInfo.phone}
                    onChange={(e) => handleBusinessInfoChange('phone', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={businessInfo.website}
                    onChange={(e) => handleBusinessInfoChange('website', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Business Address</Label>
                <Textarea
                  id="address"
                  value={businessInfo.address}
                  onChange={(e) => handleBusinessInfoChange('address', e.target.value)}
                  className="mt-1"
                  rows={3}
                />
              </div>
            </div>
          </Card>

          {/* Branding */}
          <Card className="card-elevated">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Branding
            </h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="logo">Business Logo</Label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <Upload className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Logo
                  </Button>
                  <p className="text-sm text-muted-foreground">PNG, JPG up to 2MB</p>
                </div>
              </div>
              <div>
                <Label htmlFor="brandColor">Brand Color</Label>
                <div className="mt-2 flex items-center gap-4">
                  <input
                    type="color"
                    id="brandColor"
                    value={brandColor}
                    onChange={(e) => setBrandColor(e.target.value)}
                    className="w-12 h-12 rounded-lg border border-border cursor-pointer"
                  />
                  <div>
                    <p className="font-medium">{brandColor.toUpperCase()}</p>
                    <p className="text-sm text-muted-foreground">Used for buttons and accents on invoices</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Email Notifications */}
          <Card className="card-elevated">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Email Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified when invoices are viewed or paid</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.emailAlerts}
                  onChange={(e) => handleNotificationChange('emailAlerts', e.target.checked)}
                  className="rounded"
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Payment Reminders</p>
                  <p className="text-sm text-muted-foreground">Send automatic payment reminders</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.paymentReminders}
                  onChange={(e) => handleNotificationChange('paymentReminders', e.target.checked)}
                  className="rounded"
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Overdue Notices</p>
                  <p className="text-sm text-muted-foreground">Alert when invoices become overdue</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.overdueNotices}
                  onChange={(e) => handleNotificationChange('overdueNotices', e.target.checked)}
                  className="rounded"
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Reports</p>
                  <p className="text-sm text-muted-foreground">Receive weekly analytics summary</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.weeklyReports}
                  onChange={(e) => handleNotificationChange('weeklyReports', e.target.checked)}
                  className="rounded"
                />
              </div>
            </div>
          </Card>

          {/* Subscription */}
          <Card className="card-elevated">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Subscription Plan
            </h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-primary-light rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">Pro Plan</h3>
                    <Badge variant="default">Current</Badge>
                  </div>
                  <p className="text-muted-foreground">$39/month • Unlimited invoices & AI features</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">Next billing: Aug 15, 2024</p>
                  <p className="text-sm text-muted-foreground">Auto-renewal enabled</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button onClick={handleUpgradePlan} variant="default" className="gap-2">
                  Upgrade to Enterprise
                </Button>
                <Button onClick={handleCancelSubscription} variant="outline" className="gap-2">
                  Cancel Subscription
                </Button>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Payment Method</h4>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-5 bg-primary rounded flex items-center justify-center">
                    <span className="text-xs text-primary-foreground font-bold">VISA</span>
                  </div>
                  <span className="font-medium">•••• •••• •••• 4242</span>
                  <span className="text-muted-foreground">Expires 12/26</span>
                  <Button variant="ghost" size="sm">Update</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSave} size="lg" className="gap-2">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;