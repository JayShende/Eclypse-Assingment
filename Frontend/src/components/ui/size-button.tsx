interface SizeButtonProps {
  size: string;
  selected: boolean;
  toggleSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const SizeButton = ({ size, selected, toggleSelect }: SizeButtonProps) => {
  return (
    <>
      {selected ? (
        <div
          className="w-20 h-12 px-8 py-3.5 rounded bg-neutral-900 flex"
          onClick={() => {
            toggleSelect(!selected);
          }}
        >
          <span className="text-neutral-100 font-Poppins justify-center items-center cursor-pointer">
            {size}
          </span>
        </div>
      ) : (
        <div
          className="w-20 h-12 px-8 py-3.5 rounded bg-zinc-300 flex cursor-pointer"
          onClick={() => {
            toggleSelect(!selected);
          }}
        >
          <span className="text-neutral-500 font-Poppins justify-center items-center">
            {size}
          </span>
        </div>
      )}
    </>
  );
};

export default SizeButton;
