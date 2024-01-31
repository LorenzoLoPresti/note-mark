// Se nell'index.ts della cartella main abbiamo settato la proprietà titleBarStyle: 'hidden',
// come proprietà della window
// L'header potrà essere trascinato
const MacDraggableTopBar = () => {
  return <header className="absolute inset-0 h-8 bg-transparent" />;
};

export default MacDraggableTopBar;
