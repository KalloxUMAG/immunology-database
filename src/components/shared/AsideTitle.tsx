type AsideTitleProps = {
    title: string
}

const AsideTitle: React.FC<AsideTitleProps> = ({title}) => {
    return(
        <h2 className="flex items-center px-4 h-xl text-sm font-bold text-gray-500">{title}</h2>
    )
}

export default AsideTitle;
