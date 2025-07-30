type Props = {
    children: React.ReactNode
}

export default function Tools({children}: Props) {

    return (
        <div className="tools-bar">
            {children}
        </div>
    )
}