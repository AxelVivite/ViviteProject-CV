interface ChevronRightIconProps {
  className: string;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default ChevronRightIcon;
