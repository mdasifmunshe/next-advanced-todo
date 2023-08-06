import UserModal from '../Popover/UserModal';
import Slider from '@/components/Slider';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mb-px flex h-16 items-center justify-between">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <Slider />
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            {/* <UserMenu /> */}
            <UserModal />
          </div>
        </div>
      </div>
    </header>
  );
}
