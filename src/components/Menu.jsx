export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      {/* Menu Trigger Button */}
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-50 fixed top-6 right-6 md:top-12 md:right-12 p-3 bg-indigo-950 border-indigo-900/50 w-8 h-8 md:w-12 md:h-12 rounded-xl backdrop-blur-sm flex flex-col justify-center items-center gap-1.5 transition-all hover:bg-slate-800"
      >
        <div className={`bg-white h-0.5 rounded-full w-4 md:w-6 transition-all ${menuOpened ? "rotate-45 translate-y-2" : ""}`} />
        <div className={`bg-white h-0.5 rounded-full w-4 md:w-6 transition-all ${menuOpened ? "opacity-0" : ""}`} />
        <div className={`bg-white h-0.5 rounded-full w-4 md:w-6 transition-all ${menuOpened ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Menu Overlay */}
      <div
        className={`z-40 fixed top-0 right-0 bottom-0 bg-slate-950/95 backdrop-blur-2xl border-l border-indigo-900/30 transition-all duration-500 overflow-hidden flex flex-col justify-center items-center ${
          menuOpened ? "w-full md:w-1/3" : "w-0"
        }`}
      >
        <div className="flex flex-col gap-10">
          <MenuButton label="About" onClick={() => { onSectionChange(0); setMenuOpened(false); }} />
          <MenuButton label="Skills" onClick={() => { onSectionChange(1); setMenuOpened(false); }} />
          <MenuButton label="Projects" onClick={() => { onSectionChange(2); setMenuOpened(false); }} />
          <MenuButton label="Contact" onClick={() => { onSectionChange(3); setMenuOpened(false); }} />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-4xl font-black uppercase tracking-widest text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
    >
      {label}
    </button>
  );
};