import { LucideIcon } from "lucide-react";

interface UserTypeCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function UserTypeCard({ Icon, title, description }: UserTypeCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow ">
      {/* Dark Circle Icon Container */}
      <div className="bg-[#1e293b] w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
        <Icon className="text-white" size={32} />
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      
      <p className="text-gray-500 leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
}