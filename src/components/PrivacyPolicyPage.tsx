import React from 'react';
import { Shield, Eye, Lock, Database, Mail, Users, FileText, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <Badge className="mb-4 bg-black text-white">
            <Shield className="w-4 h-4 mr-2" />
            Privacy Policy
          </Badge>
          
          <h1 className="text-4xl lg:text-5xl mb-4">
            Your <span className="text-yellow-500">Privacy</span> Matters
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to protecting your privacy and being transparent about how we collect, 
            use, and protect your personal information.
          </p>
          
          <div className="mt-6 text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Last updated: December 19, 2024
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Quick Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Quick Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-600 mb-2">✓ What We Do</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Collect minimal necessary data</li>
                    <li>• Use secure encryption</li>
                    <li>• Respect your choices</li>
                    <li>• Keep data only as long as needed</li>
                    <li>• Give you control over your data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600 mb-2">✗ What We Don't Do</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sell your personal data</li>
                    <li>• Share data with third parties unnecessarily</li>
                    <li>• Track you across other websites</li>
                    <li>• Store sensitive financial information</li>
                    <li>• Send unsolicited marketing emails</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Information You Provide</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">Account Information</h5>
                    <p className="text-sm text-gray-600">Name, email address, profile information when you create an account or subscribe to our newsletter.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">Content Submissions</h5>
                    <p className="text-sm text-gray-600">Resources, articles, comments, and other content you submit to our platform.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">Communication</h5>
                    <p className="text-sm text-gray-600">Messages you send us through contact forms, support requests, or direct communication.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Information We Collect Automatically</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h5 className="font-medium">Usage Data</h5>
                    <p className="text-sm text-gray-600">Pages visited, time spent, features used, and general usage patterns to improve our service.</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h5 className="font-medium">Technical Information</h5>
                    <p className="text-sm text-gray-600">IP address, browser type, device information, and operating system for security and optimization.</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h5 className="font-medium">Cookies & Analytics</h5>
                    <p className="text-sm text-gray-600">We use essential cookies and privacy-focused analytics to understand how our site is used.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Primary Uses</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      Provide and improve our services
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      Send newsletters and updates (with your consent)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      Respond to your inquiries and support requests
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      Process and display submitted content
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Secondary Uses</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Analyze usage patterns to improve user experience
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Prevent fraud and ensure platform security
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Comply with legal obligations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Generate anonymized insights and statistics
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Information Sharing & Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">We DO NOT sell your personal data</h4>
                <p className="text-sm text-green-700">Your personal information is never sold to third parties for marketing or any other purposes.</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Limited Sharing Scenarios</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">Service Providers</h5>
                    <p className="text-sm text-gray-600">Trusted partners who help us operate our service (hosting, email delivery, analytics) under strict confidentiality agreements.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">Legal Requirements</h5>
                    <p className="text-sm text-gray-600">When required by law, court order, or to protect the rights and safety of our users and community.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">Public Content</h5>
                    <p className="text-sm text-gray-600">Content you choose to make public (articles, comments, profiles) is visible to other users as intended.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Data Security & Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Security Measures</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure cloud hosting with regular backups</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                    <li>• Monitoring for suspicious activity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Data Retention</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Account data: Until account deletion</li>
                    <li>• Usage logs: 12 months maximum</li>
                    <li>• Email data: Until unsubscribed</li>
                    <li>• Support tickets: 2 years</li>
                    <li>• Anonymous analytics: Indefinitely</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Your Rights & Choices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Your Data Rights</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      Access your personal data
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      Correct inaccurate information
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      Delete your account and data
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      Export your data
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      Opt-out of marketing communications
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">How to Exercise Rights</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h5 className="font-medium">Email Us</h5>
                      <p className="text-sm text-gray-600">Contact privacy@designercrunch.com</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h5 className="font-medium">Account Settings</h5>
                      <p className="text-sm text-gray-600">Manage preferences in your account dashboard</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h5 className="font-medium">Newsletter</h5>
                      <p className="text-sm text-gray-600">Unsubscribe links in every email</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies & Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Cookies & Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">We use cookies and similar technologies to enhance your experience:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Essential Cookies</h4>
                  <p className="text-sm text-gray-600 mb-2">Required for the website to function properly:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Authentication and security</li>
                    <li>• Shopping cart and preferences</li>
                    <li>• Error reporting and debugging</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600 mb-2">Help us understand how you use our site:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Page views and popular content</li>
                    <li>• User flow and navigation patterns</li>
                    <li>• Performance and error tracking</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> We use privacy-focused analytics that don't track you across websites or store personal identifiers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our service is not directed to children under 13 years of age. We do not knowingly collect personal 
                information from children under 13. If you become aware that a child has provided us with personal 
                information, please contact us so we can take appropriate action.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or applicable law. 
                We will notify you of any material changes by:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Posting the updated policy on this page</li>
                <li>• Sending an email notification to registered users</li>
                <li>• Displaying a prominent notice on our website</li>
              </ul>
              <p className="text-gray-600">
                Your continued use of our service after changes take effect constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>Email:</strong> privacy@designercrunch.com</div>
                <div><strong>Response Time:</strong> Within 48 hours</div>
                <div><strong>Data Protection Officer:</strong> Available upon request</div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Quick Response Guarantee:</strong> We take privacy seriously and commit to responding to all 
                  privacy-related inquiries within 48 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}