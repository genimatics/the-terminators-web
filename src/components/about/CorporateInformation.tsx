import {
  Award,
  BadgeCheck,
  Building2,
  Calendar,
  FileText,
  Shield,
  User,
} from 'lucide-react';
import React from 'react';

const CorporateInfoSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Building2 className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Corporate Information
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            A leading organization committed to excellence and quality since 2003
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    Chief Executive Officer
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    Engr. Ahmed Zubair Siddiqui
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-50">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    Year of Establishment
                  </h3>
                  <p className="mb-1 text-xl font-bold text-gray-900">
                    January 2003
                  </p>
                  <p className="text-sm text-gray-600">
                    Sole Proprietorship
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-50">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      NTN
                    </h3>
                    <p className="text-xl font-bold text-gray-900">
                      1596512-7
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      STRN
                    </h3>
                    <p className="text-xl font-bold text-gray-900">
                      17 00 159512 19
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    PEC Registration
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    C4/E-6502
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Pakistan Engineering Council
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-50">
                  <Building2 className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    KCCI Membership
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    89310
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Karachi Chamber of Commerce & Industry
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50">
                  <Award className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    ISO Certifications
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-lg bg-indigo-50/50 p-3">
                      <BadgeCheck className="h-5 w-5 text-indigo-600" />
                      <div>
                        <p className="font-semibold text-gray-900">ISO 9001:2015</p>
                        <p className="text-sm text-gray-600">Quality Management System</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg bg-green-50/50 p-3">
                      <BadgeCheck className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-900">ISO 14001:2015</p>
                        <p className="text-sm text-gray-600">Environmental Management System</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg bg-orange-50/50 p-3">
                      <BadgeCheck className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-semibold text-gray-900">ISO 45001:2018</p>
                        <p className="text-sm text-gray-600">Occupational Health & Safety</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats - Centered */}
        {/* <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div>
                <div className="mb-2 text-4xl font-bold">21+</div>
                <p className="text-blue-100">Years of Excellence</p>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold">5</div>
                <p className="text-blue-100">Accreditations</p>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold">100%</div>
                <p className="text-blue-100">Compliance</p>
              </div>
            </div>
            <div className="mt-8 border-t border-blue-400/30 pt-6 text-center">
              <p className="text-blue-100">
                Committed to delivering excellence through quality, safety, and environmental responsibility since 2003
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CorporateInfoSection;
