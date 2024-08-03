
const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string, icon: React.ReactNode, position: string, handleClick?: () => void, otherClasses?: string
}) => {
    return (
        <button className="relative inline-flex h-12 w-full overflow-hidden rounded-[6px] p-[1px] focus:outline-none md:w-60 md:mt-10">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B68AF7_0%,#393BB2_50%,#B68AF7_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[6px] bg-slate-950 px-6 text-md font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses} `}>
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    )
}

export default MagicButton