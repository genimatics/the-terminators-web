import { Settings, User, Users } from 'lucide-react';
import React from 'react';
import { IMAGES } from '@/constants/images';

type LeadershipMember = {
  title: string;
  name: string;
  icon: 'user' | 'users' | 'settings';
};

const leadershipData: LeadershipMember[] = [
  {
    title: 'Chief Executive Officer',
    name: 'Engr. Ahmed Zubair',
    icon: 'user',
  },
  {
    title: 'Chief Finance Officer',
    name: 'Engr. Mohammad Shoaib',
    icon: 'users',
  },
  {
    title: 'COO (Mechanical)',
    name: 'Engr. Syed Viqar Hussain',
    icon: 'settings',
  },
  {
    title: 'COO (Electrical)',
    name: 'Engr. Anis Ahmed',
    icon: 'settings',
  },
  {
    title: 'Chief Strategy Officer',
    name: 'Mr. Khurram Illahi',
    icon: 'users',
  },
  {
    title: 'Admin/Accounts Executive',
    name: 'Ms. Komal Anwaar',
    icon: 'user',
  },
];

const AboutTeam: React.FC = () => {
  const getIcon = (iconType: 'user' | 'users' | 'settings') => {
    switch (iconType) {
      case 'user':
        return <User className="h-7 w-7 text-white" />;
      case 'users':
        return <Users className="h-7 w-7 text-white" />;
      case 'settings':
        return <Settings className="h-7 w-7 text-white" />;
    }
  };

  return (
    <section className="relative w-full overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${IMAGES.ABOUT.BG}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Our Leadership
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {leadershipData.map((member, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-gray-900/80">
                    {getIcon(member.icon)}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {member.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {member.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
