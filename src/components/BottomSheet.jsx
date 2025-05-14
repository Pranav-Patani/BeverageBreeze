function BottomSheet({ children, show }) {
  return (
    <div className={show ? "bottom-sheet__visible" : "bottom-sheet__hidden"}>
      {children}
    </div>
  );
}

export default BottomSheet;
