import { LucideIcon } from "lucide-react";

export default function FeatureCard({ Icon, title, desc }: { Icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center">
      <div className="bg-amber-500/10 p-3 rounded-xl mb-4">
        <Icon className="text-amber-500" size={24} />
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}