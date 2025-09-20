import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, Users, Crown, Mail, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';

interface TermsOfServicePageProps {
  onNavigate: (page: string) => void;
}

export function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <Badge className="mb-4 bg-black text-white">
            <Scale className="w-4 h-4 mr-2" />
            Terms of Service
          </Badge>
          
          <h1 className="text-4xl lg:text-5xl mb-4">
            <span className="text-yellow-500">Terms</span> of Service
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully as they govern your use of DesignerCrunch 
            and outline the rights and responsibilities of all users.
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
          {/* Important Notice */}
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> By accessing or using DesignerCrunch, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our service.
            </AlertDescription>
          </Alert>

          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                These Terms of Service ("Terms") govern your access to and use of DesignerCrunch ("Service", "Platform", "Website"), 
                operated by DesignerCrunch ("we", "us", "our"). By accessing or using our Service, you agree to be bound by these Terms.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Agreement Scope</h4>
                <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                  <li>These Terms apply to all users, including visitors, registered users, and content contributors</li>
                  <li>Additional terms may apply to specific features or services</li>
                  <li>These Terms constitute a legally binding agreement between you and DesignerCrunch</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Description of Service */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Description of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                DesignerCrunch is a platform that provides design resources, AI tool comparisons, educational content, 
                and community features for designers and developers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Our Services Include</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Free design resources and downloads</li>
                    <li>• AI tool reviews and comparisons</li>
                    <li>• Educational articles and tutorials</li>
                    <li>• Color palette generators</li>
                    <li>• Job board and career resources</li>
                    <li>• Community features and discussions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Service Availability</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Services are provided "as is" and "as available"</li>
                    <li>• We may modify or discontinue features at any time</li>
                    <li>• Temporary interruptions may occur for maintenance</li>
                    <li>• Some features may require account registration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                User Accounts & Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Account Requirements</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• You must be at least 13 years old to create an account</li>
                    <li>• Provide accurate and complete information during registration</li>
                    <li>• Maintain the security and confidentiality of your account credentials</li>
                    <li>• You are responsible for all activities under your account</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Account Responsibilities</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Keep your account information up to date</li>
                    <li>• Notify us immediately of any unauthorized use</li>
                    <li>• Use strong passwords and enable two-factor authentication when available</li>
                    <li>• Do not share your account credentials with others</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Account Termination</h4>
                  <p className="text-sm text-yellow-700">
                    You may delete your account at any time. We may suspend or terminate accounts that violate these Terms 
                    or engage in harmful activities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content and Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="w-5 h-5" />
                Content & Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Our Content</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>All content, features, and functionality on DesignerCrunch, including but not limited to text, graphics, logos, images, and software, are owned by DesignerCrunch or our licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
                  <p>You may not copy, modify, distribute, sell, or lease any part of our services or content without explicit written permission.</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">User-Generated Content</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">Content You Submit</h5>
                    <p className="text-sm text-gray-600">You retain ownership of content you create and submit, but grant us a license to use, display, and distribute it on our platform.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">Content Standards</h5>
                    <p className="text-sm text-gray-600">All submitted content must be original, legal, and not infringe on others' rights. We reserve the right to remove content that violates these standards.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">License Grant</h5>
                    <p className="text-sm text-gray-600">By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with our services.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Resource Licensing</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 border border-green-200 rounded-lg">
                    <h5 className="font-medium text-green-800">Free Resources</h5>
                    <p className="text-sm text-green-700">Most resources are free for commercial use as indicated by their license.</p>
                  </div>
                  <div className="p-3 border border-yellow-200 rounded-lg">
                    <h5 className="font-medium text-yellow-800">Premium Resources</h5>
                    <p className="text-sm text-yellow-700">Some resources require payment or subscription for commercial use.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Acceptable Use Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-600 mb-3">✓ Acceptable Use</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Use our service for legitimate design and creative purposes</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Provide accurate information</li>
                    <li>• Follow community guidelines</li>
                    <li>• Report violations or abuse</li>
                    <li>• Engage respectfully with other users</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600 mb-3">✗ Prohibited Activities</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Upload malicious software or viruses</li>
                    <li>• Engage in harassment or abusive behavior</li>
                    <li>• Violate copyright or intellectual property rights</li>
                    <li>• Share inappropriate or offensive content</li>
                    <li>• Attempt to hack or compromise our systems</li>
                    <li>• Use automated tools to scrape content</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Violation Consequences</h4>
                <p className="text-sm text-red-700">
                  Violations may result in content removal, account suspension, or permanent ban. 
                  Serious violations may be reported to appropriate authorities.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection, use, and protection of your personal information 
                is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-yellow-600 hover:underline text-sm"
                >
                  Read our Privacy Policy →
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Disclaimers & Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Service Disclaimers</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Our service is provided "as is" without warranties of any kind</li>
                  <li>• We do not guarantee uninterrupted or error-free service</li>
                  <li>• Content accuracy and availability are not guaranteed</li>
                  <li>• Third-party links and resources are provided for convenience only</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Limitation of Liability</h4>
                <p className="text-sm text-gray-600">
                  To the maximum extent permitted by law, DesignerCrunch shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to loss of 
                  profits, data, or other intangible losses.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Resource Quality</h4>
                <p className="text-sm text-gray-600">
                  While we strive to curate high-quality resources, we cannot guarantee the quality, accuracy, 
                  or suitability of user-submitted content. Users download and use resources at their own risk.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">By You</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• You may stop using our service at any time</li>
                    <li>• Delete your account through account settings</li>
                    <li>• Contact us for complete data removal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">By Us</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• We may suspend accounts for Terms violations</li>
                    <li>• We may discontinue service with notice</li>
                    <li>• Emergency suspension may occur without notice</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Effect of Termination</h4>
                <p className="text-sm text-gray-600">
                  Upon termination, your right to use the service ceases immediately. Provisions regarding 
                  intellectual property, disclaimers, and limitations of liability will survive termination.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                upon posting on this page unless otherwise specified.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Notification of Changes</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Material changes will be prominently displayed on our website</li>
                  <li>• Registered users may receive email notifications</li>
                  <li>• Continued use constitutes acceptance of updated Terms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Governing Law & Disputes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Applicable Law</h4>
                <p className="text-sm text-gray-600">
                  These Terms are governed by and construed in accordance with applicable laws, 
                  without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Dispute Resolution</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• We encourage resolving disputes through direct communication</li>
                  <li>• Contact our support team for assistance with any issues</li>
                  <li>• Formal disputes may be subject to binding arbitration</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-2 text-sm">
                <div><strong>Email:</strong> legal@designercrunch.com</div>
                <div><strong>Subject Line:</strong> "Terms of Service Inquiry"</div>
                <div><strong>Response Time:</strong> Within 5 business days</div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Questions Welcome:</strong> We're happy to clarify any aspect of these Terms. 
                  Don't hesitate to reach out if you need clarification.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Severability */}
          <Card>
            <CardHeader>
              <CardTitle>Miscellaneous</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Severability</h4>
                  <p className="text-sm text-gray-600">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Entire Agreement</h4>
                  <p className="text-sm text-gray-600">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and DesignerCrunch regarding the use of our service.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Assignment</h4>
                  <p className="text-sm text-gray-600">
                    You may not assign or transfer your rights under these Terms. We may assign our rights and obligations under these Terms without restriction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}