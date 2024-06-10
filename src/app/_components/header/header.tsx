export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex justify-between items-center">
        <span>Logo</span>
        <span>nav</span>
        <span>auth</span>
      </div>
    </header>
  );
};
