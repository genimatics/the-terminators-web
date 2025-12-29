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
    title: 'Admin/Accounts Executive',
    name: 'Ms. Komal Anwaar',
    icon: 'user',
  },
  {
    title: 'Chief Strategy Officer',
    name: 'Mr. Khurram Illahi',
    icon: 'users',
  },
  {
    title: 'COO (Electrical)',
    name: 'Engr. Anis Ahmed',
    icon: 'settings',
  },
];

const AboutTeam: React.FC = () => {
  const getIcon = (iconType: 'user' | 'users' | 'settings') => {
    switch (iconType) {
      case 'user':
        return <User className="h-8 w-8 text-white" />;
      case 'users':
        return <Users className="h-8 w-8 text-white" />;
      case 'settings':
        return <Settings className="h-8 w-8 text-white" />;
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${IMAGES.ABOUT.BG}')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-800 lg:text-5xl">
              About Us And Our Leadership
            </h1>
            <p className="mb-12 text-base leading-relaxed text-gray-700 lg:text-lg">
              The management of The Terminators comprises of professional engineers and skilled
              technicians with hands on experience of several years in all facets of Electrical systems
              fabrication, installation, testing and commissioning
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {leadershipData.map((member, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-sm bg-gray-800">
                    {getIcon(member.icon)}
                  </div>

                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-gray-800">
                      {member.title}
                    </h3>
                    <p className="text-sm text-gray-700">
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
