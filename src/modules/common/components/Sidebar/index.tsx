import "./styles.css";

interface ISidebarProps {
  user: number;
  progress: number;
}

export const Sidebar = ({ user, progress }: ISidebarProps) => {
  return (
    <div className="sidebar">
      <h3>CardDex</h3>
      <p>Collect</p>
      <div>
        <button>Dex catalogue</button>
        <button>My collection</button>
        <button>Shop</button>
      </div>
      <footer>Free plan</footer>
    </div>
  );
};
